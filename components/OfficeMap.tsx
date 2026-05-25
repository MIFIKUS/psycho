import React, { useEffect, useRef, useState } from 'react';

const OFFICE_MAP_EMBED =
  'https://yandex.by/map-widget/v1/?ll=131.900047%2C43.116648&z=16&mode=poi&poi%5Bpoint%5D=131.900047%2C43.116648&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D135590936399';

const OFFICE_LAT = 43.116648;
const OFFICE_LON = 131.900047;
const OFFICE_ZOOM = 16;
const OFFICE_ORG_ID = '135590936399';
const OFFICE_NAME = 'Психолог Елена Смирнова';

type YMapsPlacemark = {
  geometry: { getCoordinates: () => [number, number] };
};

type YMapsMap = {
  geoObjects: { add: (obj: unknown) => void };
  setCenter: (center: [number, number], zoom: number, options?: { duration: number }) => void;
  container: { fitToViewport: () => void };
  destroy: () => void;
};

type YMapsApi = {
  ready: (callback: () => void) => void;
  Map: new (
    element: HTMLElement,
    state: { center: [number, number]; zoom: number; controls: string[] },
    options?: { suppressMapOpenBlock?: boolean }
  ) => YMapsMap;
  Placemark: new (
    coords: [number, number],
    properties: { hintContent: string; balloonContent: string; iconContent?: string },
    options: { preset: string }
  ) => unknown;
  findOrganization: (id: string) => Promise<YMapsPlacemark>;
};

declare global {
  interface Window {
    ymaps?: YMapsApi;
  }
}

const loadYandexMaps = (): Promise<YMapsApi> =>
  new Promise((resolve, reject) => {
    if (window.ymaps) {
      resolve(window.ymaps);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-yandex-maps]');
    if (existing) {
      existing.addEventListener('load', () => (window.ymaps ? resolve(window.ymaps) : reject()));
      existing.addEventListener('error', reject);
      return;
    }

    const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY as string | undefined;
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${apiKey ? `&apikey=${apiKey}` : ''}`;
    script.async = true;
    script.dataset.yandexMaps = 'true';
    script.onload = () => (window.ymaps ? resolve(window.ymaps) : reject());
    script.onerror = reject;
    document.head.appendChild(script);
  });

const mapSizeClass = 'w-full h-full min-h-0';

const OfficeMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<YMapsMap | null>(null);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | undefined;

    const fitMap = () => {
      try {
        mapRef.current?.container.fitToViewport();
      } catch {
        /* ignore */
      }
    };

    loadYandexMaps()
      .then((ymaps) => {
        if (cancelled || !containerRef.current) return;

        ymaps.ready(() => {
          if (cancelled || !containerRef.current) return;

          const map = new ymaps.Map(
            containerRef.current,
            {
              center: [OFFICE_LAT, OFFICE_LON],
              zoom: OFFICE_ZOOM,
              controls: ['zoomControl'],
            },
            { suppressMapOpenBlock: true }
          );
          mapRef.current = map;

          const centerOnPoint = (coords: [number, number]) => {
            map.setCenter(coords, OFFICE_ZOOM, { duration: 0 });
          };

          centerOnPoint([OFFICE_LAT, OFFICE_LON]);
          fitMap();

          if (containerRef.current) {
            resizeObserver = new ResizeObserver(fitMap);
            resizeObserver.observe(containerRef.current);
          }

          window.addEventListener('resize', fitMap);
          window.addEventListener('orientationchange', fitMap);

          ymaps
            .findOrganization(OFFICE_ORG_ID)
            .then((org) => {
              if (cancelled) return;
              map.geoObjects.add(org);
            })
            .catch(() => {
              if (cancelled) return;
              const placemark = new ymaps.Placemark(
                [OFFICE_LAT, OFFICE_LON],
                {
                  hintContent: OFFICE_NAME,
                  balloonContent: OFFICE_NAME,
                  iconContent: OFFICE_NAME,
                },
                { preset: 'islands#redStretchyIcon' }
              );
              map.geoObjects.add(placemark);
              centerOnPoint([OFFICE_LAT, OFFICE_LON]);
            });
        });
      })
      .catch(() => {
        if (!cancelled) setUseIframeFallback(true);
      });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      window.removeEventListener('resize', fitMap);
      window.removeEventListener('orientationchange', fitMap);
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, []);

  if (useIframeFallback) {
    return (
      <iframe
        title={`Карта: ${OFFICE_NAME}`}
        src={OFFICE_MAP_EMBED}
        className={`${mapSizeClass} border-0 block`}
        loading="lazy"
        allowFullScreen
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={mapSizeClass}
      aria-label={`Карта: ${OFFICE_NAME}`}
    />
  );
};

export default OfficeMap;

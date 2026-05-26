import React, { useState } from 'react';
import OfficeMap from './OfficeMap';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    {
      id: 'telegram',
      linkText: 'Написать в Телеграм',
      copyValue: '@ElenaSm_VL',
      link: 'https://t.me/ElenaSm_VL',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      ),
      hoverBg: 'hover:bg-slate-50/90',
      hoverBorder: 'hover:border-slate-200/60',
      color: 'text-slate-700',
      type: 'link',
      openInNewTab: true,
    },
    {
      id: 'max',
      linkText: 'Написать в MAX',
      copyValue: '@ElenaSm_VL',
      link: 'https://max.ru/u/f9LHodD0cOIF8KDalBgHse9t07AypsJWSbWppzx1pjr-YfYIaA-licSejks',
      icon: (
        <img
          src="/max_logo.png"
          alt=""
          className="w-5 h-5 object-contain rounded-sm"
          aria-hidden="true"
        />
      ),
      hoverBg: 'hover:bg-slate-50/90',
      hoverBorder: 'hover:border-slate-200/60',
      color: 'text-slate-700',
      type: 'link',
      openInNewTab: true,
    },
    {
      id: 'whatsapp',
      linkText: 'Написать в WhatsApp',
      copyValue: '+7 (914) 707-84-35',
      link: 'https://wa.me/79147078435',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.123.555 4.194 1.61 6.041l-1.71 6.244 6.388-1.675a11.83 11.83 0 005.759 1.503h.005c6.635 0 12.046-5.412 12.049-12.05.002-3.217-1.25-6.242-3.522-8.514z" />
        </svg>
      ),
      hoverBg: 'hover:bg-slate-50/90',
      hoverBorder: 'hover:border-slate-200/60',
      color: 'text-slate-700',
      type: 'link',
      openInNewTab: true,
    },
    {
      id: 'phone',
      linkText: 'Позвонить',
      copyValue: '+7 (914) 707-84-35',
      link: 'tel:+79147078435',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      hoverBg: 'hover:bg-slate-50/90',
      hoverBorder: 'hover:border-slate-200/60',
      color: 'text-slate-700',
      type: 'link',
      openInNewTab: false,
    },
  ];

  const renderContactMethod = (method: (typeof contactMethods)[number]) => {
    const isCopy = method.type === 'copy';

    return (
      <div key={method.id} className="relative group">
        <a
          href={method.link}
          onClick={(e) => {
            if (isCopy) {
              e.preventDefault();
              handleCopy(method.copyValue, method.id);
            }
          }}
          target={method.openInNewTab ? "_blank" : undefined}
          rel={method.openInNewTab ? "noopener noreferrer" : undefined}
          className={`flex items-center justify-between py-3 px-4 md:py-3.5 md:px-5 bg-[#faf9f6] border border-slate-200/50 shadow-md shadow-slate-200/35 ring-1 ring-slate-900/5 rounded-xl md:rounded-2xl transition-all duration-500 hover:shadow-md hover:shadow-slate-200/25 ${method.hoverBg} ${method.hoverBorder} cursor-pointer`}
        >
          <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
            <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all bg-slate-50 group-hover:bg-white group-hover:shadow-inner shrink-0 ${method.color}`}>
              {method.icon}
            </div>
            <div className="overflow-hidden">
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium text-slate-800 whitespace-nowrap">
                  {method.linkText}
                </p>
                {isCopy && (
                  <span className="text-sm text-slate-500 mt-1 font-normal">
                    {copied === method.id ? '✅ Скопировано!' : 'Нажмите, чтобы скопировать'}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all text-slate-700 shrink-0 ml-2">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-16 lg:p-24 shadow-sm border border-slate-100 flex flex-col gap-10 md:gap-12">
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 leading-snug max-w-4xl mx-auto">
          Провожу очные (офлайн) и онлайн консультации
        </p>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-stretch">
        <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:min-h-0 lg:h-full">
          <p className="text-base md:text-lg font-normal text-slate-700 leading-relaxed max-w-md shrink-0">
            Офлайн консультации проходят по адресу:
            <br />
            г. Владивосток, ул. Всеволода Сибирцева, д. 15
          </p>

          <p className="text-lg md:text-xl font-bold text-slate-700 max-w-md mx-0 shrink-0">
            тел.{'\u00A0'}
            <a href="tel:+79147078435" className="hover:text-slate-900 transition-colors">
              +7 914 707 84 35
            </a>
          </p>

          <div className="w-full h-[min(56vw,220px)] min-h-[180px] sm:h-[min(50vw,260px)] sm:min-h-[200px] md:h-[360px] md:min-h-[360px] lg:flex-1 lg:min-h-0 lg:h-full overflow-hidden border border-slate-100 bg-slate-50 mx-auto lg:mx-0 rounded-2xl md:rounded-sm grayscale">
            <OfficeMap />
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col">
          <div id="contact" className="scroll-mt-28 mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 leading-tight mb-6 md:mb-8">
              Связаться со мной:
            </h3>
            <ol className="list-decimal list-outside pl-6 space-y-3 text-slate-700 text-base md:text-lg leading-relaxed marker:font-medium marker:text-slate-900">
              <li className="pl-1">Выберите удобный для вас способ связи</li>
              <li className="pl-1">В сообщении укажите формат встречи (очно/онлайн, встречу-знакомство/ консультация)</li>
              <li className="pl-1 font-medium">Отправьте сообщение, я обязательно вам отвечу!</li>
            </ol>
          </div>
          <div className="grid gap-3 md:gap-4">
            {contactMethods.map((method) => renderContactMethod(method))}
          </div>
        </div>
        </div>
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 pt-4 md:pt-6 border-t border-slate-100">
          Изменения начинаются с первого шага!
        </p>
      </div>
    </div>
  );
};

export default Contact;
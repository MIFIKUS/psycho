import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out h-24 flex items-center ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center w-full">
        <a
          href="#"
          className={`text-xl md:text-2xl font-serif font-semibold tracking-tight transition-colors duration-500 select-none ${
            scrolled ? 'text-sage-800' : 'text-slate-900'
          }`}
          style={{
            transform: 'translateZ(0)',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility',
          }}
        >
          Елена <span className="font-light italic">Смирнова</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

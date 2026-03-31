import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Срабатывание чуть раньше для плавности
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Отзывы', href: '#about' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out h-24 flex items-center ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ 
        transform: 'translateZ(0)', // Форсируем композитный слой для всей шапки
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
        <a 
          href="#" 
          className={`text-xl md:text-2xl font-serif font-semibold tracking-tight transition-colors duration-500 select-none ${
            scrolled ? 'text-sage-800' : 'text-slate-900'
          }`}
          style={{ 
            transform: 'translateZ(0)',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility'
          }}
        >
          Елена <span className="font-light italic">Смирнова</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[12px] font-medium transition-colors duration-500 uppercase tracking-[0.2em] hover:opacity-60 ${
                scrolled ? 'text-slate-600' : 'text-slate-800'
              }`}
              style={{ transform: 'translateZ(0)' }}
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-sage-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-2xl border-b border-stone-100 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex flex-col p-10 space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-slate-800 hover:text-sage-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-sage-800 text-white py-5 rounded-2xl text-center text-xs font-bold uppercase tracking-widest"
          >
            Записаться на сессию
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
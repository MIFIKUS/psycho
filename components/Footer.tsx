
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-800 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-10 md:gap-16 mb-10 md:mb-12">
          <div className="col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">Елена Смирнова</h3>
            <p className="text-sage-200/70 max-w-sm leading-relaxed font-light italic text-sm">
              «Я знаю, как выйти из "Дня сурка", начать жить по-другому и найти баланс между Хочу и Надо!»
            </p>
            <div className="flex gap-6">
               <a href="https://t.me/ElenaSm_VL" target="_blank" className="text-[10px] uppercase tracking-widest hover:text-sage-200 transition-colors">Telegram</a>
               <a href="https://wa.me/79147078435" target="_blank" className="text-[10px] uppercase tracking-widest hover:text-sage-200 transition-colors">WhatsApp</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[9px] text-white/40">Навигация</h4>
            <ul className="space-y-3 text-xs text-sage-100/80">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[9px] text-white/40">Локация</h4>
            <p className="text-xs text-sage-100/80 leading-relaxed font-light">
              Владивосток, <br /> Всеволода Сибирцева, 15 <br /><br />
              Прием очно и Online
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-sage-400/60">
            © {new Date().getFullYear()} Елена Смирнова · Изменения начинаются здесь
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

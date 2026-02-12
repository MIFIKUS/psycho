
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-base md:text-xl font-serif italic text-sage-800/80 mb-2">О специалисте</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-8 md:mb-10 leading-tight">
            Здравствуйте, я <span className="italic font-light text-sage-800">Елена Смирнова</span>
          </h3>
          
          <div className="space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-light">
            <p>
              В психологии я уже 13 лет, из которых более 10 лет посвящены плотной практике с людьми. Моя миссия — помогать взрослым находить выход из «Дня сурка» и обретать ясность.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-4">
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-serif text-sage-800">13 лет</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">в психологии</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-serif text-sage-800">10+ лет</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Частной практики</div>
              </div>
            </div>

            <p className="border-l-2 border-sage-100 pl-6 md:pl-8 italic text-slate-500">
              "Со мной вам гарантированы комфортное общение, безопасность и глубокая работа над решением внутренних конфликтов."
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
              {['Тревожность и самооценка', 'Трудности в отношениях', 'Проживание сложных эмоций', 'Поиск смысла и баланса'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 bg-sage-800 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative p-4 max-w-md mx-auto lg:max-w-none">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                src="/pic2.jpg" 
                alt="Елена Смирнова - Профессиональная психологическая помощь" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-stone-100 rounded-full -z-10 animate-pulse-slow hidden md:block" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-white px-8 py-6 rounded-2xl shadow-xl border border-stone-50 whitespace-nowrap">
              <p className="text-xl md:text-2xl font-serif text-sage-800 mb-1">Онлайн и офлайн</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">консультации</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

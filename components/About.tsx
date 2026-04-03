
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 order-2 lg:order-2">
          <h3 className="text-xl md:text-4xl font-serif italic text-sage-800/80 mb-2">
            Успешно работаю по запросам:
          </h3>
          <br/>

          <ul className="text-xl md:text-6xl text-slate-700 leading-relaxed space-y-2">
            {[
              '• Снизить тревожность, страхи, самокритику',
              '• Укрепить самооценку, опору на себя',
              '• Справиться с потоком навязчивых мыслей',
              '• Справиться с трудными эмоциями (злость, обида, вина, стыд, печаль, ревность)',
              '• Гармонизировать эмоциональное состояние',
              '• Наладить отношения',
              '• Определиться с выбором и принять решение',
              '• Выйти из прокрастинации',
            ].map((item) => (
              <li key={item} className="flex items-start ">
                <span
                  className="text-xl md:text-5xl text-slate-700 leading-relaxed"
                  aria-hidden="true"
                />
                <span className="text-xl md:text-2xl text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>


          <div className="mt-8 flex justify-center">
            <a 
              href="#contact" 
              className="bg-sage-800 text-white px-12 py-5 rounded-[18px] text-[13px] font-medium tracking-widest uppercase hover:bg-slate-700 transition-colors shadow-lg shadow-sage-800/10 hover:shadow-sage-800/20 text-center"
            >
              Записаться
            </a>

          </div>
        </div>
        
        <div className="w-full h-full lg:h-1/1 lg:w-1/2 order-1 lg:order-1">
          <div className="relative p-4 w-full">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
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

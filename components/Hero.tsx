import React, { useMemo } from 'react';

const Hero: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 10 + 15}s`,
      delay: `${Math.random() * 5}s`,
      twinkleDuration: `${Math.random() * 3 + 2}s`
    }));
  }, []);

  return (
    <div className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-[#faf9f6]">
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animation: `float ${star.duration} infinite ease-in-out ${star.delay}, twinkle ${star.twinkleDuration} infinite ease-in-out`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#f4f3ef] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.4em] text-sage-800/60 border-b border-sage-800/20 pb-1">
              Владивосток · Online · Гештальт
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-slate-900 leading-[1.05] tracking-tight">
              Изменения <br /> 
              начинаются <span className="italic font-light text-sage-800">здесь.</span>
            </h1>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-slate-600 font-serif italic">Елена Смирнова</p>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-light">
              Психолог, гештальт-консультант, игропрактик. Помогаю выйти из привычного сценария и обрести внутреннюю опору.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a 
              href="#contact" 
              className="bg-sage-800 text-white px-12 py-5 rounded-full text-[13px] font-medium tracking-widest uppercase hover:bg-slate-700 transition-colors shadow-lg shadow-sage-800/10 hover:shadow-sage-800/20 text-center"
            >
              Записаться
            </a>
            <a 
              href="https://wa.me/79147078435" 
              target="_blank"
              className="flex items-center justify-center gap-3 px-12 py-5 rounded-full border border-stone-200 text-[13px] font-medium tracking-widest uppercase hover:bg-white hover:border-sage-800/30 transition-all text-slate-800"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="/pic1.jpg" 
              alt="Психолог Елена Смирнова - Гештальт-терапевт во Владивостоке" 
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sage-50 rounded-full blur-3xl -z-10 opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

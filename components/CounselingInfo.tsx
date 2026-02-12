
import React from 'react';

const tasks = [
  'Снижение тревожности, самокритики, депрессии',
  'Укрепление самооценки, уверенности, опор на себя',
  'Уменьшение потока навязчивых мыслей, неконтролируемых эмоций',
  'Гармонизация состояния',
  'Налаживание отношений с собой, с партнером, с окружающими',
  'Решение внутренних и внешних конфликтов',
  'Определение с выбором и принятие решений'
];

const CounselingInfo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="bg-white rounded-[3rem] p-8 md:p-20 shadow-sm border border-stone-100">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sage-800/60 mb-6">Профессиональная поддержка</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">
                Консультирование: ваш путь к <span className="italic font-light text-sage-800">гармонии и счастью</span>
              </h3>
            </div>
            
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Психологическое консультирование — это профессиональная поддержка в решении жизненных задач. Это безопасное пространство, где вы получаете помощь в преодолении трудностей и достижении целей.
            </p>

            <div className="space-y-8">
               <div className="h-px w-full bg-stone-100"></div>
               <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Почему это важно?</h4>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        Консультации помогают найти выход из сложных ситуаций, развить новые навыки, улучшить качество жизни и достичь желаемых результатов.
                      </p>
                  </div>
                  <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Результат</h4>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        Вы получаете инструменты для долгосрочного изменения жизни к лучшему. Инвестиция в своё психологическое здоровье — это инвестиция в будущее.
                      </p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-[#faf9f6] rounded-[2rem] p-8 md:p-12 space-y-8">
             <h4 className="text-xl font-serif text-slate-900 border-b border-stone-200 pb-4">Какие задачи решает консультирование?</h4>
             <ul className="space-y-5">
                {tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600 font-light text-[15px]">
                     <span className="w-5 h-5 rounded-full border border-sage-800/30 flex items-center justify-center text-[10px] text-sage-800 shrink-0 mt-1">
                        ✓
                     </span>
                     <span>{task}</span>
                  </li>
                ))}
             </ul>
             <div className="pt-6 border-t border-stone-200">
               <p className="text-sm text-slate-400 mb-6 italic leading-relaxed">
                 Запишитесь на консультацию и сделайте первый шаг к переменам!
               </p>
               <a href="#contact" className="inline-block bg-sage-800 text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-700 transition-all shadow-lg shadow-sage-800/10">
                 Записаться на сессию
               </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselingInfo;

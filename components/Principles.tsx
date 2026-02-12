
import React from 'react';

const principles = [
  {
    title: 'Ответственность',
    content: 'Даю знания и инструменты. А интегрировать их в жизнь — ваша ответственность. Как и ответственность за все действия и бездействие в своей жизни. Это как желание подкачать мышцы пресса. Ведь знание упражнений не работает без действий, системы тренировок, пересмотра некоторых привычек и рациона питания.'
  },
  {
    title: 'Решения',
    content: 'Не даю готовые решения. Даю эффективные техники и инструменты, используя которые вы чувствуете, что вам становится легче и спокойнее. Вы начинаете понимать себя, действовать и брать ответственность за свою жизнь. Улучшаете отношения в семье, с коллегами, повышаете качество своей жизни. Только вы знаете, как лучше для вашей жизни, и выбираете лучшее из возможного.'
  },
  {
    title: 'Экологичность',
    content: 'Мне важен ваш результат. Поэтому провожу встречи бережно, заботливо, экологично, в вашем темпе. Работаю в интегративном подходе. А значит практики и инструменты самопомощи легко применимы в жизни, подбираю индивидуально под вашу личность и цели.'
  },
  {
    title: 'Системность',
    content: 'Жить счастливо — это выбор. Жить через легкость и радость — это выбор. Сознательный или бессознательный. Системный подход — это возможность комфортно ввести в жизнь новые привычки, мысли, действия. Осознанно улучшать жизнь через легкость и радость.'
  }
];

const Principles: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-sage-800/60 mb-6">Ваши ценности</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-slate-900 max-w-4xl mx-auto leading-tight">
          Я ваш психолог, если вам подходят мои <span className="italic font-light text-sage-800">принципы работы</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-20">
        {principles.map((p, i) => (
          <div key={i} className="relative group">
            <div className="flex gap-6 items-start">
              <span className="text-4xl md:text-5xl font-serif text-sage-800/20 group-hover:text-sage-800/40 transition-colors shrink-0">0{i + 1}</span>
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-serif text-slate-900">{p.title}</h4>
                <div className="h-px w-12 bg-sage-800/10 group-hover:w-20 transition-all duration-500"></div>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                  {p.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;

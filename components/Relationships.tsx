
import React from 'react';

const relationshipTopics = [
  {
    title: 'Кризисы и конфликты',
    description: 'Помогаю найти выход из повторяющихся ссор, восстановить доверие и научиться слышать друг друга без взаимных обвинений.'
  },
  {
    title: 'Развод и расставание',
    description: 'Бережная поддержка в период завершения отношений. Помогаю прожить утрату и обрести силы для новой жизни.'
  },
  {
    title: 'Личные границы',
    description: 'Работа над умением говорить «нет» и выстраивать здоровое пространство в паре и с близкими без чувства вины.'
  },
  {
    title: 'Поиск партнера',
    description: 'Разбор сценариев, которые мешают построить счастливые отношения. Работа с самооценкой и страхом близости.'
  }
];

const Relationships: React.FC = () => {
  return (
    <div className="bg-[#faf9f6]">
      <br/>
      <div className="max-w-7xl mx-auto px-6 md:px-12 ">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-sage-800/60 mb-6">Специализация</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
              Работа с <br /><span className="italic font-light">отношениями</span>
            </h3>
            <p className="text-slate-500 font-light text-lg leading-relaxed mb-10">
              Отношения — это не только про партнера, но и про то, как вы чувствуете себя рядом с ним. Я помогаю сделать этот путь осознанным и безопасным.
            </p>
            <div className="h-px w-24 bg-sage-800/20"></div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {relationshipTopics.map((topic, index) => (
              <div 
                key={index} 
                className="p-8 rounded-3xl border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-500 group bg-[#ffffff]"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-sage-50 transition-colors">
                  <span className="text-sage-800 text-lg">✦</span>
                </div>
                <h4 className="text-xl font-serif text-slate-900 mb-4">{topic.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default Relationships;

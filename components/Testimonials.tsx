
import React from 'react';

const reviews = [
  {
    name: 'Анжелика Охрименко',
    date: '10 ноября',
    text: 'Год находилась у Елены на терапии. Была проблема в неудовлетворённости работой. Елена помогла мне решить очень острую проблему, которая меня разрушала. У меня появились цели и планы.',
    role: 'Клиент (терапия 1 год)'
  },
  {
    name: 'Вика Заяц',
    date: '13 июня',
    text: 'Елена как настоящий наставник смогла указать на ту самую дверь. На первой сессии мне дали инструмент. Я смогла обрести опору. Оказалось совсем не страшно работать с собой.',
    role: 'Клиент'
  },
  {
    name: 'Никита Лесин',
    date: '16 августа',
    text: 'Она помогает не только знаниями, но и атмосферой и дружелюбием. С ней легко и приятно общаться, даже если обсуждаешь проблемы. Всем советую как профессионального специалиста.',
    role: 'Клиент'
  },
  {
    name: 'Дарья Б.',
    date: '14 февраля',
    text: 'Рада, что нашла своего специалиста. Елена умело располагает к себе. Спустя один сеанс удалось ответить на многие терзающие вопросы. Здесь чувствуешь отдачу.',
    role: 'Клиент'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-sage-800/60 mb-6">Отзывы</h2>
        <h3 className="text-4xl md:text-6xl font-serif text-slate-900 italic">Истории изменений</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-stone-50/50 p-8 rounded-[2rem] border border-stone-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-500">
            <div>
              <div className="text-sage-800 mb-6 text-2xl">“</div>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-8 italic">
                {rev.text}
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-lg text-slate-900">{rev.name}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-stone-400 text-sm">
          <span className="w-12 h-[1px] bg-stone-200"></span>
          Средний рейтинг 4.9 на основе 24 отзывов
          <span className="w-12 h-[1px] bg-stone-200"></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

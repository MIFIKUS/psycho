
import React from 'react';

const FindingSpecialist: React.FC = () => {
  const criteria = [
    {
      title: 'Образование и диплом',
      text: (
        <>
          Высшее государственное образование — база. Дополнительное образование у каждого специалиста свое: психотерапевтические направления, методы работы.
          По законодательству РФ у психолога должен быть диплом о высшем психологическом образовании или о профессиональной переподготовке.
          <br /><br />
          <span className="text-[10px] font-bold uppercase text-sage-800/60 block">
            * Диплом о профессиональной переподготовке ПП № 028/025. Холистическая (целостная) практическая психология.
          </span>
        </>
      )
    },
    {
      title: 'Комфорт и доверие',
      text: (
        <>
          Важно встретить своего психолога, с которым вам комфортно, с кем вы чувствуете свой прогресс. 
          Если готовы общаться по видеосвязи — можно идти на онлайн-консультации. Не стесняйтесь учитывать пол и возраст. 
          Чтобы понять, ваш ли я психолог, предусмотрена встреча-знакомство.
        </>
      )
    },
    {
      title: 'Стоимость консультаций',
      text: (
        <>
          Она должна быть для вас доступной и не создавать ситуации, в которой придется занимать деньги.
          <br /><br />
          <span className="text-xl font-serif text-slate-900 block">Стоимость сессии 4500 руб.</span>
          <span className="text-sm text-slate-400 block mt-1">Продолжительность 80 минут.</span>
        </>
      )
    },
    {
      title: 'Метод работы',
      text: (
        <>
          Я работаю в <strong>интегративном подходе</strong> («восстановление» или «целое»). 
          Вместо выбора одного направления, я комбинирую несколько, подбирая самые эффективные инструменты исходя из вашей ситуации и запроса.
        </>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sage-800/60 mb-6">Как найти своего психолога?</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">
          Несколько важных <span className="italic font-light text-sage-800">критериев выбора</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {criteria.map((item, i) => (
          <div key={i} className="p-10 border border-stone-100 rounded-[2.5rem] bg-white hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-500">
            <h4 className="text-2xl font-serif text-sage-800 mb-6">{item.title}</h4>
            <div className="text-slate-600 font-light leading-relaxed text-[15px]">
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href="#contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sage-800 transition-all hover:scale-105">
          Записаться на сессию
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FindingSpecialist;

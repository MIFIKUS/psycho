
import React from 'react';

const catalog = [
  {
    title: 'Встреча-знакомство',
    time: '50 минут',
    description: 'Цель такой консультации понять, комфортно ли общение, попадает ли ваш запрос в сферу моей компетенции. Результат встречи - принять решение (да/нет) о дальнейшей работе.',
    price: '2 500 ₽',
    tag: 'Первый шаг'
  },
  {
    title: 'Индивидуальная консультация',
    time: '1 час ',
    description: 'Для тех, кто хочет лучше понять себя, наладить более гармоничные отношения, снизить тревогу, страхи, укрепить опоры.',
    price: '4 500 ₽',
    tag: 'Индивидуально'
  },
  {
    title: 'Парная консультация',
    time: '90- 105 минут ',
    description: 'Подходит для тех, кто хочет укрепить свои отношения, достичь большей близости, доверия и понимания. Парная терапия может быть использована для всех пар, независимо от гендера.',
    price: '6 000 ₽',
    tag: 'Глубинная работа'
  },
  {
    title: 'Игра "Формула Исцеления"',
    time: '1.5 - 2.5 часа',
    description: 'Игры в  индивидуальном формате и в группах по 2-3 человека. Мягкий способ найти ответы и пути решения.',
    price: '3 500 ₽',
    tag: 'Игропрактика'
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-[#faf9f6]">
      <br/>
      <div className="max-w-7xl mx-auto px-6 md:px-12 bg-[#faf9f6]">
        <div className="mb-20">
          <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight max-w-3xl">
            Формы работы
          </h3>
        </div>
    
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {catalog.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white border border-stone-100 rounded-[2.5rem] hover:border-sage-800/20 hover:shadow-2xl hover:shadow-sage-800/[0.03] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sage-800/50 bg-sage-50 px-4 py-1.5 rounded-full group-hover:bg-sage-100/50">
                  {item.tag}
                </span>
                <span className="text-xs font-medium text-slate-400">{item.time}</span>
              </div>
              
              <h4 className="text-3xl font-serif text-slate-900 mb-4 group-hover:text-sage-800 transition-colors">
                {item.title}
              </h4>
              
              <p className="text-slate-500 leading-relaxed mb-10 font-light whitespace-pre-line">
                {item.description}
              </p>
              
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h4 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight max-w-3xl">
              Со мной вы сможете:
            </h4>
            <br/>
            <ul className="md:text-2xl italic font-light text-sage-800">
              <li>• восстановиться, "пересобраться"</li>
              <li>• научиться видеть, думать и действовать по другому</li>
              <li>• начать менять свою жизнь</li>
            </ul>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end mt-8 md:mt-0">
            <a 
              href="#contact" 
              className="bg-sage-800 text-white px-12 py-5 rounded-[18px] text-[13px] font-medium tracking-widest uppercase hover:bg-slate-700 transition-colors shadow-lg shadow-sage-800/10 hover:shadow-sage-800/20 text-center"
            >
              Записаться
            </a>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default Services;

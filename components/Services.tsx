
import React from 'react';

const catalog = [
  {
    title: 'Встреча-знакомство',
    time: '50 минут',
    description: 'Цель такой консультации понять, комфортно ли общение, попадает ли ваш запрос в сферу моей компетенции. Результат встречи - принять решение (да/нет) о дальнейшей работе.',
    price: '2 500 ₽',
    hoverBg: 'hover:bg-sky-50/50',
    hoverBorder: 'hover:border-sky-200',
    titleHover: 'group-hover:text-sky-700',
    priceHover: 'group-hover:text-sky-800',
    footerBorder: 'group-hover:border-t-sky-200/50',
  },
  {
    title: 'Индивидуальная консультация',
    time: '1 час - 1 час 20 мин',
    description: 'Для тех, кто хочет лучше понять себя, наладить более гармоничные отношения, снизить тревогу, страхи, укрепить опоры.',
    price: '4 500 ₽',
    hoverBg: 'hover:bg-emerald-50/50',
    hoverBorder: 'hover:border-emerald-200',
    titleHover: 'group-hover:text-emerald-800',
    priceHover: 'group-hover:text-emerald-900',
    footerBorder: 'group-hover:border-t-emerald-200/50',
  },
  {
    title: 'Парная консультация',
    time: '1 час 30 мин - 1 час 50 мин',
    description: 'Подходит для тех, кто хочет укрепить свои отношения, достичь большей близости, доверия и понимания. Парная терапия может быть использована для всех пар, независимо от гендера.',
    price: '6 500 ₽',
    hoverBg: 'hover:bg-fuchsia-50/50',
    hoverBorder: 'hover:border-fuchsia-200',
    titleHover: 'group-hover:text-fuchsia-800',
    priceHover: 'group-hover:text-fuchsia-900',
    footerBorder: 'group-hover:border-t-fuchsia-200/50',
  },
  {
    title: 'Трансформационные игры',
    time: '1.5 часа - 2.5 часа',
    description: ' "Формула Исцеления" , "Лабиринты Сознания". Игры в  индивидуальном формате и в группах по 2-3 человека. Мягкий способ найти ответы и пути решения.',
    price: '3 500 ₽',
    hoverBg: 'hover:bg-violet-50/50',
    hoverBorder: 'hover:border-violet-200',
    titleHover: 'group-hover:text-violet-800',
    priceHover: 'group-hover:text-violet-900',
    footerBorder: 'group-hover:border-t-violet-200/50',
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-[#faf9f6]">
      <br/>
      <div className="max-w-7xl mx-auto px-6 md:px-12 bg-[#faf9f6]">
        <div className="mb-20">
          <h3 className="text-2xl md:text-5xl font-serif text-slate-900 leading-tight max-w-3xl">
            Формы работы
          </h3>
        </div>
    
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {catalog.map((item, index) => (
            <div 
              key={index} 
              className={`group p-10 bg-white border border-stone-100 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full hover:shadow-xl hover:shadow-stone-200/40 ${item.hoverBg} ${item.hoverBorder}`}
            >
              <h4 className={`text-3xl font-serif text-slate-900 mb-4 transition-colors ${item.titleHover}`}>
                {item.title}
              </h4>
              
              <p className="text-lg text-slate-600 leading-relaxed font-light whitespace-pre-line flex-1 mb-8">
                {item.description}
              </p>
              
              <div className={`flex flex-wrap justify-between items-end gap-4 pt-6 border-t border-stone-100 mt-auto transition-colors ${item.footerBorder}`}>
                <span className="text-xs font-medium text-slate-600">{item.time}</span>
                <span className={`text-lg font-serif text-sage-800 transition-colors ${item.priceHover}`}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h4 className="text-4xl md:text-4xl font-serif text-slate-900 leading-tight max-w-3xl">
              Со мной вы сможете:
            </h4>
            <br/>
            <ul className="text-base md:text-lg font-light text-sage-800">
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

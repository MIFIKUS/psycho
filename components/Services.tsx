
import React from 'react';

const catalog = [
  {
    title: 'Встреча-знакомство',
    time: '50-60 минут',
    description: 'Понять, комфортно ли общение и подходит ли ваш запрос. Часто уже здесь появляются новые осознания.',
    price: '2 500 ₽',
    tag: 'Первый шаг'
  },
  {
    title: 'Консультация психолога',
    time: '80 минут',
    description: 'Разбор ситуации, поиск точек опоры и путей выхода. Помощь в решении внутренних конфликтов.',
    price: '4 500 ₽',
    tag: 'Индивидуально'
  },
  {
    title: 'Психотерапия (курс)',
    time: '80 минут',
    description: 'Глубинная работа (от 4 сессий). Выход из "Дня Сурка", баланс между "Хочу" и "Надо".',
    price: '4 500 ₽',
    tag: 'Глубинная работа'
  },
  {
    title: 'Игра "Формула Исцеления"',
    time: '2 - 2.5 часа',
    description: 'Трансформационная игра в индивидуальном формате. Мягкий способ найти ответы в подсознании.',
    price: '3 000 ₽',
    tag: 'Игропрактика'
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-20">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-sage-800/60 mb-6">Каталог услуг</h2>
        <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight max-w-3xl">
          Путь к вашей <span className="italic font-light text-sage-800">внутренней силе</span>
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
            
            <p className="text-slate-500 leading-relaxed mb-10 font-light line-clamp-3">
              {item.description}
            </p>
            
            <div className="flex justify-between items-center pt-8 border-t border-stone-50">
              <span className="text-2xl font-serif text-slate-900">{item.price}</span>
              <a 
                href="#contact" 
                className="text-[11px] font-bold uppercase tracking-widest text-sage-800 group-hover:text-slate-900 transition-colors"
              >
                Записаться →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

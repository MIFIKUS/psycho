
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    {
      name: 'Telegram',
      value: '@ElenaSm_VL',
      link: 'https://t.me/ElenaSm_VL',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      ),
      hoverBg: 'hover:bg-sky-50/50',
      hoverBorder: 'hover:border-sky-200',
      color: 'text-sky-600',
      type: 'link'
    },
    {
      name: 'WhatsApp',
      value: '+7 (914) 707-84-35',
      raw: '79147078435',
      link: 'https://wa.me/79147078435',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.123.555 4.194 1.61 6.041l-1.71 6.244 6.388-1.675a11.83 11.83 0 005.759 1.503h.005c6.635 0 12.046-5.412 12.049-12.05.002-3.217-1.25-6.242-3.522-8.514z" />
        </svg>
      ),
      hoverBg: 'hover:bg-emerald-50/50',
      hoverBorder: 'hover:border-emerald-200',
      color: 'text-emerald-600',
      type: 'copy'
    },
    {
      name: 'Телефон',
      value: '+7 (914) 707-84-35',
      raw: '79147078435',
      link: 'tel:+79147078435',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      hoverBg: 'hover:bg-stone-50',
      hoverBorder: 'hover:border-stone-300',
      color: 'text-stone-600',
      type: 'copy'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-16 lg:p-24 shadow-sm border border-stone-100 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start md:items-center">
        <div className="lg:w-1/2 space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 leading-tight">
              Связаться <br /><span className="italic font-light text-sage-800 text-3xl md:text-6xl">со мной</span>
            </h2>
            <p className="text-slate-500 font-light text-lg md:text-xl leading-relaxed max-w-md">
              Принимаю очно во Владивостоке и онлайн. Выберите удобный способ связи для записи на консультацию.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 pt-2">
            <div className="flex gap-4 md:gap-6 items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-stone-50 rounded-xl md:rounded-2xl flex items-center justify-center text-sage-800 shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Кабинет</p>
                <p className="text-sm md:text-base font-medium text-slate-800">Владивосток, Всеволода Сибирцева, 15</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="grid gap-4 md:gap-6">
            {contactMethods.map((method) => {
              const isCopy = method.type === 'copy';
              return (
                <div key={method.name} className="relative group">
                  <a
                    href={method.link}
                    onClick={(e) => {
                      if (isCopy) {
                        e.preventDefault();
                        handleCopy(method.value, method.name);
                      }
                    }}
                    target={method.type === 'link' ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-5 md:p-8 bg-white border border-stone-100 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:shadow-stone-200/40 ${method.hoverBg} ${method.hoverBorder} cursor-pointer`}
                  >
                    <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                      <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center transition-all bg-stone-50 group-hover:bg-white group-hover:shadow-inner shrink-0 ${method.color}`}>
                        {method.icon}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-0.5">{method.name}</h4>
                        <div className="flex flex-col">
                          <p className="text-lg md:text-xl font-serif text-slate-800 whitespace-nowrap">
                            {method.value}
                          </p>
                          {isCopy && (
                             <span className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-wider font-light mt-1">
                               {copied === method.name ? '✅ Скопировано!' : 'Нажмите, чтобы скопировать'}
                             </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all text-sage-800 shrink-0 ml-2">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

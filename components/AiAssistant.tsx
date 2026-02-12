
import React, { useState, useRef, useEffect } from 'react';
// Correctly import GoogleGenAI and Chat from the official SDK
import { GoogleGenAI, Chat } from '@google/genai';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Type state with Chat from @google/genai
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Gemini AI client with the provided API key from environment variables
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Create a new chat session with a system instruction suitable for a psychologist's assistant
    const newChat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Ты — эмпатичный виртуальный помощник психолога Елены Смирновой. 
        Твоя задача — выслушать пользователя, помочь ему осознать свои чувства и эмоции в данный момент. 
        Будь поддерживающим, не давай прямых советов (если это не касается техник заземления или дыхания), 
        создавай безопасное и анонимное пространство. 
        Напоминай, что ты ИИ и не заменяешь полноценную психотерапию у Елены. 
        Отвечай на русском языке.`,
      },
    });
    setChat(newChat);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      parts: [{ text: inputValue }],
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Use chat.sendMessage according to @google/genai guidelines
      const response = await chat.sendMessage({ message: inputValue });
      const modelMessage: ChatMessage = {
        role: 'model',
        // .text is a property on GenerateContentResponse
        parts: [{ text: response.text || '' }],
      };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error in AI Assistant:', error);
      setMessages(prev => [...prev, {
        role: 'model',
        parts: [{ text: 'Простите, сейчас я не могу ответить. Попробуйте, пожалуйста, чуть позже.' }],
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[700px] border border-stone-100 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-8 border-b border-stone-50 flex items-center justify-between bg-stone-50/50">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-12 h-12 bg-sage-800 rounded-2xl flex items-center justify-center text-white">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
               </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h4 className="font-serif text-xl text-slate-900">Эмпатичный бот</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Ваше анонимное пространство</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-8 space-y-6 scroll-smooth">
        {messages.length === 0 && (
          <div className="text-center py-20 px-12">
            <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <h5 className="font-serif text-2xl text-slate-800 mb-3">О чем вы думаете?</h5>
            <p className="text-slate-400 font-light text-sm max-w-xs mx-auto">
              Я здесь, чтобы выслушать вас и помочь осознать чувства в текущем моменте. Все абсолютно анонимно.
            </p>
          </div>
        )}
        
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] px-6 py-4 rounded-3xl ${
                msg.role === 'user' 
                  ? 'bg-sage-800 text-white rounded-tr-none shadow-md' 
                  : 'bg-stone-50 text-slate-700 rounded-tl-none border border-stone-100 font-light leading-relaxed'
              }`}
            >
              <p className="text-[15px] whitespace-pre-wrap">{msg.parts[0].text}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-stone-50 px-6 py-4 rounded-3xl rounded-tl-none border border-stone-100">
              <div className="flex space-x-2">
                <div className="w-1.5 h-1.5 bg-sage-800/30 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-sage-800/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-sage-800/30 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-8 bg-white border-t border-stone-50">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Опишите ваше состояние..."
            className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 pr-16 text-sm focus:outline-none focus:ring-4 focus:ring-sage-800/5 transition-all font-light"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            className="absolute right-3 bg-sage-800 text-white p-2.5 rounded-xl hover:bg-slate-700 transition-colors disabled:opacity-30 shadow-lg shadow-sage-800/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-slate-300 mt-4 text-center uppercase tracking-[0.2em] font-bold">
          Искусственный интеллект · Не заменяет медицинскую помощь
        </p>
      </div>
    </div>
  );
};

export default AiAssistant;

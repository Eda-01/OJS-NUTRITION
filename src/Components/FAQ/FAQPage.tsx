import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from './FAQData';


export const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Genel");
  const [openId, setOpenId] = useState<number | null>(null);

  const currentCategory = FAQ_DATA.find(cat => cat.category === activeTab);

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="flex gap-2 mb-8 border-b border-gray-100 pb-4">
        {FAQ_DATA.map((item) => (
          <button
            key={item.category}
            onClick={() => { setActiveTab(item.category); setOpenId(null); }}
            className={`px-6 py-2 text-xs font-bold tracking-widest transition-all ${
              activeTab === item.category ? "bg-[#1A1A1A] text-white" : "bg-[#F0F0F0] text-gray-600 hover:bg-gray-200"
            }`}
          >
            {item.category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 mb-6 text-[#2B3292]">
        <div className="w-5 h-5 border-2 border-current flex items-center justify-center font-bold text-[10px]">#</div>
        <h2 className="font-black italic uppercase tracking-tighter">{activeTab}</h2>
      </div>
      <div className="bg-[#F5F5F5] p-2 space-y-1">
        {currentCategory?.questions.map((q) => (
          <div key={q.id} className="bg-white border border-gray-100">
            <button
              onClick={() => setOpenId(openId === q.id ? null : q.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-all"
            >
              <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-tight">{q.title}</span>
              {openId === q.id ? <Minus size={16} /> : <Plus size={16} />}
            </button>
            
            {openId === q.id && (
              <div className="px-4 pb-4 text-sm text-gray-600 animate-in slide-in-from-top-2 duration-300">
                {q.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
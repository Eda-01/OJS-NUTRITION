import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ACCORDION_DATA = [
  { id: 'features', title: 'ÖZELLİKLER', content: 'Yüksek kaliteli hammadde, hızlı emilim...' },
  { id: 'content', title: 'BESİN İÇERİĞİ', content: 'Her serviste 24g Protein, 5.5g BCAA...' },
  { id: 'usage', title: 'KULLANIM ŞEKLİ', content: 'Antrenmandan 30 dakika önce 1 ölçek...' }
];

export const ProductAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>('features');

  return (
    <div className="mt-8 border-t border-gray-100">
      {ACCORDION_DATA.map((item) => (
        <div key={item.id} className="border-b border-gray-100">
          <button 
            onClick={() => setOpenSection(openSection === item.id ? null : item.id)}
            className="w-full py-4 flex justify-between items-center group"
          >
            <span className="text-[12px] font-black italic uppercase tracking-widest group-hover:text-blue-600 transition-colors">
              {item.title}
            </span>
            {openSection === item.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {openSection === item.id && (
            <div className="pb-6 text-sm text-gray-500 leading-relaxed italic animate-in fade-in slide-in-from-top-2">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
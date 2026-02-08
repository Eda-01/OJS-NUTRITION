import { Star, Plus, Minus } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

interface FooterProps {
  onContactClick: () => void;
  onFAQClick: () => void; 
  onAboutClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick, onFAQClick, onAboutClick }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <span className="text-xs text-gray-400">(140.000+)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black italic leading-tight tracking-tighter uppercase">
              LABORATUVAR TESTLİ ÜRÜNLER <br />
              AYNI GÜN & ÜCRETSİZ KARGO <br />
              MEMNUNİYET GARANTİSİ
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi seveceğinize eminiz.
              Eğer herhangi bir sebeple memnun kalmazsan, bizimle iletişime geçtiğinde çözüme kavuşturacağız.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 border-t border-zinc-800 pt-10 md:pt-16">
          <div className="border-b border-zinc-800 md:border-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('ojs')}
              className="w-full flex justify-between items-center md:block text-left"
            >
              <h1 className="text-2xl font-black italic tracking-tighter uppercase">OJS NUTRITION</h1>
              <span className="md:hidden">
                {openSection === 'ojs' ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <ul className={`${openSection === 'ojs' ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[13px] text-gray-400 font-medium mt-4 md:mt-6`}>
              <li
                onClick={onContactClick}
                className="cursor-pointer hover:text-white transition-colors"
              >
                İletişim
              </li>
              <li
                onClick={onAboutClick}
                className="hover:text-white cursor-pointer transition-colors"
              >
                Hakkımızda
              </li>
              <li
                onClick={onFAQClick}
                className="cursor-pointer hover:text-white transition-colors"
              >
                Sıkça Sorulan Sorular
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">KVKK</li>
              <li className="hover:text-white cursor-pointer transition-colors">Çalışma İlkelerimiz</li>
              <li className="hover:text-white cursor-pointer transition-colors">Satış Sözleşmesi</li>
              <li className="hover:text-white cursor-pointer transition-colors">Garanti ve İade Koşulları</li>
              <li className="hover:text-white cursor-pointer transition-colors">Gerçek Müşteri Yorumları</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
          <div className="border-b border-zinc-800 md:border-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('categories')}
              className="w-full flex justify-between items-center md:block text-left"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider">Kategoriler</h4>
              <span className="md:hidden">
                {openSection === 'categories' ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <ul className={`${openSection === 'categories' ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[13px] text-gray-400 font-medium mt-4 md:mt-6`}>
              <li className="hover:text-white cursor-pointer transition-colors">Protein</li>
              <li className="hover:text-white cursor-pointer transition-colors">Spor Gıdaları</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sağlık</li>
              <li className="hover:text-white cursor-pointer transition-colors">Gıda</li>
              <li className="hover:text-white cursor-pointer transition-colors">Vitamin</li>
              <li className="hover:text-white cursor-pointer transition-colors">Aksesuar</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tüm Ürünler</li>
              <li className="hover:text-white cursor-pointer transition-colors">Paketler</li>
              <li className="hover:text-white cursor-pointer transition-colors">Lansmana Özel Fırsatlar</li>
            </ul>
          </div>
          <div className="border-b border-zinc-800 md:border-0 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection('popular')}
              className="w-full flex justify-between items-center md:block text-left"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider">Popüler Ürünler</h4>
              <span className="md:hidden">
                {openSection === 'popular' ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <ul className={`${openSection === 'popular' ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[13px] text-gray-400 font-medium mt-4 md:mt-6`}>
              <li className="hover:text-white cursor-pointer transition-colors">Whey Protein</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cream of Rice</li>
              <li className="hover:text-white cursor-pointer transition-colors">Creatine</li>
              <li className="hover:text-white cursor-pointer transition-colors">BCAA+</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pre-Workout</li>
              <li className="hover:text-white cursor-pointer transition-colors">Fitness Paketi</li>
              <li className="hover:text-white cursor-pointer transition-colors">Collagen</li>
              <li className="hover:text-white cursor-pointer transition-colors">Günlük Vitamin Paketi</li>
              <li className="hover:text-white cursor-pointer transition-colors">ZMA</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-800 text-[11px] text-gray-500 text-center md:text-left">
          Copyright © - Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};
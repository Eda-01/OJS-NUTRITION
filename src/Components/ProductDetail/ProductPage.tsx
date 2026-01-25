import React from "react";
import { ProductAccordion } from "./ProductAccordion";
import { ProductAction } from "./ProductAction";
import { ProductGallery } from "./ProductGallery";
import { ReviewStats } from "./ReviewStats";
import { UserComment } from "./UserComment";
import { ProductCard } from "../Categories/ProductCard";
import { BEST_SELLERS } from "../Data";

// Props arayüzünü güncelledik: product artık dışarıdan geliyor
interface ProductPageProps {
  product: any; 
  onBack: () => void;
}

const COMMENTS = [
  { id: 1, name: "EREN U.", date: "03/05/24", title: "Her zamanki kalite. Teşekkürler", text: "Her zamanki kalite. Teşekkürler", stars: 5 },
  { id: 2, name: "Bahadır K.", date: "03/05/24", title: "En iyi aroma", text: "İyi çalışma", stars: 5 },
  { id: 3, name: "Burhan K.", date: "01/05/24", title: "Yıllardır en beğendiğim protein tozu", text: "Yıllardır en beğendiğim protein tozu, protein içeriği ve tadı kadar düşük kalorisi...", stars: 5 },
  { id: 4, name: "Mert A.", date: "30/04/24", title: "Harika bir ürün", text: "Harika bir ürün, kas gelişimime büyük katkı sağladı.", stars: 5 },
  { id: 5, name: "Can D.", date: "28/04/24", title: "Mükemmel lezzet", text: "Mükemmel lezzet ve kolay karışıyor.", stars: 4 },
  { id: 6, name: "Ali V.", date: "25/04/24", title: "Fiyat performans ürünü", text: "Fiyat performans ürünü, tavsiye ederim.", stars: 4 },
  { id: 7, name: "Emre S.", date: "20/04/24", title: "Beklentilerimi karşıladı", text: "Beklentilerimi karşıladı, düzenli kullanıyorum.", stars: 5 },
  { id: 8, name: "Kaan T.", date: "18/04/24", title: "Kaliteli içerik", text: "Kaliteli içerik ve hızlı emilim sağlıyor.", stars: 5 },
  { id: 9, name: "Onur Y.", date: "15/04/24", title: "Harika bir ürün", text: "Harika bir ürün, kas gelişimime büyük katkı sağladı.", stars: 5 },
];

export const ProductPage: React.FC<ProductPageProps> = ({ product, onBack }) => {
  
  // Güvenlik kontrolü: product yoksa boş dönmesin
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black italic uppercase">
        Ürün Yükleniyor...
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-4">
      
      {/* --- BREADCRUMB BÖLÜMÜ (Dinamik Hale Getirildi) --- */}
      <nav className="flex py-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li className="flex items-center">
            <button 
              onClick={onBack}
              className="text-[12px] font-bold uppercase tracking-wider text-gray-500 hover:text-[#2B3292] transition-colors"
            >
              OJS Nutrition
            </button>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-gray-400 text-[10px]">{">"}</span>
            <span className="text-[12px] font-bold uppercase tracking-wider text-gray-500">
              {product.category || "TAKVIYELER"}
            </span>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-gray-400 text-[10px]">{">"}</span>
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2B3292]">
              {product.name}
            </span>
          </li>
        </ol>
      </nav>

      {/* 1. ÜST BÖLÜM: ÜRÜN VE SATIN ALMA (Alt bileşenlere veri gönderiliyor) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Galeriye ürünün resmini geçtik */}
        <ProductGallery productImage={product.image} />
        <div>
          {/* Aksiyona ürünün tüm bilgilerini geçtik */}
          <ProductAction product={product} />
          <ProductAccordion />
        </div>
      </div>

      {/* 2. ORTA BÖLÜM: SON GÖRÜNTÜLENEN ÜRÜNLER */}
      <section className="py-12 border-t border-gray-100">
        <h2 className="text-center text-sm font-black italic mb-8 tracking-[0.2em] text-[#1A1A1A] uppercase">
          SON GÖRÜNTÜLENEN ÜRÜNLER
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {BEST_SELLERS.slice(0, 6).map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* 3. ALT BÖLÜM: YORUMLAR */}
      <section className="mt-20 pt-10 border-t border-gray-100">
        <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-8">YORUMLAR</h2>
        <ReviewStats />
        <div className="mt-10 flex flex-col">
          {COMMENTS.map((comment) => (
            <UserComment key={comment.id} {...comment} />
          ))}
        </div>
        {/* ... Sayfalama butonları ... */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-8 h-8 flex items-center justify-center border border-black bg-black text-white font-bold text-xs italic">1</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 font-bold text-xs italic">2</button>
          {/* Diğer butonlar aynı kalabilir */}
        </div>
      </section>

      {/* 4. EN ALT: ÇOK SATANLAR */}
      <section className="py-16 mt-20 bg-[#F9F9F9] -mx-6 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-sm font-black italic mb-10 tracking-[0.2em] text-[#1A1A1A] uppercase">
            ÇOK SATANLAR
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BEST_SELLERS.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-[#2B3292] text-white px-12 py-3 font-black italic uppercase text-xs hover:bg-blue-800 transition-colors">
              TÜMÜNÜ GÖR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
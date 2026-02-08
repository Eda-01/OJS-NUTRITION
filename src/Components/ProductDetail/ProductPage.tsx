import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductAccordion } from "./ProductAccordion";
import { ProductAction } from "./ProductAction";
import { ProductGallery } from "./ProductGallery";
import { ReviewStats } from "./ReviewStats";
import { UserComment } from "./UserComment";
import { api } from "../../Services/api";
import ProductCard from "../Categories/ProductCard";

const COMMENTS = [
  { id: 1, name: "EREN U.", date: "03/05/24", title: "Her zamanki kalite. Teşekkürler", text: "Her zamanki kalite. Teşekkürler", stars: 5 },
  { id: 2, name: "Bahadır K.", date: "03/05/24", title: "En iyi aroma", text: "İyi çalışma", stars: 5 },
  { id: 3, name: "Burhan K.", date: "01/05/24", title: "Yıllardır en beğendiğim protein tozu", text: "Yıllardır en beğendiğim protein tozu...", stars: 5 },
  { id: 4, name: "Cemal K.", date: "01/05/24", title: "En iyi aroma", text: "İyi çalışma", stars: 5 },
  { id: 5, name: "Deniz A.", date: "30/04/24", title: "Harika bir ürün", text: "Harika bir ürün, kesinlikle tavsiye ederim!", stars: 5 },
  { id: 6, name: "Emre T.", date: "29/04/24", title: "Beklentilerimi karşıladı", text: "Ürün beklentilerimi karşıladı, memnun kaldım.", stars: 4 },
  { id: 7, name: "Furkan Y.", date: "28/04/24", title: "Fiyat performans ürünü", text: "Fiyatına göre oldukça iyi bir ürün, fiyat performans ürünü diyebilirim.", stars: 4 },
];

export const ProductPage = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as any;
  const [bestSellers, setBestSellers] = useState<any[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  const product = data?.product;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBestSellers = async () => {
      try {
        const response = await api.getBestSellers();
        setBestSellers(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error("Önerilenler yüklenemedi:", error);
      }
    };

    if (product?.id) {
      fetchBestSellers();
    }
  }, [product?.id]);

  if (!product || !product.name) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-10 h-10 border-4 border-[#2B3292] border-t-transparent rounded-full animate-spin"></div>
        <p className="font-black italic text-gray-500 uppercase tracking-widest text-sm">
          Ürün Bilgileri Çekiliyor...
        </p>
      </div>
    );
  }

const activeImage = selectedVariant?.image || selectedVariant?.photo_src || product?.image || product?.photo_src || "";

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-4 animate-in fade-in duration-700">

      {/* BREADCRUMB */}
      <nav className="flex py-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <button 
              onClick={() => navigate("/")} 
              className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              OJS NUTRITION
            </button>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-300 text-[10px] font-bold">/</span>
            <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">
              {product.category_name || "TAKVIYELER"}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-300 text-[10px] font-bold">/</span>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#2B3292]">
              {product.name}
            </span>
          </li>
        </ol>
      </nav>

      {/* 1. BÖLÜM: GALERİ VE AKSİYON */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        <ProductGallery productImage={activeImage} />

        <div className="flex flex-col">
          <ProductAction 
            product={product} 
            onVariantChange={(v: any) => setSelectedVariant(v)}
          />
          <div className="mt-8 border-t border-gray-100">
            <ProductAccordion />
          </div>
        </div>
      </div>

      {/* 2. BÖLÜM: YORUMLAR */}
      <section className="mt-20 pt-10 border-t-2 border-gray-100">
        <h2 className="text-sm font-black italic mb-10 tracking-[0.2em] text-[#1A1A1A] uppercase">
          MÜŞTERİ YORUMLARI
        </h2>
        <ReviewStats />
        <div className="flex flex-col gap-2 mt-10">
          {COMMENTS.map((comment) => (
            <UserComment key={comment.id} {...comment} />
          ))}
        </div>
      </section>

      {/* 3. BÖLÜM: ÖNERİLEN ÜRÜNLER */}
      <section className="py-20 mt-20 bg-[#F9F9F9] -mx-6 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-sm font-black italic mb-12 tracking-[0.2em] text-[#1A1A1A] uppercase">
            SİZİN İÇİN SEÇTİKLERİMİZ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {bestSellers.length > 0 ? (
              bestSellers.slice(0, 6).map((item, index) => (
                <ProductCard key={item.id || `best-seller-${index}`} {...item} />
              ))
            ) : (
              <div className="col-span-full py-10 flex justify-center">
                <p className="text-gray-400 font-bold italic animate-pulse uppercase text-xs tracking-widest">
                  Öneriler Yükleniyor...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
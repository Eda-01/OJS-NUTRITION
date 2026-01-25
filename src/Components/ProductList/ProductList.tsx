import React from 'react';
import { ProductCard } from '../Categories/ProductCard';
import { ALL_PRODUCTS } from '../ProductList/ProductsData';
import { useCart } from "../Context/CartContext";

interface ProductListProps {
  categoryTitle: string;
  searchQuery: string;
  onProductSelect: (product: any) => void;
}

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replaceAll("i̇", "i")
    .replaceAll("ı", "i");

export const ProductList: React.FC<ProductListProps> = ({ 
    categoryTitle, 
    onProductSelect, 
    searchQuery = "" 
}) => {
    const { addToCart } = useCart();

    const filteredProducts = ALL_PRODUCTS.filter(product => {
        const matchesCategory = 
            categoryTitle === "TÜM ÜRÜNLER" || 
            categoryTitle === "ARAMA SONUÇLARI" || 
            !categoryTitle || 
            normalize(product.category) === normalize(categoryTitle);
        
        const matchesSearch = 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            product.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-8">
                <h1 className="text-center text-4xl md:text-6xl font-black italic tracking-tighter text-[#1A1A1A] uppercase mb-4">
                    {searchQuery ? `"${searchQuery}"` : categoryTitle || "ÜRÜNLER"}
                </h1>
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                    {filteredProducts.length > 0 
                        ? `Toplam ${filteredProducts.length} ürün bulundu` 
                        : "Aradığınız kriterlere uygun ürün bulunamadı."}
                </p>
            </div>

            {/* Ürün Izgarası */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16 max-w-[1200px] mx-auto px-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col h-full">
                        {/* Tıklanabilir Ürün Kartı Alanı */}
                        <div 
                            onClick={() => onProductSelect(product)} 
                            className="cursor-pointer flex-grow transition-transform hover:-translate-y-1"
                        >
                            <ProductCard 
                name={product.name}
                subTitle={product.description}  // 'description' verisini 'subTitle' propuna bağladık
                image={product.image}
                stars={product.rating}          // 'rating' verisini 'stars' propuna bağladık
                reviews={product.reviews}
                price={product.price}
                oldPrice={product.oldPrice}
                discountTag={product.discount}  // 'discount' verisini 'discountTag' propuna bağladık
            />
                        </div>
                        
                        {/* Sepete Ekle Butonu (Kartın hemen altında) */}
                        <div className="mt-4">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation(); // Detay sayfasına gitmeyi engeller
                                    addToCart(product);
                                }}
                                className="w-full bg-black text-white py-3 font-black italic text-[11px] tracking-widest uppercase hover:bg-[#2B3292] transition-colors duration-300"
                            >
                                SEPETE EKLE
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Alt Bilgi Metni */}
            <div className="max-w-[1200px] mx-auto px-6 mt-24 mb-20 border-t border-gray-100 pt-12 text-center">
                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
                    Aradığınız kriterlere uygun en kaliteli <span className="font-bold text-black italic">OJS Nutrition</span> ürünlerini yukarıda görebilirsiniz.
                </p>
            </div>
        </div>
    );
};
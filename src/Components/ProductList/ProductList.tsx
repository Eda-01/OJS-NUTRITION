import React from 'react';
import { useCart } from "../Context/CartContext";
import ProductCard from '../Categories/ProductCard';

interface ProductListProps {
  categoryTitle: string;
  searchQuery: string;
  onProductSelect: (product: any) => void;
  products: any[]; 
}

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replaceAll("i̇", "i")
    .replaceAll("ı", "i");

export const ProductList: React.FC<ProductListProps> = ({ 
    categoryTitle, 
    onProductSelect, 
    searchQuery = "",
    products = [] 
}) => {
    const { addToCart } = useCart();

    const filteredProducts = products.filter(product => {
        const productCategory = product.category || ""; 
        
        const matchesCategory = 
            categoryTitle === "TÜM ÜRÜNLER" || 
            categoryTitle === "ARAMA SONUÇLARI" || 
            !categoryTitle || 
            normalize(productCategory) === normalize(categoryTitle);
        
        const matchesSearch = 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            (product.short_explanation && product.short_explanation.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white">
            {/* Başlık Alanı */}
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
                {filteredProducts.map((product) => {
                    const defaultVariant = product.variants?.[0];
                    const rawPrice = defaultVariant?.price?.total_price || 0;
                    const discPrice = defaultVariant?.price?.discounted_price || null;
                    const hasDiscount = !!discPrice;
                    const finalPriceForCart = discPrice || rawPrice;

                    return (
                        <div key={product.id} className="flex flex-col h-full group">
                            {/* Tıklanabilir Kart Alanı */}
                            <div 
                                onClick={() => onProductSelect(product)} 
                                className="cursor-pointer flex-grow transition-transform duration-300 group-hover:-translate-y-2"
                            >
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    image={product.photo_src}
                                    shortDescription={product.short_explanation} // Hata veren yer düzeltildi
                                    price={rawPrice}
                                    discountedPrice={discPrice}
                                    hasDiscount={hasDiscount}
                                    comments={product.comment_count || 0}
                                    rating={5}
                                />
                            </div>
                            
                            {/* Sepete Ekle Butonu */}
                            <div className="mt-4">
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation(); // Detay sayfasına gitmeyi engelle
                                        addToCart({
                                            id: defaultVariant?.id || product.id,
                                            name: product.name,
                                            price: finalPriceForCart,
                                            image: product.photo_src,
                                            variant: defaultVariant,
                                            aroma: defaultVariant?.aroma,
                                            size: defaultVariant?.size
                                        }, 1);
                                    }}
                                    className="w-full bg-black text-white py-4 font-black italic text-[11px] tracking-widest uppercase hover:bg-[#2B3292] transition-all duration-300 active:scale-95 shadow-lg"
                                >
                                    SEPETE EKLE
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Alt Bilgi */}
            <div className="max-w-[1200px] mx-auto px-6 mt-24 mb-20 border-t border-gray-100 pt-12 text-center">
                <p className="text-[10px] text-gray-400 font-black italic uppercase tracking-[0.3em]">
                    OJS NUTRITION <span className="text-black ml-2">Premium Supplements</span>
                </p>
            </div>
        </div>
    );
};
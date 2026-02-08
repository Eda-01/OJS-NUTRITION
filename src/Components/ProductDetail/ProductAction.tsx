import React, { useState, useEffect } from 'react';
import { Minus, Plus, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../Context/CartContext';
import { useProductVariants } from '../../Hooks/useProductVariants';
import { useNavigate } from 'react-router-dom';

interface ProductActionProps {
  product: any;
  onVariantChange?: (variant: any) => void;
  onCartOpen?: () => void; 
}

export const ProductAction = ({ product, onVariantChange, onCartOpen }: ProductActionProps) => {
  const [quantity, setQuantity] = useState(1);
  const cartContext = useCart();
  const navigate = useNavigate();

  const {
    selectedVariant,
    selectedAroma,
    selectedSize,
    setAroma,
    setSize,
    aromas = [],
    sizes = []
  } = useProductVariants(product?.variants || []) as any;

  useEffect(() => {
    if (selectedVariant && onVariantChange) {
      onVariantChange(selectedVariant);
    }
  }, [selectedVariant, onVariantChange]);

  if (!product || !cartContext) return null;
  const { addToCart } = cartContext;
  const rawPrice = selectedVariant?.price?.total_price || 0;
  const discountedPrice = selectedVariant?.price?.discounted_price || null;
  const finalPrice = discountedPrice ? discountedPrice : rawPrice;
  const servingsCount = selectedVariant?.size?.total_services || 1;
  const pricePerServing = (finalPrice / servingsCount).toFixed(2);

  const handleAddToCart = () => {
    addToCart({
      id: selectedVariant?.id || product.id,
      name: product.name,
      price: finalPrice,
      image: selectedVariant?.photo_src || product.photo_src,
      variant: selectedVariant,
      aroma: selectedAroma,
      size: selectedSize
    }, quantity); 

    if (onCartOpen) {
      onCartOpen();
    }
  };

  return (
    <div className="flex flex-col gap-6 text-[#1A1A1A]">
      {/* BAŞLIK VE AÇIKLAMA */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black italic uppercase leading-none mb-2 tracking-tighter">
          {product.name}
        </h1>
        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] italic">
          {product.short_explanation || "OJS NUTRITION PREMIUM SERIES"}
        </p>
      </div>

      {/* AROMA SEÇİMİ */}
      {aromas.length > 0 && aromas[0] !== "Aromasız" && (
        <div className="border-t border-gray-100 pt-5">
          <label className="text-[10px] font-black uppercase mb-3 block italic tracking-widest text-gray-400">AROMA SEÇİNİZ:</label>
          <div className="flex flex-wrap gap-2">
            {aromas.map((aromaName: string, index: number) => {
              const isSelected = selectedAroma === aromaName;
              return (
                <button 
                  key={index} 
                  onClick={() => setAroma(aromaName)}
                  className={`px-5 py-3 border-2 text-[11px] font-black uppercase italic transition-all duration-200
                    ${isSelected ? 'border-black bg-black text-white' : 'border-[#F2F2F2] text-[#808080] hover:border-gray-300'}`}
                >
                  {aromaName}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* BOYUT SEÇİMİ */}
      <div className="pt-2">
        <label className="text-[10px] font-black uppercase mb-3 block italic tracking-widest text-gray-400">BOYUT / SERVİS:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sizes.map((sizeObj: any, index: number) => {
            const label = sizeObj.gram ? `${sizeObj.gram}G` : `${sizeObj.pieces} ADET`;
            const isSelected = selectedSize?.id === sizeObj.id;

            return (
              <button 
                key={index}
                onClick={() => setSize(sizeObj)}
                className={`w-full p-4 border-2 flex flex-col items-center justify-center transition-all duration-200 min-h-[70px]
                  ${isSelected ? 'border-black bg-white ring-1 ring-black' : 'border-[#F2F2F2] text-[#808080] hover:border-gray-300'}`}
              >
                <span className="font-black italic text-[15px] text-black uppercase">
                  {label}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase italic">
                  {sizeObj.total_services} SERVİS
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FİYAT BİLGİSİ */}
      <div className="flex justify-between items-end pt-6 border-t border-gray-100 mt-2">
        <div className="flex flex-col">
          {discountedPrice && (
             <span className="text-lg text-gray-400 line-through font-bold italic mb-[-10px]">
               {rawPrice.toLocaleString('tr-TR')} TL
             </span>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-6xl font-black italic tracking-tighter">
              {finalPrice > 0 ? finalPrice.toLocaleString('tr-TR') : "---"}
            </span>
            <span className="text-2xl font-black italic">TL</span>
          </div>
        </div>
        <div className="text-gray-900 font-black italic text-xs pb-1 border-b-2 border-black mb-2">
          {pricePerServing} TL / SERVİS
        </div>
      </div>

      {/* AKSİYON BUTONLARI */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex gap-4">
          {/* ADET SEÇİCİ */}
          <div className="flex border-2 border-[#F2F2F2] items-center bg-white shadow-sm">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 py-4 text-gray-400 hover:text-black transition-colors">
              <Minus size={20} strokeWidth={3} />
            </button>
            <span className="w-8 text-center font-black italic text-xl">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-5 py-4 text-gray-400 hover:text-black transition-colors">
              <Plus size={20} strokeWidth={3} />
            </button>
          </div>

          {/* SEPETE EKLE */}
          <button 
            onClick={handleAddToCart} 
            className="flex-grow bg-[#1A1A1A] text-white py-4 font-black italic uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#2B3292] transition-all shadow-lg active:scale-[0.98]"
          >
            <ShoppingCart size={22} /> SEPETE EKLE
          </button>
        </div>

        {/* ÖDEMEYE GİT (HIZLI SATIN AL) */}
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full bg-white border-2 border-black text-black py-4 font-black italic uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-[0.98]"
        >
          HEMEN SATIN AL <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
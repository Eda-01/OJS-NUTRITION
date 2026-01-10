import { Star } from 'lucide-react';

interface ProductProps {
  name: string;
  subTitle: string;
  image: string;
  stars: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  discountTag?: string;
}

export const ProductCard = ({ name, subTitle, image, stars, reviews, price, oldPrice, discountTag }: ProductProps) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer relative bg-white p-2">
      
      {/* İndirim Etiketi */}
      {discountTag && (
        <div className="absolute top-0 right-2 bg-[#D32F2F] text-white text-[10px] font-bold py-3 px-2 z-10 flex flex-col items-center leading-tight">
          <span>{discountTag.split(' ')[0]}</span>
          <span>{discountTag.split(' ')[1]}</span>
        </div>
      )}

      {/* Ürün Görseli */}
      <div className="w-full aspect-square bg-[#F3F6F9] mb-4 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="text-center flex flex-col items-center">
        <h3 className="font-black text-sm text-[#1A1A1A] mb-1 uppercase tracking-tight">{name}</h3>
        <p className="text-[9px] text-gray-400 font-bold mb-2 uppercase leading-3 px-2 h-6 overflow-hidden">
          {subTitle}
        </p>

        {/* Yıldızlar */}
        <div className="flex gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="#FFC107" color="#FFC107" />
          ))}
        </div>

        {/* Yorum Sayısı */}
        <span className="text-[10px] text-gray-400 font-bold mb-3">{reviews} Yorum</span>

        {/* Fiyatlar */}
        <div className="flex items-center gap-2">
          <span className="text-base font-black text-[#1A1A1A]">{price} TL</span>
          {oldPrice && (
            <span className="text-sm text-red-500 line-through font-bold">{oldPrice} TL</span>
          )}
        </div>
      </div>
    </div>
  );
};
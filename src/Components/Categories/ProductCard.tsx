import React from 'react';

interface ProductCardProps {
  id?: string | number;
  name: string;
  image: string;
  shortDescription?: string;
  comments?: number;
  rating?: number;
  price: number;              
  discountedPrice?: number | null; 
  hasDiscount?: boolean;      
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  shortDescription,
  comments = 0,
  rating = 5,
  price,
  discountedPrice,
  hasDiscount
}) => {

  const renderStars = (starCount: number) => {
    const fullStars = '★'.repeat(Math.round(starCount));
    const emptyStars = '☆'.repeat(5 - Math.round(starCount));
    return <span className="text-yellow-400">{fullStars}{emptyStars}</span>;
  };

  const discountPercentage = hasDiscount && discountedPrice && price > 0
    ? Math.round(((price - discountedPrice) / price) * 100) 
    : null;

  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-full cursor-pointer">
      
      {hasDiscount && discountPercentage && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-[11px] font-black px-2 py-1 z-10 italic rounded-sm shadow-sm">
          %{discountPercentage} İNDİRİM
        </div>
      )}

      {/* Ürün Görseli */}
      <div className="flex justify-center items-center h-40 mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      <div className="flex flex-col flex-grow text-center">
        {/* Ürün Adı */}
        <h3 className="text-sm font-black uppercase italic leading-tight mb-2 text-gray-900 min-h-[40px] line-clamp-2">
          {name}
        </h3>

        {/* Kısa Açıklama */}
        <p className="text-[11px] text-gray-500 font-medium uppercase mb-2 min-h-[32px] line-clamp-2">
          {shortDescription}
        </p>

        {/* Yıldızlar */}
        <div className="text-[10px] mb-4">
          {renderStars(rating)}
          <span className="text-gray-400 ml-1 font-bold">({comments} YORUM)</span>
        </div>

        {/* FİYAT ALANI */}
        <div className="mt-auto flex flex-col items-center">
          {hasDiscount && discountedPrice ? (
            <>
              {/* İndirimli Fiyat (Kırmızı) */}
              <span className="text-xl font-black italic text-red-600 leading-none">
                {discountedPrice.toLocaleString('tr-TR')} TL
              </span>
              {/* Eski Fiyat (Üstü Çizili Siyah/Gri) */}
              <span className="text-xs text-gray-400 line-through font-bold italic mt-1">
                {price.toLocaleString('tr-TR')} TL
              </span>
            </>
          ) : (
            <span className="text-xl font-black italic text-gray-900">
              {price.toLocaleString('tr-TR')} TL
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
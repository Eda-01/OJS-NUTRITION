import React from "react";

interface ProductGalleryProps {
  productImage: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ productImage }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Yan Küçük Resimler (Sabit kalabilir veya ürünün resmini kullanabilir) */}
      <div className="hidden md:flex flex-col gap-4 order-2 md:order-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-20 h-20 bg-[#F9F9F9] p-2 cursor-pointer border border-transparent hover:border-black transition-all">
            <img src={productImage} alt="thumbnail" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

      {/* Ana Büyük Resim */}
      <div className="flex-1 bg-[#F9F9F9] p-10 order-1 md:order-2">
        <img 
          src={productImage} 
          alt="product" 
          className="w-full h-auto object-contain animate-in fade-in zoom-in duration-500" 
        />
      </div>
    </div>
  );
};
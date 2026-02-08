import React, { useState } from "react";
import { ImageOff } from "lucide-react";

interface ProductGalleryProps {
  productImage: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ productImage }) => {
  const [error, setError] = useState(false);
  const BASE_URL = "https://fe1111.projects.academy.onlyjs.com";
  const getCleanUrl = (path: string) => {
    if (!path || path === "undefined") return null;
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_URL}${cleanPath}`;
  };

  const finalSrc = getCleanUrl(productImage);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Yan Küçük Resimler */}
      <div className="flex flex-row md:flex-col gap-3 order-2 md:order-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-20 h-20 md:w-24 md:h-24 bg-[#F2F2F2] p-2 flex items-center justify-center rounded-sm border border-gray-100">
            {!error && finalSrc ? (
              <img 
                src={finalSrc} 
                alt="thumbnail" 
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                onError={() => setError(true)} 
              /> 
            ) : (
              <ImageOff size={20} className="text-gray-300" />
            )}
          </div>
        ))}
      </div>

      {/* Ana Büyük Resim Alanı */}
      <div className="flex-1 bg-[#F2F2F2] p-6 md:p-12 order-1 md:order-2 flex items-center justify-center min-h-[400px] md:min-h-[500px] rounded-sm relative overflow-hidden">
        {!error && finalSrc ? (
          <img 
            src={finalSrc} 
            alt="main" 
            className="max-w-full max-h-[450px] object-contain mix-blend-multiply drop-shadow-2xl"
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400 font-bold italic">
            <ImageOff size={48} strokeWidth={1} />
            <span className="text-xs uppercase tracking-widest">Görsel Yüklenemedi</span>
          </div>
        )}
      </div>
    </div>
  );
};
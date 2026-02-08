import React from 'react';
import { useBlazeSlider } from '../../Hooks/useBlazeSlider';
import ProductCard from '../Categories/ProductCard';

interface ProductSliderProps {
  title: string;
  items: any[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ title, items }) => {
  const { sliderElRef } = useBlazeSlider({
    all: {
      slidesToShow: 4,      
      slideGap: '20px',
    },
    '(max-width: 1024px)': {
      slidesToShow: 2.5,   
    },
    '(max-width: 768px)': {
      slidesToShow: 1.2,    
      slideGap: '10px',
    }
  });

  return (
    <div className="py-8">
      <h2 className="text-center text-sm font-black italic mb-10 tracking-[0.2em] text-[#1A1A1A] uppercase">
        {title}
      </h2>

      {/* BLAZE SLIDER HTML YAPISI (BU SIRA BOZULMAMALI) */}
      <div className="blaze-slider" ref={sliderElRef}>
        <div className="blaze-container">
          <div className="blaze-track-container">
            <div className="blaze-track">
              {items.map((item) => (
                <div key={item.id} className="min-w-0">
                  <ProductCard {...item} />
                </div>
              ))}
            </div>
          </div>
          {/* Navigasyon Noktaları */}
          <div className="blaze-pagination mt-6 flex justify-center gap-2"></div>
        </div>
      </div>
    </div>
  );
};
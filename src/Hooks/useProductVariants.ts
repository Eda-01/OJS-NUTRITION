import { useState, useMemo } from 'react';

export const useProductVariants = (variants: any[]) => {
  const [selectedAroma, setSelectedAroma] = useState<any>(variants[0]?.aroma || "");
  const [selectedSize, setSelectedSize] = useState<any>(variants[0]?.size || "");
  const aromas = useMemo(() => {
    const all = variants.map(v => v.aroma);
    return Array.from(new Set(all.map(a => JSON.stringify(a)))).map(a => JSON.parse(a));
  }, [variants]);

  const sizes = useMemo(() => {
    const all = variants.map(v => v.size);
    return Array.from(new Set(all.map(s => JSON.stringify(s)))).map(s => JSON.parse(s));
  }, [variants]);

  const selectedVariant = useMemo(() => {
    return variants.find(v => 
      JSON.stringify(v.aroma) === JSON.stringify(selectedAroma) && 
      JSON.stringify(v.size) === JSON.stringify(selectedSize)
    ) || variants[0];
  }, [selectedAroma, selectedSize, variants]);

  return {
    selectedVariant,
    selectedAroma,
    selectedSize,
    setAroma: (val: any): void => setSelectedAroma(val),
    setSize: (val: any): void => setSelectedSize(val),
    aromas,
    sizes
  };
};
export interface ProductVariantSize {
  gram: number | null;
  pieces: number | null;
  total_services: number;
}

export interface ProductVariant {
  id: string;
  aroma: string;
  price: number;
  old_price: number | null;
  photo_src: string;
  size: ProductVariantSize;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  image: string;
  category: string;
  price: number;       
  old_price: number | null;
  reviews: number;
  stars: number;
  variants: ProductVariant[];
}
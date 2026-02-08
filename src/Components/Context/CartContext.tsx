import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  reviewCount: number;
  averageRating: number;
  price: number;
  isDiscounted?: boolean;
  discountedPrice?: number;
  discountPercentage?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedAroma?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any, selectedAroma?: any) => void; 
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, amount: number) => void;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (product: any, selectedAroma: any = "Standart") => {
    const finalAroma = typeof selectedAroma === 'object' ? (selectedAroma.name || "Standart") : String(selectedAroma);
    
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.selectedAroma === finalAroma
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.selectedAroma === finalAroma 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
 
      return [...prevItems, { 
        ...product, 
        quantity: 1, 
        selectedAroma: finalAroma,
        image: product.image || product.photo_src || product.photoSrc 
      }];
    });
  };

  const updateQuantity = (id: string, amount: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart, CartProvider içinde kullanılmalıdır.");
  return context;
};
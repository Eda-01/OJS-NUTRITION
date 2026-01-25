import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '../ProductList/ProductsData';


// Sepetteki ürünün miktar ve seçilen özelliklerini içeren hali
export interface CartItem extends Product {
  quantity: number;
  selectedAroma?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, aroma?: string) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Sepete Ekle
  const addToCart = (product: Product, aroma?: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, selectedAroma: aroma || "Ahududu" }];
    });
  };

  // Miktar Güncelle (+ / -)
  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  // Toplam Fiyat Hesaplama
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
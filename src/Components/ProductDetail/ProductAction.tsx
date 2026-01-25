import { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, ShieldCheck, Truck, RefreshCw, Check } from 'lucide-react';
import { useCart } from "../Context/CartContext";

// Props arayüzünü ekledik, artık üst sayfadan (ProductPage) ürünü alıyor
interface ProductActionProps {
  product: any;
}

export const ProductAction = ({ product }: ProductActionProps) => {
  const [selectedAroma, setSelectedAroma] = useState('Bisküvi');
  const [selectedSize, setSelectedSize] = useState('400G');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Sabit ürün arama (find) işlemini sildik, doğrudan 'product' prop'unu kullanıyoruz
  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedAroma);
    }

    alert(`${quantity} adet ${product.name} sepete eklendi!`);

  };

  const aromas = [
    { name: 'Bisküvi', color: '#d9b99b' },
    { name: 'Çikolata', color: '#6d4c41' },
    { name: 'Muz', color: '#fdd835' },
    { name: 'Salted Caramel', color: '#bf6b30' },
    { name: 'Choco Nut', color: '#795548' },
    { name: 'Hindistan Cevizi', color: '#c1a67a' },
    { name: 'Raspberry Cheesecake', color: '#c2185b' },
    { name: 'Çilek', color: '#d32f2f' },
  ];

  const sizes = [
    { label: '400G', servings: '16 servis', discount: null },
    { label: '1.6KG', servings: '64 servis', discount: null },
    { label: '1.6KG X 2 ADET', servings: '128 servis', discount: '%6 İNDİRİM' }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        {/* Ürün İsmi Dinamik */}
        <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
          {product.name}
        </h1>
        {/* Ürün Açıklaması Dinamik */}
        <p className="text-gray-500 text-xs font-bold italic uppercase tracking-[0.2em] mt-2">
          {product.description || "Yüksek performanslı besin takviyesi"}
        </p>

        <div className="flex items-center gap-2 mt-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <span className="text-[11px] font-bold text-gray-900 uppercase">
            {product.reviews || "120"} Yorum
          </span>
        </div>
      </div>

      <div className="flex gap-2 border-t border-gray-100 pt-4">
        <span className="bg-[#F2F2F2] px-4 py-2 text-[10px] font-bold uppercase rounded-full">VEJETARYEN</span>
        <span className="bg-[#F2F2F2] px-4 py-2 text-[10px] font-bold uppercase rounded-full">GLUTENSİZ</span>
      </div>

      {/* Aroma Seçimi */}
      <div className="mt-2">
        <label className="text-[11px] font-black italic uppercase text-black tracking-widest">AROMA:</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {aromas.map((aroma) => (
            <button
              key={aroma.name}
              onClick={() => setSelectedAroma(aroma.name)}
              className={`relative flex items-center h-10 border-2 transition-all overflow-hidden
                ${selectedAroma === aroma.name ? 'border-blue-700' : 'border-[#F2F2F2] bg-[#F2F2F2]'}`}
            >
              <span className={`px-4 text-[11px] font-bold italic uppercase ${selectedAroma === aroma.name ? 'text-black' : 'text-gray-500'}`}>
                {aroma.name}
              </span>
              <div className="w-6 h-full ml-auto" style={{ backgroundColor: aroma.color }} />
              {selectedAroma === aroma.name && (
                <div className="absolute top-0 right-0 bg-blue-700 w-4 h-4 flex items-center justify-center translate-x-1 -translate-y-1 rotate-45">
                  <Check size={8} color="white" strokeWidth={5} className="-rotate-45 translate-x-[1px]" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Boyut Seçimi */}
      <div className="mt-2">
        <label className="text-[11px] font-black italic uppercase text-black tracking-widest">BOYUT:</label>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {sizes.map((size) => (
            <button
              key={size.label}
              onClick={() => setSelectedSize(size.label)}
              className={`relative p-4 border-2 flex flex-col items-center transition-all min-h-[80px] justify-center
                ${selectedSize === size.label ? 'border-blue-700' : 'border-[#F2F2F2] bg-white'}`}
            >
              {size.discount && (
                <span className="absolute -top-3 right-4 bg-[#EF4444] text-white text-[9px] font-black px-2 py-1 uppercase italic">
                  {size.discount}
                </span>
              )}
              <span className="font-black italic text-sm">{size.label}</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase">{size.servings}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fiyat ve Sepete Ekle */}
      <div className="mt-4 pt-6">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-5xl font-black italic">
            {(product.price * quantity).toLocaleString()} TL {/* Miktar ile fiyat çarpımı! */}
          </span>
        </div>

        <div className="flex gap-4 h-[55px]">
          <div className="flex items-center border border-gray-200 bg-[#F2F2F2]">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="px-4 h-full hover:bg-gray-200 transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-black italic">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 h-full hover:bg-gray-200">
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-black text-white font-black italic uppercase text-sm flex items-center justify-center gap-3 hover:bg-blue-800 transition-colors"
          >
            <ShoppingCart size={18} />
            SEPETE EKLE
          </button>
        </div>
      </div>

      {/* Avantajlar */}
      <div className="grid grid-cols-3 gap-2 mt-4 py-4 border-t border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Truck size={16} className="text-gray-400" />
          <span className="text-[9px] font-bold uppercase leading-tight">Aynı Gün<br />Ücretsiz Kargo</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-gray-400" />
          <span className="text-[9px] font-bold uppercase leading-tight">Güvenli<br />Alışveriş</span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw size={16} className="text-gray-400" />
          <span className="text-[9px] font-bold uppercase leading-tight">%100 Orijinal<br />Ürün Garantisi</span>
        </div>
      </div>
    </div >
  );
};
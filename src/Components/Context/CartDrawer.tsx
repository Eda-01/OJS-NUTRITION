import { X, Trash2, Plus, Minus, ChevronRight } from "lucide-react";
import { useCart } from "../Context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void; 
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
  const isEmpty = cartItems.length === 0;

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[200] backdrop-blur-sm transition-opacity" 
          onClick={onClose} 
        />
      )}
      <div className={`fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white z-[201] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
            <div className="flex-1 text-center text-black">
                <h2 className="font-black italic text-xl tracking-[0.2em] uppercase">SEPETİM</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-200">
            {isEmpty ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <Trash2 size={32} className="text-gray-300" />
                </div>
                <p className="text-gray-400 font-medium italic">Sepetinizde Ürün Bulunmamaktadır</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 bg-gray-50 rounded-lg shrink-0 flex items-center justify-center p-2 border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start text-black">
                        <div>
                          <h3 className="font-black italic text-[13px] uppercase tracking-tight">{item.name}</h3>
                          <p className="text-[10px] text-gray-500 font-bold uppercase mt-0.5">{item.selectedAroma || "Ahududu"}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">250g</p>
                        </div>
                        <span className="font-black text-sm italic">{item.price} TL</span>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3 text-black">
                        <div className="flex items-center border border-gray-200 rounded-md bg-white shadow-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-gray-50 text-gray-500 border-r"
                          >
                            {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                          </button>
                          <span className="px-4 text-[13px] font-black italic">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-gray-50 text-gray-500 border-l"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="p-6 border-t bg-white space-y-4">
            <div className="flex justify-between items-end text-black">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">TOPLAM</span>
              <span className="font-black italic text-2xl tracking-tighter">
                {totalPrice.toLocaleString('tr-TR')} TL
              </span>
            </div>
            <button 
              onClick={onCheckout}
              disabled={isEmpty}
              className={`w-full py-5 px-8 font-black italic tracking-[0.15em] flex justify-between items-center transition-all active:scale-[0.98] uppercase text-sm
                ${isEmpty 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-zinc-800'}`}
            >
              <span>DEVAM ET</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
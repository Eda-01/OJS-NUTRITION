import { useState } from 'react';
import { User, ShoppingCart, ChevronDown, LogIn, UserPlus, Package, LogOut } from 'lucide-react';
import { useCart } from '../Context/CartContext';

interface AccountActionsProps {
  onCartClick: () => void;
  onAccountClick: () => void;
  user: { name: string } | null; // Bu satırı ekle
}

export const AccountActions = ({ onCartClick, onAccountClick,user }: AccountActionsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center gap-2 md:gap-3 shrink-0 relative">
      
      {/* HESAP BUTONU */}
      <div 
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        className="relative py-2 hidden lg:block"
      >
        <div 
          // 1. Ana butonun kendisine tıklayınca modalı aç
          onClick={onAccountClick}
          className="flex items-center gap-2 border-2 border-gray-300 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <User size={18} className="text-gray-600" />
          <span className="font-bold text-gray-500 text-[11px] uppercase">
            {/* user varsa ismini, yoksa HESAP yazıyoruz */}
            {user ? user.name : "HESAP"}
          </span>
          <ChevronDown size={14} className={`text-gray-500 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
        </div>

        {/* DROPDOWN MENU */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 w-48 bg-white border border-gray-200 shadow-xl z-[110] py-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {!isLoggedIn ? (
              <>
                {/* 2. Giriş Yap ve Kayıt Ol butonlarına tıklayınca modalı aç */}
                <button 
                  onClick={onAccountClick}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold hover:bg-gray-50 text-gray-700"
                >
                  <LogIn size={16} className="text-[#2B3292]" /> GİRİŞ YAP
                </button>
                <button 
                  onClick={onAccountClick}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold hover:bg-gray-50 text-gray-700 border-t border-gray-100"
                >
                  <UserPlus size={16} className="text-[#2B3292]" /> ÜYE OL
                </button>
              </>
            ) : (
              <>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold hover:bg-gray-50 text-gray-700">
                  <Package size={16} className="text-[#2B3292]" /> SİPARİŞLERİM
                </button>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold hover:bg-gray-50 text-red-600 border-t border-gray-100"
                >
                  <LogOut size={16} /> ÇIKIŞ YAP
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* SEPET BUTONU */}
      <div 
        onClick={onCartClick}
        className="flex items-center justify-center gap-2 bg-[#4A4A4A] text-white h-10 md:h-11 px-3 md:px-4 cursor-pointer hover:bg-black transition-colors relative"
      >
        <div className="relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-3 -right-2 bg-red-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-white">
            {cartCount}
          </span>
        </div>
        <span className="font-bold text-xs uppercase hidden lg:block">SEPET</span>
      </div>

    </div>
  );
};
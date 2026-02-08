import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { INFO_STRIP_DATA, NAV_CATEGORIES } from "../Data";
import { AccountActions } from "./AccountActions";
import { CategoryBar } from "./CategoryBar";
import { InfoBar } from "./InfoBar";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

interface NavbarProps {
  onCategoryClick: (categoryName: string) => void;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  onAccountClick: () => void;
  onLogoClick: () => void;
  user: { name: string } | null;
}

export const Navbar = ({
  onCategoryClick,
  onCartClick,
  onSearch,
  onAccountClick,
  onLogoClick,
  user
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm sticky top-0 z-[100] bg-white">
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4 flex items-center justify-between gap-2 md:gap-4">

          {/* Mobil Menü Butonu */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div onClick={onLogoClick} className="cursor-pointer">
            <Logo />
          </div>

          {/* Masaüstü Arama */}
          <div className="hidden lg:block flex-1 max-w-xl mx-8">
            <SearchBar onSearch={onSearch} />
          </div>

          <AccountActions
            onCartClick={onCartClick}
            onAccountClick={onAccountClick}
            user={user}
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <CategoryBar
          categories={NAV_CATEGORIES}
          onCategoryClick={onCategoryClick}
        />
      </div>
      <InfoBar infoData={INFO_STRIP_DATA} />

      {/* MOBİL MENÜ PANELİ */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl p-4 z-50 animate-in slide-in-from-top duration-300">
          <div
            onClick={() => {
              onAccountClick();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-4 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="bg-white p-2 rounded-full shadow-sm text-black">
              <User size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black italic">HESABIM</span>
              <span className="text-[11px] text-gray-500">Giriş Yap veya Kayıt Ol</span>
            </div>
          </div>
          <div className="mb-6">
            <SearchBar onSearch={onSearch} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-gray-400 text-[10px] uppercase mb-2 tracking-widest">Kategoriler</h3>
            {NAV_CATEGORIES.map((cat, index) => {
              const name = typeof cat === 'object' ? cat.name : cat;
              const id = typeof cat === 'object' ? cat.id : index;
              return (
                <button
                  key={id}
                  onClick={() => {
                    onCategoryClick(name);
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-3 border-b border-gray-50 font-black italic text-base uppercase flex justify-between items-center text-left w-full hover:bg-gray-50 transition-colors"
                >
                  {name}
                  <span className="text-gray-300">→</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  );
};
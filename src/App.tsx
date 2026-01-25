import { useState, useEffect } from "react";
import { BrandBanner } from "./Components/Banner/BrandBanner";
import { CategoryCard } from "./Components/Categories/CategoryCard";
import { ProductCard } from "./Components/Categories/ProductCard";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { BEST_SELLERS, CATEGORY_CARDS, HERO_DATA } from "./Components/Data";
import bannerImg from "./assets/20.png";
import { Footer } from "./Components/Footer/Footer";
import { ReviewsSection } from "./Components/Categories/ReviewSection";
import { ProductPage } from "./Components/ProductDetail/ProductPage";
import { ProductList } from "./Components/ProductList/ProductList";
import { CartProvider } from './Components/Context/CartContext';
import { CartDrawer } from "../src/Components/Context/CartDrawer";
import { AuthPage } from "./Components/Navbar/AuthPage";


function App() {
  const [view, setView] = useState<'home' | 'product' | 'category' | 'auth' | 'profile'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<{ name: string } | null>(null);

  // --- 1. SEÇİLEN ÜRÜN İÇİN HAFIZA (STATE) EKLEDİK ---
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedCategory]);

  const handleCategoryClick = (categoryName: string) => {
    setSearchQuery("");
    setSelectedCategory(categoryName);
    setView('category');
  };

  const handleLogin = (userData: { name: string }) => {
    setUser(userData);
    setView('home');
  };

  // --- 2. ÜRÜNÜ YAKALAYAN VE SAYFAYI DEĞİŞTİREN FONKSİYON ---
  const handleProductSelect = (product: any) => {
    setSelectedProduct(product); // Tıklanan ürünü not aldık
    setView('product');          // Ürün detay sayfasını açtık
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setView('category');
      setSelectedCategory("ARAMA SONUÇLARI");
    } else {
      if (selectedCategory === "ARAMA SONUÇLARI") setView('home');
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar
          onCategoryClick={handleCategoryClick}
          onCartClick={() => setIsCartOpen(true)}
          onSearch={handleSearch}
          onAccountClick={() => setView('auth')}
          onLogoClick={() => setView('home')}
          user={user} // Bu prop'u buraya ekledik
        />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        <main className="flex-grow">
          {/* --- ANA SAYFA --- */}
          {view === 'home' && (
            <>
              <Hero {...HERO_DATA} />
              <section className="w-full py-12 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {CATEGORY_CARDS.map((card) => (
                      <div key={card.id} onClick={() => handleCategoryClick(card.name)} className="cursor-pointer">
                        <CategoryCard {...card} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* --- ÇOK SATANLAR (Dinamik Hale Getirildi) --- */}
              <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                  <h2 className="text-center text-xl font-black italic mb-10 tracking-widest text-[#1A1A1A]">
                    ÇOK SATANLAR
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2">
                    {BEST_SELLERS.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductSelect(product)} // Her ürün kendi verisini gönderiyor
                        className="cursor-pointer"
                      >
                        <ProductCard {...product} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <BrandBanner imageSrc={bannerImg} />
              <ReviewsSection />
            </>
          )}

          {/* --- KATEGORİ LİSTESİ --- */}
          {view === 'category' && (
            <div className="animate-in fade-in duration-500">
              <ProductList
                categoryTitle={selectedCategory}
                searchQuery={searchQuery}
                onProductSelect={handleProductSelect} // Kategori sayfasındaki ürünler için de aynı fonksiyon
              />
            </div>
          )}

          {/* --- ÜRÜN DETAYI (Seçilen Ürün Bilgisiyle) --- */}
          {view === 'product' && (
            <div className="animate-in fade-in duration-500">
              <ProductPage
                product={selectedProduct} // Hafızadaki ürünü içeri yolluyoruz
                onBack={() => {
                  selectedCategory ? setView('category') : setView('home');
                }}
              />
            </div>
          )}

          {/* --- GİRİŞ / KAYIT SAYFASI --- */}
          {view === 'auth' && (
            <AuthPage onLoginSuccess={handleLogin} />
          )}
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
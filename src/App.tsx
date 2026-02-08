import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { CartProvider } from './Components/Context/CartContext';
import { CartDrawer } from "./Components/Context/CartDrawer";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigate = useNavigate();

  return (
    <CartProvider>
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Navbar
          onCategoryClick={(cat) => navigate(`/urunler?category=${cat}`)}
          onCartClick={() => setIsCartOpen(true)}
          onSearch={(query) => navigate(`/urunler?search=${query}`)}
          onAccountClick={() => navigate(user ? '/profile' : '/auth')}
          onLogoClick={() => navigate('/')}
          user={user}
        />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => {
            setIsCartOpen(false);
            navigate('/checkout');
          }}
        />

        <main className="flex-grow">
          <Outlet context={{ user, setUser }} />
        </main>

        <Footer
          onContactClick={() => navigate('/iletisim')} 
          onFAQClick={() => navigate('/faq')}
          onAboutClick={() => navigate('/hakkimizda')}
        />
      </div>
    </CartProvider>
  );
}

export default App;
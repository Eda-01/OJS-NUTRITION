import { BrandBanner } from "./Components/Banner/BrandBanner";
import { CategoryCard } from "./Components/Categories/CategoryCard";
import { ProductCard } from "./Components/Categories/ProductCard";
import { ReviewsSection } from "./Components/Categories/ReviewCard";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { BEST_SELLERS, CATEGORY_CARDS, HERO_DATA} from "./Components/Data";
import bannerImg from "./assets/20.png";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero {...HERO_DATA} /> 
        <section className="w-full py-12 bg-white">
  {/* max-w-6xl kartları merkeze toplar ve daha kibar gösterir */}
  <div className="max-w-1200px mx-auto px-6"> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {CATEGORY_CARDS.map((card) => (
        <CategoryCard key={card.id} {...card} />
      ))}
    </div>
  </div>
</section>
<section className="py-16 bg-white">
  <div className="max-w-1200px mx-auto px-4">
    <h2 className="text-center text-xl font-black italic mb-10 tracking-widest text-[#1A1A1A]">
      ÇOK SATANLAR
    </h2>
    
    {/* Masaüstünde 6, mobilde 2 kolonlu yapı */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2">
      {BEST_SELLERS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </div>
</section>
<BrandBanner imageSrc={bannerImg} />
<ReviewsSection />
<Footer />
      </main>
    </div>
    
  );
}

export default App;
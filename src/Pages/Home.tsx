import { useLoaderData, useNavigate } from "react-router-dom";
import { Hero } from "../Components/Hero/Hero";
import { CategoryCard } from "../Components/Categories/CategoryCard";
import { BrandBanner } from "../Components/Banner/BrandBanner";
import { ReviewsSection } from "../Components/Categories/ReviewSection";
import { CATEGORY_CARDS, HERO_DATA } from "../Components/Data";
import bannerImg from "../assets/20.png";
import { getFullImageUrl } from "../Services/api";
import ProductCard from "../Components/Categories/ProductCard";

const Home = () => {
    const { bestSellers } = useLoaderData() as { bestSellers: any[] };
    const navigate = useNavigate();

    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Bölümü */}
            <Hero {...HERO_DATA} />

            {/* Kategoriler */}
            <section className="w-full py-12 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CATEGORY_CARDS.map((card) => (
                            <div
                                key={card.id}
                                onClick={() => navigate(`/urunler?category=${card.name}`)}
                                className="cursor-pointer"
                            >
                                <CategoryCard {...card} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Çok Satanlar */}
            <section className="py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-center text-xl font-black italic mb-10 tracking-widest text-[#1A1A1A] uppercase">
                        ÇOK SATANLAR
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {bestSellers.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => navigate(`/urun/${product.slug}`)}
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
        </div>
    );
};

export default Home;
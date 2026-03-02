import { useLoaderData, useNavigate } from "react-router-dom";
import ProductCard from "../Components/Categories/ProductCard";

const AllProducts = () => {
  const { products } = useLoaderData() as { products: { data: any[] } };
  const productList = products?.data || [];
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-black italic mb-10 tracking-tighter text-[#1A1A1A] uppercase text-center border-b pb-8">
          TÜM ÜRÜNLER
        </h1>

 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {productList.map((product: any) => {
    // BURADAKİ variant SATIRINI SİLDİK
    return (
      <div key={product.id} onClick={() => navigate(`/urun/${product.slug}`)}>
        <ProductCard 
          name={product.name}
          image={product.image} // api.ts'den gelen temiz veri
          shortDescription={product.shortDescription} // api.ts'den gelen temiz veri
          price={product.price} // ARTIK DOĞRUDAN product.price (0 TL sorununu çözen yer)
          discountedPrice={product.discountedPrice}
          hasDiscount={product.hasDiscount}
          comments={product.comments}
          rating={product.rating}
        />
      </div>
    );
  })}
</div>
      </div>
    </div>
  );
};

export default AllProducts;
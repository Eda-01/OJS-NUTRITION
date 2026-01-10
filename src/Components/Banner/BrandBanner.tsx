export const BrandBanner = ({ imageSrc }: { imageSrc: string }) => {
  return (
    // w-full ile tüm genişliği kaplıyoruz, py-10 ile alt/üst boşluk veriyoruz
    <section className="w-full bg-[#1A1A1A]">
      <div className="w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt="OJS Nutrition Banner" 
          // h-auto resmin oranını korur, w-full yanları tam kaplar
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
};
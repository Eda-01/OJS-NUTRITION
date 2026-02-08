export const BrandBanner = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <section className="w-full bg-[#1A1A1A]">
      <div className="w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt="OJS Nutrition Banner" 
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
};
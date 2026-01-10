interface HeroProps {
  imageSrc: string;
}

export const Hero = ({ imageSrc}: HeroProps) => {
  return (
    <section className="relative w-full bg-[#D9E9F1] overflow-hidden flex items-center justify-center">
      
      {/* container kaldırıldı → full width */}
      <div className="w-full relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          <div className="relative w-full flex justify-center items-end mt-4">
            <img 
              src={imageSrc} 
              alt="Hero"
              className="
                w-full 
                h-auto 
                object-cover 
                block
                transform scale-110 md:scale-110 origin-bottom
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  name: string;
  image: string;
  bgColor: string;
}

export const CategoryCard = ({ name, image, bgColor }: CategoryCardProps) => {
  return (
    <div className={`relative ${bgColor} rounded-xl overflow-hidden h-[160px] flex items-center shadow-sm group cursor-pointer transition-transform hover:scale-[1.01]`}>
      
      {/* Sol Taraf: Ürün Görseli */}
      <div className="w-[45%] h-full flex items-center justify-center p-2">
        <img 
          src={image} 
          alt={name} 
          // object-contain sayesinde resim kesilmez, kartın içine sığar
          className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* Sağ Taraf: Metin ve Buton */}
      <div className="w-[55%] flex flex-col items-center justify-center text-center px-2">
        <h3 className="text-xl md:text-2xl font-black italic text-[#1A1A1A] leading-tight mb-4 uppercase tracking-tighter">
          {/* Kelimeleri alt alta getirmek için split kullanıyoruz */}
          {name.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h3>
        
        <button className="bg-black text-white text-[11px] font-bold py-2 px-8 rounded-lg hover:bg-zinc-800 transition-colors uppercase">
          İNCELE
        </button>
      </div>

    </div>
  );
};
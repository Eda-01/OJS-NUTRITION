interface Category {
  id: number;
  name: string;
}

interface CategoryBarProps {
  categories: Category[];
}

export const CategoryBar = ({ categories }: CategoryBarProps) => {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        {/* Mobil için 'overflow-x-auto' ekledik, böylece taşarsa kaydırılabilir */}
        <ul className="flex items-center justify-center gap-6 md:gap-10 py-3 text-xs md:text-sm font-bold tracking-wide overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <li 
              key={cat.id} 
              className="hover:text-primary cursor-pointer transition-colors shrink-0"
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
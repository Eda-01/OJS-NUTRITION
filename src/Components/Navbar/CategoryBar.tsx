interface Category {
  id: number;
  name: string;
}

interface CategoryBarProps {
  categories: Category[];
  onCategoryClick: (categoryName: string) => void;
}

export const CategoryBar = ({ categories, onCategoryClick }: CategoryBarProps) => {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-6 md:gap-10 py-3 text-[11px] font-bold tracking-widest overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map((cat) => (
            <li 
              key={cat.id} 
              onClick={() => onCategoryClick(cat.name)}
              className="hover:text-blue-400 cursor-pointer transition-colors shrink-0 uppercase italic"
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
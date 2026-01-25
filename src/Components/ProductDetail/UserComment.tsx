import { Star } from 'lucide-react';

interface UserCommentProps {
  name: string;
  date: string;
  title: string;
  text: string;
  stars: number;
}

export const UserComment = ({ name, date, title, text, stars }: UserCommentProps) => {
  return (
    <div className="py-8 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < stars ? "currentColor" : "none"} className={i < stars ? "" : "text-gray-200"} />
          ))}
        </div>
        <span className="text-[10px] text-gray-400 font-bold">{date}</span>
      </div>

      <h4 className="font-black italic text-sm uppercase mb-1">{name}</h4>
      <p className="font-bold text-[#1A1A1A] text-sm mb-2">{title}</p>
      <p className="text-gray-500 text-xs leading-relaxed italic font-medium">"{text}"</p>
    </div>
  );
};
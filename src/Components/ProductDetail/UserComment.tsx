import { Star } from 'lucide-react';

export const UserComment = ({ name, date, title, text, stars }: any) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-6 mb-4">
        <div className="flex gap-0.5 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < stars ? "currentColor" : "none"} stroke={i < stars ? "none" : "#D1D5DB"} />
          ))}
        </div>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{date}</span>
      </div>
      <h4 className="font-black italic text-lg text-[#1A1A1A] uppercase mb-1">{name}</h4>
      <p className="font-extrabold text-[#1A1A1A] text-sm mb-3 uppercase">{title}</p>
      <p className="text-gray-500 text-[13px] leading-relaxed italic font-medium max-w-3xl">
        "{text}"
      </p>
    </div>
  );
};
interface ReviewCardProps {
  date: string;
  title: string;
  text: string;
}

export const ReviewCard = ({ date, title, text }: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-3 h-full group pr-4">
      <span className="text-[11px] text-gray-400 font-bold italic tracking-wider">
        {date}
      </span>
      <h4 className="font-extrabold text-[#1A1A1A] text-base leading-tight">
        {title}
      </h4>
      <p className="text-[13px] text-gray-500 leading-relaxed italic font-medium">
        "{text}"
      </p>
    </div>
  );
};
import { Box, Smile, ShieldCheck, type LucideIcon } from 'lucide-react';

interface InfoItemData {
  id: number;
  title: string;
  desc: string;
}

interface InfoBarProps {
  infoData: InfoItemData[];
}

const icons: Record<number, LucideIcon> = {
  1: Box,
  2: Smile,
  3: ShieldCheck
};

export const InfoBar = ({ infoData }: InfoBarProps) => {
  return (
    <div className="hidden md:block bg-[#F5F5F5] border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center gap-4">
        {infoData.map((item) => {
          const Icon = icons[item.id] || Box;
          return (
            <div key={item.id} className="flex items-center gap-2 shrink-0">
              <Icon size={14} className="text-gray-400" />
              <p className="text-[9px] lg:text-[11px] font-bold text-gray-600 tracking-tight whitespace-nowrap">
                <span className="text-black uppercase">{item.title}</span> - {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
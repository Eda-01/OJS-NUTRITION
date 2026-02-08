import { Star } from 'lucide-react';

export const ReviewStats = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 border-b border-gray-100">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="flex flex-col items-center min-w-[200px]">
          <div className="text-center mb-6">
            <h3 className="text-5xl font-medium text-[#1A1A1A] mb-2">4.8</h3>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#1A1A1A]">
              10869 YORUM
            </p>
          </div>
          <button className="bg-[#3D66BF] hover:bg-[#2A4B8C] text-white rounded-full px-10 py-3.5 text-sm font-bold uppercase transition-all shadow-lg">
            YORUM (10869)
          </button>
        </div>
        <div className="flex-1 w-full max-w-md flex flex-col gap-3 pt-2">
          {[
            { star: 5, count: 9284, width: '90%' },
            { star: 4, count: 1316, width: '15%' },
            { star: 3, count: 226, width: '5%' },
            { star: 2, count: 32, width: '2%' },
            { star: 1, count: 11, width: '1%' },
          ].map((item) => (
            <div key={item.star} className="flex items-center gap-4">
              <div className="flex items-center gap-0.5 min-w-[70px] justify-end">
                {[...Array(item.star)].map((_, i) => (
                  <Star key={i} size={12} fill="#FFC107" stroke="none" />
                ))}
              </div>
              <div className="flex-1 h-2.5 bg-[#F1F1F1] rounded-sm overflow-hidden">
                <div 
                  className="h-full bg-[#2A3BA7]" 
                  style={{ width: item.width }}
                ></div>
              </div>
              <span className="text-[11px] font-bold text-[#3D66BF] min-w-[40px]">
                ({item.count})
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
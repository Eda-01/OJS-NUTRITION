import { Star } from 'lucide-react';

export const ReviewStats = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 py-10 border-b border-gray-100">
      {/* Büyük Puan */}
      <div className="text-center">
        <h3 className="text-6xl font-black italic tracking-tighter">4.8</h3>
        <div className="flex text-yellow-400 my-2">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
        </div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">198453 YORUM</p>
      </div>

      {/* Yıldız Çubukları (Progress Bars) */}
      <div className="flex-1 w-full max-w-md flex flex-col gap-2">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center gap-4">
            <span className="text-[10px] font-bold w-4">{star}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600" 
                style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : '5%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Yorum Yap Butonu */}
      <button className="bg-blue-600 text-white px-8 py-3 font-black italic uppercase text-xs hover:bg-black transition-all">
        YORUM YAP
      </button>
    </div>
  );
};
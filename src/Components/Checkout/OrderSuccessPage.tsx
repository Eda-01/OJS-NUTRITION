import React, { useEffect } from 'react';
import { CheckCircle2, Package, Truck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti'; 

export const OrderSuccessPage: React.FC<{ onReturnHome: () => void }> = ({ onReturnHome }) => {
  
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-[600px] w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        
        {/* İkon ve Başlık */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={60} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-black">
            SİPARİŞİNİZ ALINDI!
          </h1>
          <p className="text-gray-500 font-bold mt-2 uppercase tracking-widest text-xs">
            Sipariş Numaranız: <span className="text-black">#OJS-772341</span>
          </p>
        </div>

        {/* Süreç Bilgisi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y py-8 border-gray-100">
          <div className="flex flex-col items-center gap-2">
            <Package size={20} className="text-gray-400" />
            <span className="text-[10px] font-black uppercase italic">Hazırlanıyor</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Truck size={20} className="text-gray-400" />
            <span className="text-[10px] font-black uppercase italic">Kargoya Verilecek</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-green-600">
            <CheckCircle2 size={20} />
            <span className="text-[10px] font-black uppercase italic">Onaylandı</span>
          </div>
        </div>

        {/* Bilgilendirme */}
        <div className="bg-gray-50 p-6 rounded-2xl text-left">
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            Harika bir seçim yaptın! Siparişinle ilgili tüm detayları ve kargo takip numaranı birazdan 
            <span className="text-black font-bold"> e-posta</span> adresine göndereceğiz. 
            Beslenme programına sadık kalmayı unutma!
          </p>
        </div>

        {/* Buton */}
        <button 
          onClick={onReturnHome}
          className="w-full bg-black text-white font-black italic py-5 rounded-md uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-[0.98]"
        >
          ALIŞVERİŞE DEVAM ET
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
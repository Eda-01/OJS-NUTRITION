import React, { useState } from 'react';
import { CreditCard, Truck, Check } from 'lucide-react'; 
import { useCart } from '../Context/CartContext';

interface CheckoutPageProps {
  onSuccess: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onSuccess }) => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1); 

  const handleFinish = () => {
    clearCart();
    onSuccess();
  };

  return (
    <div className="bg-white min-h-screen pt-10">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* SOL TARAF: FORM ADIMLARI */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <h1 className="text-xl font-black italic uppercase tracking-tighter text-black">OJS NUTRITION</h1>
              <span className="text-gray-300">|</span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Güvenli Ödeme</span>
            </div>

            {/* ADIM 1: ADRES BİLGİLERİ */}
            <div className={`border-b pb-8 transition-all duration-300 ${step !== 1 ? 'opacity-60' : 'opacity-100'}`}>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4 text-black">
                  <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors ${step === 1 ? 'bg-black text-white border-black' : 'bg-green-500 border-green-500 text-white'}`}>
                    {step > 1 ? <Check size={16} /> : "1"}
                  </span>
                  <h2 className="text-lg font-black italic uppercase tracking-tight text-black">Adres Bilgileri</h2>
                </div>

                {step > 1 && (
                  <button
                    onClick={() => setStep(1)}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 hover:text-blue-800 transition-colors border-b border-blue-600"
                  >
                    DÜZENLE
                  </button>
                )}
              </div>

              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-500">
                  <input type="text" placeholder="AD" className="border p-3 rounded-md text-xs font-bold outline-none focus:border-black uppercase bg-white text-black" />
                  <input type="text" placeholder="SOYAD" className="border p-3 rounded-md text-xs font-bold outline-none focus:border-black uppercase bg-white text-black" />
                  <input type="email" placeholder="E-POSTA" className="md:col-span-2 border p-3 rounded-md text-xs font-bold outline-none focus:border-black uppercase bg-white text-black" />
                  <textarea placeholder="TESLİMAT ADRESİ" rows={3} className="md:col-span-2 border p-3 rounded-md text-xs font-bold outline-none focus:border-black uppercase bg-white text-black" />
                  <button
                    onClick={() => setStep(2)}
                    className="md:col-span-2 bg-black text-white font-black italic py-4 rounded-md uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-[0.99]"
                  >
                    Kargo Seçimine Geç
                  </button>
                </div>
              )}
            </div>

            {/* ADIM 2: KARGO SEÇİMİ */}
            <div className={`border-b pb-8 transition-all duration-300 ${step !== 2 ? 'opacity-60' : 'opacity-100'}`}>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4 text-black">
                  <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors ${step === 2 ? 'bg-black text-white border-black' : step > 2 ? 'bg-green-500 border-green-500 text-white' : 'border-zinc-200'}`}>
                    {step > 2 ? <Check size={16} /> : "2"}
                  </span>
                  <h2 className="text-lg font-black italic uppercase tracking-tight text-black">Kargo Seçimi</h2>
                </div>

                {step > 2 && (
                  <button
                    onClick={() => setStep(2)}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 hover:text-blue-800 transition-colors border-b border-blue-600"
                  >
                    DÜZENLE
                  </button>
                )}
              </div>

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                  <div className="border-2 border-black p-5 rounded-xl flex justify-between items-center cursor-pointer bg-gray-50">
                    <div className="flex items-center gap-4 text-black">
                      <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                        <Truck size={24} />
                      </div>
                      <div>
                        <p className="font-black italic text-sm uppercase tracking-tight">Yurtiçi Kargo</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">1-3 İş Gününde Teslim</p>
                      </div>
                    </div>
                    <span className="font-black text-sm text-green-600 italic uppercase">Ücretsiz</span>
                  </div>
                  <button
                    onClick={() => setStep(3)}
                    className="w-full bg-black text-white font-black italic py-4 rounded-md uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-[0.99]"
                  >
                    Ödeme Yöntemine Geç
                  </button>
                </div>
              )}
            </div>

            {/* ADIM 3: ÖDEME YÖNTEMİ */}
            <div className={`transition-all duration-300 ${step !== 3 ? 'opacity-60' : 'opacity-100'}`}>
              <div className="flex items-center gap-4 mb-6 text-black">
                <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors ${step === 3 ? 'bg-black text-white border-black' : 'border-zinc-200'}`}>3</span>
                <h2 className="text-lg font-black italic uppercase tracking-tight text-black">Ödeme Yöntemi</h2>
              </div>
              {step === 3 && (
                <div className="p-6 border border-gray-100 rounded-xl bg-[#F9F9F9] space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                  <div className="flex items-center gap-2 mb-4 text-black">
                    <CreditCard size={18} />
                    <span className="font-bold text-sm uppercase italic tracking-widest">Kredi / Banka Kartı</span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="KART ÜZERİNDEKİ İSİM" className="w-full border border-gray-200 p-3 rounded-md text-xs font-bold outline-none focus:border-black bg-white uppercase text-black" />
                    <input type="text" placeholder="KART NUMARASI" className="w-full border border-gray-200 p-3 rounded-md text-xs font-bold outline-none focus:border-black bg-white text-black" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="AA / YY" className="border border-gray-200 p-3 rounded-md text-xs font-bold outline-none focus:border-black bg-white text-black" />
                      <input type="text" placeholder="CVC" className="border border-gray-200 p-3 rounded-md text-xs font-bold outline-none focus:border-black bg-white text-black" />
                    </div>
                  </div>
                  
                  {/* DÜZELTİLEN BUTON */}
                  <button
                    onClick={handleFinish}
                    className="w-full bg-black text-white font-black italic py-5 rounded-md uppercase tracking-[0.2em] mt-6 hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-black/10"
                  >
                    ÖDEMEYİ TAMAMLA ({totalPrice.toLocaleString('tr-TR')} TL)
                  </button>
                  
                  <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-tighter">Güvenli ödeme altyapısı ile kart bilgileriniz saklanmaz.</p>
                </div>
              )}
            </div>
          </div>

          {/* SAĞ TARAF: SİPARİŞ ÖZETİ */}
          <div className="lg:col-span-4">
            <div className="bg-[#F9F9F9] p-8 rounded-2xl sticky top-24 border border-gray-100">
              <h3 className="font-black italic text-lg mb-6 uppercase tracking-tight text-black border-b pb-4">Sipariş Özeti</h3>

              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-20 h-20 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-2 relative shrink-0 shadow-sm">
                      <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                        {item.quantity}
                      </span>
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1 min-w-0 text-black">
                      <p className="text-[12px] font-black italic uppercase truncate leading-tight tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-tighter">{item.selectedAroma || "Aroma Yok"}</p>
                      <p className="text-sm font-black mt-2 italic">{item.price.toLocaleString('tr-TR')} TL</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex justify-between text-[13px] text-gray-500 font-bold italic tracking-tight uppercase">
                  <span>ARA TOPLAM</span>
                  <span className="text-black">{totalPrice.toLocaleString('tr-TR')} TL</span>
                </div>
                <div className="flex justify-between text-[13px] text-gray-500 font-bold italic tracking-tight uppercase">
                  <span>KARGO</span>
                  <span className="text-green-600 font-black">Ücretsiz</span>
                </div>
                <div className="flex justify-between items-center border-t border-black pt-5 mt-4 text-black">
                  <span className="text-base font-black italic uppercase tracking-tighter">TOPLAM TUTAR</span>
                  <span className="text-2xl font-black italic tracking-tighter">
                    {totalPrice.toLocaleString('tr-TR')} TL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
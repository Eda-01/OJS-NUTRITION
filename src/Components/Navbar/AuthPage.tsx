import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

interface AuthPageProps {
  onLoginSuccess?: (userData: { name: string }) => void; 
}

export const AuthPage = ({ onLoginSuccess }: AuthPageProps) => {
  const [type, setType] = useState<'login' | 'register'>('login');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { setUser } = useOutletContext() as any;
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const displayName = type === 'register' ? firstName : "MÜŞTERİ";
    const userData = { name: displayName.toUpperCase() || "HESABIM" };

    setUser(userData);

    if (onLoginSuccess) {
      onLoginSuccess(userData);
    }

    navigate('/profile');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-20 animate-in fade-in duration-500">
      <div className="w-full max-w-[500px] px-6">
        <div className="flex mb-10 border-b border-gray-100">
          <button
            type="button"
            onClick={() => setType('login')}
            className={`flex-1 py-4 font-black italic text-xs tracking-[0.2em] transition-all uppercase ${
                type === 'login' ? 'text-black border-b-2 border-black' : 'text-gray-300'
              }`}
          >
            Giriş Yap
          </button>
          <button
            type="button"
            onClick={() => setType('register')}
            className={`flex-1 py-4 font-black italic text-xs tracking-[0.2em] transition-all uppercase ${
                type === 'register' ? 'text-black border-b-2 border-black' : 'text-gray-300'
              }`}
          >
            Üye Ol
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {type === 'register' && (
            <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black italic uppercase text-gray-400 tracking-widest">Adınız</label>
                <input 
                  required
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm transition-all uppercase" 
                  placeholder="AD"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black italic uppercase text-gray-400 tracking-widest">Soyadınız</label>
                <input 
                  required
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm transition-all uppercase" 
                  placeholder="SOYAD"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black italic uppercase text-gray-400 tracking-widest">E-Posta</label>
            <input 
              required
              type="email" 
              className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm transition-all uppercase" 
              placeholder="E-POSTA ADRESİNİZ"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black italic uppercase text-gray-400 tracking-widest">Şifre</label>
            <input 
              required
              type="password" 
              className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm transition-all" 
              placeholder="******"
            />
            {type === 'login' && (
              <button type="button" className="text-[10px] text-gray-400 font-black italic uppercase mt-1 text-right hover:text-black transition-colors">
                Şifremi Unuttum?
              </button>
            )}
          </div>

          <button type="submit" className="w-full bg-black text-white py-5 font-black italic text-xs tracking-[0.3em] hover:bg-[#2B3292] transition-all active:scale-[0.98] shadow-lg shadow-black/5">
            {type === 'login' ? 'GİRİŞ YAP' : 'HESAP OLUŞTUR'}
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-gray-50">
            <p className="text-center text-[10px] text-gray-400 font-black italic uppercase tracking-widest">
            {type === 'login' ? (
                <>
                Henüz bir hesabınız yok mu?
                <button
                    type="button"
                    className="text-black ml-2 border-b border-black pb-0.5 hover:text-[#2B3292] hover:border-[#2B3292]"
                    onClick={() => setType('register')}
                >
                    KAYIT OLUN
                </button>
                </>
            ) : (
                <>
                Zaten üyeliğiniz var mı?
                <button
                    type="button"
                    className="text-black ml-2 border-b border-black pb-0.5 hover:text-[#2B3292] hover:border-[#2B3292]"
                    onClick={() => setType('login')}
                >
                    GİRİŞ YAPIN
                </button>
                </>
            )}
            </p>
        </div>
      </div>
    </div>
  );
};
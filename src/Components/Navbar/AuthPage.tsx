import { useState } from 'react';

interface AuthPageProps {
  onLoginSuccess: (userData: { name: string }) => void; 
}

export const AuthPage = ({ onLoginSuccess }: AuthPageProps) => {
  const [type, setType] = useState<'login' | 'register'>('login');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Eğer giriş yapıyorsa (login) isim girilmemiş olabilir, 
    // bu durumda Navbar'a varsayılan bir isim gönderelim veya inputu login'de gizlediğimiz için 
    // sabit bir metin yollayalım. Kayıt oluyorsa girdiği ismi yollayalım.
    const displayName = type === 'register' ? firstName : "MÜŞTERİ";
    
    onLoginSuccess({ name: displayName.toUpperCase() || "HESABIM" });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-20">
      <div className="w-full max-w-[500px] px-6">

        {/* Sekmeli Yapı */}
        <div className="flex mb-10 border-b border-gray-100">
          <button
            onClick={() => setType('login')}
            className={`flex-1 py-4 font-bold text-sm tracking-widest transition-all ${
                type === 'login' ? 'text-black border-b-2 border-black' : 'text-gray-300'
              }`}
          >
            Giriş Yap
          </button>
          <button
            onClick={() => setType('register')}
            className={`flex-1 py-4 font-bold text-sm tracking-widest transition-all ${
                type === 'register' ? 'text-black border-b-2 border-black' : 'text-gray-300'
              }`}
          >
            Üye Ol
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Sadece Üye Olurken Gözükecek Alanlar */}
          {type === 'register' && (
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-300">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase text-gray-700">Adınız</label>
                <input 
                  required
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-[#F9F9F9] border border-gray-100 p-3 outline-none focus:border-gray-300" 
                  placeholder="Ad"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase text-gray-700">Soyadınız</label>
                <input 
                  required
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-[#F9F9F9] border border-gray-100 p-3 outline-none focus:border-gray-300" 
                  placeholder="Soyad"
                />
              </div>
            </div>
          )}

          {/* Her İki Durumda da Gözükecek Alanlar */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase text-gray-700">E-Posta</label>
            <input 
              required
              type="email" 
              className="bg-[#F9F9F9] border border-gray-100 p-3 outline-none focus:border-gray-300" 
              placeholder="E-posta adresiniz"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase text-gray-700">Şifre</label>
            <input 
              required
              type="password" 
              className="bg-[#F9F9F9] border border-gray-100 p-3 outline-none focus:border-gray-300" 
              placeholder="******"
            />
            {type === 'login' && (
              <button type="button" className="text-[10px] text-gray-400 underline text-right font-bold uppercase mt-1">
                Şifremi Unuttum?
              </button>
            )}
          </div>

          <button type="submit" className="w-full bg-black text-white py-4 font-bold text-xs tracking-[0.2em] hover:bg-gray-800 transition-colors">
            {type === 'login' ? 'GİRİŞ YAP' : 'ÜYE OL'}
          </button>
        </form>

        <p className="text-center mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          {type === 'login' ? (
            <>
              Henüz hesabınız yok mu?
              <span
                className="text-black cursor-pointer underline ml-1 hover:text-[#2B3292]"
                onClick={() => setType('register')}
              >
                KAYIT OL
              </span>
            </>
          ) : (
            <>
              Zaten hesabınız var mı?
              <span
                className="text-black cursor-pointer underline ml-1 hover:text-[#2B3292]"
                onClick={() => setType('login')}
              >
                GİRİŞ YAP
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
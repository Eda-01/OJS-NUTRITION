import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { api } from '../../Services/api';

interface AuthPageProps {
  onLoginSuccess?: (userData: { name: string }) => void;
}

export const AuthPage = ({ onLoginSuccess }: AuthPageProps) => {
  const [type, setType] = useState<'login' | 'register'>('login');

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const context = useOutletContext() as any;
  const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    if (type === 'login') {
      const response = await api.login({ 
        email: email.trim().toLowerCase(), 
        password 
      });
      // ... giriş başarılı işlemleri
      navigate('/profile');
    } else {
      // Şifre kontrolü (Çoğu backend en az 6 karakter ister)
      if (password.length < 6) {
        setError("ŞİFRE EN AZ 6 KARAKTER OLMALIDIR.");
        setLoading(false);
        return;
      }

      await api.register({
        firstName: firstName, // api.ts bunu first_name'e çevirecek
        lastName: lastName,   // api.ts bunu last_name'e çevirecek
        email: email.trim().toLowerCase(),
        password: password
      });

      alert("Kayıt başarılı! Giriş yapabilirsiniz.");
      setType('login');
    }
  } catch (err: any) {
    // 400 hatasının detayını ekrana basıyoruz
    const errorDetail = err.response?.data?.message;
    setError(Array.isArray(errorDetail) ? errorDetail.join(", ") : (errorDetail || "GİRİŞ BİLGİLERİ HATALI"));
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-20 animate-in fade-in duration-500">
      <div className="w-full max-w-[500px] px-6">

        {/* Hata Bildirimi */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 mb-6 text-[10px] font-black italic uppercase border-l-4 border-red-600 tracking-widest animate-shake">
            {error}
          </div>
        )}

        <div className="flex mb-10 border-b border-gray-100">
          <button
            type="button"
            onClick={() => { setType('login'); setError(null); }}
            className={`flex-1 py-4 font-black italic text-xs uppercase transition-all tracking-widest ${
                type === 'login' ? 'text-black border-b-2 border-black' : 'text-gray-300'
              }`}
          >
            Giriş Yap
          </button>
          <button
            type="button"
            onClick={() => { setType('register'); setError(null); }}
            className={`flex-1 py-4 font-black italic text-xs uppercase transition-all tracking-widest ${
                type === 'register' ? 'text-black border-b-2 border-black' : 'text-gray-300'
              }`}
          >
            Üye Ol
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {type === 'register' && (
            <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black italic uppercase text-gray-400">Adınız</label>
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm uppercase"
                  placeholder="AD"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black italic uppercase text-gray-400">Soyadınız</label>
                <input
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm uppercase"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Görsel olarak küçük harf kalması için 'uppercase' sınıfı kaldırıldı
              className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm transition-all lowercase"
              placeholder="e-posta adresiniz"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black italic uppercase text-gray-400 tracking-widest">Şifre</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#F9F9F9] border border-gray-100 p-4 outline-none focus:border-black font-bold text-sm"
              placeholder="******"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`w-full bg-black text-white py-5 font-black italic text-xs tracking-[0.3em] transition-all active:scale-[0.98] ${
              loading ? 'opacity-50 cursor-wait' : 'hover:bg-[#2B3292]'
            }`}
          >
            {loading ? 'YÜKLENİYOR...' : (type === 'login' ? 'GİRİŞ YAP' : 'HESAP OLUŞTUR')}
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-gray-50 text-center">
            <button
              type="button"
              className="text-[10px] text-gray-400 font-black italic uppercase tracking-widest hover:text-black transition-colors"
              onClick={() => setType(type === 'login' ? 'register' : 'login')}
            >
              {type === 'login' ? 'Henüz bir hesabınız yok mu? KAYIT OLUN' : 'Zaten üyeliğiniz var mı? GİRİŞ YAPIN'}
            </button>
        </div>
      </div>
    </div>
  );
};
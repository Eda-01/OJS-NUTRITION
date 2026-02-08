import React, { useState } from 'react';
import { Package, MapPin, User, Lock, LogOut, ChevronRight } from 'lucide-react';
import { USER_DATA, USER_ORDERS } from '../Data/ProfileData';


interface ProfilePageProps {
    user: {
        name: string;
        username?: string;
    } | null;
    onLogout: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout }) => {
    const [activeTab, setActiveTab] = useState('info');

    const menuItems = [
        { id: 'info', label: 'HESAP BİLGİLERİ', icon: <User size={18} /> },
        { id: 'orders', label: 'SİPARİŞLERİM', icon: <Package size={18} /> },
        { id: 'addresses', label: 'ADRESLERİM', icon: <MapPin size={18} /> },
        { id: 'password', label: 'ŞİFRE DEĞİŞTİR', icon: <Lock size={18} /> },
    ];

    return (
        <div className="max-w-[1200px] mx-auto px-6 py-12 min-h-[70vh]">
            <div className="flex flex-col md:flex-row gap-12">

                {/* SOL MENÜ */}
                <div className="w-full md:w-64 shrink-0">
                    <div className="mb-8">
                        <h2 className="text-2xl font-black italic uppercase tracking-tighter">Merhaba,</h2>
                        <p className="text-[#2B3292] text-xl font-black italic uppercase leading-none">{user?.name || USER_DATA.name}</p>
                    </div>
                    <nav className="flex flex-col gap-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center justify-between p-4 font-bold italic text-xs tracking-widest transition-all ${
                                    activeTab === item.id ? 'bg-black text-white' : 'bg-[#F9F9F9] text-gray-500 hover:bg-gray-100'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    {item.label}
                                </div>
                                <ChevronRight size={14} />
                            </button>
                        ))}
                        <button onClick={onLogout} className="flex items-center gap-3 p-4 font-bold italic text-xs tracking-widest text-red-600 bg-[#FFF5F5] mt-4 hover:bg-red-50 transition-colors">
                            <LogOut size={18} /> ÇIKIŞ YAP
                        </button>
                    </nav>
                </div>

                {/* SAĞ İÇERİK ALANI */}
                <div className="flex-1">

                    {/* 1. HESAP BİLGİLERİ */}
                    {activeTab === 'info' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-sm font-black italic uppercase tracking-[0.2em] mb-6 border-b pb-4">HESAP BİLGİLERİ</h3>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase">Adınız</label>
                                    <input type="text" defaultValue={user?.name || USER_DATA.name} className="bg-[#F9F9F9] border border-gray-100 p-4 text-sm font-bold outline-none focus:border-black transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase">Soyadınız</label>
                                    <input type="text" defaultValue={user?.username || USER_DATA.username} className="bg-[#F9F9F9] border border-gray-100 p-4 text-sm font-bold outline-none focus:border-black transition-all" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase">Telefon</label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-3 flex items-center gap-2 border-r pr-2 border-gray-200">
                                            <img src="https://flagcdn.com/w20/tr.png" alt="TR" className="w-5" />
                                            <span className="text-xs font-bold text-gray-600">+90</span>
                                        </div>
                                        <input type="tel" defaultValue={USER_DATA.phone} className="w-full bg-[#F9F9F9] border border-gray-100 p-4 pl-20 text-sm font-bold outline-none focus:border-black transition-all" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase">E-Posta Adresi</label>
                                    <input type="email" defaultValue={USER_DATA.email} className="bg-[#F9F9F9] border border-gray-100 p-4 text-sm font-bold outline-none focus:border-black transition-all" />
                                </div>
                                <div className="md:col-span-2 flex justify-end mt-4">
                                    <button type="button" className="bg-black text-white px-12 py-4 font-black italic text-[11px] tracking-widest hover:bg-[#2B3292] transition-colors">
                                        KAYDET
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* 2. SİPARİŞLERİM */}
                    {activeTab === 'orders' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-lg font-bold mb-6">Siparişlerim ({USER_ORDERS.length})</h3>
                            <div className="flex flex-col border-t border-gray-100">
                                {USER_ORDERS.map((order) => (
                                    <div key={order.id} className="flex flex-col md:flex-row items-center justify-between py-8 border-b border-gray-100 group">
                                        <div className="flex items-center gap-6 w-full md:w-2/3">
                                            <div className="w-20 h-20 bg-[#F5F5F5] flex items-center justify-center shrink-0">
                                                <img src={order.img} alt={order.name} className="w-16 h-16 object-contain mix-blend-multiply" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[11px] font-bold text-green-600 uppercase tracking-wider">{order.status}</span>
                                                <h4 className="text-sm font-black italic uppercase tracking-tight text-gray-900 group-hover:text-[#2B3292] transition-colors">{order.name}</h4>
                                                <p className="text-xs font-bold text-gray-500">{order.date} Tarihinde Sipariş Verildi</p>
                                                <p className="text-[11px] font-bold text-gray-400">{order.id} numaralı sipariş</p>
                                            </div>
                                        </div>
                                        <button className="mt-4 md:mt-0 border-2 border-gray-400 px-6 py-2 text-[11px] font-black uppercase italic tracking-widest hover:bg-black hover:border-black hover:text-white transition-all duration-300">
                                            Detayı Görüntüle
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 3. ADRESLERİM */}
                    {activeTab === 'addresses' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-xl font-bold mb-4">Adres Oluştur</h3>
                            <div className="bg-[#EEF2FF] border border-[#D0D7FF] p-4 mb-8">
                                <p className="text-xs font-medium text-gray-700">Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres oluşturunuz.</p>
                            </div>
                            <form className="max-w-4xl space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-800 italic uppercase">*Adres Başlığı</label>
                                    <input type="text" placeholder="ev, iş vb..." className="w-full bg-[#F5F5F5] border-none p-4 text-sm outline-none focus:ring-1 focus:ring-black transition-all" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-gray-800 italic uppercase">*Ad</label>
                                        <input type="text" className="w-full bg-[#F5F5F5] border-none p-4 text-sm outline-none focus:ring-1 focus:ring-black transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[11px] font-bold text-gray-800 italic uppercase">*Soyad</label>
                                        <input type="text" className="w-full bg-[#F5F5F5] border-none p-4 text-sm outline-none focus:ring-1 focus:ring-black transition-all" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-800 italic uppercase">*Adres</label>
                                    <textarea className="w-full bg-[#F5F5F5] border-none p-4 text-sm outline-none focus:ring-1 focus:ring-black transition-all h-20 resize-none" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-gray-800 italic uppercase">Şehir</label>
                                        <input type="text" className="w-full bg-[#F5F5F5] border-none p-4 text-sm outline-none focus:ring-1 focus:ring-black transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-gray-800 italic uppercase">*İlçe</label>
                                        <input type="text" className="w-full bg-[#F5F5F5] border-none p-4 text-sm outline-none focus:ring-1 focus:ring-black transition-all" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-800 italic uppercase">Telefon</label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-0 h-full px-4 flex items-center gap-2 border-r border-gray-200 bg-[#F5F5F5]">
                                            <img src="https://flagcdn.com/w20/tr.png" alt="TR" className="w-5" />
                                            <span className="text-sm font-bold text-gray-400">⌵</span>
                                            <span className="text-sm font-bold text-gray-600 border-l pl-2 border-gray-300">+90</span>
                                        </div>
                                        <input type="tel" className="w-full bg-[#F5F5F5] border-none p-4 pl-36 text-sm font-bold outline-none focus:ring-1 focus:ring-black transition-all" />
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button type="button" className="bg-black text-white px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all rounded-sm">
                                        Kaydet
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* 4. ŞİFRE DEĞİŞTİR */}
                    {activeTab === 'password' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-sm font-black italic uppercase tracking-[0.2em] mb-6 border-b pb-4">ŞİFRE DEĞİŞTİR</h3>
                            <form className="flex flex-col gap-6 max-w-sm">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase">Mevcut Şifre</label>
                                    <input type="password" underline-none className="bg-[#F9F9F9] border border-gray-100 p-4 text-sm font-bold outline-none focus:border-black transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase">Yeni Şifre</label>
                                    <input type="password" underline-none className="bg-[#F9F9F9] border border-gray-100 p-4 text-sm font-bold outline-none focus:border-black transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase">Yeni Şifre</label>
                                    <input type="password" underline-none className="bg-[#F9F9F9] border border-gray-100 p-4 text-sm font-bold outline-none focus:border-black transition-all" />
                                </div>
                                <button type="button" className="bg-black text-white px-8 py-4 font-black italic text-[11px] tracking-widest hover:bg-[#2B3292] transition-colors">
                                    ŞİFREYİ GÜNCELLE
                                </button>
                            </form>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
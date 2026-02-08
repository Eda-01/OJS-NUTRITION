import React from 'react';

export const ContactPage: React.FC = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-6 py-16 animate-in fade-in duration-700">
            <div className="mb-16 flex flex-col items-center text-center">
                <h1 className="text-4xl font-black   ">Bize Ulaşın</h1>
            </div>
            <div className="max-w-[700px] mx-auto">
                <div className="space-y-10">
                    <p className="text-gray-600 font-medium ">
                        Bize aşağıdaki form aracılığıyla ulaşabilirsiniz.
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">* ADINIZ</label>
                                <input type="text" className="bg-[#F5F5F5] p-4 outline-none focus:ring-1 focus:ring-black transition-all font-bold text-sm border-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">* SOYADINIZ</label>
                                <input type="text" className="bg-[#F5F5F5] p-4 outline-none focus:ring-1 focus:ring-black transition-all font-bold text-sm border-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">* E-POSTA</label>
                            <input type="email" className="bg-[#F5F5F5] p-4 outline-none focus:ring-1 focus:ring-black transition-all font-bold text-sm border-none" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">MESAJINIZ</label>
                            <textarea rows={6} className="bg-[#F5F5F5] p-4 outline-none focus:ring-1 focus:ring-black transition-all font-bold text-sm resize-none border-none" />
                        </div>

                        <div className="flex justify-center pt-4">
                            <button className="bg-black text-white px-16 py-4 font-black italic tracking-widest text-xs hover:bg-[#2B3292] transition-all w-full md:w-auto">
                                MESAJI GÖNDER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <div className="max-w-[700px] mx-auto">
                <div className="space-y-10">
                    <p className=" text-center">
                        *Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00'a kadar verilen siparişler için geçerlidir.
                        Siparişler kargoya verilince e-posta ve SMS ile bilgilendirme yapılır.
                    </p>
                    <p className=" text-center">
                        Telefon ile  <span className="font-bold" >0850 303 29 89</span>  numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz. Sesli mesajlarınıza hafta içi saat <span className='font-bold'>09:00-17:00</span> arasında dönüş sağlanmaktadır.
                    </p>

                </div>
            </div>
        </div>
    );
};
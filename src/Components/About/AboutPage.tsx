import React from 'react';
import { Star } from 'lucide-react';
import iso9001 from '../../assets/logo/logo1.png';
import helal from '../../assets/logo/logo2.png';
import iso22000 from '../../assets/logo/logo3.png';
import gmp from '../../assets/logo/logo4.png';
import iso10002 from '../../assets/logo/logo5.png';
import ghp from '../../assets/logo/logo6.png';

export const AboutPage: React.FC = () => {
  const certificates = [
    { id: 1, img: iso9001, alt: "ISO 9001:2015" },
    { id: 2, img: helal, alt: "Helal Gıda" },
    { id: 3, img: iso22000, alt: "ISO 22000:2005" },
    { id: 4, img: gmp, alt: "GMP Certified" },
    { id: 5, img: iso10002, alt: "ISO 10002:2018" },
    { id: 6, img: ghp, alt: "GHP Certified" }
  ];

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-16 animate-in fade-in duration-700">
      
      {/* 1. BÖLÜM: ANA BAŞLIK VE HİKAYE */}
      <section className="mb-14">
        <h1 className="text-[28px] md:text-[32px] font-black leading-tight mb-6 text-black tracking-tight uppercase italic">
          Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız
        </h1>
        
        <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-medium">
          <p>
            2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve fonksiyonel gıdalar üreten bir firma olarak; 
            müşterilerimize en kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz.
          </p>
          <p>
            Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur. Ürünlerimizde, yüksek kalite standartlarına bağlı olarak, 
            sporcuların ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici çözümler sunuyoruz.
          </p>
          <p>
            Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu nedenle, inovasyon, kalite, sağlık ve güvenlik ilkelerimizi 
            korurken, sürekli olarak ürünlerimizi geliştirmeye ve yenilikçi beslenme çözümleri sunmaya devam ediyoruz.
          </p>
        </div>
      </section>

      {/* 2. BÖLÜM: MUTLU MÜŞTERİ VURGUSU  */}
      <section className="mb-14">
        <h2 className="text-[24px] md:text-[30px] font-black text-black mb-3 tracking-tighter uppercase italic">
          1.000.000+ den Fazla Mutlu Müşteri
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed">
          Sanatçılardan profesyonel sporculara, doktordan öğrencilere hayatın her alanında sağlıklı yaşamı ve 
          beslenmeyi hedefleyen 1.000.000'den fazla kişiye ulaştık.
        </p>
      </section>

      {/* 3. BÖLÜM: SERTİFİKALAR  */}
      <section className="pt-12 border-t border-gray-100">
        <h2 className="text-[24px] md:text-[30px] font-black text-black mb-10 tracking-tighter uppercase italic">
          Sertifikalarımız
        </h2>
        
        <div className="flex flex-wrap items-center justify-start gap-4 md:gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="transition-transform duration-300 hover:scale-105">
              <img 
                src={cert.img} 
                alt={cert.alt} 
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </section>
      {/* 4. BÖLÜM: DETAYLI MÜŞTERİ YORUMLARI */}
      <section className="pt-16 border-t border-gray-100">
        {/* Yorum Başlık ve Genel Puan */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-gray-400 text-[13px] font-bold">196.900 Yorum</span>
          </div>
          <button className="w-fit bg-[#3D52A0] text-white px-6 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors">
            ÜRÜN İNCELEMELERİ
          </button>
        </div>

        {/* Yorum Kartları Listesi */}
        <div className="space-y-4">
          {[
            { id: 1, user: "Mustafa Ü.", title: "L carnitine", comment: "Gayet şeffaf ve güzel kargoyla geldi çok memnun kaldım", product: "L-CARNITINE", date: "01/01/24" },
            { id: 2, user: "Erol Ş.", title: "Muhteşem tad", comment: "Tadı çok iyi. Faydasını da gördüm", product: "CREATINE LIMITED EDITION", date: "25/02/24" },
            { id: 3, user: "Erol Ş.", title: "Muhteşem", comment: "Vitaminlerden çok memnunum tekrar sipariş vereceğim", product: "GÜNLÜK VİTAMİN PAKETİ", date: "06/04/24" },
            { id: 4, user: "BAHADIR Y.", title: "İşe yarar", comment: "Antrenman öncesi isteksizliği yorgunluğu ve gideriyor ve sağlam bir antrenman yapmanızı konusunda istek sağlıyor. Müthiş terleme, benim biraz kulaklarım yandı ve alnım kaşındı ama bu yan etkilerin normal olduğunu okudum. bilmiyorum.", product: "PRE-WORKOUT SUPREME", date: "06/05/24" },
            { id: 5, user: "Yusuf A.", title: "Süper", comment: "Harika", product: "PRE-WORKOUT SUPREME", date: "06/07/24" },   
            { id: 6, user: "Mustafa Ü.", title: "Kalite", comment: "Muhteşem", product: "COENZYME Q 10", date: "31/12/24" }


          ].map((item) => (
            <div key={item.id} className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8 relative">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[15px]">{item.user}</span>
                    <span className="bg-[#CDE8D5] text-[#4A7D59] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Doğrulanmış Müşteri</span>
                  </div>
                </div>
                <span className="text-gray-500 text-[13px] font-medium">{item.date}</span>
              </div>

              <div className="mt-2">
                <h4 className="font-bold text-[16px] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                  {item.comment}
                </p>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest absolute bottom-4 left-8 md:left-10">
                  HAKKINDA: {item.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* SAYFALAMA (Pagination) */}
        <div className="flex items-center justify-center gap-4 mt-12 pb-10">
          <span className="text-gray-400 cursor-pointer hover:text-black">{"<"}</span>
          <span className="text-blue-700 font-bold text-sm cursor-pointer underline underline-offset-4">1</span>
          {[2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <span key={num} className="text-gray-400 font-bold text-sm cursor-pointer hover:text-black">{num}</span>
          ))}
          <span className="text-gray-400 cursor-pointer hover:text-black">{">"}</span>
        </div>
      </section>

    </div>
  );
};
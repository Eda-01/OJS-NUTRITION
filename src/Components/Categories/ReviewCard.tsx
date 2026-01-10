import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper stillerini import etmeyi unutma
import 'swiper/css';
import 'swiper/css/navigation';

const REVIEWS = [
  { 
    id: 1, 
    date: "03/05/24", 
    title: "Tadı beklediğimden iyi", 
    text: "Daha önce benzer ürünler denemiştim ama bu hem daha az rahatsız etti hem de tadı daha içilebilir geldi. Sabahları kullanıyorum, memnunum." 
  },
  { 
    id: 2, 
    date: "03/05/24", 
    title: "Etkisini hissettim", 
    text: "Yaklaşık 1 haftadır kullanıyorum. Antrenman sırasında enerjim daha dengeli gibi hissediyorum. Mideyi de bozmadı, o açıdan iyi." 
  },
  { 
    id: 3, 
    date: "03/05/24", 
    title: "Kargo hızlıydı", 
    text: "Siparişten 2 gün sonra elime ulaştı. Paketleme sağlamdı. Ürün de anlatıldığı gibiydi, sorun yaşamadım." 
  },
  { 
    id: 4, 
    date: "03/05/24", 
    title: "Bir tık ekşi ama alışılıyor", 
    text: "İlk içtiğimde tadı garip geldi ama sonra alışıyorsun. Etkisi güzel, özellikle spordan önce işe yarıyor." 
  },
  { 
    id: 5, 
    date: "04/05/24", 
    title: "Tekrar alırım", 
    text: "Daha önce başka markalar kullandım ama buna tekrar dönerim. İçeriği temiz ve fiyatına göre performansı iyi." 
  },
    { 
    id: 6, 
    date: "04/05/24", 
    title: "Mide dostu", 
    text: "Genellikle bu tür ürünler midemi rahatsız eder ama bu üründe böyle bir sorun yaşamadım. Tavsiye ederim." 
  },
];


export const ReviewsSection = () => {
  return (
    <section className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Üst Başlık ve Navigasyon */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-gray-100">
          <h2 className="text-lg font-black text-[#1A1A1A] tracking-tighter uppercase italic">
            GERÇEK MÜŞTERİ YORUMLARI
          </h2>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#1A1A1A] underline decoration-2 underline-offset-4">
                198453 Yorum
              </span>
            </div>
            
            {/* Butonları Swiper'a bağlamak için özel class isimleri verdik: review-prev ve review-next */}
            <div className="flex gap-2">
              <button className="review-prev p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all disabled:opacity-30">
                <ChevronLeft size={20} />
              </button>
              <button className="review-next p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all disabled:opacity-30">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider Yapısı */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{
            prevEl: '.review-prev',
            nextEl: '.review-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="reviews-swiper"
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col gap-3 h-full group">
                <span className="text-[11px] text-gray-400 font-bold italic tracking-wider">
                  {review.date}
                </span>
                <h4 className="font-extrabold text-[#1A1A1A] text-base leading-tight">
                  {review.title}
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed italic font-medium">
                  "{review.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};
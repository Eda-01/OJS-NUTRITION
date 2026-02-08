import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBlazeSlider } from '../../Hooks/useBlazeSlider';
import { ReviewCard } from './ReviewCard';

const REVIEWS = [
  { id: 1, date: "03/05/24", title: "Tadı beklediğimden iyi", text: "Daha önce benzer ürünler denemiştim ama bu hem daha az rahatsız etti hem de tadı daha içilebilir geldi. Sabahları kullanıyorum, memnunum." },
  { id: 2, date: "03/05/24", title: "Etkisini hissettim", text: "Yaklaşık 1 haftadır kullanıyorum. Antrenman sırasında enerjim daha dengeli gibi hissediyorum. Mideyi de bozmadı, o açıdan iyi." },
  { id: 3, date: "03/05/24", title: "Kargo hızlıydı", text: "Siparişten 2 gün sonra elime ulaştı. Paketleme sağlamdı. Ürün de anlatıldığı gibiydi, sorun yaşamadım." },
  { id: 4, date: "03/05/24", title: "Bir tık ekşi ama alışılıyor", text: "İlk içtiğimde tadı garip geldi ama sonra alışıyorsun. Etkisi güzel, özellikle spordan önce işe yarıyor." },
  { id: 5, date: "04/05/24", title: "Tekrar alırım", text: "Daha önce başka markalar kullandım ama buna tekrar dönerim. İçeriği temiz ve fiyatına göre performansı iyi." },
  { id: 6, date: "04/05/24", title: "Mide dostu", text: "Genellikle bu tür ürünler midemi rahatsız eder ama bu üründe böyle bir sorun yaşamadım. Tavsiye ederim." },
];

export const ReviewsSection = () => {
  const { sliderElRef } = useBlazeSlider({
    all: {
      slidesToShow: 4,
      slideGap: '40px',
      loop: true,
      enableAutoplay: true,
      autoplayInterval: 3000,
    },
    '(max-width: 1024px)': {
      slidesToShow: 2,
    },
    '(max-width: 640px)': {
      slidesToShow: 1,
    }
  });

  return (
    <section className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* BLAZE SLIDER ANA KAPSAYICI */}
        <div className="blaze-slider" ref={sliderElRef}>
          
          {/* Üst Başlık ve Butonlar  */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-gray-100">
            <h2 className="text-lg font-black text-[#1A1A1A] tracking-tighter uppercase italic">
              GERÇEK MÜŞTERİ YORUMLARI
            </h2>
            
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFC107" color="#FFC107" />)}
                </div>
                <span className="text-sm font-bold underline decoration-2 underline-offset-4">
                  198453 Yorum
                </span>
              </div>
              
              <div className="flex gap-2">
                {/* OK BUTONLARI */}
                <button 
                  className="blaze-prev p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all active:scale-95"
                  aria-label="Geri"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="blaze-next p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all active:scale-95"
                  aria-label="İleri"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* SLIDER'IN ASIL GÖVDESİ */}
          <div className="blaze-container">
            <div className="blaze-track-container">
              <div className="blaze-track">
                {REVIEWS.map((review) => (
                  <div key={review.id}>
                    <ReviewCard {...review} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
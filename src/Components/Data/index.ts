import heroImage from '../../assets/1.jpg';
import proteinImg from '../../assets/2.jpg';
import vitaminImg from '../../assets/4.jpg';
import saglikImg from '../../assets/3.jpg';
import sporImg from '../../assets/5.jpg';
import gidaImg from '../../assets/6.jpg';
import tumImg from '../../assets/7.png';
import wheyImg from '../../assets/25.jpg';
import fitnessImg from '../../assets/21.jpg';
import vitaminPackImg from '../../assets/22.jpg';
import bcaaImg from '../../assets/11.jpg';
import omega3Img from '../../assets/23.jpg';
import creamOfRiceImg from '../../assets/24.jpg';


export const NAV_CATEGORIES = [
  { id: 1, name: "PROTEİN" },
  { id: 2, name: "SPOR GIDALARI" },
  { id: 3, name: "SAĞLIK" },
  { id: 4, name: "GIDA" },
  { id: 5, name: "VİTAMİN" },
  { id: 6, name: "TÜM ÜRÜNLER" }
];

export const INFO_STRIP_DATA = [
  { id: 1, title: "Aynı Gün Kargo", desc: "16:00'DAN ÖNCEKİ SİPARİŞLERDE" },
  { id: 2, title: "Ücretsiz Kargo", desc: "100 TL ÜZERİ SİPARİŞLERDE" },
  { id: 3, title: "Güvenli Alışveriş", desc: "1.000.000+ MUTLU MÜŞTERİ" }
];

export const HERO_DATA = {
  imageSrc: heroImage
};

export const CATEGORY_CARDS = [
  { id: 1, name: "PROTEİN", image: proteinImg, bgColor: "bg-[#B5C5C4]" },
  { id: 2, name: "VİTAMİNLER", image: vitaminImg, bgColor: "bg-[#F7E6D4]" },
  { id: 3, name: "SAĞLIK", image: saglikImg, bgColor: "bg-[#D9D9D9]" },
  { id: 4, name: "SPOR GIDALARI", image: sporImg, bgColor: "bg-[#D9D9D9]" },
  { id: 5, name: "GIDA", image: gidaImg, bgColor: "bg-[#8CB7D1]" },
  { id: 6, name: "TÜM ÜRÜNLER", image: tumImg, bgColor: "bg-[#90B8CC]" },
];

export const BEST_SELLERS = [
  {
    id: 1,
    name: "WHEY PROTEIN",
    subTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    image: wheyImg,
    stars: 5,
    reviews: 10869,
    price: 549,

  },
  {
    id: 2,
    name: "FITNESS PAKETİ",
    subTitle: "EN POPÜLER ÜRÜNLER BİR ARADA",
    image: fitnessImg,
    stars: 5,
    reviews: 7850,
    price: 799,
    oldPrice: 1126,
    discountTag: "%29 İNDİRİM"
  },

  {
    id: 3,
    name: "GÜNLÜK VİTAMİN PAKETİ",
    subTitle: "EN SIK TÜKETİLEN VİTAMİNLER",
    image: vitaminPackImg,
    stars: 5,
    reviews: 4321,
    price: 199,
    discountTag: "%23 İNDİRİM",
    oldPrice: 349,

  },

  {
    id: 4,
    name: "PRE-WORKOUT SUPREME",
    subTitle: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    image: bcaaImg,
    stars: 4,
    reviews: 2560,
    price: 299
  },

  {
    id: 5,
    name: "CREAM OF RICE",
    subTitle: "EN LEZZETLİ PİRİNÇ KREMASI",
    image: omega3Img,
    stars: 5,
    reviews: 1987,
    price: 149,
  },

  {
    id: 6,
    name: "CREATINE",
    subTitle: "EN POPÜLER SPORCU TAKVİYESİ",
    image: creamOfRiceImg,
    stars: 5,
    reviews: 1675,
    price: 129,
  }
];


import wheyImg from '../../assets/25.jpg';
import isolateImg from '../../assets/21.jpg'; 
import fitnessImg from '../../assets/22.jpg';
import peaImg from '../../assets/11.jpg';
import caseinImg from '../../assets/23.jpg';
import eggImg from '../../assets/24.jpg';
import milkImg from '../../assets/26.png'; 
import soyaImg from '../../assets/27.png';
import bar2Img from '../../assets/31.png';
import gainerImg from '../../assets/30.png';
import barImg from '../../assets/29.png';
import collagenImg from '../../assets/28.png';

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    image: string; 
    rating: number;
    reviews: number;
    description: string;
    discount?: string;
}

export const ALL_PRODUCTS: Product[] = [
    {
        id: 101,
        name: "WHEY PROTEIN",
        category: "PROTEİN",
        price: 549,
        image: wheyImg, 
        rating: 5,
        reviews: 10869,
        description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    },
    {
        id: 102,
        name: "WHEY ISOLATE",
        category: "PROTEİN",
        price: 749,
        image: isolateImg,
        rating: 5,
        reviews: 887,
        description: "%90 PROTEİNLİ EN SAF WHEY",
    },
    {
        id: 103,
        name: "FITNESS PAKETİ",
        category: "SPOR GIDALARI",
        price: 799,
        oldPrice: 1126,
        image: fitnessImg,
        rating: 5,
        reviews: 339,
        description: "EN POPÜLER ÜRÜNLER BİR ARADA",
        discount: "%29 İNDİRİM"
    },
    {
        id: 104,
        name: "PEA PROTEİN",
        category: "PROTEİN",
        price: 349,
        image: peaImg,
        rating: 4,
        reviews: 560,
        description: "EN POPÜLER VEGAN PROTEİN KAYNAĞI",
    },
    {
        id: 105,
        name: "MICELLAR CASEIN",
        category: "PROTEİN",
        price: 599,
        image: caseinImg,
        rating: 4,
        reviews: 560,
        description: "YAVAŞ SİNDİRİLEN PROTEİN KAYNAĞI",
    },
    {
        id: 106,
        name: "EGG WHITE POWDER",
        category: "PROTEİN",
        price: 899,
        image: eggImg,
        rating: 4,
        reviews: 560,
        description: "PROTEİNİN ALTIN STANDARTI",
    },
    {
        id: 107,
        name: "MILK PROTEIN",
        category: "PROTEİN",
        price: 699,
        image: milkImg,
        rating: 5,
        reviews: 1987,
        description: "%80 KAZEIN, %20 WHEY PROTEİN"
    },
    {
        id: 108,
        name: "SOYA PROTEIN",
        category: "PROTEİN",
        price: 499,
        image: soyaImg,
        rating: 5,
        reviews: 1675,
        description: "VEGAN PROTEİN KAYNAĞI",
    },
    {
        id: 109,
        name: "PROTEIN BAR 2'Lİ PAKET",
        category: "VİTAMİN",
        price: 59,
        oldPrice: 90,
        image: bar2Img,
        rating: 5,
        reviews: 1675,
        description: "%30 PROTEİN, ŞEKER İLAVESİZ",
        discount: "%34 İNDİRİM"
    },
    {
        id: 110,
        name: "MASS GAINER LANSMAN",
        category: "VİTAMİN",
        price: 699,
        oldPrice: 999,
        image: gainerImg,
        rating: 5,
        reviews: 1675,
        description: "YÜKSEK KALORİLİ PRATİK ÖĞÜN",
        discount: "%30 İNDİRİM"
    },
    {
        id: 111,
        name: "PROTEIN BAR",
        category: "PROTEİN",
        price: 249,
        oldPrice: 349,
        image: barImg,
        rating: 5,
        reviews: 1675,
        description: "%30 PROTEİN, ŞEKER İLAVESİZ",
        discount: "%29 İNDİRİM"
    },
    {
        id: 112,
        name: "COLLAGEN COFFE",
        category: "VİTAMİN",
        price: 349,
        image: collagenImg,
        rating: 5,
        reviews: 1675,
        description: "KOLAJENLİ KAHVE",
    }
];
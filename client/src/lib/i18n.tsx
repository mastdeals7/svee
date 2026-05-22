import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language } from '@shared/schema';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.profile': 'Company Profile',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.contact': 'Contact Us',
    'nav.quote': 'Request Quote',
    'nav.importSupport': 'Import Support',

    // Home Page
    'home.hero.title': 'Agro Commodity Sourcing for Indonesian Buyers',
    'home.hero.subtitle': 'PT Svee International helps Indonesian feed mills, food processors and commodity importers source agricultural products from India and other reliable origin markets — with support for supplier coordination, documentation, shipment follow-up and trade communication.',
    'home.hero.cta1': 'View Animal Feed Ingredients',
    'home.hero.cta2': 'Request Product Quote',
    'home.bridge.title': 'Your sourcing bridge between Indonesia and India',
    'home.bridge.desc': 'We work with Indonesian buyers who need practical sourcing support for agro commodities, feed raw materials and food ingredients. Our role is to help buyers check availability, compare origins, coordinate specifications, follow documentation and keep communication clear between buyer and supplier.',
    'home.trust.established': 'Established',
    'home.trust.countries': 'Years Active',
    'home.trust.products': 'Product Categories',
    'home.about.title': 'Indonesia-based import and sourcing support since 2001',
    'home.about.description': 'PT Svee International / Svee Komoditi is based in Jakarta and focused on helping Indonesian buyers source agro commodities, feed raw materials and food ingredients from India and other reliable origin markets.',
    'home.about.mission': 'We help with supplier identification, availability checks, specification coordination, documentation follow-up and shipment communication. Product availability, specifications, packing, origin and price are confirmed case by case.',
    'home.about.cta': 'About Us',
    'home.featured.title': 'Featured Products',
    'home.featured.subtitle': 'Key products for Indonesian buyers — click to view details and enquiry options',
    'home.categories.title': 'What We Source',
    'home.categories.subtitle': 'Ten product categories for Indonesian feed mills, food processors and commodity importers',
    'home.services.title': 'How We Can Help',
    'home.services.subtitle': 'From first product enquiry to shipment arrival — practical sourcing support at each step',
    'home.services.cta': 'See All Services',
    'home.network.title': 'Sourcing from India and other reliable origin markets',
    'home.network.subtitle': 'We support Indonesian buyers with India first, plus other origins checked case by case',
    'home.cta.title': 'Send us your product requirement',
    'home.cta.subtitle': 'Tell us what you need — product, quantity and destination. We will check availability and come back to you as soon as possible.',
    'home.cta.button': 'Send WhatsApp',

    // About Page
    'about.title': 'About PT Svee International',
    'about.subtitle': 'Indonesia-based import and sourcing support for agro commodities, feed raw materials and food ingredients',
    'about.established.title': 'Who We Are',
    'about.established.content': 'PT Svee International / Svee Komoditi is an Indonesia-based import and sourcing company focused on agro commodities, feed raw materials, grain-based products, oilseeds, pulses, spices and selected food ingredients. Established in 2001 and based in Jakarta, we work with Indonesian buyers who need practical sourcing support from India and other reliable origin markets.',
    'about.commitment.title': 'What We Actually Do',
    'about.commitment.content': 'Our role is to help buyers identify suitable suppliers, check product availability, coordinate specifications, follow documentation and keep communication clear from enquiry to shipment. We mainly serve feed mills, food processors, snack manufacturers, commodity importers, wholesalers, trading houses and industrial buyers in Indonesia.',
    'about.quality.title': 'How We Work',
    'about.quality.content': 'Through our sourcing network in India and other origins, we support products such as soybean meal, rapeseed meal, rice DDGS, maize, maize grits, rice grits, groundnut kernels, sesame seeds, pulses, spices and other agri-based raw materials as per buyer requirement. Product availability, specifications, packing, origin, pricing and shipment terms are always confirmed case by case.',

    // Profile Page
    'profile.title': 'Company Profile',
    'profile.subtitle': 'A practical overview of PT Svee International for buyers and trade partners',
    'profile.intro.title': 'Company at a Glance',
    'profile.intro.content': 'PT Svee International / Svee Komoditi is an Indonesia-based import and sourcing company registered in Jakarta. We work as a sourcing broker for agro commodities and food raw materials, helping Indonesian buyers source from India and other reliable origin markets. We have been active since 2001.',
    'profile.products.title': 'Product Scope',
    'profile.products.content': 'Our main product categories are: Animal Feed Ingredients (soybean meal, rapeseed meal, rice DDGS, yellow maize, corn grits, groundnut meal), Grains & Corn Products (maize grits, corn flour, wheat, barley), Rice & Milled Products (rice grits, rice flour), Oilseeds & Kernels (groundnut kernels, sesame seeds, soybeans), Pulses & Beans, Spices (from India), Food Ingredients & Sweeteners (liquid glucose, corn flour food grade) and Fertilizers.',
    'profile.operations.title': 'Our Sourcing Network',
    'profile.operations.content': 'We work with sourcing contacts and associate offices in India across Mumbai, Pune, Chennai and Delhi, and with partner contacts in Myanmar, Vietnam and other origin markets. We use these connections to check availability, get specifications and coordinate supplier communication on behalf of Indonesian buyers.',
    'profile.director.title': 'Our Approach',
    'profile.director.quote': '"We may not always have the answer immediately — but we will find it. We focus on being practical, reachable and useful for buyers who need reliable sourcing coordination."',

    // Products Page
    'products.title': 'Products',
    'products.subtitle': 'Agro commodities for Indonesian buyers — sourced from India and other reliable origin markets',
    'products.category': 'Category',
    'products.viewDetails': 'View Details',
    'products.learnMore': 'Enquire',
    'products.backToCategories': 'Back to Products',
    'products.specifications': 'Typical Specifications',
    'products.benefits': 'Common Uses',
    'products.relatedProducts': 'Related Products',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Practical sourcing support for Indonesian buyers — from enquiry to shipment',
    'services.intro': 'We help Indonesian buyers check availability, compare origin options, coordinate specifications and follow shipment documentation. Final price, specification, origin and shipment terms are confirmed case by case.',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Send us your product requirement and we will check availability and come back to you.',
    'contact.whatsapp.title': 'WhatsApp Enquiry (Preferred)',
    'contact.whatsapp.subtitle': 'Fastest way to discuss availability, specifications and pricing',
    'contact.whatsapp.cta': 'Send WhatsApp Enquiry',
    'contact.info.title': 'Contact Details',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Telephone',
    'contact.info.email': 'Email',
    'contact.offices.title': 'Sourcing & Associate Offices',
    'contact.headquarters': 'Head Office',

    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.viewAll': 'View All',
    'common.products': 'products',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.profile': 'Profil Perusahaan',
    'nav.products': 'Produk',
    'nav.services': 'Layanan',
    'nav.contact': 'Hubungi Kami',
    'nav.quote': 'Minta Penawaran',
    'nav.importSupport': 'Dukungan Impor',

    // Home Page
    'home.hero.title': 'Sourcing Komoditas Agro untuk Pembeli Indonesia',
    'home.hero.subtitle': 'PT Svee International membantu pabrik pakan, pengolah makanan, dan importir komoditas di Indonesia sourcing produk pertanian dari India dan pasar asal terpercaya lainnya — dengan dukungan koordinasi pemasok, dokumentasi, tindak lanjut pengiriman, dan komunikasi perdagangan.',
    'home.hero.cta1': 'Lihat Bahan Baku Pakan Ternak',
    'home.hero.cta2': 'Minta Penawaran Produk',
    'home.bridge.title': 'Jembatan sourcing Anda antara Indonesia dan India',
    'home.bridge.desc': 'Kami bekerja dengan pembeli Indonesia yang membutuhkan dukungan sourcing praktis untuk komoditas agro, bahan baku pakan, dan bahan pangan. Peran kami adalah membantu pembeli memeriksa ketersediaan, membandingkan asal, mengkoordinasikan spesifikasi, menindaklanjuti dokumentasi, dan menjaga komunikasi yang jelas antara pembeli dan pemasok.',
    'home.trust.established': 'Berdiri',
    'home.trust.countries': 'Tahun Aktif',
    'home.trust.products': 'Kategori Produk',
    'home.about.title': 'Dukungan impor dan sourcing berbasis Indonesia sejak 2001',
    'home.about.description': 'PT Svee International / Svee Komoditi berbasis di Jakarta dan fokus membantu pembeli Indonesia sourcing komoditas agro, bahan baku pakan, dan bahan pangan dari India dan pasar asal terpercaya lainnya.',
    'home.about.mission': 'Kami membantu identifikasi pemasok, pemeriksaan ketersediaan, koordinasi spesifikasi, tindak lanjut dokumentasi, dan komunikasi pengiriman. Ketersediaan produk, spesifikasi, kemasan, asal, dan harga dikonfirmasi per kasus.',
    'home.about.cta': 'Tentang Kami',
    'home.featured.title': 'Produk Unggulan',
    'home.featured.subtitle': 'Produk utama untuk pembeli Indonesia — klik untuk melihat detail dan opsi permintaan',
    'home.categories.title': 'Apa yang Kami Sourcingkan',
    'home.categories.subtitle': 'Sepuluh kategori produk untuk pabrik pakan, pengolah makanan, dan importir komoditas di Indonesia',
    'home.services.title': 'Cara Kami Membantu',
    'home.services.subtitle': 'Dari pertanyaan produk pertama hingga pengiriman tiba — dukungan sourcing praktis di setiap tahap',
    'home.services.cta': 'Lihat Semua Layanan',
    'home.network.title': 'Sourcing dari India dan pasar asal terpercaya lainnya',
    'home.network.subtitle': 'Kami mendukung pembeli Indonesia dengan India sebagai fokus utama, serta asal lain yang dicek per kasus',
    'home.cta.title': 'Kirimkan kebutuhan produk Anda',
    'home.cta.subtitle': 'Beritahu kami apa yang Anda butuhkan — produk, kuantitas, dan tujuan. Kami akan memeriksa ketersediaan dan menghubungi Anda sesegera mungkin.',
    'home.cta.button': 'Kirim WhatsApp',

    // About Page
    'about.title': 'Tentang PT Svee International',
    'about.subtitle': 'Dukungan impor dan sourcing berbasis Indonesia untuk komoditas agro, bahan baku pakan, dan bahan pangan',
    'about.established.title': 'Siapa Kami',
    'about.established.content': 'PT Svee International / Svee Komoditi adalah perusahaan impor dan sourcing berbasis Indonesia yang berfokus pada komoditas agro, bahan baku pakan, produk berbasis biji-bijian, biji minyak, kacang-kacangan, rempah-rempah, dan bahan pangan tertentu. Berdiri tahun 2001 dan berbasis di Jakarta, kami bekerja dengan pembeli Indonesia yang membutuhkan dukungan sourcing praktis dari India dan pasar asal terpercaya lainnya.',
    'about.commitment.title': 'Yang Sebenarnya Kami Lakukan',
    'about.commitment.content': 'Peran kami adalah membantu pembeli mengidentifikasi pemasok yang sesuai, memeriksa ketersediaan produk, mengkoordinasikan spesifikasi, menindaklanjuti dokumentasi, dan menjaga komunikasi yang jelas dari pertanyaan hingga pengiriman. Kami terutama melayani pabrik pakan, pengolah makanan, produsen snack, importir komoditas, pedagang grosir, rumah dagang, dan pembeli industri di Indonesia.',
    'about.quality.title': 'Cara Kami Bekerja',
    'about.quality.content': 'Melalui jaringan sourcing kami di India dan asal lainnya, kami mendukung produk seperti soybean meal, rapeseed meal, rice DDGS, jagung, maize grits, rice grits, kacang tanah, biji wijen, kacang-kacangan, rempah-rempah, dan bahan baku pertanian lainnya sesuai kebutuhan pembeli. Ketersediaan produk, spesifikasi, kemasan, asal, harga, dan syarat pengiriman selalu dikonfirmasi per kasus.',

    // Profile Page
    'profile.title': 'Profil Perusahaan',
    'profile.subtitle': 'Gambaran praktis PT Svee International untuk pembeli dan mitra dagang',
    'profile.intro.title': 'Sekilas Perusahaan',
    'profile.intro.content': 'PT Svee International / Svee Komoditi adalah perusahaan impor dan sourcing berbasis Indonesia yang terdaftar di Jakarta. Kami bekerja sebagai broker sourcing untuk komoditas agro dan bahan baku makanan, membantu pembeli Indonesia sourcing dari India dan pasar asal terpercaya lainnya. Kami telah aktif sejak 2001.',
    'profile.products.title': 'Lingkup Produk',
    'profile.products.content': 'Kategori produk utama kami adalah: Bahan Baku Pakan Ternak (soybean meal, rapeseed meal, rice DDGS, jagung kuning, corn grits, groundnut meal), Produk Jagung & Biji-bijian (maize grits, corn flour, gandum, barley), Produk Beras & Olahan (rice grits, tepung beras), Biji Minyak & Kernel (kacang tanah, biji wijen, kedelai), Kacang-kacangan & Polong, Rempah-rempah (dari India), Bahan Pangan & Pemanis (liquid glucose, corn flour food grade), dan Pupuk.',
    'profile.operations.title': 'Jaringan Sourcing Kami',
    'profile.operations.content': 'Kami bekerja dengan kontak sourcing dan kantor afiliasi di India di Mumbai, Pune, Chennai, dan Delhi, serta dengan kontak mitra di Myanmar, Vietnam, dan pasar asal lainnya. Kami menggunakan koneksi ini untuk memeriksa ketersediaan, mendapatkan spesifikasi, dan mengkoordinasikan komunikasi pemasok atas nama pembeli Indonesia.',
    'profile.director.title': 'Pendekatan Kami',
    'profile.director.quote': '"Kami mungkin tidak selalu memiliki jawaban segera — tapi kami akan menemukannya. Kami fokus untuk menjadi praktis, mudah dihubungi, dan berguna bagi pembeli yang membutuhkan koordinasi sourcing yang andal."',

    // Products Page
    'products.title': 'Produk',
    'products.subtitle': 'Komoditas agro untuk pembeli Indonesia — bersumber dari India dan pasar asal terpercaya lainnya',
    'products.category': 'Kategori',
    'products.viewDetails': 'Lihat Detail',
    'products.learnMore': 'Kirim Pertanyaan',
    'products.backToCategories': 'Kembali ke Produk',
    'products.specifications': 'Spesifikasi Tipikal',
    'products.benefits': 'Kegunaan Umum',
    'products.relatedProducts': 'Produk Terkait',

    // Services Page
    'services.title': 'Layanan Kami',
    'services.subtitle': 'Dukungan sourcing praktis untuk pembeli Indonesia — dari pertanyaan hingga pengiriman',
    'services.intro': 'Kami membantu pembeli Indonesia memeriksa ketersediaan, membandingkan opsi asal, mengkoordinasikan spesifikasi, dan menindaklanjuti dokumentasi pengiriman. Harga akhir, spesifikasi, asal, dan syarat pengiriman dikonfirmasi per kasus.',

    // Contact Page
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Kirimkan kebutuhan produk Anda dan kami akan memeriksa ketersediaan serta menghubungi Anda.',
    'contact.whatsapp.title': 'Pertanyaan WhatsApp (Diutamakan)',
    'contact.whatsapp.subtitle': 'Cara tercepat untuk mendiskusikan ketersediaan, spesifikasi, dan harga',
    'contact.whatsapp.cta': 'Kirim Pertanyaan WhatsApp',
    'contact.info.title': 'Detail Kontak',
    'contact.info.address': 'Alamat',
    'contact.info.phone': 'Telepon',
    'contact.info.email': 'Email',
    'contact.offices.title': 'Kantor Sourcing & Afiliasi',
    'contact.headquarters': 'Kantor Pusat',

    // Footer
    'footer.company': 'Perusahaan',
    'footer.products': 'Produk',
    'footer.contact': 'Kontak',
    'footer.followUs': 'Ikuti Kami',
    'footer.rights': 'Semua hak dilindungi',

    // Common
    'common.loading': 'Memuat...',
    'common.error': 'Terjadi kesalahan',
    'common.viewAll': 'Lihat Semua',
    'common.products': 'produk',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'id' ? 'id' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

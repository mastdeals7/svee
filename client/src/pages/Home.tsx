import { useI18n } from '@/lib/i18n';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Award, Package, Truck, Clock, MapPin,
  ShieldCheck, FileText, CheckCircle2, Globe2, ChevronRight, Users,
} from 'lucide-react';
import { services as allServices } from '@/data/services';
import { heroImages, sectionBackgrounds, contentImages } from '@/data/media';
import { useEffect, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '6281510551111';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function AnimatedStat({ target, suffix = '', label, sublabel, started }: {
  target: number; suffix?: string; label: string; sublabel: string; started: boolean;
}) {
  const count = useCountUp(target, 1000, started);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary leading-none tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold text-foreground mt-1">{label}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{sublabel}</div>
    </div>
  );
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home() {
  const { language, t } = useI18n();
  const waUrl = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  const heroWaMsg = language === 'en'
    ? 'Hello PT Svee International, I would like to request a product quote.'
    : 'Halo PT Svee International, saya ingin meminta penawaran produk.';

  const { ref: statsRef, inView: statsInView } = useInView(0.4);

  const ticker = language === 'en'
    ? ['Soybean Meal / SBM · India', 'Rice DDGS · India', 'Rapeseed Meal · India', 'Yellow Maize · Origin checked on requirement', 'Corn Grits / Maize Grits · India', 'Rice Grits · India', 'Groundnut Kernels · India', 'Sesame Seeds · India', 'Red Chilli · India', 'Cumin Seeds · India', 'Liquid Glucose · India', 'Green Moong · Origin checked on requirement']
    : ['Soybean Meal / SBM · India', 'Rice DDGS · India', 'Rapeseed Meal · India', 'Jagung Kuning · Asal dicek sesuai kebutuhan', 'Corn Grits / Maize Grits · India', 'Rice Grits · India', 'Kacang Tanah · India', 'Biji Wijen · India', 'Cabai Merah · India', 'Biji Jintan · India', 'Liquid Glucose · India', 'Kacang Hijau · Asal dicek sesuai kebutuhan'];

  const productCategories = [
    {
      img: contentImages.product2,
      label: language === 'en' ? 'Animal Feed Ingredients' : 'Bahan Baku Pakan Ternak',
      desc: language === 'en' ? 'SBM · Rice DDGS · Rapeseed Meal · Maize' : 'SBM · Rice DDGS · Rapeseed Meal · Jagung',
      href: '/products/animal-feed',
      accent: '#FF6B35',
      badge: language === 'en' ? 'Priority' : 'Prioritas',
    },
    {
      img: contentImages.product2,
      label: language === 'en' ? 'Grains & Corn Products' : 'Produk Jagung & Biji-bijian',
      desc: language === 'en' ? 'Maize Grits · Corn Flour · Wheat · Barley' : 'Maize Grits · Corn Flour · Gandum · Barley',
      href: '/products/grains',
      accent: '#1E5BA8',
      badge: '',
    },
    {
      img: contentImages.product3,
      label: language === 'en' ? 'Rice & Milled Products' : 'Produk Beras & Olahan',
      desc: language === 'en' ? 'Rice Grits · Rice Flour · Broken Rice' : 'Rice Grits · Tepung Beras · Beras Patah',
      href: '/products/rice',
      accent: '#FF6B35',
      badge: '',
    },
    {
      img: contentImages.product3,
      label: language === 'en' ? 'Oilseeds & Kernels' : 'Biji Minyak & Kernel',
      desc: language === 'en' ? 'Groundnut HPS · Sesame · Soybeans' : 'Kacang Tanah HPS · Wijen · Kedelai',
      href: '/products/oilseeds',
      accent: '#1E5BA8',
      badge: '',
    },
    {
      img: contentImages.product1,
      label: language === 'en' ? 'Spices (from India)' : 'Rempah-rempah (dari India)',
      desc: language === 'en' ? 'Red Chilli · Turmeric · Cumin · Coriander' : 'Cabai Merah · Kunyit · Jintan · Ketumbar',
      href: '/products/spices',
      accent: '#FF6B35',
      badge: '',
    },
    {
      img: contentImages.banner3,
      label: language === 'en' ? 'Food Ingredients & Sweeteners' : 'Bahan Pangan & Pemanis',
      desc: language === 'en' ? 'Liquid Glucose · Corn Flour · Rice Flour' : 'Liquid Glucose · Corn Flour · Tepung Beras',
      href: '/products/food-ingredients',
      accent: '#1E5BA8',
      badge: '',
    },
  ];

  const origins = language === 'en'
    ? [
        { code: 'IN', country: 'India', products: 'SBM · Maize Grits · Spices · Oilseeds · Pulses · Liquid Glucose', color: 'bg-orange-500' },
        { code: 'ID', country: 'Indonesia', products: 'Palm Oil · Local Commodities', color: 'bg-red-500' },
        { code: 'AS', country: 'Other Asian Origins', products: 'Checked on requirement', color: 'bg-emerald-500' },
        { code: 'GL', country: 'Global Origins', products: 'Case by case', color: 'bg-purple-500' },
      ]
    : [
        { code: 'IN', country: 'India', products: 'SBM · Maize Grits · Rempah · Biji Minyak · Kacang · Liquid Glucose', color: 'bg-orange-500' },
        { code: 'ID', country: 'Indonesia', products: 'Minyak Sawit · Komoditas Lokal', color: 'bg-red-500' },
        { code: 'AS', country: 'Asal Asia Lainnya', products: 'Dicek sesuai kebutuhan', color: 'bg-emerald-500' },
        { code: 'GL', country: 'Asal Global', products: 'Per kasus', color: 'bg-purple-500' },
      ];

  const serviceIconMap: Record<string, any> = {
    global: Globe2, shipping: Truck, finance: FileText,
    documentation: FileText, quality: ShieldCheck, technical: CheckCircle2,
    default: CheckCircle2,
  };

  const buyerTypes = language === 'en'
    ? ['Feed Mills', 'Animal Feed Manufacturers', 'Food Processors', 'Snack Manufacturers', 'Commodity Importers', 'Wholesalers', 'Trading Houses', 'Industrial Buyers']
    : ['Pabrik Pakan', 'Produsen Pakan Ternak', 'Pengolah Makanan', 'Produsen Snack', 'Importir Komoditas', 'Pedagang Grosir', 'Rumah Dagang', 'Pembeli Industri'];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO — split layout, light left / image right ── */}
      <section className="relative min-h-[68vh] md:min-h-[74vh] flex items-center trade-section overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 z-10 w-full">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 md:gap-16 items-center">

            {/* Left — text */}
            <div className="space-y-7 animate-fade-in">
              <div className="inline-flex items-center gap-2 editorial-eyebrow"
                data-testid="badge-since-2001">
                <Award className="h-3 w-3" />
                {language === 'en' ? 'Est. 2001 · Jakarta, Indonesia' : 'Berdiri 2001 · Jakarta, Indonesia'}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[4.35rem] font-display leading-[0.98] text-foreground max-w-2xl"
                data-testid="heading-hero-title">
                {t('home.hero.title')}
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
                data-testid="text-hero-subtitle">
                {t('home.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link href="/products/animal-feed">
                  <Button size="lg" className="w-full sm:w-auto gap-2 shadow-sm text-sm" data-testid="button-animal-feed">
                    {t('home.hero.cta1')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href={waUrl(heroWaMsg)} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm text-sm">
                    <WhatsAppIcon className="h-4 w-4" />
                    {t('home.hero.cta2')}
                  </Button>
                </a>
              </div>

              {/* Trust pills */}
              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-2 pt-2 max-w-xl">
                {(language === 'en'
                  ? ['Indonesia-based', 'India sourcing', 'Spec coordination', 'Document support']
                  : ['Berbasis Indonesia', 'Sourcing India', 'Koordinasi spesifikasi', 'Dukungan dokumen']).map(p => (
                  <span key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stacked images */}
            <div className="relative hidden md:block">
              <div className="relative image-treatment overflow-hidden aspect-[5/4]">
                <img src={heroImages.main} alt="Agro commodities for Indonesian buyers — PT Svee International"
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {(language === 'en'
                    ? ['Soybean Meal · India', 'Corn Grits · India', 'Yellow Maize · On requirement']
                    : ['Soybean Meal · India', 'Corn Grits · India', 'Jagung · Sesuai kebutuhan']).map(t => (
                    <span key={t} className="text-xs bg-white/10 backdrop-blur-sm text-white border border-white/20 px-2.5 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-6 bg-background/95 backdrop-blur border border-border p-4 flex items-center gap-3 z-10">
                <div className="h-10 w-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary leading-none">50+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{language === 'en' ? 'Products sourced' : 'Produk yang disourcingkan'}</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-background/95 backdrop-blur border border-border p-4 flex items-center gap-3 z-10">
                <div className="h-10 w-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold text-accent leading-none">24+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{language === 'en' ? 'Years' : 'Tahun'}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SCROLLING TICKER ── */}
      <div className="bg-primary py-3 overflow-hidden border-y border-primary/20">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-white/90 text-xs font-medium px-6 flex-shrink-0">
              <span className="h-1 w-1 rounded-full bg-accent flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── ANIMATED STATS ── */}
      <section ref={statsRef} className="py-10 bg-background editorial-rule">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <AnimatedStat target={24} suffix="+" label={language === 'en' ? 'Years Active' : 'Tahun Aktif'} sublabel={language === 'en' ? 'Since 2001' : 'Sejak 2001'} started={statsInView} />
            <AnimatedStat target={10} suffix="" label={language === 'en' ? 'Product Categories' : 'Kategori Produk'} sublabel={language === 'en' ? 'Agro & feed commodities' : 'Komoditas agro & pakan'} started={statsInView} />
            <AnimatedStat target={50} suffix="+" label={language === 'en' ? 'Products Sourced' : 'Produk Disourcingkan'} sublabel={language === 'en' ? 'India & other origins' : 'India & asal lainnya'} started={statsInView} />
            <AnimatedStat target={1} suffix=" Day" label={language === 'en' ? 'Response' : 'Respons'} sublabel={language === 'en' ? 'Same day reply' : 'Dijawab hari ini'} started={statsInView} />
          </div>
        </div>
      </section>

      {/* ── SOURCING BRIDGE — dark accent ── */}
      <section className="py-16 md:py-20 bg-[#0B2245]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="space-y-4">
              <p className="editorial-eyebrow">
                {language === 'en' ? 'Our Role' : 'Peran Kami'}
              </p>
              <h2 className="text-3xl md:text-5xl font-display text-white leading-tight">
                {t('home.bridge.title')}
              </h2>
              <p className="text-white/65 leading-relaxed text-base max-w-xl">
                {t('home.bridge.desc')}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {(language === 'en'
                  ? [
                      { icon: CheckCircle2, text: 'Availability check' },
                      { icon: Globe2, text: 'Origin comparison' },
                      { icon: FileText, text: 'Specification coordination' },
                      { icon: Truck, text: 'Document follow-up' },
                    ]
                  : [
                      { icon: CheckCircle2, text: 'Pemeriksaan ketersediaan' },
                      { icon: Globe2, text: 'Perbandingan asal' },
                      { icon: FileText, text: 'Koordinasi spesifikasi' },
                      { icon: Truck, text: 'Tindak lanjut dokumen' },
                    ]
                ).map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-white/70 text-sm border-t border-white/10 pt-3">
                    <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs leading-relaxed pt-1">
                {language === 'en'
                  ? 'Final price, specification, origin and shipment terms are confirmed case by case.'
                  : 'Harga akhir, spesifikasi, asal dan syarat pengiriman dikonfirmasi per kasus.'}
              </p>
              <Link href="/about">
                <Button variant="outline" className="gap-2 text-sm mt-1 border-white/20 text-white/80 hover:text-white hover:border-white/40 bg-transparent">
                  {language === 'en' ? 'Read More About Us' : 'Baca Lebih Lanjut'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Buyer types */}
            <div className="space-y-3">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                {language === 'en' ? 'We Mainly Serve' : 'Kami Terutama Melayani'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {buyerTypes.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 border-t border-white/10 px-0 py-3">
                    <Users className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span className="text-white/75 text-xs leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES GRID ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="editorial-eyebrow mb-2">
                {language === 'en' ? 'Product Categories' : 'Kategori Produk'}
              </p>
              <h2 className="text-3xl md:text-5xl font-display text-foreground" data-testid="heading-categories">
                {t('home.categories.title')}
              </h2>
              <p className="text-muted-foreground text-sm mt-1 max-w-md">
                {t('home.categories.subtitle')}
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                {language === 'en' ? 'All Products' : 'Semua Produk'}
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {productCategories.map((cat, i) => (
              <Link key={i} href={cat.href}>
                <div className="group relative image-treatment overflow-hidden cursor-pointer aspect-[16/11]"
                  data-testid={`category-card-${i}`}>
                  <img src={cat.img} alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-white font-semibold text-lg leading-tight">{cat.label}</div>
                    <div className="text-white/60 text-[10px] mt-1">{cat.desc}</div>
                  </div>
                  {cat.badge && (
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-sm"
                        style={{ backgroundColor: cat.accent }}>{cat.badge}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link href="/products">
              <Button variant="outline" className="gap-2 text-sm">
                {language === 'en' ? 'View All 10 Product Categories' : 'Lihat Semua 10 Kategori Produk'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP — light, split ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">

            <div className="relative image-treatment overflow-hidden group aspect-[4/3] order-2 md:order-1">
              <img src={contentImages.about} alt="PT Svee International — agro commodity sourcing Jakarta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow">
                  {language === 'en' ? 'Est. 2001' : 'Berdiri 2001'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-2.5 py-1 rounded-sm">Jakarta HQ</span>
                  <span className="text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-2.5 py-1 rounded-sm flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5" />India · Other origins case by case
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 order-1 md:order-2">
              <p className="editorial-eyebrow">
                {language === 'en' ? 'About Us' : 'Tentang Kami'}
              </p>
              <h2 className="text-3xl md:text-5xl font-display leading-tight" data-testid="heading-about-title">
                {t('home.about.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm" data-testid="text-about-description">
                {t('home.about.description')}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground" data-testid="text-about-mission">
                {t('home.about.mission')}
              </p>

              <div className="grid grid-cols-3 gap-3 pt-1">
                {[
                  { val: '24+', lbl: language === 'en' ? 'Years Active' : 'Tahun Aktif' },
                  { val: '10', lbl: language === 'en' ? 'Categories' : 'Kategori' },
                  { val: '50+', lbl: language === 'en' ? 'Products' : 'Produk' },
                ].map((s, i) => (
                  <div key={i} className="border-t border-border p-3 text-center">
                    <div className="text-2xl font-bold text-primary leading-none">{s.val}</div>
                    <div className="text-[11px] text-muted-foreground mt-1">{s.lbl}</div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" className="gap-2 text-sm" data-testid="button-learn-more">
                  {t('home.about.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOURCING ORIGINS ── */}
      <section className="py-16 md:py-20 bg-background editorial-rule">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <div>
              <p className="editorial-eyebrow mb-2">
                {language === 'en' ? 'Origin Markets' : 'Pasar Asal'}
              </p>
              <h2 className="text-3xl md:text-5xl font-display text-foreground">
                {t('home.network.title')}
              </h2>
            </div>
            <p className="text-muted-foreground text-xs max-w-xs">
              {t('home.network.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-border">
            {origins.map((o, i) => (
              <div key={i}
                className="bg-transparent border-b sm:border-r border-border p-6 flex flex-col items-start text-left gap-3 hover-elevate"
                data-testid={`origin-tile-${i}`}>
                <div className={`h-10 w-10 ${o.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                  {o.code}
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm leading-tight">{o.country}</div>
                  <div className="text-muted-foreground text-[10px] mt-1 leading-relaxed">{o.products}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES — light ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-6">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'Our Services' : 'Layanan Kami'}
            </p>
            <h2 className="text-3xl md:text-5xl font-display" data-testid="heading-services">
              {t('home.services.title')}
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto" data-testid="text-services-subtitle">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0 border-y border-border">
            {allServices.map((service) => {
              const Icon = serviceIconMap[service.icon] || serviceIconMap.default;
              return (
                <div key={service.id}
                  className="border-b md:border-r border-border py-7 pr-6 hover-elevate group"
                  data-testid={`card-service-${service.id}`}>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm leading-tight mb-1.5">
                        {service.title[language]}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                        {service.description[language]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <Link href="/services">
              <Button variant="outline" className="gap-2 text-sm">
                {t('home.services.cta')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — dark ── */}
      <section className="relative py-16 md:py-20 bg-[#0B2245] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-5 md:px-10 text-center z-10">
          <p className="editorial-eyebrow mb-3">
            {language === 'en' ? 'Get in Touch' : 'Hubungi Kami'}
          </p>
          <h2 className="text-2xl md:text-3xl font-display text-white mb-3">
            {t('home.cta.title')}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waUrl(heroWaMsg)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm">
                <WhatsAppIcon className="h-5 w-5" />
                {t('home.cta.button')}
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-white/20 text-white/80 hover:text-white hover:border-white/40 bg-transparent">
                {language === 'en' ? 'Contact Page' : 'Halaman Kontak'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-5 leading-relaxed">
            {language === 'en'
              ? 'Product availability, specification, price and shipment terms are confirmed case by case.'
              : 'Ketersediaan produk, spesifikasi, harga dan syarat pengiriman dikonfirmasi per kasus.'}
          </p>
        </div>
      </section>

    </div>
  );
}

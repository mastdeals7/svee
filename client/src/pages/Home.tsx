import { useI18n } from '@/lib/i18n';
import { Link } from 'wouter';
import { ArrowRight, Award, Package, Truck, Clock, ShieldCheck, FileText, CircleCheck as CheckCircle2, Globe as Globe2, ChevronRight, Users, Star, Leaf, ChartBar as BarChart3, MapPin } from 'lucide-react';
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

function StatBlock({ target, suffix = '', label, sublabel, started }: {
  target: number; suffix?: string; label: string; sublabel: string; started: boolean;
}) {
  const count = useCountUp(target, 1000, started);
  return (
    <div className="text-center p-6 md:p-8">
      <div className="text-4xl md:text-5xl font-bold text-[#1A4A9E] leading-none tabular-nums mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold text-[#1A4A9E] mb-1">{label}</div>
      <div className="text-xs text-[#6b7280]">{sublabel}</div>
    </div>
  );
}

export default function Home() {
  const { language } = useI18n();
  const waUrl = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  const heroWaMsg = language === 'en'
    ? 'Hello PT Svee International, I would like to request a product quote.'
    : 'Halo PT Svee International, saya ingin meminta penawaran produk.';

  const { ref: statsRef, inView: statsInView } = useInView(0.3);

  const ticker = language === 'en'
    ? ['Soybean Meal / SBM · India', 'Rice DDGS · India', 'Rapeseed Meal · India', 'Yellow Maize · Origin checked', 'Corn Grits / Maize Grits · India', 'Rice Grits · India', 'Groundnut Kernels · India', 'Sesame Seeds · India', 'Red Chilli · India', 'Cumin Seeds · India', 'Liquid Glucose · India', 'Green Moong · India/Myanmar']
    : ['Soybean Meal / SBM · India', 'Rice DDGS · India', 'Rapeseed Meal · India', 'Jagung Kuning · Asal dicek', 'Corn Grits / Maize Grits · India', 'Rice Grits · India', 'Kacang Tanah · India', 'Biji Wijen · India', 'Cabai Merah · India', 'Biji Jintan · India', 'Liquid Glucose · India', 'Kacang Hijau · India/Myanmar'];

  const productCategories = [
    {
      img: contentImages.product2,
      label: language === 'en' ? 'Animal Feed Ingredients' : 'Bahan Baku Pakan Ternak',
      desc: language === 'en' ? 'SBM · Rice DDGS · Rapeseed Meal · Yellow Maize' : 'SBM · Rice DDGS · Rapeseed Meal · Jagung',
      href: '/products/animal-feed-ingredients',
      badge: language === 'en' ? 'Priority' : 'Prioritas',
    },
    {
      img: contentImages.product2,
      label: language === 'en' ? 'Grains & Corn Products' : 'Produk Jagung & Biji-bijian',
      desc: language === 'en' ? 'Maize Grits · Corn Flour · Wheat · Barley' : 'Maize Grits · Corn Flour · Gandum · Barley',
      href: '/products/grains-corn-products',
    },
    {
      img: contentImages.product3,
      label: language === 'en' ? 'Oilseeds & Kernels' : 'Biji Minyak & Kernel',
      desc: language === 'en' ? 'Groundnut HPS · Sesame Seeds · Soybeans' : 'Kacang Tanah HPS · Wijen · Kedelai',
      href: '/products/oilseeds-kernels',
    },
    {
      img: contentImages.product3,
      label: language === 'en' ? 'Pulses & Beans' : 'Kacang-kacangan & Polong',
      desc: language === 'en' ? 'Chickpeas · Green Moong · Red Lentils · Pigeon Peas' : 'Chickpeas · Kacang Hijau · Lentil Merah',
      href: '/products/pulses-beans',
    },
    {
      img: contentImages.product1,
      label: language === 'en' ? 'Spices from India' : 'Rempah-rempah dari India',
      desc: language === 'en' ? 'Red Chilli · Turmeric · Cumin · Coriander' : 'Cabai Merah · Kunyit · Jintan · Ketumbar',
      href: '/products/spices',
    },
    {
      img: contentImages.banner3,
      label: language === 'en' ? 'Food Ingredients' : 'Bahan Pangan',
      desc: language === 'en' ? 'Liquid Glucose · Corn Flour · Rice Flour' : 'Liquid Glucose · Corn Flour · Tepung Beras',
      href: '/products/food-ingredients-sweeteners',
    },
  ];

  const whyChooseUs = language === 'en' ? [
    { icon: Award, title: '24+ Years Experience', desc: 'Established in 2001 and actively serving Indonesian buyers since.', color: 'bg-amber-50 text-amber-700' },
    { icon: Globe2, title: 'India Sourcing Focus', desc: 'Strong sourcing network across India — Mumbai, Pune, Chennai, Delhi.', color: 'bg-blue-50 text-blue-700' },
    { icon: ShieldCheck, title: 'Document Support', desc: 'COA, phytosanitary, fumigation, BL, certificate of origin and more.', color: 'bg-green-50 text-green-700' },
    { icon: Clock, title: 'Same-Day Response', desc: 'We respond quickly via WhatsApp — no complicated forms or wait times.', color: 'bg-orange-50 text-orange-700' },
    { icon: FileText, title: 'Spec Coordination', desc: 'We help match your specification with available supply and origins.', color: 'bg-teal-50 text-teal-700' },
    { icon: Users, title: 'B2B Only', desc: 'We exclusively serve feed mills, food processors and commodity importers.', color: 'bg-rose-50 text-rose-700' },
  ] : [
    { icon: Award, title: '24+ Tahun Pengalaman', desc: 'Berdiri tahun 2001 dan aktif melayani pembeli Indonesia sejak saat itu.', color: 'bg-amber-50 text-amber-700' },
    { icon: Globe2, title: 'Fokus Sourcing India', desc: 'Jaringan sourcing kuat di seluruh India — Mumbai, Pune, Chennai, Delhi.', color: 'bg-blue-50 text-blue-700' },
    { icon: ShieldCheck, title: 'Dukungan Dokumen', desc: 'COA, fitosanitasi, fumigasi, BL, sertifikat asal dan lainnya.', color: 'bg-green-50 text-green-700' },
    { icon: Clock, title: 'Respon Hari yang Sama', desc: 'Kami merespon cepat melalui WhatsApp — tanpa formulir rumit atau waktu tunggu.', color: 'bg-orange-50 text-orange-700' },
    { icon: FileText, title: 'Koordinasi Spesifikasi', desc: 'Kami membantu mencocokkan spesifikasi Anda dengan pasokan dan asal yang tersedia.', color: 'bg-teal-50 text-teal-700' },
    { icon: Users, title: 'Khusus B2B', desc: 'Kami melayani eksklusif pabrik pakan, pengolah makanan dan importir komoditas.', color: 'bg-rose-50 text-rose-700' },
  ];

  const serviceIconMap: Record<string, any> = {
    global: Globe2, shipping: Truck, finance: FileText,
    documentation: FileText, quality: ShieldCheck, technical: CheckCircle2,
    default: CheckCircle2,
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#1A4A9E]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img src={heroImages.main} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A4A9E]/95 via-[#1A4A9E]/80 to-[#1A4A9E]/40" />
        </div>
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

        <div className="relative site-container py-10 md:py-14 z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">

            {/* Left — text */}
            <div className="space-y-5 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5"
                data-testid="badge-since-2001">
                <Award className="h-3.5 w-3.5 text-[#E85E00]" />
                <span className="text-xs font-semibold text-white/90">
                  {language === 'en' ? 'Est. 2001 · Jakarta, Indonesia · Your Export Import Partner' : 'Berdiri 2001 · Jakarta, Indonesia · Mitra Ekspor Impor Anda'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.1] text-white max-w-xl"
                data-testid="heading-hero-title">
                {language === 'en'
                  ? 'Agro Commodity Sourcing for Indonesian Buyers'
                  : 'Sourcing Komoditas Agro untuk Pembeli Indonesia'}
              </h1>

              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-lg"
                data-testid="text-hero-subtitle">
                {language === 'en'
                  ? 'PT Svee International helps Indonesian feed mills, food processors and commodity importers source agricultural products from India — with support for supplier coordination, documentation and shipment follow-up.'
                  : 'PT Svee International membantu pabrik pakan, pengolah makanan, dan importir komoditas di Indonesia sourcing dari India — dengan dukungan koordinasi pemasok, dokumentasi, dan tindak lanjut pengiriman.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link href="/products/animal-feed-ingredients">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E85E00] hover:bg-[#CC5200] text-white text-sm font-semibold rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
                    data-testid="button-animal-feed">
                    {language === 'en' ? 'View Products' : 'Lihat Produk'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a href={waUrl(heroWaMsg)} target="_blank" rel="noopener noreferrer"
                  data-testid="button-whatsapp-hero">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5">
                    <WhatsAppIcon className="h-4 w-4" />
                    {language === 'en' ? 'Request Quote via WhatsApp' : 'Minta Penawaran via WhatsApp'}
                  </button>
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {(language === 'en'
                  ? ['Indonesia-based sourcing', 'India supply network', 'Full spec coordination', 'Same-day response']
                  : ['Sourcing berbasis Indonesia', 'Jaringan pasokan India', 'Koordinasi spesifikasi', 'Respons hari yang sama']).map(p => (
                  <span key={p} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs text-white/75">
                    <CheckCircle2 className="h-3 w-3 text-[#E85E00] flex-shrink-0" />
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stats cards */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {[
                { icon: Package, val: '50+', lbl: language === 'en' ? 'Products sourced' : 'Produk disourcing', color: 'text-[#E85E00]' },
                { icon: Award, val: '24+', lbl: language === 'en' ? 'Years active' : 'Tahun aktif', color: 'text-white' },
                { icon: Globe2, val: '10', lbl: language === 'en' ? 'Categories' : 'Kategori', color: 'text-white' },
                { icon: Users, val: 'B2B', lbl: language === 'en' ? 'Buyers only' : 'Khusus pembeli', color: 'text-[#E85E00]' },
              ].map(({ icon: Icon, val, lbl, color }, i) => (
                <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <Icon className={`h-5 w-5 mb-3 ${color}`} />
                  <div className="text-2xl font-bold text-white leading-none mb-1">{val}</div>
                  <div className="text-xs text-white/55">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT TICKER ── */}
      <div className="bg-[#1A4A9E] py-3.5 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-white/80 text-xs font-medium px-6 flex-shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E85E00] flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-4 bg-white border-b border-[#ede8e0]">
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#ede8e0]">
            <StatBlock target={24} suffix="+" label={language === 'en' ? 'Years Active' : 'Tahun Aktif'} sublabel={language === 'en' ? 'Since 2001' : 'Sejak 2001'} started={statsInView} />
            <StatBlock target={10} label={language === 'en' ? 'Product Categories' : 'Kategori Produk'} sublabel={language === 'en' ? 'Agro & feed commodities' : 'Komoditas agro & pakan'} started={statsInView} />
            <StatBlock target={50} suffix="+" label={language === 'en' ? 'Products Sourced' : 'Produk Disourcingkan'} sublabel={language === 'en' ? 'India & other origins' : 'India & asal lainnya'} started={statsInView} />
            <StatBlock target={1} suffix=" Day" label={language === 'en' ? 'Response Time' : 'Waktu Respons'} sublabel={language === 'en' ? 'Same day reply' : 'Dijawab hari ini'} started={statsInView} />
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-12 md:py-16 bg-[#f9f6f1]">
        <div className="site-container">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3">{language === 'en' ? 'Product Categories' : 'Kategori Produk'}</p>
              <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E]" data-testid="heading-categories">
                {language === 'en' ? 'What We Source' : 'Apa yang Kami Sourcingkan'}
              </h2>
              <p className="text-[#6b7280] text-sm mt-2 max-w-md">
                {language === 'en'
                  ? 'Ten categories for Indonesian feed mills, food processors and importers'
                  : 'Sepuluh kategori untuk pabrik pakan, pengolah makanan dan importir Indonesia'}
              </p>
            </div>
            <Link href="/products">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-[#1A4A9E] hover:text-[#E85E00] transition-colors">
                {language === 'en' ? 'All Products' : 'Semua Produk'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCategories.map((cat, i) => (
              <Link key={i} href={cat.href}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#ede8e0]"
                  data-testid={`category-card-${i}`}>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img src={cat.img} alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A9E]/85 via-[#1A4A9E]/25 to-transparent" />
                    {cat.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#E85E00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {cat.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-white font-semibold text-base leading-tight mb-1">{cat.label}</div>
                    <div className="text-white/60 text-xs">{cat.desc}</div>
                    <div className="flex items-center gap-1 text-[#E85E00] text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {language === 'en' ? 'View Products' : 'Lihat Produk'} <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products">
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1A4A9E] text-[#1A4A9E] hover:bg-[#1A4A9E] hover:text-white text-sm font-semibold rounded-xl transition-all">
                {language === 'en' ? 'View All 10 Product Categories' : 'Lihat Semua 10 Kategori Produk'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container">
          <div className="text-center mb-8">
            <p className="eyebrow mb-3">{language === 'en' ? 'Why Choose Us' : 'Mengapa Memilih Kami'}</p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E] mb-3">
              {language === 'en' ? 'Practical Sourcing Support You Can Rely On' : 'Dukungan Sourcing Praktis yang Bisa Anda Andalkan'}
            </h2>
            <p className="text-[#6b7280] text-base max-w-xl mx-auto">
              {language === 'en'
                ? 'We focus on being useful — not just promising. Here is what we actually do.'
                : 'Kami fokus untuk berguna — tidak hanya berjanji. Inilah yang sebenarnya kami lakukan.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-[#f9f6f1] rounded-2xl p-6 border border-[#ede8e0] hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl mb-4 ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-[#1A4A9E] text-sm mb-2">{item.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="py-12 md:py-16 bg-[#f9f6f1]">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

            <div className="relative img-rounded overflow-hidden group aspect-[4/3] order-2 lg:order-1">
              <img src={contentImages.about} alt="PT Svee International team — Jakarta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A9E]/70 via-[#1A4A9E]/15 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#1A4A9E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  {language === 'en' ? 'Est. 2001' : 'Berdiri 2001'}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-2.5 py-1 rounded-full">Jakarta HQ</span>
                  <span className="text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5" />India sourcing network
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-5 order-1 lg:order-2">
              <p className="eyebrow">{language === 'en' ? 'About Us' : 'Tentang Kami'}</p>
              <h2 className="text-3xl md:text-4xl font-display leading-tight text-[#1A4A9E]"
                data-testid="heading-about-title">
                {language === 'en'
                  ? 'Indonesia-based Import & Sourcing Support Since 2001'
                  : 'Dukungan Impor & Sourcing Berbasis Indonesia Sejak 2001'}
              </h2>
              <p className="text-[#4a5568] leading-relaxed text-sm"
                data-testid="text-about-description">
                {language === 'en'
                  ? 'PT Svee International / Svee Komoditi is based in Jakarta and focused on helping Indonesian buyers source agro commodities, feed raw materials and food ingredients from India and other reliable origin markets.'
                  : 'PT Svee International / Svee Komoditi berbasis di Jakarta dan fokus membantu pembeli Indonesia sourcing komoditas agro, bahan baku pakan, dan bahan pangan dari India dan pasar asal terpercaya lainnya.'}
              </p>
              <p className="text-sm leading-relaxed text-[#4a5568]"
                data-testid="text-about-mission">
                {language === 'en'
                  ? 'We help with supplier identification, availability checks, specification coordination, documentation follow-up and shipment communication. Product availability, specifications, packing, origin and price are confirmed case by case.'
                  : 'Kami membantu identifikasi pemasok, pemeriksaan ketersediaan, koordinasi spesifikasi, tindak lanjut dokumentasi, dan komunikasi pengiriman. Ketersediaan produk, spesifikasi, kemasan, asal, dan harga dikonfirmasi per kasus.'}
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { val: '24+', lbl: language === 'en' ? 'Years Active' : 'Tahun Aktif' },
                  { val: '10', lbl: language === 'en' ? 'Categories' : 'Kategori' },
                  { val: '50+', lbl: language === 'en' ? 'Products' : 'Produk' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl border border-[#ede8e0] p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#1A4A9E] leading-none">{s.val}</div>
                    <div className="text-[11px] text-[#6b7280] mt-1 font-medium">{s.lbl}</div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4A9E] hover:text-[#E85E00] transition-colors mt-2"
                  data-testid="button-learn-more">
                  {language === 'en' ? 'Learn More About Us' : 'Pelajari Lebih Lanjut'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOURCING BRIDGE — dark ── */}
      <section className="py-12 md:py-16 bg-[#1A4A9E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-5">
              <p className="eyebrow text-[#E85E00]">
                {language === 'en' ? 'Our Role' : 'Peran Kami'}
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-white leading-tight">
                {language === 'en'
                  ? 'Your Sourcing Bridge Between Indonesia and India'
                  : 'Jembatan Sourcing Anda Antara Indonesia dan India'}
              </h2>
              <p className="text-white/65 leading-relaxed text-sm max-w-xl">
                {language === 'en'
                  ? 'We work with Indonesian buyers who need practical sourcing support for agro commodities, feed raw materials and food ingredients. Our role is to help buyers check availability, compare origins, coordinate specifications, follow documentation and keep communication clear between buyer and supplier.'
                  : 'Kami bekerja dengan pembeli Indonesia yang membutuhkan dukungan sourcing praktis untuk komoditas agro, bahan baku pakan, dan bahan pangan. Peran kami adalah membantu pembeli memeriksa ketersediaan, membandingkan asal, mengkoordinasikan spesifikasi, dan menjaga komunikasi yang jelas.'}
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
                  <div key={text} className="flex items-center gap-2.5 text-white/70 text-sm py-2.5 border-t border-white/10">
                    <Icon className="h-4 w-4 text-[#E85E00] flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
              <p className="text-white/35 text-xs leading-relaxed pt-1">
                {language === 'en'
                  ? 'Final price, specification, origin and shipment terms are confirmed case by case.'
                  : 'Harga akhir, spesifikasi, asal dan syarat pengiriman dikonfirmasi per kasus.'}
              </p>
              <Link href="/about">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded-xl transition-all">
                  {language === 'en' ? 'Read More About Us' : 'Baca Lebih Lanjut'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Buyer types */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-5">
                {language === 'en' ? 'We Mainly Serve' : 'Kami Terutama Melayani'}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {(language === 'en'
                  ? ['Feed Mills', 'Animal Feed Manufacturers', 'Food Processors', 'Snack Manufacturers', 'Commodity Importers', 'Wholesalers', 'Trading Houses', 'Industrial Buyers']
                  : ['Pabrik Pakan', 'Produsen Pakan Ternak', 'Pengolah Makanan', 'Produsen Snack', 'Importir Komoditas', 'Pedagang Grosir', 'Rumah Dagang', 'Pembeli Industri']
                ).map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2.5 border-b border-white/8">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#E85E00] flex-shrink-0" />
                    <span className="text-white/70 text-xs leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPORT QUALITY / CERTIFICATIONS ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="eyebrow">{language === 'en' ? 'Quality Promise' : 'Janji Kualitas'}</p>
              <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E] leading-tight">
                {language === 'en' ? 'Export-Grade Quality With Full Documentation' : 'Kualitas Standar Ekspor Dengan Dokumentasi Lengkap'}
              </h2>
              <p className="text-[#4a5568] text-sm leading-relaxed">
                {language === 'en'
                  ? 'Every shipment we coordinate is supported with proper trade documentation. We work with suppliers who can provide the required certificates and compliance documents for Indonesian import regulations.'
                  : 'Setiap pengiriman yang kami koordinasikan didukung dengan dokumentasi perdagangan yang tepat. Kami bekerja dengan pemasok yang dapat menyediakan sertifikat dan dokumen kepatuhan yang diperlukan untuk regulasi impor Indonesia.'}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {['Certificate of Origin', 'Phytosanitary Certificate', 'Fumigation Certificate', 'Bill of Lading', 'Certificate of Analysis', 'SGS / Third-party Inspection'].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#4a5568]">
                    <ShieldCheck className="h-4 w-4 text-[#2E7D55] flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-[#f9f6f1]">
              <img src={sectionBackgrounds.port} alt="Port shipment quality"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A4A9E]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-[#2E7D55]/10 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-[#2E7D55]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A4A9E]">
                        {language === 'en' ? 'Document Support Included' : 'Dukungan Dokumen Termasuk'}
                      </div>
                      <div className="text-xs text-[#6b7280] mt-0.5">
                        {language === 'en' ? 'COA · Phyto · Fumigation · BL · CO' : 'COA · Fitosanitasi · Fumigasi · BL · CO'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIGIN MARKETS ── */}
      <section className="py-12 md:py-16 bg-[#f9f6f1] border-t border-[#ede8e0]">
        <div className="site-container">
          <div className="text-center mb-8">
            <p className="eyebrow mb-3">{language === 'en' ? 'Origin Markets' : 'Pasar Asal'}</p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E]">
              {language === 'en' ? 'Sourcing From Reliable Origin Markets' : 'Sourcing dari Pasar Asal Terpercaya'}
            </h2>
            <p className="text-[#6b7280] text-sm mt-2 max-w-md mx-auto">
              {language === 'en'
                ? 'We support Indonesian buyers primarily from India, plus other origins checked case by case'
                : 'Kami mendukung pembeli Indonesia terutama dari India, serta asal lain yang dicek per kasus'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(language === 'en' ? [
              { code: 'IN', country: 'India', products: 'SBM · Maize Grits · Spices · Oilseeds · Pulses · Liquid Glucose', color: 'from-orange-400 to-orange-600', main: true },
              { code: 'ID', country: 'Indonesia', products: 'Palm Oil · Local Commodities', color: 'from-red-400 to-red-600', main: false },
              { code: 'AS', country: 'Other Asian Origins', products: 'Myanmar · Vietnam · Checked on requirement', color: 'from-emerald-400 to-emerald-600', main: false },
              { code: 'GL', country: 'Global Origins', products: 'Australia · Black Sea · Case by case', color: 'from-sky-400 to-sky-600', main: false },
            ] : [
              { code: 'IN', country: 'India', products: 'SBM · Maize Grits · Rempah · Biji Minyak · Kacang · Liquid Glucose', color: 'from-orange-400 to-orange-600', main: true },
              { code: 'ID', country: 'Indonesia', products: 'Minyak Sawit · Komoditas Lokal', color: 'from-red-400 to-red-600', main: false },
              { code: 'AS', country: 'Asal Asia Lainnya', products: 'Myanmar · Vietnam · Dicek sesuai kebutuhan', color: 'from-emerald-400 to-emerald-600', main: false },
              { code: 'GL', country: 'Asal Global', products: 'Australia · Black Sea · Per kasus', color: 'from-sky-400 to-sky-600', main: false },
            ]).map((o, i) => (
              <div key={i}
                className={`bg-white rounded-2xl border p-6 transition-shadow hover:shadow-md ${o.main ? 'border-[#E85E00] shadow-sm' : 'border-[#ede8e0]'}`}
                data-testid={`origin-tile-${i}`}>
                <div className={`h-12 w-12 bg-gradient-to-br ${o.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm mb-4`}>
                  {o.code}
                </div>
                <div className="font-semibold text-[#1A4A9E] text-sm mb-1.5 flex items-center gap-2">
                  {o.country}
                  {o.main && <span className="text-[10px] bg-[#E85E00] text-white px-2 py-0.5 rounded-full font-bold">Primary</span>}
                </div>
                <div className="text-[#6b7280] text-xs leading-relaxed">{o.products}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container">
          <div className="text-center mb-8">
            <p className="eyebrow mb-3">{language === 'en' ? 'Our Services' : 'Layanan Kami'}</p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E]" data-testid="heading-services">
              {language === 'en' ? 'How We Can Help' : 'Cara Kami Membantu'}
            </h2>
            <p className="text-[#6b7280] text-sm mt-2 max-w-md mx-auto" data-testid="text-services-subtitle">
              {language === 'en'
                ? 'From first product enquiry to shipment arrival — practical sourcing support at each step'
                : 'Dari pertanyaan produk pertama hingga pengiriman tiba — dukungan sourcing praktis di setiap tahap'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((service, idx) => {
              const Icon = serviceIconMap[service.icon] || serviceIconMap.default;
              const colors = [
                'bg-blue-50 text-[#1A4A9E]',
                'bg-amber-50 text-amber-700',
                'bg-green-50 text-green-700',
                'bg-rose-50 text-rose-700',
                'bg-teal-50 text-teal-700',
              ];
              return (
                <div key={service.id}
                  className="bg-[#f9f6f1] rounded-2xl p-6 border border-[#ede8e0] hover:shadow-md transition-all hover:-translate-y-0.5 group"
                  data-testid={`card-service-${service.id}`}>
                  <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl mb-4 ${colors[idx % colors.length]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-[#1A4A9E] text-sm leading-tight mb-2">
                    {service.title[language]}
                  </h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed line-clamp-3">
                    {service.description[language]}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1A4A9E] text-[#1A4A9E] hover:bg-[#1A4A9E] hover:text-white text-sm font-semibold rounded-xl transition-all">
                {language === 'en' ? 'See All Services' : 'Lihat Semua Layanan'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GLOBAL SUPPLY ── */}
      <section className="py-12 md:py-16 bg-[#f9f6f1] border-t border-[#ede8e0]">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-white">
              <img src={sectionBackgrounds.warehouse} alt="Warehouse and supply chain"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A9E]/50 to-transparent" />
            </div>
            <div className="space-y-5">
              <p className="eyebrow">{language === 'en' ? 'Global Supply' : 'Pasokan Global'}</p>
              <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E] leading-tight">
                {language === 'en' ? 'Reliable Supply Chain From Farm to Port' : 'Rantai Pasokan Andal dari Ladang ke Pelabuhan'}
              </h2>
              <p className="text-[#4a5568] text-sm leading-relaxed">
                {language === 'en'
                  ? 'Our associate offices and sourcing contacts in India and across Asia help ensure we can check availability, verify specifications and coordinate logistics for Indonesian buyers efficiently.'
                  : 'Kantor afiliasi dan kontak sourcing kami di India dan Asia membantu kami memeriksa ketersediaan, memverifikasi spesifikasi, dan mengkoordinasikan logistik untuk pembeli Indonesia secara efisien.'}
              </p>
              <div className="space-y-3 pt-2">
                {(language === 'en' ? [
                  { icon: MapPin, text: 'Associate offices in Mumbai, Pune, Chennai & Delhi' },
                  { icon: Globe2, text: 'Partner contacts in Myanmar, Vietnam and other Asian origins' },
                  { icon: Truck, text: 'Shipment coordination from origin port to Indonesian ports' },
                  { icon: BarChart3, text: 'Real-time availability checks and market updates' },
                ] : [
                  { icon: MapPin, text: 'Kantor afiliasi di Mumbai, Pune, Chennai & Delhi' },
                  { icon: Globe2, text: 'Kontak mitra di Myanmar, Vietnam dan asal Asia lainnya' },
                  { icon: Truck, text: 'Koordinasi pengiriman dari pelabuhan asal ke pelabuhan Indonesia' },
                  { icon: BarChart3, text: 'Pemeriksaan ketersediaan real-time dan pembaruan pasar' },
                ]).map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#4a5568]">
                    <Icon className="h-4 w-4 text-[#E85E00] flex-shrink-0 mt-0.5" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-12 md:py-16 bg-[#1A4A9E] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container text-center z-10 max-w-3xl mx-auto">
          <p className="eyebrow text-[#E85E00] mb-4">
            {language === 'en' ? 'Get in Touch' : 'Hubungi Kami'}
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            {language === 'en'
              ? 'Send Us Your Product Requirement'
              : 'Kirimkan Kebutuhan Produk Anda'}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            {language === 'en'
              ? 'Tell us what you need — product, quantity and destination. We will check availability and come back to you as soon as possible.'
              : 'Beritahu kami apa yang Anda butuhkan — produk, kuantitas, dan tujuan. Kami akan memeriksa ketersediaan dan menghubungi Anda sesegera mungkin.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waUrl(heroWaMsg)} target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all shadow-[0_4px_20px_rgba(46,125,85,0.3)] hover:shadow-[0_8px_30px_rgba(46,125,85,0.4)] hover:-translate-y-0.5">
                <WhatsAppIcon className="h-5 w-5" />
                {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
              </button>
            </a>
            <Link href="/contact">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all">
                {language === 'en' ? 'View Contact Page' : 'Halaman Kontak'}
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          <p className="text-white/25 text-xs mt-6 leading-relaxed">
            {language === 'en'
              ? 'Product availability, specification, price and shipment terms are confirmed case by case.'
              : 'Ketersediaan produk, spesifikasi, harga dan syarat pengiriman dikonfirmasi per kasus.'}
          </p>
        </div>
      </section>

    </div>
  );
}

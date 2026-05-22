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

      {/* ── HERO — cinematic full-bleed ── */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[640px] overflow-hidden">
        {/* Full-bleed image */}
        <img src={heroImages.main} alt="Agro commodity sourcing"
          className="absolute inset-0 w-full h-full object-cover" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A9E]/95 via-[#1A4A9E]/50 to-[#1A4A9E]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4A9E]/60 to-transparent" />

        {/* Content — positioned at bottom */}
        <div className="absolute inset-0 flex items-end">
          <div className="site-container pb-10 md:pb-14 w-full z-10">
            <div className="max-w-2xl animate-fade-in space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display leading-[1.05] text-white drop-shadow-lg"
                data-testid="heading-hero-title">
                {language === 'en'
                  ? 'Your Export Import Partner'
                  : 'Mitra Ekspor Impor Anda'}
              </h1>
              <p className="text-sm md:text-base text-white/80 max-w-md">
                {language === 'en'
                  ? 'Agro commodity sourcing from India to Indonesia since 2001.'
                  : 'Sourcing komoditas agro dari India ke Indonesia sejak 2001.'}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/products">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#E85E00] hover:bg-[#CC5200] text-white text-sm font-semibold rounded-xl transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                    data-testid="button-animal-feed">
                    {language === 'en' ? 'Explore Products' : 'Lihat Produk'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a href={waUrl(heroWaMsg)} target="_blank" rel="noopener noreferrer"
                  data-testid="button-whatsapp-hero">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5">
                    <WhatsAppIcon className="h-4 w-4" />
                    {language === 'en' ? 'Get Quote' : 'Minta Penawaran'}
                  </button>
                </a>
              </div>
            </div>

            {/* Floating stat bar — desktop */}
            <div className="hidden md:flex items-center gap-6 mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 max-w-fit">
              {[
                { val: '24+', lbl: language === 'en' ? 'Years' : 'Tahun' },
                { val: '50+', lbl: language === 'en' ? 'Products' : 'Produk' },
                { val: '10', lbl: language === 'en' ? 'Categories' : 'Kategori' },
                { val: 'B2B', lbl: language === 'en' ? 'Only' : 'Saja' },
              ].map(({ val, lbl }, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="h-8 w-px bg-white/20" />}
                  <div className="text-center">
                    <div className="text-xl font-bold text-white leading-none">{val}</div>
                    <div className="text-[10px] text-white/60 mt-0.5 uppercase tracking-wide">{lbl}</div>
                  </div>
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

      {/* ── ABOUT STRIP ── */}
      <section className="py-10 md:py-12 bg-[#f9f6f1]">
        <div className="site-container">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video lg:w-80">
              <img src={contentImages.about} alt="PT Svee International"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A9E]/60 to-transparent" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-display text-[#1A4A9E]">
                {language === 'en' ? 'Sourcing Bridge — India to Indonesia' : 'Jembatan Sourcing — India ke Indonesia'}
              </h2>
              <p className="text-[#4a5568] text-sm leading-relaxed max-w-xl">
                {language === 'en'
                  ? 'Based in Jakarta since 2001. We help feed mills, food processors and commodity importers source from India with full spec coordination and document follow-up.'
                  : 'Berbasis di Jakarta sejak 2001. Kami membantu pabrik pakan, pengolah makanan dan importir komoditas sourcing dari India dengan koordinasi spesifikasi dan tindak lanjut dokumen.'}
              </p>
              <Link href="/about">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4A9E] hover:text-[#E85E00] transition-colors">
                  {language === 'en' ? 'Learn More' : 'Selengkapnya'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
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


      {/* ── BOTTOM CTA ── */}
      <section className="relative py-10 md:py-12 bg-[#1A4A9E] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container text-center z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-white mb-5">
            {language === 'en'
              ? 'Ready to Source?'
              : 'Siap untuk Sourcing?'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waUrl(heroWaMsg)} target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E85E00] hover:bg-[#CC5200] text-white text-sm font-semibold rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                <WhatsAppIcon className="h-5 w-5" />
                {language === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}
              </button>
            </a>
            <Link href="/products">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all">
                {language === 'en' ? 'Browse Products' : 'Lihat Produk'}
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

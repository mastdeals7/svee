import { useI18n } from '@/lib/i18n';
import { Link } from 'wouter';
import { Building2, Package, Globe as Globe2, Quote, MapPin, ArrowRight, FileText, Ship, TrendingUp, CircleCheck as CheckCircle2 } from 'lucide-react';
import { contentImages, sectionBackgrounds } from '@/data/media';

const WHATSAPP_NUMBER = '6281510551111';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Profile() {
  const { language, t } = useI18n();

  const sourcingOffices = [
    { city: 'Mumbai', country: 'India', code: 'IN', gradient: 'from-orange-500 to-orange-600', role: language === 'en' ? 'Spices, Feed Ingredients, Pulses, Fertilizer' : 'Rempah, Bahan Pakan, Kacang-kacangan, Pupuk' },
    { city: 'Pune', country: 'India', code: 'IN', gradient: 'from-orange-500 to-orange-600', role: language === 'en' ? 'Grains, Oilseeds, Feed Ingredients' : 'Biji-bijian, Biji Minyak, Bahan Pakan' },
    { city: 'Chennai', country: 'India', code: 'IN', gradient: 'from-orange-500 to-orange-600', role: language === 'en' ? 'Rice Products, Spices, Oilseeds' : 'Produk Beras, Rempah, Biji Minyak' },
    { city: 'Delhi', country: 'India', code: 'IN', gradient: 'from-orange-500 to-orange-600', role: language === 'en' ? 'Grains, Pulses, Liquid Glucose' : 'Biji-bijian, Kacang-kacangan, Liquid Glucose' },
    { city: 'Ho Chi Minh', country: 'Vietnam', code: 'VN', gradient: 'from-yellow-600 to-yellow-700', role: language === 'en' ? 'Black Pepper, Rice' : 'Lada Hitam, Beras' },
    { city: 'Yangon', country: 'Myanmar', code: 'MM', gradient: 'from-yellow-500 to-yellow-600', role: language === 'en' ? 'Yellow Maize, Green Moong' : 'Jagung Kuning, Kacang Hijau' },
  ];

  const capabilities = language === 'en'
    ? [
        { icon: Ship, label: 'Shipment Documentation', desc: 'BL, cert of origin, phytosanitary, COA, fumigation cert', color: 'bg-blue-50 text-blue-700' },
        { icon: FileText, label: 'Trade Terms', desc: 'L/C, T/T, D/P, D/A — confirmed case by case with buyer and supplier', color: 'bg-amber-50 text-amber-700' },
        { icon: Globe2, label: 'Supplier Coordination', desc: 'FCL and bulk shipments from India, Myanmar and other origins', color: 'bg-green-50 text-green-700' },
        { icon: Package, label: 'Packing Options', desc: '25/50 kg PP bags, HDPE, jumbo bags — as specified by buyer', color: 'bg-rose-50 text-rose-700' },
      ]
    : [
        { icon: Ship, label: 'Dokumentasi Pengiriman', desc: 'BL, sertifikat asal, fitosanitasi, COA, sertifikat fumigasi', color: 'bg-blue-50 text-blue-700' },
        { icon: FileText, label: 'Syarat Perdagangan', desc: 'L/C, T/T, D/P, D/A — dikonfirmasi per kasus dengan pembeli dan pemasok', color: 'bg-amber-50 text-amber-700' },
        { icon: Globe2, label: 'Koordinasi Pemasok', desc: 'FCL dan pengiriman bulk dari India, Myanmar, dan asal lainnya', color: 'bg-green-50 text-green-700' },
        { icon: Package, label: 'Opsi Kemasan', desc: 'Karung PP 25/50 kg, HDPE, jumbo bag — sesuai permintaan pembeli', color: 'bg-rose-50 text-rose-700' },
      ];

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello PT Svee International, I reviewed your company profile and would like to discuss a potential trade partnership.'
      : 'Halo PT Svee International, saya telah meninjau profil perusahaan Anda dan ingin mendiskusikan potensi kemitraan dagang.'
  )}`;

  const keyFacts = [
    { label: language === 'en' ? 'Registered' : 'Terdaftar', value: 'Jakarta Utara, Indonesia' },
    { label: language === 'en' ? 'Founded' : 'Didirikan', value: '2001' },
    { label: language === 'en' ? 'Business Type' : 'Jenis Usaha', value: language === 'en' ? 'Import & Sourcing Support' : 'Dukungan Impor & Sourcing' },
    { label: language === 'en' ? 'Focus' : 'Fokus', value: language === 'en' ? 'Indonesian Buyers' : 'Pembeli Indonesia' },
  ];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 bg-[#1A4A9E] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden hidden lg:block">
          <img src={contentImages.about} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A4A9E] via-[#1A4A9E]/60 to-transparent" />
        </div>
        <div className="relative site-container z-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="max-w-2xl animate-fade-in space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <Building2 className="h-3.5 w-3.5 text-[#E85E00]" />
                <span className="text-xs font-semibold text-white/90">
                  {language === 'en' ? 'Trade Partner Overview' : 'Gambaran Mitra Dagang'}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-display leading-[1.1] text-white"
                data-testid="heading-profile-title">
                {language === 'en' ? 'Company Profile' : 'Profil Perusahaan'}
              </h1>
              <p className="text-base md:text-lg text-white/65 leading-relaxed"
                data-testid="text-profile-subtitle">
                {t('profile.subtitle')}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {keyFacts.map((fact, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="text-[10px] text-white/40 uppercase tracking-wide mb-1">{fact.label}</div>
                    <div className="font-semibold text-white text-sm">{fact.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap pt-1">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all"
                    data-testid="button-director-wa">
                    <WhatsAppIcon />
                    {language === 'en' ? 'Start a Conversation' : 'Mulai Percakapan'}
                  </button>
                </a>
                <Link href="/products">
                  <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all">
                    {language === 'en' ? 'View Products' : 'Lihat Produk'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-3 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-[#E85E00] flex-shrink-0" />
                <div>
                  <div className="text-white text-xs font-semibold">Jakarta HQ</div>
                  <div className="text-white/50 text-xs">India · Myanmar · Vietnam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <p className="eyebrow mb-3">
                {language === 'en' ? 'Company Overview' : 'Gambaran Perusahaan'}
              </p>
              <h2 className="text-2xl md:text-3xl font-display text-[#1A4A9E] mb-4" data-testid="heading-intro">
                {t('profile.intro.title')}
              </h2>
              <p className="text-[#6b7280] leading-relaxed text-sm" data-testid="text-intro">
                {t('profile.intro.content')}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">
                {language === 'en' ? 'Product Scope' : 'Cakupan Produk'}
              </p>
              <h3 className="font-bold text-[#1A4A9E] text-base mb-3" data-testid="heading-products">
                {t('profile.products.title')}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed" data-testid="text-products">
                {t('profile.products.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-20 md:py-24 bg-[#f9f6f1]">
        <div className="site-container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">
              {language === 'en' ? 'What We Handle' : 'Yang Kami Tangani'}
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-[#1A4A9E]">
              {language === 'en' ? 'Trading Capabilities' : 'Kemampuan Perdagangan'}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <div key={i}
                className="bg-white rounded-2xl border border-[#ede8e0] p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 space-y-4"
                data-testid={`card-capability-${i}`}>
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${cap.color}`}>
                  <cap.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A4A9E] text-sm mb-1.5">{cap.label}</h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCING NETWORK ── */}
      <section className="py-20 md:py-24 bg-[#1A4A9E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10">
          <div className="text-center mb-12">
            <p className="eyebrow text-[#E85E00] mb-3">
              {language === 'en' ? 'Our Presence' : 'Kehadiran Kami'}
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-white mb-3" data-testid="heading-operations">
              {t('profile.operations.title')}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm hidden md:block" data-testid="text-operations">
              {t('profile.operations.content')}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sourcingOffices.map((office, i) => (
              <div key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3 hover:bg-white/8 transition-colors"
                data-testid={`office-${i}`}>
                <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${office.gradient} flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0 shadow-sm`}>
                  {office.code}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm flex items-center gap-1 mb-1">
                    <MapPin className="h-3 w-3 text-[#E85E00] flex-shrink-0" />
                    <span className="truncate">{office.city}</span>
                  </div>
                  <div className="text-[10px] text-white/45 leading-relaxed">{office.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTOR QUOTE CTA ── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sectionBackgrounds.story})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A4A9E]/98 via-[#1A4A9E]/92 to-[#1A4A9E]/95" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#E85E00] opacity-60" />
        <div className="relative site-container max-w-3xl mx-auto text-center space-y-5 z-10">
          <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mx-auto border border-white/15">
            <Quote className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-base font-semibold text-white/60 uppercase tracking-wider" data-testid="heading-director">
            {t('profile.director.title')}
          </h2>
          <blockquote className="text-xl md:text-3xl font-display text-white leading-relaxed" data-testid="quote-director">
            {t('profile.director.quote')}
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-director-wa-cta">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all shadow-sm">
                <WhatsAppIcon />
                {language === 'en' ? 'Start a Conversation' : 'Mulai Percakapan'}
              </button>
            </a>
            <Link href="/products">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all"
                data-testid="button-director-products">
                <TrendingUp className="h-4 w-4" />
                {language === 'en' ? 'View Products' : 'Lihat Produk'}
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

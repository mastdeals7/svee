import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  Building2, Package, Globe2, Quote, MapPin, ArrowRight, FileText, Ship, TrendingUp, CheckCircle2,
} from 'lucide-react';
import { heroImages, contentImages, sectionBackgrounds } from '@/data/media';

const WHATSAPP_NUMBER = '6281510551111';

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Profile() {
  const { language, t } = useI18n();

  const sourcingOffices = [
    { city: 'Mumbai', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Spices, Feed Ingredients, Pulses, Fertilizer' : 'Rempah, Bahan Pakan, Kacang-kacangan, Pupuk' },
    { city: 'Pune', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Grains, Oilseeds, Feed Ingredients' : 'Biji-bijian, Biji Minyak, Bahan Pakan' },
    { city: 'Chennai', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Rice Products, Spices, Oilseeds' : 'Produk Beras, Rempah, Biji Minyak' },
    { city: 'Delhi', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Grains, Pulses, Liquid Glucose' : 'Biji-bijian, Kacang-kacangan, Liquid Glucose' },
    { city: 'Ho Chi Minh', country: 'Vietnam', code: 'VN', color: 'bg-yellow-600', role: language === 'en' ? 'Black Pepper, Rice' : 'Lada Hitam, Beras' },
    { city: 'Yangon', country: 'Myanmar', code: 'MM', color: 'bg-yellow-500', role: language === 'en' ? 'Yellow Maize, Green Moong' : 'Jagung Kuning, Kacang Hijau' },
  ];

  const capabilities = language === 'en'
    ? [
        { icon: Ship, label: 'Shipment Documentation', desc: 'BL, cert of origin, phytosanitary, COA, fumigation cert' },
        { icon: FileText, label: 'Trade Terms', desc: 'L/C, T/T, D/P, D/A — confirmed case by case with buyer and supplier' },
        { icon: Globe2, label: 'Supplier Coordination', desc: 'FCL and bulk shipments from India, Myanmar and other origins' },
        { icon: Package, label: 'Packing Options', desc: '25/50 kg PP bags, HDPE, jumbo bags — as specified by buyer' },
      ]
    : [
        { icon: Ship, label: 'Dokumentasi Pengiriman', desc: 'BL, sertifikat asal, fitosanitasi, COA, sertifikat fumigasi' },
        { icon: FileText, label: 'Syarat Perdagangan', desc: 'L/C, T/T, D/P, D/A — dikonfirmasi per kasus dengan pembeli dan pemasok' },
        { icon: Globe2, label: 'Koordinasi Pemasok', desc: 'FCL dan pengiriman bulk dari India, Myanmar, dan asal lainnya' },
        { icon: Package, label: 'Opsi Kemasan', desc: 'Karung PP 25/50 kg, HDPE, jumbo bag — sesuai permintaan pembeli' },
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

      {/* ── HERO — light split ── */}
      <section className="relative min-h-[58vh] md:min-h-[64vh] flex items-center trade-section overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 z-10 w-full">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">

            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 editorial-eyebrow">
                <Building2 className="h-3 w-3" />
                {language === 'en' ? 'Trade Partner Overview' : 'Gambaran Mitra Dagang'}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-display leading-[1] text-foreground"
                data-testid="heading-profile-title">
                <span>{language === 'en' ? 'Company' : 'Profil'}</span>{' '}
                {language === 'en' ? 'Profile' : 'Perusahaan'}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
                data-testid="text-profile-subtitle">
                {t('profile.subtitle')}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {keyFacts.map((fact, i) => (
                  <div key={i} className="border-t border-border p-3">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">{fact.label}</div>
                    <div className="font-semibold text-foreground text-sm">{fact.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap pt-1">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm text-sm"
                    data-testid="button-director-wa">
                    <WhatsAppIcon />
                    {language === 'en' ? 'Start a Conversation' : 'Mulai Percakapan'}
                  </Button>
                </a>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="gap-2 text-sm">
                    {language === 'en' ? 'View Products' : 'Lihat Produk'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative image-treatment overflow-hidden group aspect-[5/4]">
                <img src={contentImages.about} alt="PT Svee International"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <span className="text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-2.5 py-1 rounded-sm">Jakarta HQ</span>
                  <span className="text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-2.5 py-1 rounded-sm flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5" />India · Myanmar · Vietnam
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRODUCT SCOPE — white ── */}
      <section className="py-10 md:py-12 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="editorial-eyebrow mb-2">
                {language === 'en' ? 'Company Overview' : 'Gambaran Perusahaan'}
              </p>
              <h2 className="text-2xl md:text-3xl font-display mb-3" data-testid="heading-intro">
                {t('profile.intro.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm" data-testid="text-intro">
                {t('profile.intro.content')}
              </p>
            </div>
            <div>
              <p className="editorial-eyebrow mb-2">
                {language === 'en' ? 'Product Scope' : 'Cakupan Produk'}
              </p>
              <h3 className="font-bold text-foreground text-sm mb-2" data-testid="heading-products">
                {t('profile.products.title')}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-products">
                {t('profile.products.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES — light ── */}
      <section className="py-16 md:py-20 bg-background editorial-rule">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-6">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'What We Handle' : 'Yang Kami Tangani'}
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              {language === 'en' ? 'Trading Capabilities' : 'Kemampuan Perdagangan'}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i}
                className="bg-white border border-border rounded-xl p-5 flex flex-col gap-3 hover-elevate group"
                data-testid={`card-capability-${i}`}>
                <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <cap.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{cap.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCING NETWORK — dark accent band ── */}
      <section className="py-16 md:py-20 bg-[#0B2245]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-6">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'Our Presence' : 'Kehadiran Kami'}
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-white mb-2" data-testid="heading-operations">
              {t('profile.operations.title')}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-xs hidden md:block" data-testid="text-operations">
              {t('profile.operations.content')}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {sourcingOffices.map((office, i) => (
              <div key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover-elevate"
                data-testid={`office-${i}`}>
                <div className={`h-9 w-9 rounded-full ${office.color} flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0`}>
                  {office.code}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-accent flex-shrink-0" />
                    <span className="truncate">{office.city}</span>
                  </div>
                  <div className="text-[10px] text-white/45 mt-1 leading-relaxed">{office.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTOR QUOTE CTA ── */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sectionBackgrounds.story})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/98 via-primary/92 to-[#0B2245]/95" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff04_1px,transparent_1px),linear-gradient(-45deg,#ffffff04_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-0.5 bg-accent opacity-60" />
        <div className="relative max-w-3xl mx-auto px-5 md:px-10 text-center space-y-5 z-10">
          <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/15">
            <Quote className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-base font-semibold text-white/70 uppercase" data-testid="heading-director">
            {t('profile.director.title')}
          </h2>
          <blockquote className="text-xl md:text-3xl font-display text-white leading-relaxed" data-testid="quote-director">
            {t('profile.director.quote')}
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-director-wa-cta">
              <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm w-full sm:w-auto">
                <WhatsAppIcon />
                {language === 'en' ? 'Start a Conversation' : 'Mulai Percakapan'}
              </Button>
            </a>
            <Link href="/products">
              <Button size="lg" variant="outline" className="gap-2 border-white/30 text-white bg-white/10 w-full sm:w-auto"
                data-testid="button-director-products">
                <TrendingUp className="h-4 w-4" />
                {language === 'en' ? 'View Products' : 'Lihat Produk'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

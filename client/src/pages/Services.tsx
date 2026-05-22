import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { services } from '@/data/services';
import {
  Truck, ArrowRight, Globe2, ShieldCheck, FileText,
  CheckCircle2, Settings, MessageCircle, ArrowUpRight,
} from 'lucide-react';

const WHATSAPP_NUMBER = '6281510551111';

const serviceIconMap: Record<string, any> = {
  global: Globe2, shipping: Truck, documentation: FileText,
  technical: Settings, default: CheckCircle2,
};

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Services() {
  const { language, t } = useI18n();

  const waMsg = language === 'en'
    ? 'Hello PT Svee International, I would like to enquire about your sourcing services.'
    : 'Halo PT Svee International, saya ingin menanyakan layanan sourcing Anda.';
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  const processSteps = language === 'en' ? [
    { num: '01', title: 'Send your requirement', desc: 'Tell us the product, quantity and destination. WhatsApp is the fastest way to reach us.' },
    { num: '02', title: 'We check availability', desc: 'We confirm origin options, typical specification and indicative price from our supplier network.' },
    { num: '03', title: 'Specification confirmation', desc: 'We coordinate final spec, packing, origin and shipment terms between buyer and supplier.' },
    { num: '04', title: 'Document follow-up', desc: 'We follow shipping documentation, BL, COA, phytosanitary, fumigation and other required documents.' },
  ] : [
    { num: '01', title: 'Kirim kebutuhan Anda', desc: 'Beritahu kami produk, kuantitas, dan tujuan. WhatsApp adalah cara tercepat menghubungi kami.' },
    { num: '02', title: 'Kami periksa ketersediaan', desc: 'Kami konfirmasi opsi asal, spesifikasi tipikal dan harga indikatif dari jaringan pemasok kami.' },
    { num: '03', title: 'Konfirmasi spesifikasi', desc: 'Kami koordinasikan spesifikasi akhir, kemasan, asal, dan syarat pengiriman antara pembeli dan pemasok.' },
    { num: '04', title: 'Tindak lanjut dokumen', desc: 'Kami ikuti dokumentasi pengiriman, BL, COA, fitosanitasi, fumigasi, dan dokumen yang diperlukan lainnya.' },
  ];

  const docTypes = language === 'en'
    ? ['Commercial Invoice', 'Packing List', 'Bill of Lading (BL)', 'Certificate of Origin', 'Phytosanitary Certificate', 'Fumigation Certificate', 'COA (Certificate of Analysis)', 'Weight & Quality Certificate']
    : ['Invoice Komersial', 'Packing List', 'Bill of Lading (BL)', 'Sertifikat Asal', 'Sertifikat Fitosanitasi', 'Sertifikat Fumigasi', 'COA (Sertifikat Analisis)', 'Sertifikat Berat & Kualitas'];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO — light ── */}
      <section className="relative min-h-[54vh] md:min-h-[60vh] flex items-center trade-section overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 editorial-eyebrow">
              <Globe2 className="h-3 w-3" />
              {language === 'en' ? 'Sourcing Support Services' : 'Layanan Dukungan Sourcing'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-display leading-[1] text-foreground"
              data-testid="heading-services-title">
              {t('services.title')}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
              data-testid="text-services-subtitle">
              {t('services.subtitle')}
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm text-sm">
                <WhatsAppIcon />
                {language === 'en' ? 'Send Enquiry on WhatsApp' : 'Kirim Pertanyaan di WhatsApp'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO DISCLAIMER ── */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="flex items-start gap-3 border-l border-primary pl-5 py-2">
            <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('services.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-8">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'What We Do' : 'Apa yang Kami Lakukan'}
            </p>
            <h2 className="text-3xl md:text-5xl font-display" data-testid="heading-services-list">
              {language === 'en' ? 'Five Ways We Support Indonesian Buyers' : 'Lima Cara Kami Mendukung Pembeli Indonesia'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-y border-border">
            {services.map((service, i) => {
              const Icon = serviceIconMap[service.icon] || serviceIconMap.default;
              return (
                <div key={service.id}
                  className="border-b md:border-r border-border p-6 md:p-8 space-y-4 hover-elevate"
                  data-testid={`card-service-${service.id}`}>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-8 w-8 bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-base leading-tight">
                    {service.title[language]}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description[language]}
                  </p>
                </div>
              );
            })}

            {/* Custom sourcing CTA card */}
            <div className="bg-primary p-6 md:p-8 space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-white/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-base">
                  {language === 'en' ? 'Need a product not listed here?' : 'Butuh produk yang tidak tercantum di sini?'}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Send us your product requirement and we will check availability through our supplier network.'
                    : 'Kirimkan kebutuhan produk Anda dan kami akan memeriksa ketersediaan melalui jaringan pemasok kami.'}
                </p>
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full gap-2 bg-white text-primary border-white shadow-lg">
                  <WhatsAppIcon />
                  {language === 'en' ? 'Send Product Requirement' : 'Kirim Kebutuhan Produk'}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — dark ── */}
      <section className="py-16 md:py-20 bg-[#0B2245]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-8">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'Our Process' : 'Proses Kami'}
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-white">
              {language === 'en' ? 'How a Typical Enquiry Works' : 'Bagaimana Pertanyaan Tipikal Berlangsung'}
            </h2>
            <p className="text-white/50 text-sm mt-2 max-w-md mx-auto">
              {language === 'en'
                ? 'Every enquiry is different — but this is the general flow for most product requests.'
                : 'Setiap pertanyaan berbeda — tapi ini alur umum untuk sebagian besar permintaan produk.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative border-t border-white/15 p-5 space-y-3">
                <div className="text-3xl font-bold text-white/15 leading-none">{step.num}</div>
                <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 z-10">
                    <ArrowUpRight className="h-4 w-4 text-accent rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section className="py-16 md:py-20 bg-background editorial-rule">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <p className="editorial-eyebrow">
                {language === 'en' ? 'Trade Documentation' : 'Dokumentasi Perdagangan'}
              </p>
              <h2 className="text-2xl md:text-3xl font-display text-foreground">
                {language === 'en' ? 'Documents We Support' : 'Dokumen yang Kami Dukung'}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === 'en'
                  ? 'We help coordinate the standard trade documents required for import into Indonesia. Documents applicable vary by product, origin, HS code and importer type.'
                  : 'Kami membantu mengkoordinasikan dokumen perdagangan standar yang diperlukan untuk impor ke Indonesia. Dokumen yang berlaku bervariasi berdasarkan produk, asal, kode HS, dan jenis importir.'}
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {docTypes.map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed border-l-2 border-accent/40 pl-3 mt-2">
                {language === 'en'
                  ? 'Specific document requirements depend on product type, HS code, buyer status and current Indonesian import regulations. We confirm document requirements case by case.'
                  : 'Persyaratan dokumen spesifik tergantung pada jenis produk, kode HS, status pembeli, dan peraturan impor Indonesia yang berlaku. Kami konfirmasi persyaratan dokumen per kasus.'}
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-border rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-foreground text-sm">
                  {language === 'en' ? 'Payment & Trade Terms' : 'Syarat Pembayaran & Perdagangan'}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Letter of Credit (LC)', 'Telegraphic Transfer (TT)', 'Documents against Payment (DP)', 'Documents against Acceptance (DA)'].map((term, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/60 rounded-lg px-2.5 py-2">
                      <FileText className="h-3 w-3 text-primary flex-shrink-0" />
                      {term}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {language === 'en'
                    ? 'Payment and shipment terms are discussed and confirmed case by case, based on buyer and supplier agreement.'
                    : 'Syarat pembayaran dan pengiriman didiskusikan dan dikonfirmasi per kasus, berdasarkan kesepakatan pembeli dan pemasok.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 md:py-12 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto px-5 md:px-10 text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-display text-foreground">
            {language === 'en' ? 'Ready to check availability?' : 'Siap memeriksa ketersediaan?'}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {language === 'en'
              ? 'Send us your product requirement — product name, quantity and destination. We will check availability and come back to you as soon as possible.'
              : 'Kirimkan kebutuhan produk Anda — nama produk, kuantitas, dan tujuan. Kami akan memeriksa ketersediaan dan menghubungi Anda sesegera mungkin.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm">
                <WhatsAppIcon />
                {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
              </Button>
            </a>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                {language === 'en' ? 'View Products' : 'Lihat Produk'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground text-xs">
            {language === 'en'
              ? 'Product availability, specification, price and shipment terms are confirmed case by case.'
              : 'Ketersediaan produk, spesifikasi, harga, dan syarat pengiriman dikonfirmasi per kasus.'}
          </p>
        </div>
      </section>

    </div>
  );
}

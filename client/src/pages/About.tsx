import { useI18n } from '@/lib/i18n';
import { Link } from 'wouter';
import { Award, CircleCheck as CheckCircle2, Globe as Globe2, Truck, ShieldCheck, ArrowRight, Users, FileText, MessageSquare } from 'lucide-react';
import { heroImages, contentImages } from '@/data/media';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function About() {
  const { language, t } = useI18n();
  const waMsg = language === 'en'
    ? 'Hello PT Svee International, I would like to enquire about your sourcing services.'
    : 'Halo PT Svee International, saya ingin menanyakan layanan sourcing Anda.';
  const waUrl = getWhatsAppUrl(language, waMsg);

  const timeline = language === 'en' ? [
    { year: '2001', event: 'Founded in North Jakarta. Started with spices and pulses sourced from India.' },
    { year: '2005', event: 'Expanded into grains and oil seeds. Built sourcing contacts in Myanmar and India.' },
    { year: '2010', event: 'Added fertilizer. Grew associate office network across India — Mumbai, Pune, Chennai, Delhi.' },
    { year: '2018', event: 'Added animal feed ingredients: soybean meal, rapeseed meal, rice DDGS. Reached 40+ active products.' },
    { year: '2024', event: 'Focused on Indonesian buyer needs. Serving feed mills, food processors and commodity importers across Indonesia.' },
  ] : [
    { year: '2001', event: 'Didirikan di Jakarta Utara. Mulai dengan rempah dan kacang-kacangan yang bersumber dari India.' },
    { year: '2005', event: 'Ekspansi ke biji-bijian dan biji minyak. Membangun kontak sourcing di Myanmar dan India.' },
    { year: '2010', event: 'Menambah pupuk. Mengembangkan jaringan kantor afiliasi di India — Mumbai, Pune, Chennai, Delhi.' },
    { year: '2018', event: 'Menambah bahan baku pakan: soybean meal, rapeseed meal, rice DDGS. Mencapai 40+ produk aktif.' },
    { year: '2024', event: 'Fokus pada kebutuhan pembeli Indonesia. Melayani pabrik pakan, pengolah makanan dan importir komoditas di seluruh Indonesia.' },
  ];

  const ourRole = language === 'en' ? [
    { icon: Globe2, title: 'Availability Check', desc: 'We check supplier availability and confirm product options from India and other origin markets.', color: 'bg-blue-50 text-blue-700' },
    { icon: FileText, title: 'Specification Coordination', desc: 'We coordinate product specifications between buyer requirements and what suppliers can provide.', color: 'bg-amber-50 text-amber-700' },
    { icon: Truck, title: 'Shipment Follow-up', desc: 'We follow shipment documentation and communicate between buyer and supplier throughout the process.', color: 'bg-green-50 text-green-700' },
    { icon: ShieldCheck, title: 'Document Support', desc: 'We assist with commercial invoice, BL, COA, phytosanitary, fumigation certificate and other trade documents.', color: 'bg-rose-50 text-rose-700' },
  ] : [
    { icon: Globe2, title: 'Pemeriksaan Ketersediaan', desc: 'Kami memeriksa ketersediaan pemasok dan mengkonfirmasi opsi produk dari India dan pasar asal lainnya.', color: 'bg-blue-50 text-blue-700' },
    { icon: FileText, title: 'Koordinasi Spesifikasi', desc: 'Kami mengkoordinasikan spesifikasi produk antara kebutuhan pembeli dan apa yang dapat disediakan pemasok.', color: 'bg-amber-50 text-amber-700' },
    { icon: Truck, title: 'Tindak Lanjut Pengiriman', desc: 'Kami menindaklanjuti dokumentasi pengiriman dan berkomunikasi antara pembeli dan pemasok sepanjang proses.', color: 'bg-green-50 text-green-700' },
    { icon: ShieldCheck, title: 'Dukungan Dokumen', desc: 'Kami membantu dengan invoice komersial, BL, COA, fitosanitasi, sertifikat fumigasi dan dokumen perdagangan lainnya.', color: 'bg-rose-50 text-rose-700' },
  ];

  const buyerTypes = language === 'en'
    ? ['Feed Mills', 'Animal Feed Manufacturers', 'Food Processors', 'Snack Manufacturers', 'Commodity Importers', 'Wholesalers', 'Trading Houses', 'Industrial Buyers']
    : ['Pabrik Pakan', 'Produsen Pakan Ternak', 'Pengolah Makanan', 'Produsen Snack', 'Importir Komoditas', 'Pedagang Grosir', 'Rumah Dagang', 'Pembeli Industri'];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 bg-[#0B2245] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden hidden lg:block opacity-20">
          <img src={heroImages.about} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative site-container z-10">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
              data-testid="badge-since-2001">
              <Award className="h-3.5 w-3.5 text-[#C8922A]" />
              <span className="text-xs font-semibold text-white/90">
                {language === 'en' ? 'Est. 2001 · Jakarta, Indonesia' : 'Berdiri 2001 · Jakarta, Indonesia'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display leading-[1.1] text-white mb-5"
              data-testid="heading-about-title">
              {t('about.title')}
            </h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all">
                  <WhatsAppIcon />
                  {language === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}
                </button>
              </a>
              <Link href="/products">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all">
                  {language === 'en' ? 'View Products' : 'Lihat Produk'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE — 3 pillars ── */}
      <section className="py-20 md:py-24 bg-[#f9f6f1]">
        <div className="site-container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">{language === 'en' ? 'Who We Are' : 'Siapa Kami'}</p>
            <h2 className="text-3xl md:text-4xl font-display text-[#0B2245]">
              {language === 'en' ? 'About PT Svee International' : 'Tentang PT Svee International'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, color: 'bg-amber-50 text-amber-700', title: t('about.established.title'), content: t('about.established.content') },
              { icon: Users, color: 'bg-blue-50 text-blue-700', title: t('about.commitment.title'), content: t('about.commitment.content') },
              { icon: CheckCircle2, color: 'bg-green-50 text-green-700', title: t('about.quality.title'), content: t('about.quality.content') },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-[#ede8e0] p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-[#0B2245] text-base mb-3">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR ROLE ── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="site-container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">{language === 'en' ? 'Our Role' : 'Peran Kami'}</p>
            <h2 className="text-3xl md:text-4xl font-display text-[#0B2245]">
              {language === 'en' ? 'What We Do for Indonesian Buyers' : 'Apa yang Kami Lakukan untuk Pembeli Indonesia'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ourRole.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#f9f6f1] rounded-2xl border border-[#ede8e0] p-6 space-y-4 hover:shadow-md transition-shadow">
                  <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-[#0B2245] text-sm">{item.title}</h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE — dark ── */}
      <section className="py-20 md:py-24 bg-[#0B2245] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="eyebrow text-[#C8922A]">{language === 'en' ? 'Our Buyers' : 'Pembeli Kami'}</p>
              <h2 className="text-3xl md:text-4xl font-display text-white">
                {language === 'en' ? 'Who We Work With in Indonesia' : 'Siapa yang Kami Layani di Indonesia'}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                {language === 'en'
                  ? 'We mainly work with Indonesian companies that need practical sourcing support for agro commodities and feed raw materials. Many buyers need more than just a supplier name — they need correct product information, realistic market communication, document follow-up and shipment coordination.'
                  : 'Kami terutama bekerja dengan perusahaan Indonesia yang membutuhkan dukungan sourcing praktis untuk komoditas agro dan bahan baku pakan. Banyak pembeli membutuhkan lebih dari sekadar nama pemasok — mereka membutuhkan informasi produk yang tepat, komunikasi pasar yang realistis, tindak lanjut dokumen dan koordinasi pengiriman.'}
              </p>
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {buyerTypes.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C8922A] flex-shrink-0" />
                    <span className="text-white/70 text-xs">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={contentImages.about} alt="Agro commodity sourcing for Indonesian buyers"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2245]/70 via-[#0B2245]/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 md:py-24 bg-[#f9f6f1]">
        <div className="site-container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">{language === 'en' ? 'Our History' : 'Sejarah Kami'}</p>
            <h2 className="text-3xl md:text-4xl font-display text-[#0B2245]">
              {language === 'en' ? 'Over 24 Years in Agro Commodity Trade' : 'Lebih dari 24 Tahun dalam Perdagangan Komoditas Agro'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-[#0B2245] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md border-4 border-[#f9f6f1]">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#ede8e0] mt-2" />
                  )}
                </div>
                <div className="bg-white rounded-xl border border-[#ede8e0] p-5 flex-1 shadow-sm">
                  <div className="font-bold text-[#C8922A] text-sm mb-2">{item.year}</div>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER + CTA ── */}
      <section className="py-16 md:py-20 bg-white border-t border-[#ede8e0]">
        <div className="site-container max-w-3xl mx-auto text-center space-y-6">
          <div className="bg-[#f9f6f1] border border-[#ede8e0] rounded-2xl p-6 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[#0B2245] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#0B2245] text-sm mb-2">
                  {language === 'en' ? 'Practical Disclaimer' : 'Pemberitahuan Praktis'}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Product availability, specification, packing, origin, price and shipment terms are confirmed case by case. Import requirements can vary by HS code, product type, buyer status, destination port and current Indonesian regulations. PT Svee International supports coordination and document follow-up but does not guarantee clearance outcome.'
                    : 'Ketersediaan produk, spesifikasi, kemasan, asal, harga, dan syarat pengiriman dikonfirmasi per kasus. Persyaratan impor dapat bervariasi berdasarkan kode HS, jenis produk, status pembeli, pelabuhan tujuan, dan peraturan Indonesia yang berlaku. PT Svee International mendukung koordinasi dan tindak lanjut dokumen tetapi tidak menjamin hasil clearance.'}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-display text-[#0B2245] mb-3">
              {language === 'en' ? 'Ready to Discuss Your Sourcing Requirement?' : 'Siap Mendiskusikan Kebutuhan Sourcing Anda?'}
            </h3>
            <p className="text-[#6b7280] text-sm mb-6">
              {language === 'en'
                ? 'Send us your product, quantity and destination via WhatsApp. We will check availability and respond as soon as possible.'
                : 'Kirimkan produk, kuantitas, dan tujuan Anda melalui WhatsApp. Kami akan memeriksa ketersediaan dan merespons sesegera mungkin.'}
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all shadow-sm">
                <WhatsAppIcon />
                {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

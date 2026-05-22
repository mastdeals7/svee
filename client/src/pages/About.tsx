import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Award, CheckCircle2, Globe2, Truck, ShieldCheck, ArrowRight, Users, FileText, MessageSquare } from 'lucide-react';
import { heroImages, contentImages } from '@/data/media';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';

export default function About() {
  const { language, t } = useI18n();
  const waMsg = language === 'en'
    ? 'Hello PT Svee International, I would like to enquire about your sourcing services.'
    : 'Halo PT Svee International, saya ingin menanyakan layanan sourcing Anda.';
  const waUrl = getWhatsAppUrl(language, waMsg);

  const timeline = language === 'en'
    ? [
        { year: '2001', event: 'Founded in North Jakarta. Started with spices and pulses sourced from India.', color: 'bg-accent' },
        { year: '2005', event: 'Expanded into grains and oil seeds. Built sourcing contacts in Myanmar and India.', color: 'bg-primary' },
        { year: '2010', event: 'Added fertilizer. Grew associate office network across India — Mumbai, Pune, Chennai, Delhi.', color: 'bg-emerald-500' },
        { year: '2018', event: 'Added animal feed ingredients: soybean meal, rapeseed meal, rice DDGS. Reached 40+ active products.', color: 'bg-purple-500' },
        { year: '2024', event: 'Focused on Indonesian buyer needs. Serving feed mills, food processors and commodity importers across Indonesia.', color: 'bg-accent' },
      ]
    : [
        { year: '2001', event: 'Didirikan di Jakarta Utara. Mulai dengan rempah dan kacang-kacangan yang bersumber dari India.', color: 'bg-accent' },
        { year: '2005', event: 'Ekspansi ke biji-bijian dan biji minyak. Membangun kontak sourcing di Myanmar dan India.', color: 'bg-primary' },
        { year: '2010', event: 'Menambah pupuk. Mengembangkan jaringan kantor afiliasi di India — Mumbai, Pune, Chennai, Delhi.', color: 'bg-emerald-500' },
        { year: '2018', event: 'Menambah bahan baku pakan: soybean meal, rapeseed meal, rice DDGS. Mencapai 40+ produk aktif.', color: 'bg-purple-500' },
        { year: '2024', event: 'Fokus pada kebutuhan pembeli Indonesia. Melayani pabrik pakan, pengolah makanan dan importir komoditas di seluruh Indonesia.', color: 'bg-accent' },
      ];

  const ourRole = language === 'en'
    ? [
        { icon: Globe2, title: 'Availability Check', desc: 'We check supplier availability and confirm product options from India and other origin markets.' },
        { icon: FileText, title: 'Specification Coordination', desc: 'We coordinate product specifications between buyer requirements and what suppliers can provide.' },
        { icon: Truck, title: 'Shipment Follow-up', desc: 'We follow shipment documentation and communicate between buyer and supplier throughout the process.' },
        { icon: ShieldCheck, title: 'Document Support', desc: 'We assist with commercial invoice, BL, COA, phytosanitary, fumigation certificate and other trade documents.' },
      ]
    : [
        { icon: Globe2, title: 'Pemeriksaan Ketersediaan', desc: 'Kami memeriksa ketersediaan pemasok dan mengkonfirmasi opsi produk dari India dan pasar asal lainnya.' },
        { icon: FileText, title: 'Koordinasi Spesifikasi', desc: 'Kami mengkoordinasikan spesifikasi produk antara kebutuhan pembeli dan apa yang dapat disediakan pemasok.' },
        { icon: Truck, title: 'Tindak Lanjut Pengiriman', desc: 'Kami menindaklanjuti dokumentasi pengiriman dan berkomunikasi antara pembeli dan pemasok sepanjang proses.' },
        { icon: ShieldCheck, title: 'Dukungan Dokumen', desc: 'Kami membantu dengan invoice komersial, BL, COA, fitosanitasi, sertifikat fumigasi dan dokumen perdagangan lainnya.' },
      ];

  const buyerTypes = language === 'en'
    ? ['Feed Mills', 'Animal Feed Manufacturers', 'Food Processors', 'Snack Manufacturers', 'Commodity Importers', 'Wholesalers', 'Trading Houses', 'Industrial Buyers']
    : ['Pabrik Pakan', 'Produsen Pakan Ternak', 'Pengolah Makanan', 'Produsen Snack', 'Importir Komoditas', 'Pedagang Grosir', 'Rumah Dagang', 'Pembeli Industri'];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO — split layout ── */}
      <section className="relative min-h-[58vh] md:min-h-[64vh] flex items-center trade-section overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 z-10 w-full">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">

            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 editorial-eyebrow">
                <Award className="h-3 w-3" />
                {language === 'en' ? 'Est. 2001 · Jakarta, Indonesia' : 'Berdiri 2001 · Jakarta, Indonesia'}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-display leading-[1] text-foreground"
                data-testid="heading-about-title">
                {t('about.title')}
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t('about.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm text-sm">
                    <MessageSquare className="h-4 w-4" />
                    {language === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}
                  </Button>
                </a>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-sm">
                    {language === 'en' ? 'View Products' : 'Lihat Produk'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative image-treatment overflow-hidden aspect-[5/4]">
                <img src={heroImages.about} alt="PT Svee International Jakarta — agro commodity import and sourcing"
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {(language === 'en'
                    ? ['Feed Mills', 'Food Processors', 'Commodity Importers']
                    : ['Pabrik Pakan', 'Pengolah Makanan', 'Importir Komoditas']).map(t => (
                    <span key={t} className="text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-2.5 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-16 md:py-20 bg-background editorial-rule">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3 gap-0 border-y border-border">
            {[
              { icon: Award, color: 'text-accent', bg: 'bg-accent/10', title: t('about.established.title'), content: t('about.established.content') },
              { icon: Users, color: 'text-primary', bg: 'bg-primary/10', title: t('about.commitment.title'), content: t('about.commitment.content') },
              { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', title: t('about.quality.title'), content: t('about.quality.content') },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="border-b md:border-r border-border p-6 md:p-8 space-y-4">
                  <div className={`h-10 w-10 ${item.bg} flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR ROLE ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-8">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'Our Role' : 'Peran Kami'}
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-foreground">
              {language === 'en' ? 'What We Do for Indonesian Buyers' : 'Apa yang Kami Lakukan untuk Pembeli Indonesia'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-border">
            {ourRole.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="border-b sm:border-r border-border p-6 space-y-3">
                  <div className="h-10 w-10 bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE — dark ── */}
      <section className="py-16 md:py-20 bg-[#0B2245]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="space-y-4">
              <p className="editorial-eyebrow">
                {language === 'en' ? 'Our Buyers' : 'Pembeli Kami'}
              </p>
              <h2 className="text-2xl md:text-3xl font-display text-white">
                {language === 'en' ? 'Who We Work With in Indonesia' : 'Siapa yang Kami Layani di Indonesia'}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                {language === 'en'
                  ? 'We mainly work with Indonesian companies that need practical sourcing support for agro commodities and feed raw materials. Many buyers need more than just a supplier name — they need correct product information, realistic market communication, document follow-up and shipment coordination.'
                  : 'Kami terutama bekerja dengan perusahaan Indonesia yang membutuhkan dukungan sourcing praktis untuk komoditas agro dan bahan baku pakan. Banyak pembeli membutuhkan lebih dari sekadar nama pemasok — mereka membutuhkan informasi produk yang tepat, komunikasi pasar yang realistis, tindak lanjut dokumen dan koordinasi pengiriman.'}
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                {buyerTypes.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
                    <Users className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span className="text-white/75 text-xs">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={contentImages.about} alt="Agro commodity sourcing for Indonesian buyers"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2245]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="text-center mb-8">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'Our History' : 'Sejarah Kami'}
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              {language === 'en' ? 'Over 24 Years in Agro Commodity Trade' : 'Lebih dari 24 Tahun dalam Perdagangan Komoditas Agro'}
            </h2>
          </div>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md`}>
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-2">
                  <div className="font-bold text-primary text-sm">{item.year}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICAL DISCLAIMER + CTA ── */}
      <section className="py-16 md:py-20 bg-background editorial-rule">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center space-y-5">
          <div className="bg-white border border-border rounded-xl p-6 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-2">
                  {language === 'en' ? 'Practical Disclaimer' : 'Pemberitahuan Praktis'}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Product availability, specification, packing, origin, price and shipment terms are confirmed case by case. Import requirements can vary by HS code, product type, buyer status, destination port and current Indonesian regulations. PT Svee International supports coordination and document follow-up but does not guarantee clearance outcome.'
                    : 'Ketersediaan produk, spesifikasi, kemasan, asal, harga, dan syarat pengiriman dikonfirmasi per kasus. Persyaratan impor dapat bervariasi berdasarkan kode HS, jenis produk, status pembeli, pelabuhan tujuan, dan peraturan Indonesia yang berlaku. PT Svee International mendukung koordinasi dan tindak lanjut dokumen tetapi tidak menjamin hasil clearance.'}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground mb-2">
              {language === 'en' ? 'Ready to discuss your sourcing requirement?' : 'Siap mendiskusikan kebutuhan sourcing Anda?'}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {language === 'en'
                ? 'Send us your product, quantity and destination via WhatsApp. We will check availability and respond as soon as possible.'
                : 'Kirimkan produk, kuantitas, dan tujuan Anda melalui WhatsApp. Kami akan memeriksa ketersediaan dan merespons sesegera mungkin.'}
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm">
                <MessageSquare className="h-4 w-4" />
                {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

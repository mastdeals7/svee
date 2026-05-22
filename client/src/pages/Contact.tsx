import { useI18n } from '@/lib/i18n';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';
import { MapPin, Phone, Mail, Clock, MessageSquare, CircleCheck as CheckCircle2, Zap, FileText, Languages, Timer, ArrowRight } from 'lucide-react';

function WhatsAppIcon({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const cls = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cls}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const { language, t } = useI18n();

  const waMessage = language === 'en'
    ? 'Hello PT Svee International, I would like to enquire about your agro commodities. Please send availability and pricing information.'
    : 'Halo PT Svee International, saya ingin menanyakan komoditas agro Anda. Mohon informasi ketersediaan dan harga.';
  const waUrl = getWhatsAppUrl(language, waMessage);

  const associateOffices = [
    { city: 'Mumbai', country: 'India', code: 'IN', gradient: 'from-orange-400 to-orange-600', role: language === 'en' ? 'Spices, Feed Ingredients, Pulses' : 'Rempah, Bahan Pakan, Kacang-kacangan' },
    { city: 'Pune', country: 'India', code: 'IN', gradient: 'from-orange-400 to-orange-600', role: language === 'en' ? 'Grains, Oilseeds, Feed Ingredients' : 'Biji-bijian, Biji Minyak, Bahan Pakan' },
    { city: 'Chennai', country: 'India', code: 'IN', gradient: 'from-orange-400 to-orange-600', role: language === 'en' ? 'Rice Products, Spices, Oilseeds' : 'Produk Beras, Rempah, Biji Minyak' },
    { city: 'Delhi', country: 'India', code: 'IN', gradient: 'from-orange-400 to-orange-600', role: language === 'en' ? 'Grains, Pulses, Liquid Glucose' : 'Biji-bijian, Kacang-kacangan, Liquid Glucose' },
    { city: 'Ho Chi Minh', country: 'Vietnam', code: 'VN', gradient: 'from-yellow-500 to-yellow-700', role: language === 'en' ? 'Black Pepper, Rice' : 'Lada Hitam, Beras' },
    { city: 'Yangon', country: 'Myanmar', code: 'MM', gradient: 'from-green-500 to-green-700', role: language === 'en' ? 'Yellow Maize, Green Moong' : 'Jagung Kuning, Kacang Hijau' },
  ];

  const inquiryTopics = language === 'en' ? [
    { label: 'Soybean Meal / SBM', msg: 'Hello PT Svee International, I would like to enquire about Soybean Meal / SBM. Please send availability, specification and pricing.' },
    { label: 'Rice DDGS', msg: 'Hello PT Svee International, I would like to enquire about Rice DDGS. Please send availability, specification and pricing.' },
    { label: 'Maize Grits / Corn Grits', msg: 'Hello PT Svee International, I would like to enquire about Maize Grits / Corn Grits. Please send availability, specification and pricing.' },
    { label: 'Rice Grits', msg: 'Hello PT Svee International, I would like to enquire about Rice Grits. Please send availability, specification and pricing.' },
    { label: 'Yellow Maize / Corn', msg: 'Hello PT Svee International, I would like to enquire about Yellow Maize / Corn. Please send availability, specification and pricing.' },
    { label: 'Groundnut Kernels HPS', msg: 'Hello PT Svee International, I would like to enquire about Groundnut Kernels HPS from India. Please send availability, specification and pricing.' },
    { label: 'Red Chilli / Spices', msg: 'Hello PT Svee International, I would like to enquire about Red Chilli and other Indian spices. Please send availability and pricing.' },
    { label: 'Liquid Glucose', msg: 'Hello PT Svee International, I would like to enquire about Liquid Glucose from India. Please send availability, specification and pricing.' },
  ] : [
    { label: 'Soybean Meal / SBM', msg: 'Halo PT Svee International, saya ingin menanyakan Soybean Meal / SBM. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
    { label: 'Rice DDGS', msg: 'Halo PT Svee International, saya ingin menanyakan Rice DDGS. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
    { label: 'Maize Grits / Corn Grits', msg: 'Halo PT Svee International, saya ingin menanyakan Maize Grits / Corn Grits. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
    { label: 'Rice Grits', msg: 'Halo PT Svee International, saya ingin menanyakan Rice Grits. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
    { label: 'Jagung Kuning / Corn', msg: 'Halo PT Svee International, saya ingin menanyakan Jagung Kuning / Corn. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
    { label: 'Kacang Tanah HPS', msg: 'Halo PT Svee International, saya ingin menanyakan Kacang Tanah HPS dari India. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
    { label: 'Cabai Merah / Rempah', msg: 'Halo PT Svee International, saya ingin menanyakan Cabai Merah dan rempah India lainnya. Mohon informasi ketersediaan dan harga.' },
    { label: 'Liquid Glucose', msg: 'Halo PT Svee International, saya ingin menanyakan Liquid Glucose dari India. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
  ];

  const whyWa = language === 'en' ? [
    { icon: Zap, label: 'Same-day replies', desc: 'Usually within 1–2 hours during business hours' },
    { icon: FileText, label: 'Share specs easily', desc: 'COAs, spec sheets, price lists — all via chat' },
    { icon: Languages, label: 'English or Bahasa', desc: 'We reply in either language' },
    { icon: Timer, label: 'No contact forms', desc: 'Straight to a real person, no delays' },
  ] : [
    { icon: Zap, label: 'Balas hari yang sama', desc: 'Biasanya dalam 1–2 jam di jam kerja' },
    { icon: FileText, label: 'Bagikan spesifikasi mudah', desc: 'COA, spesifikasi, daftar harga — semua via chat' },
    { icon: Languages, label: 'Bahasa atau Inggris', desc: 'Kami membalas dalam kedua bahasa' },
    { icon: Timer, label: 'Tanpa form kontak', desc: 'Langsung ke orang nyata, tanpa penundaan' },
  ];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 bg-[#0B2245] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <MessageSquare className="h-3.5 w-3.5 text-[#C8922A]" />
            <span className="text-xs font-semibold text-white/90">
              {language === 'en' ? 'Get In Touch' : 'Hubungi Kami'}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display leading-[1.1] text-white mb-5"
            data-testid="heading-contact-title">
            {t('contact.title')}
          </h1>
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-8"
            data-testid="text-contact-subtitle">
            {t('contact.subtitle')}
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all shadow-[0_4px_20px_rgba(46,125,85,0.3)]">
              <WhatsAppIcon size="md" />
              {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
            </button>
          </a>
          <div className="flex flex-wrap gap-4 justify-center pt-5">
            {(language === 'en'
              ? ['Same-day reply', 'English & Bahasa', 'Real person — no bots']
              : ['Dijawab hari ini', 'Bahasa & Inggris', 'Orang nyata — bukan bot']).map(p => (
              <span key={p} className="flex items-center gap-1.5 text-sm text-white/60">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2E7D55] flex-shrink-0" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ENQUIRY TOPICS ── */}
      <section className="py-16 bg-[#f9f6f1] border-b border-[#ede8e0]">
        <div className="site-container">
          <div className="text-center mb-8">
            <p className="eyebrow mb-2">{language === 'en' ? 'Quick Enquiry' : 'Pertanyaan Cepat'}</p>
            <h2 className="text-2xl font-display text-[#0B2245]">
              {language === 'en' ? 'Enquire About a Specific Product' : 'Tanyakan Produk Spesifik'}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {inquiryTopics.map((topic, i) => (
              <a
                key={i}
                href={`https://wa.me/6281510551111?text=${encodeURIComponent(topic.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`button-topic-${i}`}>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#ede8e0] hover:border-[#C8922A] text-[#0B2245] text-sm font-medium rounded-xl transition-all hover:shadow-sm hover:-translate-y-0.5">
                  <WhatsAppIcon size="sm" />
                  {topic.label}
                </button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* WhatsApp Card */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden border border-[#ede8e0] shadow-sm sticky top-24">
                <div className="bg-gradient-to-br from-[#2E7D55] to-[#1f5c3d] p-7 text-white">
                  <div className="h-14 w-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                    <WhatsAppIcon size="lg" />
                  </div>
                  <h2 className="text-lg font-bold mb-2">
                    {t('contact.whatsapp.title')}
                  </h2>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {t('contact.whatsapp.subtitle')}
                  </p>
                </div>
                <div className="bg-white p-6 space-y-5">
                  <div className="space-y-3">
                    {whyWa.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <div className="h-7 w-7 rounded-lg bg-[#f9f6f1] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="h-3.5 w-3.5 text-[#0B2245]" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#0B2245]">{item.label}</div>
                            <div className="text-xs text-[#6b7280]">{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-card">
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-colors">
                      <WhatsAppIcon />
                      {t('contact.whatsapp.cta')}
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">

              {/* Head Office */}
              <div className="bg-[#f9f6f1] border border-[#ede8e0] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-0.5 w-6 bg-[#C8922A] rounded-full" />
                  <h2 className="font-bold text-sm uppercase tracking-wider text-[#0B2245]">{t('contact.headquarters')}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-[#C8922A] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-[#4a5568]">
                        <div className="font-semibold text-[#0B2245] mb-1">PT Svee International / Svee Komoditi</div>
                        Ruko Sunter Terrace Blok C No 12,<br />
                        Jl. Danau Sunter Utara Kav. No. 60,<br />
                        Jakarta Utara 14350, Indonesia
                      </div>
                    </div>
                    <a href="tel:+622165832426" className="flex gap-3 hover:text-[#0B2245] transition-colors group" data-testid="link-phone">
                      <Phone className="h-5 w-5 text-[#C8922A] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-[#4a5568] group-hover:text-[#0B2245]">+62 21 658 32426</div>
                    </a>
                    <a href="https://wa.me/6281510551111" className="flex gap-3 hover:text-[#0B2245] transition-colors group" data-testid="link-whatsapp">
                      <MessageSquare className="h-5 w-5 text-[#C8922A] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-[#4a5568] group-hover:text-[#0B2245]">+62 815-1055-1111 (WhatsApp)</div>
                    </a>
                  </div>
                  <div className="space-y-4">
                    <a href="mailto:info@sveeint.com" className="flex gap-3 hover:text-[#0B2245] transition-colors group" data-testid="link-email-info">
                      <Mail className="h-5 w-5 text-[#C8922A] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-[#4a5568] group-hover:text-[#0B2245]">info@sveeint.com</div>
                    </a>
                    <a href="mailto:ptsvee@gmail.com" className="flex gap-3 hover:text-[#0B2245] transition-colors group" data-testid="link-email-ptsvee">
                      <Mail className="h-5 w-5 text-[#C8922A] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-[#4a5568] group-hover:text-[#0B2245]">ptsvee@gmail.com</div>
                    </a>
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-[#C8922A] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-[#4a5568]">
                        {language === 'en' ? 'Mon–Sat, 9:00 AM – 6:00 PM WIB' : 'Sen–Sab, 09.00 – 18.00 WIB'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-white border border-[#ede8e0] rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#2E7D55] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#6b7280] leading-relaxed">
                    {language === 'en'
                      ? 'Product availability, specification, packing, origin, price and shipment terms are confirmed case by case. Please include product name, quantity and destination in your enquiry for a faster response.'
                      : 'Ketersediaan produk, spesifikasi, kemasan, asal, harga, dan syarat pengiriman dikonfirmasi per kasus. Sertakan nama produk, kuantitas, dan tujuan dalam pertanyaan Anda untuk respons yang lebih cepat.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOURCING OFFICES ── */}
      <section className="py-16 md:py-20 bg-[#0B2245] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10">
          <div className="text-center mb-10">
            <p className="eyebrow text-[#C8922A] mb-3">{language === 'en' ? 'Our Network' : 'Jaringan Kami'}</p>
            <h2 className="text-3xl font-display text-white">
              {t('contact.offices.title')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {associateOffices.map((office, i) => (
              <div key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/8 transition-colors"
                data-testid={`card-office-${i}`}>
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${office.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                  {office.code}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{office.city}</div>
                  <div className="text-white/50 text-xs mt-0.5">{office.country}</div>
                  <div className="text-white/40 text-xs mt-2 leading-relaxed">{office.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

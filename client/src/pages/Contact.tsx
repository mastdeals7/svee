import { useI18n } from '@/lib/i18n';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';
import {
  MapPin, Phone, Mail, Clock, MessageSquare,
  CheckCircle2, Zap, FileText, Languages, Timer,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    { city: 'Mumbai', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Spices, Feed Ingredients, Pulses' : 'Rempah, Bahan Pakan, Kacang-kacangan' },
    { city: 'Pune', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Grains, Oilseeds, Feed Ingredients' : 'Biji-bijian, Biji Minyak, Bahan Pakan' },
    { city: 'Chennai', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Rice Products, Spices, Oilseeds' : 'Produk Beras, Rempah, Biji Minyak' },
    { city: 'Delhi', country: 'India', code: 'IN', color: 'bg-orange-500', role: language === 'en' ? 'Grains, Pulses, Liquid Glucose' : 'Biji-bijian, Kacang-kacangan, Liquid Glucose' },
    { city: 'Ho Chi Minh', country: 'Vietnam', code: 'VN', color: 'bg-yellow-600', role: language === 'en' ? 'Black Pepper, Rice' : 'Lada Hitam, Beras' },
    { city: 'Yangon', country: 'Myanmar', code: 'MM', color: 'bg-yellow-500', role: language === 'en' ? 'Yellow Maize, Green Moong' : 'Jagung Kuning, Kacang Hijau' },
  ];

  const inquiryTopics = language === 'en'
    ? [
        { label: 'Soybean Meal / SBM', msg: 'Hello PT Svee International, I would like to enquire about Soybean Meal / SBM. Please send availability, specification and pricing.' },
        { label: 'Rice DDGS', msg: 'Hello PT Svee International, I would like to enquire about Rice DDGS. Please send availability, specification and pricing.' },
        { label: 'Maize Grits / Corn Grits', msg: 'Hello PT Svee International, I would like to enquire about Maize Grits / Corn Grits. Please send availability, specification and pricing.' },
        { label: 'Rice Grits', msg: 'Hello PT Svee International, I would like to enquire about Rice Grits. Please send availability, specification and pricing.' },
        { label: 'Yellow Maize / Corn', msg: 'Hello PT Svee International, I would like to enquire about Yellow Maize / Corn. Please send availability, specification and pricing.' },
        { label: 'Groundnut Kernels HPS', msg: 'Hello PT Svee International, I would like to enquire about Groundnut Kernels HPS from India. Please send availability, specification and pricing.' },
        { label: 'Red Chilli / Spices', msg: 'Hello PT Svee International, I would like to enquire about Red Chilli and other Indian spices. Please send availability and pricing.' },
        { label: 'Liquid Glucose', msg: 'Hello PT Svee International, I would like to enquire about Liquid Glucose from India. Please send availability, specification and pricing.' },
      ]
    : [
        { label: 'Soybean Meal / SBM', msg: 'Halo PT Svee International, saya ingin menanyakan Soybean Meal / SBM. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
        { label: 'Rice DDGS', msg: 'Halo PT Svee International, saya ingin menanyakan Rice DDGS. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
        { label: 'Maize Grits / Corn Grits', msg: 'Halo PT Svee International, saya ingin menanyakan Maize Grits / Corn Grits. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
        { label: 'Rice Grits', msg: 'Halo PT Svee International, saya ingin menanyakan Rice Grits. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
        { label: 'Jagung Kuning / Corn', msg: 'Halo PT Svee International, saya ingin menanyakan Jagung Kuning / Corn. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
        { label: 'Kacang Tanah HPS', msg: 'Halo PT Svee International, saya ingin menanyakan Kacang Tanah HPS dari India. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
        { label: 'Cabai Merah / Rempah', msg: 'Halo PT Svee International, saya ingin menanyakan Cabai Merah dan rempah India lainnya. Mohon informasi ketersediaan dan harga.' },
        { label: 'Liquid Glucose', msg: 'Halo PT Svee International, saya ingin menanyakan Liquid Glucose dari India. Mohon informasi ketersediaan, spesifikasi, dan harga.' },
      ];

  const whyWa = language === 'en'
    ? [
        { icon: Zap, label: 'Same-day replies', desc: 'Usually within 1–2 hours during business hours' },
        { icon: FileText, label: 'Share specs easily', desc: 'COAs, spec sheets, price lists — all via chat' },
        { icon: Languages, label: 'English or Bahasa', desc: 'We reply in either language' },
        { icon: Timer, label: 'No contact forms', desc: 'Straight to a real person, no delays' },
      ]
    : [
        { icon: Zap, label: 'Balas hari yang sama', desc: 'Biasanya dalam 1–2 jam di jam kerja' },
        { icon: FileText, label: 'Bagikan spesifikasi mudah', desc: 'COA, spesifikasi, daftar harga — semua via chat' },
        { icon: Languages, label: 'Bahasa atau Inggris', desc: 'Kami membalas dalam kedua bahasa' },
        { icon: Timer, label: 'Tanpa form kontak', desc: 'Langsung ke orang nyata, tanpa penundaan' },
      ];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO — light centered ── */}
      <section className="relative min-h-[54vh] md:min-h-[60vh] flex items-center justify-center trade-section overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-5 md:px-10 py-14 md:py-20 text-center space-y-6 z-10">
          <div className="inline-flex items-center gap-2 editorial-eyebrow">
            <MessageSquare className="h-3 w-3" />
            {language === 'en' ? 'Get In Touch' : 'Hubungi Kami'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-display leading-[1] text-foreground"
            data-testid="heading-contact-title">
            {t('contact.title')}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
            data-testid="text-contact-subtitle">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero">
              <Button size="lg" className="gap-2.5 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm px-8 w-full sm:w-auto">
                <WhatsAppIcon size="md" />
                {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 justify-center pt-1">
            {(language === 'en'
              ? ['Same-day reply', 'English & Bahasa', 'Real person — no bots']
              : ['Dijawab hari ini', 'Bahasa & Inggris', 'Orang nyata — bukan bot']).map(p => (
              <span key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ENQUIRY TOPICS ── */}
      <section className="py-12 md:py-14 bg-background editorial-rule">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <p className="editorial-eyebrow mb-4 text-center">
            {language === 'en' ? 'Quick Product Enquiry' : 'Pertanyaan Produk Cepat'}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {inquiryTopics.map((topic, i) => (
              <a
                key={i}
                href={`https://wa.me/6281510551111?text=${encodeURIComponent(topic.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`button-topic-${i}`}>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  <WhatsAppIcon size="sm" />
                  {topic.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT INFO ── */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-3 gap-6">

            {/* WhatsApp Card */}
            <div className="lg:col-span-1">
              <div className="rounded-xl overflow-hidden border border-border shadow-md">
                <div className="bg-gradient-to-br from-[#2E7D55] to-[#1f5c3d] p-6 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <WhatsAppIcon size="lg" />
                  </div>
                  <h2 className="text-lg font-bold mb-1">
                    {t('contact.whatsapp.title')}
                  </h2>
                  <p className="text-white/80 text-xs">
                    {t('contact.whatsapp.subtitle')}
                  </p>
                </div>
                <div className="bg-white p-5 space-y-4">
                  <div className="space-y-2.5">
                    {whyWa.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="h-6 w-6 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="h-3 w-3 text-primary" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-foreground">{item.label}</div>
                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-card">
                    <Button className="w-full gap-2 bg-[#2E7D55] text-white border-[#2E7D55]">
                      <WhatsAppIcon />
                      {t('contact.whatsapp.cta')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-5">

              {/* Head Office */}
              <div className="bg-background border border-border rounded-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-0.5 w-4 bg-accent rounded-full" />
                  <h2 className="font-semibold text-xs uppercase tracking-wider text-foreground">{t('contact.headquarters')}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <div className="font-semibold text-foreground mb-0.5">PT Svee International / Svee Komoditi</div>
                        Ruko Sunter Terrace Blok C No 12,<br />
                        Jl. Danau Sunter Utara Kav. No. 60,<br />
                        Jakarta Utara 14350, Indonesia
                      </div>
                    </div>
                    <a href="tel:+622165832426" className="flex gap-3 hover:text-primary transition-colors group" data-testid="link-phone">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground group-hover:text-primary">+62 21 658 32426</div>
                    </a>
                    <a href={`https://wa.me/6281510551111`} className="flex gap-3 hover:text-primary transition-colors group" data-testid="link-whatsapp">
                      <MessageSquare className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground group-hover:text-primary">+62 815-1055-1111 (WhatsApp)</div>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:info@sveeint.com" className="flex gap-3 hover:text-primary transition-colors group" data-testid="link-email-info">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground group-hover:text-primary">info@sveeint.com</div>
                    </a>
                    <a href="mailto:ptsvee@gmail.com" className="flex gap-3 hover:text-primary transition-colors group" data-testid="link-email-ptsvee">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground group-hover:text-primary">ptsvee@gmail.com</div>
                    </a>
                    <a href="mailto:lunkad.v@gmail.com" className="flex gap-3 hover:text-primary transition-colors group" data-testid="link-email-lunkad">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground group-hover:text-primary">lunkad.v@gmail.com</div>
                    </a>
                    <div className="flex gap-3">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Mon–Sat, 9:00 AM – 6:00 PM WIB' : 'Sen–Sab, 09.00 – 18.00 WIB'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-white border border-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
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

      {/* ── SOURCING OFFICES — dark ── */}
      <section className="py-16 md:py-20 bg-[#0B2245]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-6">
            <p className="editorial-eyebrow mb-2">
              {language === 'en' ? 'Our Network' : 'Jaringan Kami'}
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-white">
              {t('contact.offices.title')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {associateOffices.map((office, i) => (
              <div key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover-elevate"
                data-testid={`card-office-${i}`}>
                <div className={`h-9 w-9 rounded-full ${office.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md`}>
                  {office.code}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{office.city}</div>
                  <div className="text-white/50 text-[11px]">{office.country}</div>
                  <div className="text-white/40 text-[10px] mt-1 leading-relaxed">{office.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

import { useI18n } from '@/lib/i18n';
import { useRoute, Link } from 'wouter';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MessageCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { productLandings } from '@/data/product-landings';
import { contentImages } from '@/data/media';

const WHATSAPP_NUMBER = '6281510551111';

const imageMap: Record<string, string> = {
  grains: contentImages.product2,
  oilseeds: contentImages.product3,
  spices: contentImages.product1,
  bannerGrains: contentImages.banner2,
  bannerOilseeds: contentImages.banner3,
  bannerSpices: contentImages.banner1,
};

const categoryMap: Record<string, string> = {
  'soybean-meal-soyameal-indonesia': 'Animal feed ingredient',
  'rice-ddgs-indonesia': 'Animal feed ingredient',
  'rapeseed-meal-canola-meal-indonesia': 'Animal feed ingredient',
  'yellow-maize-feed-corn-indonesia': 'Animal feed grain',
  'corn-grits-maize-grits-india': 'Corn product',
  'rice-grits-indonesia': 'Rice product',
  'corn-flour-india': 'Food and industrial ingredient',
  'rice-flour-india': 'Food ingredient',
  'groundnut-kernels-peanuts-india': 'Oilseed and kernel',
  'liquid-glucose-india': 'Food ingredient and sweetener',
};

export default function ProductLanding() {
  const { language } = useI18n();
  const [, params] = useRoute('/products/:slug');
  const slug = params?.slug ?? '';

  const landing = productLandings.find(l => l.slug === slug);

  useEffect(() => {
    if (!landing) return;

    document.title = landing.metaTitle[language];
    const img = imageMap[landing.imageKey] ?? contentImages.product2;
    const imageUrl = img.startsWith('/')
      ? `https://www.sveeint.com${img}`
      : img;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', landing.metaDescription[language]);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://www.sveeint.com/products/${slug}`);

    const cleanup = (id: string) => document.getElementById(id)?.remove();

    cleanup('ld-breadcrumb');
    const bcScript = document.createElement('script');
    bcScript.type = 'application/ld+json';
    bcScript.id = 'ld-breadcrumb';
    bcScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: language === 'en' ? 'Home' : 'Beranda', item: 'https://www.sveeint.com/' },
        { '@type': 'ListItem', position: 2, name: language === 'en' ? 'Products' : 'Produk', item: 'https://www.sveeint.com/products' },
        { '@type': 'ListItem', position: 3, name: landing.h1[language], item: `https://www.sveeint.com/products/${slug}` },
      ],
    });
    document.head.appendChild(bcScript);

    cleanup('ld-product');
    const productScript = document.createElement('script');
    productScript.type = 'application/ld+json';
    productScript.id = 'ld-product';
    productScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: landing.h1[language],
      description: landing.metaDescription[language],
      category: categoryMap[slug] ?? 'Agro commodity sourcing support',
      image: imageUrl,
      provider: {
        '@type': 'Organization',
        name: 'PT Svee International',
        url: 'https://www.sveeint.com',
      },
    });
    document.head.appendChild(productScript);

    if (landing.faqs.length > 0) {
      cleanup('ld-faq');
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = 'ld-faq';
      faqScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: landing.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q[language],
          acceptedAnswer: { '@type': 'Answer', text: faq.a[language] },
        })),
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      cleanup('ld-breadcrumb');
      cleanup('ld-product');
      cleanup('ld-faq');
    };
  }, [language, landing, slug]);

  if (!landing) return null;

  const img = imageMap[landing.imageKey] ?? contentImages.product2;
  const waMsg = landing.waMessage[language];
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  const specs = landing.specs[language];
  const apps = landing.applications[language];

  return (
    <div className="w-full overflow-x-hidden">

      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap" aria-label="Breadcrumb">
            <Link href="/">
              <span className="hover:text-foreground cursor-pointer transition-colors">{language === 'en' ? 'Home' : 'Beranda'}</span>
            </Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <Link href="/products">
              <span className="hover:text-foreground cursor-pointer transition-colors">{language === 'en' ? 'Products' : 'Produk'}</span>
            </Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <span className="text-foreground font-medium">{landing.h1[language]}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="trade-section overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">

            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-display leading-[1] text-foreground"
                data-testid="heading-product-landing">
                {landing.h1[language]}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {landing.intro[language]}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-wa-landing-top">
                  <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm w-full sm:w-auto">
                    <MessageCircle className="h-4 w-4" />
                    {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-4 border-t border-border">
                {language === 'en'
                  ? 'Product availability, specification, packing, origin, price and shipment terms are confirmed case by case. Final import clearance depends on product classification, documents, importer status and applicable Indonesian regulations.'
                  : 'Ketersediaan produk, spesifikasi, kemasan, asal, harga dan syarat pengiriman dikonfirmasi per kasus. Izin impor akhir tergantung pada klasifikasi produk, dokumen, status importir dan peraturan Indonesia yang berlaku.'}
              </p>
            </div>

            <div className="relative image-treatment overflow-hidden aspect-[5/4] order-1 lg:order-2">
              <img
                src={img}
                alt={landing.h1.en}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block text-xs bg-white/15 backdrop-blur-sm text-white border border-white/25 px-3 py-1.5 rounded-sm font-medium">
                  {language === 'en' ? 'Origin: India & selected markets' : 'Asal: India & pasar terpilih'}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specs + Applications */}
      <section className="py-16 md:py-20 bg-background editorial-rule">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            {/* Specifications */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                {language === 'en' ? 'Typical Specifications' : 'Spesifikasi Tipikal'}
              </h2>
              <div className="space-y-0 border-y border-border overflow-hidden">
                {specs.map((spec, i) => (
                  <div key={i}
                    className="flex gap-4 px-0 py-4 text-sm border-b border-border/70 last:border-b-0"
                    data-testid={`spec-row-${i}`}>
                    <span className="font-medium text-foreground min-w-[130px] flex-shrink-0">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {language === 'en'
                  ? 'All specifications subject to supplier confirmation per shipment. Exact grade, origin and packing confirmed on enquiry.'
                  : 'Semua spesifikasi tergantung konfirmasi pemasok per pengiriman. Grade, asal dan kemasan yang tepat dikonfirmasi saat enquiry.'}
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                {language === 'en' ? 'Applications' : 'Aplikasi'}
              </h2>
              <div className="space-y-3">
                {apps.map((app, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>

              {/* PT Svee role box */}
              <div className="mt-8 border-l border-primary pl-5">
                <p className="text-xs font-semibold text-primary mb-1.5">
                  {language === 'en' ? 'How PT Svee International Helps' : 'Bagaimana PT Svee International Membantu'}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {language === 'en'
                    ? 'We are an Indonesia-based sourcing broker — not the seller. We check availability, coordinate specifications, follow shipment documentation and communicate between you and the supplier throughout the process.'
                    : 'Kami adalah broker sourcing berbasis Indonesia — bukan penjual. Kami memeriksa ketersediaan, mengkoordinasikan spesifikasi, mengikuti dokumentasi pengiriman dan berkomunikasi antara Anda dan pemasok sepanjang proses.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-8" data-testid="heading-faq">
            {language === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Diajukan'}
          </h2>
          <div className="space-y-0">
            {landing.faqs.map((faq, i) => (
              <div key={i} className="border-b border-border py-6" data-testid={`faq-item-${i}`}>
                <h3 className="font-semibold text-foreground mb-2.5 text-sm md:text-base leading-snug">
                  {faq.q[language]}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a[language]}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              {language === 'en'
                ? 'Have a specific requirement? Contact us via WhatsApp and we will check availability and pricing.'
                : 'Ada kebutuhan spesifik? Hubungi kami via WhatsApp dan kami akan memeriksa ketersediaan dan harga.'}
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-wa-landing-bottom">
                  <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm">
                <MessageCircle className="h-5 w-5" />
                {language === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan via WhatsApp'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Browse More */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            {language === 'en' ? 'Browse our full catalog of agro commodities' : 'Jelajahi katalog komoditas agro lengkap kami'}
          </p>
          <Link href="/products">
            <Button variant="outline" className="gap-2 text-sm">
              {language === 'en' ? 'View All Products' : 'Lihat Semua Produk'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

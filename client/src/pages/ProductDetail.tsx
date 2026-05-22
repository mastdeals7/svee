import { useI18n } from '@/lib/i18n';
import { useRoute, Link } from 'wouter';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowLeft, CheckCircle2, MessageCircle, FileText, PackageCheck, Ship, Globe2 } from 'lucide-react';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { contentImages } from '@/data/media';
import { categoryPath, categorySlugToId, productDetailPath } from '@/pages/Products';
import type { Language, Product } from '@shared/schema';

const WHATSAPP_NUMBER = '6281510551111';

const productImageMap: Record<string, string> = {
  'soybean-meal': contentImages.product3,
  'rapeseed-meal': contentImages.product3,
  'rice-ddgs': contentImages.banner2,
  'yellow-maize-feed': contentImages.product2,
  'corn-grits-feed': contentImages.product2,
  'groundnut-meal': contentImages.product3,
  'wheat-bran': contentImages.banner2,
  'sunflower-meal': contentImages.product3,
  'soy-hulls': contentImages.product3,
  'yellow-maize': contentImages.product2,
  'corn-grits': contentImages.product2,
  'maize-grits': contentImages.product2,
  'corn-flour': contentImages.banner2,
  'rice-grits': contentImages.banner2,
  'rice-flour': contentImages.banner2,
  'groundnut-kernels': contentImages.product3,
  'sesame-seeds': contentImages.product3,
  'red-chilli': contentImages.product1,
  turmeric: contentImages.product1,
  'cumin-seeds': contentImages.product1,
  'liquid-glucose': contentImages.banner3,
};

function parseSpecRows(product: Product, language: Language) {
  return product.specifications?.[language]
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const [label, ...rest] = line.split(':');
      return rest.length
        ? { label: label.trim(), value: rest.join(':').trim() }
        : { label: language === 'en' ? 'Note' : 'Catatan', value: line };
    }) ?? [];
}

function specValue(rows: { label: string; value: string }[], match: string) {
  return rows.find(row => row.label.toLowerCase().includes(match.toLowerCase()))?.value;
}

function splitLines(value?: string) {
  return value?.split(/\n|\|/).map(item => item.trim()).filter(Boolean) ?? [];
}

function InfoSection({ icon: Icon, title, children }: {
  icon: typeof Globe2;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-8">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 bg-secondary text-primary flex items-center justify-center flex-shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-display leading-tight">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { t, language } = useI18n();
  const [, params] = useRoute('/products/:categorySlug/:productId');
  const categorySlug = params?.categorySlug ?? '';
  const productId = params?.productId ?? '';
  const categoryId = categorySlugToId[categorySlug] ?? categorySlug;

  const category = categories.find(c => c.id === categoryId);
  const product = products.find(p => p.id === productId && p.categoryId === categoryId);
  const related = products.filter(p => p.categoryId === categoryId && p.id !== productId).slice(0, 3);
  const specRows = product ? parseSpecRows(product, language) : [];

  useEffect(() => {
    if (!product) return;
    const catName = category?.name[language] ?? '';
    document.title = `${product.name[language]} – ${catName} | PT Svee International`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const desc = product.description[language];
      metaDesc.setAttribute('content',
        `${desc.length > 140 ? desc.slice(0, 140) + '…' : desc} Contact PT Svee International via WhatsApp for availability and pricing.`
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://www.sveeint.com/products/${categorySlug}/${productId}`);

    const cleanup = (id: string) => document.getElementById(id)?.remove();
    cleanup('ld-product-breadcrumb');
    const bcScript = document.createElement('script');
    bcScript.type = 'application/ld+json';
    bcScript.id = 'ld-product-breadcrumb';
    bcScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: language === 'en' ? 'Home' : 'Beranda', item: 'https://www.sveeint.com/' },
        { '@type': 'ListItem', position: 2, name: language === 'en' ? 'Products' : 'Produk', item: 'https://www.sveeint.com/products' },
        { '@type': 'ListItem', position: 3, name: catName, item: `https://www.sveeint.com${categoryPath(product.categoryId)}` },
        { '@type': 'ListItem', position: 4, name: product.name[language], item: `https://www.sveeint.com/products/${categorySlug}/${productId}` },
      ],
    });
    document.head.appendChild(bcScript);

    return () => { cleanup('ld-product-breadcrumb'); };
  }, [product, category, language, categorySlug, productId]);

  if (!categorySlug || !productId) return null;

  const productImage = product ? (productImageMap[product.id] ?? contentImages.product2) : contentImages.product2;
  const waMsg = language === 'en'
    ? `Hello PT Svee International, I would like to enquire about ${product?.name.en ?? productId}. Please advise availability, origin, packing and indicative price.`
    : `Halo PT Svee International, saya ingin bertanya tentang ${product?.name.id ?? productId}. Mohon informasikan ketersediaan, asal, kemasan dan indikasi harga.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  const origin = specValue(specRows, language === 'en' ? 'Origin' : 'Asal') || (language === 'en' ? 'Confirmed per enquiry' : 'Dikonfirmasi per permintaan');
  const packing = specValue(specRows, language === 'en' ? 'Packing' : 'Kemasan') || (language === 'en' ? 'Packing confirmed case by case' : 'Kemasan dikonfirmasi per kasus');
  const uses = product ? splitLines(product.applications?.[language] || product.benefits?.[language]) : [];

  return (
    <div className="w-full">
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/products">
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground" data-testid="breadcrumb-products">
                {t('products.title')}
              </Button>
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link href={category ? categoryPath(category.id) : '/products'}>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground" data-testid="breadcrumb-category">
                {category?.name[language] || categorySlug}
              </Button>
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground" data-testid="breadcrumb-product">
              {product?.name[language] || productId}
            </span>
          </nav>
        </div>
      </div>

      <main className="bg-background">
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Link href={category ? categoryPath(category.id) : '/products'}>
              <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-to-category">
                <ArrowLeft className="h-4 w-4" />
                {t('products.backToCategories')}
              </Button>
            </Link>

            {product ? (
              <div className="space-y-12">
                <div className="grid lg:grid-cols-[0.55fr_0.45fr] gap-10 md:gap-14 items-start">
                  <div className="space-y-6">
                    <Badge variant="secondary" className="rounded-sm text-sm">
                      {category?.name[language]}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-display leading-[1] text-foreground" data-testid="heading-product-name">
                      {product.name[language]}
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-product-description">
                      {product.description[language]}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-product">
                        <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55] shadow-sm w-full sm:w-auto">
                          <MessageCircle className="h-4 w-4" />
                          {language === 'en' ? 'WhatsApp Quote' : 'Harga WhatsApp'}
                        </Button>
                      </a>
                      <Link href="/contact">
                        <Button size="lg" variant="outline" data-testid="button-request-quote-top" className="w-full sm:w-auto">
                          {t('nav.quote')}
                        </Button>
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {language === 'en'
                  ? 'Availability, final specification, packing, origin, price and shipment terms are confirmed case by case before quotation.'
                        : 'Ketersediaan, spesifikasi akhir, kemasan, asal, harga dan syarat pengiriman dikonfirmasi per kasus sebelum penawaran.'}
                    </p>
                  </div>

                  <div className="relative image-treatment overflow-hidden bg-white">
                    <img
                      src={productImage}
                      alt={product.name[language]}
                      className="w-full aspect-[4/3] object-cover"
                      data-testid="img-product"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 bg-white border border-border p-5 md:p-8">
                  <section data-testid="card-specifications">
                    <h2 className="text-3xl font-display mb-5" data-testid="heading-specifications">
                      {t('products.specifications')}
                    </h2>
                    <div className="border-y border-border">
                      {specRows.map((row, i) => (
                        <div key={`${row.label}-${i}`} className="grid grid-cols-[0.35fr_0.65fr] gap-4 py-3 border-b border-border last:border-b-0 text-sm">
                          <span className="font-semibold text-foreground">{row.label}</span>
                          <span className="text-muted-foreground">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section data-testid="card-benefits">
                    <h2 className="text-3xl font-display mb-5" data-testid="heading-benefits">
                      {t('products.benefits')}
                    </h2>
                    <div className="space-y-3">
                      {uses.map((use, i) => (
                        <div key={use} className="flex gap-3" data-testid={`benefit-${i}`}>
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{use}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="bg-white border border-border px-5 md:px-8">
                  <InfoSection icon={Globe2} title={language === 'en' ? 'Sourcing & Origin' : 'Sourcing & Asal'}>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'en'
                        ? `Current origin/source note: ${origin}. PT Svee International checks available origin options against buyer specification, quantity and shipment timing.`
                        : `Catatan asal/source saat ini: ${origin}. PT Svee International mengecek opsi asal berdasarkan spesifikasi, kuantitas dan waktu pengiriman pembeli.`}
                    </p>
                  </InfoSection>

                  <InfoSection icon={PackageCheck} title={language === 'en' ? 'Packing & Shipment' : 'Kemasan & Pengiriman'}>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'en'
                        ? `Typical packing note: ${packing}. Shipment mode and minimum quantity are confirmed with supplier capability and buyer destination.`
                        : `Catatan kemasan tipikal: ${packing}. Mode pengiriman dan kuantitas minimum dikonfirmasi berdasarkan kemampuan pemasok dan tujuan pembeli.`}
                    </p>
                  </InfoSection>

                  <InfoSection icon={FileText} title={language === 'en' ? 'Import Documents' : 'Dokumen Impor'}>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      {(language === 'en'
                        ? ['Commercial Invoice', 'Packing List', 'Bill of Lading', 'Certificate of Origin', 'COA / analysis certificate', 'Phytosanitary or fumigation certificate where applicable']
                        : ['Invoice Komersial', 'Packing List', 'Bill of Lading', 'Certificate of Origin', 'COA / sertifikat analisis', 'Fitosanitasi atau fumigasi jika berlaku']).map(doc => (
                        <span key={doc} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {doc}
                        </span>
                      ))}
                    </div>
                  </InfoSection>

                  <InfoSection icon={Ship} title="FAQ">
                    <div className="space-y-5">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {language === 'en' ? 'What should I send for a quotation?' : 'Apa yang perlu dikirim untuk penawaran?'}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mt-1">
                          {language === 'en'
                            ? 'Please share product name, quantity, destination port/city, packing preference and any target specification.'
                            : 'Kirim nama produk, kuantitas, pelabuhan/kota tujuan, preferensi kemasan dan target spesifikasi jika ada.'}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {language === 'en' ? 'Are price and availability fixed?' : 'Apakah harga dan ketersediaan tetap?'}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mt-1">
                          {language === 'en'
                            ? 'No. Availability, price, origin and shipment terms are checked case by case before any quotation.'
                            : 'Tidak. Ketersediaan, harga, asal dan syarat pengiriman dicek per kasus sebelum penawaran.'}
                        </p>
                      </div>
                    </div>
                  </InfoSection>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {language === 'en' ? 'Product not found.' : 'Produk tidak ditemukan.'}
                </p>
              </div>
            )}
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-14 md:py-16 bg-white border-t border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-display mb-8" data-testid="heading-related-products">
                {t('products.relatedProducts')}
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map(rp => (
                  <Link key={rp.id} href={productDetailPath(rp)}>
                    <article className="bg-background border border-border p-5 hover:border-primary/40 transition-colors">
                      <h3 className="text-lg font-semibold text-foreground">{rp.name[language]}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{rp.description[language]}</p>
                      <Button variant="outline" className="mt-4 gap-2">
                        {language === 'en' ? 'View Details' : 'Lihat Detail'}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

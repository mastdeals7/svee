import { useI18n } from '@/lib/i18n';
import { useRoute, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { categories } from '@/data/categories';
import { products as allProducts } from '@/data/products';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';
import { ProductCatalogCard, categorySlugToId } from '@/pages/Products';

export default function ProductCategory() {
  const { language } = useI18n();
  const [, params] = useRoute('/products/:slug');
  const slug = params?.slug ?? '';
  const categoryId = categorySlugToId[slug] ?? slug;
  const category = categories.find(c => c.id === categoryId);
  const products = allProducts.filter(p => p.categoryId === categoryId);

  if (!slug) return null;

  const waMsg = language === 'en'
    ? `Hello PT Svee International, I would like to enquire about ${category?.name.en ?? slug}.`
    : `Halo PT Svee International, saya ingin bertanya tentang ${category?.name.id ?? slug}.`;

  return (
    <div className="w-full">
      <section className="trade-section border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
          <Link href="/products">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-to-products">
              <ArrowLeft className="h-4 w-4" />
              {language === 'en' ? 'All product categories' : 'Semua kategori produk'}
            </Button>
          </Link>

          <div className="max-w-3xl space-y-5">
            <p className="editorial-eyebrow">
              {language === 'en' ? 'Product category' : 'Kategori produk'}
            </p>
            <h1 className="text-4xl md:text-6xl font-display leading-[1] text-foreground" data-testid="heading-category-title">
              {category?.name[language] || slug}
            </h1>
            {category && (
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-category-description">
                {category.description[language]}
              </p>
            )}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {(language === 'en'
                ? ['Availability checked per enquiry', 'Specification coordination', 'Document follow-up']
                : ['Ketersediaan dicek per permintaan', 'Koordinasi spesifikasi', 'Tindak lanjut dokumen']).map(item => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          {products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map(product => (
                <ProductCatalogCard key={product.id} product={product} language={language} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground" data-testid="text-no-products">
                {language === 'en'
                  ? 'No products available in this category.'
                  : 'Tidak ada produk yang tersedia dalam kategori ini.'}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-14 md:py-16 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center space-y-5">
          <p className="editorial-eyebrow">
            {language === 'en' ? 'Category enquiry' : 'Pertanyaan kategori'}
          </p>
          <h2 className="text-3xl md:text-5xl font-display leading-tight">
            {language === 'en'
              ? 'Need help choosing the right product?'
              : 'Butuh bantuan memilih produk yang tepat?'}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {language === 'en'
              ? 'Send us your quantity, destination and specification target. We will check realistic options for your requirement.'
              : 'Kirim kuantitas, tujuan dan target spesifikasi. Kami akan memeriksa opsi yang realistis untuk kebutuhan Anda.'}
          </p>
          <a href={getWhatsAppUrl(language, waMsg)} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55]">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

import { useI18n } from '@/lib/i18n';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, CircleCheck as CheckCircle2, Package } from 'lucide-react';
import { categories } from '@/data/categories';
import { products as allProducts } from '@/data/products';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';
import { ProductCatalogCard, categorySlugToId } from '@/pages/Products';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

  const waUrl = getWhatsAppUrl(language, waMsg);

  const pillItems = language === 'en'
    ? ['Availability checked per enquiry', 'Specification coordination', 'Document follow-up']
    : ['Ketersediaan dicek per permintaan', 'Koordinasi spesifikasi', 'Tindak lanjut dokumen'];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-16 md:py-24 bg-[#1A4A9E] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10">
          <Link href="/products">
            <button className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group"
              data-testid="button-back-to-products">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              {language === 'en' ? 'All product categories' : 'Semua kategori produk'}
            </button>
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <Package className="h-3.5 w-3.5 text-[#E85E00]" />
              <span className="text-xs font-semibold text-white/80">
                {language === 'en' ? 'Product Category' : 'Kategori Produk'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display leading-[1.1] text-white mb-4"
              data-testid="heading-category-title">
              {category?.name[language] || slug}
            </h1>
            {category && (
              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6"
                data-testid="text-category-description">
                {category.description[language]}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {pillItems.map(item => (
                <span key={item} className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-full px-3 py-1.5 text-xs text-white/70">
                  <CheckCircle2 className="h-3 w-3 text-[#E85E00]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="py-16 md:py-20 bg-[#f9f6f1]">
        <div className="site-container">
          {products.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="eyebrow mb-1">{language === 'en' ? 'Available Products' : 'Produk Tersedia'}</p>
                  <h2 className="text-2xl font-display text-[#1A4A9E]">
                    {products.length} {language === 'en' ? 'products in this category' : 'produk dalam kategori ini'}
                  </h2>
                </div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hidden md:block">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-colors">
                    <WhatsAppIcon />
                    {language === 'en' ? 'Enquire Now' : 'Tanya Sekarang'}
                  </button>
                </a>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map(product => (
                  <ProductCatalogCard key={product.id} product={product} language={language} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-white rounded-2xl border border-[#ede8e0] shadow-sm mb-4">
                <Package className="h-8 w-8 text-[#1A4A9E]/30" />
              </div>
              <p className="text-[#6b7280] text-sm" data-testid="text-no-products">
                {language === 'en'
                  ? 'No products available in this category.'
                  : 'Tidak ada produk yang tersedia dalam kategori ini.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[#1A4A9E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10 max-w-3xl mx-auto text-center space-y-5">
          <p className="eyebrow text-[#E85E00]">
            {language === 'en' ? 'Category Enquiry' : 'Pertanyaan Kategori'}
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-white">
            {language === 'en'
              ? 'Need help choosing the right product?'
              : 'Butuh bantuan memilih produk yang tepat?'}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
            {language === 'en'
              ? 'Send us your quantity, destination and specification target. We will check realistic options for your requirement.'
              : 'Kirim kuantitas, tujuan dan target spesifikasi. Kami akan memeriksa opsi yang realistis untuk kebutuhan Anda.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all shadow-sm">
                <WhatsAppIcon />
                {language === 'en' ? 'Send WhatsApp Enquiry' : 'Kirim Pertanyaan WhatsApp'}
              </button>
            </a>
            <Link href="/products">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all">
                {language === 'en' ? 'All Categories' : 'Semua Kategori'}
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import { useI18n } from '@/lib/i18n';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { contentImages } from '@/data/media';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';
import { ArrowRight, CircleCheck as CheckCircle2, MessageCircle, Package, Wheat } from 'lucide-react';
import type { Language, Product, ProductCategory } from '@shared/schema';

export const categoryPathMap: Record<string, string> = {
  'animal-feed': 'animal-feed-ingredients',
  grains: 'grains-corn-products',
  rice: 'rice-milled-products',
  oilseeds: 'oilseeds-kernels',
  pulses: 'pulses-beans',
  spices: 'spices',
  'food-ingredients': 'food-ingredients-sweeteners',
  'edible-oils': 'edible-oils',
  fertilizer: 'fertilizers',
};

export const categorySlugToId: Record<string, string> = Object.fromEntries([
  ...Object.entries(categoryPathMap).map(([id, slug]) => [slug, id]),
  ...categories.map(category => [category.slug, category.id]),
]);

const overviewCategoryIds = [
  'animal-feed',
  'grains',
  'rice',
  'oilseeds',
  'pulses',
  'spices',
  'food-ingredients',
  'edible-oils',
  'fertilizer',
];

const priorityProductIds = [
  'soybean-meal',
  'rice-ddgs',
  'rapeseed-meal',
  'yellow-maize-feed',
  'corn-grits',
  'rice-grits',
  'groundnut-kernels',
  'sesame-seeds',
  'liquid-glucose',
  'dap',
];

const categoryImageMap: Record<string, string> = {
  'animal-feed': contentImages.product2,
  grains: contentImages.product2,
  rice: contentImages.banner2,
  oilseeds: contentImages.product3,
  pulses: contentImages.banner1,
  spices: contentImages.product1,
  'food-ingredients': contentImages.banner3,
  'edible-oils': contentImages.product3,
  fertilizer: contentImages.banner2,
};

const productImageMap: Record<string, string> = {
  'soybean-meal': contentImages.product3,
  'rapeseed-meal': contentImages.product3,
  'rice-ddgs': contentImages.banner2,
  'yellow-maize-feed': contentImages.product2,
  'corn-grits': contentImages.product2,
  'maize-grits': contentImages.product2,
  'rice-grits': contentImages.banner2,
  'groundnut-kernels': contentImages.product3,
  'sesame-seeds': contentImages.product3,
  'liquid-glucose': contentImages.banner3,
  dap: contentImages.banner2,
};

export function categoryPath(categoryId: string) {
  return `/products/${categoryPathMap[categoryId] ?? categoryId}`;
}

export function productDetailPath(product: Product) {
  return `/products/${categoryPathMap[product.categoryId] ?? product.categoryId}/${product.id}`;
}

function specLine(product: Product, language: Language, startsWith: string) {
  return product.specifications?.[language]
    ?.split('\n')
    .find(line => line.toLowerCase().startsWith(startsWith.toLowerCase()))
    ?.replace(/^[^:]+:\s*/, '')
    .trim();
}

function firstSpec(product: Product, language: Language) {
  return product.specifications?.[language]?.split('\n').find(Boolean) ?? '';
}

function typicalUse(product: Product, language: Language) {
  return product.applications?.[language]?.split('|')[0]?.trim()
    || product.benefits?.[language]?.split('\n')[0]?.trim()
    || product.description[language].split('.')[0];
}

function CategoryOverviewCard({ category, language }: { category: ProductCategory; language: Language }) {
  const image = categoryImageMap[category.id] ?? contentImages.product2;
  const count = products.filter(product => product.categoryId === category.id).length;

  return (
    <Link href={categoryPath(category.id)}>
      <article className="group bg-white border border-[#ede8e0] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full cursor-pointer">
        <div className="aspect-[16/10] overflow-hidden bg-[#f9f6f1] relative">
          <img
            src={image}
            alt={category.name[language]}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A9E]/40 to-transparent" />
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 text-[#1A4A9E] text-xs font-bold px-2.5 py-1 rounded-full">
              {count} {language === 'en' ? 'products' : 'produk'}
            </span>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <h3 className="text-base font-semibold leading-snug text-[#1A4A9E]">{category.name[language]}</h3>
          <p className="text-xs text-[#6b7280] leading-relaxed line-clamp-3">
            {category.description[language]}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E85E00] group-hover:gap-2.5 transition-all">
            {language === 'en' ? 'View products' : 'Lihat produk'}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}

export function ProductCatalogCard({ product, language }: { product: Product; language: Language }) {
  const category = categories.find(cat => cat.id === product.categoryId);
  const image = productImageMap[product.id] ?? categoryImageMap[product.categoryId] ?? contentImages.product2;
  const origin = specLine(product, language, language === 'en' ? 'Origin' : 'Asal')
    || (language === 'en' ? 'Confirmed per enquiry' : 'Dikonfirmasi per permintaan');
  const spec = firstSpec(product, language);
  const waMsg = language === 'en'
    ? `Hello PT Svee International, I would like to enquire about ${product.name.en}. Please advise availability, origin, packing and indicative price.`
    : `Halo PT Svee International, saya ingin bertanya tentang ${product.name.id}. Mohon informasikan ketersediaan, asal, kemasan dan indikasi harga.`;

  return (
    <article className="group bg-white border border-[#ede8e0] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden bg-[#f9f6f1] relative">
        <img
          src={image}
          alt={product.name[language]}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#E85E00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              {language === 'en' ? 'Priority' : 'Prioritas'}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 space-y-4">
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E85E00]">
            {category?.name[language] ?? product.categoryId}
          </span>
          <h3 className="text-base font-semibold text-[#1A4A9E] leading-snug">
            {product.name[language]}
          </h3>
        </div>

        <div className="space-y-2.5 text-xs">
          <div>
            <p className="font-bold uppercase text-[#1A4A9E]/50 mb-0.5">{language === 'en' ? 'Typical use' : 'Kegunaan tipikal'}</p>
            <p className="text-[#4a5568] leading-relaxed">{typicalUse(product, language)}</p>
          </div>
          <div>
            <p className="font-bold uppercase text-[#1A4A9E]/50 mb-0.5">{language === 'en' ? 'Origin' : 'Asal'}</p>
            <p className="text-[#4a5568] leading-relaxed">{origin}</p>
          </div>
          {spec && (
            <div className="border-t border-[#ede8e0] pt-2.5">
              <p className="text-[#6b7280] leading-relaxed">{spec}</p>
            </div>
          )}
        </div>

        <div className="flex gap-2 pt-1">
          <Link href={productDetailPath(product)} className="flex-1">
            <button className="w-full flex items-center justify-center gap-1.5 py-2 px-3 border border-[#1A4A9E] text-[#1A4A9E] hover:bg-[#1A4A9E] hover:text-white text-xs font-semibold rounded-lg transition-all">
              {language === 'en' ? 'Details' : 'Detail'}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </Link>
          <a href={getWhatsAppUrl(language, waMsg)} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#2E7D55] hover:bg-[#246444] text-white text-xs font-semibold rounded-lg transition-all">
              <MessageCircle className="h-3.5 w-3.5" />
              {language === 'en' ? 'WhatsApp' : 'WhatsApp'}
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  const { language } = useI18n();
  const overviewCategories = overviewCategoryIds
    .map(id => categories.find(category => category.id === id))
    .filter((category): category is ProductCategory => Boolean(category));
  const priorityProducts = priorityProductIds
    .map(id => products.find(product => product.id === id))
    .filter((product): product is Product => Boolean(product));

  const waMsg = language === 'en'
    ? 'Hello PT Svee International, I need help sourcing agro commodities for Indonesia.'
    : 'Halo PT Svee International, saya membutuhkan bantuan sourcing komoditas agro untuk Indonesia.';

  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-12 md:py-16 bg-[#1A4A9E] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Package className="h-3.5 w-3.5 text-[#E85E00]" />
              <span className="text-xs font-semibold text-white/90">
                {language === 'en' ? 'Commodity Catalogue' : 'Katalog Komoditas'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display leading-[1.1] text-white mb-5">
              {language === 'en' ? 'Agro Commodities for Indonesian Buyers' : 'Komoditas Agro untuk Pembeli Indonesia'}
            </h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed mb-7">
              {language === 'en'
                ? 'Browse key product categories first, then open a category for the full product list. PT Svee International helps Indonesian buyers check availability, origin, packing and documents before quotation.'
                : 'Lihat kategori produk utama terlebih dahulu, lalu buka kategori untuk daftar produk lengkap. PT Svee International membantu pembeli Indonesia memeriksa ketersediaan, asal, kemasan dan dokumen sebelum penawaran.'}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              {(language === 'en'
                ? ['Import support', 'Commodity sourcing', 'Supply coordination']
                : ['Dukungan impor', 'Sourcing komoditas', 'Koordinasi pasokan']).map(item => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2E7D55] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 md:py-12 bg-[#f9f6f1]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-3">{language === 'en' ? 'Product categories' : 'Kategori produk'}</p>
              <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E]">
                {language === 'en' ? 'Choose a Category' : 'Pilih Kategori'}
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {overviewCategories.map(category => (
              <CategoryOverviewCard key={category.id} category={category} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* Priority Products */}
      <section className="py-10 md:py-12 bg-white border-t border-[#ede8e0]">
        <div className="site-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-[#f9f6f1] rounded-2xl mb-4">
              <Wheat className="h-6 w-6 text-[#E85E00]" />
            </div>
            <p className="eyebrow mb-3">{language === 'en' ? 'Priority products' : 'Produk prioritas'}</p>
            <h2 className="text-3xl md:text-4xl font-display text-[#1A4A9E]">
              {language === 'en' ? 'Common Buyer Enquiries' : 'Produk yang Sering Ditanyakan'}
            </h2>
            <p className="text-[#6b7280] text-sm mt-2 max-w-md mx-auto">
              {language === 'en'
                ? 'A short list of important commodities. Open the category pages for the full catalogue.'
                : 'Daftar pendek komoditas penting. Buka halaman kategori untuk katalog lengkap.'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {priorityProducts.map(product => (
              <ProductCatalogCard key={product.id} product={product} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-[#1A4A9E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative site-container text-center max-w-2xl mx-auto z-10">
          <p className="eyebrow text-[#E85E00] mb-3">{language === 'en' ? 'Send enquiry' : 'Kirim pertanyaan'}</p>
          <h2 className="text-3xl font-display text-white mb-4">
            {language === 'en' ? 'Need a Specific Product, Grade or Origin?' : 'Butuh Produk, Grade atau Asal Tertentu?'}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-7">
            {language === 'en'
              ? 'Share the product name, quantity, destination and any target specification. We will check available options and respond with practical next steps.'
              : 'Kirim nama produk, kuantitas, tujuan dan target spesifikasi jika ada. Kami akan memeriksa opsi yang tersedia dan memberi langkah berikutnya.'}
          </p>
          <a href={getWhatsAppUrl(language, waMsg)} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-xl transition-all shadow-[0_4px_20px_rgba(46,125,85,0.3)]">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

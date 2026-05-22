import { useI18n } from '@/lib/i18n';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { contentImages } from '@/data/media';
import { getWhatsAppUrl } from '@/components/WhatsAppFAB';
import { ArrowRight, CheckCircle2, MessageCircle, Package, Wheat } from 'lucide-react';
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
      <article className="group bg-white border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden h-full">
        <div className="aspect-[16/10] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={category.name[language]}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug text-foreground">{category.name[language]}</h3>
            <Badge variant="secondary" className="rounded-sm shrink-0">
              {count}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {category.description[language]}
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            {language === 'en' ? 'View category' : 'Lihat kategori'}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    <article className="group bg-white border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={product.name[language]}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5 md:p-6 space-y-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="rounded-sm text-xs font-medium">
            {category?.name[language] ?? product.categoryId}
          </Badge>
          <h3 className="text-xl font-semibold text-foreground leading-snug">
            {product.name[language]}
          </h3>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <p className="text-[11px] font-semibold uppercase text-primary">Typical use</p>
            <p className="text-muted-foreground leading-relaxed">{typicalUse(product, language)}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase text-primary">Origin / source</p>
            <p className="text-muted-foreground leading-relaxed">{origin}</p>
          </div>
          {spec && (
            <div className="border-t border-border pt-3">
              <p className="text-muted-foreground leading-relaxed">{spec}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <Link href={productDetailPath(product)} className="flex-1">
            <Button variant="outline" className="w-full gap-2">
              {language === 'en' ? 'Details' : 'Detail'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href={getWhatsAppUrl(language, waMsg)} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full gap-2 bg-[#2E7D55] text-white border-[#2E7D55]">
              <MessageCircle className="h-4 w-4" />
              {language === 'en' ? 'WhatsApp Quote' : 'Harga WhatsApp'}
            </Button>
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
      <section className="trade-section border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 editorial-eyebrow">
              <Package className="h-3.5 w-3.5" />
              {language === 'en' ? 'Commodity catalogue' : 'Katalog komoditas'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[4.25rem] font-display leading-[1] text-foreground">
              {language === 'en' ? 'Agro commodities for Indonesian buyers' : 'Komoditas agro untuk pembeli Indonesia'}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {language === 'en'
                ? 'Browse key product categories first, then open a category for the full product list. PT Svee International helps Indonesian buyers check availability, origin, packing and documents before quotation.'
                : 'Lihat kategori produk utama terlebih dahulu, lalu buka kategori untuk daftar produk lengkap. PT Svee International membantu pembeli Indonesia memeriksa ketersediaan, asal, kemasan dan dokumen sebelum penawaran.'}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {(language === 'en'
                ? ['Import support', 'Commodity sourcing', 'Supply coordination']
                : ['Dukungan impor', 'Sourcing komoditas', 'Koordinasi pasokan']).map(item => (
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="editorial-eyebrow mb-2">
                {language === 'en' ? 'Product categories' : 'Kategori produk'}
              </p>
              <h2 className="text-3xl md:text-5xl font-display leading-tight">
                {language === 'en' ? 'Choose a category to browse deeper' : 'Pilih kategori untuk melihat produk lengkap'}
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

      <section className="py-14 md:py-16 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-8 md:gap-12 items-start">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center bg-secondary text-primary">
                <Wheat className="h-6 w-6" />
              </div>
              <div>
                <p className="editorial-eyebrow mb-2">
                  {language === 'en' ? 'Priority products' : 'Produk prioritas'}
                </p>
                <h2 className="text-3xl md:text-5xl font-display leading-tight">
                  {language === 'en' ? 'Common buyer enquiries' : 'Produk yang sering ditanyakan'}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'A short list of important commodities. Open the category pages for the full catalogue.'
                  : 'Daftar pendek komoditas penting. Buka halaman kategori untuk katalog lengkap.'}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {priorityProducts.map(product => (
                <ProductCatalogCard key={product.id} product={product} language={language} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center space-y-5">
          <p className="editorial-eyebrow">
            {language === 'en' ? 'Send enquiry' : 'Kirim pertanyaan'}
          </p>
          <h2 className="text-3xl md:text-5xl font-display leading-tight">
            {language === 'en'
              ? 'Need a specific product, grade or origin?'
              : 'Butuh produk, grade atau asal tertentu?'}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {language === 'en'
              ? 'Share the product name, quantity, destination and any target specification. We will check available options and respond with practical next steps.'
              : 'Kirim nama produk, kuantitas, tujuan dan target spesifikasi jika ada. Kami akan memeriksa opsi yang tersedia dan memberi langkah berikutnya.'}
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

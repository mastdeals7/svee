import { Link, useLocation } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { ChevronDown, Globe, Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoUrl from '@assets/logo.png';

const WA_NUMBER = '6281510551111';
const WA_MSG_EN = 'Hello PT Svee International, I would like to inquire about your agricultural products.';
const WA_MSG_ID = 'Halo PT Svee International, saya ingin menanyakan mengenai produk pertanian Anda.';

function waUrl(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function WaIcon({ cls = 'h-4 w-4' }: { cls?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cls}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useI18n();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [location]);

  const toggleLanguage = () => setLanguage(language === 'en' ? 'id' : 'en');

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products'), hasDropdown: true },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const productLinks = language === 'en' ? [
    { path: '/products/animal-feed-ingredients', label: 'Animal Feed Ingredients', icon: '🌾' },
    { path: '/products/grains-corn-products', label: 'Grains & Corn Products', icon: '🌽' },
    { path: '/products/rice-milled-products', label: 'Rice & Milled Products', icon: '🍚' },
    { path: '/products/oilseeds-kernels', label: 'Oilseeds & Kernels', icon: '🥜' },
    { path: '/products/pulses-beans', label: 'Pulses & Beans', icon: '🫘' },
    { path: '/products/spices', label: 'Spices', icon: '🌶️' },
    { path: '/products/food-ingredients-sweeteners', label: 'Food Ingredients', icon: '🍯' },
    { path: '/products/edible-oils', label: 'Edible Oils', icon: '🫙' },
    { path: '/products/fertilizers', label: 'Fertilizers', icon: '🌱' },
  ] : [
    { path: '/products/animal-feed-ingredients', label: 'Bahan Baku Pakan Ternak', icon: '🌾' },
    { path: '/products/grains-corn-products', label: 'Produk Jagung & Biji-bijian', icon: '🌽' },
    { path: '/products/rice-milled-products', label: 'Produk Beras & Olahan', icon: '🍚' },
    { path: '/products/oilseeds-kernels', label: 'Biji Minyak & Kernel', icon: '🥜' },
    { path: '/products/pulses-beans', label: 'Kacang-kacangan & Polong', icon: '🫘' },
    { path: '/products/spices', label: 'Rempah-rempah', icon: '🌶️' },
    { path: '/products/food-ingredients-sweeteners', label: 'Bahan Pangan', icon: '🍯' },
    { path: '/products/edible-oils', label: 'Minyak Goreng', icon: '🫙' },
    { path: '/products/fertilizers', label: 'Pupuk', icon: '🌱' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location === path;
    return location.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Top Contact Strip ── */}
      <div className="bg-[#0B2245] text-white text-[11px] py-2 hidden sm:block">
        <div className="site-container flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 flex-wrap">
            <a href="tel:+622165832426"
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <Phone className="h-3 w-3 flex-shrink-0" />
              +62 21 658 32426
            </a>
            <a href="mailto:info@sveeint.com"
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <Mail className="h-3 w-3 flex-shrink-0" />
              info@sveeint.com
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-white/50">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              Jakarta Utara, Indonesia
            </span>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors font-semibold"
            data-testid="topbar-button-language">
            <Globe className="h-3 w-3" />
            {language === 'en' ? 'Bahasa Indonesia' : 'English'}
          </button>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(11,34,69,0.18)] border-b border-[#e8e2d9]'
          : 'bg-white/95 backdrop-blur-sm border-b border-[#ede8e0]'
      }`}>
        <div className="site-container">
          <div className="flex items-center justify-between h-16 md:h-[70px] gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" data-testid="link-home">
              <img src={logoUrl} alt="PT Svee International" className="h-9 md:h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path} className="relative group">
                    <Link href={item.path}>
                      <button
                        className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                          isActive(item.path)
                            ? 'text-[#0B2245] bg-[#f0ebe3]'
                            : 'text-[#4a5568] hover:text-[#0B2245] hover:bg-[#f7f3ed]'
                        }`}
                        data-testid="link-products"
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 duration-200" />
                      </button>
                    </Link>
                    {/* Mega dropdown */}
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-2 w-80 z-50">
                      <div className="bg-white border border-[#e8e2d9] rounded-xl shadow-[0_20px_60px_-20px_rgba(11,34,69,0.25)] overflow-hidden">
                        <div className="bg-[#0B2245] px-4 py-3">
                          <Link href="/products">
                            <span className="text-sm font-semibold text-white hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-2">
                              {language === 'en' ? 'All Product Categories' : 'Semua Kategori Produk'}
                              <ChevronRight className="h-3.5 w-3.5" />
                            </span>
                          </Link>
                        </div>
                        <div className="p-2">
                          {productLinks.map(link => (
                            <Link key={link.path} href={link.path}>
                              <span className="flex items-center gap-2.5 px-3 py-2 text-sm text-[#4a5568] hover:text-[#0B2245] hover:bg-[#f7f3ed] rounded-lg cursor-pointer transition-colors">
                                <span className="text-base leading-none">{link.icon}</span>
                                {link.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.path} href={item.path}>
                    <button
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                        isActive(item.path)
                          ? 'text-[#0B2245] bg-[#f0ebe3]'
                          : 'text-[#4a5568] hover:text-[#0B2245] hover:bg-[#f7f3ed]'
                      }`}
                      data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </button>
                  </Link>
                )
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={toggleLanguage}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-[#4a5568] hover:text-[#0B2245] hover:bg-[#f7f3ed] rounded-lg transition-colors"
                data-testid="button-language-toggle">
                <Globe className="h-3.5 w-3.5" />
                {language === 'en' ? 'ID' : 'EN'}
              </button>

              <a href={waUrl(language === 'en' ? WA_MSG_EN : WA_MSG_ID)}
                target="_blank" rel="noopener noreferrer"
                className="hidden md:flex"
                data-testid="button-whatsapp-header">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
                  <WaIcon />
                  WhatsApp
                </button>
              </a>

              <button
                className="lg:hidden p-2 rounded-lg hover:bg-[#f7f3ed] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu-toggle">
                {mobileMenuOpen ? <X className="h-5 w-5 text-[#0B2245]" /> : <Menu className="h-5 w-5 text-[#0B2245]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#ede8e0] bg-white">
            <div className="site-container py-4 space-y-1">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path}>
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#4a5568] hover:text-[#0B2245] hover:bg-[#f7f3ed] transition-colors">
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {productsOpen && (
                      <div className="pl-4 mt-1 space-y-0.5 border-l-2 border-[#C8922A] ml-3">
                        <Link href="/products">
                          <span className="block px-3 py-2 text-sm font-semibold text-[#0B2245] hover:bg-[#f7f3ed] rounded-lg cursor-pointer transition-colors">
                            {language === 'en' ? 'All Categories' : 'Semua Kategori'}
                          </span>
                        </Link>
                        {productLinks.map(link => (
                          <Link key={link.path} href={link.path}>
                            <span className="flex items-center gap-2 px-3 py-2 text-sm text-[#4a5568] hover:text-[#0B2245] hover:bg-[#f7f3ed] rounded-lg cursor-pointer transition-colors">
                              <span className="text-sm">{link.icon}</span>
                              {link.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.path} href={item.path}>
                    <button
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-[#0B2245] bg-[#f0ebe3]'
                          : 'text-[#4a5568] hover:text-[#0B2245] hover:bg-[#f7f3ed]'
                      }`}
                      data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.label}
                    </button>
                  </Link>
                )
              ))}
              <div className="pt-3 flex gap-2 border-t border-[#ede8e0]">
                <a href={waUrl(language === 'en' ? WA_MSG_EN : WA_MSG_ID)}
                  target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#2E7D55] text-white text-sm font-semibold rounded-lg transition-colors"
                    data-testid="mobile-button-whatsapp">
                    <WaIcon />
                    WhatsApp
                  </button>
                </a>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-4 py-2.5 border border-[#e8e2d9] rounded-lg text-sm font-semibold text-[#4a5568] hover:bg-[#f7f3ed] transition-colors"
                  data-testid="mobile-button-language">
                  <Globe className="h-4 w-4" />
                  {language === 'en' ? 'ID' : 'EN'}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1">
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="relative bg-[#0B2245] text-white overflow-hidden">

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
          aria-hidden="true" />

        {/* Gold top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C8922A] to-transparent" />

        <div className="relative site-container pt-12 pb-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand column */}
            <div className="space-y-5 lg:col-span-1">
              <img src={logoUrl} alt="PT Svee International" className="h-10 w-auto brightness-0 invert" />
              <p className="text-sm text-white/60 leading-relaxed">
                {language === 'en'
                  ? 'Indonesia-based agro commodity import and sourcing support since 2001. Helping Indonesian buyers source from India and other reliable origin markets.'
                  : 'Dukungan impor dan sourcing komoditas agro berbasis Indonesia sejak 2001. Membantu pembeli Indonesia sourcing dari India dan pasar asal terpercaya lainnya.'}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="h-0.5 w-8 bg-[#C8922A] rounded-full" />
                <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Est. 2001</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Soybean Meal', 'Corn Grits', 'Rice DDGS', 'Indian Spices', 'DAP Fertilizer'].map(tag => (
                  <span key={tag}
                    className="text-[10px] bg-white/8 text-white/45 px-2.5 py-1 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-0.5 w-5 bg-[#C8922A] rounded-full" />
                <h3 className="font-semibold text-xs uppercase tracking-wider text-white/70">{t('footer.company')}</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { href: '/about', label: t('nav.about') },
                  { href: '/profile', label: t('nav.profile') },
                  { href: '/services', label: t('nav.services') },
                  { href: '/contact', label: t('nav.contact') },
                ].map(item => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group">
                        <ChevronRight className="h-3 w-3 text-[#C8922A] opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products links */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-0.5 w-5 bg-[#C8922A] rounded-full" />
                <h3 className="font-semibold text-xs uppercase tracking-wider text-white/70">{t('footer.products')}</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { href: '/products/animal-feed-ingredients', label: language === 'en' ? 'Animal Feed Ingredients' : 'Bahan Baku Pakan Ternak' },
                  { href: '/products/grains-corn-products', label: language === 'en' ? 'Grains & Corn Products' : 'Produk Jagung & Biji-bijian' },
                  { href: '/products/rice-milled-products', label: language === 'en' ? 'Rice & Milled Products' : 'Produk Beras & Olahan' },
                  { href: '/products/oilseeds-kernels', label: language === 'en' ? 'Oilseeds & Kernels' : 'Biji Minyak & Kernel' },
                  { href: '/products/pulses-beans', label: language === 'en' ? 'Pulses & Beans' : 'Kacang-kacangan & Polong' },
                  { href: '/products/spices', label: language === 'en' ? 'Spices' : 'Rempah-rempah' },
                ].map(item => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group">
                        <ChevronRight className="h-3 w-3 text-[#C8922A] opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-0.5 w-5 bg-[#C8922A] rounded-full" />
                <h3 className="font-semibold text-xs uppercase tracking-wider text-white/70">{t('footer.contact')}</h3>
              </div>
              <ul className="space-y-3.5">
                <li className="flex gap-2.5 text-white/55 text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#C8922A]" />
                  <span className="leading-relaxed">Ruko Sunter Terrace Blok C No 12,<br />Jakarta Utara 14350, Indonesia</span>
                </li>
                <li>
                  <a href="tel:+622165832426" className="flex gap-2.5 text-white/55 text-sm hover:text-white transition-colors">
                    <Phone className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#C8922A]" />
                    +62 21 658 32426
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${WA_NUMBER}`} className="flex gap-2.5 text-white/55 text-sm hover:text-white transition-colors">
                    <WaIcon cls="h-4 w-4 flex-shrink-0 mt-0.5 text-[#C8922A]" />
                    +62 815-1055-1111
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sveeint.com" className="flex gap-2.5 text-white/55 text-sm hover:text-white transition-colors">
                    <Mail className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#C8922A]" />
                    info@sveeint.com
                  </a>
                </li>
                <li className="pt-2">
                  <a href={waUrl(language === 'en' ? WA_MSG_EN : WA_MSG_ID)}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2E7D55] hover:bg-[#246444] text-white text-sm px-4 py-2.5 rounded-lg font-semibold shadow-sm transition-colors"
                    data-testid="footer-button-whatsapp">
                    <WaIcon />
                    {language === 'en' ? 'Chat on WhatsApp' : 'Chat WhatsApp'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/35">
            <p>
              © {new Date().getFullYear()} PT Svee International.{' '}
              <span className="text-[#C8922A]/60">{t('footer.rights')}.</span>
            </p>
            <p className="text-center text-white/30">
              {language === 'en'
                ? 'Agro Commodity Import & Sourcing Support — Jakarta, Indonesia'
                : 'Dukungan Impor & Sourcing Komoditas Agro — Jakarta, Indonesia'}
            </p>
            <button onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white/35 hover:text-white/70 transition-colors"
              data-testid="footer-button-language-toggle">
              <Globe className="h-3.5 w-3.5" />
              {language === 'en' ? 'Bahasa Indonesia' : 'English'}
            </button>
          </div>
        </div>
      </footer>

      <WhatsAppFAB />
    </div>
  );
}

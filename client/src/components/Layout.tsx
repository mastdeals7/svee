import { Link, useLocation } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { ChevronDown, Globe, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoUrl from '@assets/logo.png';

const WA_NUMBER = '6281510551111';
const WA_MSG_EN = 'Hello PT Svee International, I would like to inquire about your agricultural products.';
const WA_MSG_ID = 'Halo PT Svee International, saya ingin menanyakan mengenai produk pertanian Anda.';
const WA_MSG_FOOTER_EN = 'Hello PT Svee International, I would like to inquire about your products.';
const WA_MSG_FOOTER_ID = 'Halo PT Svee International, saya ingin menanyakan mengenai produk Anda.';

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === 'en' ? 'id' : 'en');

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/profile', label: t('nav.profile') },
    { path: '/products', label: t('nav.products') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const productLinks = language === 'en'
    ? [
        { path: '/products/animal-feed-ingredients', label: 'Animal Feed Ingredients' },
        { path: '/products/grains-corn-products', label: 'Grains & Corn Products' },
        { path: '/products/rice-milled-products', label: 'Rice & Milled Products' },
        { path: '/products/oilseeds-kernels', label: 'Oilseeds & Kernels' },
        { path: '/products/pulses-beans', label: 'Pulses & Beans' },
        { path: '/products/spices', label: 'Spices' },
        { path: '/products/food-ingredients-sweeteners', label: 'Food Ingredients' },
        { path: '/products/edible-oils', label: 'Edible Oils' },
        { path: '/products/fertilizers', label: 'Fertilizers' },
      ]
    : [
        { path: '/products/animal-feed-ingredients', label: 'Bahan Baku Pakan Ternak' },
        { path: '/products/grains-corn-products', label: 'Produk Jagung & Biji-bijian' },
        { path: '/products/rice-milled-products', label: 'Produk Beras & Olahan' },
        { path: '/products/oilseeds-kernels', label: 'Biji Minyak & Kernel' },
        { path: '/products/pulses-beans', label: 'Kacang-kacangan & Polong' },
        { path: '/products/spices', label: 'Rempah-rempah' },
        { path: '/products/food-ingredients-sweeteners', label: 'Bahan Pangan' },
        { path: '/products/edible-oils', label: 'Minyak Goreng' },
        { path: '/products/fertilizers', label: 'Pupuk' },
      ];

  const isActive = (path: string) => {
    if (path === '/') return location === path;
    return location.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Top Contact Bar ── */}
      <div className="bg-[#0F2F5F] text-white text-[11px] py-1.5 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <a href="tel:+622165832426"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <Phone className="h-3 w-3 flex-shrink-0" />
              +62 21 658 32426
            </a>
            <a href="mailto:info@sveeint.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <Mail className="h-3 w-3 flex-shrink-0" />
              info@sveeint.com
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-white/60">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              Jakarta Utara, Indonesia
            </span>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors font-medium"
            data-testid="topbar-button-language">
            <Globe className="h-3 w-3" />
            {language === 'en' ? 'Bahasa Indonesia' : 'English'}
          </button>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? 'bg-background/96 shadow-sm border-border'
          : 'bg-background/92 border-border/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 gap-4">

            <Link href="/" className="flex items-center hover-elevate active-elevate-2 rounded-md px-1.5 py-1 -ml-1.5 flex-shrink-0" data-testid="link-home">
              <img src={logoUrl} alt="PT Svee International" className="h-9 md:h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navItems.map((item) => (
                item.path === '/products' ? (
                  <div key={item.path} className="relative group">
                    <Link href={item.path}>
                      <Button
                        variant={isActive(item.path) ? 'secondary' : 'ghost'}
                        size="sm"
                        className={`text-sm font-medium transition-colors gap-1.5 ${isActive(item.path) ? 'text-primary font-semibold bg-secondary border-b border-accent rounded-none' : 'text-muted-foreground hover:text-foreground'}`}
                        data-testid="link-products"
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 z-50">
                      <div className="bg-white border border-border shadow-lg p-2">
                        <Link href="/products">
                          <span className="block px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary cursor-pointer">
                            {language === 'en' ? 'All categories' : 'Semua kategori'}
                          </span>
                        </Link>
                        <div className="h-px bg-border my-1" />
                        {productLinks.map(link => (
                          <Link key={link.path} href={link.path}>
                            <span className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary cursor-pointer">
                              {link.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant={isActive(item.path) ? 'secondary' : 'ghost'}
                      size="sm"
                      className={`text-sm font-medium transition-colors ${isActive(item.path) ? 'text-primary font-semibold bg-secondary border-b border-accent rounded-none' : 'text-muted-foreground hover:text-foreground'}`}
                      data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button variant="outline" size="sm" onClick={toggleLanguage}
                className="gap-1.5 hidden md:flex" data-testid="button-language-toggle">
                <Globe className="h-3.5 w-3.5" />
                <span className="font-semibold">{language === 'en' ? 'ID' : 'EN'}</span>
              </Button>

              <a href={waUrl(language === 'en' ? WA_MSG_EN : WA_MSG_ID)}
                target="_blank" rel="noopener noreferrer"
                className="hidden md:flex" data-testid="button-whatsapp-header">
                  <Button size="sm" className="gap-2 bg-[#2E7D55] text-white border-[#2E7D55]">
                  <WaIcon />
                  WhatsApp
                </Button>
              </a>

              <Button variant="ghost" size="icon" className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu-toggle">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t py-4 space-y-1">
              {navItems.map((item) => (
                item.path === '/products' ? (
                  <div key={item.path} className="space-y-1">
                    <Link href="/products">
                      <Button
                        variant={isActive(item.path) ? 'secondary' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-link-products">
                        {item.label}
                      </Button>
                    </Link>
                    <div className="pl-4 border-l border-border space-y-1">
                      {productLinks.map(link => (
                        <Link key={link.path} href={link.path}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-muted-foreground text-sm"
                            onClick={() => setMobileMenuOpen(false)}>
                            {link.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant={isActive(item.path) ? 'secondary' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.label}
                    </Button>
                  </Link>
                )
              ))}
              <div className="pt-2 flex gap-2">
                <a href={waUrl(language === 'en' ? WA_MSG_EN : WA_MSG_ID)}
                  target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full gap-2 bg-[#2E7D55] text-white border-[#2E7D55]"
                    data-testid="mobile-button-whatsapp">
                    <WaIcon />
                    WhatsApp
                  </Button>
                </a>
                <Button variant="outline" size="default" onClick={toggleLanguage}
                  className="gap-1.5" data-testid="mobile-button-language">
                  <Globe className="h-4 w-4" />
                  {language === 'en' ? 'ID' : 'EN'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1">
        {children}
      </main>

      {/* ── Footer — Primary Blue ── */}
      <footer className="relative bg-[#0B2245] text-white mt-8 overflow-hidden">

        {/* Logo watermark — large ghost in the background */}
        <div className="pointer-events-none absolute right-0 bottom-0 h-[340px] w-[340px] opacity-[0.06] select-none"
          aria-hidden="true">
          <img src={logoUrl} alt="" className="w-full h-full object-contain" />
        </div>

        {/* Orange top accent stripe */}
        <div className="h-px w-full bg-white/15" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

            {/* Brand column */}
            <div className="space-y-4 lg:col-span-1">
              <img src={logoUrl} alt="PT Svee International" className="h-10 w-auto brightness-0 invert" />
              <p className="text-sm text-white/65 leading-relaxed">
                {language === 'en'
                  ? 'Indonesia-based agro commodity import and sourcing support since 2001. Helping Indonesian buyers source from India and other reliable origin markets.'
                  : 'Dukungan impor dan sourcing komoditas agro berbasis Indonesia sejak 2001. Membantu pembeli Indonesia sourcing dari India dan pasar asal terpercaya lainnya.'}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Soybean Meal', 'Rice DDGS', 'Corn Grits', 'Rempah India', 'Pupuk DAP'].map(tag => (
                  <span key={tag}
                    className="text-[10px] bg-white/10 text-white/55 px-2 py-0.5 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-[#FF6B35] rounded-full" />
                <h3 className="font-semibold text-xs uppercase tracking-wider text-white/80">{t('footer.company')}</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  { href: '/about', label: t('nav.about') },
                  { href: '/profile', label: t('nav.profile') },
                  { href: '/services', label: t('nav.services') },
                  { href: '/contact', label: t('nav.contact') },
                ].map(item => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products links */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-[#FF6B35] rounded-full" />
                <h3 className="font-semibold text-xs uppercase tracking-wider text-white/80">{t('footer.products')}</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  { href: '/products/animal-feed', label: language === 'en' ? 'Animal Feed Ingredients' : 'Bahan Baku Pakan Ternak' },
                  { href: '/products/grains', label: language === 'en' ? 'Grains & Corn Products' : 'Produk Jagung & Biji-bijian' },
                  { href: '/products/rice', label: language === 'en' ? 'Rice & Milled Products' : 'Produk Beras & Olahan' },
                  { href: '/products/oilseeds', label: language === 'en' ? 'Oilseeds & Kernels' : 'Biji Minyak & Kernel' },
                  { href: '/products/pulses', label: language === 'en' ? 'Pulses & Beans' : 'Kacang-kacangan & Polong' },
                  { href: '/products/spices', label: language === 'en' ? 'Spices (India)' : 'Rempah-rempah (India)' },
                ].map(item => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-[#FF6B35] rounded-full" />
                <h3 className="font-semibold text-xs uppercase tracking-wider text-white/80">{t('footer.contact')}</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2.5 text-white/60 text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF6B35]" />
                  <span>Ruko Sunter Terrace Blok C No 12,<br />Jl. Danau Sunter Utara Kav. No. 60,<br />Jakarta Utara 14350, Indonesia</span>
                </li>
                <li>
                  <a href="tel:+622165832426" className="flex gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                    <Phone className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF6B35]" />
                    +62 21 658 32426
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${WA_NUMBER}`} className="flex gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                    <WaIcon cls="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF6B35]" />
                    +62 815-1055-1111
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sveeint.com" className="flex gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                    <Mail className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF6B35]" />
                    info@sveeint.com
                  </a>
                </li>
                <li>
                  <a href="mailto:ptsvee@gmail.com" className="flex gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                    <Mail className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF6B35]" />
                    ptsvee@gmail.com
                  </a>
                </li>
                <li className="pt-1">
                  <a href={waUrl(language === 'en' ? WA_MSG_FOOTER_EN : WA_MSG_FOOTER_ID)}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2E7D55] text-white text-sm px-4 py-2 rounded-md font-medium shadow-sm"
                    data-testid="footer-button-whatsapp">
                    <WaIcon />
                    {language === 'en' ? 'Chat on WhatsApp' : 'Chat WhatsApp'}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/15 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} PT Svee International.{' '}
              <span className="text-[#FF6B35]/70">{t('footer.rights')}.</span>
            </p>
            <p className="text-center">
              {language === 'en'
                ? 'Agro Commodity Import & Sourcing Support — Jakarta, Indonesia'
                : 'Dukungan Impor & Sourcing Komoditas Agro — Jakarta, Indonesia'}
            </p>
            <button onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors"
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

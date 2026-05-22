// ─────────────────────────────────────────────────────────────────────────────
// SITE IMAGES — all images live in: client/public/images/
//
// To replace an image, drop the new file into the correct subfolder using the
// SAME filename listed below. The site picks it up automatically on next reload.
//
// Folder structure:
//   /images/hero/          → Hero/banner images (1600×900 px, <300 KB)
//   /images/about/         → About section images (1000×700 px, <200 KB)
//   /images/categories/    → Product category cards (800×600 px, <150 KB)
//   /images/products/      → Individual product images (800×600 px, <150 KB)
//   /images/banners/       → CTA and section backgrounds (1400×800 px, <250 KB)
//   /images/icons/         → Logo and icon files (PNG for transparency)
// ─────────────────────────────────────────────────────────────────────────────

export const heroImages = {
  main:      '/images/hero/home-hero.jpg',
  secondary: '/images/hero/products-hero.jpg',
  tertiary:  '/images/hero/home-hero.jpg',
  contact:   '/images/hero/products-hero.jpg',
  about:     '/images/hero/about-hero.jpg',
  food:      '/images/hero/hero-food.jpg',
};

export const sectionBackgrounds = {
  trust:    '/images/banners/cta-trust.jpg',
  services: '/images/banners/cta-services.jpg',
  story:    '/images/banners/cta-story.jpg',
  port:     '/images/banners/port-shipment.jpg',
  warehouse: '/images/banners/warehouse.jpg',
};

export const contentImages = {
  about:    '/images/about/team.jpg',
  product1: '/images/categories/spices.jpg',
  product2: '/images/categories/grains.jpg',
  product3: '/images/categories/oilseeds.jpg',
  banner1:  '/images/banners/spices.jpg',
  banner2:  '/images/banners/grains.jpg',
  banner3:  '/images/banners/oilseeds.jpg',
};

export const categoryImages: Record<string, string> = {
  'animal-feed':      '/images/categories/grains.jpg',
  'grains':           '/images/categories/grains.jpg',
  'rice':             '/images/categories/grains.jpg',
  'oilseeds':         '/images/categories/oilseeds.jpg',
  'pulses':           '/images/categories/oilseeds.jpg',
  'specialty-flours': '/images/categories/grains.jpg',
  'spices':           '/images/categories/spices.jpg',
  'food-ingredients': '/images/categories/spices.jpg',
  'edible-oils':      '/images/categories/oilseeds.jpg',
  'fertilizer':       '/images/categories/grains.jpg',
};

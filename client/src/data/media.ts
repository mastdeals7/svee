// ─────────────────────────────────────────────────────────────────────────────
// SITE IMAGES — local images live in client/public/images/
//
// Images marked with "→ UPLOAD" are placeholders waiting for your files.
// Drop the file into the listed path and the site will use it automatically.
//
// Files you need to upload:
//   /images/hero/home-hero.jpg         → main homepage hero
//   /images/hero/about-hero.jpg        → about page hero
//   /images/hero/products-hero.jpg     → products page hero
//   /images/hero/hero-food.jpg         → food section image
//   /images/about/team.jpg             → team / about image
//   /images/banners/port-shipment.jpg  → port/shipment banner
//   /images/banners/warehouse.jpg      → warehouse banner
//   /images/banners/cta-trust.jpg      → trust CTA banner
//   /images/banners/cta-services.jpg   → services CTA banner
//   /images/banners/cta-story.jpg      → story CTA banner
//   /images/categories/grains.jpg      → ✓ already uploaded
//   /images/categories/oilseeds.jpg    → ✓ already uploaded
//   /images/categories/spices.jpg      → ✓ already uploaded
//   /images/icons/logo.png             → ✓ already uploaded
// ─────────────────────────────────────────────────────────────────────────────

// Temporary Pexels placeholders — replace with your own uploads above
const PH = {
  grain:     'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1600',
  spice:     'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600',
  oilseed:   'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1600',
  port:      'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1600',
  warehouse: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1600',
  team:      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const heroImages = {
  main:      '/images/hero/home-hero.jpg',      // → UPLOAD your hero image here
  secondary: '/images/hero/products-hero.jpg',  // → UPLOAD
  tertiary:  '/images/hero/home-hero.jpg',
  contact:   PH.port,
  about:     '/images/hero/about-hero.jpg',     // → UPLOAD
  food:      '/images/hero/hero-food.jpg',      // → UPLOAD
};

export const sectionBackgrounds = {
  trust:     '/images/banners/cta-trust.jpg',     // → UPLOAD
  services:  '/images/banners/cta-services.jpg',  // → UPLOAD
  story:     '/images/banners/cta-story.jpg',     // → UPLOAD
  port:      '/images/banners/port-shipment.jpg', // → UPLOAD
  warehouse: '/images/banners/warehouse.jpg',     // → UPLOAD
};

export const contentImages = {
  about:    '/images/about/team.jpg',          // → UPLOAD
  product1: '/images/categories/spices.jpg',   // ✓ uploaded
  product2: '/images/categories/grains.jpg',   // ✓ uploaded
  product3: '/images/categories/oilseeds.jpg', // ✓ uploaded
  banner1:  '/images/banners/spices.jpg',      // ✓ uploaded (banner-spices copy)
  banner2:  '/images/banners/grains.jpg',      // ✓ uploaded (banner-grains copy)
  banner3:  '/images/banners/oilseeds.jpg',    // ✓ uploaded (banner-oilseeds copy)
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

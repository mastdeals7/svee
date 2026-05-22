// ─────────────────────────────────────────────────────────────────────────────
// SITE IMAGES
//
// Local images live in client/public/images/ — drop replacement files there.
// Remote images use Pexels CDN (free, no key required for display).
//
// To replace any image: add a file to the correct subfolder with the same
// filename and update the path below from the Pexels URL to '/images/...'
// ─────────────────────────────────────────────────────────────────────────────

// Pexels images — agro/commodity/trade themed
const P = {
  grainField:   'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1600',
  spicesMarket: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600',
  oilseeds:     'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1600',
  port:         'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1600',
  warehouse:    'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1600',
  team:         'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
  heroFood:     'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=1600',
  maize:        'https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg?auto=compress&cs=tinysrgb&w=1600',
  trade:        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export const heroImages = {
  main:      P.grainField,
  secondary: P.maize,
  tertiary:  P.grainField,
  contact:   P.port,
  about:     P.team,
  food:      P.heroFood,
};

export const sectionBackgrounds = {
  trust:     P.trade,
  services:  P.port,
  story:     P.warehouse,
  port:      P.port,
  warehouse: P.warehouse,
};

export const contentImages = {
  about:    P.team,
  product1: '/images/categories/spices.jpg',
  product2: '/images/categories/grains.jpg',
  product3: '/images/categories/oilseeds.jpg',
  banner1:  P.spicesMarket,
  banner2:  P.grainField,
  banner3:  P.oilseeds,
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

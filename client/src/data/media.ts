// ─────────────────────────────────────────────────────────────────────────────
// SITE IMAGES — all images live in: attached_assets/images/
//
// To replace an image with a better one, drop the new file into:
//   attached_assets/images/
// …using the SAME filename listed below, then the site will pick it up
// automatically on the next reload or build.
//
// Recommended sizes:
//   Hero images     → 1600 × 900 px  (JPG/WebP, < 300 KB)
//   CTA backgrounds → 1400 × 800 px  (JPG/WebP, < 250 KB)
//   Category cards  → 800  × 800 px  (JPG/WebP, < 150 KB)
//   Content photos  → 1000 × 700 px  (JPG/WebP, < 200 KB)
// ─────────────────────────────────────────────────────────────────────────────

// Hero backgrounds
import heroHome     from '@assets/images/hero-home.jpg';
import heroAbout    from '@assets/images/hero-about.jpg';
import heroProducts from '@assets/images/hero-products.jpg';

// CTA section backgrounds (dark overlay applied on top)
import ctaTrust     from '@assets/images/cta-trust.jpg';
import ctaServices  from '@assets/images/cta-services.jpg';
import ctaStory     from '@assets/images/cta-story.jpg';

// Content / split-layout images
import aboutTeam    from '@assets/images/about-team.jpg';

// Category showcase images
import categorySpices   from '@assets/images/category-spices.jpg';
import categoryGrains   from '@assets/images/category-grains.jpg';
import categoryOilseeds from '@assets/images/category-oilseeds.jpg';

// Banner / misc images
import bannerSpices   from '@assets/images/banner-spices.jpg';
import bannerGrains   from '@assets/images/banner-grains.jpg';
import bannerOilseeds from '@assets/images/banner-oilseeds.jpg';

// Logo / branding (PNG kept for transparency)
import logoProfile from '@assets/images/logo-profile.png';

// ─────────────────────────────────────────────────────────────────────────────

export const heroImages = {
  main:      heroHome,
  secondary: heroProducts,
  tertiary:  heroHome,
  contact:   heroProducts,
  about:     heroAbout,
};

export const sectionBackgrounds = {
  trust:    ctaTrust,
  services: ctaServices,
  story:    ctaStory,
};

export const contentImages = {
  about:    aboutTeam,
  product1: categorySpices,
  product2: categoryGrains,
  product3: categoryOilseeds,
  profile:  logoProfile,
  banner1:  bannerSpices,
  banner2:  bannerGrains,
  banner3:  bannerOilseeds,
};

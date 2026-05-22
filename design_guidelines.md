# Design Guidelines: PT Svee International Website

## Design Approach

**Hybrid Strategy**: Modern B2B platform combining Stripe's professional restraint with Shopify's product showcase capabilities. Reference Alibaba/ThomasNet for B2B trading aesthetics while maintaining contemporary web standards. **Compact and professional** design with tighter spacing and concise layouts.

**Core Principles**:
- Trust and credibility through professional layout
- Modern vibrancy via strategic animations and spacing
- Content accessibility across cultures (dual-language)
- Product showcase optimization for extensive catalog
- **Compact design**: Reduced spacing and sizes for more content-dense pages

---

## Color System

**Brand Colors** (matching company logo):
- **Primary Blue**: #1E5BA8 (HSL: 214 75% 38%) - Main brand color, used for primary buttons, headers, icons
- **Accent Orange**: #FF6B35 (HSL: 16 100% 60%) - Secondary brand color, used for accents, highlights, call-to-actions
- **Neutral Grays**: Background (HSL: 0 0% 97%), Card (HSL: 0 0% 96%), Borders (HSL: 0 0% 91-95%)
- **Text Colors**: Foreground (HSL: 0 0% 9%), Muted (HSL: 0 0% 45%), Secondary

**Usage**:
- Primary blue for navigation, category icons, primary CTAs
- Accent orange for service icons, highlights, secondary CTAs
- Neutral backgrounds for cards and sections
- Subtle color backgrounds (bg-card/30) for alternating sections

---

## Typography System

**Font Stack** (Google Fonts):
- **Headings**: Inter (700, 600, 500) - modern, professional
- **Body**: Inter (400, 300) - consistent, highly readable
- **Accents**: Poppins (600) - for featured sections

**Compact Hierarchy** (reduced from original):
- Hero Headlines: text-4xl md:text-5xl lg:text-6xl, font-bold
- Section Headers: text-2xl md:text-3xl, font-semibold
- Subsections: text-xl md:text-2xl, font-medium
- Product Titles: text-base md:text-lg, font-semibold
- Body Text: text-xs md:text-sm, leading-relaxed
- Captions/Meta: text-xs, font-light

---

## Layout System

**Compact Spacing Primitives**: Tailwind units of **1.5, 2, 3, 4, 6, 8, 12** (e.g., p-3, gap-6, mb-8, py-12)

**Grid Structure**:
- Container: max-w-7xl with px-4 md:px-8
- Product grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Section padding: py-12 md:py-16 (reduced for compact design)

**Responsive Breakpoints**:
- Mobile-first approach
- Tablet: 768px (2 columns max)
- Desktop: 1024px (3-4 columns)
- Wide: 1280px+ (full layout)

---

## Component Library

**Navigation**:
- Fixed header with language toggle (EN/ID flag icons)
- Mega dropdown for Products menu (9 categories visible)
- Mobile: Hamburger with slide-in drawer
- Sticky CTA: "Request Quote" button

**Hero Section** (compact):
- Full-width hero with gradient overlay
- H1 headline + supporting text + dual CTAs
- Trust indicators: "Established 2001" stats with icons
- Height: min-h-[400px] md:min-h-[500px] (reduced for compact design)

**Product Cards** (compact):
- Product name (text-base, font-semibold)
- Brief description (text-xs, line-clamp-3)
- "View Details" button (size-sm, ghost variant)
- Featured badge (text-xs) for highlighted products
- Hover: elevation effect using hover-elevate
- Compact padding (pb-3, pt-0 spacing)

**Category Cards** (compact):
- Icon in rounded square (h-11 w-11, bg-primary/10)
- Category name (text-lg, font-semibold)
- Product count badge (text-xs, secondary variant)
- Description (text-xs, line-clamp-2)
- 3-column grid on desktop, stack on mobile
- Hover: elevation effect + icon background darkens

**Service Cards** (compact):
- Icon in rounded square (h-11 w-11, bg-accent/10)
- Service title (text-base, font-semibold)
- Description (text-xs)
- Hover: elevation effect + icon background darkens
- Compact spacing (space-y-3, pb-3)

**Content Sections**:
- Alternating image/text layouts for About/Profile pages
- max-w-prose for text content blocks
- Generous whitespace (gap-12 md:gap-16)

**Service Listings**:
- Numbered list with icons (Font Awesome for consistency)
- Expandable accordions for detailed descriptions
- 2-column layout on desktop

**Contact Components**:
- Split layout: Form (60%) + Info sidebar (40%)
- Office cards with location pins
- Google Maps integration placeholder

**Footer** (compact):
- 4-column grid: Company info (logo), Quick Links, Products, Contact
- Company logo (h-9) instead of icon
- Compact spacing (py-12, gap-6, text-xs)
- Link text reduced to text-xs
- Section headings (text-sm, font-semibold)
- Language toggle button at bottom
- Reduced top margin (mt-12 instead of mt-20)

---

## Page-Specific Layouts

**Homepage**:
1. Hero with main value proposition
2. Company intro (2-column: text + image)
3. Featured products carousel (4 items visible)
4. Product categories grid (9 cards)
5. Services overview (3 highlighted)
6. Global presence map
7. CTA section
8. Footer

**Product Category Pages**:
- Breadcrumb navigation
- Category hero banner
- Filter sidebar (desktop) / drawer (mobile)
- Product grid with pagination
- 12-16 products per page

**Product Detail Pages**:
- Image gallery (main + thumbnails)
- Product specifications table
- Benefits/Applications sections
- Related products
- Inquiry form

---

## Dual-Language Implementation

- Language toggle in top-right header (flags: 🇬🇧 🇮🇩)
- Store preference in localStorage
- All content duplicated with lang attribute
- RTL-ready spacing (though not needed for Indonesian)
- URLs: /en/ and /id/ prefixes

---

## Images Strategy

**Hero Images**:
- Homepage: Agricultural products montage or warehouse/shipping scene
- Product pages: Category-specific hero (grains field, spice market, etc.)

**Product Images**:
- High-quality product photography (minimum 800x800px)
- Consistent white/neutral backgrounds
- Lifestyle images for context where applicable

**Supporting Visuals**:
- Team/office photos for About/Profile
- Infographics for services and global network
- Office location images for Contact page

**Image Treatment**:
- Subtle border-radius (rounded-lg)
- Shadow on hover (shadow-xl)
- Loading: blur placeholder

---

## Animations (Minimal)

- Scroll-triggered fade-in for sections (intersection observer)
- Product card hover: scale-105 transition
- Navigation dropdowns: slide-down with opacity
- Page transitions: fade between routes
- NO: Parallax, complex scroll animations, loading spinners beyond necessity

---

## SEO/LLM Optimization Elements

- Semantic HTML5 (article, section, nav)
- Structured data: Organization, Product schema
- Meta descriptions per page (150-160 chars)
- Alt text for all images (descriptive)
- H1-H6 proper hierarchy
- Internal linking between related products
- Breadcrumbs for navigation clarity
- XML sitemap structure
- Fast loading (optimized images, minimal JS)

---

## Icons

**Lucide React** for all icons:
- Navigation icons (Menu, Globe, X for mobile menu)
- Category icons (Sprout, Droplet, Coffee, Flame, Wheat, Package, Zap, Armchair, Box)
- Service icons (CheckCircle2, Truck, ShieldCheck, Globe2, FileText, DollarSign, BarChart3, Settings)
- Contact icons (Phone, Mail, MapPin)
- UI icons (ArrowRight, TrendingUp, etc.)
- Icon sizes: h-5 w-5 for cards, h-4 w-4 for navigation

**Icon Colors**:
- Category icons: text-primary (blue)
- Service icons: text-accent (orange)
- Navigation/UI icons: inherit from parent or text-muted-foreground
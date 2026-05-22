# PT Svee International - Agricultural Trading Website

## Overview

PT Svee International (also trading as Svee Komoditi) is an Indonesia-based agro commodity import and sourcing company. The website is a bilingual (English/Indonesian) marketing platform built to help Indonesian buyers — feed mills, food processors, commodity importers and trading houses — source agricultural products from India and other reliable origin markets.

**Redesign History:**
- November 2025: Color scheme updated to match company logo (blue #1E5BA8, orange #FF6B35), compact professional layout
- May 2026 (v1): Premium redesign — DM Serif Display font, full SEO bilingual with origin-specific keywords, WhatsApp replacing contact form, dark footer, top contact bar, expanded 40+ product catalog
- May 2026 (v2): Comprehensive dark-section overhaul — all page body sections converted from flat white/muted to dark navy (`bg-[#0B1628]`/`bg-[#0F1E35]`). About: colored icon cards, dramatic timeline with colored nodes. Services: full dark grid + numbered process steps + dark CTA. Profile: dark split layout, dark capability cards, dark sourcing offices grid. Contact: fixed hero image, dark WhatsApp card + topics, dark "Why WhatsApp?" section. Hero min-heights increased to 52–60vh across all pages.
- May 2026 (v3): **Full strategic repositioning** — from "global agricultural exporter" to "Indonesia-focused import/sourcing broker for Indonesian buyers". Rewrote all copy, restructured 10 product categories with Animal Feed Ingredients first (SBM, DDGS, Maize Grits, Rice Grits), updated all contact details, added sourcing bridge messaging, removed exporter language ("seamless", "world-class", "global leader", Middle East expansion). Created sitemap.xml, llms.txt, llms-full.txt for SEO and AI discoverability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool

**Routing**: Wouter for lightweight client-side routing
- Home, About, Profile, Products (with category/detail views), Services, Contact pages
- Dynamic routes for product categories and individual product details

**UI Framework**: shadcn/ui component library (Radix UI primitives)
- New York theme variant with neutral color scheme
- Tailwind CSS for styling with custom design tokens
- Responsive, mobile-first approach
- Custom elevation effects (hover-elevate, active-elevate-2)

**Design System** (Updated May 2026):
- Typography: **DM Serif Display** for h1/h2 headings, **DM Sans** for body text
- **Color scheme**: Primary blue (#1E5BA8 → HSL 214 75% 38%), accent orange (#FF6B35 → HSL 16 100% 58%), background slightly blue-tinted (#F7F9FC)
- **Premium shadows**: Real box shadows using rgba values (not flat zero shadows)
- **Top contact bar**: Blue bar above header showing phone, email, location, language toggle
- **Dark footer**: Dark foreground background with Indonesia-focused product links
- **WhatsApp FAB**: Floating green WhatsApp button on every page
- Custom CSS utility: `font-display` for DM Serif Display headings
- Custom CSS utilities: `hover-elevate`, `active-elevate-2`, `premium-card`, `text-gradient`

**Internationalization**:
- Custom I18n context provider supporting English and Indonesian
- Bilingual content schema for all user-facing text
- Language toggle in header navigation AND top contact bar
- Default language: `id` (Indonesian) — `<html lang="id">`

### Strategic Positioning (May 2026 v3 — Indonesia Buyer Focus)

**Core message**: "Agro Commodity Sourcing for Indonesian Buyers"
- NOT a global exporter
- Indonesia-based import and sourcing support company
- Main buyers: feed mills, food processors, snack manufacturers, commodity importers, wholesalers, trading houses
- Primary sourcing origin: India (SBM, maize grits, groundnut kernels, spices, liquid glucose)
- Secondary origins: Myanmar (yellow maize, green moong), Vietnam (black pepper), Australia (wheat, barley)
- Practical tone: availability case by case, no guaranteed clearance, no "seamless" or "world-class" language

### SEO Architecture (May 2026 v3 — Indonesia Buyer Keywords)

**index.html** — Full bilingual SEO updated for Indonesia-buyer positioning:
- Title: "Sourcing Komoditas Agro untuk Pembeli Indonesia | Bahan Pakan, Biji-bijian, Rempah dari India"
- Meta description: SBM, maize grits, rice DDGS, kacang tanah, rempah dari India
- Meta keywords: 40+ keywords focused on Indonesian import and sourcing
- JSON-LD: Updated address, new product list (SBM, rice DDGS, maize grits, rice grits, groundnut HPS, liquid glucose), contactPoint with WhatsApp
- sitemap.xml: All 10 category pages, www.sveeint.com domain
- robots.txt: Updated to https://www.sveeint.com
- llms.txt: AI-readable company summary
- llms-full.txt: Complete product list, all contact details, trade documentation, key disclaimers

### Contact Strategy (May 2026 — WhatsApp-Only, Multi-email)

**Contact page features**:
- Hero with "Send WhatsApp Enquiry" button
- Quick product enquiry topics: SBM, Rice DDGS, Maize Grits, Rice Grits, Yellow Maize, Groundnut HPS, Red Chilli, Liquid Glucose
- WhatsApp card with "Why WhatsApp" reasons
- Full contact info with 3 emails
- Sourcing & Associate Offices grid (6 offices)

**WhatsApp Number**: `6281510551111` (+62 815-1055-1111)
**Emails**: info@sveeint.com (primary), ptsvee@gmail.com (trade), lunkad.v@gmail.com (director)

### Backend Architecture

**Server Framework**: Express.js on Node.js
- TypeScript ESM modules
- Vite middleware integration for development
- Minimal API routes currently defined

**Data Layer**:
- **Current**: In-memory storage implementation (MemStorage class)
- **Schema**: Drizzle ORM schema definitions ready for PostgreSQL
- Data models: Users (placeholder), Products, Categories, Services, Contact Forms

### Data Storage Solutions

**Database**: PostgreSQL (configured but not yet connected)
- Drizzle ORM v0.39.1 with drizzle-zod for schema validation
- Neon Serverless adapter (@neondatabase/serverless v0.10.4)
- Schema file: `shared/schema.ts`

**Current Data Pattern**: 
- Static data in TypeScript files (`client/src/data/`)
- Categories, products, and services pre-populated (50+ products, 10 categories)
- No database operations currently active

### Product Catalog (May 2026 v3 — Indonesia Buyer Focus)

**Animal Feed Ingredients** (priority category, shown first):
- Soybean Meal / SBM 47-48% (India, Argentina, Brazil)
- Rice DDGS (India)
- Rapeseed Meal / Canola Meal (India, Australia)
- Yellow Maize / Yellow Corn feed grade (India, Myanmar)
- Corn Grits / Maize Grits (India)
- Groundnut Meal (India)
- Sunflower Meal (India, Ukraine)

**Grains & Corn Products**: Maize Grits, Corn Flour, Wheat, Barley

**Rice & Milled Products**: Rice Grits, Rice Flour, Broken Rice, Parboiled Rice

**Oilseeds & Kernels**: Groundnut HPS, Sesame Seeds, Soybeans, Sunflower Seeds, Rapeseed

**Pulses & Beans**: Green Moong, Chickpeas Kabuli, Red Lentils, Toor Dal, Black Eyed Peas

**Specialty Flours**: Corn Flour industrial/food grade, Tapioca Flour, Rice Flour

**Spices (from India)**: Red Chilli, Turmeric, Cumin/Jeera, Coriander, Black Pepper, Fenugreek, Dill Seeds

**Food Ingredients & Sweeteners**: Liquid Glucose, Glucose Syrup, Corn Flour food grade

**Edible Oils**: Palm Oil RBD, Groundnut Oil, Soybean Oil, Sunflower Oil

**Fertilizer**: DAP 18-46-0, Urea 46%N, NPK Complex

### Project Structure

```
/client          # Frontend application
  /src
    /components  # React components + shadcn/ui
      Layout.tsx       # Header (with top bar + WhatsApp), Footer (dark), WhatsApp FAB
      WhatsAppFAB.tsx  # Floating WhatsApp button + getWhatsAppUrl helper
      ProductCard.tsx
      ServiceCard.tsx
      CategoryCard.tsx
    /data        # Static data files
      categories.ts    # 10 product categories (animal-feed first)
      products.ts      # 50+ products with bilingual specs + origin info
      services.ts      # 5 practical service blocks
      media.ts         # Image asset references
    /hooks       # Custom React hooks
    /lib         # Utilities
      i18n.tsx         # Bilingual translations (EN + ID) — Indonesia-buyer focus
      queryClient.ts
      utils.ts
    /pages       # Route components
      Home.tsx         # Hero: "Agro Commodity Sourcing for Indonesian Buyers"
      About.tsx        # Indonesia-focused, practical disclaimer, timeline
      Profile.tsx      # Company profile, sourcing offices (India x4, Vietnam, Myanmar)
      Products.tsx     # 10 categories, animal-feed opens by default
      ProductCategory.tsx
      ProductDetail.tsx
      Services.tsx     # 5 services: sourcing, spec coordination, doc support, shipping, custom
      Contact.tsx      # WhatsApp-first, 3 emails, 6 associate offices, quick enquiry topics
  /public
    robots.txt         # Updated: www.sveeint.com
    sitemap.xml        # All 10 category pages + main pages
    llms.txt           # AI-readable company summary
    llms-full.txt      # Complete product list + trade docs + contact details
  index.html           # Full SEO: bilingual meta, JSON-LD updated, new address
/server          # Backend Express application
/shared          # Shared TypeScript types/schemas
  schema.ts
```

## Contact Details (Updated May 2026 v3)

- **Address**: Ruko Sunter Terrace Blok C No 12, Jl. Danau Sunter Utara Kav. No. 60, Jakarta Utara 14350, Indonesia
- **Phone**: +62 21 658 32426
- **WhatsApp**: +62 815-1055-1111 (`6281510551111`)
- **Emails**: info@sveeint.com | ptsvee@gmail.com | lunkad.v@gmail.com
- **Website**: https://www.sveeint.com

## Important Notes for Future Development

1. **WhatsApp number**: `6281510551111` (+62 815-1055-1111). Defined in `client/src/components/WhatsAppFAB.tsx` constant `WHATSAPP_NUMBER` — single source of truth.

2. **Positioning**: Always use Indonesia-buyer focus. Never use "global leader", "seamless", "unlock", "empower", "world-class", Middle East expansion language, or exporter-facing copy.

3. **Product availability disclaimer**: Always include "Product availability, specification, packing, origin, price and shipment terms are confirmed case by case."

4. **Category slugs** (must match between categories.ts and routing):
   `animal-feed`, `grains`, `rice`, `oilseeds`, `pulses`, `specialty-flours`, `spices`, `food-ingredients`, `edible-oils`, `fertilizer`

5. **Language default**: Site defaults to Indonesian (`id`) stored in localStorage. First-time visitors see Indonesian.

6. **No database**: All data is static in `client/src/data/`. Adding PostgreSQL requires connecting the Neon database and running Drizzle migrations.

7. **SEO files**: sitemap.xml, llms.txt, llms-full.txt, robots.txt are in `client/public/` — served as static files.

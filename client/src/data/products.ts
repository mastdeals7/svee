import type { Product } from '@shared/schema';

export const products: Product[] = [

  // ─── ANIMAL FEED INGREDIENTS ─────────────────────────────────────────────────
  {
    id: 'soybean-meal',
    categoryId: 'animal-feed',
    name: { en: 'Soybean Meal / Soyameal / SBM', id: 'Soybean Meal / Soyameal / SBM' },
    description: {
      en: 'High-protein soybean meal (soyameal / SBM) for Indonesian feed mills and animal feed manufacturers. A key protein source in poultry, swine and aquaculture feed formulations. We help Indonesian buyers source SBM from India and other reliable origin markets — with support for specification coordination, documentation and shipment follow-up.',
      id: 'Soybean meal (soyameal / SBM) berprotein tinggi untuk pabrik pakan ternak dan produsen pakan di Indonesia. Sumber protein utama dalam formulasi pakan unggas, babi dan akuakultur. Kami membantu pembeli Indonesia sourcing SBM dari India dan pasar asal terpercaya lainnya.',
    },
    specifications: {
      en: 'Protein: 46–48% typical (subject to supplier confirmation)\nMoisture: Max 12–13%\nFibre: Max 3.5–5%\nFFA / Urease: subject to confirmation\nPacking: Bulk / Jumbo bags / 50 kg PP bags\nOrigin: India, Argentina, Brazil — subject to availability\nNote: Exact specification, grade, origin and price confirmed case by case.',
      id: 'Protein: 46–48% tipikal (tergantung konfirmasi pemasok)\nKadar Air: Maks 12–13%\nSerat: Maks 3,5–5%\nFFA / Urease: tergantung konfirmasi\nKemasan: Curah / Jumbo bag / Karung PP 50 kg\nAsal: India, Argentina, Brasil — tergantung ketersediaan\nCatatan: Spesifikasi, grade, asal dan harga dikonfirmasi per kasus.',
    },
    benefits: {
      en: 'High protein content for livestock and poultry feed\nWidely used by feed mills across Indonesia\nAvailable in 46% and 48% protein grades\nDocument support: COA, phytosanitary, fumigation, BL, certificate of origin',
      id: 'Kandungan protein tinggi untuk pakan ternak dan unggas\nDigunakan luas oleh pabrik pakan di seluruh Indonesia\nTersedia dalam grade protein 46% dan 48%\nDukungan dokumen: COA, fitosanitasi, fumigasi, BL, sertifikat asal',
    },
    applications: {
      en: 'Poultry feed | Swine feed | Aquaculture feed | Cattle feed | Feed mill formulations',
      id: 'Pakan unggas | Pakan babi | Pakan akuakultur | Pakan sapi | Formulasi pabrik pakan',
    },
    featured: true,
  },
  {
    id: 'rapeseed-meal',
    categoryId: 'animal-feed',
    name: { en: 'Rapeseed Meal / Canola Meal / Mustard Meal', id: 'Rapeseed Meal / Canola Meal / Mustard Meal' },
    description: {
      en: 'Rapeseed meal (also known as canola meal or mustard meal) is a high-protein, high-fibre feed ingredient used by Indonesian feed mills as a partial protein source in livestock and poultry feed. We support Indonesian buyers with sourcing, specification coordination and shipment follow-up.',
      id: 'Rapeseed meal (dikenal juga sebagai canola meal atau mustard meal) adalah bahan pakan berprotein dan serat tinggi yang digunakan pabrik pakan Indonesia sebagai sumber protein parsial dalam pakan ternak dan unggas.',
    },
    specifications: {
      en: 'Protein: 34–38% typical (subject to confirmation)\nMoisture: Max 12%\nFibre: 10–13% typical\nGlucosinolates: subject to grade and confirmation\nPacking: Bulk / Jumbo bags / 50 kg bags\nOrigin: India, Canada, Australia — subject to availability\nNote: Specification, origin, packing and price confirmed case by case.',
      id: 'Protein: 34–38% tipikal (tergantung konfirmasi)\nKadar Air: Maks 12%\nSerat: 10–13% tipikal\nGlucosinolate: tergantung grade dan konfirmasi\nKemasan: Curah / Jumbo bag / Karung 50 kg\nAsal: India, Kanada, Australia — tergantung ketersediaan\nCatatan: Spesifikasi, asal, kemasan dan harga dikonfirmasi per kasus.',
    },
    applications: {
      en: 'Poultry feed formulations | Swine feed | Cattle and ruminant feed | Feed mill protein source',
      id: 'Formulasi pakan unggas | Pakan babi | Pakan sapi dan ruminansia | Sumber protein pabrik pakan',
    },
    featured: true,
  },
  {
    id: 'rice-ddgs',
    categoryId: 'animal-feed',
    name: { en: 'Rice DDGS (Distillers Dried Grains with Solubles)', id: 'Rice DDGS (Distillers Dried Grains with Solubles)' },
    description: {
      en: 'Rice DDGS is a high-protein, high-fibre by-product from rice-based ethanol or starch production. It is used as a feed ingredient by Indonesian feed mills and animal feed manufacturers. Protein, fibre, moisture, packing and origin must be confirmed before each shipment.',
      id: 'Rice DDGS adalah produk sampingan berprotein dan serat tinggi dari produksi etanol atau pati berbasis beras. Digunakan sebagai bahan pakan oleh pabrik pakan dan produsen pakan ternak di Indonesia. Protein, serat, kadar air, kemasan dan asal harus dikonfirmasi sebelum setiap pengiriman.',
    },
    specifications: {
      en: 'Protein: 14–18% typical (subject to confirmation)\nMoisture: Max 12%\nFibre: subject to grade and confirmation\nPacking: Bulk / 50 kg bags / Jumbo bags\nOrigin: India — subject to availability\nNote: Specification, packing and price confirmed case by case.',
      id: 'Protein: 14–18% tipikal (tergantung konfirmasi)\nKadar Air: Maks 12%\nSerat: tergantung grade dan konfirmasi\nKemasan: Curah / Karung 50 kg / Jumbo bag\nAsal: India — tergantung ketersediaan\nCatatan: Spesifikasi, kemasan dan harga dikonfirmasi per kasus.',
    },
    applications: {
      en: 'Poultry and livestock feed | Aquaculture feed ingredient | Feed mill ingredient | Partial protein/energy source in feed formulations',
      id: 'Pakan unggas dan ternak | Bahan pakan akuakultur | Bahan pabrik pakan | Sumber protein/energi parsial dalam formulasi pakan',
    },
    featured: true,
  },
  {
    id: 'yellow-maize-feed',
    categoryId: 'animal-feed',
    name: { en: 'Yellow Maize / Feed Corn', id: 'Jagung Kuning / Feed Corn' },
    description: {
      en: 'Yellow maize (feed corn) is a primary energy source in animal feed formulations, used widely by Indonesian feed mills, poultry farms and livestock operations. We help buyers check availability, coordinate specifications and follow shipment documentation from India, Myanmar and other origins.',
      id: 'Jagung kuning (feed corn) adalah sumber energi utama dalam formulasi pakan ternak, digunakan secara luas oleh pabrik pakan, peternakan unggas dan operasi ternak di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 14%\nAdmixture / Foreign Matter: Max 2%\nBroken: Max 3%\nAflatoxin: subject to confirmation\nPacking: Bulk / 50 kg woven bags\nOrigin: India, Myanmar, Brazil — subject to availability\nNote: Specification, origin and price confirmed case by case.',
      id: 'Kadar Air: Maks 14%\nCampuran / Benda Asing: Maks 2%\nPecah: Maks 3%\nAflatoksin: tergantung konfirmasi\nKemasan: Curah / Karung anyaman 50 kg\nAsal: India, Myanmar, Brasil — tergantung ketersediaan\nCatatan: Spesifikasi, asal dan harga dikonfirmasi per kasus.',
    },
    applications: {
      en: 'Poultry feed | Swine feed | Aquaculture feed | Cattle and ruminant feed | Feed mill energy source',
      id: 'Pakan unggas | Pakan babi | Pakan akuakultur | Pakan sapi dan ruminansia | Sumber energi pabrik pakan',
    },
    featured: true,
  },
  {
    id: 'groundnut-meal',
    categoryId: 'animal-feed',
    name: { en: 'Groundnut Meal / Peanut Cake / Peanut DOC', id: 'Groundnut Meal / Peanut Cake / Peanut DOC' },
    description: {
      en: 'Groundnut meal (peanut cake / peanut DOC) is the by-product of groundnut oil extraction, used as a protein source in animal feed. We support Indonesian feed mills and buyers with sourcing, availability checks and document coordination.',
      id: 'Groundnut meal (peanut cake / peanut DOC) adalah produk sampingan ekstraksi minyak kacang tanah, digunakan sebagai sumber protein dalam pakan ternak.',
    },
    specifications: {
      en: 'Protein: 45–50% typical (subject to confirmation)\nMoisture: Max 10%\nFibre: Max 8%\nAflatoxin: subject to confirmation\nPacking: 50 kg woven bags / Jumbo bags\nOrigin: India — subject to availability',
      id: 'Protein: 45–50% tipikal (tergantung konfirmasi)\nKadar Air: Maks 10%\nSerat: Maks 8%\nAflatoksin: tergantung konfirmasi\nKemasan: Karung anyaman 50 kg / Jumbo bag\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Poultry and livestock feed | Feed mill protein source | Partial replacement for soybean meal',
      id: 'Pakan unggas dan ternak | Sumber protein pabrik pakan | Pengganti parsial soybean meal',
    },
    featured: false,
  },
  {
    id: 'wheat-bran',
    categoryId: 'animal-feed',
    name: { en: 'Wheat Bran', id: 'Dedak Gandum / Wheat Bran' },
    description: {
      en: 'Wheat bran is a fibre-rich by-product of wheat flour milling, used in animal feed formulations as a fibre and energy source. Used by Indonesian feed mills, cattle farms and ruminant feed producers.',
      id: 'Wheat bran adalah produk sampingan penggilingan tepung gandum yang kaya serat, digunakan dalam formulasi pakan ternak sebagai sumber serat dan energi.',
    },
    specifications: {
      en: 'Protein: 14–17% typical\nMoisture: Max 12%\nFibre: 8–12% typical\nPacking: 40–50 kg bags / Bulk\nOrigin: India — subject to availability',
      id: 'Protein: 14–17% tipikal\nKadar Air: Maks 12%\nSerat: 8–12% tipikal\nKemasan: Karung 40–50 kg / Curah\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Cattle and ruminant feed | Poultry feed filler | Feed mill fibre source',
      id: 'Pakan sapi dan ruminansia | Filler pakan unggas | Sumber serat pabrik pakan',
    },
    featured: false,
  },
  {
    id: 'sunflower-meal',
    categoryId: 'animal-feed',
    name: { en: 'Sunflower Meal / Sunflower DOC', id: 'Sunflower Meal / Sunflower DOC' },
    description: {
      en: 'Sunflower meal is the by-product of sunflower seed oil extraction, used as a protein and fibre source in animal feed. Available in high-protein (decorticated) and standard grades from India and other origins.',
      id: 'Sunflower meal adalah produk sampingan ekstraksi minyak biji bunga matahari, digunakan sebagai sumber protein dan serat dalam pakan ternak.',
    },
    specifications: {
      en: 'Protein: 28–36% typical (subject to grade and confirmation)\nMoisture: Max 12%\nFibre: 15–22% typical\nPacking: Bulk / 50 kg bags\nOrigin: India, Ukraine — subject to availability',
      id: 'Protein: 28–36% tipikal (tergantung grade dan konfirmasi)\nKadar Air: Maks 12%\nSerat: 15–22% tipikal\nKemasan: Curah / Karung 50 kg\nAsal: India, Ukraina — tergantung ketersediaan',
    },
    applications: {
      en: 'Poultry feed | Cattle and ruminant feed | Feed mill protein source',
      id: 'Pakan unggas | Pakan sapi dan ruminansia | Sumber protein pabrik pakan',
    },
    featured: false,
  },
  {
    id: 'rice-bran-doc',
    categoryId: 'animal-feed',
    name: { en: 'Rice Bran DOC / Deoiled Rice Bran', id: 'Rice Bran DOC / Dedak Padi Deoiled' },
    description: {
      en: 'Rice bran DOC (deoiled rice bran) is the by-product of rice bran oil extraction. Used as a feed ingredient in poultry, cattle and aquaculture feed in Indonesia. Availability confirmed on enquiry basis.',
      id: 'Rice bran DOC (dedak padi deoiled) adalah produk sampingan ekstraksi minyak dedak padi. Digunakan sebagai bahan pakan dalam pakan unggas, sapi dan akuakultur di Indonesia.',
    },
    specifications: {
      en: 'Protein: 14–18% typical\nFat: Max 1–2% (deoiled)\nFibre: 8–14% typical\nMoisture: Max 10%\nPacking: 40–50 kg bags\nOrigin: India — subject to availability',
      id: 'Protein: 14–18% tipikal\nLemak: Maks 1–2% (deoiled)\nSerat: 8–14% tipikal\nKadar Air: Maks 10%\nKemasan: Karung 40–50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Poultry feed | Aquaculture feed | Cattle feed | Feed mill energy-fibre source',
      id: 'Pakan unggas | Pakan akuakultur | Pakan sapi | Sumber energi-serat pabrik pakan',
    },
    featured: false,
  },

  // ─── GRAINS & CORN PRODUCTS ──────────────────────────────────────────────────
  {
    id: 'yellow-maize',
    categoryId: 'grains',
    name: { en: 'Yellow Maize / Corn', id: 'Jagung Kuning / Corn' },
    description: {
      en: 'Yellow maize sourced from India, Myanmar and other origin markets for food processing, industrial and feed applications in Indonesia. Both food-grade and feed-grade available, subject to buyer requirement and origin availability.',
      id: 'Jagung kuning bersumber dari India, Myanmar dan pasar asal lainnya untuk pengolahan makanan, industri dan aplikasi pakan di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 14%\nAdmixture: Max 2%\nBroken: Max 3%\nPacking: Bulk / 50 kg woven bags\nOrigin: India, Myanmar — subject to availability',
      id: 'Kadar Air: Maks 14%\nCampuran: Maks 2%\nPecah: Maks 3%\nKemasan: Curah / Karung anyaman 50 kg\nAsal: India, Myanmar — tergantung ketersediaan',
    },
    applications: {
      en: 'Animal feed | Food processing | Starch industry | Corn flour / grits manufacturing',
      id: 'Pakan ternak | Pengolahan makanan | Industri pati | Produksi corn flour / grits',
    },
    featured: true,
  },
  {
    id: 'maize-grits',
    categoryId: 'grains',
    name: { en: 'Maize Grits / Corn Grits', id: 'Maize Grits / Corn Grits' },
    description: {
      en: 'Maize grits (corn grits) are coarse ground particles made from cleaned and milled corn. Used in extruded snacks, breakfast cereals, breweries, confectionery, baking and selected industrial applications depending on grade. We source maize grits from India for Indonesian food manufacturers and snack producers.',
      id: 'Maize grits (corn grits) adalah partikel giling kasar dari jagung yang dibersihkan dan digiling. Digunakan dalam snack ekstrusi, sereal sarapan, penggunaan brewery, kembang gula, baking dan aplikasi industri tertentu tergantung grade.',
    },
    specifications: {
      en: 'Moisture: Max 12–14%\nForeign Matter: Max 0.5%\nBroken/Fine: subject to grade\nMesh size: subject to buyer specification\nPacking: 25 kg / 50 kg PP bags\nOrigin: India — subject to availability\nNote: Grade, mesh size and specification confirmed case by case.',
      id: 'Kadar Air: Maks 12–14%\nBenda Asing: Maks 0,5%\nPecah/Halus: tergantung grade\nUkuran mesh: tergantung spesifikasi pembeli\nKemasan: Karung PP 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    benefits: {
      en: 'Both maize grits and corn grits terms accepted\nAvailable in multiple grades and mesh sizes\nFor snack extrusion, brewing, cereal and food processing\nDocument support: COA, fumigation certificate, BL, certificate of origin',
      id: 'Istilah maize grits dan corn grits keduanya dapat diterima\nTersedia dalam berbagai grade dan ukuran mesh\nUntuk ekstrusi snack, brewing, sereal dan pengolahan makanan\nDukungan dokumen: COA, sertifikat fumigasi, BL, sertifikat asal',
    },
    applications: {
      en: 'Extruded snacks | Breakfast cereals | Brewery applications | Confectionery | Baking | Industrial use (by grade)',
      id: 'Snack ekstrusi | Sereal sarapan | Aplikasi brewery | Kembang gula | Baking | Penggunaan industri (berdasarkan grade)',
    },
    featured: true,
  },
  {
    id: 'flaking-grits',
    categoryId: 'grains',
    name: { en: 'Flaking Grits', id: 'Flaking Grits' },
    description: {
      en: 'Flaking grits are first-cut de-germed corn grits used for corn flakes, brewery flakes and food processing applications. Sourced from India for Indonesian food manufacturers.',
      id: 'Flaking grits adalah corn grits de-germed potongan pertama yang digunakan untuk corn flakes, brewery flakes dan aplikasi pengolahan makanan.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nGerm/Fibre: Minimal (de-germed grade)\nMesh: subject to buyer specification\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 12%\nGerm/Serat: Minimal (grade de-germed)\nMesh: tergantung spesifikasi pembeli\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Corn flakes production | Brewery flakes | Food processing applications',
      id: 'Produksi corn flakes | Brewery flakes | Aplikasi pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'corn-meal',
    categoryId: 'grains',
    name: { en: 'Corn Meal', id: 'Corn Meal' },
    description: {
      en: 'Fine corn grits (corn meal) below 1mm used for specialty snacks and efficient extrusion. For snack manufacturers and food processors in Indonesia.',
      id: 'Corn grits halus (corn meal) di bawah 1mm digunakan untuk snack khusus dan ekstrusi yang efisien.',
    },
    specifications: {
      en: 'Particle size: Below 1mm typical\nMoisture: Max 12%\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Ukuran partikel: Di bawah 1mm tipikal\nKadar Air: Maks 12%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Specialty snack extrusion | Fine cornmeal applications | Food processing',
      id: 'Ekstrusi snack khusus | Aplikasi cornmeal halus | Pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'corn-flour',
    categoryId: 'grains',
    name: { en: 'Corn Flour (from India)', id: 'Corn Flour (dari India)' },
    description: {
      en: 'Corn flour from India for food manufacturers and industrial buyers in Indonesia. Used in gluten-free baking, pasta, sausage manufacturing, papad making, and selected industrial and cattle feed applications depending on grade.',
      id: 'Corn flour dari India untuk produsen makanan dan pembeli industri di Indonesia. Digunakan dalam baking bebas gluten, pasta, produksi sosis, pembuatan papad, dan aplikasi industri dan pakan sapi tertentu tergantung grade.',
    },
    specifications: {
      en: 'Moisture: Max 12–14%\nPurity: subject to grade\nMesh: subject to buyer specification\nPacking: 25 kg / 50 kg PP bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 12–14%\nKemurnian: tergantung grade\nMesh: tergantung spesifikasi pembeli\nKemasan: Karung PP 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Gluten-free baking | Pasta and noodles | Sausage filler | Papad making | Industrial starch substitute',
      id: 'Baking bebas gluten | Pasta dan mie | Pengisi sosis | Pembuatan papad | Pengganti pati industri',
    },
    featured: false,
  },
  {
    id: 'wheat',
    categoryId: 'grains',
    name: { en: 'Wheat', id: 'Gandum' },
    description: {
      en: 'Wheat for flour milling, food processing and industrial buyers in Indonesia. Origin options include India, Australia and Black Sea origins, subject to buyer requirement and current availability.',
      id: 'Gandum untuk penggilingan tepung, pengolahan makanan dan pembeli industri di Indonesia.',
    },
    specifications: {
      en: 'Protein: subject to origin and grade\nMoisture: Max 13.5%\nGluten: subject to origin and grade\nPacking: Bulk / Jumbo bags\nOrigin: India, Australia, Black Sea — subject to availability',
      id: 'Protein: tergantung asal dan grade\nKadar Air: Maks 13,5%\nGluten: tergantung asal dan grade\nKemasan: Curah / Jumbo bag\nAsal: India, Australia, Black Sea — tergantung ketersediaan',
    },
    applications: {
      en: 'Flour milling | Food processing | Bread and bakery | Industrial applications',
      id: 'Penggilingan tepung | Pengolahan makanan | Roti dan bakeri | Aplikasi industri',
    },
    featured: false,
  },
  {
    id: 'barley',
    categoryId: 'grains',
    name: { en: 'Barley', id: 'Barley' },
    description: {
      en: 'Barley for malting, brewing, animal feed and food processing applications. Origin options include Australia and India, subject to buyer requirement and current availability.',
      id: 'Barley untuk malting, brewing, pakan ternak dan aplikasi pengolahan makanan.',
    },
    specifications: {
      en: 'Moisture: Max 13.5%\nProtein: subject to grade\nGermination: subject to grade and use\nPacking: Bulk / 50 kg bags\nOrigin: Australia, India — subject to availability',
      id: 'Kadar Air: Maks 13,5%\nProtein: tergantung grade\nGerminasi: tergantung grade dan penggunaan\nKemasan: Curah / Karung 50 kg\nAsal: Australia, India — tergantung ketersediaan',
    },
    applications: {
      en: 'Malting and brewing | Animal feed | Food processing',
      id: 'Malting dan brewing | Pakan ternak | Pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'sorghum',
    categoryId: 'grains',
    name: { en: 'Sorghum', id: 'Sorgum' },
    description: {
      en: 'Sorghum for animal feed and food processing applications. Origin options include Australia, India and other markets subject to current availability.',
      id: 'Sorgum untuk pakan ternak dan aplikasi pengolahan makanan.',
    },
    specifications: {
      en: 'Moisture: Max 13%\nForeign Matter: Max 2%\nPacking: Bulk / 50 kg bags\nOrigin: Australia, India — subject to availability',
      id: 'Kadar Air: Maks 13%\nBenda Asing: Maks 2%\nKemasan: Curah / Karung 50 kg\nAsal: Australia, India — tergantung ketersediaan',
    },
    applications: {
      en: 'Animal feed | Food processing | Industrial use',
      id: 'Pakan ternak | Pengolahan makanan | Penggunaan industri',
    },
    featured: false,
  },

  // ─── RICE & MILLED PRODUCTS ───────────────────────────────────────────────────
  {
    id: 'rice-grits',
    categoryId: 'rice',
    name: { en: 'Rice Grits (from India)', id: 'Rice Grits (dari India)' },
    description: {
      en: 'Rice grits are coarser broken rice particles prepared by grinding and sieving raw rice. Used in extruded snacks, namkeen, bakery items, instant mixes, ready-to-eat products and food processing applications in Indonesia. We help buyers source rice grits from India with support for specification coordination and shipment documentation.',
      id: 'Rice grits adalah partikel beras patah yang lebih kasar disiapkan dengan menggiling dan mengayak beras mentah. Digunakan dalam snack ekstrusi, namkeen, item bakeri, instan mix, produk siap makan dan aplikasi pengolahan makanan di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 12–14%\nMesh / particle size: subject to buyer specification\nBroken %: subject to grade\nPacking: 25 kg / 50 kg PP bags\nOrigin: India — subject to availability\nNote: Grade, mesh and specification confirmed case by case.',
      id: 'Kadar Air: Maks 12–14%\nMesh / ukuran partikel: tergantung spesifikasi pembeli\nPecah %: tergantung grade\nKemasan: Karung PP 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Extruded snacks | Namkeen and savoury snacks | Bakery items | Instant mixes | Ready-to-eat food products | Food processing',
      id: 'Snack ekstrusi | Namkeen dan snack gurih | Item bakeri | Instan mix | Produk makanan siap makan | Pengolahan makanan',
    },
    featured: true,
  },
  {
    id: 'rice-flour',
    categoryId: 'rice',
    name: { en: 'Rice Flour (from India)', id: 'Tepung Beras (dari India)' },
    description: {
      en: 'Rice flour is fine powder prepared from raw rice. Used in snacks, bakery items, instant mixes, ready-to-eat products and traditional food applications in Indonesia. Sourced from India with support for specification coordination and documentation.',
      id: 'Tepung beras adalah bubuk halus yang disiapkan dari beras mentah. Digunakan dalam snack, item bakeri, instan mix, produk siap makan dan aplikasi makanan tradisional di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nFineness: subject to grade and buyer specification\nPacking: 25 kg / 50 kg PP bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 12%\nKehalusan: tergantung grade dan spesifikasi pembeli\nKemasan: Karung PP 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Snack manufacturing | Bakery items | Instant mixes | Traditional food products | Rice-based confectionery',
      id: 'Produksi snack | Item bakeri | Instan mix | Produk makanan tradisional | Kembang gula berbasis beras',
    },
    featured: false,
  },
  {
    id: 'broken-rice',
    categoryId: 'rice',
    name: { en: 'Broken Rice', id: 'Beras Patah' },
    description: {
      en: 'Broken rice for food processing, brewing and animal feed applications. Origin options include India, Thailand and Vietnam, subject to buyer requirement and current availability.',
      id: 'Beras patah untuk pengolahan makanan, brewing dan aplikasi pakan ternak.',
    },
    specifications: {
      en: 'Broken %: subject to grade (25%, 50%, 100%)\nMoisture: Max 14%\nPacking: 25 kg / 50 kg bags or Bulk\nOrigin: India, Thailand, Vietnam — subject to availability',
      id: 'Pecah %: tergantung grade (25%, 50%, 100%)\nKadar Air: Maks 14%\nKemasan: Karung 25 kg / 50 kg atau Curah\nAsal: India, Thailand, Vietnam — tergantung ketersediaan',
    },
    applications: {
      en: 'Food processing | Rice flour production | Brewing | Animal feed',
      id: 'Pengolahan makanan | Produksi tepung beras | Brewing | Pakan ternak',
    },
    featured: false,
  },

  // ─── OILSEEDS & KERNELS ───────────────────────────────────────────────────────
  {
    id: 'groundnut-kernels',
    categoryId: 'oilseeds',
    name: { en: 'Groundnut Kernels / Peanuts HPS (from India)', id: 'Kacang Tanah HPS (dari India)' },
    description: {
      en: 'Indian HPS (Hand Picked Selected) groundnut kernels for oil extraction, direct consumption, roasted snacks, peanut butter, confectionery and food processing. We source groundnut kernels from India for Indonesian buyers with support for specification coordination and export documentation.',
      id: 'Kacang tanah HPS India untuk ekstraksi minyak, konsumsi langsung, snack panggang, selai kacang, kembang gula dan pengolahan makanan.',
    },
    specifications: {
      en: 'Grade: HPS (Hand Picked Selected)\nMoisture: Max 8%\nOil Content: 48–50% typical\nAflatoxin: subject to confirmation (Max 10 ppb typical)\nPacking: 25 kg / 50 kg woven bags\nOrigin: India\nTypes: Bold, Java, Red skin — subject to availability',
      id: 'Grade: HPS (Pilihan Tangan)\nKadar Air: Maks 8%\nKandungan Minyak: 48–50% tipikal\nAflatoksin: tergantung konfirmasi\nKemasan: Karung anyaman 25 kg / 50 kg\nAsal: India\nJenis: Bold, Java, Red skin — tergantung ketersediaan',
    },
    applications: {
      en: 'Edible oil extraction | Peanut butter and paste | Roasted snacks | Confectionery | Food processing',
      id: 'Ekstraksi minyak goreng | Selai kacang | Snack panggang | Kembang gula | Pengolahan makanan',
    },
    featured: true,
  },
  {
    id: 'sesame-seeds',
    categoryId: 'oilseeds',
    name: { en: 'Sesame Seeds (White / Black)', id: 'Biji Wijen (Putih / Hitam)' },
    description: {
      en: 'White and black sesame seeds from India used in baking, sweets, confectionery, seasoning and frying applications. For food manufacturers and commodity importers in Indonesia.',
      id: 'Biji wijen putih dan hitam dari India digunakan dalam baking, manisan, kembang gula, bumbu dan aplikasi penggorengan.',
    },
    specifications: {
      en: 'Oil Content: 48–52% typical\nMoisture: Max 6%\nPurity: 99.95% min (natural); 99.9% min (hulled)\nPacking: 25 kg / 50 kg bags\nOrigin: India, Ethiopia — subject to availability\nTypes: Natural White, Hulled White, Black',
      id: 'Kandungan Minyak: 48–52% tipikal\nKadar Air: Maks 6%\nKemurnian: Min 99,95% (natural); Min 99,9% (hulled)\nKemasan: Karung 25 kg / 50 kg\nAsal: India, Ethiopia — tergantung ketersediaan',
    },
    applications: {
      en: 'Baking and confectionery | Sesame oil extraction | Tahini and paste | Seasoning and toppings',
      id: 'Baking dan kembang gula | Ekstraksi minyak wijen | Tahini dan pasta | Bumbu dan topping',
    },
    featured: false,
  },
  {
    id: 'soybeans',
    categoryId: 'oilseeds',
    name: { en: 'Soybeans', id: 'Kedelai' },
    description: {
      en: 'Soybeans for oil extraction, tofu, tempeh, animal feed and food processing applications in Indonesia. Origin options include India, Brazil and Argentina, subject to buyer requirement and availability.',
      id: 'Kedelai untuk ekstraksi minyak, tahu, tempe, pakan ternak dan aplikasi pengolahan makanan di Indonesia.',
    },
    specifications: {
      en: 'Protein: Min 34%\nMoisture: Max 13%\nForeign Matter: Max 1%\nPacking: Bulk / Jumbo bags / 50 kg bags\nOrigin: India, Brazil, Argentina — subject to availability',
      id: 'Protein: Min 34%\nKadar Air: Maks 13%\nBenda Asing: Maks 1%\nKemasan: Curah / Jumbo bag / Karung 50 kg\nAsal: India, Brasil, Argentina — tergantung ketersediaan',
    },
    applications: {
      en: 'Soybean oil extraction | Tofu and tempeh | Soy milk | Animal feed | Food processing',
      id: 'Ekstraksi minyak kedelai | Tahu dan tempe | Susu kedelai | Pakan ternak | Pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'rapeseed',
    categoryId: 'oilseeds',
    name: { en: 'Rapeseed / Canola Seed', id: 'Rapeseed / Biji Canola' },
    description: {
      en: 'Rapeseed (canola seed) for oil extraction. Origin options include India, Australia and Canada, subject to buyer requirement and current availability.',
      id: 'Rapeseed (biji canola) untuk ekstraksi minyak.',
    },
    specifications: {
      en: 'Oil Content: 38–42% typical\nMoisture: Max 9%\nImpurities: Max 2%\nPacking: Bulk / 50 kg bags\nOrigin: India, Australia, Canada — subject to availability',
      id: 'Kandungan Minyak: 38–42% tipikal\nKadar Air: Maks 9%\nKotoran: Maks 2%\nKemasan: Curah / Karung 50 kg\nAsal: India, Australia, Kanada — tergantung ketersediaan',
    },
    applications: {
      en: 'Edible oil extraction | Biodiesel | Industrial oil applications',
      id: 'Ekstraksi minyak goreng | Biodiesel | Aplikasi minyak industri',
    },
    featured: false,
  },
  {
    id: 'sunflower-seeds',
    categoryId: 'oilseeds',
    name: { en: 'Sunflower Seeds', id: 'Biji Bunga Matahari' },
    description: {
      en: 'Sunflower seeds for edible oil production and snack manufacturing. Origin options include India, Ukraine and Argentina, subject to availability.',
      id: 'Biji bunga matahari untuk produksi minyak goreng dan produksi snack.',
    },
    specifications: {
      en: 'Oil Content: 40–45% typical\nMoisture: Max 9%\nAdmixture: Max 2%\nPacking: 25 kg bags or Bulk\nOrigin: India, Ukraine, Argentina — subject to availability',
      id: 'Kandungan Minyak: 40–45% tipikal\nKadar Air: Maks 9%\nCampuran: Maks 2%\nKemasan: Karung 25 kg atau Curah\nAsal: India, Ukraina, Argentina — tergantung ketersediaan',
    },
    applications: {
      en: 'Sunflower oil extraction | Snack manufacturing | Confectionery',
      id: 'Ekstraksi minyak bunga matahari | Produksi snack | Kembang gula',
    },
    featured: false,
  },

  // ─── PULSES & BEANS ────────────────────────────────────────────────────────────
  {
    id: 'chickpeas',
    categoryId: 'pulses',
    name: { en: 'Chickpeas / Kabuli Chana', id: 'Chickpeas / Kabuli Chana' },
    description: {
      en: 'Kabuli chickpeas from India and Australia for food processing, hummus, flour milling and direct consumption. For food manufacturers and commodity importers in Indonesia.',
      id: 'Chickpeas kabuli dari India dan Australia untuk pengolahan makanan, hummus, penggilingan tepung dan konsumsi langsung.',
    },
    specifications: {
      en: 'Moisture: Max 13%\nPurity: Min 99%\nSize: 8mm, 9mm, 10mm — subject to availability\nPacking: 25 kg / 50 kg bags\nOrigin: India, Australia — subject to availability',
      id: 'Kadar Air: Maks 13%\nKemurnian: Min 99%\nUkuran: 8mm, 9mm, 10mm — tergantung ketersediaan\nKemasan: Karung 25 kg / 50 kg\nAsal: India, Australia — tergantung ketersediaan',
    },
    applications: {
      en: 'Hummus and paste | Flour milling | Direct consumption | Snack manufacturing | Food processing',
      id: 'Hummus dan pasta | Penggilingan tepung | Konsumsi langsung | Produksi snack | Pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'gram-grits',
    categoryId: 'pulses',
    name: { en: 'Gram Grits / Chana Grits', id: 'Gram Grits / Chana Grits' },
    description: {
      en: 'Gram grits (chana grits) from India used in extruded snacks and food processing applications. For snack manufacturers and food processors in Indonesia.',
      id: 'Gram grits (chana grits) dari India digunakan dalam snack ekstrusi dan aplikasi pengolahan makanan.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nMesh/size: subject to buyer specification\nPacking: 25 kg / 50 kg PP bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 12%\nMesh/ukuran: tergantung spesifikasi pembeli\nKemasan: Karung PP 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Extruded snacks | Namkeen | Food processing applications',
      id: 'Snack ekstrusi | Namkeen | Aplikasi pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'gram-flour',
    categoryId: 'pulses',
    name: { en: 'Gram Flour / Besan', id: 'Gram Flour / Tepung Kacang Bengkuang / Besan' },
    description: {
      en: 'Gram flour (besan) from India for food processing, snack manufacturing and bakery applications in Indonesia. High protein, gluten-free.',
      id: 'Gram flour (besan) dari India untuk pengolahan makanan, produksi snack dan aplikasi bakeri di Indonesia.',
    },
    specifications: {
      en: 'Protein: 20–24% typical\nMoisture: Max 10%\nFineness: subject to buyer specification\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Protein: 20–24% tipikal\nKadar Air: Maks 10%\nKehalusan: tergantung spesifikasi pembeli\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Snack manufacturing | Bakery and batter | Noodles and pasta | Traditional food products',
      id: 'Produksi snack | Bakeri dan adonan | Mie dan pasta | Produk makanan tradisional',
    },
    featured: false,
  },
  {
    id: 'green-moong',
    categoryId: 'pulses',
    name: { en: 'Green Moong Beans / Mung Beans', id: 'Kacang Hijau / Green Moong' },
    description: {
      en: 'Green moong beans (mung beans) from India and Myanmar. For direct consumption, food processing, bean sprout production and flour milling in Indonesia.',
      id: 'Kacang hijau dari India dan Myanmar. Untuk konsumsi langsung, pengolahan makanan, produksi tauge dan penggilingan tepung di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 13%\nPurity: Min 99%\nPacking: 25 kg / 50 kg woven bags\nOrigin: India, Myanmar — subject to availability',
      id: 'Kadar Air: Maks 13%\nKemurnian: Min 99%\nKemasan: Karung anyaman 25 kg / 50 kg\nAsal: India, Myanmar — tergantung ketersediaan',
    },
    applications: {
      en: 'Direct consumption | Bean sprout production | Mung bean flour | Food processing | Traditional food products',
      id: 'Konsumsi langsung | Produksi tauge | Tepung kacang hijau | Pengolahan makanan | Produk makanan tradisional',
    },
    featured: false,
  },
  {
    id: 'red-lentils',
    categoryId: 'pulses',
    name: { en: 'Red Lentils / Masoor Dal', id: 'Lentil Merah / Masoor Dal' },
    description: {
      en: 'Red lentils (masoor dal) from India, Canada and Turkey. For direct consumption, food processing and food manufacturers in Indonesia.',
      id: 'Lentil merah (masoor dal) dari India, Kanada dan Turki. Untuk konsumsi langsung, pengolahan makanan dan produsen makanan di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 13%\nPurity: Min 99%\nPacking: 25 kg / 50 kg woven bags\nOrigin: India, Canada, Turkey — subject to availability',
      id: 'Kadar Air: Maks 13%\nKemurnian: Min 99%\nKemasan: Karung anyaman 25 kg / 50 kg\nAsal: India, Kanada, Turki — tergantung ketersediaan',
    },
    applications: {
      en: 'Direct consumption | Soup and cooking | Food processing | Traditional food products',
      id: 'Konsumsi langsung | Sup dan memasak | Pengolahan makanan | Produk makanan tradisional',
    },
    featured: false,
  },
  {
    id: 'pigeon-peas',
    categoryId: 'pulses',
    name: { en: 'Pigeon Peas / Toor Dal', id: 'Pigeon Peas / Toor Dal' },
    description: {
      en: 'Pigeon peas (toor dal) from India for direct consumption and food processing applications.',
      id: 'Pigeon peas (toor dal) dari India untuk konsumsi langsung dan aplikasi pengolahan makanan.',
    },
    specifications: {
      en: 'Moisture: Max 13%\nPurity: Min 99%\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 13%\nKemurnian: Min 99%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Direct consumption | Cooking | Food processing',
      id: 'Konsumsi langsung | Memasak | Pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'black-eyed-peas',
    categoryId: 'pulses',
    name: { en: 'Black Eyed Peas', id: 'Kacang Tolo / Black Eyed Peas' },
    description: {
      en: 'Black eyed peas from India and Myanmar for direct consumption and food processing applications in Indonesia.',
      id: 'Kacang tolo dari India dan Myanmar untuk konsumsi langsung dan aplikasi pengolahan makanan di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 13%\nPurity: Min 99%\nPacking: 25 kg / 50 kg bags\nOrigin: India, Myanmar — subject to availability',
      id: 'Kadar Air: Maks 13%\nKemurnian: Min 99%\nKemasan: Karung 25 kg / 50 kg\nAsal: India, Myanmar — tergantung ketersediaan',
    },
    applications: {
      en: 'Direct consumption | Cooking | Food processing | Traditional food products',
      id: 'Konsumsi langsung | Memasak | Pengolahan makanan | Produk makanan tradisional',
    },
    featured: false,
  },

  // ─── SPECIALTY GRAIN FLOURS ───────────────────────────────────────────────────
  {
    id: 'ragi-flour',
    categoryId: 'specialty-flours',
    name: { en: 'Ragi Meal / Ragi Flour (Finger Millet)', id: 'Ragi Meal / Tepung Ragi (Finger Millet)' },
    description: {
      en: 'Ragi flour (finger millet flour) from India for traditional food products including dosa, roti, idli, upma, puttu, paratha and health food applications. For food manufacturers and specialty food buyers in Indonesia.',
      id: 'Tepung ragi (tepung finger millet) dari India untuk produk makanan tradisional termasuk dosa, roti, idli, upma, puttu, paratha dan aplikasi makanan kesehatan.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nFineness: subject to grade\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 12%\nKehalusan: tergantung grade\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Traditional food products (dosa, roti, idli) | Health food products | Bakery applications | Ready-to-eat mixes',
      id: 'Produk makanan tradisional (dosa, roti, idli) | Produk makanan kesehatan | Aplikasi bakeri | Campuran siap makan',
    },
    featured: false,
  },
  {
    id: 'jowar-flour',
    categoryId: 'specialty-flours',
    name: { en: 'Jowar Meal / Jowar Flour (Sorghum Flour)', id: 'Jowar Meal / Tepung Jowar (Tepung Sorgum)' },
    description: {
      en: 'Jowar flour (sorghum flour) from India used in snacks, chips, extruded products and flour applications. For food manufacturers and specialty food importers in Indonesia.',
      id: 'Tepung jowar (tepung sorgum) dari India digunakan dalam snack, chips, produk ekstrusi dan aplikasi tepung.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nFineness: subject to grade\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 12%\nKehalusan: tergantung grade\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Snacks and chips | Extruded products | Gluten-free flour applications | Traditional food products',
      id: 'Snack dan chips | Produk ekstrusi | Aplikasi tepung bebas gluten | Produk makanan tradisional',
    },
    featured: false,
  },
  {
    id: 'multigrain-flour',
    categoryId: 'specialty-flours',
    name: { en: 'Multigrain Flour', id: 'Tepung Multigrain' },
    description: {
      en: 'Multigrain flour made from a combination of grains such as ragi, barley and corn masa flour. Used in flatbreads, bakery items and health food products.',
      id: 'Tepung multigrain terbuat dari kombinasi biji-bijian seperti ragi, barley dan corn masa flour. Digunakan dalam roti pipih, item bakeri dan produk makanan kesehatan.',
    },
    specifications: {
      en: 'Grain composition: subject to buyer specification\nMoisture: Max 12%\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Komposisi biji-bijian: tergantung spesifikasi pembeli\nKadar Air: Maks 12%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Flatbreads | Bakery items | Health food products | Specialty flour applications',
      id: 'Roti pipih | Item bakeri | Produk makanan kesehatan | Aplikasi tepung khusus',
    },
    featured: false,
  },

  // ─── SPICES ────────────────────────────────────────────────────────────────────
  {
    id: 'red-chilli',
    categoryId: 'spices',
    name: { en: 'Red Chilli (from India)', id: 'Cabai Merah (dari India)' },
    description: {
      en: 'Indian red chilli for food manufacturers, spice processors and commodity importers in Indonesia. Available in whole and powder grades from major Indian growing regions. Origin, grade and specification confirmed on enquiry basis.',
      id: 'Cabai merah India untuk produsen makanan, pengolah rempah dan importir komoditas di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nSHU: subject to variety and grade\nAdmixture: Max 2%\nPacking: 25 kg / 50 kg bags\nOrigin: India (Guntur, Teja, 334, Byadagi varieties) — subject to availability',
      id: 'Kadar Air: Maks 12%\nSHU: tergantung varietas dan grade\nCampuran: Maks 2%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Spice processing | Food manufacturing | Seasoning | Chilli powder production',
      id: 'Pengolahan rempah | Produksi makanan | Bumbu | Produksi bubuk cabai',
    },
    featured: true,
  },
  {
    id: 'turmeric',
    categoryId: 'spices',
    name: { en: 'Turmeric (from India)', id: 'Kunyit (dari India)' },
    description: {
      en: 'Indian turmeric (whole fingers and powder) for food manufacturers and spice processors in Indonesia. High curcumin content varieties available subject to confirmation.',
      id: 'Kunyit India (jari dan bubuk) untuk produsen makanan dan pengolah rempah di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nCurcumin: subject to grade and confirmation\nAdmixture: Max 2%\nPacking: 25 kg / 50 kg bags\nOrigin: India (Erode, Nizamabad, Sangli varieties) — subject to availability',
      id: 'Kadar Air: Maks 12%\nKurkumin: tergantung grade dan konfirmasi\nCampuran: Maks 2%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Spice processing | Food colouring | Food manufacturing | Traditional medicine ingredients',
      id: 'Pengolahan rempah | Pewarna makanan | Produksi makanan | Bahan jamu tradisional',
    },
    featured: false,
  },
  {
    id: 'cumin-seeds',
    categoryId: 'spices',
    name: { en: 'Cumin Seeds / Jeera (from India)', id: 'Biji Jintan / Jeera (dari India)' },
    description: {
      en: 'Indian cumin seeds (jeera) for food manufacturers, spice processors and commodity importers in Indonesia. Machine clean and sortex clean grades available subject to confirmation.',
      id: 'Biji jintan India (jeera) untuk produsen makanan, pengolah rempah dan importir komoditas di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 9%\nPurity: Min 99% (machine clean); 99.5% (sortex clean)\nAdmixture: Max 1–2%\nPacking: 25 kg / 50 kg bags\nOrigin: India (Rajasthan, Gujarat) — subject to availability',
      id: 'Kadar Air: Maks 9%\nKemurnian: Min 99% (machine clean); 99,5% (sortex clean)\nCampuran: Maks 1–2%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Spice processing | Food manufacturing | Seasoning and flavouring | Cumin powder production',
      id: 'Pengolahan rempah | Produksi makanan | Bumbu dan perisa | Produksi bubuk jintan',
    },
    featured: false,
  },
  {
    id: 'coriander-seeds',
    categoryId: 'spices',
    name: { en: 'Coriander Seeds (from India)', id: 'Biji Ketumbar (dari India)' },
    description: {
      en: 'Indian coriander seeds for food manufacturers and spice processors in Indonesia. Split and whole grades available subject to confirmation.',
      id: 'Biji ketumbar India untuk produsen makanan dan pengolah rempah di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 10%\nPurity: Min 99%\nEssential oil: subject to grade\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 10%\nKemurnian: Min 99%\nMinyak esensial: tergantung grade\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Spice processing | Food manufacturing | Seasoning | Coriander powder production',
      id: 'Pengolahan rempah | Produksi makanan | Bumbu | Produksi bubuk ketumbar',
    },
    featured: false,
  },
  {
    id: 'black-pepper',
    categoryId: 'spices',
    name: { en: 'Black Pepper (India / Vietnam)', id: 'Lada Hitam (India / Vietnam)' },
    description: {
      en: 'Black pepper from India and Vietnam for food manufacturers and spice processors in Indonesia. FAQ and ASTA grades available subject to confirmation.',
      id: 'Lada hitam dari India dan Vietnam untuk produsen makanan dan pengolah rempah di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 12%\nPurity: Min 99%\nGrade: 500 g/L, 550 g/L — subject to confirmation\nPacking: 25 kg / 50 kg bags\nOrigin: India, Vietnam — subject to availability',
      id: 'Kadar Air: Maks 12%\nKemurnian: Min 99%\nGrade: 500 g/L, 550 g/L — tergantung konfirmasi\nKemasan: Karung 25 kg / 50 kg\nAsal: India, Vietnam — tergantung ketersediaan',
    },
    applications: {
      en: 'Spice processing | Food manufacturing | Seasoning | Black pepper powder production',
      id: 'Pengolahan rempah | Produksi makanan | Bumbu | Produksi bubuk lada hitam',
    },
    featured: false,
  },
  {
    id: 'fenugreek',
    categoryId: 'spices',
    name: { en: 'Fenugreek Seeds (from India)', id: 'Biji Fenugreek / Klabet (dari India)' },
    description: {
      en: 'Indian fenugreek seeds for food manufacturers and spice processors in Indonesia.',
      id: 'Biji fenugreek India untuk produsen makanan dan pengolah rempah di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 10%\nPurity: Min 99%\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 10%\nKemurnian: Min 99%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Spice processing | Food manufacturing | Traditional food products',
      id: 'Pengolahan rempah | Produksi makanan | Produk makanan tradisional',
    },
    featured: false,
  },
  {
    id: 'fennel-seeds',
    categoryId: 'spices',
    name: { en: 'Fennel Seeds / Saunf (from India)', id: 'Biji Adas / Saunf (dari India)' },
    description: {
      en: 'Indian fennel seeds for food manufacturers and spice processors in Indonesia.',
      id: 'Biji adas India untuk produsen makanan dan pengolah rempah di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 10%\nPurity: Min 98–99%\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 10%\nKemurnian: Min 98–99%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Spice processing | Food manufacturing | Traditional food and beverage products',
      id: 'Pengolahan rempah | Produksi makanan | Produk makanan dan minuman tradisional',
    },
    featured: false,
  },
  {
    id: 'mustard-seeds',
    categoryId: 'spices',
    name: { en: 'Mustard Seeds (from India)', id: 'Biji Mustard (dari India)' },
    description: {
      en: 'Indian yellow and brown mustard seeds for food manufacturers, spice processors and oil extractors in Indonesia.',
      id: 'Biji mustard kuning dan cokelat India untuk produsen makanan, pengolah rempah dan ekstraktor minyak di Indonesia.',
    },
    specifications: {
      en: 'Moisture: Max 8%\nPurity: Min 99%\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Kadar Air: Maks 8%\nKemurnian: Min 99%\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Mustard oil extraction | Spice processing | Food manufacturing | Condiments',
      id: 'Ekstraksi minyak mustard | Pengolahan rempah | Produksi makanan | Kondimen',
    },
    featured: false,
  },

  // ─── FOOD INGREDIENTS & SWEETENERS ───────────────────────────────────────────
  {
    id: 'liquid-glucose',
    categoryId: 'food-ingredients',
    name: { en: 'Liquid Glucose (from India)', id: 'Liquid Glucose (dari India)' },
    description: {
      en: 'Liquid glucose from India for confectionery manufacturers, bakeries, ice cream producers and food processing companies in Indonesia. Used in sweets, biscuits, ice cream, jams, jellies, preserves, pastries and related food applications.',
      id: 'Liquid glucose dari India untuk produsen kembang gula, bakeri, produsen es krim dan perusahaan pengolahan makanan di Indonesia.',
    },
    specifications: {
      en: 'DE (Dextrose Equivalent): subject to grade and confirmation\nBrix: subject to grade\nMoisture: subject to grade\nPacking: Drums / Flexi-tanks / IBC tanks — subject to buyer requirement\nOrigin: India — subject to availability',
      id: 'DE (Dextrose Equivalent): tergantung grade dan konfirmasi\nBrix: tergantung grade\nKadar Air: tergantung grade\nKemasan: Drum / Flexi-tank / IBC tank — tergantung kebutuhan pembeli\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Confectionery and sweets | Biscuits and bakery | Ice cream | Jams and preserves | Pastries | Food processing',
      id: 'Kembang gula dan manisan | Biskuit dan bakeri | Es krim | Selai dan pengawetan | Kue | Pengolahan makanan',
    },
    featured: true,
  },
  {
    id: 'corn-flour-food',
    categoryId: 'food-ingredients',
    name: { en: 'Corn Flour — Food Grade (from India)', id: 'Corn Flour — Food Grade (dari India)' },
    description: {
      en: 'Food-grade corn flour from India for food manufacturers and confectionery producers in Indonesia. For baking, thickening, coating and food processing applications.',
      id: 'Corn flour food grade dari India untuk produsen makanan dan produsen kembang gula di Indonesia.',
    },
    specifications: {
      en: 'Grade: Food grade\nMoisture: Max 12%\nStarch: Min 85% typical\nPacking: 25 kg / 50 kg PP bags\nOrigin: India — subject to availability',
      id: 'Grade: Food grade\nKadar Air: Maks 12%\nPati: Min 85% tipikal\nKemasan: Karung PP 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Baking and thickening | Coating and frying | Food processing | Confectionery',
      id: 'Baking dan pengental | Pelapisan dan penggorengan | Pengolahan makanan | Kembang gula',
    },
    featured: false,
  },
  {
    id: 'rice-flour-food',
    categoryId: 'food-ingredients',
    name: { en: 'Rice Flour — Food Grade (from India)', id: 'Tepung Beras — Food Grade (dari India)' },
    description: {
      en: 'Food-grade rice flour from India for snack manufacturers, confectionery producers and food processors in Indonesia.',
      id: 'Tepung beras food grade dari India untuk produsen snack, produsen kembang gula dan pengolah makanan di Indonesia.',
    },
    specifications: {
      en: 'Grade: Food grade\nMoisture: Max 12%\nFineness: subject to grade and buyer specification\nPacking: 25 kg / 50 kg bags\nOrigin: India — subject to availability',
      id: 'Grade: Food grade\nKadar Air: Maks 12%\nKehalusan: tergantung grade dan spesifikasi pembeli\nKemasan: Karung 25 kg / 50 kg\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Snack manufacturing | Confectionery | Bakery and batter | Traditional food products',
      id: 'Produksi snack | Kembang gula | Bakeri dan adonan | Produk makanan tradisional',
    },
    featured: false,
  },

  // ─── EDIBLE OILS ──────────────────────────────────────────────────────────────
  {
    id: 'palm-oil',
    categoryId: 'edible-oils',
    name: { en: 'Palm Oil RBD', id: 'Minyak Sawit RBD' },
    description: {
      en: 'Palm oil RBD for food manufacturers and commodity importers. Availability, origin and specification confirmed on enquiry basis.',
      id: 'Minyak sawit RBD untuk produsen makanan dan importir komoditas. Ketersediaan, asal dan spesifikasi dikonfirmasi berdasarkan permintaan.',
    },
    specifications: {
      en: 'FFA: Max 0.1%\nMoisture: Max 0.1%\nPacking: Flexitanks / IBC / Drums\nOrigin: Indonesia, Malaysia — subject to availability\nNote: Specification and price confirmed on enquiry basis.',
      id: 'FFA: Maks 0,1%\nKadar Air: Maks 0,1%\nKemasan: Flexitank / IBC / Drum\nAsal: Indonesia, Malaysia — tergantung ketersediaan',
    },
    applications: {
      en: 'Cooking oil | Food manufacturing | Margarine | Industrial food applications',
      id: 'Minyak goreng | Produksi makanan | Margarin | Aplikasi makanan industri',
    },
    featured: false,
  },
  {
    id: 'groundnut-oil',
    categoryId: 'edible-oils',
    name: { en: 'Groundnut Oil (from India)', id: 'Minyak Kacang Tanah (dari India)' },
    description: {
      en: 'Groundnut oil from India. Availability, specification and price confirmed on enquiry basis.',
      id: 'Minyak kacang tanah dari India. Ketersediaan, spesifikasi dan harga dikonfirmasi berdasarkan permintaan.',
    },
    specifications: {
      en: 'FFA: Max 0.5%\nMoisture: Max 0.1%\nPacking: Drums / Flexitanks\nOrigin: India — subject to availability',
      id: 'FFA: Maks 0,5%\nKadar Air: Maks 0,1%\nKemasan: Drum / Flexitank\nAsal: India — tergantung ketersediaan',
    },
    applications: {
      en: 'Cooking oil | Food manufacturing | Snack frying | Food processing',
      id: 'Minyak goreng | Produksi makanan | Penggorengan snack | Pengolahan makanan',
    },
    featured: false,
  },
  {
    id: 'soybean-oil',
    categoryId: 'edible-oils',
    name: { en: 'Soybean Oil', id: 'Minyak Kedelai' },
    description: {
      en: 'Soybean oil for food manufacturers and commodity importers. Availability, origin and specification confirmed on enquiry basis.',
      id: 'Minyak kedelai untuk produsen makanan dan importir komoditas. Ketersediaan, asal dan spesifikasi dikonfirmasi berdasarkan permintaan.',
    },
    specifications: {
      en: 'FFA: Max 0.1%\nMoisture: Max 0.1%\nPacking: Flexitanks / Drums\nOrigin: India, South America — subject to availability',
      id: 'FFA: Maks 0,1%\nKadar Air: Maks 0,1%\nKemasan: Flexitank / Drum\nAsal: India, Amerika Selatan — tergantung ketersediaan',
    },
    applications: {
      en: 'Cooking oil | Food manufacturing | Margarine | Industrial food applications',
      id: 'Minyak goreng | Produksi makanan | Margarin | Aplikasi makanan industri',
    },
    featured: false,
  },

  // ─── FERTILIZERS ──────────────────────────────────────────────────────────────
  {
    id: 'dap',
    categoryId: 'fertilizer',
    name: { en: 'DAP Fertilizer 18-46-0', id: 'Pupuk DAP 18-46-0' },
    description: {
      en: 'DAP (Di-Ammonium Phosphate) 18-46-0 fertilizer for importers and distributors in Indonesia. Availability, origin and price confirmed on enquiry basis.',
      id: 'Pupuk DAP (Di-Ammonium Phosphate) 18-46-0 untuk importir dan distributor di Indonesia. Ketersediaan, asal dan harga dikonfirmasi berdasarkan permintaan.',
    },
    specifications: {
      en: 'Nitrogen: 18%\nPhosphate (P2O5): 46%\nPacking: 50 kg bags or Bulk\nOrigin: Morocco, China, Saudi Arabia — subject to availability',
      id: 'Nitrogen: 18%\nFosfat (P2O5): 46%\nKemasan: Karung 50 kg atau Curah\nAsal: Maroko, China, Arab Saudi — tergantung ketersediaan',
    },
    applications: {
      en: 'Crop nutrition | Agricultural use | Fertilizer distribution',
      id: 'Nutrisi tanaman | Penggunaan pertanian | Distribusi pupuk',
    },
    featured: false,
  },
  {
    id: 'urea',
    categoryId: 'fertilizer',
    name: { en: 'Urea 46%N', id: 'Urea 46%N' },
    description: {
      en: 'Urea 46%N fertilizer for importers and distributors in Indonesia. Availability, origin and price confirmed on enquiry basis.',
      id: 'Pupuk Urea 46%N untuk importir dan distributor di Indonesia. Ketersediaan, asal dan harga dikonfirmasi berdasarkan permintaan.',
    },
    specifications: {
      en: 'Nitrogen: 46% min\nBiuret: Max 1%\nPacking: 50 kg bags or Bulk\nOrigin: Middle East, Russia, China — subject to availability',
      id: 'Nitrogen: Min 46%\nBiuret: Maks 1%\nKemasan: Karung 50 kg atau Curah\nAsal: Timur Tengah, Rusia, China — tergantung ketersediaan',
    },
    applications: {
      en: 'Crop nutrition | Agricultural use | Fertilizer distribution',
      id: 'Nutrisi tanaman | Penggunaan pertanian | Distribusi pupuk',
    },
    featured: false,
  },
  {
    id: 'npk',
    categoryId: 'fertilizer',
    name: { en: 'NPK Complex Fertilizer', id: 'Pupuk NPK Kompleks' },
    description: {
      en: 'NPK complex fertilizer for importers and distributors in Indonesia. Grade, availability and price confirmed on enquiry basis.',
      id: 'Pupuk NPK kompleks untuk importir dan distributor di Indonesia. Grade, ketersediaan dan harga dikonfirmasi berdasarkan permintaan.',
    },
    specifications: {
      en: 'Grade: subject to buyer requirement\nPacking: 50 kg bags or Bulk\nOrigin: China, Middle East, Europe — subject to availability',
      id: 'Grade: tergantung kebutuhan pembeli\nKemasan: Karung 50 kg atau Curah\nAsal: China, Timur Tengah, Eropa — tergantung ketersediaan',
    },
    applications: {
      en: 'Crop nutrition | Agricultural use | Fertilizer distribution',
      id: 'Nutrisi tanaman | Penggunaan pertanian | Distribusi pupuk',
    },
    featured: false,
  },
];

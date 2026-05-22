import type { ProductCategory } from '@shared/schema';

export const categories: ProductCategory[] = [
  {
    id: 'animal-feed',
    slug: 'animal-feed',
    name: { en: 'Animal Feed Ingredients', id: 'Bahan Baku Pakan Ternak' },
    description: {
      en: 'Soybean meal, rapeseed meal, rice DDGS, yellow maize, corn grits and other feed raw materials for Indonesian feed mills and animal feed manufacturers. Origin: India and other reliable markets.',
      id: 'Soybean meal, rapeseed meal, rice DDGS, jagung kuning, corn grits dan bahan baku pakan lainnya untuk pabrik pakan ternak di Indonesia. Asal: India dan pasar terpercaya lainnya.',
    },
    icon: 'feed',
    productCount: 9,
  },
  {
    id: 'grains',
    slug: 'grains',
    name: { en: 'Grains & Corn Products', id: 'Produk Jagung & Biji-bijian' },
    description: {
      en: 'Yellow maize, maize grits, corn grits, flaking grits, corn meal, corn flour, wheat, barley and sorghum. Sourced from India, Myanmar and other origin markets for food processing and industrial buyers.',
      id: 'Jagung kuning, maize grits, corn grits, flaking grits, corn meal, corn flour, gandum, barley dan sorghum. Bersumber dari India, Myanmar dan pasar asal lainnya untuk pengolahan makanan dan pembeli industri.',
    },
    icon: 'grains',
    productCount: 8,
  },
  {
    id: 'rice',
    slug: 'rice',
    name: { en: 'Rice & Milled Products', id: 'Produk Beras & Olahan' },
    description: {
      en: 'Rice grits, rice flour and related milled rice products for snack manufacturers, food processors and extruded product makers in Indonesia. Origin: India and Southeast Asia.',
      id: 'Rice grits, tepung beras dan produk olahan beras untuk produsen snack, pengolah makanan dan pembuat produk ekstrusi di Indonesia. Asal: India dan Asia Tenggara.',
    },
    icon: 'rice',
    productCount: 3,
  },
  {
    id: 'oilseeds',
    slug: 'oilseeds',
    name: { en: 'Oilseeds & Kernels', id: 'Biji Minyak & Kernel' },
    description: {
      en: 'Groundnut kernels (HPS peanuts), sesame seeds, soybeans, rapeseed/canola and sunflower seeds. Sourced from India and other reliable origin markets for oil extraction and food processing buyers.',
      id: 'Kacang tanah HPS, biji wijen, kedelai, rapeseed/canola dan biji bunga matahari. Bersumber dari India dan pasar asal terpercaya lainnya untuk pembeli ekstraksi minyak dan pengolahan makanan.',
    },
    icon: 'oilseeds',
    productCount: 5,
  },
  {
    id: 'pulses',
    slug: 'pulses',
    name: { en: 'Pulses & Beans', id: 'Kacang-kacangan & Polong' },
    description: {
      en: 'Chickpeas, gram grits, gram flour, green moong beans, red lentils, pigeon peas and black eyed peas from India. For food processors, snack manufacturers and commodity importers in Indonesia.',
      id: 'Chickpeas, gram grits, gram flour, kacang hijau, lentil merah, pigeon peas dan kacang tolo dari India. Untuk pengolah makanan, produsen snack dan importir komoditas di Indonesia.',
    },
    icon: 'pulses',
    productCount: 7,
  },
  {
    id: 'specialty-flours',
    slug: 'specialty-flours',
    name: { en: 'Specialty Grain Flours', id: 'Tepung Biji-bijian Khusus' },
    description: {
      en: 'Ragi flour, jowar flour, multigrain flour and other specialty grain flours from India. Used in traditional food products, snacks, flatbreads and bakery applications.',
      id: 'Tepung ragi, tepung jowar, tepung multigrain dan tepung biji-bijian khusus lainnya dari India. Digunakan dalam produk makanan tradisional, snack, roti pipih dan aplikasi bakeri.',
    },
    icon: 'flour',
    productCount: 3,
  },
  {
    id: 'spices',
    slug: 'spices',
    name: { en: 'Spices', id: 'Rempah-rempah' },
    description: {
      en: 'Red chilli, turmeric, cumin seeds, coriander, black pepper, fenugreek, fennel, mustard seeds and other Indian spices. For food manufacturers, spice processors and commodity importers in Indonesia.',
      id: 'Cabai merah, kunyit, biji jintan, ketumbar, lada hitam, fenugreek, adas, biji mustard dan rempah India lainnya. Untuk produsen makanan, pengolah rempah dan importir komoditas di Indonesia.',
    },
    icon: 'spices',
    productCount: 8,
  },
  {
    id: 'food-ingredients',
    slug: 'food-ingredients',
    name: { en: 'Food Ingredients & Sweeteners', id: 'Bahan Pangan & Pemanis' },
    description: {
      en: 'Liquid glucose, corn flour (food grade), rice flour (food grade) and other food ingredients. For confectionery manufacturers, bakeries and food processing companies in Indonesia.',
      id: 'Liquid glucose, corn flour (food grade), tepung beras (food grade) dan bahan pangan lainnya. Untuk produsen kembang gula, bakeri dan perusahaan pengolahan makanan di Indonesia.',
    },
    icon: 'food',
    productCount: 3,
  },
  {
    id: 'edible-oils',
    slug: 'edible-oils',
    name: { en: 'Edible Oils', id: 'Minyak Goreng' },
    description: {
      en: 'Palm oil RBD, groundnut oil and soybean oil. Availability and origin confirmed on enquiry basis. For food manufacturers and commodity importers in Indonesia.',
      id: 'Minyak sawit RBD, minyak kacang tanah dan minyak kedelai. Ketersediaan dan asal dikonfirmasi berdasarkan permintaan. Untuk produsen makanan dan importir komoditas di Indonesia.',
    },
    icon: 'oils',
    productCount: 3,
  },
  {
    id: 'fertilizer',
    slug: 'fertilizer',
    name: { en: 'Fertilizers', id: 'Pupuk' },
    description: {
      en: 'DAP, urea and NPK fertilizers. Availability, specification and origin confirmed case by case. For importers and distributors in Indonesia.',
      id: 'Pupuk DAP, urea dan NPK. Ketersediaan, spesifikasi dan asal dikonfirmasi per kasus. Untuk importir dan distributor di Indonesia.',
    },
    icon: 'fertilizer',
    productCount: 3,
  },
];

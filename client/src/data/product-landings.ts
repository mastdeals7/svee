export interface LandingSpec {
  label: string;
  value: string;
}

export interface ProductLandingData {
  slug: string;
  metaTitle: { en: string; id: string };
  metaDescription: { en: string; id: string };
  h1: { en: string; id: string };
  intro: { en: string; id: string };
  specs: { en: LandingSpec[]; id: LandingSpec[] };
  applications: { en: string[]; id: string[] };
  faqs: { q: { en: string; id: string }; a: { en: string; id: string } }[];
  waMessage: { en: string; id: string };
  imageKey: 'grains' | 'oilseeds' | 'spices' | 'bannerGrains' | 'bannerOilseeds' | 'bannerSpices';
}

export const productLandings: ProductLandingData[] = [

  // ── 1. SOYBEAN MEAL ──────────────────────────────────────────────────────────
  {
    slug: 'soybean-meal-soyameal-indonesia',
    metaTitle: {
      en: 'Soybean Meal (SBM) for Indonesia – Sourcing from India | PT Svee International',
      id: 'Soybean Meal (SBM) untuk Indonesia – Sourcing dari India | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International helps Indonesian feed mills and food processors source Soybean Meal (SBM / Soyameal) from India. Protein 46–48% typical. FCL and bulk. Contact via WhatsApp for availability and pricing.',
      id: 'PT Svee International membantu pabrik pakan dan pengolah makanan Indonesia sourcing Soybean Meal (SBM) dari India. Protein 46–48% tipikal. FCL dan curah. Hubungi via WhatsApp untuk ketersediaan dan harga.',
    },
    h1: {
      en: 'Soybean Meal (SBM / Soyameal) for Indonesian Feed Mills',
      id: 'Soybean Meal (SBM / Soyameal) untuk Pabrik Pakan Indonesia',
    },
    intro: {
      en: 'PT Svee International (Svee Komoditi) is an Indonesia-based sourcing support company helping Indonesian feed mills, poultry integrators and animal feed manufacturers source Soybean Meal (SBM / Soyameal) from India and other reliable origin markets. We check availability, coordinate specification requirements and follow shipment documentation from origin to Indonesia.',
      id: 'PT Svee International (Svee Komoditi) adalah perusahaan dukungan sourcing berbasis Indonesia yang membantu pabrik pakan, integrator unggas dan produsen pakan ternak Indonesia sourcing Soybean Meal (SBM / Soyameal) dari India dan pasar asal terpercaya lainnya. Kami memeriksa ketersediaan, mengkoordinasikan kebutuhan spesifikasi dan mengikuti dokumentasi pengiriman dari asal ke Indonesia.',
    },
    specs: {
      en: [
        { label: 'Protein', value: '46–48% typical (subject to supplier and grade confirmation)' },
        { label: 'Moisture', value: 'Max 12–13%' },
        { label: 'Crude Fibre', value: 'Max 3.5–5% (subject to grade)' },
        { label: 'Urease Activity', value: 'Subject to confirmation' },
        { label: 'Packing', value: 'Bulk / Jumbo bags (1 MT) / 50 kg PP bags' },
        { label: 'Origin', value: 'India, Argentina, Brazil — subject to availability' },
        { label: 'Incoterms', value: 'CIF / CFR / FOB — subject to negotiation' },
      ],
      id: [
        { label: 'Protein', value: '46–48% tipikal (tergantung pemasok dan konfirmasi grade)' },
        { label: 'Kadar Air', value: 'Maks 12–13%' },
        { label: 'Serat Kasar', value: 'Maks 3,5–5% (tergantung grade)' },
        { label: 'Aktivitas Urease', value: 'Tergantung konfirmasi' },
        { label: 'Kemasan', value: 'Curah / Jumbo bag (1 MT) / Karung PP 50 kg' },
        { label: 'Asal', value: 'India, Argentina, Brasil — tergantung ketersediaan' },
        { label: 'Incoterms', value: 'CIF / CFR / FOB — tergantung negosiasi' },
      ],
    },
    applications: {
      en: [
        'Broiler and layer poultry feed formulations',
        'Swine and pig feed',
        'Aquaculture / shrimp and fish feed',
        'Cattle and ruminant feed',
        'Pet food and specialty feed',
        'Feed mill blending and compounding',
      ],
      id: [
        'Formulasi pakan unggas (broiler dan layer)',
        'Pakan babi',
        'Pakan akuakultur / udang dan ikan',
        'Pakan sapi dan ruminansia',
        'Pakan hewan peliharaan dan pakan khusus',
        'Blending dan compounding pabrik pakan',
      ],
    },
    faqs: [
      {
        q: { en: 'What protein content is typical for SBM sourced from India?', id: 'Berapa kandungan protein tipikal untuk SBM yang bersumber dari India?' },
        a: {
          en: 'Indian soybean meal typically ranges from 46% to 48% crude protein, depending on extraction method and supplier. The exact protein level, moisture, fibre and urease activity are confirmed by the supplier COA (Certificate of Analysis) before each shipment. PT Svee International will coordinate to match your specification requirement.',
          id: 'Soybean meal India biasanya berkisar antara 46% hingga 48% protein kasar, tergantung pada metode ekstraksi dan pemasok. Kadar protein, kadar air, serat dan aktivitas urease yang tepat dikonfirmasi oleh COA (Certificate of Analysis) pemasok sebelum setiap pengiriman. PT Svee International akan mengkoordinasikan untuk memenuhi kebutuhan spesifikasi Anda.',
        },
      },
      {
        q: { en: 'What packing options are available for SBM imports into Indonesia?', id: 'Apa opsi kemasan yang tersedia untuk impor SBM ke Indonesia?' },
        a: {
          en: 'Soybean meal is available in bulk (vessel cargo), jumbo bags (approximately 1 MT per bag) or standard 50 kg PP woven bags. The packing option depends on the origin, supplier capability and buyer preference. We confirm packing options per enquiry.',
          id: 'Soybean meal tersedia dalam curah (kargo kapal), jumbo bag (sekitar 1 MT per bag) atau karung anyaman PP standar 50 kg. Opsi kemasan tergantung pada asal, kemampuan pemasok dan preferensi pembeli. Kami mengkonfirmasi opsi kemasan per permintaan.',
        },
      },
      {
        q: { en: 'How do I check SBM availability and request a price indication?', id: 'Bagaimana saya memeriksa ketersediaan SBM dan meminta indikasi harga?' },
        a: {
          en: 'Send us a WhatsApp message with your required quantity, delivery port, packing preference and any specification requirements. PT Svee International will check current availability with our sourcing network in India and respond with an indicative price and availability update, typically on the same business day.',
          id: 'Kirim pesan WhatsApp kepada kami dengan kuantitas yang dibutuhkan, pelabuhan pengiriman, preferensi kemasan dan persyaratan spesifikasi apa pun. PT Svee International akan memeriksa ketersediaan saat ini dengan jaringan sourcing kami di India dan merespons dengan indikasi harga dan pembaruan ketersediaan, biasanya pada hari bisnis yang sama.',
        },
      },
      {
        q: { en: 'What export documents are required to import SBM into Indonesia?', id: 'Dokumen ekspor apa yang diperlukan untuk mengimpor SBM ke Indonesia?' },
        a: {
          en: 'Typical export documents for SBM include: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate and COA (Certificate of Analysis). PT Svee International coordinates with the supplier and logistics partners to ensure the required documents are prepared. Note that final import clearance requirements in Indonesia depend on product classification, HS code, importer status and applicable BPOM or quarantine rules at the time of import.',
          id: 'Dokumen ekspor tipikal untuk SBM meliputi: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate dan COA. PT Svee International berkoordinasi dengan pemasok dan mitra logistik untuk memastikan dokumen yang diperlukan disiapkan. Perlu dicatat bahwa persyaratan izin impor di Indonesia tergantung pada klasifikasi produk, HS code, status importir dan aturan BPOM atau karantina yang berlaku pada saat impor.',
        },
      },
      {
        q: { en: 'Can PT Svee International source SBM in full container load (FCL) quantities?', id: 'Apakah PT Svee International dapat mensourcing SBM dalam kuantitas full container load (FCL)?' },
        a: {
          en: 'Yes, we primarily work with FCL and bulk quantities. Minimum order quantities depend on the origin, supplier and packing type. For India origin SBM, typical minimum quantities start from one FCL (approximately 20–25 MT depending on packing). For bulk shipments, quantities are larger. We confirm minimum quantities per enquiry.',
          id: 'Ya, kami terutama bekerja dengan kuantitas FCL dan curah. Kuantitas pesanan minimum tergantung pada asal, pemasok dan jenis kemasan. Untuk SBM asal India, kuantitas minimum tipikal dimulai dari satu FCL (sekitar 20–25 MT tergantung kemasan). Untuk pengiriman curah, kuantitasnya lebih besar. Kami mengkonfirmasi kuantitas minimum per permintaan.',
        },
      },
      {
        q: { en: 'What is PT Svee International\'s role in the SBM sourcing process?', id: 'Apa peran PT Svee International dalam proses sourcing SBM?' },
        a: {
          en: 'PT Svee International acts as an Indonesia-based sourcing broker. We check availability with our supplier network in India and other origins, coordinate product specification between the buyer requirement and supplier capability, support shipment documentation follow-up (BL, COA, phytosanitary, fumigation certificate, certificate of origin) and communicate between buyer and supplier throughout the process. We do not guarantee customs clearance outcomes — final import clearance depends on product classification, documents, importer status and applicable Indonesian regulations.',
          id: 'PT Svee International bertindak sebagai broker sourcing berbasis Indonesia. Kami memeriksa ketersediaan dengan jaringan pemasok kami di India dan asal lainnya, mengkoordinasikan spesifikasi produk antara kebutuhan pembeli dan kemampuan pemasok, mendukung tindak lanjut dokumentasi pengiriman (BL, COA, fitosanitasi, sertifikat fumigasi, sertifikat asal) dan berkomunikasi antara pembeli dan pemasok sepanjang proses. Kami tidak menjamin hasil kepabeanan — izin impor akhir tergantung pada klasifikasi produk, dokumen, status importir dan peraturan Indonesia yang berlaku.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Soybean Meal (SBM) for Indonesia. Please advise on availability, specification and indicative price.',
      id: 'Halo PT Svee International, saya membutuhkan Soybean Meal (SBM) untuk Indonesia. Mohon informasikan ketersediaan, spesifikasi dan indikasi harga.',
    },
    imageKey: 'grains',
  },

  // ── 2. RICE DDGS ──────────────────────────────────────────────────────────────
  {
    slug: 'rice-ddgs-indonesia',
    metaTitle: {
      en: 'Rice DDGS for Indonesian Feed Mills – Sourcing from India | PT Svee International',
      id: 'Rice DDGS untuk Pabrik Pakan Indonesia – Sourcing dari India | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Rice DDGS (Distillers Dried Grains with Solubles) from India for Indonesian feed mills and animal feed manufacturers. Contact via WhatsApp for availability and pricing.',
      id: 'PT Svee International mensourcing Rice DDGS dari India untuk pabrik pakan dan produsen pakan ternak Indonesia. Hubungi via WhatsApp untuk ketersediaan dan harga.',
    },
    h1: {
      en: 'Rice DDGS (Distillers Dried Grains) for Indonesian Feed Mills',
      id: 'Rice DDGS (Distillers Dried Grains) untuk Pabrik Pakan Indonesia',
    },
    intro: {
      en: 'Rice DDGS (Distillers Dried Grains with Solubles from rice processing) is used by Indonesian feed mills as a supplementary protein and fibre ingredient in poultry, livestock and aquaculture feed formulations. PT Svee International helps Indonesian buyers source Rice DDGS from India with support for specification coordination and shipment documentation.',
      id: 'Rice DDGS (Distillers Dried Grains with Solubles dari pengolahan beras) digunakan oleh pabrik pakan Indonesia sebagai bahan protein dan serat tambahan dalam formulasi pakan unggas, ternak dan akuakultur. PT Svee International membantu pembeli Indonesia sourcing Rice DDGS dari India dengan dukungan koordinasi spesifikasi dan dokumentasi pengiriman.',
    },
    specs: {
      en: [
        { label: 'Protein', value: '14–18% typical (subject to supplier and grade)' },
        { label: 'Moisture', value: 'Max 12%' },
        { label: 'Crude Fibre', value: 'Subject to grade and confirmation' },
        { label: 'Fat', value: 'Subject to confirmation' },
        { label: 'Packing', value: 'Bulk / 50 kg woven bags / Jumbo bags' },
        { label: 'Origin', value: 'India — subject to availability' },
      ],
      id: [
        { label: 'Protein', value: '14–18% tipikal (tergantung pemasok dan grade)' },
        { label: 'Kadar Air', value: 'Maks 12%' },
        { label: 'Serat Kasar', value: 'Tergantung grade dan konfirmasi' },
        { label: 'Lemak', value: 'Tergantung konfirmasi' },
        { label: 'Kemasan', value: 'Curah / Karung anyaman 50 kg / Jumbo bag' },
        { label: 'Asal', value: 'India — tergantung ketersediaan' },
      ],
    },
    applications: {
      en: [
        'Poultry feed (broiler and layer)',
        'Swine feed',
        'Cattle and ruminant feed',
        'Aquaculture feed (fish and shrimp)',
        'Feed mill supplementary protein and fibre source',
      ],
      id: [
        'Pakan unggas (broiler dan layer)',
        'Pakan babi',
        'Pakan sapi dan ruminansia',
        'Pakan akuakultur (ikan dan udang)',
        'Sumber protein dan serat tambahan pabrik pakan',
      ],
    },
    faqs: [
      {
        q: { en: 'What is Rice DDGS and how is it used in animal feed?', id: 'Apa itu Rice DDGS dan bagaimana penggunaannya dalam pakan ternak?' },
        a: {
          en: 'Rice DDGS (Distillers Dried Grains with Solubles) is a co-product of rice-based ethanol or starch production. It retains the protein, fibre, fat and other nutrients from the original grain after fermentation or starch extraction. Indonesian feed mills use it as a supplementary ingredient in compound feed to partially replace other protein sources and as an energy-fibre component.',
          id: 'Rice DDGS (Distillers Dried Grains with Solubles) adalah produk sampingan dari produksi etanol atau pati berbasis beras. Ini mempertahankan protein, serat, lemak dan nutrisi lain dari biji-bijian asli setelah fermentasi atau ekstraksi pati. Pabrik pakan Indonesia menggunakannya sebagai bahan tambahan dalam pakan campuran untuk sebagian menggantikan sumber protein lain dan sebagai komponen energi-serat.',
        },
      },
      {
        q: { en: 'What protein level can be expected from Rice DDGS from India?', id: 'Berapa kadar protein yang bisa diharapkan dari Rice DDGS dari India?' },
        a: {
          en: 'Rice DDGS from India typically has 14–18% crude protein, though this varies depending on the production facility and grade. Exact protein, moisture, fibre and fat content should be confirmed via COA from the supplier before each shipment. PT Svee International will coordinate to ensure the COA matches your requirement.',
          id: 'Rice DDGS dari India biasanya memiliki protein kasar 14–18%, meskipun ini bervariasi tergantung pada fasilitas produksi dan grade. Kandungan protein, kadar air, serat dan lemak yang tepat harus dikonfirmasi melalui COA dari pemasok sebelum setiap pengiriman.',
        },
      },
      {
        q: { en: 'Can Rice DDGS partially replace Soybean Meal in feed formulations?', id: 'Apakah Rice DDGS dapat sebagian menggantikan Soybean Meal dalam formulasi pakan?' },
        a: {
          en: 'Rice DDGS can serve as a partial substitute for soybean meal in feed formulations due to its protein and energy content, though the amino acid profile differs. Feed mill nutritionists typically determine the inclusion rate based on the specific formulation requirements, species and target production performance. We recommend consulting your nutritionist for inclusion rate guidance.',
          id: 'Rice DDGS dapat berfungsi sebagai pengganti parsial soybean meal dalam formulasi pakan karena kandungan protein dan energinya, meskipun profil asam amino berbeda. Ahli gizi pabrik pakan biasanya menentukan tingkat inklusi berdasarkan kebutuhan formulasi spesifik, spesies dan target kinerja produksi.',
        },
      },
      {
        q: { en: 'What packing is typical for Rice DDGS?', id: 'Kemasan apa yang tipikal untuk Rice DDGS?' },
        a: {
          en: 'Rice DDGS from India is typically packed in 50 kg woven polypropylene bags or jumbo bags (approximately 1 MT per bag). Bulk shipment may be available subject to supplier capability. Packing options are confirmed per enquiry.',
          id: 'Rice DDGS dari India biasanya dikemas dalam karung polipropilena anyaman 50 kg atau jumbo bag (sekitar 1 MT per bag). Pengiriman curah mungkin tersedia tergantung kemampuan pemasok. Opsi kemasan dikonfirmasi per permintaan.',
        },
      },
      {
        q: { en: 'How do I enquire about Rice DDGS availability and pricing?', id: 'Bagaimana cara bertanya tentang ketersediaan dan harga Rice DDGS?' },
        a: {
          en: 'Contact PT Svee International via WhatsApp with your required quantity, delivery port and packing preference. We will check current availability with our sourcing contacts in India and provide an indicative price and specification confirmation.',
          id: 'Hubungi PT Svee International via WhatsApp dengan kuantitas yang dibutuhkan, pelabuhan pengiriman dan preferensi kemasan. Kami akan memeriksa ketersediaan saat ini dengan kontak sourcing kami di India dan memberikan indikasi harga dan konfirmasi spesifikasi.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Rice DDGS for animal feed in Indonesia. Please advise on availability and indicative price.',
      id: 'Halo PT Svee International, saya membutuhkan Rice DDGS untuk pakan ternak di Indonesia. Mohon informasikan ketersediaan dan indikasi harga.',
    },
    imageKey: 'grains',
  },

  // ── 3. RAPESEED MEAL / CANOLA MEAL ───────────────────────────────────────────
  {
    slug: 'rapeseed-meal-canola-meal-indonesia',
    metaTitle: {
      en: 'Rapeseed Meal / Canola Meal for Indonesia – Sourcing from India | PT Svee International',
      id: 'Rapeseed Meal / Canola Meal untuk Indonesia – Sourcing dari India | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Rapeseed Meal (Canola Meal / Mustard Meal) from India for Indonesian feed mills. Protein 34–38% typical. Contact via WhatsApp for availability and pricing.',
      id: 'PT Svee International mensourcing Rapeseed Meal (Canola Meal / Mustard Meal) dari India untuk pabrik pakan Indonesia. Protein 34–38% tipikal. Hubungi via WhatsApp untuk ketersediaan dan harga.',
    },
    h1: {
      en: 'Rapeseed Meal / Canola Meal for Indonesian Feed Mills',
      id: 'Rapeseed Meal / Canola Meal untuk Pabrik Pakan Indonesia',
    },
    intro: {
      en: 'Rapeseed meal (also called canola meal or mustard meal, depending on variety) is a high-protein, high-fibre feed ingredient used by Indonesian feed mills as a partial protein source in livestock and poultry feed. PT Svee International helps Indonesian buyers source rapeseed meal from India and Australia with support for specification coordination, documentation and shipment follow-up.',
      id: 'Rapeseed meal (juga disebut canola meal atau mustard meal, tergantung varietas) adalah bahan pakan berprotein dan serat tinggi yang digunakan pabrik pakan Indonesia sebagai sumber protein parsial dalam pakan ternak dan unggas. PT Svee International membantu pembeli Indonesia sourcing rapeseed meal dari India dan Australia dengan dukungan koordinasi spesifikasi, dokumentasi dan tindak lanjut pengiriman.',
    },
    specs: {
      en: [
        { label: 'Protein', value: '34–38% typical (subject to grade and confirmation)' },
        { label: 'Moisture', value: 'Max 12%' },
        { label: 'Crude Fibre', value: '10–13% typical' },
        { label: 'Glucosinolates', value: 'Subject to grade and confirmation' },
        { label: 'Packing', value: 'Bulk / Jumbo bags / 50 kg woven bags' },
        { label: 'Origin', value: 'India, Australia, Canada — subject to availability' },
      ],
      id: [
        { label: 'Protein', value: '34–38% tipikal (tergantung grade dan konfirmasi)' },
        { label: 'Kadar Air', value: 'Maks 12%' },
        { label: 'Serat Kasar', value: '10–13% tipikal' },
        { label: 'Glukosinolat', value: 'Tergantung grade dan konfirmasi' },
        { label: 'Kemasan', value: 'Curah / Jumbo bag / Karung anyaman 50 kg' },
        { label: 'Asal', value: 'India, Australia, Kanada — tergantung ketersediaan' },
      ],
    },
    applications: {
      en: [
        'Poultry feed formulations (partial SBM replacement)',
        'Swine and pig feed',
        'Cattle and ruminant feed',
        'Aquaculture feed (at controlled inclusion rates)',
        'Feed mill protein diversification',
      ],
      id: [
        'Formulasi pakan unggas (pengganti SBM parsial)',
        'Pakan babi',
        'Pakan sapi dan ruminansia',
        'Pakan akuakultur (pada tingkat inklusi terkontrol)',
        'Diversifikasi protein pabrik pakan',
      ],
    },
    faqs: [
      {
        q: { en: 'What is the difference between Rapeseed Meal, Canola Meal and Mustard Meal?', id: 'Apa perbedaan antara Rapeseed Meal, Canola Meal dan Mustard Meal?' },
        a: {
          en: 'Rapeseed meal is the general term for the by-product of rapeseed oil extraction. Canola meal specifically refers to low-glucosinolate, low-erucic acid rapeseed varieties bred for food use. Mustard meal is from mustard seed extraction, often higher in glucosinolates. In trade, the terms are sometimes used interchangeably. The exact variety, glucosinolate level and specification is confirmed per supplier and per shipment.',
          id: 'Rapeseed meal adalah istilah umum untuk produk sampingan ekstraksi minyak rapeseed. Canola meal secara khusus merujuk pada varietas rapeseed rendah glukosinolat yang dibiakkan untuk penggunaan pangan. Mustard meal berasal dari ekstraksi biji mustard, seringkali lebih tinggi glukosinolatnya. Dalam perdagangan, istilah-istilah ini terkadang digunakan secara bergantian. Varietas, kadar glukosinolat dan spesifikasi yang tepat dikonfirmasi per pemasok dan per pengiriman.',
        },
      },
      {
        q: { en: 'What inclusion rate is typical for Rapeseed Meal in Indonesian poultry feed?', id: 'Berapa tingkat inklusi tipikal Rapeseed Meal dalam pakan unggas Indonesia?' },
        a: {
          en: 'Inclusion rates for rapeseed meal in poultry feed typically range from 5–15% depending on glucosinolate content and feed formulation objectives. Your feed nutritionist should determine the appropriate inclusion rate based on your specific formula and the COA of the batch being used.',
          id: 'Tingkat inklusi rapeseed meal dalam pakan unggas biasanya berkisar antara 5–15% tergantung pada kandungan glukosinolat dan tujuan formulasi pakan. Ahli gizi pakan Anda harus menentukan tingkat inklusi yang tepat berdasarkan formula spesifik Anda dan COA batch yang digunakan.',
        },
      },
      {
        q: { en: 'What origins are available for Rapeseed Meal?', id: 'Asal mana yang tersedia untuk Rapeseed Meal?' },
        a: {
          en: 'We can check availability from India, Australia and Canada depending on season and current market. Indian rapeseed / mustard meal is more frequently available than canola-grade meal. Australian and Canadian origins provide lower glucosinolate canola meal. Availability and origin options are confirmed per enquiry.',
          id: 'Kami dapat memeriksa ketersediaan dari India, Australia dan Kanada tergantung musim dan pasar saat ini. Rapeseed / mustard meal India lebih sering tersedia dibandingkan canola-grade meal. Asal Australia dan Kanada menyediakan canola meal rendah glukosinolat. Ketersediaan dan opsi asal dikonfirmasi per permintaan.',
        },
      },
      {
        q: { en: 'How do I request a price for Rapeseed Meal or Canola Meal?', id: 'Bagaimana cara meminta harga Rapeseed Meal atau Canola Meal?' },
        a: {
          en: 'Send a WhatsApp message to PT Svee International with your required specification (protein, glucosinolate level if required), quantity, delivery port and preferred packing. We will check current availability and indicative pricing from our sourcing network.',
          id: 'Kirim pesan WhatsApp ke PT Svee International dengan spesifikasi yang dibutuhkan (protein, tingkat glukosinolat jika diperlukan), kuantitas, pelabuhan pengiriman dan kemasan yang diinginkan. Kami akan memeriksa ketersediaan saat ini dan indikasi harga dari jaringan sourcing kami.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Rapeseed Meal / Canola Meal for animal feed in Indonesia. Please advise on availability and pricing.',
      id: 'Halo PT Svee International, saya membutuhkan Rapeseed Meal / Canola Meal untuk pakan ternak di Indonesia. Mohon informasikan ketersediaan dan harga.',
    },
    imageKey: 'grains',
  },

  // ── 4. YELLOW MAIZE / FEED CORN ──────────────────────────────────────────────
  {
    slug: 'yellow-maize-feed-corn-indonesia',
    metaTitle: {
      en: 'Yellow Maize / Feed Corn for Indonesia – India & Myanmar Origins | PT Svee International',
      id: 'Yellow Maize / Jagung Kuning untuk Indonesia – Asal India & Myanmar | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Yellow Maize (Feed Corn / Jagung Kuning) from India and Myanmar for Indonesian feed mills and poultry operations. Contact via WhatsApp for availability and pricing.',
      id: 'PT Svee International mensourcing Yellow Maize (Jagung Kuning) dari India dan Myanmar untuk pabrik pakan dan operasi unggas Indonesia. Hubungi via WhatsApp untuk ketersediaan dan harga.',
    },
    h1: {
      en: 'Yellow Maize / Feed Corn for Indonesian Feed Mills and Poultry Farms',
      id: 'Yellow Maize / Jagung Kuning untuk Pabrik Pakan dan Peternakan Unggas Indonesia',
    },
    intro: {
      en: 'Yellow maize (feed corn / jagung kuning) is the primary energy ingredient in Indonesian poultry, swine and aquaculture feed formulations. PT Svee International helps Indonesian feed mills and integrated poultry operations source yellow maize from India, Myanmar and other origin markets, coordinating availability checks, specification requirements and shipment documentation.',
      id: 'Jagung kuning (feed corn) adalah bahan energi utama dalam formulasi pakan unggas, babi dan akuakultur di Indonesia. PT Svee International membantu pabrik pakan dan operasi unggas terpadu Indonesia sourcing jagung kuning dari India, Myanmar dan pasar asal lainnya, mengkoordinasikan pemeriksaan ketersediaan, kebutuhan spesifikasi dan dokumentasi pengiriman.',
    },
    specs: {
      en: [
        { label: 'Moisture', value: 'Max 14%' },
        { label: 'Foreign Matter / Admixture', value: 'Max 2%' },
        { label: 'Broken Grains', value: 'Max 3%' },
        { label: 'Aflatoxin', value: 'Subject to confirmation per lot' },
        { label: 'Packing', value: 'Bulk / 50 kg woven PP bags' },
        { label: 'Origin', value: 'India, Myanmar, Brazil — subject to availability' },
        { label: 'Typical quantity', value: 'FCL and above (bulk for large volumes)' },
      ],
      id: [
        { label: 'Kadar Air', value: 'Maks 14%' },
        { label: 'Benda Asing / Campuran', value: 'Maks 2%' },
        { label: 'Biji Pecah', value: 'Maks 3%' },
        { label: 'Aflatoksin', value: 'Tergantung konfirmasi per lot' },
        { label: 'Kemasan', value: 'Curah / Karung PP anyaman 50 kg' },
        { label: 'Asal', value: 'India, Myanmar, Brasil — tergantung ketersediaan' },
        { label: 'Kuantitas tipikal', value: 'FCL ke atas (curah untuk volume besar)' },
      ],
    },
    applications: {
      en: [
        'Broiler and layer poultry feed (primary energy source)',
        'Swine and pig feed',
        'Aquaculture and shrimp feed',
        'Cattle feed',
        'Corn grits / corn flour manufacturing',
        'Starch industry',
      ],
      id: [
        'Pakan unggas broiler dan layer (sumber energi utama)',
        'Pakan babi',
        'Pakan akuakultur dan udang',
        'Pakan sapi',
        'Produksi corn grits / corn flour',
        'Industri pati',
      ],
    },
    faqs: [
      {
        q: { en: 'Which origins does PT Svee International source yellow maize from?', id: 'Dari asal mana PT Svee International mensourcing jagung kuning?' },
        a: {
          en: 'We primarily check availability from India and Myanmar. Seasonal availability from Brazil may also be explored. Availability depends on current crop season, export policy in the origin country and shipping schedule. We confirm origin options per enquiry.',
          id: 'Kami terutama memeriksa ketersediaan dari India dan Myanmar. Ketersediaan musiman dari Brasil juga dapat dieksplorasi. Ketersediaan tergantung musim panen saat ini, kebijakan ekspor di negara asal dan jadwal pengiriman. Kami mengkonfirmasi opsi asal per permintaan.',
        },
      },
      {
        q: { en: 'What is the typical moisture spec for imported yellow maize?', id: 'Berapa spesifikasi kadar air tipikal untuk jagung kuning impor?' },
        a: {
          en: 'Imported yellow maize is typically specified at maximum 14% moisture. Foreign matter is usually max 2% and broken grains max 3%. Aflatoxin levels are confirmed per lot via COA. Your specification requirements should be shared with us so we can match the right supplier.',
          id: 'Jagung kuning impor biasanya dispesifikasikan pada kadar air maksimum 14%. Benda asing biasanya maks 2% dan biji pecah maks 3%. Kadar aflatoksin dikonfirmasi per lot melalui COA. Persyaratan spesifikasi Anda harus dibagikan kepada kami sehingga kami dapat mencocokkan pemasok yang tepat.',
        },
      },
      {
        q: { en: 'How does Myanmar yellow maize compare to Indian maize?', id: 'Bagaimana jagung kuning Myanmar dibandingkan dengan jagung India?' },
        a: {
          en: 'Myanmar yellow maize and Indian yellow maize are both used as feed ingredients in Indonesia, but may differ in moisture, colour consistency, admixture levels and shipping lead time. Both origins require COA verification. Specific quality parameters and freight considerations should be discussed per enquiry.',
          id: 'Jagung kuning Myanmar dan jagung India keduanya digunakan sebagai bahan pakan di Indonesia, tetapi mungkin berbeda dalam kadar air, konsistensi warna, kadar campuran dan lead time pengiriman. Kedua asal memerlukan verifikasi COA. Parameter kualitas spesifik dan pertimbangan freight harus didiskusikan per permintaan.',
        },
      },
      {
        q: { en: 'What documents are needed for yellow maize import into Indonesia?', id: 'Dokumen apa yang diperlukan untuk impor jagung kuning ke Indonesia?' },
        a: {
          en: 'Typical documents include Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate and COA. Indonesian quarantine (BKIPM) requirements for maize import should be confirmed per shipment. PT Svee International coordinates document preparation support with the supplier.',
          id: 'Dokumen tipikal meliputi Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate dan COA. Persyaratan karantina Indonesia (BKIPM) untuk impor jagung harus dikonfirmasi per pengiriman. PT Svee International mengkoordinasikan dukungan persiapan dokumen dengan pemasok.',
        },
      },
      {
        q: { en: 'Can I source yellow maize in bulk vessel quantities?', id: 'Apakah saya bisa mensourcing jagung kuning dalam kuantitas kapal curah?' },
        a: {
          en: 'Yes, yellow maize can be sourced in both containerised (FCL) and bulk vessel quantities depending on the origin and buyer requirement. Bulk quantities require appropriate port and storage facilities at the destination. We discuss logistics requirements per enquiry.',
          id: 'Ya, jagung kuning dapat disourcing dalam kuantitas container (FCL) dan kapal curah tergantung asal dan kebutuhan pembeli. Kuantitas curah memerlukan fasilitas pelabuhan dan penyimpanan yang sesuai di tujuan. Kami mendiskusikan kebutuhan logistik per permintaan.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Yellow Maize / Feed Corn for Indonesia. Please advise on available origins, specification and indicative price.',
      id: 'Halo PT Svee International, saya membutuhkan Yellow Maize / Jagung Kuning untuk Indonesia. Mohon informasikan asal yang tersedia, spesifikasi dan indikasi harga.',
    },
    imageKey: 'grains',
  },

  // ── 5. CORN GRITS / MAIZE GRITS ──────────────────────────────────────────────
  {
    slug: 'corn-grits-maize-grits-india',
    metaTitle: {
      en: 'Corn Grits / Maize Grits from India for Indonesia – PT Svee International',
      id: 'Corn Grits / Maize Grits dari India untuk Indonesia – PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Corn Grits (Maize Grits) from India for Indonesian snack manufacturers, food processors and breweries. Multiple mesh sizes. Contact via WhatsApp.',
      id: 'PT Svee International mensourcing Corn Grits (Maize Grits) dari India untuk produsen snack, pengolah makanan dan brewery Indonesia. Berbagai ukuran mesh. Hubungi via WhatsApp.',
    },
    h1: {
      en: 'Corn Grits / Maize Grits from India for Indonesian Buyers',
      id: 'Corn Grits / Maize Grits dari India untuk Pembeli Indonesia',
    },
    intro: {
      en: 'Corn grits (also called maize grits) are coarse milled corn particles used in extruded snack production, breakfast cereals, brewery applications, bakery and confectionery. PT Svee International sources corn grits from India for Indonesian snack manufacturers, food processors and industrial buyers, with support for specification coordination (mesh size, grade, moisture) and shipment documentation.',
      id: 'Corn grits (juga disebut maize grits) adalah partikel jagung giling kasar yang digunakan dalam produksi snack ekstrusi, sereal sarapan, aplikasi brewery, bakeri dan kembang gula. PT Svee International mensourcing corn grits dari India untuk produsen snack, pengolah makanan dan pembeli industri Indonesia, dengan dukungan koordinasi spesifikasi (ukuran mesh, grade, kadar air) dan dokumentasi pengiriman.',
    },
    specs: {
      en: [
        { label: 'Moisture', value: 'Max 12–14%' },
        { label: 'Foreign Matter', value: 'Max 0.5%' },
        { label: 'Mesh / Particle Size', value: 'Subject to buyer specification' },
        { label: 'Grade options', value: 'Regular grits / Flaking grits / Corn meal — subject to requirement' },
        { label: 'Packing', value: '25 kg / 50 kg PP woven bags' },
        { label: 'Origin', value: 'India — subject to availability' },
      ],
      id: [
        { label: 'Kadar Air', value: 'Maks 12–14%' },
        { label: 'Benda Asing', value: 'Maks 0,5%' },
        { label: 'Mesh / Ukuran Partikel', value: 'Tergantung spesifikasi pembeli' },
        { label: 'Opsi grade', value: 'Regular grits / Flaking grits / Corn meal — tergantung kebutuhan' },
        { label: 'Kemasan', value: 'Karung PP anyaman 25 kg / 50 kg' },
        { label: 'Asal', value: 'India — tergantung ketersediaan' },
      ],
    },
    applications: {
      en: [
        'Extruded snack manufacturing (puffed snacks, namkeen)',
        'Breakfast cereal production',
        'Corn flakes and flaking applications',
        'Brewery and brewing industry',
        'Bakery and confectionery',
        'Industrial starch applications (by grade)',
      ],
      id: [
        'Produksi snack ekstrusi (puffed snack, namkeen)',
        'Produksi sereal sarapan',
        'Corn flakes dan aplikasi flaking',
        'Industri brewery dan brewing',
        'Bakeri dan kembang gula',
        'Aplikasi pati industri (berdasarkan grade)',
      ],
    },
    faqs: [
      {
        q: { en: 'What is the difference between Corn Grits and Maize Grits?', id: 'Apa perbedaan antara Corn Grits dan Maize Grits?' },
        a: {
          en: 'Corn Grits and Maize Grits refer to the same product — coarsely milled corn particles. Both terms are used in trade and are accepted by buyers across Indonesia. The product specification (moisture, mesh size, purity, grade) is what differentiates product types, not the name.',
          id: 'Corn Grits dan Maize Grits merujuk pada produk yang sama — partikel jagung giling kasar. Kedua istilah digunakan dalam perdagangan dan diterima oleh pembeli di seluruh Indonesia. Spesifikasi produk (kadar air, ukuran mesh, kemurnian, grade) yang membedakan jenis produk, bukan namanya.',
        },
      },
      {
        q: { en: 'What mesh sizes are available for Corn Grits from India?', id: 'Ukuran mesh apa yang tersedia untuk Corn Grits dari India?' },
        a: {
          en: 'Indian corn grits suppliers produce a range of mesh sizes to suit different applications — coarser grades for snack extrusion, finer grades for corn meal applications, and de-germed flaking grits for corn flake production. Specific mesh size availability depends on the supplier. Share your requirement and we will confirm what is available.',
          id: 'Pemasok corn grits India memproduksi berbagai ukuran mesh untuk memenuhi aplikasi yang berbeda — grade lebih kasar untuk ekstrusi snack, grade lebih halus untuk aplikasi corn meal, dan flaking grits de-germed untuk produksi corn flake. Ketersediaan ukuran mesh spesifik tergantung pada pemasok. Bagikan kebutuhan Anda dan kami akan mengkonfirmasi apa yang tersedia.',
        },
      },
      {
        q: { en: 'What packing is typical for Corn Grits from India?', id: 'Kemasan apa yang tipikal untuk Corn Grits dari India?' },
        a: {
          en: 'Corn grits from India are typically packed in 25 kg or 50 kg polypropylene woven bags with inner lining. Food-grade packing is available for food applications. The specific packing should be confirmed with the supplier per order.',
          id: 'Corn grits dari India biasanya dikemas dalam karung anyaman polipropilena 25 kg atau 50 kg dengan lapisan dalam. Kemasan food-grade tersedia untuk aplikasi pangan. Kemasan spesifik harus dikonfirmasi dengan pemasok per pesanan.',
        },
      },
      {
        q: { en: 'What documents are provided for Corn Grits imports into Indonesia?', id: 'Dokumen apa yang disediakan untuk impor Corn Grits ke Indonesia?' },
        a: {
          en: 'Typical export documents include Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate and COA. PT Svee International coordinates document follow-up with the supplier. Final import clearance depends on HS code classification and applicable Indonesian regulations at the time of import.',
          id: 'Dokumen ekspor tipikal meliputi Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate dan COA. PT Svee International mengkoordinasikan tindak lanjut dokumen dengan pemasok. Izin impor akhir tergantung pada klasifikasi HS code dan peraturan Indonesia yang berlaku pada saat impor.',
        },
      },
      {
        q: { en: 'What minimum quantity is required for Corn Grits?', id: 'Berapa kuantitas minimum yang diperlukan untuk Corn Grits?' },
        a: {
          en: 'Minimum quantities typically start from one FCL (approximately 20–25 MT depending on packing). Larger orders in multiple containers or partial vessel loads can be arranged depending on buyer requirement and supplier schedule. Minimum order quantity is confirmed per enquiry.',
          id: 'Kuantitas minimum biasanya dimulai dari satu FCL (sekitar 20–25 MT tergantung kemasan). Pesanan lebih besar dalam beberapa container atau muatan kapal parsial dapat diatur tergantung kebutuhan pembeli dan jadwal pemasok. Kuantitas pesanan minimum dikonfirmasi per permintaan.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Corn Grits / Maize Grits from India for Indonesia. Please advise on mesh size options, availability and pricing.',
      id: 'Halo PT Svee International, saya membutuhkan Corn Grits / Maize Grits dari India untuk Indonesia. Mohon informasikan opsi ukuran mesh, ketersediaan dan harga.',
    },
    imageKey: 'grains',
  },

  // ── 6. RICE GRITS ────────────────────────────────────────────────────────────
  {
    slug: 'rice-grits-indonesia',
    metaTitle: {
      en: 'Rice Grits from India for Indonesian Snack & Food Manufacturers | PT Svee International',
      id: 'Rice Grits dari India untuk Produsen Snack & Makanan Indonesia | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Rice Grits from India for Indonesian snack extruders, food processors and instant food manufacturers. Multiple grades. Contact via WhatsApp for availability and pricing.',
      id: 'PT Svee International mensourcing Rice Grits dari India untuk ekstruder snack, pengolah makanan dan produsen makanan instan Indonesia. Berbagai grade. Hubungi via WhatsApp.',
    },
    h1: {
      en: 'Rice Grits from India for Indonesian Snack and Food Manufacturers',
      id: 'Rice Grits dari India untuk Produsen Snack dan Makanan Indonesia',
    },
    intro: {
      en: 'Rice grits are coarser broken rice particles prepared by grinding and sieving raw rice. They are widely used in extruded snack production, namkeen, bakery items, instant mixes, ready-to-eat products and selected food processing applications. PT Svee International helps Indonesian buyers source rice grits from India with support for specification coordination (mesh, grade, moisture) and shipment documentation.',
      id: 'Rice grits adalah partikel beras patah yang lebih kasar yang disiapkan dengan menggiling dan mengayak beras mentah. Banyak digunakan dalam produksi snack ekstrusi, namkeen, item bakeri, instan mix, produk siap makan dan aplikasi pengolahan makanan tertentu. PT Svee International membantu pembeli Indonesia sourcing rice grits dari India dengan dukungan koordinasi spesifikasi (mesh, grade, kadar air) dan dokumentasi pengiriman.',
    },
    specs: {
      en: [
        { label: 'Moisture', value: 'Max 12–14%' },
        { label: 'Mesh / Particle Size', value: 'Subject to buyer specification and grade' },
        { label: 'Broken %', value: 'Subject to grade' },
        { label: 'Foreign Matter', value: 'Subject to confirmation' },
        { label: 'Packing', value: '25 kg / 50 kg PP woven bags with inner liner' },
        { label: 'Origin', value: 'India — subject to availability' },
      ],
      id: [
        { label: 'Kadar Air', value: 'Maks 12–14%' },
        { label: 'Mesh / Ukuran Partikel', value: 'Tergantung spesifikasi pembeli dan grade' },
        { label: 'Pecah %', value: 'Tergantung grade' },
        { label: 'Benda Asing', value: 'Tergantung konfirmasi' },
        { label: 'Kemasan', value: 'Karung PP anyaman 25 kg / 50 kg dengan lapisan dalam' },
        { label: 'Asal', value: 'India — tergantung ketersediaan' },
      ],
    },
    applications: {
      en: [
        'Extruded puffed snacks',
        'Namkeen and savoury snack manufacturing',
        'Bakery items and crackers',
        'Instant mixes and ready-to-eat food products',
        'Traditional food applications',
        'Rice-based food processing',
      ],
      id: [
        'Snack puffed ekstrusi',
        'Produksi namkeen dan snack gurih',
        'Item bakeri dan crackers',
        'Instan mix dan produk makanan siap makan',
        'Aplikasi makanan tradisional',
        'Pengolahan makanan berbasis beras',
      ],
    },
    faqs: [
      {
        q: { en: 'How are Rice Grits different from Rice Flour?', id: 'Apa perbedaan Rice Grits dengan Tepung Beras?' },
        a: {
          en: 'Rice Grits are coarser broken rice particles, typically used for snack extrusion and products that benefit from a granular texture. Rice Flour is finely ground rice powder used for baking, batters and smooth-texture food applications. The key difference is particle size — grits are coarser, flour is fine.',
          id: 'Rice Grits adalah partikel beras patah yang lebih kasar, biasanya digunakan untuk ekstrusi snack dan produk yang mendapat manfaat dari tekstur granular. Tepung Beras adalah bubuk beras halus yang digunakan untuk baking, adonan dan aplikasi makanan bertekstur halus. Perbedaan utamanya adalah ukuran partikel — grits lebih kasar, tepung lebih halus.',
        },
      },
      {
        q: { en: 'What mesh sizes are available for Rice Grits from India?', id: 'Ukuran mesh apa yang tersedia untuk Rice Grits dari India?' },
        a: {
          en: 'Indian suppliers offer rice grits in a range of mesh sizes to suit different snack extrusion and food processing requirements. The specific mesh size availability depends on the supplier. Share your particle size specification and we will confirm what can be sourced.',
          id: 'Pemasok India menawarkan rice grits dalam berbagai ukuran mesh untuk memenuhi persyaratan ekstrusi snack dan pengolahan makanan yang berbeda. Ketersediaan ukuran mesh spesifik tergantung pada pemasok. Bagikan spesifikasi ukuran partikel Anda dan kami akan mengkonfirmasi apa yang dapat disourcing.',
        },
      },
      {
        q: { en: 'What is the minimum order quantity for Rice Grits from India?', id: 'Berapa kuantitas pesanan minimum untuk Rice Grits dari India?' },
        a: {
          en: 'Minimum quantities typically start from one FCL (approximately 20–25 MT in 25 kg or 50 kg bags). The minimum order quantity depends on the specific supplier and grade. We confirm MOQ per enquiry.',
          id: 'Kuantitas minimum biasanya dimulai dari satu FCL (sekitar 20–25 MT dalam karung 25 kg atau 50 kg). Kuantitas pesanan minimum tergantung pada pemasok dan grade tertentu. Kami mengkonfirmasi MOQ per permintaan.',
        },
      },
      {
        q: { en: 'What food certifications or documents are provided with Rice Grits?', id: 'Sertifikasi makanan atau dokumen apa yang disediakan dengan Rice Grits?' },
        a: {
          en: 'Typical export documents include COA (Certificate of Analysis), Phytosanitary Certificate, Fumigation Certificate, Bill of Lading, Commercial Invoice, Packing List and Certificate of Origin. Food safety documentation requirements for import into Indonesia should be confirmed with your import agent based on the applicable HS code and BPOM regulations.',
          id: 'Dokumen ekspor tipikal meliputi COA, Phytosanitary Certificate, Fumigation Certificate, Bill of Lading, Commercial Invoice, Packing List dan Certificate of Origin. Persyaratan dokumentasi keamanan pangan untuk impor ke Indonesia harus dikonfirmasi dengan agen impor Anda berdasarkan HS code yang berlaku dan peraturan BPOM.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Rice Grits from India for Indonesia. Please advise on grade, mesh size options and pricing.',
      id: 'Halo PT Svee International, saya membutuhkan Rice Grits dari India untuk Indonesia. Mohon informasikan grade, opsi ukuran mesh dan harga.',
    },
    imageKey: 'bannerGrains',
  },

  // ── 7. CORN FLOUR ────────────────────────────────────────────────────────────
  {
    slug: 'corn-flour-india',
    metaTitle: {
      en: 'Corn Flour from India for Indonesian Buyers – Food & Industrial Grade | PT Svee International',
      id: 'Corn Flour dari India untuk Pembeli Indonesia – Food & Industrial Grade | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Corn Flour (food grade and industrial grade) from India for Indonesian food manufacturers and industrial buyers. Contact via WhatsApp for specification and pricing.',
      id: 'PT Svee International mensourcing Corn Flour (food grade dan industrial grade) dari India untuk produsen makanan dan pembeli industri Indonesia. Hubungi via WhatsApp untuk spesifikasi dan harga.',
    },
    h1: {
      en: 'Corn Flour from India for Indonesian Food Manufacturers and Industrial Buyers',
      id: 'Corn Flour dari India untuk Produsen Makanan dan Pembeli Industri Indonesia',
    },
    intro: {
      en: 'Corn flour from India is available in food grade and industrial grade for different end uses. Food grade corn flour is used in gluten-free baking, thickening, coating, sausage filling and confectionery. Industrial grade is used in paper and textile starch applications. PT Svee International sources corn flour from India for Indonesian buyers with support for specification coordination and shipment documentation.',
      id: 'Corn flour dari India tersedia dalam food grade dan industrial grade untuk kegunaan akhir yang berbeda. Corn flour food grade digunakan dalam baking bebas gluten, pengental, pelapisan, pengisi sosis dan kembang gula. Industrial grade digunakan dalam aplikasi pati kertas dan tekstil. PT Svee International mensourcing corn flour dari India untuk pembeli Indonesia dengan dukungan koordinasi spesifikasi dan dokumentasi pengiriman.',
    },
    specs: {
      en: [
        { label: 'Grade', value: 'Food grade / Industrial grade — subject to buyer requirement' },
        { label: 'Moisture', value: 'Max 12–14%' },
        { label: 'Starch content', value: 'Min 85% typical (food grade)' },
        { label: 'Mesh / Fineness', value: 'Subject to buyer specification' },
        { label: 'Colour', value: 'White to pale yellow (subject to grade)' },
        { label: 'Packing', value: '25 kg / 50 kg PP bags' },
        { label: 'Origin', value: 'India — subject to availability' },
      ],
      id: [
        { label: 'Grade', value: 'Food grade / Industrial grade — tergantung kebutuhan pembeli' },
        { label: 'Kadar Air', value: 'Maks 12–14%' },
        { label: 'Kandungan pati', value: 'Min 85% tipikal (food grade)' },
        { label: 'Mesh / Kehalusan', value: 'Tergantung spesifikasi pembeli' },
        { label: 'Warna', value: 'Putih hingga kuning pucat (tergantung grade)' },
        { label: 'Kemasan', value: 'Karung PP 25 kg / 50 kg' },
        { label: 'Asal', value: 'India — tergantung ketersediaan' },
      ],
    },
    applications: {
      en: [
        'Gluten-free baking (food grade)',
        'Sausage and meat product filler (food grade)',
        'Sauce and soup thickening (food grade)',
        'Snack coating and frying (food grade)',
        'Papad and flatbread making (food grade)',
        'Paper and textile starch (industrial grade)',
      ],
      id: [
        'Baking bebas gluten (food grade)',
        'Pengisi produk sosis dan daging (food grade)',
        'Pengental saus dan sup (food grade)',
        'Pelapisan dan penggorengan snack (food grade)',
        'Pembuatan papad dan roti pipih (food grade)',
        'Pati kertas dan tekstil (industrial grade)',
      ],
    },
    faqs: [
      {
        q: { en: 'What is the difference between food grade and industrial grade Corn Flour from India?', id: 'Apa perbedaan antara Corn Flour food grade dan industrial grade dari India?' },
        a: {
          en: 'Food grade corn flour meets food safety parameters for direct use in food production — lower microbial limits, controlled pesticide residues and suitable for human consumption applications. Industrial grade corn flour is used in paper, textile and non-food starch applications and does not necessarily meet food grade safety specifications. Always confirm the intended use and appropriate grade before ordering.',
          id: 'Corn flour food grade memenuhi parameter keamanan pangan untuk penggunaan langsung dalam produksi makanan — batas mikroba lebih rendah, residu pestisida terkontrol dan cocok untuk aplikasi konsumsi manusia. Corn flour industrial grade digunakan dalam aplikasi pati kertas, tekstil dan non-pangan dan tidak harus memenuhi spesifikasi keamanan food grade. Selalu konfirmasi penggunaan yang dimaksud dan grade yang sesuai sebelum memesan.',
        },
      },
      {
        q: { en: 'How does Corn Flour differ from Corn Starch?', id: 'Apa perbedaan Corn Flour dengan Corn Starch?' },
        a: {
          en: 'Corn flour is ground from the whole corn kernel and contains protein, fibre and starch. Corn starch (or cornstarch) is refined pure starch extracted from corn, with very high starch content and minimal protein or fibre. They have different functional properties and applications. PT Svee International can help source either, subject to availability.',
          id: 'Corn flour digiling dari seluruh biji jagung dan mengandung protein, serat dan pati. Corn starch adalah pati murni yang diekstraksi dari jagung, dengan kandungan pati sangat tinggi dan minimal protein atau serat. Keduanya memiliki sifat dan aplikasi fungsional yang berbeda.',
        },
      },
      {
        q: { en: 'What is the minimum order for Corn Flour from India?', id: 'Berapa pesanan minimum untuk Corn Flour dari India?' },
        a: {
          en: 'Minimum order typically starts from one FCL (approximately 20–25 MT in 25 kg or 50 kg bags). Grade, mesh size and exact specification affect minimum quantities. We confirm MOQ per enquiry.',
          id: 'Pesanan minimum biasanya dimulai dari satu FCL (sekitar 20–25 MT dalam karung 25 kg atau 50 kg). Grade, ukuran mesh dan spesifikasi yang tepat mempengaruhi kuantitas minimum. Kami mengkonfirmasi MOQ per permintaan.',
        },
      },
      {
        q: { en: 'Do Indonesian food regulations require any specific certification for imported Corn Flour?', id: 'Apakah peraturan pangan Indonesia memerlukan sertifikasi khusus untuk Corn Flour impor?' },
        a: {
          en: 'Corn flour imported for food use in Indonesia may require BPOM registration or notification depending on how it is used (direct sale as food ingredient or as raw material in a registered food product). Import requirements can also include phytosanitary certificate, fumigation certificate and COA. We recommend confirming applicable regulations with your import agent and relevant authorities. PT Svee International supports document coordination with the supplier but does not guarantee import clearance.',
          id: 'Corn flour yang diimpor untuk penggunaan pangan di Indonesia mungkin memerlukan registrasi atau notifikasi BPOM tergantung bagaimana penggunaannya. Persyaratan impor juga dapat mencakup phytosanitary certificate, fumigation certificate dan COA. Kami merekomendasikan mengkonfirmasi peraturan yang berlaku dengan agen impor dan otoritas terkait Anda.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Corn Flour from India for Indonesia. Please advise on grade, specification and pricing.',
      id: 'Halo PT Svee International, saya membutuhkan Corn Flour dari India untuk Indonesia. Mohon informasikan grade, spesifikasi dan harga.',
    },
    imageKey: 'grains',
  },

  // ── 8. RICE FLOUR ────────────────────────────────────────────────────────────
  {
    slug: 'rice-flour-india',
    metaTitle: {
      en: 'Rice Flour (Tepung Beras) from India for Indonesia | PT Svee International',
      id: 'Tepung Beras (Rice Flour) dari India untuk Indonesia | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Rice Flour (Tepung Beras) from India for Indonesian snack manufacturers, food processors and traditional food producers. Contact via WhatsApp for availability and pricing.',
      id: 'PT Svee International mensourcing Tepung Beras (Rice Flour) dari India untuk produsen snack, pengolah makanan dan produsen makanan tradisional Indonesia. Hubungi via WhatsApp.',
    },
    h1: {
      en: 'Rice Flour from India for Indonesian Food Manufacturers',
      id: 'Tepung Beras dari India untuk Produsen Makanan Indonesia',
    },
    intro: {
      en: 'Rice flour (tepung beras) from India is used in snack manufacturing, bakery items, instant mixes, ready-to-eat products, traditional Indonesian food applications and selected export food products. It is gluten-free and suitable for a range of applications where wheat flour is not used. PT Svee International sources rice flour from India for Indonesian buyers with support for specification coordination and documentation.',
      id: 'Tepung beras dari India digunakan dalam produksi snack, item bakeri, instan mix, produk siap makan, aplikasi makanan tradisional Indonesia dan produk makanan ekspor tertentu. Bebas gluten dan cocok untuk berbagai aplikasi di mana tepung gandum tidak digunakan. PT Svee International mensourcing tepung beras dari India untuk pembeli Indonesia.',
    },
    specs: {
      en: [
        { label: 'Moisture', value: 'Max 12%' },
        { label: 'Fineness', value: 'Subject to grade and buyer specification' },
        { label: 'Whiteness', value: 'Subject to grade' },
        { label: 'Foreign Matter', value: 'Subject to confirmation' },
        { label: 'Packing', value: '25 kg / 50 kg PP bags with inner liner' },
        { label: 'Origin', value: 'India — subject to availability' },
      ],
      id: [
        { label: 'Kadar Air', value: 'Maks 12%' },
        { label: 'Kehalusan', value: 'Tergantung grade dan spesifikasi pembeli' },
        { label: 'Keputihan', value: 'Tergantung grade' },
        { label: 'Benda Asing', value: 'Tergantung konfirmasi' },
        { label: 'Kemasan', value: 'Karung PP 25 kg / 50 kg dengan lapisan dalam' },
        { label: 'Asal', value: 'India — tergantung ketersediaan' },
      ],
    },
    applications: {
      en: [
        'Extruded snack manufacturing',
        'Bakery items (gluten-free baking)',
        'Instant mixes and ready-to-eat food',
        'Traditional Indonesian food (kue, jajan pasar, ongol-ongol)',
        'Coating and batter applications',
        'Rice-based confectionery',
      ],
      id: [
        'Produksi snack ekstrusi',
        'Item bakeri (baking bebas gluten)',
        'Instan mix dan makanan siap makan',
        'Makanan tradisional Indonesia (kue, jajan pasar, ongol-ongol)',
        'Aplikasi pelapisan dan adonan',
        'Kembang gula berbasis beras',
      ],
    },
    faqs: [
      {
        q: { en: 'What fineness grades of Rice Flour are available from India?', id: 'Grade kehalusan apa yang tersedia untuk Tepung Beras dari India?' },
        a: {
          en: 'Indian rice flour is available in different fineness grades depending on the application. Finer grades are used for baking and smooth-texture applications; coarser grades may be used for specific traditional food applications. Share your fineness requirement (mesh or particle size) and we will confirm what is available.',
          id: 'Tepung beras India tersedia dalam berbagai grade kehalusan tergantung aplikasinya. Grade lebih halus digunakan untuk baking dan aplikasi tekstur halus; grade lebih kasar dapat digunakan untuk aplikasi makanan tradisional tertentu. Bagikan kebutuhan kehalusan Anda dan kami akan mengkonfirmasi apa yang tersedia.',
        },
      },
      {
        q: { en: 'Is Indian Rice Flour suitable for traditional Indonesian food applications?', id: 'Apakah Tepung Beras India cocok untuk aplikasi makanan tradisional Indonesia?' },
        a: {
          en: 'Indian rice flour is generally compatible with traditional Indonesian food applications such as kue, onde-onde, jajan pasar and similar products. However, the specific variety of rice used and the processing method can affect texture and behaviour in recipes. We recommend requesting a small sample (where possible) and testing before placing a commercial order.',
          id: 'Tepung beras India umumnya kompatibel dengan aplikasi makanan tradisional Indonesia seperti kue, onde-onde, jajan pasar dan produk serupa. Namun, varietas beras tertentu yang digunakan dan metode pengolahan dapat mempengaruhi tekstur dan perilaku dalam resep. Kami merekomendasikan meminta sampel kecil dan menguji sebelum melakukan pesanan komersial.',
        },
      },
      {
        q: { en: 'What is the minimum order for Rice Flour from India?', id: 'Berapa pesanan minimum untuk Tepung Beras dari India?' },
        a: {
          en: 'Minimum order is typically one FCL (approximately 20–25 MT in 25 kg or 50 kg bags). The exact minimum depends on the supplier and grade. We confirm MOQ per enquiry.',
          id: 'Pesanan minimum biasanya satu FCL (sekitar 20–25 MT dalam karung 25 kg atau 50 kg). Minimum yang tepat tergantung pada pemasok dan grade. Kami mengkonfirmasi MOQ per permintaan.',
        },
      },
      {
        q: { en: 'What export documents are provided for Rice Flour from India?', id: 'Dokumen ekspor apa yang disediakan untuk Tepung Beras dari India?' },
        a: {
          en: 'Typical documents include COA, Phytosanitary Certificate, Fumigation Certificate, Bill of Lading, Commercial Invoice, Packing List and Certificate of Origin. Specific BPOM or import regulatory requirements for rice flour should be confirmed with your import agent. Final import clearance depends on product classification, documents, importer status and applicable Indonesian regulations.',
          id: 'Dokumen tipikal meliputi COA, Phytosanitary Certificate, Fumigation Certificate, Bill of Lading, Commercial Invoice, Packing List dan Certificate of Origin. Persyaratan regulasi BPOM atau impor spesifik untuk tepung beras harus dikonfirmasi dengan agen impor Anda. Izin impor akhir tergantung pada klasifikasi produk, dokumen, status importir dan peraturan Indonesia yang berlaku.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Rice Flour from India for Indonesia. Please advise on grade, fineness and pricing.',
      id: 'Halo PT Svee International, saya membutuhkan Tepung Beras dari India untuk Indonesia. Mohon informasikan grade, kehalusan dan harga.',
    },
    imageKey: 'bannerGrains',
  },

  // ── 9. GROUNDNUT KERNELS / PEANUTS HPS ───────────────────────────────────────
  {
    slug: 'groundnut-kernels-peanuts-india',
    metaTitle: {
      en: 'Groundnut Kernels HPS (Peanuts) from India for Indonesia | PT Svee International',
      id: 'Kacang Tanah HPS dari India untuk Indonesia | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources HPS Groundnut Kernels (Peanuts / Kacang Tanah) from India for Indonesian oil extractors, peanut butter producers and snack manufacturers. 40/50, 50/60 count available. Contact via WhatsApp.',
      id: 'PT Svee International mensourcing Kacang Tanah HPS dari India untuk ekstraktor minyak, produsen peanut butter dan produsen snack Indonesia. Count 40/50, 50/60 tersedia. Hubungi via WhatsApp.',
    },
    h1: {
      en: 'Groundnut Kernels HPS (Peanuts) from India for Indonesian Buyers',
      id: 'Kacang Tanah HPS dari India untuk Pembeli Indonesia',
    },
    intro: {
      en: 'HPS (Hand Picked Selected) groundnut kernels from India are used in edible oil extraction, peanut butter and peanut paste production, roasted peanut snacks, confectionery and food processing. PT Svee International sources groundnut kernels from India for Indonesian buyers, coordinating grade selection, aflatoxin requirements, packing and shipment documentation.',
      id: 'Kacang tanah HPS (Hand Picked Selected) dari India digunakan dalam ekstraksi minyak goreng, produksi peanut butter dan pasta kacang, snack kacang panggang, kembang gula dan pengolahan makanan. PT Svee International mensourcing kacang tanah HPS dari India untuk pembeli Indonesia, mengkoordinasikan pemilihan grade, persyaratan aflatoksin, kemasan dan dokumentasi pengiriman.',
    },
    specs: {
      en: [
        { label: 'Grade', value: 'HPS (Hand Picked Selected)' },
        { label: 'Count (per oz)', value: '40/50, 50/60, 60/70, 70/80 — subject to availability' },
        { label: 'Moisture', value: 'Max 8%' },
        { label: 'Oil Content', value: '48–50% typical' },
        { label: 'Aflatoxin', value: 'Subject to confirmation (typically max 10–20 ppb)' },
        { label: 'Types', value: 'Bold, Java, Red skin — subject to availability' },
        { label: 'Packing', value: '25 kg / 50 kg woven bags' },
        { label: 'Origin', value: 'India (Gujarat, Andhra Pradesh, Rajasthan)' },
      ],
      id: [
        { label: 'Grade', value: 'HPS (Hand Picked Selected)' },
        { label: 'Count (per oz)', value: '40/50, 50/60, 60/70, 70/80 — tergantung ketersediaan' },
        { label: 'Kadar Air', value: 'Maks 8%' },
        { label: 'Kandungan Minyak', value: '48–50% tipikal' },
        { label: 'Aflatoksin', value: 'Tergantung konfirmasi (biasanya maks 10–20 ppb)' },
        { label: 'Jenis', value: 'Bold, Java, Red skin — tergantung ketersediaan' },
        { label: 'Kemasan', value: 'Karung anyaman 25 kg / 50 kg' },
        { label: 'Asal', value: 'India (Gujarat, Andhra Pradesh, Rajasthan)' },
      ],
    },
    applications: {
      en: [
        'Edible groundnut oil extraction',
        'Peanut butter and peanut paste production',
        'Roasted peanut snacks',
        'Confectionery (peanut brittle, nut bars)',
        'Food processing and flavouring',
        'Export to food manufacturers',
      ],
      id: [
        'Ekstraksi minyak kacang tanah goreng',
        'Produksi peanut butter dan pasta kacang',
        'Snack kacang panggang',
        'Kembang gula (kacang brittle, nut bar)',
        'Pengolahan makanan dan perisa',
        'Ekspor ke produsen makanan',
      ],
    },
    faqs: [
      {
        q: { en: 'What does HPS mean for groundnut kernels?', id: 'Apa arti HPS untuk kacang tanah?' },
        a: {
          en: 'HPS stands for Hand Picked Selected — a quality grade designation indicating that the groundnut kernels have been sorted and selected by hand to remove damaged, discoloured, shrivelled or infested kernels. HPS grade ensures a higher level of kernel quality and cleanliness compared to regular grades.',
          id: 'HPS singkatan dari Hand Picked Selected — sebutan grade kualitas yang menunjukkan bahwa kacang tanah telah disortir dan dipilih secara manual untuk menghilangkan kernel yang rusak, berubah warna, keriput atau terinfestasi. Grade HPS memastikan tingkat kualitas dan kebersihan kernel yang lebih tinggi dibandingkan grade biasa.',
        },
      },
      {
        q: { en: 'What aflatoxin levels can be expected for Indian groundnut kernels?', id: 'Berapa kadar aflatoksin yang bisa diharapkan untuk kacang tanah India?' },
        a: {
          en: 'Aflatoxin in groundnut kernels varies by harvest, origin region and storage conditions. Indian exporters typically offer groundnut kernels tested for aflatoxin at max 10–20 ppb (parts per billion) for food-grade applications, though buyer-specific requirements (e.g. max 10 ppb for EU export standards) should be specified clearly. Aflatoxin levels are confirmed by pre-shipment COA and independent testing where required.',
          id: 'Aflatoksin dalam kacang tanah bervariasi berdasarkan panen, wilayah asal dan kondisi penyimpanan. Eksportir India biasanya menawarkan kacang tanah yang diuji aflatoksin pada maks 10–20 ppb untuk aplikasi food-grade, meskipun persyaratan spesifik pembeli harus ditentukan dengan jelas. Kadar aflatoksin dikonfirmasi oleh COA pra-pengiriman dan pengujian independen jika diperlukan.',
        },
      },
      {
        q: { en: 'What count sizes are available for Indian groundnut kernels?', id: 'Ukuran count apa yang tersedia untuk kacang tanah India?' },
        a: {
          en: 'Indian groundnut kernels are typically available in 40/50, 50/60, 60/70 and 70/80 count per ounce (the count refers to the number of kernels per ounce of weight — lower count means larger kernels). Availability of specific count sizes depends on season and current supplier stock. We confirm available counts per enquiry.',
          id: 'Kacang tanah India biasanya tersedia dalam count 40/50, 50/60, 60/70 dan 70/80 per ons (count merujuk pada jumlah kernel per ons berat — count lebih rendah berarti kernel lebih besar). Ketersediaan ukuran count spesifik tergantung musim dan stok pemasok saat ini. Kami mengkonfirmasi count yang tersedia per permintaan.',
        },
      },
      {
        q: { en: 'What variety of Indian groundnut kernel is best for oil extraction?', id: 'Varietas kacang tanah India apa yang terbaik untuk ekstraksi minyak?' },
        a: {
          en: 'For edible oil extraction, Bold type groundnut kernels (also called Runner or Virginia type) are most commonly used due to their higher oil content (typically 48–50%). Java type kernels are smaller and often preferred for direct consumption and peanut butter. Red skin varieties are also available. The best variety depends on your specific end use — share your requirement and we will advise accordingly.',
          id: 'Untuk ekstraksi minyak goreng, kacang tanah jenis Bold (juga disebut tipe Runner atau Virginia) paling umum digunakan karena kandungan minyaknya lebih tinggi (biasanya 48–50%). Kernel jenis Java lebih kecil dan sering disukai untuk konsumsi langsung dan peanut butter. Varietas red skin juga tersedia.',
        },
      },
      {
        q: { en: 'What documents are required to import groundnut kernels into Indonesia?', id: 'Dokumen apa yang diperlukan untuk mengimpor kacang tanah ke Indonesia?' },
        a: {
          en: 'Typical export documents for groundnut kernels include: Phytosanitary Certificate, Fumigation Certificate, COA (including aflatoxin test), Bill of Lading, Certificate of Origin, Commercial Invoice and Packing List. Indonesian import regulations for groundnut (including any quarantine, BPOM or inspection requirements) should be confirmed per shipment with your import agent. PT Svee International does not guarantee import clearance outcomes.',
          id: 'Dokumen ekspor tipikal untuk kacang tanah meliputi: Phytosanitary Certificate, Fumigation Certificate, COA (termasuk uji aflatoksin), Bill of Lading, Certificate of Origin, Commercial Invoice dan Packing List. Peraturan impor Indonesia untuk kacang tanah harus dikonfirmasi per pengiriman dengan agen impor Anda.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Groundnut Kernels HPS from India for Indonesia. Please advise on count size, aflatoxin spec, availability and pricing.',
      id: 'Halo PT Svee International, saya membutuhkan Kacang Tanah HPS dari India untuk Indonesia. Mohon informasikan ukuran count, spesifikasi aflatoksin, ketersediaan dan harga.',
    },
    imageKey: 'oilseeds',
  },

  // ── 10. LIQUID GLUCOSE ───────────────────────────────────────────────────────
  {
    slug: 'liquid-glucose-india',
    metaTitle: {
      en: 'Liquid Glucose from India for Indonesian Food Manufacturers | PT Svee International',
      id: 'Liquid Glucose dari India untuk Produsen Makanan Indonesia | PT Svee International',
    },
    metaDescription: {
      en: 'PT Svee International sources Liquid Glucose from India for Indonesian confectionery, bakery, ice cream and food processing manufacturers. Contact via WhatsApp for grade, availability and pricing.',
      id: 'PT Svee International mensourcing Liquid Glucose dari India untuk produsen kembang gula, bakeri, es krim dan pengolahan makanan Indonesia. Hubungi via WhatsApp untuk grade, ketersediaan dan harga.',
    },
    h1: {
      en: 'Liquid Glucose from India for Indonesian Confectionery and Food Manufacturers',
      id: 'Liquid Glucose dari India untuk Produsen Kembang Gula dan Makanan Indonesia',
    },
    intro: {
      en: 'Liquid glucose (also called glucose syrup) from India is a thick, viscous sweetener used in confectionery, bakery, ice cream, jams, soft drinks, preserved foods and pharmaceutical applications. It is produced from corn or other starch sources by enzymatic or acid hydrolysis. PT Svee International sources liquid glucose from India for Indonesian food manufacturers and confectionery producers, with support for grade selection, packing coordination and shipment documentation.',
      id: 'Liquid glucose (juga disebut glucose syrup) dari India adalah pemanis kental yang digunakan dalam kembang gula, bakeri, es krim, selai, minuman ringan, makanan yang diawetkan dan aplikasi farmasi. Diproduksi dari jagung atau sumber pati lainnya melalui hidrolisis enzimatis atau asam. PT Svee International mensourcing liquid glucose dari India untuk produsen makanan dan kembang gula Indonesia.',
    },
    specs: {
      en: [
        { label: 'DE (Dextrose Equivalent)', value: 'Subject to grade and buyer specification (typically DE 42–63)' },
        { label: 'Brix', value: 'Subject to grade and confirmation' },
        { label: 'Colour', value: 'Water white to light amber (subject to grade)' },
        { label: 'Sulphur Dioxide (SO₂)', value: 'Subject to grade and confirmation' },
        { label: 'Packing', value: 'Drums (approx 300 kg) / Flexi-tanks / IBC tanks' },
        { label: 'Origin', value: 'India — subject to availability' },
      ],
      id: [
        { label: 'DE (Dextrose Equivalent)', value: 'Tergantung grade dan spesifikasi pembeli (biasanya DE 42–63)' },
        { label: 'Brix', value: 'Tergantung grade dan konfirmasi' },
        { label: 'Warna', value: 'Water white hingga amber terang (tergantung grade)' },
        { label: 'Sulfur Dioksida (SO₂)', value: 'Tergantung grade dan konfirmasi' },
        { label: 'Kemasan', value: 'Drum (sekitar 300 kg) / Flexi-tank / IBC tank' },
        { label: 'Asal', value: 'India — tergantung ketersediaan' },
      ],
    },
    applications: {
      en: [
        'Confectionery and hard candy production',
        'Chocolate and sugar confectionery',
        'Bakery (soft bread, pastry, biscuits)',
        'Ice cream and frozen desserts',
        'Jams, jellies and fruit preserves',
        'Soft drinks and beverages',
        'Pharmaceutical preparations',
      ],
      id: [
        'Produksi kembang gula dan permen keras',
        'Kembang gula cokelat dan gula',
        'Bakeri (roti lunak, kue, biskuit)',
        'Es krim dan dessert beku',
        'Selai, agar-agar dan buah yang diawetkan',
        'Minuman ringan dan minuman',
        'Persiapan farmasi',
      ],
    },
    faqs: [
      {
        q: { en: 'What DE (Dextrose Equivalent) grades of Liquid Glucose are available from India?', id: 'Grade DE (Dextrose Equivalent) apa yang tersedia untuk Liquid Glucose dari India?' },
        a: {
          en: 'Liquid glucose from India is available in a range of DE values, commonly DE 42 (regular glucose syrup) and DE 63 (high maltose or high DE syrup), depending on the application. Lower DE grades provide more body and less sweetness; higher DE grades are sweeter and more fermentable. Share your required DE and Brix and we will confirm available grades.',
          id: 'Liquid glucose dari India tersedia dalam berbagai nilai DE, umumnya DE 42 (glucose syrup biasa) dan DE 63 (sirup high maltose atau high DE), tergantung aplikasinya. Grade DE lebih rendah memberikan lebih banyak kekentalan dan kurang manis; grade DE lebih tinggi lebih manis dan lebih dapat difermentasi. Bagikan DE dan Brix yang Anda butuhkan dan kami akan mengkonfirmasi grade yang tersedia.',
        },
      },
      {
        q: { en: 'What packing options are available for Liquid Glucose imports from India?', id: 'Opsi kemasan apa yang tersedia untuk impor Liquid Glucose dari India?' },
        a: {
          en: 'Liquid glucose from India is typically packed in 300 kg steel drums, IBC (Intermediate Bulk Container) tanks of approximately 1,000–1,200 kg, or flexi-tanks for full container load quantities. The most suitable packing depends on your unloading and storage capability. We confirm packing options per enquiry.',
          id: 'Liquid glucose dari India biasanya dikemas dalam drum baja 300 kg, IBC (Intermediate Bulk Container) tank sekitar 1.000–1.200 kg, atau flexi-tank untuk kuantitas full container load. Kemasan yang paling sesuai tergantung pada kemampuan bongkar muat dan penyimpanan Anda. Kami mengkonfirmasi opsi kemasan per permintaan.',
        },
      },
      {
        q: { en: 'What is the typical use of Liquid Glucose in confectionery manufacturing?', id: 'Apa penggunaan tipikal Liquid Glucose dalam produksi kembang gula?' },
        a: {
          en: 'In confectionery, liquid glucose is used to prevent crystallisation of sugar (anti-crystallisation agent), control sweetness, improve texture and add viscosity in hard candy, toffee, fudge, gummies and marshmallows. It also extends shelf life by retaining moisture in confectionery products. The appropriate DE grade depends on the specific product formulation.',
          id: 'Dalam kembang gula, liquid glucose digunakan untuk mencegah kristalisasi gula (agen anti-kristalisasi), mengontrol kemanisan, memperbaiki tekstur dan menambah viskositas dalam permen keras, toffee, fudge, gummies dan marshmallow. Juga memperpanjang umur simpan dengan mempertahankan kelembaban.',
        },
      },
      {
        q: { en: 'What food safety documentation is available for Liquid Glucose from India?', id: 'Dokumentasi keamanan pangan apa yang tersedia untuk Liquid Glucose dari India?' },
        a: {
          en: 'Indian liquid glucose suppliers provide COA (Certificate of Analysis) showing DE, Brix, colour, pH and microbiological parameters, FSSAI (Food Safety and Standards Authority of India) compliance documentation, and relevant test reports. For import into Indonesia, BPOM registration requirements depend on the product\'s end use and HS code. Confirm import requirements with your import agent.',
          id: 'Pemasok liquid glucose India menyediakan COA yang menunjukkan DE, Brix, warna, pH dan parameter mikrobiologi, dokumentasi kepatuhan FSSAI dan laporan uji yang relevan. Untuk impor ke Indonesia, persyaratan registrasi BPOM tergantung pada penggunaan akhir produk dan HS code. Konfirmasi persyaratan impor dengan agen impor Anda.',
        },
      },
      {
        q: { en: 'How do I get a quote for Liquid Glucose from India?', id: 'Bagaimana cara mendapatkan penawaran untuk Liquid Glucose dari India?' },
        a: {
          en: 'Contact PT Svee International via WhatsApp with your required DE grade, Brix, quantity, packing preference and delivery port. We will check current availability and indicative pricing from our sourcing contacts in India and respond with details.',
          id: 'Hubungi PT Svee International via WhatsApp dengan grade DE yang dibutuhkan, Brix, kuantitas, preferensi kemasan dan pelabuhan pengiriman. Kami akan memeriksa ketersediaan saat ini dan indikasi harga dari kontak sourcing kami di India.',
        },
      },
    ],
    waMessage: {
      en: 'Hello PT Svee International, I need Liquid Glucose from India for Indonesia. Please advise on DE grade, packing options, availability and pricing.',
      id: 'Halo PT Svee International, saya membutuhkan Liquid Glucose dari India untuk Indonesia. Mohon informasikan grade DE, opsi kemasan, ketersediaan dan harga.',
    },
    imageKey: 'bannerOilseeds',
  },
];

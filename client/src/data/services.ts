import type { Service } from '@shared/schema';

export const services: Service[] = [
  {
    id: 'sourcing',
    icon: 'global',
    title: {
      en: 'Sourcing & Supplier Coordination',
      id: 'Sourcing & Koordinasi Pemasok',
    },
    description: {
      en: 'We identify and connect with suitable suppliers across India and other origin markets based on the buyer\'s product requirement, quantity, specification and shipment timeline. Availability and origin options are confirmed on enquiry basis.',
      id: 'Kami mengidentifikasi dan terhubung dengan pemasok yang sesuai di India dan pasar asal lainnya berdasarkan kebutuhan produk, kuantitas, spesifikasi dan jadwal pengiriman pembeli. Ketersediaan dan opsi asal dikonfirmasi berdasarkan permintaan.',
    },
  },
  {
    id: 'procurement',
    icon: 'shipping',
    title: {
      en: 'Procurement Coordination',
      id: 'Koordinasi Pengadaan',
    },
    description: {
      en: 'We support price discussion, product specification checks, packing details and supplier communication so buyers can make informed purchase decisions. Specifications, packing, origin and price are confirmed case by case.',
      id: 'Kami mendukung diskusi harga, pemeriksaan spesifikasi produk, detail kemasan dan komunikasi pemasok sehingga pembeli dapat membuat keputusan pembelian yang tepat. Spesifikasi, kemasan, asal dan harga dikonfirmasi per kasus.',
    },
  },
  {
    id: 'logistics',
    icon: 'shipping',
    title: {
      en: 'Logistics & Importation Support',
      id: 'Dukungan Logistik & Importasi',
    },
    description: {
      en: 'We coordinate shipment follow-up, documentation, freight communication and import-related support through the required service partners until the cargo reaches Indonesia. Final import clearance depends on product classification, documents, importer status and applicable Indonesian regulations.',
      id: 'Kami mengkoordinasikan tindak lanjut pengiriman, dokumentasi, komunikasi pengiriman dan dukungan terkait impor melalui mitra layanan yang diperlukan hingga kargo tiba di Indonesia. Clearance impor akhir tergantung pada klasifikasi produk, dokumen, status importir dan peraturan Indonesia yang berlaku.',
    },
  },
  {
    id: 'documentation',
    icon: 'documentation',
    title: {
      en: 'Documentation & Trade Support',
      id: 'Dukungan Dokumentasi & Perdagangan',
    },
    description: {
      en: 'We assist with LC-related communication, shipping documents, inspection coordination, fumigation requirements and other practical trade documentation needs. Documents include commercial invoice, packing list, BL, certificate of origin, phytosanitary, fumigation certificate and COA where applicable.',
      id: 'Kami membantu komunikasi terkait LC, dokumen pengiriman, koordinasi inspeksi, persyaratan fumigasi dan kebutuhan dokumentasi perdagangan praktis lainnya. Dokumen meliputi invoice komersial, packing list, BL, sertifikat asal, fitosanitasi, sertifikat fumigasi dan COA jika diperlukan.',
    },
  },
  {
    id: 'custom-sourcing',
    icon: 'technical',
    title: {
      en: 'Custom Product Sourcing',
      id: 'Sourcing Produk Khusus',
    },
    description: {
      en: 'If a buyer needs a specific raw material or product not listed on the website, we can check availability through our supplier network and respond with possible origin options. Send us your product requirement and we will check and reply as soon as possible.',
      id: 'Jika pembeli membutuhkan bahan baku atau produk tertentu yang tidak tercantum di website, kami dapat memeriksa ketersediaan melalui jaringan pemasok kami dan merespons dengan opsi asal yang mungkin. Kirimkan kebutuhan produk Anda dan kami akan memeriksa dan membalas sesegera mungkin.',
    },
  },
];

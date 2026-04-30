import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial Power Generator - 500kVA',
    category: 'Energy',
    type: 'Machine',
    priceRange: '$15,000 - $25,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/product-generator-2c230423-1777524823319.webp',
    description: 'High-performance diesel generator for industrial sites and hospitals. Built for continuous operation in harsh African climates.',
    specs: {
      'Power Output': '500kVA',
      'Engine Type': 'V12 Turbo Diesel',
      'Fuel Consumption': '45L/hr at 75% load',
      'Cooling System': 'Water Cooled'
    },
    application: 'Backup power for manufacturing plants, data centers, and large-scale residential complexes.'
  },
  {
    id: '2',
    name: 'Heavy Duty Excavator EX-200',
    category: 'Construction',
    type: 'Machine',
    priceRange: '$85,000 - $120,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/hero-machinery-bd133bcf-1777524823486.webp',
    description: 'Versatile construction machinery optimized for earthmoving and site preparation.',
    specs: {
      'Operating Weight': '20,000kg',
      'Bucket Capacity': '0.8 - 1.2 m³',
      'Engine Power': '110kW',
      'Max Digging Depth': '6.5m'
    },
    application: 'Road construction, mining, and large-scale infrastructure projects.'
  },
  {
    id: '3',
    name: 'Precision CNC Lathe Machine',
    category: 'Manufacturing',
    type: 'Machine',
    priceRange: '$35,000 - $55,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/product-lathe-6b2b35c4-1777524823284.webp',
    description: 'High-precision computer-controlled lathe for manufacturing metal components with extreme accuracy.',
    specs: {
      'Max Swing Over Bed': '400mm',
      'Max Processing Length': '1000mm',
      'Spindle Speed': '2500 RPM',
      'Control System': 'FANUC 0i-TF'
    },
    application: 'Automotive parts production, aerospace engineering, and custom metal fabrication.'
  },
  {
    id: '4',
    name: 'Smart Irrigation Tractor 4WD',
    category: 'Agriculture',
    type: 'Machine',
    priceRange: '$22,000 - $38,000',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/product-tractor-dceda04f-1777524825503.webp',
    description: 'Modern agricultural tractor with integrated GPS and smart irrigation controls for high-efficiency farming.',
    specs: {
      'Engine Power': '85HP',
      'Transmission': '12 Forward + 12 Reverse',
      'Lifting Capacity': '2500kg',
      'Fuel Tank': '120L'
    },
    application: 'Large-scale grain farming, plantation management, and land clearing.'
  }
];

export const SERVICES = [
  {
    title: 'Global Sourcing',
    description: 'We leverage our networks in Germany and China to find the exact machinery and spare parts you need at competitive prices.',
    icon: 'Globe',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/warehouse-sourcing-18efeb14-1777524822983.webp'
  },
  {
    title: 'Supply Chain Logistics',
    description: 'End-to-end logistics from factory floor to your site in Nigeria or Ghana, including customs clearance and door-to-door delivery.',
    icon: 'Truck',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/global-logistics-23b0be8a-1777524823549.webp'
  },
  {
    title: 'Installation & Training',
    description: 'Our certified engineers ensure your equipment is set up correctly and your staff is fully trained to operate it safely.',
    icon: 'Settings',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/installation-team-2af2228b-1777524823766.webp'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing technical support and genuine spare parts supply to keep your operations running 24/7 without downtime.',
    icon: 'Wrench',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/maintenance-tech-cd43d5da-1777524825677.webp'
  }
];

export const INDUSTRIES = [
  { name: 'Construction', count: 124, icon: 'HardHat' },
  { name: 'Manufacturing', count: 86, icon: 'Factory' },
  { name: 'Agriculture', count: 52, icon: 'Sprout' },
  { name: 'Energy & Power', count: 41, icon: 'Zap' },
  { name: 'Mining', count: 28, icon: 'Pickaxe' }
];
export interface Product {
  id: string;
  name: string;
  category: 'Construction' | 'Manufacturing' | 'Agriculture' | 'Energy';
  type: 'Machine' | 'Spare Part' | 'Consumable';
  priceRange: string;
  image: string;
  specs: Record<string, string>;
  description: string;
  application: string;
}

export interface QuoteRequest {
  type: 'Machine' | 'Spare Part' | 'Project';
  partNumber?: string;
  budget: string;
  urgency: 'Low' | 'Medium' | 'High';
  description: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
}

export type Page = 'home' | 'catalog' | 'services' | 'how-it-works' | 'industries' | 'about' | 'contact' | 'quote';
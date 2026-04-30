import React, { useState, useMemo } from 'react';
import { Search, Filter, Info, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../../data/mock';
import { Product, Page } from '../../types';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';

interface CatalogProps {
  setPage: (page: Page) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ setPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Construction', 'Manufacturing', 'Agriculture', 'Energy'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Equipment Catalog</h1>
            <p className="text-slate-600">Browse our selection of high-end industrial machinery.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                placeholder="Search machines..." 
                className="pl-10 h-12 border-slate-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-slate-900 h-12 px-6">
              <Filter className="mr-2 w-4 h-4" /> Filters
            </Button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto gap-2 pb-6 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-900 border-none shadow-sm">{product.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900 line-clamp-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-slate-400">{key}</span>
                        <span className="font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 border-t border-slate-100">
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-bold"
                    onClick={() => setPage('quote')}
                  >
                    View Details & Quote
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <Info className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No matching machinery found</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">We can still source what you need. Submit a custom sourcing request and our team will find it for you.</p>
            <Button onClick={() => setPage('quote')} className="bg-blue-600">Custom Sourcing Request</Button>
          </div>
        )}
      </div>
    </div>
  );
};
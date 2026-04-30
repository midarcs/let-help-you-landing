import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Page } from '../../types';
import { Button } from '../ui/button';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Catalog', id: 'catalog' },
    { label: 'Services', id: 'services' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Industries', id: 'industries' },
    { label: 'About', id: 'about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
            <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
              <Globe className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">GLOBELINK<span className="text-blue-600">INDUSTRIAL</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  currentPage === item.id ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => setPage('quote')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get a Quote
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 text-base font-medium border-l-4 ${
                  currentPage === item.id 
                    ? 'border-blue-600 text-blue-600 bg-blue-50' 
                    : 'border-transparent text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-4">
              <Button 
                onClick={() => {
                  setPage('quote');
                  setIsOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              >
                Request Equipment
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
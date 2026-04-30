import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Page } from '../../types';

interface HeroProps {
  setPage: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              <span>Global Sourcing. African Delivery.</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Empowering <span className="text-blue-600">African Industry</span> with World-Class Machinery
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              We source, deliver, and maintain industrial equipment from Germany and China for factories, construction, and agriculture across Nigeria and Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setPage('quote')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg h-auto"
              >
                Request Equipment <ArrowRight className="ml-2" />
              </Button>
              <Button 
                onClick={() => setPage('catalog')}
                variant="outline" 
                className="border-slate-300 text-slate-700 px-8 py-6 text-lg h-auto hover:bg-white"
              >
                Browse Catalog
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">500+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Machines Sourced</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">98%</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Client Retention</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/hero-machinery-bd133bcf-1777524823486.webp" 
                alt="Industrial Machinery"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden md:block max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-green-600 w-6 h-6" />
                </div>
                <span className="font-bold text-slate-900 uppercase text-xs tracking-widest">Certified Quality</span>
              </div>
              <p className="text-sm text-slate-600">All equipment undergoes multi-point inspection before shipping from Germany or China.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
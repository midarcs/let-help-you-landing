import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Catalog } from './components/catalog/Catalog';
import { QuoteSystem } from './components/forms/QuoteSystem';
import { AIRecommender } from './components/ai/AIRecommender';
import { SERVICES, INDUSTRIES } from './data/mock';
import { Page } from './types';
import { Toaster } from './components/ui/sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Truck, 
  Settings, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  PhoneCall,
  HardHat,
  Factory,
  Sprout,
  Zap,
  Pickaxe
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

const iconMap: Record<string, any> = {
  Globe, Truck, Settings, Wrench, HardHat, Factory, Sprout, Zap, Pickaxe
};

function App() {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <main>
            <Hero setPage={setPage} />
            
            <section className="bg-slate-900 py-10">
              <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="font-bold text-white text-lg">CERTIFIED PARTNERS IN:</span>
                </div>
                <div className="flex items-center gap-8 grayscale opacity-50">
                  <span className="text-white font-bold text-xl">GERMANY</span>
                  <span className="text-white font-bold text-xl">CHINA</span>
                  <span className="text-white font-bold text-xl">NIGERIA</span>
                  <span className="text-white font-bold text-xl">GHANA</span>
                </div>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">From discovery to deployment, we manage the entire industrial equipment lifecycle.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {SERVICES.map((service, i) => {
                    const Icon = iconMap[service.icon];
                    return (
                      <Card key={i} className="border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg group">
                        <CardContent className="pt-8">
                          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon size={28} />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                          <Button variant="link" className="p-0 text-blue-600 font-bold" onClick={() => setPage('services')}>
                            Learn More <ArrowRight className="ml-1 w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            <AIRecommender />

            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h2>
                    <p className="text-slate-600 max-w-xl">Tailored solutions for the sectors driving economic growth across the continent.</p>
                  </div>
                  <Button onClick={() => setPage('industries')} variant="outline" className="border-slate-300">View All Industries</Button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  {INDUSTRIES.map((ind, i) => {
                    const Icon = iconMap[ind.icon];
                    return (
                      <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-all cursor-pointer group" onClick={() => setPage('catalog')}>
                        <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          <Icon size={32} />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">{ind.name}</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">{ind.count} Machines</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <img 
                      src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/engineer-inspection-1b00f933-1777524823279.webp" 
                      alt="Expert Inspection"
                      className="rounded-3xl shadow-2xl"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">The GlobeLink <span className="text-blue-600">Global Advantage</span></h2>
                    <div className="space-y-8">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Multi-Origin Quality Assurance</h4>
                          <p className="text-slate-600">We inspect all machines in their home country (Germany/China) before they ship to Africa.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Direct Manufacturer Pricing</h4>
                          <p className="text-slate-600">Eliminate middlemen. Our offices in Shanghai and Hamburg deal directly with factories.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Local Engineering Support</h4>
                          <p className="text-slate-600">Technicians based in Lagos and Accra provide 24/7 on-site support and maintenance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        );
      case 'catalog':
        return <Catalog setPage={setPage} />;
      case 'quote':
        return <QuoteSystem />;
      case 'services':
        return (
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Comprehensive Solutions</h1>
              <div className="space-y-32">
                {SERVICES.map((s, i) => (
                  <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <img src={s.image} alt={s.title} className="rounded-3xl shadow-xl w-full h-[400px] object-cover" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl font-bold text-slate-900 mb-6">{s.title}</h2>
                      <p className="text-xl text-slate-600 leading-relaxed mb-8">{s.description}</p>
                      <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3"><CheckCircle className="text-blue-600" size={20} /> Professional consulting & specification</li>
                        <li className="flex items-center gap-3"><CheckCircle className="text-blue-600" size={20} /> Verified vendor matching</li>
                        <li className="flex items-center gap-3"><CheckCircle className="text-blue-600" size={20} /> Full compliance & documentation</li>
                      </ul>
                      <Button onClick={() => setPage('quote')} className="bg-blue-600 px-8 h-12">Get Started</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'how-it-works':
        return (
          <div className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">How It Works</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our streamlined process takes you from initial request to full operational status in record time.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 hidden md:block -translate-y-1/2 -z-10"></div>
                
                {[
                  { step: '01', title: 'Request', desc: 'Submit your machinery or spare part needs via our quote system.' },
                  { step: '02', title: 'Sourcing', desc: 'Our experts in Germany/China find the best match and negotiate price.' },
                  { step: '03', title: 'Logistics', desc: 'We handle the shipping, insurance, and African customs clearance.' },
                  { step: '04', title: 'Installation', desc: 'Local engineers set up the machine and train your team.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-6 text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 text-center">
                <Button onClick={() => setPage('quote')} className="bg-blue-600 px-12 py-6 text-lg h-auto">Start Your First Request</Button>
              </div>
            </div>
          </div>
        );
      case 'industries':
        return (
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
               <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Industries We Support</h1>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {INDUSTRIES.map((ind, i) => {
                   const Icon = iconMap[ind.icon];
                   return (
                     <div key={i} className="group cursor-pointer" onClick={() => setPage('catalog')}>
                        <div className="aspect-video mb-6 overflow-hidden rounded-2xl relative">
                           <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10"></div>
                           <img 
                            src={`https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/${ind.name.toLowerCase().includes('fact') ? 'factory-aerial' : 'hero-machinery'}-d9034b9b-1777524826691.webp`} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                           />
                           <div className="absolute bottom-6 left-6 z-20">
                             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                                <Icon size={24} className="text-blue-600" />
                             </div>
                             <h3 className="text-2xl font-bold text-white">{ind.name}</h3>
                           </div>
                        </div>
                        <p className="text-slate-600 mb-4">Dedicated supply chain solutions for {ind.name.toLowerCase()} businesses across Africa.</p>
                        <Button variant="link" className="p-0 text-blue-600 font-bold">Browse {ind.name} Equipment <ArrowRight className="ml-1 w-4 h-4" /></Button>
                     </div>
                   );
                 })}
               </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4">
               <div className="text-center mb-16">
                 <h1 className="text-5xl font-bold text-slate-900 mb-6">Bridging the Gap Between Manufacturers and Emerging Markets</h1>
                 <p className="text-xl text-slate-600">Founded in 2008, GlobeLink started with a simple mission: To make high-quality industrial machinery accessible to African entrepreneurs.</p>
               </div>
               
               <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/87b65c00-6162-4d97-b7ac-cf1f788ce935/factory-aerial-d9034b9b-1777524826691.webp" className="w-full h-[500px] object-cover rounded-3xl mb-16" />
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                 <div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                   <p className="text-slate-600 leading-relaxed">To catalyze industrial growth in Africa by providing the technological backbone necessary for competitive manufacturing, construction, and agriculture. We don't just sell machines; we build the infrastructure of progress.</p>
                 </div>
                 <div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                   <p className="text-slate-600 leading-relaxed">To become the primary gateway for global machinery into Africa, recognized for uncompromising quality, engineering excellence, and ethical sourcing practices.</p>
                 </div>
               </div>

               <div className="bg-slate-900 rounded-3xl p-12 text-white">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                   <div>
                     <div className="text-5xl font-bold text-blue-500 mb-2">12</div>
                     <div className="text-slate-400 uppercase tracking-widest text-sm font-semibold">Strategic Hubs</div>
                   </div>
                   <div>
                     <div className="text-5xl font-bold text-blue-500 mb-2">250+</div>
                     <div className="text-slate-400 uppercase tracking-widest text-sm font-semibold">Global Suppliers</div>
                   </div>
                   <div>
                     <div className="text-5xl font-bold text-blue-500 mb-2">$1.2B</div>
                     <div className="text-slate-400 uppercase tracking-widest text-sm font-semibold">Project Value Sourced</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPage={page} setPage={setPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer />
      <Toaster position="top-right" richColors />

      <a 
        href="https://wa.me/234800GLOBELINK" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">Chat with Sales</span>
        <MessageSquare size={28} />
      </a>
      
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 z-40">
        <Button onClick={() => setPage('quote')} className="w-full bg-blue-600 h-14 text-lg font-bold">Request a Quote</Button>
      </div>
    </div>
  );
}

export default App;
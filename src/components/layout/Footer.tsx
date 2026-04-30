import React from 'react';
import { Globe, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">GLOBELINK</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Connecting African industries to global machinery markets. 
              Certified sourcing from Germany, China, and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Machinery Sourcing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Logistics & Shipping</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Installation & Setup</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Spare Parts Supply</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Global Offices</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                <span>Lagos, Nigeria (HQ)</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                <span>Hamburg, Germany</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                <span>Shanghai, China</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500" size={18} />
                <span>+234 800 GLOBE LINK</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500" size={18} />
                <span>solutions@globelink.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2024 GlobeLink Industrial Supply Chain. All rights reserved.</p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
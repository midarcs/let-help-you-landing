import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Clock, DollarSign, Briefcase, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { toast } from 'sonner';

export const QuoteSystem: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    category: '',
    budget: '',
    urgency: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Quote request submitted! Our sourcing team will contact you within 24 hours.');
    setStep(3);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 text-white p-8">
          <h2 className="text-2xl font-bold mb-2">Request Equipment Quote</h2>
          <p className="text-slate-400">Provide details about your machinery or spare part needs.</p>
          
          <div className="flex mt-8 gap-4">
            <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
            <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
            <div className={`flex-1 h-2 rounded-full ${step >= 3 ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
          </div>
        </div>

        <div className="p-8">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-600" size={24} /> Requirement Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <Label>Request Type</Label>
                  <Select onValueChange={(v) => setFormData({...formData, type: v})}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="machine">New Machinery</SelectItem>
                      <SelectItem value="refurbished">Refurbished Machinery</SelectItem>
                      <SelectItem value="parts">Spare Parts</SelectItem>
                      <SelectItem value="project">Turnkey Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Industry Category</Label>
                  <Select onValueChange={(v) => setFormData({...formData, category: v})}>
                    <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="energy">Energy & Power</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-1"><DollarSign size={14} /> Estimated Budget (USD)</Label>
                  <Select onValueChange={(v) => setFormData({...formData, budget: v})}>
                    <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under50">Under $50k</SelectItem>
                      <SelectItem value="50-200">$50k - $200k</SelectItem>
                      <SelectItem value="200-500">$200k - $500k</SelectItem>
                      <SelectItem value="over500">Over $500k</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-1"><Clock size={14} /> Urgency Level</Label>
                  <Select onValueChange={(v) => setFormData({...formData, urgency: v})}>
                    <SelectTrigger><SelectValue placeholder="Select urgency" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Standard (3-6 months)</SelectItem>
                      <SelectItem value="medium">Medium (1-3 months)</SelectItem>
                      <SelectItem value="high">Urgent (Immediate)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <Label>Detailed Specifications or Part Number</Label>
                <Textarea 
                  placeholder="Tell us exactly what you need. For spare parts, include the manufacturer part number if known." 
                  className="min-h-[120px]"
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setStep(2)} className="bg-blue-600 px-8">Continue to Contact</Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-blue-600" size={24} /> Contact Information
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input required placeholder="John Doe" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input required placeholder="Industrial Solutions Ltd" onChange={(e) => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input required type="email" placeholder="john@company.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number (WhatsApp preferred)</Label>
                    <Input required placeholder="+234..." onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-8">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> We may request technical drawings or photos of existing machinery to ensure perfect sourcing match.
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                  <Button type="submit" className="bg-blue-600 px-8">Submit Request <Send className="ml-2 w-4 h-4" /></Button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Thank you for choosing GlobeLink. Your sourcing request (ID: #GL-{Math.floor(1000 + Math.random() * 9000)}) has been assigned to our logistics team.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Next Steps</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-left">
                  <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                    <div className="font-bold mb-1">1. Verification</div>
                    <p>Engineer reviews specs (2-4 hours)</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                    <div className="font-bold mb-1">2. Sourcing</div>
                    <p>Price negotiation with suppliers (12-24 hours)</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                    <div className="font-bold mb-1">3. Quotation</div>
                    <p>Formal invoice & timeline sent to you</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-8" onClick={() => window.location.reload()}>Request Another Item</Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
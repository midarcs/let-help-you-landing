import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Brain, Factory, Construction, Sprout, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { toast } from 'sonner';

export const AIRecommender: React.FC = () => {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('');

  const industries = [
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'construction', name: 'Construction', icon: Construction },
    { id: 'agriculture', name: 'Agriculture', icon: Sprout },
    { id: 'energy', name: 'Energy', icon: Brain },
  ];

  const handleComplete = () => {
    toast.success('AI Report generated! Check your email.');
    setStep(3);
  };

  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full -mr-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-blue-600 text-white border-none mb-6">AI Lead Magnet</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Get a Custom <span className="text-blue-500">Equipment Strategy</span> Report
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Answer 3 questions and our AI-driven system will recommend the optimal machinery setup for your project, including cost estimates and ROI timeline.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Market Benchmarking</h4>
                  <p className="text-slate-400">See how your equipment compares to industry leaders in Germany & China.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Logistics Roadmap</h4>
                  <p className="text-slate-400">Step-by-step timeline for sourcing, shipping, and clearing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Sparkles size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Start AI Recommendation</h3>
                    <p className="text-slate-600 mb-10">Takes less than 60 seconds to complete.</p>
                    <Button onClick={() => setStep(1)} className="w-full bg-blue-600 py-6 text-lg h-auto">
                      Begin Assessment <ArrowRight className="ml-2" />
                    </Button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-8">What is your primary industry?</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {industries.map((ind) => (
                        <button
                          key={ind.id}
                          onClick={() => {
                            setIndustry(ind.id);
                            setStep(2);
                          }}
                          className="flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
                        >
                          <ind.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-600" />
                          <span className="font-bold text-slate-700">{ind.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Where should we send your custom report?</h3>
                    <p className="text-slate-600 mb-8">Our AI engine will process your request and deliver the PDF within 5 minutes.</p>
                    <div className="space-y-4">
                      <Input 
                        placeholder="Enter your professional email" 
                        type="email" 
                        className="py-6 text-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button onClick={handleComplete} className="w-full bg-blue-600 py-6 text-lg h-auto" disabled={!email}>
                        Generate Report
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Report Queued!</h3>
                    <p className="text-slate-600 mb-10">We've sent a confirmation to <strong>{email}</strong>. Our industrial strategist will follow up if we need more specifics.</p>
                    <Button variant="outline" onClick={() => setStep(0)} className="w-full py-6 text-lg h-auto">
                      Close
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
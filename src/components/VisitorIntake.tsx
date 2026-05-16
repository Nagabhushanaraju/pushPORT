import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Building2, User, Mail, Briefcase } from 'lucide-react';

interface VisitorData {
  name: string;
  email: string;
  company: string;
  role: string;
  timestamp: number;
}

export default function VisitorIntake({ onComplete }: { onComplete: (data: VisitorData) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<VisitorData>>({});

  useEffect(() => {
    const visited = localStorage.getItem('portfolio-visited');
    const visitorData = localStorage.getItem('visitor-data');
    
    if (!visited && !visitorData) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    } else if (visitorData) {
      onComplete(JSON.parse(visitorData));
    }
  }, [onComplete]);

  const handleSubmit = () => {
    const visitorData: VisitorData = {
      name: data.name || 'Guest',
      email: data.email || '',
      company: data.company || '',
      role: data.role || '',
      timestamp: Date.now(),
    };
    
    localStorage.setItem('visitor-data', JSON.stringify(visitorData));
    localStorage.setItem('portfolio-visited', 'true');
    localStorage.setItem('visit-count', String((parseInt(localStorage.getItem('visit-count') || '0') + 1)));
    
    onComplete(visitorData);
    setIsOpen(false);
  };

  const handleSkip = () => {
    localStorage.setItem('portfolio-visited', 'true');
    setIsOpen(false);
    onComplete({ name: 'Guest', email: '', company: '', role: '', timestamp: Date.now() });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-[#050507]/90 backdrop-blur-2xl"
            onClick={handleSkip}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[301] w-[calc(100%-32px)] max-w-[480px]"
          >
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-violet-500/30 via-fuchsia-500/20 to-cyan-500/30 blur-2xl" />
              <div className="relative rounded-[28px] border border-white/20 bg-[#0a0a0f]/95 backdrop-blur-3xl shadow-2xl overflow-hidden">
                <button
                  onClick={handleSkip}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                >
                  <X className="w-4 h-4 text-white/60" />
                </button>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] leading-tight">Welcome to my portfolio</h2>
                      <p className="text-[13px] text-white/50">Help me personalize your experience</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {step === 1 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <div>
                          <label className="text-[12px] uppercase tracking-widest text-white/40 font-[500] mb-2 block">Your Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                              type="text"
                              placeholder="John Doe"
                              value={data.name || ''}
                              onChange={(e) => setData({ ...data, name: e.target.value })}
                              className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.03] border border-white/10 text-[14px] placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all"
                              autoFocus
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[12px] uppercase tracking-widest text-white/40 font-[500] mb-2 block">Email (optional)</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                              type="email"
                              placeholder="john@company.com"
                              value={data.email || ''}
                              onChange={(e) => setData({ ...data, email: e.target.value })}
                              className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.03] border border-white/10 text-[14px] placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <div>
                          <label className="text-[12px] uppercase tracking-widest text-white/40 font-[500] mb-2 block">Company</label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                              type="text"
                              placeholder="Google, Startup, etc."
                              value={data.company || ''}
                              onChange={(e) => setData({ ...data, company: e.target.value })}
                              className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.03] border border-white/10 text-[14px] placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all"
                              autoFocus
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[12px] uppercase tracking-widest text-white/40 font-[500] mb-2 block">Role you're hiring for</label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                              type="text"
                              placeholder="ML Engineer, Full-stack, etc."
                              value={data.role || ''}
                              onChange={(e) => setData({ ...data, role: e.target.value })}
                              className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.03] border border-white/10 text-[14px] placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div className="flex gap-1.5">
                      <div className={`w-6 h-1 rounded-full transition-all ${step === 1 ? 'bg-violet-500' : 'bg-white/20'}`} />
                      <div className={`w-6 h-1 rounded-full transition-all ${step === 2 ? 'bg-violet-500' : 'bg-white/20'}`} />
                    </div>
                    <div className="flex gap-2">
                      {step > 1 && (
                        <button
                          onClick={() => setStep(1)}
                          className="h-9 px-4 rounded-xl bg-white/5 border border-white/10 text-[13px] font-[450] hover:bg-white/10 transition-colors"
                        >
                          Back
                        </button>
                      )}
                      {step === 1 ? (
                        <button
                          onClick={() => setStep(2)}
                          disabled={!data.name}
                          className="h-9 px-5 rounded-xl bg-white text-black text-[13px] font-[550] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          className="h-9 px-5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[13px] font-[550] hover:opacity-90 transition-opacity"
                        >
                          Enter Portfolio
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-[11px] text-white/30 text-center mt-4 leading-relaxed">
                    Your info helps me show relevant projects. Never shared or stored externally.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
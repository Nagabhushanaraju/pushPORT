import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Link as LinkIcon } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pt-32 pb-24">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-[#050507] to-[#050507]" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-[56px] md:text-[72px] font-[700] tracking-[-0.02em] mb-6">Resume</h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-[14px] mb-8">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> hello@designengineer.studio</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> San Francisco • Remote</span>
            <span className="flex items-center gap-1.5"><LinkIcon className="w-3.5 h-3.5" /> designengineer.studio</span>
          </div>
          <button className="px-6 h-11 rounded-full bg-white text-black font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              title: 'Experience',
              items: [
                { h: 'Founder & CEO — Aura', s: '2023–Present • YC W24 • $1.2M ARR', d: 'Generative UI platform. 400+ teams, 4.2M generations. Raised $2.4M.' },
                { h: 'Staff Designer — Stripe', s: '2021–2023', d: 'Led checkout redesign (+$400M volume). Design system for 2,000 engineers.' },
                { h: 'Senior Designer — Linear', s: '2020–2021', d: 'Shipped command menu, cycles. 4.9★ App Store.' },
              ]
            },
            {
              title: 'Education',
              items: [
                { h: 'B.Des — Interaction Design', s: 'NID • 2015–2019', d: 'Gold medal. Thesis on generative interfaces.' },
              ]
            },
            {
              title: 'Skills',
              items: [
                { h: 'Design', s: '', d: 'Product design, design systems, prototyping, user research, brand' },
                { h: 'Engineering', s: '', d: 'TypeScript, React, Next.js, Framer Motion, WebGL, Python' },
                { h: 'AI', s: '', d: 'LLMs, diffusion models, RAG, vector DBs, prompt engineering' },
              ]
            }
          ].map((section) => (
            <div key={section.title} className="p-[1px] rounded-[28px] bg-gradient-to-b from-white/10 to-transparent">
              <div className="rounded-[27px] bg-[#0a0a0f]/90 backdrop-blur-2xl p-8 md:p-10">
                <h2 className="text-[13px] uppercase tracking-widest text-white/40 mb-6 font-medium">{section.title}</h2>
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.h}>
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                        <h3 className="text-[20px] font-[600]">{item.h}</h3>
                        <span className="text-[13px] text-white/50">{item.s}</span>
                      </div>
                      <p className="text-white/65 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Sparkles, Download, Users } from 'lucide-react';

const products = [
  { name: 'Aura UI', type: 'Design System', users: '4.2K', price: '$149', color: 'from-violet-600 to-fuchsia-600' },
  { name: 'Flux Icons', type: 'Icon Pack', users: '12K', price: '$39', color: 'from-cyan-500 to-blue-600' },
  { name: 'Lumen API', type: 'Developer Tool', users: '890', price: '$299/mo', color: 'from-amber-500 to-orange-600' },
  { name: 'Mirage 3D', type: 'WebGL Kit', users: '2.1K', price: '$79', color: 'from-emerald-500 to-teal-600' },
  { name: 'Atlas Tokens', type: 'Open Source', users: '18K', price: 'Free', color: 'from-indigo-500 to-violet-600' },
  { name: 'Verve Analytics', type: 'SaaS', users: '540', price: '$49/mo', color: 'from-rose-500 to-pink-600' },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pt-32 pb-24">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#050507] to-[#050507]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-white/60">Products • 2019–2024</span>
          </div>
          <h1 className="text-[56px] md:text-[84px] font-[700] tracking-[-0.03em] leading-[0.9] mb-6">
            Shipped
            <br />
            <span className="text-white/40">products</span>
          </h1>
          <p className="text-[18px] text-white/60 max-w-2xl">Tools I've built and sell. $340K total revenue, bootstrapped.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="group relative"
            >
              <div className={`absolute -inset-[1px] rounded-[28px] bg-gradient-to-b ${p.color} opacity-20 group-hover:opacity-40 blur-xl transition-opacity`} />
              <div className="relative h-full p-[1px] rounded-[28px] bg-gradient-to-b from-white/15 to-white/5">
                <div className="h-full rounded-[27px] bg-[#0a0a0f]/90 backdrop-blur-2xl p-8 flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`} />
                  
                  <div className="mb-2 text-[12px] uppercase tracking-widest text-white/40">{p.type}</div>
                  <h3 className="text-[24px] font-[650] mb-6">{p.name}</h3>
                  
                  <div className="mt-auto flex items-end justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-white/60">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-[13px]">{p.users}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/60">
                        <Download className="w-3.5 h-3.5" />
                        <span className="text-[13px]">{p.price}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[18px] leading-none">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
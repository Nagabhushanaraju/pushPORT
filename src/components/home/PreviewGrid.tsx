import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { previews } from './previewsData';

interface PreviewGridProps {
  setActivePreview: (index: number) => void;
}

export function PreviewGrid({ setActivePreview }: PreviewGridProps) {
  return (
    <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-[40px] md:text-[64px] font-[650] tracking-[-0.02em] leading-[0.9]">
            Selected
            <br />
            <span className="text-white/40">work & impact</span>
          </h2>
          <p className="hidden md:block text-white/50 max-w-[280px] text-right text-[15px] leading-relaxed">
            Click any card for glassmorphism preview
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.06] border border-white/[0.06] rounded-[32px] overflow-hidden backdrop-blur-3xl">
        {previews.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <button
                onClick={() => setActivePreview(i)}
                className="group relative block w-full h-[360px] bg-[#0a0a0f]/60 backdrop-blur-xl overflow-hidden text-left"
              >
                <div className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-700">
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
                </div>

                <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${item.color} opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity duration-700`} />

                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] mb-auto group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full rounded-2xl bg-black/80 backdrop-blur flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[28px] font-[600] tracking-[-0.01em] mb-2 group-hover:translate-x-1 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-[15px] leading-snug mb-6">{item.desc}</p>
                    <div className="flex items-center gap-2 text-[13px] font-medium text-white/70 group-hover:text-white transition-colors">
                      <span>Preview</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

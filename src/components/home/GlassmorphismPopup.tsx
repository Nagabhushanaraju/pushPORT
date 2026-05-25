import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { previews } from './previewsData';

interface GlassmorphismPopupProps {
  activePreview: number | null;
  setActivePreview: (index: number | null) => void;
}

export function GlassmorphismPopup({ activePreview, setActivePreview }: GlassmorphismPopupProps) {
  const navigate = useNavigate();
  const activeItem = activePreview !== null ? previews[activePreview] : null;

  return (
    <AnimatePresence>
      {activeItem && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePreview(null)}
            className="fixed inset-0 z-[200] bg-[#050507]/90 backdrop-blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-[calc(100%-32px)] max-w-[720px] max-h-[90vh] overflow-hidden"
          >
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-b from-white/20 via-white/10 to-transparent blur-xl" />
              <div className={`absolute -inset-[1px] rounded-[32px] bg-gradient-to-br ${activeItem.color} opacity-30 blur-2xl`} />

              <div className="relative rounded-[32px] border border-white/20 bg-[#0a0a0f]/90 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="relative h-[200px] overflow-hidden">
                  <img src={activeItem.image} alt="" className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/70 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeItem.color} mix-blend-overlay opacity-30`} />

                  <button
                    onClick={() => setActivePreview(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeItem.color} p-[1px]`}>
                        <div className="w-full h-full rounded-2xl bg-black/80 backdrop-blur flex items-center justify-center">
                          <activeItem.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-[28px] font-[650] leading-none">{activeItem.title}</h3>
                        <p className="text-white/60 text-[14px] mt-1">{activeItem.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {activeItem.preview.stats.map((stat) => (
                      <div key={stat} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                        <div className="text-[15px] font-[600]">{stat}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2.5 mb-8">
                    {activeItem.preview.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-colors group"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeItem.color}`} />
                        <span className="text-[14px] text-white/80 group-hover:text-white transition-colors flex-1">{item}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
                      </motion.div>
                    ))}
                  </div>

                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeItem.color} bg-opacity-10 border border-white/10 mb-8`}>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-white/70" />
                      <span className="text-[13px] font-medium text-white/90">{activeItem.preview.highlight}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setActivePreview(null);
                        setTimeout(() => navigate(activeItem.path), 150);
                      }}
                      className="flex-1 h-12 rounded-2xl bg-white text-black font-[550] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Open full page
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActivePreview(null)}
                      className="h-12 px-6 rounded-2xl bg-white/5 border border-white/15 font-[500] hover:bg-white/10 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

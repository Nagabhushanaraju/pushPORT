import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

interface HeroProps {
  setActivePreview: (index: number) => void;
}

export function Hero({ setActivePreview }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] flex items-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-[#050507]/80 to-[#050507]" />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs tracking-widest uppercase text-white/70 font-medium">Available for new projects</span>
          </div>

          <h1 className="text-[clamp(48px,9vw,132px)] font-[700] leading-[0.85] tracking-[-0.03em] mb-8">
            <span className="block text-white/90">Design Engineer</span>
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              crafting digital
            </span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              experiences
            </span>
          </h1>

          <p className="text-[18px] md:text-[22px] leading-relaxed text-white/60 max-w-2xl mb-12 font-light">
            I build premium products at the intersection of design, code, and AI.
            Neural networks react to your cursor.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => setActivePreview(0)}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 h-[56px] rounded-full bg-white text-black font-medium overflow-hidden flex items-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.div>
            </button>
            <Link to="/resume">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 h-[56px] rounded-full bg-white/[0.03] border border-white/15 backdrop-blur-2xl font-medium hover:bg-white/[0.06] hover:border-white/25 transition-all"
              >
                Download CV
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Move cursor • Neural net reacts</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

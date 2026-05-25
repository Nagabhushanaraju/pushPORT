import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950/40 via-[#0a0a0f] to-[#0a0a0f] p-[1px]"
        >
          <div className="relative rounded-[39px] bg-[#050507]/90 backdrop-blur-3xl px-8 md:px-16 py-16 md:py-24 text-center overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-xs text-white/70">Resume & Portfolio</span>
              </div>
              <h3 className="text-[36px] md:text-[56px] font-[650] tracking-[-0.02em] leading-[1.1] mb-6">
                Let's build something
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">extraordinary</span>
              </h3>
              <p className="text-white/60 text-[18px] mb-10 max-w-xl mx-auto">
                Open to founding designer roles, advisory, and select freelance projects.
              </p>
              <Link to="/resume">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 h-14 rounded-full bg-white text-black font-medium inline-flex items-center gap-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-shadow"
                >
                  View Resume
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

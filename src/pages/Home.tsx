import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Trophy, Briefcase, Heart, Rocket, FileText, ChevronRight, X, ExternalLink, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

const previews = [
  {
    title: 'Projects',
    path: '/projects',
    icon: Rocket,
    color: 'from-violet-600 to-fuchsia-600',
    desc: '12 shipped products, 3 open source, 4.2M users',
    image: '/images/project1.jpg',
    preview: {
      stats: ['12 Products', '4.2M Users', '$1.2M ARR'],
      items: ['Aura AI Design System', 'Flux Mobile Banking', 'Lumen API', 'Mirage 3D'],
      highlight: 'YC W24, acquired by Stripe'
    }
  },
  {
    title: 'Certificates',
    path: '/certificates',
    icon: Trophy,
    color: 'from-cyan-500 to-blue-600',
    desc: 'AWS, Google Cloud, Meta, 18 certifications',
    image: '/images/cert.jpg',
    preview: {
      stats: ['18 Certs', '8 Platforms', '100% Verified'],
      items: ['AWS Solutions Architect Pro', 'Google ML Engineer', 'Meta React Advanced', 'NVIDIA DLI'],
      highlight: 'Verified on Credly & Blockchain'
    }
  },
  {
    title: 'Entrepreneur Journey',
    path: '/journey',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    desc: '0 to 1 builder • 3 startups • $2.4M raised',
    image: '/images/project2.jpg',
    preview: {
      stats: ['3 Startups', '$2.4M Raised', '1 Acquired'],
      items: ['2024: Aura raises $2.4M', '2023: Lumen acquired', '2021: Verve $80K MRR', '2019: First failure'],
      highlight: '0 → 1 builder, 5 years'
    }
  },
  {
    title: 'Social Service',
    path: '/social',
    icon: Heart,
    color: 'from-rose-500 to-pink-600',
    desc: 'AICTE mentor, 200K YouTube, 50+ webinars',
    image: '/images/hero-bg.jpg',
    preview: {
      stats: ['214K YouTube', '1.2K Mentored', '50+ Talks'],
      items: ['AICTE National Mentor', 'YouTube @designengineer', 'Instagram @craft.lab', '50+ Webinars'],
      highlight: 'Code for Good • 340 hrs'
    }
  },
  {
    title: 'Products',
    path: '/products',
    icon: Sparkles,
    color: 'from-emerald-500 to-teal-600',
    desc: 'Design systems, SaaS tools, AI agents',
    image: '/images/project1.jpg',
    preview: {
      stats: ['6 Products', '$340K Revenue', '18K Stars'],
      items: ['Aura UI — $149', 'Flux Icons — $39', 'Atlas Tokens — Free', 'Verve Analytics'],
      highlight: 'Bootstrapped, profitable'
    }
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: Briefcase,
    color: 'from-indigo-500 to-violet-600',
    desc: 'Senior at FAANG • Lead designer • 7 years',
    image: '/images/project2.jpg',
    preview: {
      stats: ['7 Years', '4 Companies', 'FAANG → Founder'],
      items: ['Founder @ Aura (2023-)', 'Staff @ Stripe', 'Senior @ Linear', 'Designer @ Meta'],
      highlight: 'Led systems for 2,000+ engineers'
    }
  },
];

export default function Home() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [activePreview, setActivePreview] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const activeItem = activePreview !== null ? previews[activePreview] : null;

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      {/* Hero */}
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

      {/* Preview Grid */}
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

      {/* Glassmorphism Popup */}
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

      {/* CTA */}
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
    </div>
  );
}
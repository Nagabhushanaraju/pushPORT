import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aura — AI Design System',
    year: '2024',
    role: 'Founder & Design Engineer',
    desc: 'Generative UI platform used by 400+ teams. $1.2M ARR. YC W24.',
    tags: ['AI', 'Design Tools', 'React'],
    image: '/images/project1.jpg',
    color: 'from-violet-600 to-fuchsia-600',
    metrics: '4.2M generations',
  },
  {
    title: 'Flux Mobile',
    year: '2023',
    role: 'Lead Product Designer',
    desc: 'Banking app redesign. 4.8★ App Store. +340% activation.',
    tags: ['Fintech', 'Mobile', 'Design System'],
    image: '/images/project2.jpg',
    color: 'from-cyan-500 to-blue-600',
    metrics: '2.1M MAU',
  },
  {
    title: 'Lumen API',
    year: '2023',
    role: 'Co-founder',
    desc: 'Real-time vector search for LLM apps. Acquired 2024.',
    tags: ['Infrastructure', 'AI', 'TypeScript'],
    image: '/images/project1.jpg',
    color: 'from-amber-500 to-orange-600',
    metrics: '12B queries',
  },
  {
    title: 'Mirage 3D',
    year: '2022',
    role: 'Design Engineer',
    desc: 'WebGL commerce experiences. Used by Nike, Apple.',
    tags: ['3D', 'WebGL', 'E-commerce'],
    image: '/images/project2.jpg',
    color: 'from-emerald-500 to-teal-600',
    metrics: '800K sessions',
  },
  {
    title: 'Atlas Design System',
    year: '2022',
    role: 'Staff Designer',
    desc: 'Open source. 18K GitHub stars. Design tokens at scale.',
    tags: ['Open Source', 'Design Systems'],
    image: '/images/project1.jpg',
    color: 'from-indigo-500 to-violet-600',
    metrics: '18.4K stars',
  },
  {
    title: 'Verve Analytics',
    year: '2021',
    role: 'Product Designer',
    desc: 'Privacy-first analytics. Bootstrapped to $80K MRR.',
    tags: ['SaaS', 'Data Viz', 'Privacy'],
    image: '/images/project2.jpg',
    color: 'from-rose-500 to-pink-600',
    metrics: '$80K MRR',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pt-32 pb-24">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-[#050507] to-[#050507]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-white/60">Projects • 2019–2024</span>
          </div>
          <h1 className="text-[56px] md:text-[84px] font-[700] tracking-[-0.03em] leading-[0.9] mb-6">
            Building at the
            <br />
            <span className="text-white/40">edge of possible</span>
          </h1>
          <p className="text-[18px] text-white/60 max-w-2xl">
            A selection of products I've designed, engineered, and shipped. From 0→1 startups to scale-ups serving millions.
          </p>
        </motion.div>

        <div className="grid gap-[1px] bg-white/[0.08] border border-white/[0.08] rounded-[32px] overflow-hidden">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative bg-[#0a0a0f]/90 backdrop-blur-xl"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
                <div className="p-8 md:p-12 lg:p-16">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[13px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                          {project.year}
                        </span>
                        <span className="text-[13px] text-white/40">{project.role}</span>
                      </div>
                      <h2 className="text-[32px] md:text-[40px] font-[650] tracking-[-0.01em] leading-[1.1] mb-4 group-hover:translate-x-1 transition-transform">
                        {project.title}
                      </h2>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 blur-xl`} />
                  </div>

                  <p className="text-[17px] leading-relaxed text-white/70 mb-8 max-w-xl">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[12px] px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1">Impact</div>
                      <div className="text-[20px] font-[600] text-white">{project.metrics}</div>
                    </div>
                    <div className="flex items-center gap-3 ml-auto">
                      <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors group/btn">
                        <Github className="w-4 h-4 text-white/70 group-hover/btn:text-white" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors group/btn">
                        <ExternalLink className="w-4 h-4 text-white/70 group-hover/btn:text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative h-[320px] lg:h-auto overflow-hidden bg-[#050507]">
                  <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent lg:bg-gradient-to-r" />
                  <div className={`absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-br ${project.color}`} />
                  
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
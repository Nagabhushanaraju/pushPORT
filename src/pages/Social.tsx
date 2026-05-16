import { motion } from 'framer-motion';
import { Youtube, Instagram, Users, Mic, Heart, ArrowUpRight } from 'lucide-react';

const platforms = [
  { name: 'YouTube', handle: '@designengineer', followers: '214K', icon: Youtube, color: 'from-red-600 to-red-500', desc: 'Design tutorials, build in public, AI workflows' },
  { name: 'Instagram', handle: '@craft.lab', followers: '87K', icon: Instagram, color: 'from-fuchsia-600 to-pink-500', desc: 'Daily UI experiments, process videos' },
  { name: 'AICTE', handle: 'Mentor', followers: '1,200+', icon: Users, color: 'from-blue-600 to-cyan-500', desc: 'National mentor for 50+ colleges, India' },
  { name: 'Webinars', handle: 'Speaker', followers: '50+', icon: Mic, color: 'from-violet-600 to-purple-500', desc: 'Design systems, AI product design' },
];

const initiatives = [
  { title: 'Code for Good', desc: 'Built pro-bono tools for 12 NGOs. $0, impact > revenue.', hours: '340 hrs' },
  { title: 'Design Scholarships', desc: 'Funded 24 students from tier-2/3 colleges.', hours: '$48K' },
  { title: 'Open Source', desc: 'Atlas DS, 18K stars. Maintained for 3 years.', hours: '1,200 commits' },
];

export default function Social() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pt-32 pb-24">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/10 via-[#050507] to-[#050507]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-xs uppercase tracking-widest text-white/60">Social Impact</span>
          </div>
          <h1 className="text-[56px] md:text-[84px] font-[700] tracking-[-0.03em] leading-[0.9] mb-6">
            Teaching &
            <br />
            <span className="text-white/40">Giving back</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-white/[0.08] border border-white/[0.08] rounded-[32px] overflow-hidden mb-16">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.name}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-[#0a0a0f]/80 p-8 md:p-10 hover:bg-[#0f0f14]/80 transition-colors"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] bg-gradient-to-br ${p.color} transition-opacity`} />
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} p-[1px] group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full rounded-2xl bg-black/80 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-[600] mb-1">{p.name}</h3>
                      <p className="text-[13px] text-white/50 mb-3">{p.handle}</p>
                      <p className="text-[14px] text-white/70 max-w-[240px]">{p.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[24px] font-[650]">{p.followers}</div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 ml-auto mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-[1px] rounded-[24px] bg-gradient-to-b from-white/10 to-transparent"
            >
              <div className="h-full rounded-[23px] bg-[#0a0a0f]/90 backdrop-blur-xl p-8">
                <div className="text-[12px] uppercase tracking-widest text-white/40 mb-3">{item.hours}</div>
                <h4 className="text-[20px] font-[600] mb-2">{item.title}</h4>
                <p className="text-white/60 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
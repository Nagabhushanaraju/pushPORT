import { motion } from 'framer-motion';

const roles = [
  {
    company: 'Aura',
    role: 'Founder & CEO',
    period: '2023 — Present',
    desc: 'Building generative UI. $1.2M ARR, 12 people, YC W24.',
    highlights: ['Raised $2.4M', '400+ teams', '4.2M generations'],
  },
  {
    company: 'Stripe',
    role: 'Staff Product Designer',
    period: '2021 — 2023',
    desc: 'Led checkout redesign. +$400M incremental volume.',
    highlights: ['Design system lead', '2,000+ engineers', '0→1 Radar'],
  },
  {
    company: 'Linear',
    role: 'Senior Designer',
    period: '2020 — 2021',
    desc: 'Shipped command menu, cycles, project updates.',
    highlights: ['Core product', 'Design engineering', '4.9★ rating'],
  },
  {
    company: 'Meta',
    role: 'Product Designer',
    period: '2019 — 2020',
    desc: 'Marketplace & Shops. 1B+ users.',
    highlights: ['0→1 Shops', 'Design systems', 'Mentored 4'],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pt-32 pb-24">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#050507] to-[#050507]" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <h1 className="text-[56px] md:text-[84px] font-[700] tracking-[-0.03em] leading-[0.9] mb-6">
            Employee
            <br />
            <span className="text-white/40">Experience</span>
          </h1>
          <p className="text-[18px] text-white/60">7 years across startups and FAANG. Now building my own.</p>
        </motion.div>

        <div className="space-y-[1px] bg-white/[0.08] border border-white/[0.08] rounded-[32px] overflow-hidden">
          {roles.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl p-8 md:p-12 hover:bg-[#0f0f14]/80 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="text-[13px] text-white/50 mb-2">{job.period}</div>
                  <h3 className="text-[28px] font-[650] leading-tight">{job.role}</h3>
                  <div className="text-[20px] text-white/70">{job.company}</div>
                </div>
              </div>
              <p className="text-[16px] text-white/70 mb-6 max-w-2xl">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.highlights.map(h => (
                  <span key={h} className="text-[12px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
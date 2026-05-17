import { motion } from 'framer-motion';

const timeline = [
  { year: '2024', title: 'Aura raises $2.4M', desc: 'YC W24. 400+ teams. Generative UI platform.', metric: '$1.2M ARR', color: 'from-violet-600 to-fuchsia-600' },
  { year: '2023', title: 'Lumen acquired', desc: 'Real-time vector search. 12B queries/month.', metric: 'Acq.', color: 'from-cyan-500 to-blue-600' },
  { year: '2022', title: 'Staff Designer → Founder', desc: 'Left FAANG to build. First $10K MRR.', metric: '$10K MRR', color: 'from-amber-500 to-orange-600' },
  { year: '2021', title: 'Verve bootstrapped', desc: 'Privacy analytics. Solo to 3 people.', metric: '$80K MRR', color: 'from-emerald-500 to-teal-600' },
  { year: '2020', title: 'Senior at FAANG', desc: 'Led design system for 2,000+ engineers.', metric: '2K devs', color: 'from-indigo-500 to-violet-600' },
  { year: '2019', title: 'First startup', desc: 'Failed in 8 months. Learned everything.', metric: '$0', color: 'from-rose-500 to-pink-600' },
];

export default function Journey() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pt-32 pb-24">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-[#050507] to-[#050507]" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center">
          <h1 className="text-[56px] md:text-[84px] font-[700] tracking-[-0.03em] leading-[0.9] mb-6">
            Entrepreneur
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">Journey</span>
          </h1>
          <p className="text-[18px] text-white/60 max-w-xl mx-auto">0 → 1, three times. Failures, acquisitions, and building in public.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-violet-600/50 via-fuchsia-600/50 to-cyan-600/50" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className={i % 2 ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20 border border-white/10 mb-4`}>
                  <span className="text-xs font-medium">{item.year}</span>
                </div>
                <h3 className="text-[28px] font-[650] mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>

              <div className={`relative ${i % 2 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="absolute left-[27px] md:left-auto md:right-auto top-2 w-4 h-4 -translate-x-1/2 md:left-1/2 rounded-full border-2 border-[#050507] z-10" style={{ background: 'linear-gradient(to right, #7c3aed, #ec4899)' }} />
                <div className={`hidden md:block absolute top-0 w-16 h-[2px] bg-white/20 ${i % 2 ? 'right-full' : 'left-full'}`} />
                <div className={`inline-block px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl mt-8 md:mt-0`}>
                  <div className="text-[11px] uppercase tracking-widest text-white/40">Milestone</div>
                  <div className="text-[20px] font-[600] text-white">{item.metric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
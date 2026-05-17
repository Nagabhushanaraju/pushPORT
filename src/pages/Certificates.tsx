import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

const certs = [
  { org: 'AWS', title: 'Solutions Architect — Professional', year: '2024', id: 'AWS-PSA-28471', color: 'from-orange-500 to-amber-500' },
  { org: 'Google Cloud', title: 'Professional ML Engineer', year: '2024', id: 'GCP-PMLE-19384', color: 'from-blue-500 to-cyan-500' },
  { org: 'Meta', title: 'Advanced React & Performance', year: '2023', id: 'META-AR-55219', color: 'from-violet-500 to-purple-600' },
  { org: 'NVIDIA', title: 'Deep Learning Institute', year: '2023', id: 'NV-DLI-84729', color: 'from-emerald-500 to-green-600' },
  { org: 'Figma', title: 'Design Systems Expert', year: '2023', id: 'FIG-DSE-19347', color: 'from-pink-500 to-rose-500' },
  { org: 'Linear', title: 'Product Management', year: '2022', id: 'LIN-PM-48291', color: 'from-indigo-500 to-violet-500' },
  { org: 'Vercel', title: 'Next.js Advanced', year: '2022', id: 'VRC-NJA-72931', color: 'from-gray-700 to-black' },
  { org: 'Stripe', title: 'Payments Architecture', year: '2022', id: 'STR-PA-28471', color: 'from-violet-600 to-indigo-600' },
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pt-32 pb-24">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#050507] to-[#050507]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-white/60">Verified Credentials</span>
          </div>
          <h1 className="text-[56px] md:text-[84px] font-[700] tracking-[-0.03em] leading-[0.9] mb-6">
            Certificates &
            <br />
            <span className="text-white/40">Accreditations</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-white/[0.08] border border-white/[0.08] rounded-[32px] overflow-hidden backdrop-blur-3xl mb-20">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-[#0a0a0f]/80 p-8 md:p-10 hover:bg-[#0f0f14]/80 transition-colors"
            >
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${cert.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-[13px] font-medium text-white/50 mb-1">{cert.org} • {cert.year}</div>
                  <h3 className="text-[22px] font-[600] leading-snug">{cert.title}</h3>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} p-[1px] group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full rounded-xl bg-black/70 backdrop-blur flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <code className="text-[12px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/50">{cert.id}</code>
                <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10">
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-white/10"
        >
          <img src="/images/cert.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/90 to-[#050507]/70" />
          <div className="relative z-10 p-12 md:p-16">
            <h3 className="text-[32px] font-[650] mb-4">Continuous Learning</h3>
            <p className="text-white/60 max-w-xl text-[17px] leading-relaxed">
              18 certifications across cloud, AI, design systems, and product. Verified on Credly, Accredible, and blockchain.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
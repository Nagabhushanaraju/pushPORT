import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Multimodal AI for Early Disease Detection",
    number: "01",
    summary: "An AI-driven healthcare system leveraging multiple data types including medical images, EHRs, genetics, and symptoms. Applied deep learning and data fusion techniques to improve early-stage disease detection accuracy.",
    impact: "Built a multimodal foundation for early disease detection across imaging and clinical text workflows.",
    stack: ["Python", "Deep Learning", "ResNet", "BERT", "Healthcare AI", "Data Fusion"],
    color: "#3af2d4",
    date: "Jun 2025 – Present",
    github: "https://github.com/NagabhushanaRajuS",
    status: "In Progress"
  },
  {
    title: "Real-Time Sign Language Interpreter",
    number: "02",
    summary: "Built a multi-modal AI perception system for real-time sign language interpretation. Streamed results to a JavaScript frontend with dynamic UI overlays and modular architecture.",
    impact: "Delivered a real-time interpretation flow with responsive frontend feedback and modular processing.",
    stack: ["Python", "Computer Vision", "JavaScript", "Real-time Processing", "AI"],
    color: "#ff5a36",
    date: "Jun 2024 – Feb 2025",
    github: "https://github.com/NagabhushanaRajuS",
    status: "Completed"
  },
  {
    title: "Expense Tracker Web App",
    number: "03",
    summary: "Built a responsive and interactive web application to manage income, expenses, and monthly budgets. Implemented transaction management with category tags, timestamps, and visual charts for spending distribution.",
    impact: "Simplified expense tracking with visual summaries and clear transaction management.",
    stack: ["React", "JavaScript", "Charts", "Responsive Design", "Local Storage"],
    color: "#7c3aed",
    date: "Mar 2025 – Apr 2025",
    github: "https://github.com/NagabhushanaRajuS",
    status: "Completed"
  },
  {
    title: "Ola Electric Clone",
    number: "04",
    summary: "Created a full-stack web application inspired by Ola Electric's platform. Simulated features such as vehicle listings, test ride bookings, service scheduling, and charging station locators with an admin panel.",
    impact: "Demonstrated full-stack capability across listings, bookings, scheduling, and admin workflows.",
    stack: ["Full-Stack", "React", "Node.js", "MongoDB", "Admin Panel"],
    color: "#38d6ff",
    date: "Feb 2025",
    github: "https://github.com/NagabhushanaRajuS",
    status: "Completed"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <div className="max-w-[1100px] mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-violet-500" />
            <span className="text-[12px] uppercase tracking-widest font-[500] text-white/50">Studio / Projects</span>
          </div>
          <h1 className="text-[42px] md:text-[56px] font-[650] tracking-[-0.02em] leading-[1.1] mb-4">
            Building intelligent
            <br />
            <span className="text-white/40">systems that matter</span>
          </h1>
          <p className="text-[16px] leading-[1.6] text-white/60 max-w-[600px]">
            A collection of projects spanning AI/ML, full-stack development, and real-world problem solving. 
            From multimodal disease detection to real-time sign language interpretation.
          </p>
        </motion.div>

        <div className="space-y-[1px] bg-white/10 rounded-[24px] overflow-hidden p-[1px]">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-[#0a0a0f]/90 backdrop-blur-xl hover:bg-[#0f0f14]/90 transition-all"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-8">
                  <div className="hidden md:block flex-shrink-0">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      <span className="text-[24px] font-[300] text-white/30 group-hover:text-white/50 transition-colors font-mono">{project.number}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <span className={`text-[11px] font-[500] px-2.5 py-1 rounded-full border ${
                            project.status === 'In Progress' 
                              ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
                              : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          }`}>
                            {project.status}
                          </span>
                          <span className="text-[12px] text-white/40 font-mono">{project.date}</span>
                        </div>
                        <h2 className="text-[22px] md:text-[26px] font-[600] tracking-[-0.01em] leading-[1.25] mb-3 group-hover:text-violet-400 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/10 hover:border-white/20 transition-all flex-shrink-0"
                      >
                        <Github className="w-4 h-4 text-white/60" />
                      </a>
                    </div>

                    <p className="text-[15px] leading-[1.65] text-white/65 mb-4 max-w-[720px]">
                      {project.summary}
                    </p>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-5 max-w-[720px]">
                      <div className="w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      </div>
                      <p className="text-[13.5px] leading-[1.55] text-white/55">
                        <span className="text-white/75 font-[450]">Impact:</span> {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[12px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-white/60 font-[450] hover:bg-white/[0.06] hover:text-white/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: project.color }}
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/NagabhushanaRajuS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-white/50 hover:text-white/80 transition-colors group"
          >
            <Github className="w-4 h-4" />
            View more on GitHub
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
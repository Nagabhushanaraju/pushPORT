import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const personalInfo = {
  name: "Nagabhushana Raju S",
  role: "AI/ML Engineer & Software Developer",
  tagline: "Building intelligent systems with Machine Learning and crafting seamless web experiences.",
  location: "Mysuru, Karnataka, India",
  email: "nagabhushana.raju@example.com",
};

const experience = [
  {
    year: "2025",
    role: "Software Development Intern",
    company: "Getskilled",
    period: "Apr 2025 – Aug 2025",
    description: "Engineered data pipelines for multimodal inputs, leveraging ResNet for medical imaging and BERT for clinical text.",
  }
];

const projects = [
  {
    title: "Multimodal AI for Early Disease Detection",
    description: "AI-driven healthcare system leveraging medical images, EHRs, genetics, and symptoms.",
    stack: ["Python", "ResNet", "BERT", "Deep Learning"],
    year: "2025",
    color: "from-violet-600/20 to-fuchsia-600/20",
  },
  {
    title: "Real-Time Sign Language Interpreter",
    description: "Multi-modal AI perception system for real-time sign language interpretation.",
    stack: ["Python", "Computer Vision", "JavaScript"],
    year: "2024",
    color: "from-cyan-600/20 to-blue-600/20",
  },
  {
    title: "Expense Tracker Web App",
    description: "Responsive web app to manage income, expenses, and monthly budgets with visual charts.",
    stack: ["React", "JavaScript", "Charts"],
    year: "2025",
    color: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "Ola Electric Clone",
    description: "Full-stack web app simulating vehicle listings, bookings, and admin panel.",
    stack: ["React", "Node.js", "MongoDB"],
    year: "2025",
    color: "from-orange-600/20 to-amber-600/20",
  },
];

const stats = [
  { value: "7.2", label: "Current GPA" },
  { value: "4", label: "Projects" },
  { value: "1", label: "Internship" },
  { value: "2026", label: "Graduation" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-white">
      <div className="max-w-[1100px] mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-start justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                  <span className="text-[18px] font-bold">NR</span>
                </div>
                <div>
                  <h1 className="text-[28px] font-[600] tracking-tight leading-none">{personalInfo.name}</h1>
                  <p className="text-[14px] text-white/50 mt-1">{personalInfo.role}</p>
                </div>
              </div>
              
              <p className="text-[17px] leading-[1.7] text-white/70 max-w-[620px] font-[350]">
                {personalInfo.tagline} Motivated software development enthusiast with a foundation in Machine Learning and Data Visualization. 
                Currently in final year of Computer Science Engineering (Data Science) at MITM.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="https://github.com/NagabhushanaRajuS" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <Github className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
              <span className="text-[13px] font-[450]">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a href="#" className="group flex items-center gap-2 px-4 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <Linkedin className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
              <span className="text-[13px] font-[450]">LinkedIn</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-2 px-4 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <Mail className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
              <span className="text-[13px] font-[450]">Email</span>
            </a>
            <div className="flex items-center gap-1.5 pl-3">
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[13px] text-white/50">{personalInfo.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10 rounded-[20px] overflow-hidden mb-20 p-[1px]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0a0f]/80 backdrop-blur-xl px-6 py-5 text-center">
              <div className="text-[28px] font-[600] tracking-tight leading-none mb-1">{stat.value}</div>
              <div className="text-[12px] text-white/50 uppercase tracking-wider font-[450]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[15px] font-[550] uppercase tracking-widest text-white/40">Work Experience</h2>
            <Link to="/experience" className="text-[13px] text-white/50 hover:text-white/80 transition-colors flex items-center gap-1 group">
              View all
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="space-y-[1px] bg-white/10 rounded-[20px] overflow-hidden p-[1px]">
            {experience.map((exp) => (
              <div key={exp.company} className="group relative bg-[#0a0a0f]/80 backdrop-blur-xl p-6 hover:bg-[#0f0f14]/80 transition-colors">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[13px] font-[500] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">{exp.year}</span>
                      <span className="text-[13px] text-white/40">{exp.period}</span>
                    </div>
                    <h3 className="text-[18px] font-[550] leading-snug mb-1 group-hover:text-violet-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-[14px] text-white/60 mb-2.5">{exp.company} • Internship</p>
                    <p className="text-[14px] leading-[1.6] text-white/50 line-clamp-2">{exp.description}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[15px] font-[550] uppercase tracking-widest text-white/40">Featured Projects</h2>
            <Link to="/projects" className="text-[13px] text-white/50 hover:text-white/80 transition-colors flex items-center gap-1 group">
              View all
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-[1px] bg-white/10 rounded-[20px] overflow-hidden p-[1px]">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="group relative bg-[#0a0a0f]/80 backdrop-blur-xl p-6 hover:bg-[#0f0f14]/80 transition-all"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${project.color} blur-2xl`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">{project.year}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <h3 className="text-[17px] font-[550] leading-snug mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-[13.5px] leading-[1.55] text-white/55 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[11px] px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-white/50 font-[450]">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-[11px] px-2 py-1 rounded-md text-white/30">+{project.stack.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 p-[1px] rounded-[20px] bg-gradient-to-b from-white/15 to-white/5"
        >
          <div className="rounded-[19px] bg-[#0a0a0f]/90 backdrop-blur-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-[550] mb-2">Currently</h3>
                <p className="text-[14px] leading-[1.6] text-white/60">
                  Final year Computer Science Engineering (Data Science) at MITM. Working on multimodal AI systems for healthcare. 
                  Open to internships and full-time opportunities in AI/ML and full-stack development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
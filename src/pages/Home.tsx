import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink, Eye, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VisitorIntake from '../components/VisitorIntake';

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
    relevance: ["ml", "ai", "healthcare", "google", "research"],
  },
  {
    title: "Real-Time Sign Language Interpreter",
    description: "Multi-modal AI perception system for real-time sign language interpretation.",
    stack: ["Python", "Computer Vision", "JavaScript"],
    year: "2024",
    color: "from-cyan-600/20 to-blue-600/20",
    relevance: ["cv", "ai", "realtime", "accessibility"],
  },
  {
    title: "Expense Tracker Web App",
    description: "Responsive web app to manage income, expenses, and monthly budgets with visual charts.",
    stack: ["React", "JavaScript", "Charts"],
    year: "2025",
    color: "from-emerald-600/20 to-teal-600/20",
    relevance: ["web", "frontend", "fullstack", "startup"],
  },
  {
    title: "Ola Electric Clone",
    description: "Full-stack web app simulating vehicle listings, bookings, and admin panel.",
    stack: ["React", "Node.js", "MongoDB"],
    year: "2025",
    color: "from-orange-600/20 to-amber-600/20",
    relevance: ["fullstack", "web", "startup", "mern"],
  },
];

const stats = [
  { value: "7.2", label: "Current GPA" },
  { value: "4", label: "Projects" },
  { value: "1", label: "Internship" },
  { value: "2026", label: "Graduation" },
];

export default function Home() {
  const [visitor, setVisitor] = useState<any>(null);
  const [visitCount, setVisitCount] = useState(0);
  const [personalizedProjects, setPersonalizedProjects] = useState(projects);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('visit-count') || '1');
    setVisitCount(count);
    
    const savedVisitor = localStorage.getItem('visitor-data');
    if (savedVisitor) {
      const v = JSON.parse(savedVisitor);
      setVisitor(v);
      personalizeContent(v);
    }
  }, []);

  const personalizeContent = (visitorData: any) => {
    const company = (visitorData.company || '').toLowerCase();
    const role = (visitorData.role || '').toLowerCase();
    
    let sorted = [...projects];
    
    if (company.includes('google') || company.includes('meta') || role.includes('ml') || role.includes('ai')) {
      sorted.sort((a, b) => {
        const aScore = a.relevance.filter(r => ['ml', 'ai', 'research'].includes(r)).length;
        const bScore = b.relevance.filter(r => ['ml', 'ai', 'research'].includes(r)).length;
        return bScore - aScore;
      });
    } else if (company.includes('startup') || role.includes('full') || role.includes('stack')) {
      sorted.sort((a, b) => {
        const aScore = a.relevance.filter(r => ['fullstack', 'web', 'startup'].includes(r)).length;
        const bScore = b.relevance.filter(r => ['fullstack', 'web', 'startup'].includes(r)).length;
        return bScore - aScore;
      });
    }
    
    setPersonalizedProjects(sorted);
  };

  const handleVisitorComplete = (data: any) => {
    setVisitor(data);
    personalizeContent(data);
  };

  const getPersonalizedTagline = () => {
    if (!visitor || !visitor.company) return personalInfo.tagline;
    
    const company = visitor.company.toLowerCase();
    const role = visitor.role.toLowerCase();
    
    if (company.includes('google') || company.includes('meta')) {
      return "Building production ML systems with ResNet and BERT. Published research on multimodal AI for healthcare.";
    }
    if (role.includes('ml') || role.includes('ai')) {
      return "Specialized in deep learning, computer vision, and multimodal AI systems. Experience with medical imaging and NLP.";
    }
    if (role.includes('full') || role.includes('stack')) {
      return "Full-stack developer with React, Node.js, and MongoDB. Built 4 production apps including real-time systems.";
    }
    return personalInfo.tagline;
  };

  return (
    <div className="relative min-h-screen bg-[#050507] text-white">
      <VisitorIntake onComplete={handleVisitorComplete} />
      
      <div className="max-w-[1100px] mx-auto px-6 pt-32 pb-20">
        {/* Live indicator */}
        {visitor && visitor.name !== 'Guest' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-24 right-6 z-40 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/10"
          >
            <Eye className="w-3 h-3 text-violet-400" />
            <span className="text-[11px] text-white/60">Personalized for {visitor.name} • {visitor.company}</span>
          </motion.div>
        )}

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
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-600/20 blur-xl rounded-2xl animate-pulse" />
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                    <span className="text-[18px] font-bold">NR</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-[28px] font-[600] tracking-tight leading-none">{personalInfo.name}</h1>
                    {visitCount > 1 && (
                      <span className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-400 font-medium">
                        {visitCount} visits
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] text-white/50 mt-1 flex items-center gap-2">
                    {personalInfo.role}
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] text-emerald-400">Live</span>
                    </span>
                  </p>
                </div>
              </div>
              
              <p className="text-[17px] leading-[1.7] text-white/70 max-w-[620px] font-[350]">
                {getPersonalizedTagline()} Motivated software development enthusiast with a foundation in Machine Learning and Data Visualization. 
                Currently in final year of Computer Science Engineering (Data Science) at MITM.
              </p>

              {visitor && visitor.company && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 max-w-[620px]"
                >
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                    <p className="text-[13px] leading-[1.5] text-violet-200/80">
                      Portfolio adapted for <span className="text-violet-300 font-[500]">{visitor.company}</span>
                      {visitor.role && <> • Showing most relevant {visitor.role} projects first</>}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="https://github.com/NagabhushanaRajuS" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <Github className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
              <span className="text-[13px] font-[450]">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a href="https://linkedin.com/in/-nagabhushanarajus-" target="_blank" className="group flex items-center gap-2 px-4 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <Linkedin className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
              <span className="text-[13px] font-[450]">LinkedIn</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-2 px-4 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <Mail className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
              <span className="text-[13px] font-[450]">Email</span>
            </a>
            <div className="flex items-center gap-1.5 pl-3">
              <Users className="w-3.5 h-3.5 text-white/30" />
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
            <div key={stat.label} className="bg-[#0a0a0f]/80 backdrop-blur-xl px-6 py-5 text-center group hover:bg-[#0f0f14]/80 transition-colors">
              <div className="text-[28px] font-[600] tracking-tight leading-none mb-1 group-hover:text-violet-400 transition-colors">{stat.value}</div>
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
            <div>
              <h2 className="text-[15px] font-[550] uppercase tracking-widest text-white/40">Featured Projects</h2>
              {visitor && visitor.company && (
                <p className="text-[12px] text-violet-400/70 mt-1">Sorted by relevance to {visitor.company}</p>
              )}
            </div>
            <Link to="/projects" className="text-[13px] text-white/50 hover:text-white/80 transition-colors flex items-center gap-1 group">
              View all
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-[1px] bg-white/10 rounded-[20px] overflow-hidden p-[1px]">
            {personalizedProjects.map((project, i) => (
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
                      {i === 0 && visitor?.company && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 font-medium">
                          Recommended
                        </span>
                      )}
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

        {/* Currently */}
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
                <h3 className="text-[15px] font-[550] mb-2 flex items-center gap-2">
                  Currently
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">Available</span>
                </h3>
                <p className="text-[14px] leading-[1.6] text-white/60">
                  Final year Computer Science Engineering (Data Science) at MIT Mysore. Published research on multimodal AI for disease detection. 
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
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Journey from './pages/Journey';
import Social from './pages/Social';
import Products from './pages/Products';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import NeuralBackground from './components/NeuralBackground';

const navItems = [
  { path: '/', label: 'Myself' },
  { path: '/projects', label: 'Studio' },
  { path: '/experience', label: 'Workspace' },
  { path: '/journey', label: 'Ink' },
  { path: '/certificates', label: 'Edu' },
  { path: '/social', label: 'Hobbies' },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3' : ''}`}>
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-600/20 blur-xl rounded-full group-hover:bg-violet-600/30 transition-all" />
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                <span className="text-[13px] font-bold text-white">NR</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[14px] font-[550] leading-none tracking-tight">@Nagabhushana</div>
            </div>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 h-8 flex items-center text-[13.5px] transition-all rounded-full ${
                    active ? 'text-white' : 'text-white/55 hover:text-white/85'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/10 backdrop-blur rounded-full border border-white/10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 font-[450]">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 pl-3 pr-3 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium text-emerald-400 tracking-wide">OPEN TO WORK</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/social" element={<Social />} />
        <Route path="/products" element={<Products />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050507] text-white antialiased selection:bg-violet-500/30 selection:text-violet-200">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Fragment+Mono&display=swap');
          html { scrollbar-width: thin; scrollbar-color: #27272a transparent; }
          body { font-family: 'Inter', system-ui, -apple-system, sans-serif; font-feature-settings: 'ss01' on, 'cv01' on, 'cv11' on; }
          ::-webkit-scrollbar { width: 4px; height: 4px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 2px; }
          ::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
        `}</style>
        <NeuralBackground />
        <Nav />
        <AppRoutes />
        
        <footer className="relative z-10 border-t border-white/[0.06]">
          <div className="max-w-[1100px] mx-auto px-6 py-8 flex items-center justify-between text-[12.5px] text-white/40">
            <div className="flex items-center gap-4">
              <span>© 2025 Nagabhushana Raju</span>
              <span className="hidden sm:block">•</span>
              <span className="hidden sm:block">Built with React • TypeScript • Tailwind</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/NagabhushanaRajuS" className="hover:text-white/70 transition-colors">GitHub</a>
              <a href="#" className="hover:text-white/70 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
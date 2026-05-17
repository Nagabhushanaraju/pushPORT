import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
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
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/journey', label: 'Journey' },
  { path: '/social', label: 'Social' },
  { path: '/products', label: 'Products' },
  { path: '/experience', label: 'Experience' },
  { path: '/resume', label: 'Resume' },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.06] bg-[#050507]/70 backdrop-blur-2xl">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 blur-[6px] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                <span className="text-[15px] font-[700] text-white tracking-tight">AE</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[15px] font-[600] leading-none tracking-tight">Alex Evans</div>
              <div className="text-[11px] text-white/50 leading-none mt-0.5">Design Engineer</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 h-8 flex items-center text-[13px] font-[500] rounded-full transition-colors"
                >
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${active ? 'text-black' : 'text-white/70 hover:text-white'}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/resume" className="hidden sm:block">
              <button className="h-9 px-4 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-[13px] font-[500] hover:bg-white/[0.1] hover:border-white/25 transition-all">
                Hire me
              </button>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[90] lg:hidden pt-[72px]"
          >
            <div className="absolute inset-0 bg-[#050507]/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
            <div className="relative z-10 p-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 h-12 flex items-center rounded-2xl border transition-all ${
                      location.pathname === item.path
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Fraunces:opsz,wght@9..144,300..700&display=swap');
          html { scrollbar-width: thin; scrollbar-color: #27272a transparent; }
          body { font-family: 'Instrument Sans', system-ui, -apple-system, sans-serif; font-feature-settings: 'ss01' on, 'cv01' on; }
          h1, h2, h3 { font-family: 'Instrument Sans', system-ui, sans-serif; letter-spacing: -0.02em; }
        `}</style>
        <NeuralBackground />
        <Nav />
        <AppRoutes />
        
        {/* Footer */}
        <footer className="relative z-10 border-t border-white/[0.06] bg-[#050507]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                <span className="text-[12px] font-bold">AE</span>
              </div>
              <span className="text-[13px] text-white/50">© 2024 Alex Evans — Design Engineer</span>
            </div>
            <div className="flex items-center gap-6 text-[13px] text-white/50">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
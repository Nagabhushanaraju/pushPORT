import { Zap, Trophy, Briefcase, Heart, Rocket, Sparkles } from 'lucide-react';

export const previews = [
  {
    title: 'Projects',
    path: '/projects',
    icon: Rocket,
    color: 'from-violet-600 to-fuchsia-600',
    desc: '12 shipped products, 3 open source, 4.2M users',
    image: '/images/project1.jpg',
    preview: {
      stats: ['12 Products', '4.2M Users', '$1.2M ARR'],
      items: ['Aura AI Design System', 'Flux Mobile Banking', 'Lumen API', 'Mirage 3D'],
      highlight: 'YC W24, acquired by Stripe'
    }
  },
  {
    title: 'Certificates',
    path: '/certificates',
    icon: Trophy,
    color: 'from-cyan-500 to-blue-600',
    desc: 'AWS, Google Cloud, Meta, 18 certifications',
    image: '/images/cert.jpg',
    preview: {
      stats: ['18 Certs', '8 Platforms', '100% Verified'],
      items: ['AWS Solutions Architect Pro', 'Google ML Engineer', 'Meta React Advanced', 'NVIDIA DLI'],
      highlight: 'Verified on Credly & Blockchain'
    }
  },
  {
    title: 'Entrepreneur Journey',
    path: '/journey',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    desc: '0 to 1 builder • 3 startups • $2.4M raised',
    image: '/images/project2.jpg',
    preview: {
      stats: ['3 Startups', '$2.4M Raised', '1 Acquired'],
      items: ['2024: Aura raises $2.4M', '2023: Lumen acquired', '2021: Verve $80K MRR', '2019: First failure'],
      highlight: '0 → 1 builder, 5 years'
    }
  },
  {
    title: 'Social Service',
    path: '/social',
    icon: Heart,
    color: 'from-rose-500 to-pink-600',
    desc: 'AICTE mentor, 200K YouTube, 50+ webinars',
    image: '/images/hero-bg.jpg',
    preview: {
      stats: ['214K YouTube', '1.2K Mentored', '50+ Talks'],
      items: ['AICTE National Mentor', 'YouTube @designengineer', 'Instagram @craft.lab', '50+ Webinars'],
      highlight: 'Code for Good • 340 hrs'
    }
  },
  {
    title: 'Products',
    path: '/products',
    icon: Sparkles,
    color: 'from-emerald-500 to-teal-600',
    desc: 'Design systems, SaaS tools, AI agents',
    image: '/images/project1.jpg',
    preview: {
      stats: ['6 Products', '$340K Revenue', '18K Stars'],
      items: ['Aura UI — $149', 'Flux Icons — $39', 'Atlas Tokens — Free', 'Verve Analytics'],
      highlight: 'Bootstrapped, profitable'
    }
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: Briefcase,
    color: 'from-indigo-500 to-violet-600',
    desc: 'Senior at FAANG • Lead designer • 7 years',
    image: '/images/project2.jpg',
    preview: {
      stats: ['7 Years', '4 Companies', 'FAANG → Founder'],
      items: ['Founder @ Aura (2023-)', 'Staff @ Stripe', 'Senior @ Linear', 'Designer @ Meta'],
      highlight: 'Led systems for 2,000+ engineers'
    }
  },
];

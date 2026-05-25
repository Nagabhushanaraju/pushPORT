import { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { PreviewGrid } from '../components/home/PreviewGrid';
import { GlassmorphismPopup } from '../components/home/GlassmorphismPopup';
import { CTA } from '../components/home/CTA';

export default function Home() {
  const [activePreview, setActivePreview] = useState<number | null>(null);

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <Hero setActivePreview={setActivePreview} />
      <PreviewGrid setActivePreview={setActivePreview} />
      <GlassmorphismPopup
        activePreview={activePreview}
        setActivePreview={setActivePreview}
      />
      <CTA />
    </div>
  );
}

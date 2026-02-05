import React, { useState, useRef, useEffect } from 'react';
import { MousePointer2, ShieldCheck, AlertTriangle } from 'lucide-react';

export const TacticalResults: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Using placeholders that represent "Chaos/Damage" vs "Order/Safety"
  // Since we don't have real assets, we use styled placeholders
  const beforeImage = "https://images.unsplash.com/photo-1518105570919-e342af1a8256?q=80&w=2574&auto=format&fit=crop"; // Stormy/Dark forest vibe
  const afterImage = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop"; // Clean, green forest vibe

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) handleMove(e.touches[0].clientX);
  };

  return (
    <div className="py-24 relative">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Tactical Results</h2>
            <p className="text-gray-400">Drag to compare operational status before and after G3 intervention.</p>
          </div>

          <div 
            className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-col-resize select-none group"
            ref={containerRef}
            onMouseDown={() => isDragging.current = true}
            onMouseUp={() => isDragging.current = false}
            onMouseLeave={() => isDragging.current = false}
            onMouseMove={onMouseMove}
            onTouchStart={() => isDragging.current = true}
            onTouchEnd={() => isDragging.current = false}
            onTouchMove={onTouchMove}
          >
            {/* AFTER IMAGE (Background - The Result) */}
            <div className="absolute inset-0">
               <img src={afterImage} alt="After Service" className="w-full h-full object-cover filter brightness-110 saturate-120" />
               <div className="absolute top-8 right-8 bg-green-500/20 backdrop-blur-md border border-green-500/50 text-green-400 px-4 py-2 rounded-lg font-bold font-display uppercase tracking-widest flex items-center">
                  <ShieldCheck size={18} className="mr-2" />
                  SECURED
               </div>
            </div>

            {/* BEFORE IMAGE (Clipped on top - The Hazard) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
               <img src={beforeImage} alt="Before Service" className="w-full h-full object-cover filter sepia-[.5] hue-rotate-[-30deg] contrast-125" />
               <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply pointer-events-none"></div>
               <div className="absolute top-8 left-8 bg-red-500/20 backdrop-blur-md border border-red-500/50 text-red-400 px-4 py-2 rounded-lg font-bold font-display uppercase tracking-widest flex items-center whitespace-nowrap">
                  <AlertTriangle size={18} className="mr-2" />
                  HAZARD DETECTED
               </div>
            </div>

            {/* SLIDER HANDLE */}
            <div 
               className="absolute top-0 bottom-0 w-1 bg-opal-orange cursor-col-resize z-20 shadow-[0_0_20px_rgba(255,87,34,0.8)]"
               style={{ left: `${sliderPosition}%` }}
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur border border-opal-orange rounded-full flex items-center justify-center shadow-xl">
                  <MousePointer2 className="text-opal-orange rotate-90" size={24} />
               </div>
            </div>

            {/* INSTRUCTIONS OVERLAY (Fades out) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono uppercase tracking-[0.2em] pointer-events-none animate-pulse">
               Slide to Analyze
            </div>
          </div>
       </div>
    </div>
  );
};
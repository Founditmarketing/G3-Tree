import React from 'react';
import { Crosshair, FileSearch, Hammer, Recycle } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Aerial Recon & Data",
    description: "Drone-assisted canopy scanning to identify stress points and structural weaknesses invisible to the naked eye.",
    icon: Crosshair
  },
  {
    id: "02",
    title: "Strategic Formulation",
    description: "Development of a surgical execution plan minimizing impact on surrounding assets and infrastructure.",
    icon: FileSearch
  },
  {
    id: "03",
    title: "Precision Execution",
    description: "Deployment of specialized rigging and cutting teams following strict safety and efficiency protocols.",
    icon: Hammer
  },
  {
    id: "04",
    title: "Bio-Recovery",
    description: "Complete biomass removal and site restoration. Wood is recycled into mulch or lumber where possible.",
    icon: Recycle
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="py-24 relative">
       <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Operational Protocol</h2>
          <p className="text-gray-400">Our standardized workflow ensures zero-error execution.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-opal-orange/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-opal-orange/40 transition-all duration-500 h-full flex flex-col items-center text-center hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,87,34,0.1)]">
                  
                  {/* Icon Node */}
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-white/10 group-hover:border-opal-orange flex items-center justify-center mb-6 shadow-xl relative transition-colors duration-500">
                     <step.icon className="text-gray-400 group-hover:text-opal-orange transition-colors" size={24} />
                     <div className="absolute -bottom-2 bg-black px-2 text-[10px] font-mono text-gray-500 border border-white/10 rounded group-hover:text-white group-hover:border-opal-orange transition-colors">
                        {step.id}
                     </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-opal-orange transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
       </div>
    </div>
  );
};

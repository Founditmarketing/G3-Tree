import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

const missions = [
  {
    id: "OP-2024-884",
    client: "Estate Mgr. Thompson",
    target: "Ancient Oak Preservation",
    location: "Sector 4 (Highlands)",
    outcome: "Structural Stabilization Complete",
    rating: 5,
    feedback: "The precision was evident. The crew operated with military efficiency. Site left impeccable."
  },
  {
    id: "OP-2024-912",
    client: "City Infrastructure Dept.",
    target: "Emergency Storm Clearance",
    location: "Sector 7 (Downtown)",
    outcome: "Hazard Neutralized < 2hrs",
    rating: 5,
    feedback: "Rapid deployment prevented major grid failure. G3 is our primary asset for heavy ops."
  },
  {
    id: "OP-2024-945",
    client: "Residential Unit 402",
    target: "Canopy Reduction",
    location: "Sector 2 (Suburbs)",
    outcome: "Light Penetration +40%",
    rating: 5,
    feedback: "My property value just went up. They didn't just cut branches; they sculptured the sunlight."
  }
];

export const MissionLog: React.FC = () => {
  return (
    <div className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-12">
           <ShieldCheck className="text-opal-orange" size={32} />
           <div className="flex flex-col">
             <h2 className="text-3xl font-display font-bold text-white">Mission Logs</h2>
             <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Client Debriefs & Outcomes</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-opal-orange/30 transition-all group relative overflow-hidden">
              
              {/* Decorative corner markers */}
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-opal-orange rounded-full"></div>
              </div>

              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                 <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase">Operation ID</div>
                    <div className="text-opal-accent font-mono text-sm">{mission.id}</div>
                 </div>
                 <div className="flex text-opal-orange">
                    {[...Array(mission.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                 </div>
              </div>

              <div className="space-y-4 mb-6">
                 <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase">Objective</div>
                    <div className="text-white font-bold">{mission.target}</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase">Operational Outcome</div>
                    <div className="text-green-400 text-sm font-mono">{mission.outcome}</div>
                 </div>
              </div>

              <div className="relative pl-6">
                 <Quote className="absolute left-0 top-0 text-white/10" size={20} />
                 <p className="text-gray-400 text-sm italic leading-relaxed">
                   "{mission.feedback}"
                 </p>
                 <div className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                   — {mission.client}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
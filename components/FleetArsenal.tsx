import React, { useState } from 'react';
import { Truck, Ruler, Weight, Zap, ChevronRight, Cpu } from 'lucide-react';

const fleet = [
  {
    id: "UNIT-01",
    name: "Spider Lift 720",
    role: "Limited Access Elevation",
    description: "Compact tracked aerial lift capable of passing through standard 36-inch gates while reaching heights of 72 feet. Minimal ground pressure preserves turf.",
    stats: [
      { label: "Vert. Reach", value: "72", unit: "ft", max: 100 },
      { label: "Chassis Width", value: "36", unit: "in", max: 100, inverse: true }, // Smaller is better
      { label: "Turf PSI", value: "5", unit: "psi", max: 20, inverse: true },
    ],
    icon: <Cpu size={40} className="text-opal-orange" />
  },
  {
    id: "UNIT-02",
    name: "Grapple Saw Crane",
    role: "Remote Dismantling",
    description: "Remote-operated knuckle boom crane that cuts and holds sections simultaneously. Removes the need for climbers in hazardous scenarios.",
    stats: [
      { label: "Boom Ext.", value: "90", unit: "ft", max: 120 },
      { label: "Lift Cap.", value: "4000", unit: "lbs", max: 5000 },
      { label: "Safety Rating", value: "100", unit: "%", max: 100 },
    ],
    icon: <Truck size={40} className="text-opal-accent" />
  },
  {
    id: "UNIT-03",
    name: "Biomass Chipper",
    role: "Rapid Reduction",
    description: "High-capacity drum chipper with SmartFeed technology. Instantly converts large timber into reusable mulch with noise-suppression systems.",
    stats: [
      { label: "Intake", value: "19", unit: "in", max: 24 },
      { label: "Torque", value: "400", unit: "ft/lb", max: 500 },
      { label: "Throughput", value: "High", unit: "", max: 100 },
    ],
    icon: <Zap size={40} className="text-green-400" />
  }
];

export const FleetArsenal: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState(0);

  return (
    <div className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <div>
             <h2 className="text-3xl font-display font-bold text-white mb-2">Tactical Assets</h2>
             <p className="text-gray-400 text-sm max-w-md">Specialized machinery deployed to ensure surgical precision and operational efficiency.</p>
           </div>
           <div className="hidden md:flex space-x-2">
             {fleet.map((_, i) => (
               <div 
                 key={i} 
                 className={`h-1 w-8 rounded-full transition-all duration-300 ${i === activeUnit ? 'bg-opal-orange w-16' : 'bg-gray-800'}`} 
               />
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Unit Selector (Mobile/Desktop List) */}
          <div className="lg:col-span-4 space-y-4">
            {fleet.map((unit, index) => (
              <div 
                key={index}
                onClick={() => setActiveUnit(index)}
                className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 flex items-center justify-between group
                  ${activeUnit === index 
                    ? 'bg-white/10 border-opal-orange shadow-[0_0_20px_rgba(255,87,34,0.1)]' 
                    : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-xs font-mono font-bold px-2 py-1 rounded bg-black/40 border ${activeUnit === index ? 'text-opal-orange border-opal-orange/30' : 'text-gray-500 border-white/5'}`}>
                    {unit.id}
                  </div>
                  <div>
                    <h4 className={`font-bold font-display ${activeUnit === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{unit.name}</h4>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">{unit.role}</p>
                  </div>
                </div>
                {activeUnit === index && <ChevronRight className="text-opal-orange animate-pulse" size={16} />}
              </div>
            ))}
          </div>

          {/* Active Unit Display (Tech Card) */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-1 rounded-3xl border border-white/10 relative overflow-hidden min-h-[400px]">
              
              {/* Background Tech Grid */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
                     backgroundSize: '20px 20px' 
                   }}>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-[20px] p-8 h-full relative z-10 flex flex-col justify-between">
                
                <div className="flex justify-between items-start mb-8">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
                      {fleet[activeUnit].icon}
                   </div>
                   <div className="text-right">
                      <h3 className="text-3xl font-display font-bold text-white mb-1">{fleet[activeUnit].name}</h3>
                      <p className="text-opal-accent font-mono text-sm tracking-widest uppercase">Status: Operational</p>
                   </div>
                </div>

                <div className="mb-8">
                   <p className="text-gray-400 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4">
                     {fleet[activeUnit].description}
                   </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black/40 rounded-xl p-6 border border-white/5">
                  {fleet[activeUnit].stats.map((stat, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-xs uppercase font-bold text-gray-500 tracking-wider">
                         <span>{stat.label}</span>
                         <span className="text-white">{stat.value}{stat.unit}</span>
                       </div>
                       <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${stat.inverse ? 'bg-opal-accent' : 'bg-opal-orange'}`} 
                            style={{ width: `${Math.min((parseInt(stat.value) / stat.max) * 100, 100)}%`, transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
                          />
                       </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

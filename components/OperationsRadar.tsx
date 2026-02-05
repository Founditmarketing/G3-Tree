import React, { useState } from 'react';
import { MapPin, Target, Users, Clock, Shield } from 'lucide-react';

const sectors = [
  {
    id: "SEC-ALPHA",
    name: "North Metro Estate Zone",
    status: "Active Ops",
    crews: 3,
    response: "< 24 Hours",
    coordinates: { x: 30, y: 30 }
  },
  {
    id: "SEC-BETA",
    name: "Downtown Commercial District",
    status: "High Demand",
    crews: 5,
    response: "Immediate",
    coordinates: { x: 70, y: 40 }
  },
  {
    id: "SEC-GAMMA",
    name: "West Hills Reserve",
    status: "Patrol Mode",
    crews: 1,
    response: "48 Hours",
    coordinates: { x: 40, y: 70 }
  },
  {
    id: "SEC-DELTA",
    name: "Industrial Corridor",
    status: "Scheduled Maintenance",
    crews: 2,
    response: "72 Hours",
    coordinates: { x: 80, y: 80 }
  }
];

export const OperationsRadar: React.FC = () => {
  const [activeSector, setActiveSector] = useState(sectors[0]);

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Data List */}
        <div className="z-10 order-2 lg:order-1">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-2">Sector Coverage</h2>
            <p className="text-gray-400">Live deployment status across active service zones.</p>
          </div>

          <div className="space-y-4">
            {sectors.map((sector) => (
              <div 
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 group
                  ${activeSector.id === sector.id 
                    ? 'bg-white/10 border-opal-orange shadow-[0_0_15px_rgba(255,87,34,0.1)]' 
                    : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20'}`}
              >
                <div className="flex justify-between items-center mb-2">
                   <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${activeSector.id === sector.id ? 'bg-opal-orange animate-pulse' : 'bg-gray-600'}`}></div>
                      <span className="font-display font-bold text-white">{sector.name}</span>
                   </div>
                   <span className="text-[10px] font-mono text-gray-500 uppercase">{sector.id}</span>
                </div>
                
                <div className="flex space-x-6 pl-5">
                   <div className="flex items-center text-xs text-gray-400">
                      <Shield size={12} className="mr-1 text-opal-accent" />
                      {sector.status}
                   </div>
                   <div className="flex items-center text-xs text-gray-400">
                      <Clock size={12} className="mr-1 text-opal-orange" />
                      {sector.response}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Radar Visual */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center h-[500px]">
          
          {/* Radar Container */}
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl flex items-center justify-center">
             
             {/* Grid Rings */}
             <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.75]"></div>
             <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.50]"></div>
             <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.25]"></div>
             
             {/* Crosshairs */}
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-full h-px bg-opal-accent"></div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="h-full w-px bg-opal-accent"></div>
             </div>

             {/* Scanning Sweep */}
             <div className="absolute inset-0 rounded-full overflow-hidden animate-spin-slow opacity-30">
                <div className="w-1/2 h-1/2 bg-gradient-to-tl from-opal-orange/80 to-transparent absolute top-0 left-0 origin-bottom-right rotate-0 transform translate-x-full translate-y-full blur-sm"></div>
             </div>

             {/* Blips (Mapped from Data) */}
             {sectors.map((sector) => (
                <div 
                  key={sector.id}
                  className={`absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500
                    ${activeSector.id === sector.id ? 'bg-white shadow-[0_0_15px_white] scale-125 z-20' : 'bg-opal-orange/50 shadow-[0_0_10px_#FF5722] z-10'}`}
                  style={{ top: `${sector.coordinates.y}%`, left: `${sector.coordinates.x}%` }}
                >
                   {/* Ripple Effect for active blip */}
                   {activeSector.id === sector.id && (
                     <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-50"></div>
                   )}
                   
                   {/* Label on Radar */}
                   {activeSector.id === sector.id && (
                     <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/80 border border-white/20 px-2 py-1 rounded text-[10px] whitespace-nowrap text-white font-mono backdrop-blur-md">
                        {sector.name}
                     </div>
                   )}
                </div>
             ))}

             {/* Center Hub */}
             <div className="absolute w-4 h-4 bg-opal-accent rounded-full shadow-[0_0_20px_#00D4FF] z-30 flex items-center justify-center">
               <div className="w-1 h-1 bg-white rounded-full"></div>
             </div>

          </div>
          
          {/* Overlay Stats (Floating) */}
          <div className="absolute bottom-0 right-0 glass-panel p-4 rounded-xl border-l-4 border-opal-orange max-w-[200px] animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Active Crew Deployment</div>
             <div className="text-3xl font-display font-bold text-white flex items-center">
               <Users size={20} className="mr-2 text-opal-orange" />
               {sectors.reduce((acc, curr) => acc + curr.crews, 0)}
             </div>
             <div className="text-[10px] text-green-400 mt-1 flex items-center">
               <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-2"></div>
               ALL SYSTEMS NOMINAL
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
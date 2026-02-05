import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';
import { Wind, Droplets, Sun, CloudLightning, Activity } from 'lucide-react';

const efficiencyData = [
  { name: 'Mon', speed: 85, safety: 98 },
  { name: 'Tue', speed: 88, safety: 97 },
  { name: 'Wed', speed: 92, safety: 99 },
  { name: 'Thu', speed: 90, safety: 98 },
  { name: 'Fri', speed: 95, safety: 100 },
  { name: 'Sat', speed: 80, safety: 98 },
];

const EnvWidget = ({ icon: Icon, label, value, unit, status, color }: any) => (
  <div className="glass-panel p-4 rounded-xl border-l-2 relative overflow-hidden group hover:bg-white/5 transition-all" style={{ borderColor: color }}>
    <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
      <Icon size={64} />
    </div>
    <div className="flex justify-between items-start mb-2">
      <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${status === 'OPTIMAL' ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'}`}>
        {status}
      </span>
    </div>
    <div className="relative z-10">
      <h4 className="text-2xl font-display font-bold text-white">{value}<span className="text-sm font-sans text-gray-500 font-normal ml-1">{unit}</span></h4>
      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{label}</p>
    </div>
  </div>
);

export const StatsSection: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-opal-orange/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <div className="flex items-center space-x-2 mb-2 text-opal-orange">
              <Activity size={16} className="animate-pulse" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Live Telemetry</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-white">
              Environmental <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Command Deck</span>
            </h2>
          </div>
          <p className="text-right text-gray-500 text-sm hidden md:block max-w-xs">
            Real-time monitoring of regional biological and atmospheric conditions to optimize service safety.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Widgets */}
          <div className="space-y-4">
             <EnvWidget 
               icon={Wind} 
               label="Wind Shear" 
               value="12" 
               unit="MPH" 
               status="OPTIMAL" 
               color="#00D4FF" 
             />
             <EnvWidget 
               icon={Droplets} 
               label="Soil Saturation" 
               value="68" 
               unit="%" 
               status="CAUTION" 
               color="#FF5722" 
             />
             <EnvWidget 
               icon={Sun} 
               label="UV Index" 
               value="8.2" 
               unit="UV" 
               status="HIGH" 
               color="#FF8A50" 
             />
             <EnvWidget 
               icon={CloudLightning} 
               label="Storm Prob." 
               value="15" 
               unit="%" 
               status="OPTIMAL" 
               color="#A855F7" 
             />
          </div>

          {/* Column 2: Main Chart */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-lg font-semibold text-white">Operational Efficiency Index</h3>
               <div className="flex space-x-4 text-xs font-mono text-gray-400">
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-opal-orange mr-2" /> Safety Rating</span>
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-gray-600 mr-2" /> Speed</span>
               </div>
            </div>
            
            <div className="flex-grow min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={efficiencyData}>
                  <defs>
                    <linearGradient id="colorSafety" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF5722" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF5722" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#333" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#333" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                     cursor={{stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2}}
                     contentStyle={{ backgroundColor: '#050505', border: '1px solid #333', borderRadius: '8px', boxShadow: '0 0 20px rgba(0,0,0,0.8)' }}
                     itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="speed" stroke="#666" fillOpacity={1} fill="url(#colorSpeed)" strokeWidth={2} />
                  <Area type="monotone" dataKey="safety" stroke="#FF5722" fillOpacity={1} fill="url(#colorSafety)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

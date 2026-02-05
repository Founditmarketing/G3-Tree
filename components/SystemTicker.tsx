import React from 'react';
import { Wifi, Activity, Cloud } from 'lucide-react';

export const SystemTicker: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-8 bg-black/80 backdrop-blur-md border-t border-white/10 z-50 flex items-center overflow-hidden pointer-events-none">
      
      {/* Static Label */}
      <div className="h-full bg-opal-orange px-3 flex items-center text-[10px] font-bold text-black uppercase tracking-widest z-20 shadow-[0_0_20px_#FF5722]">
        Live Feed
      </div>

      {/* Scrolling Content */}
      <div className="flex whitespace-nowrap animate-scroll items-center">
         
         {[...Array(3)].map((_, i) => (
           <React.Fragment key={i}>
             <span className="ticker-item text-green-500">
               <Wifi size={10} className="inline mr-1" /> SYSTEM: ONLINE
             </span>
             <span className="ticker-item text-gray-400">
               WIND: 12 MPH (NNW)
             </span>
             <span className="ticker-item text-opal-accent">
               <Activity size={10} className="inline mr-1" /> DISPATCH QUEUE: ACTIVE (4)
             </span>
             <span className="ticker-item text-gray-400">
               BAROMETRIC PRESSURE: 30.12 inHg
             </span>
             <span className="ticker-item text-opal-orange">
               <Cloud size={10} className="inline mr-1" /> STORM FRONT: STABILIZING
             </span>
             <span className="ticker-item text-gray-400">
               CREW UNIT-01: EN ROUTE TO SECTOR 7
             </span>
             <span className="ticker-item text-gray-500">
                // G3-SECURE-CHANNEL-ENCRYPTED //
             </span>
           </React.Fragment>
         ))}
      </div>
      
      <style>{`
        .ticker-item {
          display: inline-flex;
          align-items: center;
          margin-right: 3rem;
          font-family: 'Space Grotesk', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          font-weight: 500;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};
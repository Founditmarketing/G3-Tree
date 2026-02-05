import React, { useEffect, useState } from 'react';
import { Trees } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const logs = [
    "INITIALIZING KERNEL...",
    "LOADING BIOMETRIC DATABASES...",
    "CONNECTING TO SATELLITE ARRAY...",
    "CALIBRATING OPTICAL SENSORS...",
    "DECRYPTING SECURE CHANNELS...",
    "G3_PROTOCOL_V3.0: READY"
  ];

  useEffect(() => {
    // Progress Bar Simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Log Scrolling
    if (logIndex < logs.length - 1) {
      const timeout = setTimeout(() => {
        setLogIndex(prev => prev + 1);
      }, 300); // Speed of logs
      return () => clearTimeout(timeout);
    }
  }, [logIndex]);

  useEffect(() => {
    // Completion Logic
    if (progress >= 100 && logIndex >= logs.length - 1) {
      setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 500); // Wait for fade out animation
      }, 500);
    }
  }, [progress, logIndex, onComplete]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${progress >= 100 && logIndex >= logs.length - 1 ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Centered Content */}
      <div className="w-full max-w-md px-6">
        
        {/* Logo Flicker */}
        <div className="flex justify-center mb-12">
           <div className="relative">
             <div className="w-16 h-16 rounded-xl bg-opal-orange flex items-center justify-center animate-pulse">
                <Trees className="text-white" size={32} />
             </div>
             {/* Glitch Overlay */}
             <div className="absolute inset-0 bg-opal-accent opacity-50 translate-x-1 translate-y-1 mix-blend-multiply animate-ping"></div>
           </div>
        </div>

        {/* Text Logs */}
        <div className="h-32 font-mono text-xs text-opal-orange mb-4 space-y-1 overflow-hidden flex flex-col justify-end border-l-2 border-opal-orange pl-4 bg-opal-orange/5 p-2 rounded">
          {logs.slice(0, logIndex + 1).map((log, i) => (
            <div key={i} className="animate-in slide-in-from-left-4 fade-in duration-300">
              <span className="text-gray-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
              <span className={i === logs.length - 1 ? "text-white font-bold" : "opacity-70"}>{log}</span>
            </div>
          ))}
          <div className="w-2 h-4 bg-opal-orange animate-blink inline-block mt-1"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-opal-accent shadow-[0_0_10px_#00D4FF]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-500">
           <span>SYSTEM INTEGRITY</span>
           <span>{Math.floor(Math.min(progress, 100))}%</span>
        </div>

      </div>

    </div>
  );
};
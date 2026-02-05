import React, { useState } from 'react';
import { Send, Radio, CheckCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [ticketId] = useState(`G3-${Math.floor(Math.random() * 9000) + 1000}`);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('SENT');
      // Reset after 3 seconds
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 1500);
  };

  return (
    <div className="glass-panel p-1 rounded-3xl border border-white/10 max-w-2xl mx-auto shadow-2xl">
      
      {/* Console Header */}
      <div className="bg-black/40 rounded-t-[20px] px-6 py-3 border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500" />
           <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500" />
           <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500" />
        </div>
        <div className="text-xs font-mono text-gray-500">DISPATCH CONSOLE v2.4</div>
      </div>

      <div className="p-8 md:p-12 relative overflow-hidden">
        
        {/* Success Overlay */}
        {status === 'SENT' && (
           <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
              <CheckCircle size={64} className="text-green-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Transmission Received</h3>
              <p className="text-gray-400 font-mono">TICKET #{ticketId} LOGGED</p>
           </div>
        )}

        <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end border-b border-white/5 pb-6">
          <div>
             <h3 className="text-2xl font-display font-bold text-white mb-1">New Service Ticket</h3>
             <p className="text-gray-400 text-sm">Initiate heavy-ops deployment request.</p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-opal-orange text-sm bg-opal-orange/10 px-3 py-1 rounded border border-opal-orange/20">
             ID: {ticketId}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 group">
              <label className="text-[10px] uppercase text-gray-500 font-bold tracking-wider group-focus-within:text-opal-orange transition-colors">Client Identifier</label>
              <input 
                required
                type="text" 
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-opal-orange focus:bg-opal-orange/5 transition-all"
                placeholder="FULL NAME"
              />
            </div>
            <div className="space-y-2 group">
              <label className="text-[10px] uppercase text-gray-500 font-bold tracking-wider group-focus-within:text-opal-orange transition-colors">Comm Link</label>
              <input 
                required
                type="tel" 
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-opal-orange focus:bg-opal-orange/5 transition-all"
                placeholder="PHONE NUMBER"
              />
            </div>
          </div>

          <div className="space-y-2 group">
             <label className="text-[10px] uppercase text-gray-500 font-bold tracking-wider group-focus-within:text-opal-orange transition-colors">Asset Location</label>
             <input 
                required
                type="text" 
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-opal-orange focus:bg-opal-orange/5 transition-all"
                placeholder="COORDINATES OR ADDRESS"
              />
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] uppercase text-gray-500 font-bold tracking-wider group-focus-within:text-opal-orange transition-colors">Operational Brief</label>
            <textarea 
               required
               rows={4}
               className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-opal-orange focus:bg-opal-orange/5 transition-all resize-none"
               placeholder="DESCRIBE REQUIRED PROTOCOLS..."
            ></textarea>
          </div>

          {/* Priority Toggle */}
          <div className="flex items-center space-x-4 py-2">
             <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Priority Level:</span>
             <label className="flex items-center space-x-2 cursor-pointer">
                <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-sm text-gray-400">Standard</span>
             </label>
             <label className="flex items-center space-x-2 cursor-pointer">
                <div className="w-4 h-4 rounded-full border border-opal-orange flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-opal-orange animate-pulse"></div>
                </div>
                <span className="text-sm text-opal-orange font-bold">Emergency</span>
             </label>
          </div>

          <button 
            type="submit" 
            disabled={status === 'SENDING'}
            className="w-full bg-opal-orange hover:bg-opal-orangeGlow disabled:bg-gray-700 text-white font-bold font-display py-4 rounded-xl transition-all transform hover:scale-[1.01] shadow-[0_0_20px_rgba(255,87,34,0.3)] flex items-center justify-center uppercase tracking-widest text-sm"
          >
            {status === 'SENDING' ? (
              <Loader2 className="animate-spin mr-2" size={18} />
            ) : (
              <Radio size={18} className="mr-2" />
            )}
            {status === 'SENDING' ? 'ENCRYPTING & TRANSMITTING...' : 'TRANSMIT DISPATCH REQUEST'}
          </button>
        </form>
      </div>
    </div>
  );
};
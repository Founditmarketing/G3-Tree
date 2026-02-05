import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  metric: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, metric }) => {
  return (
    <div className="group relative p-6 rounded-xl glass-panel hover:bg-white/5 transition-all duration-500 hover:border-opal-orange/30 overflow-hidden cursor-pointer">
      
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-opal-orange/0 via-opal-orange/0 to-opal-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/10 text-opal-orange group-hover:scale-110 transition-transform duration-300 shadow-lg">
            {icon}
          </div>
          <span className="text-xs font-mono text-opal-accent py-1 px-2 rounded-md bg-opal-accent/10 border border-opal-accent/20">
            {metric}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 font-display tracking-tight group-hover:text-opal-orange transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
          <span>Explore Protocols</span>
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

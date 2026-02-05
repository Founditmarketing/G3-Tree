import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, Activity, Trees, Phone, Home, MapPin, AlertCircle } from 'lucide-react';

interface NavBarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  stormMode: boolean;
  onToggleStormMode: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentView, onChangeView, stormMode, onToggleStormMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ view, label, icon: Icon }: { view: ViewState; label: string; icon: any }) => (
    <button
      onClick={() => {
        onChangeView(view);
        setIsOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-display tracking-wide
        ${currentView === view 
          ? 'bg-opal-orange text-white shadow-[0_0_15px_rgba(255,87,34,0.4)] border border-opal-orange' 
          : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className={`glass-panel rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl transition-all duration-500 ${stormMode ? 'shadow-red-900/50 border-red-500/30' : 'shadow-black/50'}`}>
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onChangeView(ViewState.HOME)}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,87,34,0.5)] transition-colors duration-500 ${stormMode ? 'bg-red-600' : 'bg-gradient-to-br from-opal-orange to-red-600'}`}>
              <Trees className="text-white" size={18} />
            </div>
            <span className="text-2xl font-bold font-display tracking-tighter text-white">
              G3<span className="text-opal-orange transition-colors duration-500">TREE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            <NavItem view={ViewState.HOME} label="Home" icon={Home} />
            <NavItem view={ViewState.SERVICES} label="Services" icon={Trees} />
            <NavItem view={ViewState.LOCATION} label="HQ / Map" icon={MapPin} />
            <NavItem view={ViewState.ANALYZER} label="AI Diagnostic" icon={Activity} />
            <NavItem view={ViewState.CONTACT} label="Contact" icon={Phone} />
          </div>

          <div className="flex items-center space-x-4">
            {/* Storm Mode Toggle */}
            <button 
              onClick={onToggleStormMode}
              className={`hidden md:flex items-center space-x-2 px-3 py-1.5 rounded border transition-all duration-300 text-xs font-bold uppercase tracking-wider
                ${stormMode 
                  ? 'bg-red-600 border-red-500 text-white animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.6)]' 
                  : 'bg-black/40 border-white/10 text-gray-500 hover:text-white hover:border-white/30'}`}
            >
              <AlertCircle size={14} />
              <span>{stormMode ? 'STORM OPS: ACTIVE' : 'STORM OPS: OFF'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="mt-2 glass-panel rounded-2xl p-4 md:hidden flex flex-col space-y-2 animate-in slide-in-from-top-4 fade-in duration-200">
             <NavItem view={ViewState.HOME} label="Home" icon={Home} />
            <NavItem view={ViewState.SERVICES} label="Services" icon={Trees} />
            <NavItem view={ViewState.LOCATION} label="HQ / Map" icon={MapPin} />
            <NavItem view={ViewState.ANALYZER} label="AI Diagnostic" icon={Activity} />
            <NavItem view={ViewState.CONTACT} label="Contact" icon={Phone} />
            <button 
              onClick={() => {
                onToggleStormMode();
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl transition-all font-bold uppercase tracking-wider mt-4
                ${stormMode ? 'bg-red-600 text-white' : 'bg-white/5 text-gray-400'}`}
            >
               <AlertCircle size={16} />
               <span>{stormMode ? 'DEACTIVATE STORM MODE' : 'ACTIVATE STORM MODE'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
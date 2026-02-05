import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { NavBar } from './components/NavBar';
import { ServiceCard } from './components/ServiceCard';
import { TreeAnalyzer } from './components/TreeAnalyzer';
import { StatsSection } from './components/StatsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ContactForm } from './components/ContactForm';
import { MissionLog } from './components/MissionLog';
import { FleetArsenal } from './components/FleetArsenal';
import { OperationsRadar } from './components/OperationsRadar';
import { NeuralBackground } from './components/NeuralBackground';
import { SystemTicker } from './components/SystemTicker';
import { BootSequence } from './components/BootSequence';
import { LocationHQ } from './components/LocationHQ';
import { TacticalResults } from './components/TacticalResults';
import { ArboristChat } from './components/ArboristChat';
import { Axe, ShieldAlert, Sprout, ClipboardCheck, ArrowDown, Trees, Wifi, Server, Zap, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [scrolled, setScrolled] = useState(0);
  const [booted, setBooted] = useState(false);
  const [stormMode, setStormMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Body class for global CSS variables
  useEffect(() => {
    if (stormMode) {
      document.body.classList.add('storm-mode');
    } else {
      document.body.classList.remove('storm-mode');
    }
  }, [stormMode]);

  const services = [
    {
      title: "Precision Pruning",
      description: "Structural enhancement using directional pruning to improve wind resistance and canopy light penetration.",
      icon: <Axe size={24} />,
      metric: "Growth +15%"
    },
    {
      title: "Hazard Removal",
      description: "Surgical removal of compromised specimens using crane-assisted dismantling to protect surrounding infrastructure.",
      icon: <ShieldAlert size={24} />,
      metric: "Safety 100%"
    },
    {
      title: "Plant Health Care",
      description: "Deep-root fertilization and systemic injections to combat regional pests and fungal pathogens.",
      icon: <Sprout size={24} />,
      metric: "Vitality Index"
    },
    {
      title: "Arborist Reports",
      description: "Data-backed written assessments for municipal permits, insurance claims, and property valuations.",
      icon: <ClipboardCheck size={24} />,
      metric: "Certified Data"
    }
  ];

  return (
    <>
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      
      <div className={`min-h-screen font-sans text-gray-200 selection:bg-opal-orange selection:text-white opal-gradient flex flex-col pb-8 transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <NavBar 
          currentView={view} 
          onChangeView={setView} 
          stormMode={stormMode}
          onToggleStormMode={() => setStormMode(!stormMode)}
        />
        <SystemTicker />

        {/* Floating Chat Widget */}
        <ArboristChat />

        <main className="pt-24 flex-grow relative z-10">
          
          {/* STORM MODE BANNER */}
          {stormMode && (
            <div className="fixed top-24 left-0 right-0 z-40 bg-red-600 text-white py-1 text-center font-bold font-mono tracking-widest text-xs animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.5)]">
               !!! EMERGENCY PROTOCOLS ENGAGED - PRIORITY DISPATCH ACTIVE !!!
            </div>
          )}

          {/* HERO SECTION - Only show on Home */}
          {view === ViewState.HOME && (
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
              
              {/* Dynamic Neural Background */}
              <NeuralBackground />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-0 pointer-events-none" />

              {/* Abstract Glow Effects */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-opal-orange/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none z-0" />
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0" />
              
              <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
                <div className="inline-block glass-panel px-4 py-1 rounded-full border border-white/10 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <span className={`flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase ${stormMode ? 'text-red-500' : 'text-opal-orange'}`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse ${stormMode ? 'bg-red-500' : 'bg-green-500'}`}></span>
                    {stormMode ? 'CRITICAL ALERT STATUS' : 'System Online v3.0'}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-tight text-glow">
                  {stormMode ? (
                    <>STORM RESPONSE <br/><span className="text-red-500">UNIT DEPLOYED</span></>
                  ) : (
                    <>PRECISION <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">IS OUR NATURE.</span></>
                  )}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                  {stormMode 
                    ? "Heavy operations fleet mobilized for emergency clearance. Hazardous removals and infrastructure protection are currently prioritized."
                    : "G3 Tree combines biological expertise with industrial precision. We provide data-driven tree care services for clients who demand excellence."
                  }
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                  {stormMode ? (
                    <button 
                      onClick={() => setView(ViewState.CONTACT)}
                      className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.6)] animate-pulse"
                    >
                      REQUEST EMERGENCY CREW
                    </button>
                  ) : (
                    <>
                      <button 
                        onClick={() => setView(ViewState.ANALYZER)}
                        className="px-8 py-4 bg-opal-orange text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
                      >
                        AI Tree Analysis
                      </button>
                      <button 
                        onClick={() => setView(ViewState.SERVICES)}
                        className="px-8 py-4 glass-panel border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                      >
                        View Services
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
                <ArrowDown size={24} />
              </div>
            </section>
          )}

          {/* DYNAMIC CONTENT AREA */}
          <div className="max-w-7xl mx-auto px-6">
            
            {/* STATS SECTION (COMMAND DECK) */}
            {(view === ViewState.HOME) && (
              <StatsSection />
            )}

            {/* PROCESS TIMELINE */}
            {(view === ViewState.HOME || view === ViewState.SERVICES) && (
              <ProcessTimeline />
            )}
            
            {/* TACTICAL RESULTS (New) - Only Home or Services */}
            {(view === ViewState.HOME || view === ViewState.SERVICES) && (
              <TacticalResults />
            )}

            {/* OPERATIONS RADAR */}
            {(view === ViewState.HOME || view === ViewState.SERVICES) && (
              <OperationsRadar />
            )}

            {/* FLEET ARSENAL */}
            {(view === ViewState.HOME || view === ViewState.SERVICES) && (
              <FleetArsenal />
            )}

            {/* SERVICES GRID */}
            {(view === ViewState.HOME || view === ViewState.SERVICES) && (
              <div className="py-24">
                {view === ViewState.SERVICES && (
                  <div className="mb-12">
                    <h2 className="text-4xl font-display font-bold text-white mb-4">Operational Directives</h2>
                    <div className="h-1 w-20 bg-opal-orange"></div>
                  </div>
                )}
                {view === ViewState.HOME && (
                  <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Core Protocols</h2>
                    <button onClick={() => setView(ViewState.SERVICES)} className="hidden md:block text-sm text-opal-orange hover:text-white transition-colors">View All Services →</button>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((s, i) => (
                    <ServiceCard key={i} {...s} />
                  ))}
                </div>
              </div>
            )}

            {/* ANALYZER VIEW */}
            {view === ViewState.ANALYZER && (
              <div className="py-12 animate-in fade-in duration-500">
                <TreeAnalyzer />
              </div>
            )}

            {/* LOCATION / HQ VIEW */}
            {view === ViewState.LOCATION && (
              <LocationHQ />
            )}

            {/* MISSION LOG */}
            {(view === ViewState.HOME) && (
              <MissionLog />
            )}

            {/* CONTACT VIEW */}
            {(view === ViewState.CONTACT || view === ViewState.HOME) && (
              <div className="py-24 scroll-mt-24" id="contact">
                {view === ViewState.CONTACT && (
                  <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Let's Talk Trees</h2>
                      <p className="text-gray-400">Professional assessments for residential and commercial assets.</p>
                  </div>
                )}
                {view === ViewState.HOME && (
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-white">Ready to Upgrade?</h2>
                  </div>
                )}
                <ContactForm />
              </div>
            )}

          </div>
        </main>

        {/* SYSTEM FOOTER */}
        <footer className="border-t border-white/5 bg-[#030303] py-8 mb-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 gap-4 md:gap-0">
              
              {/* Left: Brand & Copy */}
              <div className="flex items-center space-x-4">
                <span className="text-white font-bold">G3<span className="text-opal-orange">TREE</span></span>
                <span className="hidden md:inline text-gray-700">|</span>
                <span>© {new Date().getFullYear()} HEAVY OPS DIVISION</span>
              </div>

              {/* Center: System Status Indicators */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <Wifi size={14} className="text-green-500" />
                    <span>NETWORK: SECURE</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Server size={14} className="text-opal-accent" />
                    <span>DISPATCH: ONLINE</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Zap size={14} className="text-opal-orange" />
                    <span>GRID: STABLE</span>
                </div>
              </div>

              {/* Right: Connect Links */}
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
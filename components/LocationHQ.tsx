import React from 'react';
import { MapPin, Clock, Phone, Star, Navigation, Globe, Shield, ExternalLink, Calendar, Truck, Leaf } from 'lucide-react';

export const LocationHQ: React.FC = () => {
  // SEO: Structured Data for Google Bots
  const schema = {
    "@context": "https://schema.org",
    "@type": "TreeService", 
    "name": "G3 Tree",
    "image": "https://g3tree.com/logo.png", // Replace with real asset
    "url": "https://g3tree.com",
    "telephone": "+15551234567", // Replace with real phone
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Industrial Way", // Replace
      "addressLocality": "Metro City", // Replace
      "addressRegion": "ST", // Replace
      "postalCode": "12345", // Replace
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749, // Replace
      "longitude": -122.4194 // Replace
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    "priceRange": "$$$"
  };

  const serviceAreas = ["North Metro", "West Hills", "Industrial District", "The Highlands", "River Valley"];

  return (
    <div className="py-12 animate-in fade-in duration-500">
      {/* INJECTED JSON-LD FOR SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-opal-orange/10 border border-opal-orange/30 rounded-full px-4 py-1 mb-6">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-xs font-mono text-opal-orange tracking-widest uppercase">Verified Local Business Profile</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-opal-orange to-white">Center</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The central hub for G3's heavy iron fleet, wood recycling yard, and arborist command. Strategically positioned for rapid emergency deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           
           {/* LEFT: Contact Intel */}
           <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-opal-orange/30 transition-all">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MapPin size={64} />
                 </div>
                 <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                    <Navigation size={20} className="mr-2 text-opal-orange" /> Facility Location
                 </h3>
                 <div className="space-y-4 text-sm text-gray-300 font-mono">
                    <p className="border-l-2 border-white/10 pl-4">
                       100 Industrial Way,<br/>
                       Heavy Operations District,<br/>
                       Metro City, ST 12345
                    </p>
                    <button className="flex items-center space-x-2 text-opal-accent hover:text-white transition-colors uppercase tracking-wider text-xs font-bold">
                       <ExternalLink size={14} />
                       <span>Get Directions to Shop</span>
                    </button>
                 </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-opal-orange/30 transition-all">
                 <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                    <Clock size={20} className="mr-2 text-opal-orange" /> Dispatch Hours
                 </h3>
                 <ul className="space-y-2 text-sm text-gray-300 font-mono">
                    <li className="flex justify-between">
                       <span>OFFICE / YARD</span>
                       <span className="text-white">07:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                       <span>SATURDAY</span>
                       <span className="text-white">08:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between text-opal-orange font-bold">
                       <span>24/7 EMERGENCY</span>
                       <span>ON CALL</span>
                    </li>
                 </ul>
              </div>

              {/* Added: Facility Features to make it more "Tree Service" */}
               <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-opal-orange/30 transition-all">
                 <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                    <Truck size={20} className="mr-2 text-opal-orange" /> Depot Capabilities
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {['Crane Storage', 'Mulch Processing', 'Equipment Maintenance', 'Safety Training'].map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400">
                            {tag}
                        </span>
                    ))}
                 </div>
              </div>
           </div>

           {/* CENTER: The Map */}
           <div className="lg:col-span-2 glass-panel p-1 rounded-3xl border border-white/10 h-[600px] relative overflow-hidden group">
              {/* Map UI Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
                 <div className="text-[10px] font-mono text-opal-orange uppercase tracking-wider">Service Radius</div>
                 <div className="text-white font-bold">LIVE DISPATCH ZONES</div>
              </div>

              {/* Map Visuals */}
              <div className="w-full h-full bg-[#111] relative overflow-hidden rounded-[20px]">
                 {/* Grid Lines */}
                 <div className="absolute inset-0" style={{ 
                    backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                 }} />
                 
                 {/* Roads (Abstract) */}
                 <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-800 rotate-12 transform -translate-y-12"></div>
                 <div className="absolute top-0 left-1/2 h-full w-2 bg-gray-800 -rotate-6 transform translate-x-12"></div>
                 
                 {/* Service Area Circle */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-opal-orange/30 rounded-full bg-opal-orange/5 animate-pulse-slow"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-dashed border-white/10 rounded-full"></div>

                 {/* Pin */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-4 group-hover:-mt-6 transition-all duration-300">
                    <div className="w-12 h-12 text-opal-orange drop-shadow-[0_0_20px_rgba(255,87,34,0.6)] flex items-center justify-center">
                       <MapPin size={48} fill="currentColor" />
                    </div>
                 </div>
                 
                 {/* Floating Labels on Map */}
                 <div className="absolute top-[40%] left-[60%] bg-black/60 px-2 py-1 rounded border border-white/10 text-[10px] text-gray-300">North Metro Zone</div>
                 <div className="absolute bottom-[35%] left-[30%] bg-black/60 px-2 py-1 rounded border border-white/10 text-[10px] text-gray-300">West Hills</div>

                 {/* Interactive Prompt */}
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all pointer-events-none">
                     <div className="bg-black/80 backdrop-blur-md border border-opal-orange text-opal-orange px-6 py-3 rounded-full font-bold font-display tracking-widest uppercase shadow-[0_0_30px_rgba(255,87,34,0.3)] group-hover:scale-110 transition-transform">
                        Explore Coverage
                     </div>
                 </div>
              </div>
           </div>
        </div>

        {/* REPUTATION INTEL (Reviews) */}
        <div className="mb-16">
           <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
              <div>
                 <h3 className="text-3xl font-display font-bold text-white mb-2">Local Trust Rating</h3>
                 <p className="text-gray-400 text-sm">Feedback from homeowners and businesses in our service area.</p>
              </div>
              <div className="text-right hidden md:block">
                 <div className="text-4xl font-bold text-white">5.0</div>
                 <div className="flex text-opal-orange">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <div className="text-xs text-gray-500 font-mono mt-1">BASED ON 124 GOOGLE REVIEWS</div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                 { name: "Sarah J.", text: "G3 operated with surgical precision. The crane removal was incredible to watch. Zero damage to the lawn.", date: "2 weeks ago" },
                 { name: "Mike T.", text: "Data-driven approach to tree health? Sign me up. The report they generated was worth every penny.", date: "1 month ago" },
                 { name: "Estate Mgmt LLC", text: "We only trust G3 with our high-value properties. Their fleet is unmatched in the region.", date: "3 months ago" }
              ].map((review, i) => (
                 <div key={i} className="glass-panel p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-all">
                    <div className="flex text-opal-orange mb-3">
                       {[1,2,3,4,5].map(star => <Star key={star} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">"{review.text}"</p>
                    <div className="flex justify-between items-center border-t border-white/5 pt-3">
                       <span className="font-bold text-white text-sm">{review.name}</span>
                       <span className="text-xs text-gray-500 font-mono">{review.date}</span>
                    </div>
                 </div>
              ))}
           </div>
           
           <div className="mt-8 text-center">
              <button className="bg-white/5 border border-white/20 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold font-display transition-all uppercase tracking-wider text-sm">
                 Rate Us on Google
              </button>
           </div>
        </div>

        {/* SERVICE AREAS SEO */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center">
           <Globe size={32} className="text-opal-accent mx-auto mb-4" />
           <h3 className="text-2xl font-display font-bold text-white mb-6">Service Territories</h3>
           <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, i) => (
                 <span key={i} className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-gray-300 text-sm font-mono hover:text-opal-orange hover:border-opal-orange/50 transition-colors cursor-default">
                    {area}
                 </span>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
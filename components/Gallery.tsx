import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';

const galleryImages = [
  { src: '/gallery-1.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-2.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-3.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-4.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-5.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-6.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-7.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-8.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-9.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-10.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-11.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' },
  { src: '/gallery-12.jpg', title: 'Operations Gallery', category: 'G3 Tree Care' }
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-24 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-opal-orange/10 border border-opal-orange/30 rounded-full px-4 py-1 mb-6">
             <Camera size={14} className="text-opal-orange" />
             <span className="text-xs font-mono text-opal-orange tracking-widest uppercase">Visual Data Logs</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-opal-orange to-white">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visual documentation of recent G3 Tree deployments, showcasing advanced rigging, precision cutting, and low-impact extraction techniques.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className="group relative glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-opal-orange/40 transition-all duration-500 aspect-square md:aspect-[4/5] shadow-lg hover:shadow-[0_0_30px_rgba(255,87,34,0.15)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative flex-grow overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover filter brightness-90 contrast-125 saturate-50 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                {/* Hover UI - Click to Enlarge */}
                <div 
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 cursor-pointer"
                  onClick={() => setSelectedImage(img.src)}
                >
                   <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 text-white hover:bg-opal-orange hover:border-opal-orange transition-colors transform scale-75 group-hover:scale-100 duration-300">
                      <Maximize2 size={24} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
           <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
              // NO ASSETS WERE DAMAGED DURING THESE OPERATIONS //
           </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/20 p-2 rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery view" 
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-auto"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

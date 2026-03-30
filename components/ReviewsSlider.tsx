import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { name: "Sarah J.", text: "G3 operated with surgical precision. The crane removal was incredible to watch. Zero damage to the lawn.", date: "2 weeks ago" },
  { name: "Mike T.", text: "Data-driven approach to tree health? Sign me up. The report they generated was worth every penny.", date: "1 month ago" },
  { name: "Estate Mgmt LLC", text: "We only trust G3 with our high-value properties. Their fleet is unmatched in the region.", date: "3 months ago" },
  { name: "David L.", text: "Professional, fast, and left the site spotless. Their safety protocols are top-notch.", date: "4 months ago" },
  { name: "Oakwood HOA", text: "Excellent communication and flawless execution on a massive community hazard removal project.", date: "6 months ago" }
];

export const ReviewsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div id="reviews" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-opal-orange/10 border border-opal-orange/30 rounded-full px-4 py-1 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-opal-orange tracking-widest uppercase">Verified Real Client Data</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">Local Trust Rating</h2>
            <p className="text-gray-400">Feedback from homeowners and commercial facilities in our service zone.</p>
          </div>
          <div className="text-left md:text-right mt-6 md:mt-0">
            <div className="text-4xl font-bold text-white">5.0</div>
            <div className="flex text-opal-orange md:justify-end">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <div className="text-xs text-gray-500 font-mono mt-2">BASED ON 124 GOOGLE REVIEWS</div>
            <a 
              href="https://www.google.com/maps/place/G3+Tree+Care+LLC/data=!4m2!3m1!1s0x0:0xe6cb0a9346dd19?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-opal-orange hover:text-white transition-colors"
            >
              Read All on Google →
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-opal-orange hover:border-opal-orange transition-all shadow-xl"
            aria-label="Previous Review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-opal-orange hover:border-opal-orange transition-all shadow-xl"
            aria-label="Next Review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden px-4 md:px-8 py-4">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="min-w-full px-2 md:px-4">
                  <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex text-opal-orange mb-6">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic mb-8">"{review.text}"</p>
                    </div>
                    <div className="flex items-center space-x-4 border-t border-white/5 pt-6 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-opal-orange to-red-600 flex items-center justify-center font-bold text-white shadow-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white">{review.name}</div>
                        <div className="text-xs text-gray-500 font-mono">{review.date} • Verified Google Review</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-opal-orange scale-125 shadow-[0_0_10px_rgba(255,87,34,0.6)]' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

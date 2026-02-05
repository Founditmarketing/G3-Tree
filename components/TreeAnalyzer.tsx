import React, { useState, useRef } from 'react';
import { analyzeTreeImage } from '../services/geminiService';
import { AnalysisResult } from '../types';
import { Upload, ScanLine, AlertTriangle, CheckCircle2, Loader2, X, Microscope, ArrowRight, Download, FileText } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export const TreeAnalyzer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setAnalyzing(true);
    
    try {
      // Extract correct mime type and data from the Data URL
      // Format: data:image/jpeg;base64,....
      const matches = image.match(/^data:(.+);base64,(.+)$/);
      
      if (matches && matches.length === 3) {
        const mimeType = matches[1];
        const base64Data = matches[2];
        const data = await analyzeTreeImage(base64Data, mimeType);
        setResult(data);
      } else {
        console.error("Invalid image format");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setAnalyzing(false);
    }
  };

  const downloadReport = () => {
    if (!result) return;
    
    const reportContent = `
G3 TREE | OFFICIAL DIAGNOSTIC REPORT
------------------------------------
DATE: ${new Date().toLocaleDateString()}
TIME: ${new Date().toLocaleTimeString()}
------------------------------------

SPECIMEN ANALYSIS
Species: ${result.species}
Health Score: ${result.healthScore}/100
Status: ${result.estimatedUrgency}

ISSUES DETECTED:
${result.issues.map(i => `- ${i}`).join('\n')}

TREATMENT PROTOCOLS:
${result.recommendations.map(r => `- ${r}`).join('\n')}

------------------------------------
CONFIDENTIAL - G3 HEAVY OPS DIVISION
`;
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `G3-REPORT-${result.species.replace(/\s+/g, '-')}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Wait for download to start before revoking
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  };

  const clear = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">AI Diagnostic</span> Engine
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Upload site imagery. Our computer vision model segments canopy data to evaluate structural integrity and biological markers.
        </p>
      </div>

      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Upload Area */}
        {!image ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-white/20 rounded-2xl h-80 flex flex-col items-center justify-center cursor-pointer hover:border-opal-orange/50 hover:bg-white/5 transition-all group relative overflow-hidden"
          >
             {/* Corner Accents */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-opal-orange/50" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-opal-orange/50" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-opal-orange/50" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-opal-orange/50" />

            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <Upload className="text-gray-400 group-hover:text-opal-orange" size={32} />
            </div>
            <p className="text-xl font-medium text-white font-display tracking-tight">Upload Specimen Imagery</p>
            <p className="text-sm text-gray-500 mt-2 font-mono">SUPPORTED FORMATS: JPEG, PNG, WEBP</p>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Image Preview & Scanner */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black min-h-[400px] lg:h-auto group">
              <img src={image} alt="Tree" className="w-full h-full object-cover opacity-80" />
              
              <button 
                onClick={clear}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white rounded-full hover:bg-red-500/80 transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>
              
              {!result && !analyzing && (
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                   <button 
                    onClick={handleAnalyze}
                    className="flex items-center space-x-3 bg-opal-orange text-white px-8 py-4 rounded-xl font-bold font-display tracking-wide shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_50px_rgba(255,87,34,0.6)] hover:scale-105 transition-all border border-white/20"
                   >
                     <ScanLine size={24} />
                     <span>INITIATE SCAN</span>
                   </button>
                 </div>
              )}

              {analyzing && (
                <div className="absolute inset-0 z-10">
                   {/* Scanning Laser */}
                  <div className="absolute inset-x-0 h-1 bg-opal-orange shadow-[0_0_25px_#FF5722] animate-scan opacity-80" />
                  
                  {/* Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px]">
                    <div className="text-opal-orange font-mono text-xl font-bold tracking-[0.2em] animate-pulse mb-2">SCANNING...</div>
                    <div className="text-xs text-opal-accent font-mono">CALCULATING BIOMASS INTEGRITY</div>
                  </div>
                </div>
              )}
            </div>

            {/* Results HUD */}
            {result && (
              <div className="flex flex-col justify-between h-full animate-in slide-in-from-right fade-in duration-500">
                
                {/* HUD Header */}
                <div className="mb-6 border-b border-white/10 pb-4 flex justify-between items-end">
                   <div>
                      <p className="text-[10px] text-opal-accent font-mono uppercase tracking-widest mb-1">Target Identified</p>
                      <h3 className="text-3xl font-display font-bold text-white leading-none">{result.species}</h3>
                   </div>
                   <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                      CONFIDENCE: 98.4%
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Health Gauge */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 relative overflow-hidden">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-2">Vitality Score</p>
                    <div className="flex items-end space-x-2">
                       <span className={`text-4xl font-display font-bold ${result.healthScore > 70 ? 'text-green-400' : result.healthScore > 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                         {result.healthScore}
                       </span>
                       <span className="text-sm text-gray-500 mb-1.5">/ 100</span>
                    </div>
                    {/* Tiny visual bar */}
                    <div className="w-full h-1 bg-gray-800 mt-2 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-opal-orange to-opal-accent" style={{width: `${result.healthScore}%`}}></div>
                    </div>
                  </div>

                  {/* Urgency Indicator */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                     <p className="text-xs text-gray-500 font-bold uppercase">Intervention</p>
                     <div className={`text-xl font-bold font-display uppercase tracking-wider ${result.estimatedUrgency === 'Critical' ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                        {result.estimatedUrgency}
                     </div>
                  </div>
                </div>

                {/* Data Lists */}
                <div className="space-y-4 mb-6 flex-grow">
                   {/* Issues */}
                   {result.issues.length > 0 && (
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                      <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center">
                        <AlertTriangle size={12} className="mr-2" />
                        Pathology Detected
                      </p>
                      <div className="flex flex-wrap gap-2">
                         {result.issues.map((issue, i) => (
                           <span key={i} className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded border border-red-500/10">
                             {issue}
                           </span>
                         ))}
                      </div>
                    </div>
                   )}

                   {/* Recs */}
                   <div>
                      <p className="text-xs font-bold text-opal-accent uppercase tracking-wider mb-3 flex items-center">
                        <Microscope size={12} className="mr-2" />
                        Treatment Protocols
                      </p>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-400">
                             <span className="mt-1.5 mr-2 w-1 h-1 rounded-full bg-opal-orange flex-shrink-0"></span>
                             {rec}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={downloadReport}
                    className="flex-1 bg-white/5 border border-white/20 text-white font-bold font-display py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center text-xs tracking-widest uppercase"
                  >
                    <FileText size={16} className="mr-2" />
                    Download Intel
                  </button>
                  <button className="flex-[2] group bg-white text-black font-bold font-display py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center">
                    <span>DEPLOY CREW</span>
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
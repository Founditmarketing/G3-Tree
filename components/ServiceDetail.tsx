import React, { useState } from 'react';
import { ViewState, ServiceContent } from '../types';
import { ChevronDown, ChevronUp, ArrowRight, Shield, AlertTriangle, Zap } from 'lucide-react';

interface ServiceDetailProps {
    content: ServiceContent;
    onNavigate: (view: ViewState) => void;
    onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ content, onNavigate, onBack }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-24 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Back Navigation */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center space-x-2 text-gray-400 hover:text-opal-orange transition-colors font-mono text-sm uppercase tracking-wider"
                >
                    <span>← Operations Deck</span>
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Main Intelligence Column (Left) */}
                <div className="lg:col-span-8 space-y-12">

                    {/* Hero Header */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-none">
                            {content.title}
                        </h1>
                        <p className="text-xl text-opal-orange font-mono border-l-2 border-opal-orange pl-4">
                            {content.subtitle}
                        </p>
                    </div>

                    {/* Core Intelligence (SEO Text) */}
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {/* We render safe HTML or strict text here. For now, strict text with line breaks */}
                        {content.introText.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="leading-relaxed mb-6">{paragraph}</p>
                        ))}
                    </div>

                    {/* Operational Specs (Grid) */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                            <Zap size={24} className="text-opal-orange" />
                            Protocol Specifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {content.specs.map((spec, idx) => (
                                <div key={idx} className="border-b border-white/5 pb-2">
                                    <dt className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{spec.label}</dt>
                                    <dd className="text-lg font-medium text-white">{spec.value}</dd>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* System Queries (FAQs) */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-2">
                            <Shield size={24} className="text-opal-accent" />
                            System Queries & Clarifications
                        </h3>
                        <div className="space-y-4">
                            {content.faqs.map((faq, idx) => (
                                <div key={idx} className="glass-panel border border-white/5 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-bold text-gray-200">{faq.question}</span>
                                        {openFaq === idx ? <ChevronUp className="text-opal-orange" /> : <ChevronDown className="text-gray-500" />}
                                    </button>
                                    {openFaq === idx && (
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 bg-black/20">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar / Actions (Right) */}
                <div className="lg:col-span-4 space-y-8">

                    {/* Action Card */}
                    <div className="glass-panel p-8 rounded-2xl border border-opal-orange/30 sticky top-32">
                        <h3 className="text-xl font-bold text-white mb-2">Deploy Unit</h3>
                        <p className="text-gray-400 mb-6 text-sm">Initiate a request for this specific operational protocol.</p>

                        <button
                            onClick={() => onNavigate(ViewState.CONTACT)}
                            className="w-full py-4 bg-opal-orange text-white rounded-lg font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,87,34,0.3)] flex justify-center items-center gap-2"
                        >
                            <span>Initialize Request</span>
                            <ArrowRight size={18} />
                        </button>

                        <div className="mt-6 pt-6 border-t border-white/10 text-xs font-mono text-gray-500 space-y-2">
                            <div className="flex justify-between">
                                <span>AVAILABILITY:</span>
                                <span className="text-green-500">IMMEDIATE</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ZONE:</span>
                                <span className="text-white">REGIONAL HQ</span>
                            </div>
                        </div>
                    </div>

                    {/* Alert / Notice */}
                    <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl flex items-start space-x-4">
                        <AlertTriangle className="text-red-500 shrink-0" size={24} />
                        <div>
                            <h4 className="text-red-400 font-bold text-sm mb-1">Safety Protocol</h4>
                            <p className="text-xs text-red-300/70 leading-relaxed">
                                All operations strictly adhere to ANSI Z133 safety standards. Perimeter clearance is mandatory during execution.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

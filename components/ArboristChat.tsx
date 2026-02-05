import React, { useState, useRef, useEffect } from 'react';
import { chatWithArborist } from '../services/geminiService';
import { MessageSquare, Send, X, Bot, User, Loader2, ChevronDown } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export const ArboristChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "G3 Field Commander online. How can I assist with your vegetation management requirements today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    // Prepare history for API (excluding the very last user message which is sent as prompt)
    const history = messages.map(m => ({ role: m.role, content: m.content }));

    const response = await chatWithArborist(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#0a0a0a] border border-opal-orange/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 relative">
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20 z-10" />

          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-4 border-b border-white/10 flex justify-between items-center relative z-20">
             <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-opal-orange/10 border border-opal-orange flex items-center justify-center">
                   <Bot className="text-opal-orange" size={24} />
                </div>
                <div>
                   <h3 className="text-white font-display font-bold">Field Commander</h3>
                   <div className="flex items-center text-[10px] text-green-500 font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-2" />
                      ONLINE
                   </div>
                </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <ChevronDown size={20} />
             </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-black/50 relative z-20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 {msg.role === 'model' && (
                    <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                       <Bot size={14} className="text-gray-400" />
                    </div>
                 )}
                 <div className={`max-w-[80%] rounded-xl p-3 text-sm font-sans leading-relaxed
                   ${msg.role === 'user' 
                     ? 'bg-opal-orange text-white rounded-tr-none' 
                     : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'}`}
                 >
                    {msg.content}
                 </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                  <div className="bg-white/5 rounded-xl p-3 flex items-center space-x-2">
                     <Loader2 size={16} className="animate-spin text-opal-orange" />
                     <span className="text-xs text-gray-500 font-mono">Thinking...</span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-black border-t border-white/10 relative z-20">
             <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about tree removal, pruning..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-white text-sm focus:outline-none focus:border-opal-orange transition-colors"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1 top-1 p-2 bg-opal-orange text-white rounded-full hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                   <Send size={16} />
                </button>
             </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-opal-orange hover:bg-white hover:text-black text-white p-4 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.5)] transition-all duration-300 group relative"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></span>
        )}
      </button>
    </div>
  );
};
import React, { ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-24 h-24 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 animate-pulse">
            <AlertTriangle className="text-red-500" size={48} />
          </div>
          <h1 className="text-3xl font-display font-bold mb-2">SYSTEM CRITICAL FAILURE</h1>
          <p className="text-gray-400 max-w-md mb-8 font-mono text-sm">
            G3_KERNEL_PANIC: The application encountered an unexpected anomaly. 
            Execution halted to preserve data integrity.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold font-display hover:bg-gray-200 transition-colors"
          >
            <RefreshCw size={18} />
            <span>REBOOT SYSTEM</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

type ToastType = 'success' | 'error';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-10 right-10 z-[110] flex flex-col gap-4">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`min-w-[320px] p-6 rounded-[2rem] shadow-3xl border flex items-center justify-between gap-6 backdrop-blur-xl ${
                toast.type === 'success' 
                  ? 'bg-emerald-600/90 border-emerald-500/30 text-white' 
                  : 'bg-red-600/90 border-red-500/30 text-white'
              }`}
            >
              <div className="flex items-center gap-4">
                {toast.type === 'success' ? (
                  <CheckCircle2 size={24} className="shrink-0" />
                ) : (
                  <AlertCircle size={24} className="shrink-0" />
                )}
                <p className="text-[11px] font-black uppercase tracking-[0.2em] italic">{toast.message}</p>
              </div>
              <button onClick={() => removeToast(toast.id)} className="hover:rotate-90 transition-transform p-1">
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

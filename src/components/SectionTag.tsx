import React from 'react';
import { Sparkles } from 'lucide-react';

export const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 bg-emerald-600/10 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
    <Sparkles size={14} />
    {children}
  </div>
);

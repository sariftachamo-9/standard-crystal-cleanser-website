import { motion } from 'motion/react';
import { Download as DownloadIcon, FileText, CheckCircle2 } from 'lucide-react';
import { SectionTag } from '../components/SectionTag';

const DOWNLOADS = [
  { title: "Crystal Cleanser Corporate Profile", size: "4.2 MB", type: "PDF" },
  { title: "Pointer Product Catalog 2024", size: "12.8 MB", type: "PDF" },
  { title: "Material Safety Data Sheets (MSDS)", size: "8.5 MB", type: "ZIP" },
  { title: "Industrial Cleaning Protocol Manual", size: "2.1 MB", type: "PDF" },
];

export default function Download() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <SectionTag>Resources</SectionTag>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-[8rem] font-black italic tracking-tighter uppercase leading-[0.8] text-neutral-900">
              Download <br /> <span className="text-emerald-600">Central.</span>
            </h2>
            <div className="max-w-md">
                <p className="text-xl font-bold italic text-neutral-500 leading-relaxed mb-10">
                    Access our full documentation, product specifications, and hygiene guides in one place.
                </p>
                <div className="flex gap-4">
                    <div className="bg-neutral-100 px-6 py-3 rounded-full flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Regularly Updated</span>
                    </div>
                </div>
            </div>
          </div>

          <div className="grid gap-6">
            {DOWNLOADS.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group flex flex-col md:flex-row items-center justify-between p-10 bg-neutral-50 rounded-[3rem] border border-transparent hover:border-emerald-600 hover:bg-white hover:shadow-4xl transition-all duration-500"
              >
                <div className="flex items-center gap-10 mb-8 md:mb-0">
                    <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
                        <FileText size={32} className="text-emerald-600" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter text-neutral-900 mb-2">{item.title}</h4>
                        <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-neutral-400">
                            <span>{item.type}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                        </div>
                    </div>
                </div>
                <button className="flex items-center gap-4 bg-neutral-900 text-white px-10 py-5 rounded-[1.75rem] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-emerald-600 transition-all hover:scale-105">
                    Download File <DownloadIcon size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-32 bg-emerald-600 font-sans">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
              <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-10">Request Custom Specs</h3>
              <p className="text-xl font-bold italic mb-16 max-w-2xl mx-auto opacity-90">Need specific formulation data or compliance certificates? Contact our technical team for personalized documentation.</p>
              <button className="bg-white text-emerald-600 px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white transition-all shadow-4xl">Get Technical Support</button>
          </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
    ChevronDown, 
    Search, 
    MessageCircle, 
    ArrowRight, 
    ShieldCheck, 
    Globe, 
    Zap, 
    Layers, 
    Users 
} from 'lucide-react';
import { SectionTag } from '../components/SectionTag';
import { FAQS } from '../constants';
import { Link } from 'react-router-dom';

const AccordionItem = ({ faq, isOpen, toggle }: { faq: any; isOpen: boolean; toggle: () => void; key?: string }) => {
    const getIcon = (category: string) => {
        switch (category) {
            case 'Safety': return <ShieldCheck size={20} className="text-emerald-600" />;
            case 'Company': return <Globe size={20} className="text-emerald-600" />;
            case 'Technology': return <Zap size={20} className="text-emerald-600" />;
            case 'Products': return <Layers size={20} className="text-emerald-600" />;
            default: return <Users size={20} className="text-emerald-600" />;
        }
    };

    return (
        <motion.div 
            layout
            className={`group bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                isOpen 
                    ? 'border-emerald-600 shadow-4xl shadow-emerald-200/50' 
                    : 'border-neutral-100 shadow-sm hover:border-emerald-100 hover:shadow-xl'
            }`}
        >
            <button 
                onClick={toggle}
                className="w-full p-8 md:p-10 flex items-center justify-between text-left gap-6 group"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isOpen ? 'bg-emerald-600 text-white' : 'bg-neutral-50 text-emerald-600 group-hover:scale-110'
                    }`}>
                        {getIcon(faq.category)}
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600/50 mb-2 block italic">{faq.category}</span>
                        <h4 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase text-neutral-900 leading-tight">
                            {faq.q}
                        </h4>
                    </div>
                </div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                    isOpen ? 'bg-neutral-900 text-white rotate-180' : 'bg-neutral-50 text-neutral-400 group-hover:bg-neutral-100'
                }`}>
                    <ChevronDown size={18} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-8 md:px-10 pb-10 pt-4 max-w-3xl">
                            <div className="h-px bg-neutral-50 mb-8" />
                            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-bold italic opacity-90 first-letter:text-emerald-600 first-letter:text-5xl first-letter:font-black pr-8">
                                {faq.a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    
    const categories = ['All', ...new Set(FAQS.map(f => f.category))];
    
    const filteredFaqs = FAQS.filter(faq => {
        const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.a.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
      <div className="pt-24 min-h-screen">
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-left">
            <div className="text-center mb-24">
                <SectionTag>Support Center</SectionTag>
                <h2 className="text-6xl md:text-[8rem] font-black italic tracking-tighter uppercase leading-[0.8] text-neutral-900 mb-12">
                    Common <br /> <span className="text-emerald-600">Questions.</span>
                </h2>
                <p className="text-xl text-neutral-500 font-bold italic max-w-2xl mx-auto leading-relaxed">
                    Everything you need to know about Pointer solutions, Japanese technology, and our commitment to Nepal's environment.
                </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="mb-20 space-y-10">
                <div className="relative group max-w-3xl mx-auto">
                    <div className="absolute inset-0 bg-emerald-600/5 blur-3xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                    <div className="relative">
                        <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-emerald-600 transition-colors" size={24} />
                        <input 
                            type="text" 
                            placeholder="Type reaching to specific answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-[2.5rem] py-8 pl-20 pr-10 outline-none focus:border-emerald-600 focus:bg-white focus:shadow-2xl transition-all text-xl font-bold italic"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2 ${activeCategory === cat ? 'bg-neutral-900 text-white border-neutral-900 shadow-xl' : 'bg-white text-neutral-500 border-neutral-100 hover:border-neutral-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, i) => (
                        <AccordionItem 
                            key={faq.q} 
                            faq={faq} 
                            isOpen={openIndex === i}
                            toggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24 bg-neutral-50 rounded-[4rem] border-2 border-dashed border-neutral-200"
                    >
                        <div className="bg-neutral-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                             <Search size={32} className="text-neutral-300" />
                        </div>
                        <p className="text-2xl font-black italic text-neutral-400 uppercase tracking-tighter">No matching results found</p>
                        <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-8 bg-neutral-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
                            Reset Search Filters
                        </button>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Section */}
            <div className="mt-32 p-16 md:p-24 rounded-[5rem] bg-neutral-900 text-white relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 -skew-x-12 translate-x-24" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="max-w-xl">
                        <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">Still Searching <br /> for <span className="text-emerald-500">Purity?</span></h3>
                        <p className="text-neutral-400 font-bold italic text-lg leading-relaxed">Our technical team is ready to provide clinical data sheets or deployment protocol guides for your facility requirements.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                        <Link to="/contact" className="bg-emerald-600 text-white px-14 py-8 rounded-[2rem] font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 hover:bg-white hover:text-emerald-950 transition-all hover:-translate-y-2 shadow-6xl shadow-emerald-900/30">
                            Support Line <MessageCircle size={22} />
                        </Link>
                        <Link to="/download" className="bg-white/5 backdrop-blur-3xl border border-white/10 text-white px-14 py-8 rounded-[2rem] font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 hover:bg-white hover:text-neutral-950 transition-all shadow-xl">
                            Docs Center <ArrowRight size={22} />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    );
}

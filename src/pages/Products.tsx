import { useState, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Search, X, Info } from 'lucide-react';
import { SectionTag } from '../components/SectionTag';
import { PRODUCTS, Product } from '../constants';
import { ThemeContext } from '../App';

const ProductModal = ({ product, onClose }: { product: Product, onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white dark:bg-neutral-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-6xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-8 right-8 p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-emerald-600 transition-colors z-10">
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16">
          <div className="aspect-square bg-neutral-50 dark:bg-neutral-800 rounded-[2.5rem] p-12 flex items-center justify-center">
            <img src={product.img} alt={product.title} className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">{product.category}</span>
              <div className="w-1 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
              <span className="text-[10px] font-black bg-neutral-900 dark:bg-emerald-600 text-white px-3 py-1 rounded-full tracking-widest uppercase">{product.standard}</span>
            </div>
            <h3 className="text-4xl font-black italic tracking-tighter uppercase mb-6 dark:text-white leading-none">{product.title}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 font-bold italic mb-10 leading-relaxed">{product.desc}</p>
            
            <div className="space-y-8">
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-900 dark:text-white mb-4 border-b border-neutral-100 dark:border-neutral-800 pb-2 w-fit">Scientific Formulation</h5>
                <p className="text-xs font-bold italic text-neutral-500 dark:text-neutral-400 leading-relaxed">{product.ingredients}</p>
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4 border-b border-emerald-100 dark:border-emerald-900/30 pb-2 w-fit">Safety & Environmental Profile</h5>
                <p className="text-xs font-bold italic text-emerald-700/60 dark:text-emerald-500/60 leading-relaxed">{product.safety}</p>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center justify-between pt-8 border-t border-neutral-100 dark:border-neutral-800">
                <button className="bg-emerald-600 text-white px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.25em] hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-200/20">
                  Request Sample
                </button>
                <div className="flex gap-2">
                  {product.packaging.map(p => (
                    <span key={p} className="text-[9px] font-black bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 px-3 py-1 rounded-lg uppercase">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Products() {
  const themeContext = useContext(ThemeContext);
  const darkMode = themeContext?.darkMode || false;

  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['All', 'Household', 'Professional', 'Institutional', 'Automotive', 'Premium'];
  
  const filtered = useMemo(() => {
    let result = activeTab === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeTab);
    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [activeTab, searchQuery]);

  return (
    <div className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-12 mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div>
                <SectionTag>Lineup Gallery</SectionTag>
                <h2 className={`text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  Pointer <br /> <span className="text-emerald-600">Assets.</span>
                </h2>
              </div>
              <div className="w-full md:max-w-md relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
                <input 
                  type="text"
                  placeholder="Search Pointer solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full py-6 pl-16 pr-8 rounded-3xl border-2 transition-all outline-none font-bold italic tracking-tight ${darkMode ? 'bg-neutral-900 border-neutral-800 text-white focus:border-emerald-600 focus:bg-neutral-800' : 'bg-neutral-50 border-neutral-100 text-neutral-900 focus:border-emerald-600 focus:bg-white'}`}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all border ${activeTab === cat ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xl shadow-emerald-200/20' : (darkMode ? 'bg-neutral-900 text-neutral-500 border-neutral-800 hover:border-neutral-700' : 'bg-white text-neutral-400 border-neutral-200 hover:border-neutral-500')}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <AnimatePresence mode='popLayout'>
              {filtered.map((product) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={product.title}
                  className={`group rounded-[4rem] p-8 md:p-12 shadow-sm hover:shadow-5xl transition-all border flex flex-col md:flex-row gap-12 lg:gap-20 relative overflow-hidden ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-100'}`}
                >
                  {/* Image Container */}
                  <div className={`w-full md:w-1/3 lg:w-1/4 aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden relative shrink-0 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-50/50'}`}>
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000 p-10" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                      {product.tags.map(t => (
                        <span key={t} className="glass px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-emerald-950 shadow-sm">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow py-4">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 italic">{product.category}</span>
                        <div className={`w-1 h-1 rounded-full ${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase ${darkMode ? 'bg-emerald-600 text-white' : 'bg-neutral-900 text-white'}`}>{product.standard}</span>
                      </div>
                    </div>

                    <h4 className={`text-4xl md:text-5xl font-black mb-6 italic tracking-tighter leading-none uppercase group-hover:text-emerald-600 transition-colors ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{product.title}</h4>
                    <p className="text-lg text-neutral-400 font-bold italic leading-relaxed mb-10 max-w-2xl opacity-90">{product.desc}</p>
                    
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 border-t mb-12 ${darkMode ? 'border-neutral-800' : 'border-neutral-50'}`}>
                      <div>
                        <h5 className={`text-[10px] font-black uppercase tracking-widest mb-3 border-b pb-2 w-fit ${darkMode ? 'text-white border-neutral-800' : 'text-neutral-900 border-neutral-100'}`}>Key Ingredients</h5>
                        <p className="text-xs font-bold italic text-neutral-500 leading-relaxed">{product.ingredients}</p>
                      </div>
                      <div>
                        <h5 className={`text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-3 border-b pb-2 w-fit ${darkMode ? 'border-emerald-900/30' : 'border-emerald-100'}`}>Safety Profile</h5>
                        <p className={`text-xs font-bold italic leading-relaxed ${darkMode ? 'text-emerald-500/60' : 'text-emerald-700/60'}`}>{product.safety}</p>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 border-b border-neutral-100 dark:border-neutral-800 pb-2 w-fit">Packaging Options</h5>
                        <div className="flex flex-wrap gap-2">
                          {product.packaging.map(p => (
                            <span key={p} className={`text-[9px] font-black px-3 py-1 rounded-lg uppercase ${darkMode ? 'bg-neutral-800 text-neutral-500' : 'bg-neutral-100 text-neutral-500'}`}>{p}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 border-b border-neutral-100 dark:border-neutral-800 pb-2 w-fit">Primary Sectors</h5>
                        <div className="flex flex-wrap gap-2">
                          {product.usage.map(u => (
                            <span key={u} className={`text-[9px] font-black px-3 py-1 rounded-lg uppercase ${darkMode ? 'bg-emerald-950 text-emerald-500' : 'bg-emerald-50 text-emerald-600'}`}>{u}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`mt-auto pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-8 ${darkMode ? 'border-neutral-800' : 'border-neutral-50'}`}>
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 hover:text-emerald-500 transition-all flex items-center gap-4 group/btn"
                      >
                        View Full Specifications 
                        <div className="w-10 h-10 rounded-full border-2 border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center group-hover/btn:bg-emerald-600 group-hover/btn:border-emerald-600 group-hover/btn:text-white transition-all">
                          <Info size={18} />
                        </div>
                      </button>
                      <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-neutral-900 dark:bg-emerald-600 text-white px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.25em] hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all shadow-2xl hover:shadow-emerald-200/20">
                        <ShoppingBag size={20} />
                        <span>Add to Batch</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="py-40 text-center">
                <p className="text-4xl font-black italic tracking-tighter text-neutral-300 dark:text-neutral-700 uppercase">No Solutions Found</p>
                <button onClick={() => {setSearchQuery(''); setActiveTab('All');}} className="mt-8 text-emerald-600 font-black uppercase tracking-widest text-[10px] hover:underline">Reset Filters</button>
              </div>
            )}
          </div>
          
          <div className={`mt-20 glass rounded-[4rem] p-12 md:p-24 text-center border ${darkMode ? 'border-emerald-500/10' : 'border-emerald-100/30'}`}>
              <h3 className={`text-4xl font-black italic uppercase tracking-tighter mb-6 underline decoration-emerald-500/20 underline-offset-8 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Scale For Industry</h3>
              <p className="text-xl text-neutral-500 italic font-bold mb-16 max-w-2xl mx-auto">Providing 500ml Retail sprays, 5L Institutional units, and 50L Industrial drums for hospitals, hotels, and schools.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                  {['Retail (500ml)', 'Bulk (5L)', 'Professional (50L)', 'Custom Bulk'].map(size => (
                      <div key={size} className="flex flex-col items-center gap-6 group">
                          <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center border transition-all duration-500 ${darkMode ? 'bg-neutral-900 border-neutral-800 text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white' : 'bg-white border-neutral-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white shadow-xl'}`}>
                              <ShoppingBag size={40} />
                          </div>
                          <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${darkMode ? 'text-neutral-400' : 'text-neutral-800'}`}>{size}</span>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </AnimatePresence>
    </div>
  );
}

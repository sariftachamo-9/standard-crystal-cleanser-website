import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, ArrowRight, Calendar, User, CheckCircle2 } from 'lucide-react';
import { SectionTag } from '../components/SectionTag';
import { ThemeContext } from '../App';

import SafeHomePromo from '../../news and publication/1_Pointer Animated Safe Home Usage Promo.mp4';
import ProductLineupIntro from '../../news and publication/2_Pointer Product Lineup Intro.mp4';
import PromoIntro from '../../news and publication/3_Pointer Animated Promo Intro.mp4';
import ChimneyPromo from '../../news and publication/4_Pointer Chimney Cleaner Promo.mp4';
import ToiletPromo from '../../news and publication/5_Pointer Toilet Cleaner Promo.mp4';
import MascotMotto from '../../news and publication/6_Pointer Animated Mascot Motto Delivery Promo.mp4';
import GlassFurniturePromo from '../../news and publication/7_Pointer Glass and Furniture Cleaner Promo.mp4';

const NEWS_ITEMS = [
  {
    title: "Crystal Cleanser expands in Kathmandu Valley",
    category: "Corporate",
    date: "May 10, 2024",
    author: "Admin",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    desc: "Opening new distribution hubs to meet the increasing demand for organic cleaning solutions."
  },
  {
    title: "Eco-Friendly surfactants: The future of Nepal hygiene",
    category: "Innovation",
    date: "April 28, 2024",
    author: "R&D Team",
    img: "https://images.unsplash.com/photo-1584622781514-433f89ce8a9a?auto=format&fit=crop&q=80&w=800",
    desc: "Why non-ionic surfactants are superior to traditional harsh acids for both ethics and efficacy."
  },
  {
    title: "Hospitality partnership with leading hotels",
    category: "Partnership",
    date: "April 15, 2024",
    author: "Sales Dept",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
    desc: "Standardizing hygiene protocols across luxury mountain retreats with Pointer solutions."
  }
];

const VIDEO_ITEMS = [
  { title: 'Safe Home Usage', src: SafeHomePromo },
  { title: 'Product Lineup Intro', src: ProductLineupIntro },
  { title: 'Brand Promo Intro', src: PromoIntro },
  { title: 'Chimney Cleaner Demo', src: ChimneyPromo },
  { title: 'Toilet Cleaner Demo', src: ToiletPromo },
  { title: 'Mascot Motto Video', src: MascotMotto },
  { title: 'Glass & Furniture Promo', src: GlassFurniturePromo }
];

export default function News() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const themeContext = useContext(ThemeContext);
  const darkMode = themeContext?.darkMode || false;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <div className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <SectionTag>Daily Updates</SectionTag>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className={`text-6xl md:text-[8rem] font-black italic tracking-tighter uppercase leading-[0.8] ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              News & <br /> <span className="text-emerald-600">Dispatches.</span>
            </h2>
            <div className={`px-12 py-8 rounded-[3rem] border max-w-sm ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-emerald-50 border-emerald-100'}`}>
                <p className="text-sm font-bold italic text-neutral-400 leading-relaxed">
                    As a manufacturer, we are driven by great enthusiasm to make a sustainable lifestyle in Nepal through Pointer’s commitment to sustainability.
                </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {NEWS_ITEMS.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group cursor-pointer"
              >
                <div className={`aspect-[16/10] rounded-[3.5rem] overflow-hidden mb-8 relative shadow-xl border-4 ${darkMode ? 'border-neutral-900' : 'border-white'}`}>
                  <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6">
                    <span className="glass px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-950">{item.category}</span>
                  </div>
                </div>
                <div className="px-4">
                  <div className="flex gap-6 mb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {item.date}</span>
                    <span className="flex items-center gap-2"><User size={14} /> {item.author}</span>
                  </div>
                  <h4 className={`text-3xl font-black italic uppercase tracking-tighter leading-tight mb-6 group-hover:text-emerald-600 transition-colors ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{item.title}</h4>
                  <p className="text-neutral-500 font-bold italic text-sm leading-relaxed mb-8">{item.desc}</p>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-emerald-600 group-hover:gap-6 transition-all">
                    Read Article <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-24 border-y ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
            <div>
              <SectionTag>Media Showcase</SectionTag>
              <h3 className={`text-5xl font-black italic uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Pointer Video Gallery</h3>
            </div>
            <p className="text-neutral-500 font-bold italic max-w-2xl leading-relaxed">
              Watch demonstrative promos, manufacturing highlights, and product launch videos created for Pointer’s clean performance campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {VIDEO_ITEMS.map((item, index) => (
              <div key={index} className={`rounded-[3.5rem] overflow-hidden shadow-4xl border ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}>
                <video controls preload="none" className="w-full h-full min-h-[260px] bg-black">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-8">
                  <h4 className={`text-2xl font-black uppercase tracking-tighter mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-32 ${darkMode ? 'bg-neutral-950' : 'bg-neutral-900'} text-white`}>
          <div className="max-w-7xl mx-auto px-6">
              <div className={`glass p-16 md:p-32 rounded-[5rem] border-white/5 text-center flex flex-col items-center ${darkMode ? 'bg-white/5' : ''}`}>
                  <AnimatePresence mode="wait">
                    {!isSubscribed ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col items-center w-full"
                      >
                        <Newspaper size={80} className="text-emerald-400 mb-12" />
                        <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-none">Subscribe to <br /> Pointer Press</h3>
                        <p className="text-xl text-neutral-400 italic font-bold mb-16 max-w-xl">Get monthly hygiene insights and product updates delivered to your inbox.</p>
                        <form className="w-full max-w-2xl flex flex-col md:flex-row gap-4" onSubmit={handleSubscribe}>
                            <input required type="email" placeholder="Email Address..." className="flex-grow bg-white/5 border-2 border-white/10 rounded-[2rem] px-10 py-6 outline-none focus:border-emerald-500 font-bold italic text-white" />
                            <button className="bg-emerald-600 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-3xl">Subcribe</button>
                        </form>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center"
                      >
                        <CheckCircle2 size={80} className="text-emerald-400 mb-12" />
                        <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-none">Welcome to <br /> Pointer Press</h3>
                        <p className="text-xl text-neutral-400 italic font-bold max-w-xl">You've successfully joined our dispatch list. Stay tuned for clinical hygiene insights.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>
          </div>
      </section>
    </div>
  );
}

import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'motion/react';
import { Leaf, Globe, Microscope, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTag } from '../components/SectionTag';
import { SECTORS } from '../constants';
import BannerImg from '../../static/homepage_image.png';
import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../App';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const themeContext = useContext(ThemeContext);
  const darkMode = themeContext?.darkMode || false;

  return (
    <div className={`pt-20 transition-colors duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-grid-subtle">
        <div className={`absolute top-0 right-0 w-1/2 h-full -skew-x-12 translate-x-24 z-0 ${darkMode ? 'bg-emerald-950/20' : 'bg-emerald-50/50'}`} />
        <motion.div style={{ y: y1 }} className={`absolute top-1/4 -left-32 w-[600px] h-[600px] blur-[150px] rounded-full z-0 ${darkMode ? 'bg-emerald-500/5' : 'bg-emerald-200/10'}`} />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full py-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionTag>Nepal's Pioneer in Natural Hygiene</SectionTag>
            <h1 className={`text-5xl md:text-7xl lg:text-[5rem] font-black leading-[0.85] mb-8 tracking-tighter uppercase italic ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Scientific <br />
              <span className="text-gradient text-5xl md:text-7xl lg:text-[5rem]">Sustainability.</span>
            </h1>
            <p className={`text-xl mb-12 max-w-xl leading-relaxed font-bold italic tracking-tight ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Established in 2021, Crystal Cleanser delivers clinical performance through <span className="text-emerald-500">Japan Industrial Standard (JIS K-3362)</span> compliant formulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/products" className="bg-emerald-600 text-white px-12 py-7 rounded-[2rem] font-black flex items-center justify-center gap-4 hover:bg-emerald-700 transition-all hover:translate-y-[-6px] hover:shadow-[0_30px_60px_rgba(5,150,105,0.3)] uppercase tracking-[0.25em] text-[11px]">
                Explore Catalog <ArrowRight size={22} />
              </Link>
              <Link to="/about" className={`px-12 py-7 rounded-[2rem] font-black uppercase tracking-[0.25em] text-[11px] transition-all shadow-sm flex items-center justify-center border-2 ${darkMode ? 'bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800' : 'bg-white border-neutral-100 text-neutral-900 hover:bg-neutral-50'}`}>
                Our Heritage
              </Link>
            </div>
            
            <div className={`mt-20 flex flex-wrap items-center gap-10 pt-12 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">JIS K-3362 Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-blue-950 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <Globe size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Local Manufacturing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-purple-950 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <Leaf size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Biodegradable Base</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group hidden lg:block"
          >
            <div className={`aspect-[4/5] rounded-[4.5rem] overflow-hidden shadow-6xl border-[15px] z-10 relative ${darkMode ? 'border-neutral-900' : 'border-white'}`}>
              <img 
                src={BannerImg}
                alt="Pointer product banner"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-16 -left-16 p-12 rounded-[3.5rem] shadow-6xl border z-20 max-w-[320px] ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-50'}`}
            >
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-200">
                  <Zap size={32} />
                </div>
                <div>
                  <p className={`text-3xl font-black leading-none italic tracking-tighter uppercase ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Science</p>
                  <p className="text-[10px] text-neutral-400 uppercase font-black tracking-[0.3em] mt-3 leading-relaxed text-left">Japan Industrial Standard Compliance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-32 relative border-y ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { label: "Products Launched", value: 9, suffix: "+" },
              { label: "Biodegradable Rate", value: 100, suffix: "%" },
              { label: "Established In", value: 2021, suffix: "" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl md:text-8xl font-black italic tracking-tighter text-emerald-500 mb-4 tabular-nums">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className={`py-32 relative ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <SectionTag>Foundation Principles</SectionTag>
            <h2 className={`text-5xl md:text-8xl font-black italic tracking-tighter uppercase ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Our <span className="text-emerald-600">Philosophy.</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Sustainability", desc: "100% biodegradable products designed to eliminate environmental pollution." },
              { title: "Safety First", desc: "Non-toxic formulations safe for pets, infants, and sensitive skin." },
              { title: "Efficiency", desc: "High-grade performance for heavy grease, carbon, and industrial scales." },
              { title: "Local Growth", desc: "Reducing costs and supporting the Nepali economy through local plants." }
            ].map((p, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
                key={i} 
                className={`group p-12 rounded-[3.5rem] border transition-all duration-500 ${darkMode ? 'bg-neutral-900 border-neutral-800 hover:border-emerald-500/50 hover:shadow-[0_40px_80px_rgba(5,150,105,0.1)]' : 'bg-neutral-50 border-neutral-100 hover:bg-white hover:shadow-4xl hover:border-emerald-100'}`}
              >
                <p className={`text-5xl font-black mb-8 italic ${darkMode ? 'text-emerald-900/50' : 'text-emerald-100'}`}>0{i+1}</p>
                <h4 className={`text-2xl font-black italic uppercase tracking-tighter mb-4 transition-colors ${darkMode ? 'text-white group-hover:text-emerald-500' : 'text-neutral-900 group-hover:text-emerald-600'}`}>{p.title}</h4>
                <p className="text-neutral-400 font-bold italic text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className={`py-32 border-t ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-100'}`}>
          <div className="max-w-7xl mx-auto px-6 text-center">
              <SectionTag>Deployment Scenarios</SectionTag>
              <h2 className={`text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-24 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  Universal <br /> <span className="text-emerald-600">Purity.</span>
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                  {SECTORS.map(s => (
                      <div key={s.name} className={`group rounded-[3rem] p-14 border-2 border-transparent transition-all duration-700 ${darkMode ? 'bg-neutral-900 hover:border-emerald-500 hover:bg-neutral-800 hover:shadow-6xl' : 'bg-neutral-50 hover:border-emerald-600 hover:bg-white hover:shadow-6xl'}`}>
                          <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-12 shadow-sm border group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${darkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-100'}`}>
                              <s.icon size={44} className="text-emerald-600" />
                          </div>
                          <h4 className={`text-3xl font-black italic uppercase tracking-tighter mb-5 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{s.name}</h4>
                          <p className="text-neutral-400 font-bold italic text-sm leading-relaxed">{s.desc}</p>
                      </div>
                  ))}
              </div>
              
              <div className="mt-24">
                <Link to="/products" className="inline-flex items-center gap-4 text-emerald-600 font-black italic tracking-tighter uppercase hover:gap-6 transition-all group">
                   Explore Professional Range <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
          </div>
      </section>
    </div>
  );
}

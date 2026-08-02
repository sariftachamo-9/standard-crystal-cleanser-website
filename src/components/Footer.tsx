import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import LogoImg from '../../static/logo.png';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: "#", color: "hover:bg-blue-600" },
  { icon: FaInstagram, href: "#", color: "hover:bg-pink-600" },
  { icon: FaLinkedin, href: "#", color: "hover:bg-blue-700" },
  { icon: FaWhatsapp, href: "https://wa.me/9779864160647", color: "hover:bg-green-600" }
];

export const Footer = () => {
  const themeContext = useContext(ThemeContext);
  const darkMode = themeContext?.darkMode || false;

  return (
    <footer className={`relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      {/* Upper Footer - Gradient & Main Content */}
      <div className={`relative pt-20 pb-12 border-t ${darkMode ? 'bg-gradient-to-b from-emerald-950/20 to-neutral-950 border-neutral-900' : 'bg-gradient-to-b from-emerald-50/50 to-white border-neutral-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {/* Brand Column */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <Link to="/" className="inline-block mb-8 hover:scale-105 transition-transform group">
                <div className={`p-4 rounded-[2rem] shadow-2xl border transition-all group-hover:rotate-6 ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-white'}`}>
                  <img src={LogoImg} alt="Crystal Cleanser" loading="lazy" className="w-16 h-16 object-contain" />
                </div>
              </Link>
              <h2 className={`text-2xl font-black italic uppercase tracking-tighter mb-6 leading-none ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Crystal<span className="text-emerald-600">Cleanser</span>
              </h2>
              <p className="text-neutral-400 text-[11px] font-bold uppercase tracking-[0.3em] italic mb-8 leading-relaxed max-w-[200px]">
                Scientific Hygiene <br /> For A Greener Future.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white' : 'bg-neutral-50 text-neutral-500 border border-neutral-100 hover:text-white'} ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-10 italic ${darkMode ? 'text-emerald-500' : 'text-emerald-600'}`}>Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Products', 'News', 'FAQ', 'Contact'].map(link => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase()}`} className="text-sm font-bold text-neutral-400 hover:text-emerald-600 transition-colors flex items-center gap-2 group italic uppercase tracking-widest">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-10 italic ${darkMode ? 'text-emerald-500' : 'text-emerald-600'}`}>Inquiries</h4>
              <ul className="space-y-6">
                <li>
                  <a href="mailto:info@crystalcleanser.com.np" className="group">
                    <p className="text-[9px] font-black uppercase tracking-widest text-neutral-500 mb-2 italic">General Email</p>
                    <p className={`text-base font-black italic hover:text-emerald-600 transition-colors ${darkMode ? 'text-white' : 'text-neutral-900'}`}>info@crystalcleanser.com.np</p>
                  </a>
                </li>
                <li>
                  <a href="tel:+977015904130" className="group">
                    <p className="text-[9px] font-black uppercase tracking-widest text-neutral-500 mb-2 italic">Support Line</p>
                    <p className={`text-base font-black italic hover:text-emerald-600 transition-colors ${darkMode ? 'text-white' : 'text-neutral-900'}`}>(+977) 015904130</p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-10 italic ${darkMode ? 'text-emerald-500' : 'text-emerald-600'}`}>The Plant</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                    <MapPin size={18} />
                  </div>
                  <p className="text-sm font-bold text-neutral-400 italic leading-relaxed">
                    Machhegaun-9, Chandragiri, <br /> Kathmandu, Nepal
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                    <ExternalLink size={18} />
                  </div>
                  <Link to="/download" className="text-sm font-black italic text-emerald-600 hover:underline underline-offset-8">
                    Download Technical Catalog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`py-8 border-t transition-all duration-700 ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 italic text-center md:text-left">
            © {new Date().getFullYear()} Crystal Cleanser Industry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 italic">
              BUILT BY <span className="text-emerald-600">GLOBAL IOT NEPAL</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

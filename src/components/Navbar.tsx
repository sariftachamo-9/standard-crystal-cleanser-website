import { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import LogoImg from '../../static/logo.png';
import { ThemeContext } from '../App';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { 
    name: 'Resources', 
    dropdown: [
      { name: 'News', path: '/news' },
      { name: 'Blog', path: '/blog' },
      { name: 'FAQ', path: '/faq' },
    ]
  },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const darkMode = themeContext?.darkMode || false;
  const setDarkMode = themeContext?.setDarkMode || (() => {});

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-white md:bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1 rounded-xl shadow-xl shadow-emerald-200/20 group-hover:scale-110 transition-transform duration-300 border border-emerald-50">
            <img src={LogoImg} alt="Crystal Cleanser Logo" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tighter text-neutral-900 leading-none">Crystal<span className="text-emerald-600">Cleanser</span></span>
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-400 mt-1 leading-none italic">Flagship Brand: Pointer Solutions</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-all shadow-sm"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {NAV_LINKS.map(link => (
            link.dropdown ? (
              <div 
                key={link.name} 
                className="relative group/dropdown"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'} hover:text-emerald-600`}>
                  {link.name} <ChevronDown size={12} className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full left-0 mt-4 border p-4 rounded-2xl shadow-xl min-w-[200px] ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-100'}`}
                    >
                      {link.dropdown.map(sub => (
                        <NavLink 
                          key={sub.name} 
                          to={sub.path} 
                          className={({ isActive }) => `block px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-colors ${isActive ? (darkMode ? 'bg-emerald-900/20 text-emerald-500' : 'bg-emerald-50 text-emerald-600') : (darkMode ? 'text-neutral-400 hover:bg-neutral-800 hover:text-emerald-500' : 'text-neutral-500 hover:bg-neutral-50 hover:text-emerald-600')}`}
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-emerald-600' : (darkMode ? 'text-neutral-400 hover:text-emerald-500' : 'text-neutral-500 hover:text-emerald-600')}`}
              >
                {link.name}
              </NavLink>
            )
          ))}
          <Link to="/download" className="bg-neutral-900 dark:bg-emerald-600 text-white px-7 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all hover:shadow-2xl hover:shadow-emerald-200/20 hover:-translate-y-0.5">
            Download Catalog
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={`p-2 transition-colors ${darkMode ? 'text-white' : 'text-neutral-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute top-full right-6 left-6 mt-4 p-8 rounded-[3rem] shadow-3xl md:hidden flex flex-col gap-4 max-h-[80vh] overflow-y-auto border ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-100'}`}
          >
            {NAV_LINKS.map(link => (
              link.dropdown ? (
                link.dropdown.map(sub => (
                  <NavLink 
                    key={sub.name} 
                    to={sub.path} 
                    className={({ isActive }) => `text-2xl font-black italic tracking-tighter transition-colors ${isActive ? 'text-emerald-600' : (darkMode ? 'text-white' : 'text-neutral-900')}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {sub.name}
                  </NavLink>
                ))
              ) : (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className={({ isActive }) => `text-2xl font-black italic tracking-tighter transition-colors ${isActive ? 'text-emerald-600' : (darkMode ? 'text-white' : 'text-neutral-900')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

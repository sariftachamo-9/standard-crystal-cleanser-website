import React, { useState, useEffect, Suspense, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTop } from './components/BackToTop';
import { ToastProvider } from './components/Toast';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const News = React.lazy(() => import('./pages/News'));
const Blog = React.lazy(() => import('./pages/Blog'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Download = React.lazy(() => import('./pages/Download'));

// Dark Mode Context
interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Suspense fallback={null}><PageTransition><Home /></PageTransition></Suspense>} />
        <Route path="/about" element={<Suspense fallback={null}><PageTransition><About /></PageTransition></Suspense>} />
        <Route path="/products" element={<Suspense fallback={null}><PageTransition><Products /></PageTransition></Suspense>} />
        <Route path="/news" element={<Suspense fallback={null}><PageTransition><News /></PageTransition></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={null}><PageTransition><Blog /></PageTransition></Suspense>} />
        <Route path="/faq" element={<Suspense fallback={null}><PageTransition><FAQ /></PageTransition></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={null}><PageTransition><Contact /></PageTransition></Suspense>} />
        <Route path="/download" element={<Suspense fallback={null}><PageTransition><Download /></PageTransition></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          <AnimatePresence>
            {loading && <LoadingScreen />}
          </AnimatePresence>
          
          <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'} selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth overflow-x-hidden font-sans flex flex-col`}>
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </ToastProvider>
    </ThemeContext.Provider>
  );
}

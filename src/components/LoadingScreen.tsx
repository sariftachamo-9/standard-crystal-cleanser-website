import { motion } from 'motion/react';
import LogoImg from '../../static/logo.png';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="bg-white p-4 rounded-[2rem] shadow-2xl border border-emerald-50">
          <img src={LogoImg} alt="Crystal Cleanser" className="w-24 h-24 object-contain" />
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full -z-10"
        />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-neutral-900 leading-none">
          Crystal<span className="text-emerald-600">Cleanser</span>
        </h2>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mt-3 leading-relaxed">
          Scientific Sustainability
        </p>
      </motion.div>
      <div className="mt-12 w-48 h-1 bg-neutral-100 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-1/2 bg-emerald-600 rounded-full"
        />
      </div>
    </motion.div>
  );
};

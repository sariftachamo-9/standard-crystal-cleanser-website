import React, { useState, useContext, useRef } from 'react';
import ScanContactImg from '../../static/scan and contact.png';
import { MapPin, Phone, Mail, Clock, ChevronDown, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionTag } from '../components/SectionTag';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeContext } from '../App';
import { useToast } from '../components/Toast';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext?.darkMode || false;
    const { showToast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = (name: string, value: string) => {
        let error = '';
        if (!value) {
            error = 'This field is required';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Please enter a valid email';
        } else if (name === 'phone' && value.length < 10) {
            error = 'Please enter a valid phone number';
        }
        setErrors(prev => ({ ...prev, [name]: error }));
        return !error;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const formData = new FormData(formRef.current!);
        const data = Object.fromEntries(formData.entries());
        
        let isValid = true;
        Object.entries(data).forEach(([key, value]) => {
            if (!validateField(key, value as string)) isValid = false;
        });

        if (!isValid) {
            showToast('Please fix the errors in the form', 'error');
            return;
        }

        setIsSending(true);

        try {
            // Note: In a real app, these would be in a .env file
            // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

            if (serviceId !== 'service_placeholder') {
                await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
            } else {
                // Simulate network delay for demo if no keys provided
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            setIsSubmitted(true);
            showToast('Your inquiry has been dispatched', 'success');
        } catch (error) {
            console.error('EmailJS Error:', error);
            showToast('Failed to send inquiry. Please try again later.', 'error');
        } finally {
            setIsSending(false);
        }
    };

    return (
      <div className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-neutral-900'}`}>
        <section className="py-32 text-white relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
                <div className="grid lg:grid-cols-2 gap-32">
                    <div>
                        <SectionTag>Reach Pointer</SectionTag>
                        <h2 className={`text-6xl md:text-[9rem] font-black italic leading-[0.85] mb-20 uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-white'}`}>Enter <br /> the <span className="text-emerald-400">Green.</span></h2>
                        
                        <div className="space-y-12">
                            <div className="grid gap-8">
                                {[
                                    { icon: MapPin, label: "Plant & Address", value: "Machhegaun-9, Chandragiri, Kathmandu, Nepal" },
                                    { icon: Phone, label: "Support Lines", value: ["(+977) 015904130", "(+977) 9864160647"], isLink: "tel" },
                                    { icon: Mail, label: "Email Dispatch", value: "info@crystalcleanser.com.np", isLink: "mailto" },
                                    { icon: Clock, label: "Shift Hours", value: "Sun - Fri: 9:30 AM – 6:00 PM" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-12 items-start group">
                                        <div className={`w-24 h-24 border rounded-[2.5rem] flex items-center justify-center transition-all duration-700 shadow-3xl ${darkMode ? 'bg-white/5 border-white/10 group-hover:bg-emerald-600' : 'bg-white/5 border-white/10 group-hover:bg-emerald-600'}`}>
                                            <item.icon size={36} className="text-emerald-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-3 italic">{item.label}</p>
                                            {Array.isArray(item.value) ? (
                                                item.value.map(v => (
                                                    <a key={v} href={`${item.isLink}:${v.replace(/\s/g, '')}`} className="text-3xl font-black text-white tracking-widest italic leading-none block hover:text-emerald-400 transition-colors mb-2">{v}</a>
                                                ))
                                            ) : (
                                                item.isLink ? (
                                                    <a href={`${item.isLink}:${item.value}`} className="text-3xl font-black text-white tracking-widest italic leading-none hover:text-emerald-400 transition-colors">{item.value}</a>
                                                ) : (
                                                    <p className="text-3xl font-black text-white tracking-widest italic leading-none">{item.value}</p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={`rounded-[3rem] border p-10 text-neutral-200 ${darkMode ? 'bg-emerald-50/5 border-white/5' : 'bg-emerald-50/10 border-white/10'}`}>
                                <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-400 mb-4">Quick Response Guarantee</p>
                                <p className="text-base leading-relaxed font-medium text-neutral-100">Our trade and technical support team responds to all inquiries within 24 hours, including custom sample requests and bulk order quotations.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${darkMode ? 'bg-neutral-900' : 'bg-white'} rounded-[5rem] p-12 lg:p-24 text-neutral-900 shadow-6xl relative overflow-hidden flex flex-col justify-center min-h-[800px]`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <h3 className={`text-5xl font-black mb-16 italic uppercase border-l-[12px] border-emerald-600 pl-10 tracking-tighter leading-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Business <br /> Inquiry</h3>
                                    <form ref={formRef} className="space-y-8" onSubmit={handleSubmit} noValidate>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest italic ml-3">Full Name</label>
                                                <input 
                                                    name="user_name"
                                                    required 
                                                    type="text" 
                                                    onBlur={(e) => validateField('user_name', e.target.value)}
                                                    className={`w-full border-2 rounded-[2rem] px-8 py-6 transition-all outline-none font-bold italic ${errors.user_name ? 'border-red-500 bg-red-50/10' : (darkMode ? 'bg-neutral-800 border-neutral-800 text-white focus:border-emerald-500 focus:bg-neutral-900' : 'bg-neutral-50 border-neutral-50 focus:border-emerald-500 focus:bg-white')}`} 
                                                    placeholder="Name/Company" 
                                                />
                                                {errors.user_name && <p className="text-[9px] text-red-500 font-black uppercase tracking-widest ml-4 flex items-center gap-1"><AlertCircle size={10} /> {errors.user_name}</p>}
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest italic ml-3">Mobile Contact</label>
                                                <input 
                                                    name="phone"
                                                    required 
                                                    type="text" 
                                                    onBlur={(e) => validateField('phone', e.target.value)}
                                                    className={`w-full border-2 rounded-[2rem] px-8 py-6 transition-all outline-none font-bold italic ${errors.phone ? 'border-red-500 bg-red-50/10' : (darkMode ? 'bg-neutral-800 border-neutral-800 text-white focus:border-emerald-500 focus:bg-neutral-900' : 'bg-neutral-50 border-neutral-50 focus:border-emerald-500 focus:bg-white')}`} 
                                                    placeholder="+977" 
                                                />
                                                {errors.phone && <p className="text-[9px] text-red-500 font-black uppercase tracking-widest ml-4 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone}</p>}
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest italic ml-3">Email Address</label>
                                            <input 
                                                name="user_email"
                                                required 
                                                type="email" 
                                                onBlur={(e) => validateField('user_email', e.target.value)}
                                                className={`w-full border-2 rounded-[2rem] px-8 py-6 transition-all outline-none font-bold italic ${errors.user_email ? 'border-red-500 bg-red-50/10' : (darkMode ? 'bg-neutral-800 border-neutral-800 text-white focus:border-emerald-500 focus:bg-neutral-900' : 'bg-neutral-50 border-neutral-50 focus:border-emerald-500 focus:bg-white')}`} 
                                                placeholder="name@company.com" 
                                            />
                                            {errors.user_email && <p className="text-[9px] text-red-500 font-black uppercase tracking-widest ml-4 flex items-center gap-1"><AlertCircle size={10} /> {errors.user_email}</p>}
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest italic ml-3">Service Tier</label>
                                                <div className="relative">
                                                    <select name="service" className={`w-full border-2 rounded-[2rem] px-8 py-6 transition-all outline-none font-black italic appearance-none uppercase text-xs tracking-widest ${darkMode ? 'bg-neutral-800 border-neutral-800 text-white focus:border-emerald-500 focus:bg-neutral-900' : 'bg-neutral-50 border-neutral-50 focus:border-emerald-500 focus:bg-white'}`}>
                                                        <option>Household Pointer Range</option>
                                                        <option>Institutional (Hospital/Hotel)</option>
                                                        <option>Industrial Plant Cleaning</option>
                                                        <option>Regional Distribution Request</option>
                                                    </select>
                                                    <ChevronDown size={20} className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600" />
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest italic ml-3">Order Volume</label>
                                                <input name="volume" type="text" className={`w-full border-2 rounded-[2rem] px-8 py-6 transition-all outline-none font-bold italic ${darkMode ? 'bg-neutral-800 border-neutral-800 text-white focus:border-emerald-500 focus:bg-neutral-900' : 'bg-neutral-50 border-neutral-50 focus:border-emerald-500 focus:bg-white'}`} placeholder="500ml / 5L / 50L / Custom" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest italic ml-3">Nature of Request</label>
                                            <textarea name="message" required rows={4} className={`w-full border-2 rounded-[2rem] px-8 py-6 transition-all outline-none resize-none font-bold italic ${errors.message ? 'border-red-500 bg-red-50/10' : (darkMode ? 'bg-neutral-800 border-neutral-800 text-white focus:border-emerald-500 focus:bg-neutral-900' : 'bg-neutral-50 border-neutral-50 focus:border-emerald-500 focus:bg-white')}`} placeholder="Tell us about your cleaning needs..."></textarea>
                                        </div>
                                        <button 
                                            disabled={isSending}
                                            type="submit" 
                                            className={`w-full bg-emerald-600 text-white font-black py-10 rounded-[2.5rem] hover:bg-emerald-700 transition-all shadow-[0_30px_70px_rgba(5,150,105,0.4)] uppercase tracking-[0.5em] text-xs flex items-center justify-center gap-8 group ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSending ? 'Transmitting...' : 'Dispatch Request'} 
                                            {!isSending && <ArrowRight size={32} className="group-hover:translate-x-6 transition-transform duration-700" />}
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-32 h-32 bg-emerald-50 text-emerald-600 rounded-[3rem] flex items-center justify-center mx-auto mb-10 shadow-xl border border-emerald-100">
                                        <CheckCircle2 size={64} className="animate-reveal" />
                                    </div>
                                    <h3 className={`text-4xl font-black italic uppercase tracking-tighter mb-6 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Dispatch Successful</h3>
                                    <p className="text-neutral-400 font-bold italic text-lg leading-relaxed max-w-sm mx-auto mb-12">
                                        Your inquiry has been received. Our technical support team will contact you within 24 hours.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 hover:text-emerald-500 transition-colors"
                                    >
                                        Send Another Request
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className={`mt-12 pt-12 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-50'}`}>
                            <img src={ScanContactImg} alt="Scan to contact" loading="lazy" className="w-full rounded-[3rem] shadow-4xl object-cover" />
                            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mt-6 italic text-center">Scan to save contact details or request a brochure instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}

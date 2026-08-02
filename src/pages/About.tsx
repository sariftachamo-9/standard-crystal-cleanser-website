import PlantImg from '../../static/Products/Manufacturing Plant.png';
import BannerImg from '../../static/banner.png';
import LogoImg from '../../static/logo.png';
import { Droplets, Globe, Microscope, Box, Leaf, Shield, Sparkles } from 'lucide-react';
import { SectionTag } from '../components/SectionTag';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-20">
                  <div className="aspect-square bg-emerald-600 rounded-[3rem] p-12 text-white flex flex-col justify-end shadow-4xl animate-float">
                    <Droplets size={40} className="mb-auto" />
                    <h4 className="text-4xl font-black italic tracking-tighter uppercase leading-[0.8]">Clean <br /> Green</h4>
                  </div>
                  <img src={PlantImg} className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover" alt="Manufacturing plant" />
                </div>
                <div className="space-y-6">
                  <img src={BannerImg} className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover" alt="Pointer product lineup" />
                  <div className="aspect-square bg-neutral-900 rounded-[3rem] p-12 text-white flex flex-col justify-end shadow-4xl">
                    <Globe size={40} className="mb-auto text-emerald-400" />
                    <h4 className="text-4xl font-black italic tracking-tighter uppercase leading-[0.8]">Proud <br /> Nepali</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionTag>Established 2021</SectionTag>
              <h2 className="text-5xl md:text-8xl font-black mb-12 text-neutral-900 leading-[0.9] tracking-tighter uppercase italic">
                Leading <br /> Eco-Friendly <br /> <span className="text-emerald-600">Choice.</span>
              </h2>
              
              <div className="space-y-8 mb-16">
                <p className="text-xl text-neutral-500 font-bold italic tracking-tight leading-relaxed">
                  Crystal Cleanser Company Pvt. Ltd. is a proudly Nepali enterprise committed to manufacturing eco-friendly cleaning solutions that combine powerful performance with environmental responsibility.
                </p>
                <p className="text-neutral-400 font-bold italic text-sm leading-relaxed">
                  Headquartered in Machhegaun, Chandragiri, Kathmandu, our mission is rooted in sustainability, safety, and innovation. We respond to the growing demand for bio-cleaning alternatives by crafting products that are non-toxic, biodegradable, and made from natural ingredients.
                </p>
              </div>

              <div className="mb-14 flex flex-col sm:flex-row items-center gap-8">
                <img src={LogoImg} alt="Pointer logo" className="w-28 h-28 rounded-[2rem] border-4 border-emerald-100 shadow-4xl bg-white p-4" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-emerald-600 mb-3 italic">Flagship Brand: Pointer</p>
                  <p className="text-lg text-neutral-500 font-bold italic leading-relaxed max-w-2xl">
                    Under our Pointer Brand, we offer a diverse range of organic cleaning products that deliver exceptional results without compromising on safety or sustainability.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Leaf, title: "100% Eco-Friendly", desc: "Biodegradable solutions that protect the planet." },
                  { icon: Shield, title: "Safety First", desc: "Safe for children, pets, and sensitive environments." },
                  { icon: Sparkles, title: "Premium Shine", desc: "Exceptional results without harsh chemicals." },
                  { icon: Microscope, title: "Natural Tech", desc: "Innovative formulas from natural ingredients." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                      <item.icon size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black italic uppercase tracking-tighter text-neutral-900">{item.title}</h4>
                      <p className="text-neutral-400 font-bold italic text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nepali Section */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-emerald-600/10 border border-emerald-500/20 rounded-full mb-8">
                <span className="text-emerald-400 font-black italic uppercase tracking-widest text-xs">हाम्रो बारेमा</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">
                क्रिस्टल क्लिन्जर <br /> <span className="text-emerald-400">कम्पनी प्रा. लि.</span>
              </h2>
              <p className="text-2xl text-neutral-300 font-bold italic mb-8 leading-tight">
                एक अग्रणी नेपाली कम्पनी, जसले पर्यावरणमैत्री सफाई उत्पादनहरू निर्माण गर्ने प्रतिबद्धता लिएको छ।
              </p>
            </div>
            <div className="space-y-10">
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
                <h4 className="text-emerald-400 font-black italic uppercase tracking-widest text-sm mb-4">हाम्रो उद्देश्य</h4>
                <p className="text-neutral-400 font-bold italic leading-relaxed">
                  हाम्रो उद्देश्य सफाईलाई मात्र प्रभावकारी बनाउनु होइन, स्वास्थ्य र वातावरणलाई सुरक्षित राख्दै दिगो समाधान प्रदान गर्नु हो। हामी विश्वास गर्छौं कि सफाई उत्पादनहरूले मानव स्वास्थ्य र वातावरणमा नकारात्मक असर पार्नु हुँदैन।
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
                <h4 className="text-emerald-400 font-black italic uppercase tracking-widest text-sm mb-4">हाम्रो दृष्टि</h4>
                <p className="text-neutral-400 font-bold italic leading-relaxed">
                  त्यसैले, हामीले जैविक रूपमा विघटनशील, विषमुक्त, प्राकृतिक सामग्री प्रयोग गरेर उत्पादनहरू तयार गरेका छौं, जसले सफाईलाई सुरक्षित र दिगो बनाउँछ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-20">Why Choose Crystal Cleanser?</h3>
            <div className="grid md:grid-cols-4 gap-8 text-left">
                {[
                    { title: "Trusted across Nepal", desc: "Preferred by leading institutions and households across the country." },
                    { title: "100% Eco-Friendly", desc: "Fully biodegradable products that leave zero environmental footprint." },
                    { title: "Safe for Everyone", desc: "Non-toxic formulas safe for children, pets, and sensitive spaces." },
                    { title: "Locally Manufactured", desc: "Supporting the Nepali economy with premium natural ingredients." }
                ].map((p, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-neutral-100 group hover:border-emerald-600 transition-all duration-500">
                        <span className="text-5xl font-black text-emerald-100 italic tracking-tighter mb-6 block group-hover:text-emerald-600 transition-colors">0{i+1}</span>
                        <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4 text-neutral-900 leading-tight">{p.title}</h4>
                        <p className="text-neutral-400 font-bold italic text-xs leading-relaxed">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}

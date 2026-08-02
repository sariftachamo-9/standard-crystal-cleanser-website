import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Heart, Search, Calendar, User, Newspaper } from 'lucide-react';
import { SectionTag } from '../components/SectionTag';
import { BLOG_POSTS } from '../constants';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.filter(p => p !== featuredPost);
  
  const categories = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

  const filteredPosts = remainingPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <SectionTag>Thoughts & Insights</SectionTag>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-[8rem] font-black italic tracking-tighter uppercase leading-[0.8] text-neutral-900">
              Pointer <br /> <span className="text-emerald-600">Journals.</span>
            </h2>
            <div className="max-w-sm">
                <p className="text-xl font-bold italic text-neutral-500 leading-relaxed mb-8">
                    Deep dives into hygiene science and sustainable living in the Himalayas.
                </p>
                <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-emerald-600 focus:bg-white transition-all font-bold italic"
                    />
                </div>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-32">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative grid lg:grid-cols-2 gap-16 items-center bg-neutral-900 rounded-[5rem] overflow-hidden p-8 lg:p-16 shadow-6xl"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl -translate-y-12 translate-x-12" />
                <div className="aspect-[16/10] lg:aspect-square rounded-[4rem] overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700 order-2 lg:order-1">
                    <img src={featuredPost.img} alt={featuredPost.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/20 transition-colors duration-700" />
                </div>
                <div className="text-white order-1 lg:order-2">
                    <div className="inline-flex items-center gap-3 bg-emerald-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
                        Featured Article
                    </div>
                    <div className="flex gap-6 mb-6 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                        <span className="flex items-center gap-2 font-black italic"><Calendar size={14} /> {featuredPost.date}</span>
                        <span className="flex items-center gap-2 font-black italic"><User size={14} /> Admin</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                        {featuredPost.title}
                    </h3>
                    <p className="text-neutral-400 text-xl font-bold italic mb-12 leading-relaxed">
                        {featuredPost.excerpt}
                    </p>
                    <button className="flex items-center gap-6 bg-white text-neutral-900 px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-emerald-600 hover:text-white transition-all group/btn">
                        Read Featured Story <ArrowRight size={24} className="group-hover/btn:translate-x-3 transition-transform" />
                    </button>
                </div>
            </motion.div>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-3 justify-start mb-16 px-4">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2 ${activeCategory === cat ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xl shadow-emerald-200' : 'bg-white text-neutral-400 border-neutral-100 hover:border-neutral-300'}`}
                >
                    {cat}
                </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, i) => (
                        <motion.div 
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: i * 0.1 }}
                            key={post.title} 
                            className="group cursor-pointer flex flex-col h-full bg-white transition-all duration-500"
                        >
                            <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden mb-10 relative shadow-2xl group-hover:-translate-y-4 transition-transform duration-700">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute top-6 left-6">
                                    <span className="glass px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-950 shadow-sm">{post.category}</span>
                                </div>
                                <div className="absolute bottom-6 right-6 flex gap-3">
                                    <div className="glass px-5 py-2.5 rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase text-emerald-950">
                                        <Heart size={16} className="text-emerald-600" /> {post.likes}
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 pb-8 flex flex-col flex-grow text-left">
                                <div className="flex gap-4 mb-6 text-[9px] font-black uppercase tracking-widest text-neutral-400">
                                    <span className="italic">{post.date}</span>
                                    <span>•</span>
                                    <span className="italic">5 min read</span>
                                </div>
                                <h4 className="text-3xl font-black italic uppercase tracking-tighter leading-tight mb-6 group-hover:text-emerald-700 transition-colors text-neutral-900">{post.title}</h4>
                                <p className="text-neutral-400 font-bold italic text-sm leading-relaxed mb-auto opacity-80">{post.excerpt}</p>
                                
                                <div className="mt-12 flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-emerald-600 group-hover:gap-8 transition-all">
                                    Continue Reading <ArrowRight size={22} />
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full py-40 text-center bg-neutral-50 rounded-[5rem] border-2 border-dashed border-neutral-200">
                         <Newspaper size={64} className="mx-auto text-neutral-200 mb-10" />
                         <h4 className="text-4xl font-black italic uppercase tracking-tighter text-neutral-900 mb-4">No stories found</h4>
                         <p className="text-neutral-400 font-bold italic">Try broadening your search or choosing another category.</p>
                    </div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-40 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 blur-[150px] rounded-full z-0 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-white/5 backdrop-blur-2xl p-16 md:p-32 rounded-[6rem] border border-white/10 text-center flex flex-col items-center shadow-6xl">
                <div className="w-32 h-32 bg-emerald-600 rounded-[2.5rem] flex items-center justify-center text-white mb-16 shadow-4xl shadow-emerald-900/50 rotate-12">
                    <Newspaper size={64} />
                </div>
                <h3 className="text-6xl md:text-[7rem] font-black italic uppercase tracking-tighter mb-10 leading-none text-white underline decoration-emerald-500 decoration-8 underline-offset-[-8px]">
                    Pointer <span className="text-emerald-500 underline-none italic">Press.</span>
                </h3>
                <p className="text-2xl text-neutral-400 italic font-bold mb-20 max-w-2xl leading-relaxed">
                    Clinical hygiene insights, sustainability reports, and product pre-launches delivered monthly.
                </p>
                <form className="w-full max-w-3xl flex flex-col md:flex-row gap-6" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Join the green dispatch list..." 
                        className="flex-grow bg-white/5 border-2 border-white/10 rounded-[2.5rem] px-12 py-8 outline-none focus:border-emerald-500 font-bold italic text-white text-xl placeholder:text-neutral-700" 
                    />
                    <button className="bg-emerald-600 text-white px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-emerald-400 hover:text-neutral-950 transition-all shadow-4xl group flex items-center justify-center gap-4">
                        Subscribe Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>
                <p className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Privacy Guaranteed • 100% Nepali Sustainability.</p>
            </div>
        </div>
      </section>
    </div>
  );
}

const NEWSLETTER_TEMPLATE = `
    <section class="newsletter-section">
        <div class="max-w-7xl px-6">
            <div class="newsletter-glass animate-reveal">
                <i data-lucide="newspaper" size="80" style="color: var(--emerald-400); margin-bottom: 3rem;"></i>
                <h3 style="font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -2px; line-height: 1; margin-bottom: 2.5rem;">Subscribe to <br> Pointer Press</h3>
                <p style="color: var(--neutral-400); font-weight: 700; font-style: italic; font-size: 1.25rem; margin-bottom: 4rem; max-width: 600px; margin-left: auto; margin-right: auto;">Get monthly hygiene insights and product updates delivered to your inbox.</p>
                <form id="newsletter-form" style="max-width: 600px; margin: 0 auto; display: flex; gap: 1rem;">
                    <input required type="email" placeholder="Email Address..." style="flex-grow: 1; background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 2rem; padding: 1.5rem 2.5rem; color: white; outline: none; font-weight: 700; font-style: italic;">
                    <button type="submit" class="btn-primary" style="padding: 1.5rem 3rem;">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
`;

const PAGES = {
    home: {
        title: "Home",
        render: () => `
            <section class="relative min-h-[90vh] py-32 bg-grid-subtle">
                <div class="max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 80px; align-items: center;">
                    <div class="animate-reveal">
                        <div class="section-tag"><div class="line"></div><span>Nepal's Pioneer in Natural Hygiene</span></div>
                        <h1 style="font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 900; line-height: 0.85; margin-bottom: 2rem; letter-spacing: -4px; text-transform: uppercase; font-style: italic;">
                            Scientific <br> <span class="text-gradient" style="font-size: clamp(3rem, 6vw, 5rem);">Sustainability.</span>
                        </h1>
                        <p style="font-size: 1.25rem; color: var(--neutral-500); margin-bottom: 3rem; max-width: 500px; line-height: 1.6; font-weight: 700; font-style: italic;">
                            Established in 2021, Crystal Cleanser delivers clinical performance through Japan Industrial Standard formulations.
                        </p>
                        <div style="display: flex; gap: 1.5rem;">
                            <a href="#/products" class="btn-primary">Explore Catalog <i data-lucide="arrow-right"></i></a>
                            <a href="#/about" class="btn-primary" style="background: white; border: 2px solid var(--neutral-100); color: var(--neutral-900); box-shadow: none;">Our Heritage</a>
                        </div>
                    </div>
                    <div class="animate-reveal" style="position: relative;">
                        <div style="border-radius: 4.5rem; overflow: hidden; box-shadow: var(--shadow-6xl); border: 15px solid white;">
                            <img src="../static/homepage_image.png" alt="Banner" style="width: 100%; height: auto; display: block;">
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-32 bg-white">
                <div class="max-w-7xl px-6">
                    <div style="text-align: center; margin-bottom: 6rem;">
                        <div class="section-tag" style="justify-content: center;"><div class="line"></div><span>Foundation Principles</span></div>
                        <h2 style="font-size: clamp(2.5rem, 6vw, 6rem); font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -3px;">Our <span style="color: var(--emerald-600);">Philosophy.</span></h2>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                        ${PHILOSOPHY.map((p, i) => `
                            <div class="philosophy-card animate-reveal" style="animation-delay: ${i * 0.1}s;">
                                <div class="number">0${i+1}</div>
                                <h4 style="font-size: 1.5rem; font-weight: 900; font-style: italic; text-transform: uppercase; margin-bottom: 1rem; color: var(--neutral-900);">${p.title}</h4>
                                <p style="color: var(--neutral-400); font-weight: 700; font-style: italic; font-size: 14px; line-height: 1.6;">${p.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="py-32 bg-neutral-50">
                <div class="max-w-7xl px-6">
                    <div style="text-align: center; margin-bottom: 6rem;">
                        <div class="section-tag" style="justify-content: center;"><div class="line"></div><span>Deployment Scenarios</span></div>
                        <h2 style="font-size: clamp(3rem, 7vw, 7rem); font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -3px; line-height: 1;">Universal <br> <span style="color: var(--emerald-600);">Purity.</span></h2>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                        ${SECTORS.map((s, i) => `
                            <div class="sector-card animate-reveal" style="animation-delay: ${i * 0.1}s;">
                                <div class="icon-wrapper">
                                    <i data-lucide="${s.icon}" size="44" style="color: var(--emerald-600);"></i>
                                </div>
                                <h4 style="font-size: 1.8rem; font-weight: 900; font-style: italic; text-transform: uppercase; margin-bottom: 1.5rem;">${s.name}</h4>
                                <p style="color: var(--neutral-400); font-weight: 700; font-style: italic; font-size: 14px;">${s.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            ${NEWSLETTER_TEMPLATE}
        `
    },
    about: {
        title: "About Us",
        render: () => `
            <section class="py-32 bg-white">
                <div class="max-w-7xl px-6">
                    <div class="section-tag"><div class="line"></div><span>Established 2021</span></div>
                    <h2 style="font-size: clamp(2.5rem, 6vw, 6rem); font-weight: 900; margin-bottom: 3rem; line-height: 0.9; letter-spacing: -3px; text-transform: uppercase; font-style: italic;">
                        Leading <br> Eco-Friendly <br> <span style="color: var(--emerald-600);">Choice.</span>
                    </h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 6rem; align-items: center;">
                        <div class="space-y-12">
                            <div class="philosophy-card">
                                <h4 style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: var(--emerald-600); margin-bottom: 1.5rem; font-style: italic;">Our Heritage</h4>
                                <p style="font-size: 1.25rem; color: var(--neutral-700); font-weight: 800; font-style: italic; line-height: 1.4;">
                                    Crystal Cleanser Company Pvt. Ltd. is a proudly Nepali enterprise committed to manufacturing eco-friendly cleaning solutions that combine powerful performance with environmental responsibility.
                                </p>
                            </div>
                            <div class="philosophy-card" style="background: var(--neutral-50);">
                                <h4 style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: var(--emerald-600); margin-bottom: 1.5rem; font-style: italic;">Our Mission</h4>
                                <p style="font-size: 1rem; color: var(--neutral-500); font-weight: 700; font-style: italic; line-height: 1.6;">
                                    Headquartered in Machhegaun, Chandragiri, Kathmandu, our mission is rooted in sustainability, safety, and innovation. We respond to the growing demand for bio-cleaning alternatives by crafting products that are non-toxic and biodegradable.
                                </p>
                            </div>
                        </div>
                        <div style="border-radius: 4rem; overflow: hidden; box-shadow: var(--shadow-6xl);">
                            <img src="../static/logo.png" style="width: 100%; height: auto; padding: 4rem; background: var(--neutral-50);">
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-32 bg-neutral-900 text-white">
                <div class="max-w-7xl px-6">
                    <div class="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div class="section-tag"><div class="line" style="background: var(--emerald-400);"></div><span style="color: var(--emerald-400);">हाम्रो बारेमा</span></div>
                            <h2 style="font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900; margin-bottom: 3rem; line-height: 0.9; letter-spacing: -3px; text-transform: uppercase; font-style: italic;">
                                क्रिस्टल क्लिन्जर <br> <span style="color: var(--emerald-400);">कम्पनी प्रा. लि.</span>
                            </h2>
                            <p style="font-size: 1.5rem; color: var(--neutral-300); font-weight: 800; font-style: italic; line-height: 1.4; margin-bottom: 2rem;">
                                एक अग्रणी नेपाली कम्पनी, जसले पर्यावरणमैत्री सफाई उत्पादनहरू निर्माण गर्ने प्रतिबद्धता लिएको छ।
                            </p>
                        </div>
                        <div style="display: grid; gap: 2rem;">
                            <div style="background: rgba(255,255,255,0.05); padding: 3rem; border-radius: 3rem; border: 1px solid rgba(255,255,255,0.1);">
                                <h4 style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: var(--emerald-400); margin-bottom: 1.5rem; font-style: italic;">हाम्रो उद्देश्य</h4>
                                <p style="font-size: 1rem; color: var(--neutral-400); font-weight: 700; font-style: italic; line-height: 1.6;">
                                    हाम्रो उद्देश्य सफाईलाई मात्र प्रभावकारी बनाउनु होइन, स्वास्थ्य र वातावरणलाई सुरक्षित राख्दै दिगो समाधान प्रदान गर्नु हो।
                                </p>
                            </div>
                            <div style="background: rgba(255,255,255,0.05); padding: 3rem; border-radius: 3rem; border: 1px solid rgba(255,255,255,0.1);">
                                <h4 style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: var(--emerald-400); margin-bottom: 1.5rem; font-style: italic;">हाम्रो दृष्टि</h4>
                                <p style="font-size: 1rem; color: var(--neutral-400); font-weight: 700; font-style: italic; line-height: 1.6;">
                                    हामी विश्वास गर्छौं कि सफाई उत्पादनहरूले मानव स्वास्थ्य र वातावरणमा नकारात्मक असर पार्नु हुँदैन।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    products: {
        title: "Products",
        render: () => `
            <section class="py-32 bg-white">
                <div class="max-w-7xl px-6">
                    <div class="section-tag"><div class="line"></div><span>Pointer Solutions</span></div>
                    <div style="display: flex; flex-direction: column; md:flex-row; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 5rem;">
                        <h2 style="font-size: clamp(2.5rem, 6vw, 6rem); font-weight: 900; line-height: 0.9; letter-spacing: -3px; text-transform: uppercase; font-style: italic;">
                            Hygiene <br> <span style="color: var(--emerald-600);">Catalogue.</span>
                        </h2>
                        <div style="width: 100%; max-width: 400px; position: relative;">
                            <input type="text" id="product-search" placeholder="Search solutions..." style="width: 100%; padding: 1.5rem 2.5rem; border-radius: 2rem; border: 2px solid var(--neutral-100); outline: none; font-weight: 700; font-style: italic; font-size: 14px; background: white;">
                            <i data-lucide="search" style="position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); color: var(--neutral-400);" size="20"></i>
                        </div>
                    </div>
                    
                    <div id="product-list">
                        ${PRODUCTS.map(p => `
                            <div class="product-card animate-reveal">
                                <div style="width: 300px; height: 350px; background: var(--neutral-50); border-radius: 3rem; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 2rem; flex-shrink: 0;">
                                    <img src="${p.img}" alt="${p.title}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                                </div>
                                <div style="flex-grow: 1;">
                                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem;">
                                        <span style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: var(--emerald-600); font-style: italic;">${p.category}</span>
                                        <span style="font-size: 8px; font-weight: 900; background: var(--neutral-900); color: white; padding: 4px 8px; border-radius: 4px; letter-spacing: 0.2em; text-transform: uppercase;">${p.standard}</span>
                                    </div>
                                    <h4 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 1.5rem; font-style: italic; letter-spacing: -2px; text-transform: uppercase; line-height: 1.1;">${p.title}</h4>
                                    <p style="color: var(--neutral-400); font-weight: 700; font-style: italic; line-height: 1.6; margin-bottom: 2rem;">${p.desc}</p>
                                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; border-top: 1px solid var(--border-subtle); padding-top: 2rem; margin-bottom: 2rem;">
                                        <div>
                                            <h5 style="font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Key Ingredients</h5>
                                            <p style="font-size: 11px; font-weight: 700; color: var(--text-muted); font-style: italic;">${p.ingredients}</p>
                                        </div>
                                        <div>
                                            <h5 style="font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px; color: var(--emerald-600);">Safety</h5>
                                            <p style="font-size: 11px; font-weight: 700; color: var(--emerald-600); font-style: italic;">${p.safety}</p>
                                        </div>
                                    </div>
                                    <button class="view-info-btn btn-primary" data-index="${PRODUCTS.indexOf(p)}" style="padding: 1.25rem 2rem; border-radius: 1.5rem; font-size: 10px;">Full Specifications <i data-lucide="info"></i></button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `
    },
    news: {
        title: "News",
        render: () => `
            <section class="py-32 bg-white">
                <div class="max-w-7xl px-6">
                    <div class="section-tag"><div class="line"></div><span>Daily Updates</span></div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 6rem;">
                        <h2 style="font-size: clamp(2.5rem, 6vw, 6rem); font-weight: 900; line-height: 0.8; letter-spacing: -3px; text-transform: uppercase; font-style: italic;">
                            News & <br> <span style="color: var(--emerald-600);">Dispatches.</span>
                        </h2>
                        <div style="background: var(--emerald-50); padding: 2rem 3rem; border-radius: 2.5rem; max-width: 420px;">
                            <p style="font-size: 14px; font-weight: 700; font-style: italic; color: var(--neutral-600);">As a manufacturer, we are driven by great enthusiasm to make a sustainable lifestyle in Nepal through Pointer’s commitment to sustainability.</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; margin-bottom: 10rem;">
                        ${NEWS_ITEMS.map(item => `
                            <div class="animate-reveal">
                                <div style="aspect-ratio: 16/10; border-radius: 3.5rem; overflow: hidden; margin-bottom: 2rem; border: 4px solid white; box-shadow: var(--shadow-xl);">
                                    <img src="${item.img}" style="width: 100%; height: 100%; object-fit: cover;">
                                </div>
                                <div style="display: flex; gap: 1rem; font-size: 10px; font-weight: 900; text-transform: uppercase; color: var(--neutral-400); margin-bottom: 1rem; font-style: italic;">
                                    <span>${item.date}</span> • <span>${item.category}</span>
                                </div>
                                <h4 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; line-height: 1.2;">${item.title}</h4>
                                <p style="color: var(--neutral-400); font-weight: 700; font-style: italic; font-size: 14px; margin-bottom: 2rem;">${item.desc}</p>
                                <a href="#" style="color: var(--emerald-600); font-weight: 900; text-transform: uppercase; font-size: 11px; letter-spacing: 0.2em; text-decoration: none; display: flex; align-items: center; gap: 8px;">Read Article <i data-lucide="arrow-right" size="16"></i></a>
                            </div>
                        `).join('')}
                    </div>

                    <div style="margin-bottom: 6rem;">
                        <div class="section-tag"><div class="line"></div><span>Media Showcase</span></div>
                        <h3 style="font-size: 3.5rem; font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -2px;">Pointer Video Gallery</h3>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 3rem;">
                        ${VIDEO_ITEMS.map(v => `
                            <div class="video-card animate-reveal">
                                <video controls preload="none">
                                    <source src="${v.src}" type="video/mp4">
                                </video>
                                <div style="padding: 2.5rem;">
                                    <h4 style="font-size: 1.5rem; font-weight: 900; text-transform: uppercase; font-style: italic;">${v.title}</h4>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
            ${NEWSLETTER_TEMPLATE}
        `
    },
    blog: {
        title: "Blog",
        render: () => `
            <section class="py-32 bg-white">
                <div class="max-w-7xl px-6">
                    <div class="section-tag"><div class="line"></div><span>Featured Posts</span></div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 6rem;">
                        <h2 style="font-size: clamp(2.5rem, 6vw, 6rem); font-weight: 900; line-height: 0.8; letter-spacing: -3px; text-transform: uppercase; font-style: italic;">
                            The <br> <span style="color: var(--emerald-600);">Blog.</span>
                        </h2>
                        <div style="background: var(--neutral-50); padding: 2rem 3rem; border-radius: 2.5rem; max-width: 320px;">
                            <p style="font-size: 14px; font-weight: 700; font-style: italic; color: var(--neutral-600);">Insights into a healthier, sustainable home for your family.</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; margin-bottom: 10rem;">
                        ${BLOG_POSTS.map(item => `
                            <div class="animate-reveal">
                                <div style="aspect-ratio: 16/10; border-radius: 3.5rem; overflow: hidden; margin-bottom: 2rem; border: 4px solid white; box-shadow: var(--shadow-xl);">
                                    <img src="${item.img}" style="width: 100%; height: 100%; object-fit: cover;">
                                </div>
                                <div style="display: flex; gap: 1rem; font-size: 10px; font-weight: 900; text-transform: uppercase; color: var(--neutral-400); margin-bottom: 1rem; font-style: italic;">
                                    <span>${item.date}</span> • <span>${item.category}</span>
                                </div>
                                <h4 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; line-height: 1.2;">${item.title}</h4>
                                <p style="color: var(--neutral-400); font-weight: 700; font-style: italic; font-size: 14px; margin-bottom: 2rem;">${item.excerpt}</p>
                                <a href="#" style="color: var(--emerald-600); font-weight: 900; text-transform: uppercase; font-size: 11px; letter-spacing: 0.2em; text-decoration: none; display: flex; align-items: center; gap: 8px;">Read Article <i data-lucide="arrow-right" size="16"></i></a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
            ${NEWSLETTER_TEMPLATE}
        `
    },
    faq: {
        title: "FAQ",
        render: () => `
            <section class="py-32 bg-white">
                <div class="max-w-5xl mx-auto px-6">
                    <div class="section-tag" style="justify-content: center;"><div class="line"></div><span>Support Center</span></div>
                    <h2 style="font-size: clamp(2.5rem, 6vw, 6rem); font-weight: 900; margin-bottom: 5rem; line-height: 0.8; letter-spacing: -3px; text-transform: uppercase; font-style: italic; text-align: center;">
                        Common <br> <span style="color: var(--emerald-600);">Questions.</span>
                    </h2>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        ${FAQS.map(f => `
                            <div style="background: white; border: 1px solid var(--neutral-100); border-radius: 2.5rem; padding: 2.5rem; box-shadow: var(--shadow-sm);">
                                <h4 style="font-size: 1.4rem; font-weight: 900; font-style: italic; text-transform: uppercase; margin-bottom: 1.5rem; color: var(--neutral-900);">${f.q}</h4>
                                <p style="color: var(--neutral-500); font-weight: 700; font-style: italic; line-height: 1.6;">${f.a}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `
    },
    contact: {
        title: "Contact",
        render: () => `
            <section class="py-32 bg-neutral-900 text-white">
                <div class="max-w-7xl px-6">
                    <div class="section-tag"><div class="line" style="background: var(--emerald-400);"></div><span style="color: var(--emerald-400);">Reach Pointer</span></div>
                    <h2 style="font-size: clamp(3rem, 9vw, 9rem); font-weight: 900; line-height: 0.85; margin-bottom: 5rem; letter-spacing: -4px; text-transform: uppercase; font-style: italic;">
                        Enter <br> the <span style="color: var(--emerald-400);">Green.</span>
                    </h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 80px;">
                        <div style="display: flex; flex-direction: column; gap: 4rem;">
                            <div style="display: flex; gap: 3rem; align-items: start;">
                                <div style="width: 6rem; height: 6rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 2.5rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <i data-lucide="map-pin" size="36" style="color: var(--emerald-400);"></i>
                                </div>
                                <div>
                                    <p style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: var(--neutral-500); margin-bottom: 0.75rem; font-style: italic;">Plant & Address</p>
                                    <p style="font-size: 1.8rem; font-weight: 900; font-style: italic; letter-spacing: 0.1em; line-height: 1.2;">Machhegaun-9, Chandragiri, Kathmandu, Nepal</p>
                                </div>
                            </div>
                            <div style="display: flex; gap: 3rem; align-items: start;">
                                <div style="width: 6rem; height: 6rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 2.5rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <i data-lucide="phone" size="36" style="color: var(--emerald-400);"></i>
                                </div>
                                <div>
                                    <p style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: var(--neutral-500); margin-bottom: 0.75rem; font-style: italic;">Support Lines</p>
                                    <p style="font-size: 1.8rem; font-weight: 900; font-style: italic; letter-spacing: 0.1em; line-height: 1.2;">(+977) 015904130</p>
                                    <p style="font-size: 1.8rem; font-weight: 900; font-style: italic; letter-spacing: 0.1em; line-height: 1.2;">(+977) 9864160647</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="contact-form-container" style="background: white; border-radius: 5rem; padding: 4rem; color: var(--neutral-900); box-shadow: var(--shadow-6xl);">
                            <h3 style="font-size: 3rem; font-weight: 900; margin-bottom: 4rem; text-transform: uppercase; border-left: 12px solid var(--emerald-600); padding-left: 2.5rem; font-style: italic;">Business <br> Inquiry</h3>
                            <form id="contact-form" style="display: flex; flex-direction: column; gap: 2rem;">
                                <input required type="text" placeholder="Name/Company" style="padding: 1.5rem 2rem; border-radius: 2rem; border: 2px solid var(--neutral-50); background: var(--neutral-50); outline: none; font-weight: 700; font-style: italic;">
                                <input required type="email" placeholder="name@company.com" style="padding: 1.5rem 2rem; border-radius: 2rem; border: 2px solid var(--neutral-50); background: var(--neutral-50); outline: none; font-weight: 700; font-style: italic;">
                                <select style="padding: 1.5rem 2rem; border-radius: 2rem; border: 2px solid var(--neutral-50); background: var(--neutral-50); outline: none; font-weight: 900; font-style: italic; text-transform: uppercase; font-size: 12px;">
                                    <option>Household Pointer Range</option>
                                    <option>Institutional (Hospital/Hotel)</option>
                                    <option>Industrial Plant Cleaning</option>
                                    <option>Regional Distribution Request</option>
                                </select>
                                <textarea required rows="4" placeholder="Tell us about your cleaning needs..." style="padding: 1.5rem 2rem; border-radius: 2rem; border: 2px solid var(--neutral-50); background: var(--neutral-50); outline: none; font-weight: 700; font-style: italic; resize: none;"></textarea>
                                <button type="submit" class="btn-primary" style="width: 100%; border: none; font-size: 12px; justify-content: center; padding: 2rem;">Dispatch Request <i data-lucide="arrow-right" size="32"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    download: {
        title: "Downloads",
        render: () => `
            <section class="py-32 bg-white">
                <div class="max-w-7xl px-6">
                    <div class="section-tag"><div class="line"></div><span>Resources</span></div>
                    <h2 style="font-size: clamp(2.5rem, 6vw, 6rem); font-weight: 900; margin-bottom: 5rem; line-height: 0.8; letter-spacing: -3px; text-transform: uppercase; font-style: italic;">
                        Download <br> <span style="color: var(--emerald-600);">Central.</span>
                    </h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
                        ${DOWNLOADS.map(d => `
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 3rem; background: var(--neutral-50); border-radius: 3rem; border: 1px solid var(--neutral-100); transition: all 0.3s;" onmouseover="this.style.background='white'; this.style.boxShadow='var(--shadow-xl)'" onmouseout="this.style.background='var(--neutral-50)'; this.style.boxShadow='none'">
                                <div style="display: flex; align-items: center; gap: 2rem;">
                                    <div style="width: 5.5rem; height: 5.5rem; background: white; border-radius: 2rem; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm); border: 1px solid var(--neutral-100);">
                                        <i data-lucide="file-text" size="32" style="color: var(--emerald-600);"></i>
                                    </div>
                                    <div>
                                        <h4 style="font-size: 1.6rem; font-weight: 900; font-style: italic; text-transform: uppercase; margin-bottom: 0.5rem;">${d.title}</h4>
                                        <p style="font-size: 10px; font-weight: 900; color: var(--neutral-400); text-transform: uppercase; letter-spacing: 0.15em;">${d.type} • ${d.size} • 2024</p>
                                    </div>
                                </div>
                                <button class="btn-primary" style="padding: 1.25rem 2rem; border-radius: 1.5rem; font-size: 10px;">Download <i data-lucide="download"></i></button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `
    }
};

const PRODUCTS = [
    {
        title: "Pointer Glass & Furniture Cleaner",
        desc: "Streak-free clarity for windows and mirrors. Advanced Japanese tech formula for restorative furniture shine.",
        category: "Household",
        img: "../static/Products/Pointer Furniture Polish.png",
        standard: "JIS K-3362",
        ingredients: "Biodegradable Non-Ionic Surfactants, Organic Solvents, Pure Aqua.",
        safety: "Non-Toxic, pH Balanced, Skin Friendly."
    },
    {
        title: "Pointer Floor Cleaner",
        desc: "Safe for tiles to timber. Uses organic chelating agents to lift minerals and grime deep from the surface.",
        category: "Household",
        img: "../static/Products/Pointer Floor Cleaner.png",
        standard: "JIS K-3362",
        ingredients: "Organic Chelating Agents, Anionic Surfactants (Plant Derived), Essential Oils.",
        safety: "Septic Safe, Pet Friendly, Child Safe."
    },
    {
        title: "Pointer Toilet Cleaner",
        desc: "Non-toxic, safe for septic systems. Powerful non-ionic surfactant carbonate formula for hygienic purity.",
        category: "Household",
        img: "../static/Products/Pointer Toilet Cleaner.png",
        standard: "JIS K-3362",
        ingredients: "Carbonate Formula, Non-Ionic Surfactants, Natural Disinfectants.",
        safety: "Abrasive-Free, Chlorine-Free, Septic Safe."
    },
    {
        title: "Pointer Chimney Cleaner",
        desc: "Heavy-duty degreasing for kitchen exhausts. Toughest grease removal without using abrasive, harsh acids.",
        category: "Institutional",
        img: "../static/Products/Pointer Chimney Cleaner.png",
        standard: "JIS K-3362",
        ingredients: "Proprietary Degreasing Base, Alkaline Boosters (Non-Corrosive).",
        safety: "Acid-Free, Non-Flammable, Industrial Strength."
    },
    {
        title: "Pointer Multi-Purpose Cleaner",
        desc: "Adaptable from countertops to car interiors. The ultimate one-bottle solution for everyday hygiene.",
        category: "Household",
        img: "../static/Products/Pointer Multi-Purpose Cleaner.png",
        standard: "JIS K-3362",
        ingredients: "Bio-Based Solution, Multi-Matrix Surfactants.",
        safety: "Multi-Surface Safe, Non-Toxic, Zero Residue."
    },
    {
        title: "Pointer Furniture Polish",
        desc: "Restores wood surfaces to their original brilliance. Deep nourishment and long-lasting protection.",
        category: "Premium",
        img: "../static/Products/Pointer Furniture Polish.png",
        standard: "JIS K-3362",
        ingredients: "Natural Carnauba Emulsion, Polymer Protectors, Fragrance.",
        safety: "Wood-Safe, Non-Greasy Finish."
    },
    {
        title: "Pointer Stainless Steel Polish",
        desc: "Restores brilliance to kitchen appliances without harsh abrasives. Leaves a protective streak-free coat.",
        category: "Professional",
        img: "../static/Products/Pointer Multi-Purpose Cleaner.png",
        standard: "JIS K-3362",
        ingredients: "Metallic Surface Catalysts, Protective Film Agents.",
        safety: "Non-Abrasive, Food-Contact Surface Safe."
    },
    {
        title: "Pointer Windshield Fluid",
        desc: "Automotive safety and clarity. Protective coating that repels rain and dirt for clear vision while driving.",
        category: "Automotive",
        img: "../static/Products/Pointer Windshield Washer Fluid.png",
        standard: "JIS K-3362",
        ingredients: "Hydrophobic Agents, Anti-Static Formulation, Aqua.",
        safety: "Rubber-Safe, Paint-Safe, Low VOC."
    },
    {
        title: "Pointer Dishwasher Formula",
        desc: "Eco-friendly degreasing that is gentle on skin. Tough on food residue, kind to the environment. (Availability Soon)",
        category: "Household",
        img: "../static/Products/Pointer Floor Cleaner.png",
        standard: "JIS K-3362",
        ingredients: "Bio-Degradable Lipid Breakers, Lemon Extract, Glycerin.",
        safety: "Gentle on Hands, Phosphate-Free, Nitrate-Free."
    }
];

const NEWS_ITEMS = [
    { title: "Crystal Cleanser expands in Kathmandu Valley", category: "Corporate", date: "May 10, 2024", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800", desc: "Opening new distribution hubs to meet the increasing demand for organic cleaning solutions." },
    { title: "Eco-Friendly surfactants: The future of Nepal hygiene", category: "Innovation", date: "April 28, 2024", img: "https://images.unsplash.com/photo-1584622781514-433f89ce8a9a?auto=format&fit=crop&q=80&w=800", desc: "Why non-ionic surfactants are superior to traditional harsh acids for both ethics and efficacy." },
    { title: "Hospitality partnership with leading hotels", category: "Partnership", date: "April 15, 2024", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800", desc: "Standardizing hygiene protocols across luxury mountain retreats with Pointer solutions." }
];

const BLOG_POSTS = [
    {
        title: "Why Organic Cleaning Matters: A Healthier Home Starts Here",
        category: "Health",
        excerpt: "Discover how non-toxic, biodegradable ingredients protect your family and the planet—without compromising on shine.",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
        date: "May 10, 2024"
    },
    {
        title: "Glass & Furniture Cleaner: Clarity You Can Feel",
        category: "Tips",
        excerpt: "Tips for streak-free windows, polished wood, and how our Japanese technology elevates everyday surfaces.",
        img: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800",
        date: "May 08, 2024"
    },
    {
        title: "The Dish Dilemma: Eco-Friendly Degreasing That Works",
        category: "Eco-Friendly",
        excerpt: "Behind the bubbles—how our dishwasher formula tackles grease while being gentle on your skin and the environment.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        date: "May 05, 2024"
    },
    {
        title: "Floors That Speak Clean: From Tiles to Timber",
        category: "Guide",
        excerpt: "A guide to choosing the right floor cleaner for different surfaces, plus a look at our organic chelating agents.",
        img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
        date: "May 02, 2024"
    },
    {
        title: "Multipurpose Magic: One Bottle, Endless Possibilities",
        category: "Lifestyle",
        excerpt: "From countertops to car interiors—see how our multipurpose cleaner adapts to your lifestyle.",
        img: "https://images.unsplash.com/photo-1566050631622-c43ecf45388c?auto=format&fit=crop&q=80&w=800",
        date: "April 28, 2024"
    },
    {
        title: "Toilet Cleaner That Doesn’t Toxify",
        category: "Safety",
        excerpt: "Break down the myths of harsh toilet cleaners and explore our non-ionic surfactant carbonate formula.",
        img: "https://images.unsplash.com/photo-1584622781514-433f89ce8a9a?auto=format&fit=crop&q=80&w=800",
        date: "April 25, 2024"
    },
    {
        title: "Steel Polish That Shines Without Harm",
        category: "Shine",
        excerpt: "Restore brilliance to your kitchen and appliances with our safe, effective steel polish.",
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
        date: "April 20, 2024"
    }
];

const PHILOSOPHY = [
    { title: "Trusted Choice", desc: "Preferred by leading institutions and households across Nepal." },
    { title: "100% Eco-Friendly", desc: "Biodegradable products designed to eliminate environmental pollution." },
    { title: "Safety First", desc: "Non-toxic formulations safe for children, pets, and sensitive environments." },
    { title: "Locally Made", desc: "Supporting the Nepali economy through local manufacturing and natural ingredients." }
];

const SECTORS = [
    { name: "Healthcare", icon: "stethoscope", desc: "Clinically safe for hospitals & clinics." },
    { name: "Hospitality", icon: "building-2", desc: "Premium standards for hotels & restaurants." },
    { name: "Education", icon: "graduation-cap", desc: "Non-toxic safety for schools & nurseries." },
    { name: "Residential", icon: "home", desc: "Gentle purity for your sanctuary." }
];

const FAQS = [
    { q: "What makes Crystal Cleanser products eco-friendly?", a: "All our products are 100% biodegradable, non-toxic, and made from natural ingredients. They are safe for children, pets, and sensitive environments.", category: "Eco-Friendly" },
    { q: "What is the Pointer Brand?", a: "Pointer is our flagship brand offering a wide range of organic cleaning solutions designed for hygiene and environmental safety.", category: "Brand" },
    { q: "What types of products are available under the Pointer Brand?", a: "Our line includes: Glass and Furniture Cleaner, Floor Cleaner, Toilet Cleaner, Chimney Cleaner, Multi-Purpose Cleaner, Furniture Polish, Steel Polish, and Windshield Fluid.", category: "Products" },
    { q: "In what sizes are your products available?", a: "We offer 500ml bottles for household use, as well as 5L and 50L containers for institutional, industrial, and commercial needs.", category: "Sizes" },
    { q: "Who uses Crystal Cleanser products?", a: "Our products are trusted across Nepal’s leading healthcare, hospitality, education, and commercial sectors.", category: "Users" },
    { q: "Are your products safe for everyday use?", a: "Yes. Made from natural, non-toxic ingredients, our cleaners are safe for daily use in homes, schools, and hospitals.", category: "Safety" },
    { q: "Where are Crystal Cleanser products manufactured?", a: "All products are locally manufactured in Nepal, supporting sustainable practices and the local economy.", category: "Manufacturing" }
];

const DOWNLOADS = [
    { title: "Crystal Cleanser Corporate Profile", size: "4.2 MB", type: "PDF" },
    { title: "Pointer Product Catalog 2024", size: "12.8 MB", type: "PDF" },
    { title: "Material Safety Data Sheets (MSDS)", size: "8.5 MB", type: "ZIP" },
    { title: "Technical Lab Results (JIS K-3362)", size: "1.2 MB", type: "PDF" }
];

const VIDEO_ITEMS = [
    { title: 'Safe Home Usage', src: '../news and publication/1_Pointer Animated Safe Home Usage Promo.mp4' },
    { title: 'Product Lineup Intro', src: '../news and publication/2_Pointer Product Lineup Intro.mp4' },
    { title: 'Brand Promo Intro', src: '../news and publication/3_Pointer Animated Promo Intro.mp4' },
    { title: 'Chimney Cleaner Demo', src: '../news and publication/4_Pointer Chimney Cleaner Promo.mp4' },
    { title: 'Toilet Cleaner Demo', src: '../news and publication/5_Pointer Toilet Cleaner Promo.mp4' },
    { title: 'Mascot Motto Video', src: '../news and publication/6_Pointer Animated Mascot Motto Delivery Promo.mp4' },
    { title: 'Glass & Furniture Promo', src: '../news and publication/7_Pointer Glass and Furniture Cleaner Promo.mp4' }
];

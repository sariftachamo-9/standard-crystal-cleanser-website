document.addEventListener('DOMContentLoaded', () => {
    const pageContent = document.getElementById('page-content');
    const navbar = document.getElementById('navbar');
    
    // Theme Logic
    initTheme();
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-reveal');
                entry.target.style.opacity = '1';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Routing Engine
    const navigate = () => {
        const hash = window.location.hash || '#/';
        const pageKey = hash.replace('#/', '') || 'home';
        
        const page = PAGES[pageKey] || PAGES['home'];
        
        // Initial fade out
        pageContent.style.opacity = '0';
        pageContent.style.transform = 'translateY(10px)';
        pageContent.style.transition = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
        
        setTimeout(() => {
            pageContent.innerHTML = page.render();
            document.title = `${page.title} | Crystal Cleanser`;
            
            // Re-initialize icons
            if (window.lucide) {
                window.lucide.createIcons();
            }
            
            // Initialize scroll animations for new content
            document.querySelectorAll('.animate-reveal').forEach(el => {
                el.style.opacity = '0';
                revealObserver.observe(el);
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Fade in
            pageContent.style.opacity = '1';
            pageContent.style.transform = 'translateY(0)';
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(link => {
                const isActive = link.getAttribute('href') === hash;
                link.classList.toggle('active', isActive);
            });

            // Handle page specific logic
            initForms();
            if (pageKey === 'products') {
                initSearch();
                initModal();
            }
        }, 300);
    };

    // Scroll handling for Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hash change listener
    window.addEventListener('hashchange', navigate);

    // Initial navigation
    navigate();

    // Form logic
    function initForms() {
        const contactForm = document.getElementById('contact-form');
        const newsletterForm = document.getElementById('newsletter-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const container = document.getElementById('contact-form-container');
                container.innerHTML = `
                    <div style="text-align: center; padding: 5rem 0;" class="animate-reveal">
                        <div style="width: 8rem; height: 8rem; background: var(--emerald-50); color: var(--emerald-600); border-radius: 3rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 2.5rem; border: 1px solid var(--emerald-100);">
                            <i data-lucide="check-circle-2" style="width: 64px; height: 64px;"></i>
                        </div>
                        <h3 style="font-size: 2.5rem; font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -1px; margin-bottom: 1.5rem;">Dispatch Successful</h3>
                        <p style="color: var(--neutral-400); font-weight: 700; font-style: italic; font-size: 1.125rem; max-width: 320px; margin: 0 auto 3rem;">Your inquiry has been received. Our technical support team will contact you within 24 hours.</p>
                        <button onclick="location.reload()" style="background: none; border: none; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: var(--emerald-600); cursor: pointer;">Send Another Request</button>
                    </div>
                `;
                window.lucide.createIcons();
            });
        }

        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const container = newsletterForm.parentElement;
                container.innerHTML = `
                    <div class="animate-reveal" style="padding: 2rem 0;">
                        <i data-lucide="check-circle-2" size="80" style="color: var(--emerald-400); margin-bottom: 3rem;"></i>
                        <h3 style="font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; font-style: italic; text-transform: uppercase; color: white; margin-bottom: 1.5rem;">Welcome to Pointer Press</h3>
                        <p style="color: var(--neutral-400); font-weight: 700; font-style: italic;">You've successfully joined our dispatch list.</p>
                    </div>
                `;
                window.lucide.createIcons();
            });
        }
    }

    function initSearch() {
        const searchInput = document.getElementById('product-search');
        const productList = document.getElementById('product-list');
        if (!searchInput || !productList) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const cards = productList.querySelectorAll('.product-card');
            
            cards.forEach(card => {
                const title = card.querySelector('h4').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                const isMatch = title.includes(query) || desc.includes(query);
                
                if (isMatch) {
                    card.style.display = 'flex';
                    card.style.animation = 'reveal 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    function initModal() {
        const modal = document.getElementById('product-modal');
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.getElementById('close-modal');
        const viewButtons = document.querySelectorAll('.view-info-btn');

        const openModal = (index) => {
            const p = PRODUCTS[index];
            modalBody.innerHTML = `
                <div style="display: grid; md:grid-cols-2; gap: 4rem; padding: 4rem;">
                    <div style="background: var(--bg-alt); border-radius: 3rem; padding: 3rem; display: flex; align-items: center; justify-content: center;">
                        <img src="${p.img}" style="max-width: 100%; max-height: 400px; object-fit: contain;">
                    </div>
                    <div>
                        <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                            <span style="font-size: 10px; font-weight: 900; background: var(--emerald-600); color: white; padding: 6px 12px; border-radius: 6px; text-transform: uppercase;">${p.category}</span>
                            <span style="font-size: 10px; font-weight: 900; border: 1px solid var(--border-subtle); color: var(--text-muted); padding: 6px 12px; border-radius: 6px; text-transform: uppercase;">${p.standard}</span>
                        </div>
                        <h2 style="font-size: 3.5rem; font-weight: 900; font-style: italic; text-transform: uppercase; margin-bottom: 2rem; line-height: 1;">${p.title}</h2>
                        <p style="color: var(--text-muted); font-weight: 700; font-style: italic; line-height: 1.6; margin-bottom: 4rem;">${p.desc}</p>
                        
                        <div style="display: grid; gap: 2rem;">
                            <div style="padding: 2rem; background: var(--bg-alt); border-radius: 2rem; border-left: 8px solid var(--emerald-600);">
                                <h5 style="font-size: 10px; font-weight: 900; text-transform: uppercase; margin-bottom: 1rem;">Clinical Ingredients</h5>
                                <p style="font-size: 13px; font-weight: 700; color: var(--text-muted); font-style: italic;">${p.ingredients}</p>
                            </div>
                            <div style="padding: 2rem; background: var(--bg-alt); border-radius: 2rem; border-left: 8px solid var(--emerald-400);">
                                <h5 style="font-size: 10px; font-weight: 900; text-transform: uppercase; margin-bottom: 1rem;">Safety & Toxicity</h5>
                                <p style="font-size: 13px; font-weight: 700; color: var(--text-muted); font-style: italic;">${p.safety}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            window.lucide.createIcons();
        };

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        viewButtons.forEach(btn => {
            btn.addEventListener('click', () => openModal(btn.dataset.index));
        });

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    function initTheme() {
        const toggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            body.classList.add('dark');
            if (toggle) toggle.innerHTML = '<i data-lucide="sun" size="20"></i>';
        }

        if (toggle) {
            toggle.addEventListener('click', () => {
                body.classList.toggle('dark');
                const isDark = body.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                toggle.innerHTML = isDark ? '<i data-lucide="sun" size="20"></i>' : '<i data-lucide="moon" size="20"></i>';
                window.lucide.createIcons();
            });
        }
    }
});


        // Translations
        const translations = {
            ru: {
                headerTickets: 'Билеты',
                heroBtn: 'Купить билеты',
                aboutTitle: 'О ШОУ',
                aboutText1: 'Данияр Джумадилов — юморист из Казахстана, известный живым общением с залом, сильной импровизацией и умным, понятным юмором.',
                aboutText2: 'Тур AMERICA — это стендап-шоу на русском языке, где юмор и живая музыка объединяются в одном выступлении.',
                aboutText3: 'В программе — наблюдения о жизни, путешествиях и людях, неожиданные импровизации и музыкальные моменты, которые делают каждый вечер уникальным и живым.',
                tourDatesTitle: 'ДАТЫ ТУРА',
                ticketsBtn: 'Tickets',
                faqQ1: 'На каком языке шоу?',
                faqA1: 'Шоу проходит на русском языке.',
                faqQ2: 'Есть ли возрастные ограничения?',
                faA2: 'Да, 18+.',
                faqQ3: 'Можно ли вернуть билеты?',
                faqA3: 'Билеты не подлежат возврату. Tickets are non-refundable. All sales are final.',
                footerText: 'Для площадок и сотрудничества:'
            },
            en: {
                headerTickets: 'Tickets',
                heroBtn: 'Get Tickets',
                aboutTitle: 'ABOUT THE SHOW',
                aboutText1: 'Daniyar Dzhumadilov is a comedian from Kazakhstan known for his live audience interaction, strong improvisation skills, and smart, relatable humor.',
                aboutText2: 'The AMERICA tour is a stand-up show in Russian where comedy and live music come together in one performance.',
                aboutText3: 'The program features observations about life, travel, and people, unexpected improvisations, and musical moments that make each evening unique and lively.',
                tourDatesTitle: 'TOUR DATES',
                ticketsBtn: 'Tickets',
                faqQ1: 'What language is the show in?',
                faqA1: 'The show is performed in Russian.',
                faqQ2: 'Is there an age restriction?',
                faqA2: 'Yes, 18+.',
                faqQ3: 'Can I get a refund?',
                faqA3: 'Tickets are non-refundable. All sales are final.',
                footerText: 'For venues and partnerships:'
            }
        };

        // Language switcher
        let currentLang = localStorage.getItem('lang') || 'ru';

        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;

            // Update active button state
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });

            // Update all translatable elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });

            // Update meta description
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.content = lang === 'ru' 
                    ? 'Стендап-тур Данияра Джумадилова AMERICA по городам США и Канады. Май 2026. Шоу на русском языке. Купить билеты.'
                    : 'Daniyar Dzhumadilov AMERICA Stand-Up Tour across USA and Canada. May 2026. Show in Russian. Get tickets.';
            }
        }

        // Initialize language
        document.addEventListener('DOMContentLoaded', () => {
            setLanguage(currentLang);
        });

        // Language button click handlers
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                if (lang !== currentLang) {
                    setLanguage(lang);
                }
            });
        });

        // Sticky header visibility on scroll
        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
            lastScrollY = window.scrollY;
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.about-container, .video-container').forEach(el => {
            observer.observe(el);
        });

        // Staggered animation for date items
        const dateItems = document.querySelectorAll('.date-item');
        const dateObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 50);
                }
            });
        }, observerOptions);

        dateItems.forEach(item => dateObserver.observe(item));

        // FAQ items observer
        const faqItems = document.querySelectorAll('.faq-item');
        const faqObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, observerOptions);

        faqItems.forEach(item => faqObserver.observe(item));

        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all items
                document.querySelectorAll('.faq-item').forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
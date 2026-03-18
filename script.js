const translations = {
    ru: {
        headerTickets: 'Билеты',
        heroKicker: 'Официальный сайт тура по США и Канаде',
        heroBtn: 'Купить билеты',
        heroNote: 'Даты, билеты, видео и ответы на частые вопросы собраны на этой странице.',
        aboutTitle: 'О ШОУ',
        aboutText1: 'Данияр Джумадилов — юморист из Казахстана, известный живым общением с залом, сильной импровизацией и умным, понятным юмором.',
        aboutText2: 'Тур AMERICA — это стендап-шоу на русском языке, где юмор и живая музыка объединяются в одном выступлении.',
        aboutText3: 'В программе — наблюдения о жизни, путешествиях и людях, неожиданные импровизации и музыкальные моменты, которые делают каждый вечер уникальным и живым.',
        officialTitle: 'ОФИЦИАЛЬНЫЙ САЙТ',
        officialText: 'Этот сайт является официальным сайтом Данияра Джумадилова. Биография, текущие туры, даты выступлений и официальная информация об артисте публикуются здесь.',
        officialBioLink: 'Биография артиста',
        tourDatesTitle: 'ДАТЫ ТУРА',
        tourSummary: 'Официальные даты тура AMERICA 2026: Philadelphia, Washington, DC, Atlanta, Miami, Orlando, Boston, Montreal, Toronto, New York, Chicago, Sacramento, Vancouver, Seattle, Los Angeles и Hawaii.',
        tourNote: 'Актуальные ссылки на билеты публикуются на этой странице.',
        ticketsBtn: 'Tickets',
        videoTitle: 'ВИДЕО',
        videoText: 'Фрагмент выступления Данияра Джумадилова, чтобы зрители и поисковые системы сразу понимали формат шоу.',
        faqTitle: 'FAQ',
        faqQ1: 'На каком языке шоу?',
        faqA1: 'Шоу проходит на русском языке.',
        faqQ2: 'Есть ли возрастные ограничения?',
        faqA2: 'Да, 18+.',
        faqQ3: 'Можно ли вернуть билеты?',
        faqA3: 'Билеты не подлежат возврату. Tickets are non-refundable. All sales are final.',
        faqQ4: 'Кто такой Данияр Джумадилов?',
        faqA4: 'Данияр Джумадилов (Daniyar Dzhumadilov) — комик и артист из Казахстана. Выступает на русском языке, известен живым общением с залом, импровизацией и авторскими наблюдениями о жизни. В английском написании также встречается как Daniyar Jumadilov и Daniyar Zhumadilov.',
        faqQ5: 'В каких городах пройдёт тур AMERICA 2026?',
        faqA5: 'Philadelphia, Washington DC, Atlanta, Miami, Orlando, Boston, Montreal, Toronto, New York, Chicago, Sacramento, Vancouver, Seattle, Los Angeles, Hawaii — май 2026.',
        footerText: 'Для площадок и сотрудничества:'
    },
    en: {
        headerTickets: 'Tickets',
        heroKicker: 'Official website of the USA and Canada tour',
        heroBtn: 'Get Tickets',
        heroNote: 'Tour dates, tickets, video and frequently asked questions are all on this page.',
        aboutTitle: 'ABOUT THE SHOW',
        aboutText1: 'Daniyar Dzhumadilov is a comedian from Kazakhstan known for his live audience interaction, strong improvisation skills, and smart, relatable humor.',
        aboutText2: 'The AMERICA tour is a stand-up show in Russian where comedy and live music come together in one performance.',
        aboutText3: 'The program features observations about life, travel, and people, unexpected improvisations, and musical moments that make each evening unique and lively.',
        officialTitle: 'OFFICIAL WEBSITE',
        officialText: 'This is the official website of Daniyar Dzhumadilov. Biography, current tours, performance dates and official artist information are published here.',
        officialBioLink: 'Artist Biography',
        tourDatesTitle: 'TOUR DATES',
        tourSummary: 'Official AMERICA 2026 tour dates: Philadelphia, Washington, DC, Atlanta, Miami, Orlando, Boston, Montreal, Toronto, New York, Chicago, Sacramento, Vancouver, Seattle, Los Angeles and Hawaii.',
        tourNote: 'Official ticket links are published on this page.',
        ticketsBtn: 'Tickets',
        videoTitle: 'VIDEO',
        videoText: 'A performance excerpt so visitors and search systems can immediately understand the format of the show.',
        faqTitle: 'FAQ',
        faqQ1: 'What language is the show in?',
        faqA1: 'The show is performed in Russian.',
        faqQ2: 'Is there an age restriction?',
        faqA2: 'Yes, 18+.',
        faqQ3: 'Can I get a refund?',
        faqA3: 'Tickets are non-refundable. All sales are final.',
        faqQ4: 'Who is Daniyar Dzhumadilov?',
        faqA4: 'Daniyar Dzhumadilov is a comedian and performer from Kazakhstan. He performs in Russian and is known for live audience interaction, improvisation, and original observations about everyday life. His name is also spelled Daniyar Jumadilov and Daniyar Zhumadilov in English.',
        faqQ5: 'What cities does the AMERICA 2026 tour visit?',
        faqA5: 'Philadelphia, Washington DC, Atlanta, Miami, Orlando, Boston, Montreal, Toronto, New York, Chicago, Sacramento, Vancouver, Seattle, Los Angeles, Hawaii — May 2026.',
        footerText: 'For venues and partnerships:'
    }
};

const pageMeta = {
    ru: {
        title: 'Данияр Джумадилов / Daniyar Dzhumadilov — AMERICA Tour 2026',
        description: 'Официальный сайт стендап-тура Данияра Джумадилова (Daniyar Dzhumadilov) AMERICA 2026 по городам США и Канады. Даты, билеты, видео и FAQ.',
        ogTitle: 'Данияр Джумадилов / Daniyar Dzhumadilov — AMERICA Tour 2026',
        ogDescription: 'Официальный сайт тура: даты, города, билеты, видео и FAQ.',
        twitterDescription: 'Официальный сайт с датами тура, билетами, видео и FAQ.'
    },
    en: {
        title: 'Daniyar Dzhumadilov — AMERICA Tour 2026 | Official Site',
        description: 'Official site for Daniyar Dzhumadilov’s AMERICA 2026 stand-up tour across the United States and Canada. Dates, tickets, video and FAQ.',
        ogTitle: 'Daniyar Dzhumadilov — AMERICA Tour 2026 | Official Site',
        ogDescription: 'Official site with tour dates, cities, tickets, video and FAQ.',
        twitterDescription: 'Official site with tour dates, tickets, video and FAQ.'
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
    const meta = pageMeta[lang];
    if (meta) {
        document.title = meta.title;

        const metaDesc = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');

        if (metaDesc) {
            metaDesc.content = meta.description;
        }

        if (ogTitle) {
            ogTitle.content = meta.ogTitle;
        }

        if (ogDescription) {
            ogDescription.content = meta.ogDescription;
        }

        if (twitterTitle) {
            twitterTitle.content = meta.ogTitle;
        }

        if (twitterDescription) {
            twitterDescription.content = meta.twitterDescription;
        }
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
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
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

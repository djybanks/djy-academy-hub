const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
}

let currentLang = localStorage.getItem('lang') || 'fr';

const translations = {
    fr: {
        heroTitle: "Apprendre intelligemment. Progresser réellement. Construire son avenir.",
        heroText: "DJY ACADEMY HUB est une plateforme d'apprentissage intelligente qui rend l'étude des langues simple, interactive et motivante, avec des cours, quiz et suivi de progression.",
        heroBtn: "Commencer maintenant",
        languagesTitle: "Choisis ta langue",
        levelText: "Niveau débutant à avancé",
        login: "Se connecter",
        signup: "Commencer gratuitement",
        langBtn: "FR"
    },
    en: {
        heroTitle: "Learn smartly. Progress for real. Build your future.",
        heroText: "DJY ACADEMY HUB is an intelligent learning platform that makes language learning simple, interactive and motivating, with lessons, quizzes and progress tracking.",
        heroBtn: "Start now",
        languagesTitle: "Choose your language",
        levelText: "Beginner to advanced level",
        login: "Log in",
        signup: "Start for free",
        langBtn: "EN"
    },
    es: {
        heroTitle: "Aprende inteligentemente. Progresa de verdad. Construye tu futuro.",
        heroText: "DJY ACADEMY HUB es una plataforma de aprendizaje inteligente que hace que el estudio de idiomas sea simple, interactivo y motivador, con lecciones, cuestionarios y seguimiento del progreso.",
        heroBtn: "Empezar ahora",
        languagesTitle: "Elige tu idioma",
        levelText: "Nivel principiante a avanzado",
        login: "Iniciar sesión",
        signup: "Comenzar gratis",
        langBtn: "ES"
    }
};

function applyLanguage(lang) {
    const t = translations[lang];

    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-text').textContent = t.heroText;
    document.getElementById('hero-btn').textContent = t.heroBtn;
    document.getElementById('languages-title').textContent = t.languagesTitle;
    document.getElementById('card-en-text').textContent = t.levelText;
    document.getElementById('card-fr-text').textContent = t.levelText;
    document.getElementById('card-es-text').textContent = t.levelText;
    document.getElementById('card-en-btn').textContent = t.heroBtn.includes('Start') ? 'Start' : t.heroBtn.includes('Empezar') ? 'Empezar' : 'Commencer';
    document.getElementById('card-fr-btn').textContent = t.heroBtn.includes('Start') ? 'Start' : t.heroBtn.includes('Empezar') ? 'Empezar' : 'Commencer';
    document.getElementById('card-es-btn').textContent = t.heroBtn.includes('Start') ? 'Start' : t.heroBtn.includes('Empezar') ? 'Empezar' : 'Commencer';
    document.getElementById('nav-login').textContent = t.login;
    document.getElementById('nav-signup').textContent = t.signup;
    langBtn.textContent = t.langBtn;
}

applyLanguage(currentLang);

langBtn.addEventListener('click', function () {
    if (currentLang === 'fr') {
        currentLang = 'en';
    } else if (currentLang === 'en') {
        currentLang = 'es';
    } else {
        currentLang = 'fr';
    }

    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});

function selectLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    window.location.href = 'dashboard.html';
}
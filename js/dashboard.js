// SYNCHRONISATION SUPABASE AU CHARGEMENT
const API = 'https://djy-backend.onrender.com';

async function syncUserData() {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    try {
        const res = await fetch(`${API}/user/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) return;

        const data = await res.json();
        const user = data.user;

        if (!user) return;

        localStorage.setItem('userName', user.username);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userBio', user.bio || '');
        localStorage.setItem('userAvatarColor', user.avatar_color || 'blue');
        localStorage.setItem('totalXP', user.xp || 0);
        localStorage.setItem('currentStreak', user.streak || 0);
        localStorage.setItem('selectedLanguage', user.selected_language || 'english');
        localStorage.setItem('interfaceLang', user.interface_lang || 'fr');

    } catch (err) {
        console.log('Sync offline — données locales utilisées');
    }
}

syncUserData();

// 1. VÉRIFICATION SÉCURITÉ
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// 2. INITIALISATION DES DONNÉES
const currentStreak = initializeStreak();
const totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
const completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || {};
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
const userName = localStorage.getItem('userName') || 'Djybanks';
const userEmail = localStorage.getItem('userEmail') || 'contact@djyacademy.com';
const lessonsCount = Object.keys(completedLessons).length;

// 3. SYSTÈME DE NIVEAUX
const levelSystem = [
    { level: 1, xpRequired: 0, title: "Débutant" },
    { level: 2, xpRequired: 100, title: "Débutant" },
    { level: 3, xpRequired: 250, title: "Débutant" },
    { level: 4, xpRequired: 450, title: "Élémentaire" },
    { level: 5, xpRequired: 700, title: "Élémentaire" },
    { level: 6, xpRequired: 1000, title: "Intermédiaire" },
    { level: 7, xpRequired: 1350, title: "Intermédiaire" },
    { level: 8, xpRequired: 1750, title: "Intermédiaire" },
    { level: 9, xpRequired: 2200, title: "Avancé" },
    { level: 10, xpRequired: 2700, title: "Avancé" }
];

function getLevelInfo(xp) {
    let current = levelSystem[0];
    let next = levelSystem[1];
    for (let i = 0; i < levelSystem.length; i++) {
        if (xp >= levelSystem[i].xpRequired) {
            current = levelSystem[i];
            next = levelSystem[i + 1] || null;
        }
    }
    return { current, next };
}

const levelInfo = getLevelInfo(totalXP);

// 4. GESTION DU THÈME (CLAIR/SOMBRE)
const themeBtn = document.getElementById('theme-btn');
const moonIcon = document.getElementById('theme-icon-moon');
const sunIcon = document.getElementById('theme-icon-sun');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        document.body.classList.remove('dark-mode');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
    localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    setTheme(isDark ? 'light' : 'dark');
});

setTheme(localStorage.getItem('theme') || 'dark');

// 5. GESTION DES DROPDOWNS
function setupDropdown(triggerId, dropdownId) {
    const trigger = document.getElementById(triggerId);
    const dropdown = document.getElementById(dropdownId);

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => dropdown.classList.add('hidden'));
    dropdown.addEventListener('click', (e) => e.stopPropagation());
}

setupDropdown('dash-lang-selector', 'lang-dropdown');
setupDropdown('dash-user-trigger', 'user-dropdown');
setupDropdown('dash-notif', 'notif-dropdown');

// 6. TRADUCTION DE L'INTERFACE
let currentInterfaceLang = localStorage.getItem('interfaceLang') || 'fr';

const translations = {
    fr: {
        welcome: "Bienvenue de retour,",
        heroText: "Continue ton apprentissage et atteins tes objectifs.",
        btnHero: "Continuer à apprendre",
        xp: "XP total",
        streak: "Série du jour",
        lessons: "Leçons complétées",
        level: "Niveau",
        progress: "Progression globale",
        module: "Module en cours",
        curLesson: "Leçon actuelle",
        contModule: "Continuer le module",
        activity: "Activité récente",
        yourModules: "Tes modules",
        daily: "Objectifs quotidiens",
        quickQuiz: "Quiz rapide",
        quizDesc: "Teste tes connaissances avec un quiz aléatoire",
        startQuiz: "Commencer un quiz",
        ranking: "Ton classement",
        badges: "Badges récents",
        share: "Partage tes progrès"
    },
    en: {
        welcome: "Welcome back,",
        heroText: "Keep learning and reach your goals.",
        btnHero: "Continue learning",
        xp: "Total XP",
        streak: "Daily Streak",
        lessons: "Lessons completed",
        level: "Level",
        progress: "Global Progress",
        module: "Current Module",
        curLesson: "Current Lesson",
        contModule: "Continue Module",
        activity: "Recent Activity",
        yourModules: "Your Modules",
        daily: "Daily Goals",
        quickQuiz: "Quick Quiz",
        quizDesc: "Test your knowledge with a random quiz",
        startQuiz: "Start a quiz",
        ranking: "Your Ranking",
        badges: "Recent Badges",
        share: "Share your progress"
    },
    es: {
        welcome: "Bienvenido de nuevo,",
        heroText: "Sigue aprendiendo y alcanza tus metas.",
        btnHero: "Continuar aprendiendo",
        xp: "XP total",
        streak: "Racha diaria",
        lessons: "Lecciones completadas",
        level: "Nivel",
        progress: "Progreso Global",
        module: "Módulo actual",
        curLesson: "Lección actual",
        contModule: "Continuar módulo",
        activity: "Actividad reciente",
        yourModules: "Tus módulos",
        daily: "Objetivos diarios",
        quickQuiz: "Quiz rápido",
        quizDesc: "Prueba tus conocimientos con un quiz aleatorio",
        startQuiz: "Empezar un quiz",
        ranking: "Tu clasificación",
        badges: "Insignias récentes",
        share: "Comparte tu progreso"
    }
};

function applyTranslations(lang) {
    const t = translations[lang];
    document.getElementById('hero-welcome').firstChild.textContent = t.welcome + " ";
    document.getElementById('hero-text').textContent = t.heroText;
    document.getElementById('hero-btn-text').textContent = t.btnHero;
    document.getElementById('label-xp').textContent = t.xp;
    document.getElementById('label-streak').textContent = t.streak;
    document.getElementById('label-lessons').textContent = t.lessons;
    document.getElementById('label-progress').textContent = t.progress;
    document.getElementById('label-module').textContent = t.module;
    document.getElementById('label-current-lesson').textContent = t.curLesson;
    document.getElementById('label-continue-module').textContent = t.contModule;
    document.getElementById('label-activity').textContent = t.activity;
    document.getElementById('label-your-modules').textContent = t.yourModules;
    document.getElementById('label-daily-objectives').textContent = t.daily;
    document.getElementById('label-quick-quiz').textContent = t.quickQuiz;
    document.getElementById('label-quiz-desc').textContent = t.quizDesc;
    document.getElementById('label-start-quiz').textContent = t.startQuiz;
    document.getElementById('label-ranking').textContent = t.ranking;
    document.getElementById('label-badges').textContent = t.badges;
    document.getElementById('label-share').textContent = t.share;

    const flags = { fr: 'fr.png', en: 'en.png', es: 'es.png' };
    const names = { fr: 'Français', en: 'English', es: 'Español' };
    document.getElementById('dash-flag').src = `images/flags/${flags[lang]}`;
    document.getElementById('dash-lang-text').textContent = names[lang];
}

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        localStorage.setItem('interfaceLang', lang);
        applyTranslations(lang);
    });
});

applyTranslations(currentInterfaceLang);

// 7. GESTION DES COULEURS AVATAR
const avatarColors = document.querySelectorAll('.avatar-color');
const avatars = [document.getElementById('dash-avatar'), document.getElementById('dropdown-avatar')];

avatarColors.forEach(colorBtn => {
    colorBtn.addEventListener('click', () => {
        const color = colorBtn.style.background;
        avatarColors.forEach(b => b.classList.remove('active'));
        colorBtn.classList.add('active');
        avatrams.forEach(a => a.style.background = color);
        localStorage.setItem('userAvatarColor', color);
    });
});

const savedColor = localStorage.getItem('userAvatarColor');
if (savedColor) {
    avatars.forEach(a => a.style.background = savedColor);
}

// 8. CALCUL ET AFFICHAGE DES STATS
function updateDashboardUI() {
    document.getElementById('dash-user-name').textContent = userName;
    document.getElementById('hero-name').textContent = userName;
    document.getElementById('dropdown-name').textContent = userName;
    document.getElementById('dropdown-email').textContent = userEmail;
    document.getElementById('dash-avatar').textContent = userName.substring(0,2).toUpperCase();
    document.getElementById('dropdown-avatar').textContent = userName.substring(0,2).toUpperCase();

    document.getElementById('stat-xp').textContent = totalXP.toLocaleString();
    document.getElementById('stat-streak').textContent = currentStreak + " jours";
    document.getElementById('stat-lessons').textContent = lessonsCount;
    document.getElementById('stat-level').textContent = levelInfo.current.level;
    document.getElementById('stat-level-title').textContent = levelInfo.current.title;
    document.getElementById('dash-user-level').textContent = "Niveau " + levelInfo.current.level;
    document.getElementById('dropdown-level').textContent = `Niveau ${levelInfo.current.level} — ${levelInfo.current.title}`;
    document.getElementById('dropdown-xp').textContent = totalXP + " XP";
    document.getElementById('dropdown-streak').textContent = currentStreak + " jours de série";

    const progress = Math.round((lessonsCount / 25) * 100);
    document.getElementById('donut-percent').textContent = progress + "%";
    document.getElementById('donut-progress').style.strokeDashoffset = 314 - (314 * progress / 100);

    if (levelInfo.next) {
        const currentLevelXP = totalXP - levelInfo.current.xpRequired;
        const nextLevelGoal = levelInfo.next.xpRequired - levelInfo.current.xpRequired;
        const barPercent = Math.min(100, (currentLevelXP / nextLevelGoal) * 100);

        document.getElementById('xp-bar-fill').style.width = barPercent + "%";
        document.getElementById('xp-bar-text').textContent = `${totalXP} / ${levelInfo.next.xpRequired} XP`;

        const xpDetailFill = document.getElementById('xp-detail-fill');
        const xpDetailText = document.getElementById('xp-detail-text');
        if (xpDetailFill && xpDetailText) {
            xpDetailFill.style.width = barPercent + '%';
            xpDetailText.textContent = `${totalXP.toLocaleString()} / ${levelInfo.next.xpRequired.toLocaleString()} XP`;
        }

        document.getElementById('progress-next').textContent = `Prochain objectif : Niveau ${levelInfo.next.level}`;
    } else {
        document.getElementById('xp-bar-fill').style.width = '100%';
        document.getElementById('xp-bar-text').textContent = `${totalXP} XP — Niveau maximum !`;
        document.getElementById('progress-next').textContent = 'Niveau maximum atteint !';
    }
}

updateDashboardUI();

// 9. MODULE EN COURS
let currentCourse = null;
if (selectedLanguage === 'english') currentCourse = englishCourse;
else if (selectedLanguage === 'french') currentCourse = frenchCourse;
else if (selectedLanguage === 'spanish') currentCourse = spanishCourse;

function getCurrentModule() {
    if (!currentCourse) return null;
    for (let module of currentCourse.modules) {
        for (let lesson of module.lessons) {
            const key = `${selectedLanguage}-${module.id}-${lesson.id}`;
            if (!completedLessons[key]) {
                return { module, lesson };
            }
        }
    }
    return null;
}

const currentModuleInfo = getCurrentModule();
if (currentModuleInfo) {
    document.getElementById('module-icon').textContent = currentModuleInfo.module.icon;
    document.getElementById('module-name').textContent = currentModuleInfo.module.title;
    document.getElementById('module-desc').textContent = `Module ${currentModuleInfo.module.id} — ${currentModuleInfo.module.lessons.length} leçons`;
    document.getElementById('module-lesson-name').textContent = currentModuleInfo.lesson.title;

    const moduleCompleted = currentModuleInfo.module.lessons.filter(l =>
        completedLessons[`${selectedLanguage}-${currentModuleInfo.module.id}-${l.id}`]
    ).length;
    const modulePercent = Math.round((moduleCompleted / currentModuleInfo.module.lessons.length) * 100);
    document.getElementById('module-progress-fill').style.width = modulePercent + '%';
}

// 10. MODULES MINI
function renderModulesMini() {
    const container = document.getElementById('modules-mini-grid');
    if (!currentCourse || !container) return;

    const colors = ['#2563EB', '#F97316', '#22C55E', '#A855F7', '#EC4899'];

    currentCourse.modules.forEach(function(module, index) {
        const completed = module.lessons.filter(l =>
            completedLessons[`${selectedLanguage}-${module.id}-${l.id}`]
        ).length;
        const total = module.lessons.length;
        const percent = Math.round((completed / total) * 100);
        const isLocked = module.id > 1 && currentCourse.modules[module.id - 2].lessons.filter(l =>
            completedLessons[`${selectedLanguage}-${module.id - 1}-${l.id}`]
        ).length < currentCourse.modules[module.id - 2].lessons.length;
        const isSoon = isLocked && module.id === 5;

        const card = document.createElement('div');
        card.className = 'module-mini';
        card.innerHTML = `
            ${isSoon ? '<span class="soon-badge">Soon</span>' : ''}
            <span class="module-mini-icon">${module.icon}</span>
            <span class="module-mini-title">${module.title}</span>
            <span class="module-mini-lessons">${total} leçons</span>
            <div class="module-mini-bar">
                <div class="module-mini-bar-fill" style="width: ${percent}%; background: ${colors[index]};"></div>
            </div>
            ${isLocked ? '<span class="module-mini-lock">🔒</span>' : ''}
        `;
        container.appendChild(card);
    });
}

renderModulesMini();

// 11. OBJECTIFS QUOTIDIENS
function renderObjectives() {
    const container = document.getElementById('objectives-list');
    if (!container) return;

    const today = new Date().toDateString();
    const dailyData = JSON.parse(localStorage.getItem('dailyObjectives')) || {};

    if (dailyData.date !== today) {
        dailyData.date = today;
        dailyData.lessonDone = 0;
        dailyData.xpGained = 0;
        dailyData.quizDone = 0;
        localStorage.setItem('dailyObjectives', JSON.stringify(dailyData));
    }

    const objectives = [
        { name: 'Compléter 1 leçon', current: Math.min(dailyData.lessonDone || 0, 1), target: 1, done: (dailyData.lessonDone || 0) >= 1 },
        { name: 'Gagner 20 XP', current: Math.min(dailyData.xpGained || 0, 20), target: 20, done: (dailyData.xpGained || 0) >= 20 },
        { name: 'Faire 1 quiz', current: Math.min(dailyData.quizDone || 0, 1), target: 1, done: (dailyData.quizDone || 0) >= 1 }
    ];

    container.innerHTML = '';
    objectives.forEach(function(obj) {
        const item = document.createElement('div');
        item.className = 'objective-item';
        item.innerHTML = `
            <div class="objective-check ${obj.done ? 'done' : ''}">
                ${obj.done ? '✓' : ''}
            </div>
            <div class="objective-info">
                <span class="objective-name">${obj.name}</span>
                <span class="objective-progress">${obj.current}/${obj.target}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

renderObjectives();

// 12. CLASSEMENT SIMULÉ
function calculateRanking(xp) {
    const rank = Math.max(1, Math.round(50000 - (xp * 5)));
    const percentile = Math.max(1, Math.round(100 - (xp / 100)));
    return { rank, percentile };
}

const ranking = calculateRanking(totalXP);
document.getElementById('ranking-number').textContent = '#' + ranking.rank.toLocaleString();
document.getElementById('ranking-percent').textContent = 'Top ' + ranking.percentile + '%';

// 13. BADGES HEXAGONAUX
function renderBadgesHex() {
    const container = document.getElementById('badges-hex-grid');
    if (!container) return;

    const bestQuizScore = parseInt(localStorage.getItem('bestQuizScore')) || 0;

    const badges = [
        { icon: '⭐', label: 'Premier pas', color: 'badge-hex-orange', unlocked: lessonsCount >= 1 },
        { icon: '🔥', label: '7 jours', color: 'badge-hex-purple', unlocked: currentStreak >= 7 },
        { icon: '📖', label: '10 leçons', color: 'badge-hex-blue', unlocked: lessonsCount >= 10 },
        { icon: '🎯', label: 'Quiz parfait', color: 'badge-hex-gold', unlocked: bestQuizScore === 10 },
        { icon: '🔒', label: 'Expert', color: 'badge-hex-locked', unlocked: false }
    ];

    container.innerHTML = '';
    badges.forEach(function(badge) {
        const hex = document.createElement('div');
        hex.className = `badge-hex ${badge.unlocked ? badge.color + ' unlocked' : 'badge-hex-locked'}`;
        hex.innerHTML = `
            <span class="badge-hex-icon">${badge.unlocked ? badge.icon : '🔒'}</span>
            <span class="badge-hex-label">${badge.label}</span>
        `;
        container.appendChild(hex);
    });
}

renderBadgesHex();

// 14. ACTIVITÉ RÉCENTE
function renderActivity() {
    const container = document.getElementById('activity-list');
    if (!container) return;

    const activities = JSON.parse(localStorage.getItem('activityLog')) || [];

    if (activities.length === 0) {
        container.innerHTML = '<p class="activity-empty" id="label-no-activity">Aucune activité récente</p>';
        return;
    }

    container.innerHTML = '';
    activities.slice(-5).reverse().forEach(function(activity) {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <span class="activity-icon">${activity.icon}</span>
            <div class="activity-info">
                <span class="activity-name">${activity.name}</span>
                <span class="activity-detail">${activity.detail}</span>
            </div>
            <span class="activity-xp">+${activity.xp} XP</span>
            <span class="activity-time">${activity.time}</span>
        `;
        container.appendChild(item);
    });
}

renderActivity();

// 15. NOTIFICATIONS
function renderNotifications() {
    const container = document.getElementById('notif-list');
    const countEl = document.getElementById('notif-count');
    if (!container || !countEl) return;

    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const unread = notifications.filter(n => !n.read).length;

    countEl.textContent = unread;
    countEl.style.display = unread === 0 ? 'none' : 'flex';

    if (notifications.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.8rem; text-align: center; padding: 10px;">Aucune notification</p>';
        return;
    }

    container.innerHTML = '';
    notifications.slice(-8).reverse().forEach(function(notif) {
        const item = document.createElement('div');
        item.className = 'notif-item';
        item.innerHTML = `
            <span class="notif-item-icon">${notif.icon}</span>
            <span class="notif-item-text">${notif.text}</span>
            <span class="notif-item-time">${notif.time}</span>
        `;
        container.appendChild(item);
    });
}

renderNotifications();

document.getElementById('dash-notif').addEventListener('click', function() {
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    notifications.forEach(n => n.read = true);
    localStorage.setItem('notifications', JSON.stringify(notifications));
    document.getElementById('notif-count').style.display = 'none';
});

// 16. BARRE DE RECHERCHE
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.classList.add('hidden');
            return;
        }

        if (!currentCourse) return;

        let results = [];

        currentCourse.modules.forEach(function(module) {
            if (module.title.toLowerCase().includes(query)) {
                results.push({ type: 'Module', name: module.title });
            }
            module.lessons.forEach(function(lesson) {
                if (lesson.title.toLowerCase().includes(query)) {
                    results.push({ type: 'Leçon', name: lesson.title });
                }
            });
        });

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-item">Aucun résultat</div>';
        } else {
            searchResults.innerHTML = '';
            results.slice(0, 8).forEach(function(result) {
                const item = document.createElement('div');
                item.className = 'search-item';
                item.innerHTML = `<span class="search-item-type">${result.type}</span>${result.name}`;
                item.addEventListener('click', () => window.location.href = 'lessons.html');
                searchResults.appendChild(item);
            });
        }

        searchResults.classList.remove('hidden');
    });

    searchInput.addEventListener('blur', function() {
        setTimeout(() => searchResults.classList.add('hidden'), 200);
    });
}

// 17. CITATION ALÉATOIRE
const quotes = [
    "La langue est la carte du monde. Parle une nouvelle langue, vis une nouvelle vie.",
    "Une langue différente est une vision différente de la vie. — Federico Fellini",
    "Les limites de ma langue sont les limites de mon monde. — Ludwig Wittgenstein",
    "Apprendre une langue, c'est avoir une fenêtre de plus pour regarder le monde.",
    "Celui qui ne connaît pas les langues étrangères ne sait rien de la sienne. — Goethe",
    "La connaissance des langues est la porte de la sagesse. — Roger Bacon",
    "Chaque nouvelle langue ouvre la porte d'un nouveau monde.",
    "Parler une autre langue, c'est posséder une deuxième âme. — Charlemagne"
];

const footerQuote = document.getElementById('footer-quote');
if (footerQuote) {
    footerQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

// 18. PARTAGE RÉSEAUX SOCIAUX
document.querySelectorAll('.social-share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = btn.getAttribute('data-platform');
        const text = `Je suis Niveau ${levelInfo.current.level} sur DJY Academy Hub avec ${totalXP} XP ! Rejoins-moi pour apprendre les langues !`;
        const url = window.location.href;

        let shareUrl = "";
        if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

        if (shareUrl) window.open(shareUrl, '_blank');
        else alert("Partage : " + text);
    });
});

// 19. DÉCONNEXION
const logoutAction = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
};

document.getElementById('side-logout').addEventListener('click', logoutAction);
document.getElementById('dropdown-logout').addEventListener('click', logoutAction);
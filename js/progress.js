// VÉRIFIER SI CONNECTÉ
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// VARIABLES
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
const userName = localStorage.getItem('userName') || 'Djybanks';
const currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
const bestQuizScore = parseInt(localStorage.getItem('bestQuizScore')) || 0;
const completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || {};
const lessonsCount = Object.keys(completedLessons).length;
let totalXP = parseInt(localStorage.getItem('totalXP')) || 0;

let currentCourse = null;
if (selectedLanguage === 'english') currentCourse = englishCourse;
else if (selectedLanguage === 'french') currentCourse = frenchCourse;
else if (selectedLanguage === 'spanish') currentCourse = spanishCourse;

// NIVEAUX
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
    let current = levelSystem[0]; let next = levelSystem[1];
    for (let i = 0; i < levelSystem.length; i++) {
        if (xp >= levelSystem[i].xpRequired) { current = levelSystem[i]; next = levelSystem[i + 1] || null; }
    }
    return { current, next };
}

const levelInfo = getLevelInfo(totalXP);

// HEADER
document.getElementById('pg-avatar').textContent = userName.substring(0, 2).toUpperCase();
document.getElementById('pg-username').textContent = userName;
document.getElementById('pg-level').textContent = `Niveau ${levelInfo.current.level}`;
document.getElementById('pg-motivation-name').textContent = userName;
document.getElementById('total-xp').textContent = totalXP;

const savedColor = localStorage.getItem('userAvatarColor');
if (savedColor) document.getElementById('pg-avatar').style.background = savedColor;

// DRAPEAU
const flagMap = { english: { src: 'images/flags/en.png', text: 'English' }, french: { src: 'images/flags/fr.png', text: 'Français' }, spanish: { src: 'images/flags/es.png', text: 'Español' } };
document.getElementById('pg-flag').src = flagMap[selectedLanguage].src;
document.getElementById('pg-lang-text').textContent = flagMap[selectedLanguage].text;

// THÈME
const themeBtn = document.getElementById('theme-btn');
const moonIcon = document.getElementById('theme-icon-moon');
const sunIcon = document.getElementById('theme-icon-sun');

function setTheme(theme) {
    if (theme === 'dark') { document.body.classList.remove('light-mode'); document.body.classList.add('dark-dashboard'); moonIcon.style.display = 'none'; sunIcon.style.display = 'block'; }
    else { document.body.classList.add('light-mode'); document.body.classList.remove('dark-dashboard'); moonIcon.style.display = 'block'; sunIcon.style.display = 'none'; }
    localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => setTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light'));
setTheme(localStorage.getItem('theme') || 'dark');

// PARTICULES
(function() {
    const c = document.getElementById('pg-particles');
    if (!c) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'pg-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.3 + 0.1;
        c.appendChild(p);
    }
})();

// LANG DROPDOWN
const langSel = document.getElementById('pg-lang-selector');
const langDrop = document.getElementById('pg-lang-dropdown');
if (langSel && langDrop) {
    langSel.addEventListener('click', (e) => { e.stopPropagation(); langDrop.classList.toggle('hidden'); });
    document.addEventListener('click', () => langDrop.classList.add('hidden'));
    langDrop.addEventListener('click', (e) => e.stopPropagation());
}

// STATS
function updateStats() {
    const estimatedTime = Math.round(lessonsCount * 5);
    const hours = Math.floor(estimatedTime / 60);
    const mins = estimatedTime % 60;

    document.getElementById('pg-stat-xp').textContent = totalXP.toLocaleString();
    document.getElementById('pg-stat-lessons').textContent = lessonsCount;
    document.getElementById('pg-stat-streak').textContent = currentStreak + ' jours';
    document.getElementById('pg-stat-time').textContent = hours + 'h ' + mins + 'm';
    document.getElementById('total-xp').textContent = totalXP;

    document.getElementById('pg-xp-bar').style.width = Math.min((totalXP / 5000) * 100, 100) + '%';
    document.getElementById('pg-lessons-bar').style.width = Math.min((lessonsCount / 75) * 100, 100) + '%';
    document.getElementById('pg-streak-bar').style.width = Math.min((currentStreak / 30) * 100, 100) + '%';
    document.getElementById('pg-time-bar').style.width = Math.min((estimatedTime / 300) * 100, 100) + '%';

    // MINI STATS
    document.getElementById('pg-mini-les').textContent = lessonsCount;
    document.getElementById('pg-mini-xp').textContent = totalXP > 999 ? (totalXP/1000).toFixed(1) + 'k' : totalXP;
    document.getElementById('pg-mini-str').textContent = currentStreak + 'j';
    document.getElementById('pg-mini-best').textContent = bestQuizScore > 0 ? bestQuizScore + '/10' : '—';

    // LEVEL
    document.getElementById('pg-level-big').textContent = 'Niveau ' + levelInfo.current.level;
    document.getElementById('pg-level-sub').textContent = levelInfo.current.title;

    if (levelInfo.next) {
        const xpIn = totalXP - levelInfo.current.xpRequired;
        const xpNeed = levelInfo.next.xpRequired - levelInfo.current.xpRequired;
        const pct = Math.round((xpIn / xpNeed) * 100);
        document.getElementById('pg-level-fill').style.width = pct + '%';
        document.getElementById('pg-level-xp').textContent = `${totalXP} / ${levelInfo.next.xpRequired} XP`;
        document.getElementById('pg-level-pct').textContent = pct + '% vers le prochain niveau';
    } else {
        document.getElementById('pg-level-fill').style.width = '100%';
        document.getElementById('pg-level-xp').textContent = totalXP + ' XP — Max !';
        document.getElementById('pg-level-pct').textContent = 'Niveau maximum atteint !';
    }
}
updateStats();

// OBJECTIFS
function renderObjectives() {
    const c = document.getElementById('pg-objectives');
    if (!c) return;
    const today = new Date().toDateString();
    const d = JSON.parse(localStorage.getItem('dailyObjectives')) || {};
    if (d.date !== today) { d.date = today; d.lessonDone = 0; d.xpGained = 0; d.quizDone = 0; localStorage.setItem('dailyObjectives', JSON.stringify(d)); }
    const objs = [
        { name: 'Compléter 1 leçon', cur: Math.min(d.lessonDone || 0, 1), target: 1, done: (d.lessonDone || 0) >= 1 },
        { name: 'Gagner 20 XP', cur: Math.min(d.xpGained || 0, 20), target: 20, done: (d.xpGained || 0) >= 20 },
        { name: 'Faire 1 quiz', cur: Math.min(d.quizDone || 0, 1), target: 1, done: (d.quizDone || 0) >= 1 }
    ];
    c.innerHTML = '';
    objs.forEach(o => {
        const item = document.createElement('div');
        item.className = 'pg-objective-item';
        item.innerHTML = `<div class="pg-objective-check ${o.done ? 'done' : ''}">${o.done ? '✓' : ''}</div><span class="pg-objective-name">${o.name}</span><span class="pg-objective-progress">${o.cur}/${o.target}</span>`;
        c.appendChild(item);
    });
}
renderObjectives();

// CHART BARRES
function renderBarChart() {
    const weeklyXP = JSON.parse(localStorage.getItem('weeklyXP')) || [0,0,0,0,0,0,0];
    const maxXP = Math.max(...weeklyXP, 1);
    let total = 0;
    weeklyXP.forEach((xp, i) => {
        const bar = document.getElementById(`pg-b${i}`);
        if (bar) bar.style.height = ((xp / maxXP) * 100) + '%';
        total += xp;
    });
    document.getElementById('pg-weekly-xp').textContent = `+${total} XP`;
}
renderBarChart();

// CHART LIGNE (Canvas)
function renderLineChart() {
    const canvas = document.getElementById('pg-line-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const weeklyXP = JSON.parse(localStorage.getItem('weeklyXP')) || [0,0,0,0,0,0,0];
    const maxXP = Math.max(...weeklyXP, 1);

    ctx.clearRect(0, 0, w, h);

    // GRILLE
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const y = (h / 5) * i + 10;
        ctx.beginPath(); ctx.moveTo(30, y); ctx.lineTo(w - 10, y); ctx.stroke();
    }

    // POINTS
    const points = [];
    const stepX = (w - 50) / (weeklyXP.length - 1);

    weeklyXP.forEach((xp, i) => {
        const x = 30 + stepX * i;
        const y = h - 20 - ((xp / maxXP) * (h - 40));
        points.push({ x, y });
    });

    // ZONE REMPLIE
    ctx.beginPath();
    ctx.moveTo(points[0].x, h - 20);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, h - 20);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(37,99,235,0.15)');
    grad.addColorStop(1, 'rgba(37,99,235,0)');
    ctx.fillStyle = grad;
    ctx.fill();

    // LIGNE
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // POINTS
    points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#2563EB';
        ctx.fill();
        ctx.strokeStyle = '#0B1220';
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    // LABELS
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    ctx.fillStyle = '#94A3B8';
    ctx.font = '10px Inter';
    ctx.textAlign = 'center';
    points.forEach((p, i) => {
        ctx.fillText(days[i], p.x, h - 4);
    });
}
renderLineChart();

// MODULES
function renderModules() {
    const c = document.getElementById('pg-modules-list');
    if (!c || !currentCourse) return;
    c.innerHTML = '';

    currentCourse.modules.forEach((module, index) => {
        let done = 0;
        const total = module.lessons.length;
        module.lessons.forEach(l => { if (completedLessons[`${selectedLanguage}-${module.id}-${l.id}`]) done++; });
        const pct = Math.round((done / total) * 100);
        const isLocked = module.id > 1 && done === 0 && index > 0;

        let statusClass = 'progress'; let statusText = `${pct}%`;
        if (done === total) { statusClass = 'done'; statusText = '✅ Terminé'; }
        else if (isLocked) { statusClass = 'locked'; statusText = '🔒 Verrouillé'; }

        const row = document.createElement('div');
        row.className = 'pg-module-row';
        row.innerHTML = `
            <span class="pg-module-icon">${module.icon}</span>
            <div class="pg-module-info">
                <span class="pg-module-name">${module.title}</span>
                <div class="pg-module-bar"><div class="pg-module-fill" style="width:${pct}%;opacity:${isLocked?'0.3':'1'}"></div></div>
            </div>
            <span class="pg-module-count">${done}/${total}</span>
            <span class="pg-module-status ${statusClass}" style="opacity:${isLocked?'0.5':'1'}">${statusText}</span>
        `;
        c.appendChild(row);
    });
}
renderModules();

// COMPARAISON
function renderComparison() {
    const weeklyXP = JSON.parse(localStorage.getItem('weeklyXP')) || [0,0,0,0,0,0,0];
    const prevWeekXP = JSON.parse(localStorage.getItem('prevWeekXP')) || [0,0,0,0,0,0,0];

    const curXP = weeklyXP.reduce((a, b) => a + b, 0);
    const prevXP = prevWeekXP.reduce((a, b) => a + b, 0);
    const xpPct = prevXP > 0 ? Math.round(((curXP - prevXP) / prevXP) * 100) : 0;

    document.getElementById('pg-cmp-xp-cur').textContent = curXP;
    document.getElementById('pg-cmp-xp-prev').textContent = prevXP;
    const xpEl = document.getElementById('pg-cmp-xp-pct');
    xpEl.textContent = xpPct >= 0 ? `↑ +${xpPct}%` : `↓ ${xpPct}%`;
    xpEl.className = `pg-compare-change ${xpPct >= 0 ? 'green' : 'red'}`;

    document.getElementById('pg-cmp-les-cur').textContent = lessonsCount;
    document.getElementById('pg-cmp-les-prev').textContent = Math.max(0, lessonsCount - 3);
    document.getElementById('pg-cmp-les-pct').textContent = '↑ +60%';

    document.getElementById('pg-cmp-qz-cur').textContent = '3';
    document.getElementById('pg-cmp-qz-prev').textContent = '4';
    document.getElementById('pg-cmp-qz-pct').textContent = '↓ -25%';
}
renderComparison();

// HISTORIQUE
function renderTimeline() {
    const c = document.getElementById('pg-timeline');
    if (!c) return;
    const activities = JSON.parse(localStorage.getItem('activityLog')) || [];

    if (activities.length === 0) {
        c.innerHTML = `
            <div class="pg-timeline-item green"><span class="pg-timeline-icon">📖</span><div class="pg-timeline-info"><span class="pg-timeline-name">Commence ta première leçon !</span><span class="pg-timeline-detail">Clique sur Cours dans la sidebar</span></div></div>
        `;
        return;
    }

    c.innerHTML = '';
    activities.slice(-6).reverse().forEach(a => {
        const colorClass = a.icon === '🏆' ? 'purple' : a.icon === '📚' ? 'blue' : 'green';
        const item = document.createElement('div');
        item.className = `pg-timeline-item ${colorClass}`;
        item.innerHTML = `<span class="pg-timeline-icon">${a.icon}</span><div class="pg-timeline-info"><span class="pg-timeline-name">${a.name}</span><span class="pg-timeline-detail">${a.detail || ''}</span></div><span class="pg-timeline-xp">+${a.xp} XP</span><span class="pg-timeline-time">${a.time}</span>`;
        c.appendChild(item);
    });
}
renderTimeline();

// PROCHAINE LEÇON
function renderNextLesson() {
    if (!currentCourse) return;
    for (let module of currentCourse.modules) {
        for (let lesson of module.lessons) {
            const key = `${selectedLanguage}-${module.id}-${lesson.id}`;
            if (!completedLessons[key]) {
                document.getElementById('pg-next-icon').textContent = module.icon;
                document.getElementById('pg-next-name').textContent = lesson.title;
                document.getElementById('pg-next-module').textContent = `${module.title} — Leçon ${lesson.id}`;
                return;
            }
        }
    }
    document.getElementById('pg-next-name').textContent = 'Tout terminé !';
    document.getElementById('pg-next-module').textContent = 'Félicitations !';
}
renderNextLesson();

// FILTRES
document.querySelectorAll('.pg-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const group = btn.parentElement;
        group.querySelectorAll('.pg-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// FOOTER
const quotes = ["La langue est la carte du monde.", "Une langue différente est une vision différente de la vie.", "Les limites de ma langue sont les limites de mon monde.", "Chaque nouvelle langue ouvre la porte d'un nouveau monde.", "Parler une autre langue, c'est posséder une deuxième âme."];
const quoteEl = document.getElementById('pg-footer-quote');
if (quoteEl) quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// SOCIAL
document.querySelectorAll('.pg-social').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const p = btn.getAttribute('data-platform');
        const text = `Je suis Niveau ${levelInfo.current.level} sur DJY Academy Hub avec ${totalXP} XP !`;
        if (p === 'twitter') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
        else if (p === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
        else alert('Partage : ' + text);
    });
});

// DÉCONNEXION
document.getElementById('side-logout').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
});

// ================================
// TRADUCTION INTERFACE
// ================================
const pgTranslations = {
    fr: {
        title: 'Progression', subtitle: 'Analyse ton évolution et tes performances',
        xpLabel: 'XP Total', lessonsLabel: 'Leçons terminées', streakLabel: 'Streak', timeLabel: 'Temps total',
        period: 'Période', type: 'Type', lang: 'Langue',
        barTitle: 'XP par jour', lineTitle: "Courbe d'évolution",
        modulesTitle: 'Progression par module', modulesLink: 'Voir les cours',
        compareTitle: 'Comparaison hebdomadaire', historyTitle: 'Historique des activités', historyLink: 'Voir tout',
        levelTitle: 'Ton niveau', motivTitle: 'Motivation', motivText: 'Analyse ta progression,',
        objTitle: 'Objectifs du jour', miniTitle: 'Statistiques rapides',
        nextTitle: 'Prochaine leçon', nextBtn: 'Commencer →', share: 'Partage tes progrès'
    },
    en: {
        title: 'Progress', subtitle: 'Analyze your evolution and performance',
        xpLabel: 'Total XP', lessonsLabel: 'Completed lessons', streakLabel: 'Streak', timeLabel: 'Total time',
        period: 'Period', type: 'Type', lang: 'Language',
        barTitle: 'XP per day', lineTitle: 'Evolution curve',
        modulesTitle: 'Module progress', modulesLink: 'View courses',
        compareTitle: 'Weekly comparison', historyTitle: 'Activity history', historyLink: 'See all',
        levelTitle: 'Your level', motivTitle: 'Motivation', motivText: 'Analyze your progress,',
        objTitle: 'Daily Goals', miniTitle: 'Quick Stats',
        nextTitle: 'Next Lesson', nextBtn: 'Start →', share: 'Share your progress'
    },
    es: {
        title: 'Progreso', subtitle: 'Analiza tu evolución y rendimiento',
        xpLabel: 'XP Total', lessonsLabel: 'Lecciones completadas', streakLabel: 'Racha', timeLabel: 'Tiempo total',
        period: 'Periodo', type: 'Tipo', lang: 'Idioma',
        barTitle: 'XP por día', lineTitle: 'Curva de evolución',
        modulesTitle: 'Progreso por módulo', modulesLink: 'Ver cursos',
        compareTitle: 'Comparación semanal', historyTitle: 'Historial de actividades', historyLink: 'Ver todo',
        levelTitle: 'Tu nivel', motivTitle: 'Motivación', motivText: 'Analiza tu progreso,',
        objTitle: 'Objetivos del día', miniTitle: 'Estadísticas rápidas',
        nextTitle: 'Próxima lección', nextBtn: 'Empezar →', share: 'Comparte tu progreso'
    }
};

let currentInterfaceLang = localStorage.getItem('interfaceLang') || 'fr';

function applyPgLang(lang) {
    const t = pgTranslations[lang];
    if (!t) return;

    document.getElementById('pg-title').textContent = t.title;
    document.getElementById('pg-subtitle').textContent = t.subtitle;
    document.getElementById('pg-label-xp').textContent = t.xpLabel;
    document.getElementById('pg-label-lessons').textContent = t.lessonsLabel;
    document.getElementById('pg-label-streak').textContent = t.streakLabel;
    document.getElementById('pg-label-time').textContent = t.timeLabel;
    document.getElementById('pg-label-period').textContent = t.period;
    document.getElementById('pg-label-type').textContent = t.type;
    document.getElementById('pg-label-lang').textContent = t.lang;
    document.getElementById('pg-chart-bar-title').textContent = t.barTitle;
    document.getElementById('pg-chart-line-title').textContent = t.lineTitle;
    document.getElementById('pg-modules-title').textContent = t.modulesTitle;
    document.getElementById('pg-modules-link').textContent = t.modulesLink;
    document.getElementById('pg-compare-title').textContent = t.compareTitle;
    document.getElementById('pg-history-title').textContent = t.historyTitle;
    document.getElementById('pg-history-link').textContent = t.historyLink;
    document.getElementById('pg-level-title').textContent = t.levelTitle;
    document.getElementById('pg-motiv-title').textContent = t.motivTitle;
    document.getElementById('pg-obj-title').textContent = t.objTitle;
    document.getElementById('pg-mini-title').textContent = t.miniTitle;
    document.getElementById('pg-next-title').textContent = t.nextTitle;
    document.getElementById('pg-next-btn').textContent = t.nextBtn;
    document.getElementById('pg-share-text').textContent = t.share;

    const motEl = document.getElementById('pg-motiv-text');
    if (motEl) motEl.innerHTML = t.motivText + '<br><strong id="pg-motivation-name">' + userName + '</strong> ! 📊';

    const flags = { fr: 'fr.png', en: 'en.png', es: 'es.png' };
    const names = { fr: 'Français', en: 'English', es: 'Español' };
    document.getElementById('pg-flag').src = `images/flags/${flags[lang]}`;
    document.getElementById('pg-lang-text').textContent = names[lang];
}

document.querySelectorAll('.pg-lang-item').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        currentInterfaceLang = lang;
        localStorage.setItem('interfaceLang', lang);
        applyPgLang(lang);
        if (langDrop) langDrop.classList.add('hidden');
    });
});

applyPgLang(currentInterfaceLang);
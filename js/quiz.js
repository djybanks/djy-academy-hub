// VÉRIFIER SI CONNECTÉ
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// VARIABLES
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswers = [];
let timer = null;
let timeLeft = 15;
let totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
let currentQuizType = '';
let currentQuizModuleId = null;
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
const userName = localStorage.getItem('userName') || 'Djybanks';
const currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
const bestQuizScore = parseInt(localStorage.getItem('bestQuizScore')) || 0;
const completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || {};
const lessonsCount = Object.keys(completedLessons).length;

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
document.getElementById('qz-avatar').textContent = userName.substring(0, 2).toUpperCase();
document.getElementById('qz-username').textContent = userName;
document.getElementById('qz-level').textContent = `Niveau ${levelInfo.current.level}`;
document.getElementById('qz-motivation-name').textContent = userName;
document.getElementById('total-xp').textContent = totalXP;

const savedColor = localStorage.getItem('userAvatarColor');
if (savedColor) document.getElementById('qz-avatar').style.background = savedColor;

// DRAPEAU
const flagMap = { english: { src: 'images/flags/en.png', text: 'English' }, french: { src: 'images/flags/fr.png', text: 'Français' }, spanish: { src: 'images/flags/es.png', text: 'Español' } };
document.getElementById('qz-flag').src = flagMap[selectedLanguage].src;
document.getElementById('qz-lang-text').textContent = flagMap[selectedLanguage].text;

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
    const c = document.getElementById('qz-particles');
    if (!c) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'qz-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.3 + 0.1;
        c.appendChild(p);
    }
})();

// LANG DROPDOWN
const langSel = document.getElementById('qz-lang-selector');
const langDrop = document.getElementById('qz-lang-dropdown');
if (langSel && langDrop) {
    langSel.addEventListener('click', (e) => { e.stopPropagation(); langDrop.classList.toggle('hidden'); });
    document.addEventListener('click', () => langDrop.classList.add('hidden'));
    langDrop.addEventListener('click', (e) => e.stopPropagation());
}

// STATS
function updateStats() {
    document.getElementById('qz-stat-lessons').textContent = lessonsCount;
    document.getElementById('qz-stat-xp').textContent = totalXP.toLocaleString();
    document.getElementById('qz-stat-streak').textContent = currentStreak + ' j';
    document.getElementById('qz-stat-best').textContent = bestQuizScore > 0 ? bestQuizScore + '/10' : '—';
    document.getElementById('mini-lessons').textContent = lessonsCount;
    document.getElementById('mini-xp').textContent = totalXP > 999 ? (totalXP/1000).toFixed(1) + 'k' : totalXP;
    document.getElementById('mini-streak').textContent = currentStreak + ' j';
    document.getElementById('mini-best').textContent = bestQuizScore > 0 ? bestQuizScore + '/10' : '—';
    document.getElementById('total-xp').textContent = totalXP;
    document.getElementById('best-score-display').textContent = bestQuizScore > 0 ? bestQuizScore + ' / 10' : '0 / 10';
    document.getElementById('best-score-label').textContent = bestQuizScore > 0 ? 'Score personnel' : 'Aucun quiz terminé';
    document.getElementById('stat-lessons-bar').style.width = Math.min((lessonsCount / 75) * 100, 100) + '%';
    document.getElementById('stat-xp-bar').style.width = Math.min((totalXP / 5000) * 100, 100) + '%';
    document.getElementById('stat-streak-bar').style.width = Math.min((currentStreak / 30) * 100, 100) + '%';
    document.getElementById('stat-best-bar').style.width = (bestQuizScore / 10) * 100 + '%';
}
updateStats();

// PROGRESSION DONUT
function updateProgression() {
    const pct = Math.round((lessonsCount / 25) * 100);
    document.getElementById('qz-donut-percent').textContent = pct + '%';
    document.getElementById('qz-donut-progress').style.strokeDashoffset = 314 - (314 * pct / 100);
    if (levelInfo.next) {
        const xpIn = totalXP - levelInfo.current.xpRequired;
        const xpNeed = levelInfo.next.xpRequired - levelInfo.current.xpRequired;
        const barPct = Math.round((xpIn / xpNeed) * 100);
        document.getElementById('qz-xp-fill').style.width = barPct + '%';
        document.getElementById('qz-xp-text').textContent = `${totalXP} / ${levelInfo.next.xpRequired} XP`;
        document.getElementById('qz-progress-next').textContent = `Prochain objectif : Niveau ${levelInfo.next.level}`;
    } else {
        document.getElementById('qz-xp-fill').style.width = '100%';
        document.getElementById('qz-xp-text').textContent = `${totalXP} XP — Max !`;
        document.getElementById('qz-progress-next').textContent = 'Niveau maximum !';
    }
}
updateProgression();

// OBJECTIFS
function renderObjectives() {
    const c = document.getElementById('qz-objectives');
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
        item.className = 'qz-objective-item';
        item.innerHTML = `<div class="qz-objective-check ${o.done ? 'done' : ''}">${o.done ? '✓' : ''}</div><span class="qz-objective-name">${o.name}</span><span class="qz-objective-progress">${o.cur}/${o.target}</span>`;
        c.appendChild(item);
    });
}
renderObjectives();

// CHART
function renderChart() {
    const weeklyXP = JSON.parse(localStorage.getItem('weeklyXP')) || [0,0,0,0,0,0,0];
    const maxXP = Math.max(...weeklyXP, 1);
    let total = 0;
    weeklyXP.forEach((xp, i) => {
        const bar = document.getElementById(`qz-bar-${i}`);
        if (bar) bar.style.height = ((xp / maxXP) * 100) + '%';
        total += xp;
    });
    const el = document.getElementById('weekly-total');
    if (el) el.textContent = `+${total} XP`;
}
renderChart();

// MODULES ROWS
function renderModuleRows() {
    const c = document.getElementById('qz-modules-rows');
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
        row.className = 'qz-module-row';
        row.innerHTML = `<span class="qz-module-row-icon">${module.icon}</span><div class="qz-module-row-info"><span class="qz-module-row-name">${module.title}</span><div class="qz-module-row-bar"><div class="qz-module-row-fill" style="width:${pct}%;opacity:${isLocked?'0.3':'1'}"></div></div></div><span class="qz-module-row-status ${statusClass}" style="opacity:${isLocked?'0.5':'1'}">${statusText}</span>`;
        c.appendChild(row);
    });
}
renderModuleRows();

// PROCHAINE LEÇON
function renderNextLesson() {
    if (!currentCourse) return;
    for (let module of currentCourse.modules) {
        for (let lesson of module.lessons) {
            const key = `${selectedLanguage}-${module.id}-${lesson.id}`;
            if (!completedLessons[key]) {
                document.getElementById('qz-next-icon').textContent = module.icon;
                document.getElementById('qz-next-title').textContent = lesson.title;
                document.getElementById('qz-next-module').textContent = `${module.title} — Leçon ${lesson.id}`;
                return;
            }
        }
    }
    document.getElementById('qz-next-title').textContent = 'Tout terminé !';
    document.getElementById('qz-next-module').textContent = 'Félicitations !';
}
renderNextLesson();

// MODULE SELECTOR
function renderModuleSelector() {
    const grid = document.getElementById('quiz-modules-grid');
    if (!grid || !currentCourse) return;
    grid.innerHTML = '';
    currentCourse.modules.forEach(module => {
        const card = document.createElement('div');
        card.className = 'qz-module-btn-card';
        card.innerHTML = `<span>${module.icon}</span><h4>${module.title}</h4><p>10 questions</p>`;
        card.addEventListener('click', () => { document.getElementById('module-selector-card').classList.add('hidden'); startModuleQuiz(module.id); });
        grid.appendChild(card);
    });
}
renderModuleSelector();

// QUESTIONS
function getModuleQuestions(moduleId) {
    const module = currentCourse.modules.find(m => m.id === moduleId);
    if (!module) return [];
    let q = [];
    module.lessons.forEach(lesson => { lesson.quiz.forEach(qq => { q.push({ question: qq.question, options: qq.options, correct: qq.correct, lesson: lesson.title, module: module.title }); }); });
    return q;
}

function getAllQuestions() {
    let q = [];
    currentCourse.modules.forEach(module => { module.lessons.forEach(lesson => { lesson.quiz.forEach(qq => { q.push({ question: qq.question, options: qq.options, correct: qq.correct, lesson: lesson.title, module: module.title }); }); }); });
    return q;
}

function shuffle(arr) {
    let s = arr.slice();
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
}

// DÉMARRER
function startModuleQuiz(moduleId) {
    currentQuizType = 'module'; currentQuizModuleId = moduleId;
    quizQuestions = shuffle(getModuleQuestions(moduleId)).slice(0, 10);
    startQuiz();
}

document.getElementById('start-random-btn').addEventListener('click', () => {
    currentQuizType = 'random'; currentQuizModuleId = null;
    quizQuestions = shuffle(getAllQuestions()).slice(0, 10);
    startQuiz();
});

document.getElementById('start-random-btn2').addEventListener('click', () => {
    currentQuizType = 'random'; currentQuizModuleId = null;
    quizQuestions = shuffle(getAllQuestions()).slice(0, 10);
    startQuiz();
});

document.getElementById('start-module-btn').addEventListener('click', () => {
    const card = document.getElementById('module-selector-card');
    card.classList.toggle('hidden');
});

function startQuiz() {
    currentQuizIndex = 0; quizScore = 0; quizAnswers = [];
    showView('quiz-play-view');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = quizQuestions[currentQuizIndex];
    const total = quizQuestions.length;
    document.getElementById('quiz-counter').textContent = `${currentQuizIndex + 1} / ${total}`;
    document.getElementById('quiz-top-bar').style.width = `${((currentQuizIndex + 1) / total) * 100}%`;
    document.getElementById('play-question').textContent = q.question;
    const container = document.getElementById('play-options');
    container.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'qz-play-option';
        btn.textContent = option;
        btn.addEventListener('click', () => { clearInterval(timer); handleQuizAnswer(index); });
        container.appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    timeLeft = 15;
    const timerText = document.getElementById('timer-text');
    const timerCircle = document.getElementById('timer-circle');
    timerText.textContent = timeLeft;
    timerCircle.className = 'qz-timer';
    timer = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;
        if (timeLeft <= 5) timerCircle.className = 'qz-timer danger';
        else if (timeLeft <= 10) timerCircle.className = 'qz-timer warning';
        if (timeLeft <= 0) { clearInterval(timer); handleTimeout(); }
    }, 1000);
}

function handleTimeout() {
    const q = quizQuestions[currentQuizIndex];
    const container = document.getElementById('play-options');
    const options = container.querySelectorAll('.qz-play-option');
    options.forEach((btn, i) => { btn.disabled = true; if (i === q.correct) btn.classList.add('correct'); else btn.classList.add('timeout'); });
    quizAnswers.push({ question: q.question, selected: -1, correct: q.correct, options: q.options, isCorrect: false });
    setTimeout(() => nextQuizQuestion(), 1200);
}

function handleQuizAnswer(sel) {
    const q = quizQuestions[currentQuizIndex];
    const container = document.getElementById('play-options');
    const options = container.querySelectorAll('.qz-play-option');
    options.forEach(b => b.disabled = true);
    const isCorrect = sel === q.correct;
    if (isCorrect) { options[sel].classList.add('correct'); quizScore++; }
    else { options[sel].classList.add('wrong'); options[q.correct].classList.add('correct'); }
    quizAnswers.push({ question: q.question, selected: sel, correct: q.correct, options: q.options, isCorrect });
    setTimeout(() => nextQuizQuestion(), 1200);
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) renderQuizQuestion();
    else showQuizResult();
}

function showQuizResult() {
    const total = quizQuestions.length;
    const xpEarned = quizScore * 5;
    totalXP += xpEarned;
    localStorage.setItem('totalXP', totalXP);
    if (quizScore > bestQuizScore) localStorage.setItem('bestQuizScore', quizScore);
    const d = JSON.parse(localStorage.getItem('dailyObjectives')) || {};
    d.quizDone = (d.quizDone || 0) + 1;
    d.xpGained = (d.xpGained || 0) + xpEarned;
    localStorage.setItem('dailyObjectives', JSON.stringify(d));
    updateStats(); updateProgression(); renderObjectives(); renderModuleRows();
    let icon = '🎉'; let title = 'Excellent !';
    if (quizScore < total * 0.5) { icon = '😅'; title = 'Continue à pratiquer !'; }
    else if (quizScore < total * 0.8) { icon = '👍'; title = 'Bien joué !'; }
    document.getElementById('quiz-result-icon').textContent = icon;
    document.getElementById('quiz-result-title').textContent = title;
    document.getElementById('quiz-result-score').textContent = `${quizScore} / ${total}`;
    document.getElementById('quiz-result-xp').textContent = `+${xpEarned} XP`;
    const corr = document.getElementById('result-corrections');
    corr.innerHTML = '<h3>Corrections</h3>';
    quizAnswers.forEach((a, i) => {
        const item = document.createElement('div');
        item.className = `qz-correction-item ${a.isCorrect ? 'correct-item' : 'wrong-item'}`;
        let ansText = '';
        if (a.selected === -1) { ansText = `<p class="qz-correction-answer">Ta réponse : <span class="wrong-text">Temps écoulé</span></p><p class="qz-correction-answer">Bonne réponse : <span class="correct-text">${a.options[a.correct]}</span></p>`; }
        else if (a.isCorrect) { ansText = `<p class="qz-correction-answer">Ta réponse : <span class="correct-text">${a.options[a.selected]}</span> ✅</p>`; }
        else { ansText = `<p class="qz-correction-answer">Ta réponse : <span class="wrong-text">${a.options[a.selected]}</span> ❌</p><p class="qz-correction-answer">Bonne réponse : <span class="correct-text">${a.options[a.correct]}</span></p>`; }
        item.innerHTML = `<p class="qz-correction-question">${i + 1}. ${a.question}</p>${ansText}`;
        corr.appendChild(item);
    });
    showView('quiz-result-view');
}

document.getElementById('retry-quiz-btn').addEventListener('click', () => {
    if (currentQuizType === 'module') startModuleQuiz(currentQuizModuleId);
    else { quizQuestions = shuffle(getAllQuestions()).slice(0, 10); startQuiz(); }
});

document.getElementById('back-to-quiz-select-btn').addEventListener('click', () => showView('quiz-select-view'));
document.getElementById('quit-quiz-btn').addEventListener('click', () => { clearInterval(timer); showView('quiz-select-view'); });

function showView(viewId) {
    ['quiz-select-view', 'quiz-play-view', 'quiz-result-view'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(viewId);
    if (target) target.classList.remove('hidden');
}

// FOOTER
const quotes = ["La langue est la carte du monde.", "Une langue différente est une vision différente de la vie.", "Les limites de ma langue sont les limites de mon monde.", "Chaque nouvelle langue ouvre la porte d'un nouveau monde.", "Parler une autre langue, c'est posséder une deuxième âme."];
const quoteEl = document.getElementById('qz-footer-quote');
if (quoteEl) quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// SOCIAL SHARE
document.querySelectorAll('.qz-social').forEach(btn => {
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
const quizTranslations = {
    fr: {
        title: 'Quiz', subtitle: 'Teste tes connaissances',
        selectTitle: 'Choisis ton quiz', moduleQuizTitle: 'Quiz par Module',
        randomTitle: 'Quiz Aléatoire', randomText: '10 questions • Tous modules',
        basesTitle: 'Module Bases', basesSub: '15 questions complétées',
        vocabTitle: 'Module Vocabulaire', vocabSub: '9 questions complétées',
        bestTitle: 'Meilleur Score', statsTitle: 'Statistiques',
        perfTitle: 'Performance cette semaine', modulesTitle: 'Modules disponibles',
        quickTitle: 'Lancer un quiz rapide', historyTitle: 'Historique des quiz',
        historyLink: 'Voir tout',
        btn1: 'Quiz Aléatoire', btn1sub: '10 questions • Tous modules',
        btn2: 'Quiz par Module', btn2sub: 'Choisir un module spécifique',
        btn3: 'Défi du jour', btn3sub: '5 questions chronométrées',
        progressTitle: 'Progression actuelle', motivTitle: 'Motivation',
        motivText: 'Teste tes connaissances,', objTitle: 'Objectifs du jour',
        statsRapTitle: 'Statistiques rapides', nextTitle: 'Prochaine leçon',
        nextBtn: 'Commencer →', share: 'Partage tes progrès'
    },
    en: {
        title: 'Quiz', subtitle: 'Test your knowledge',
        selectTitle: 'Choose your quiz', moduleQuizTitle: 'Quiz by Module',
        randomTitle: 'Random Quiz', randomText: '10 questions • All modules',
        basesTitle: 'Basics Module', basesSub: '15 questions completed',
        vocabTitle: 'Vocabulary Module', vocabSub: '9 questions completed',
        bestTitle: 'Best Score', statsTitle: 'Statistics',
        perfTitle: 'Performance this week', modulesTitle: 'Available modules',
        quickTitle: 'Start a quick quiz', historyTitle: 'Quiz History',
        historyLink: 'See all',
        btn1: 'Random Quiz', btn1sub: '10 questions • All modules',
        btn2: 'Quiz by Module', btn2sub: 'Choose a specific module',
        btn3: 'Daily Challenge', btn3sub: '5 timed questions',
        progressTitle: 'Current Progress', motivTitle: 'Motivation',
        motivText: 'Test your knowledge,', objTitle: 'Daily Goals',
        statsRapTitle: 'Quick Stats', nextTitle: 'Next Lesson',
        nextBtn: 'Start →', share: 'Share your progress'
    },
    es: {
        title: 'Quiz', subtitle: 'Pon a prueba tus conocimientos',
        selectTitle: 'Elige tu quiz', moduleQuizTitle: 'Quiz por Módulo',
        randomTitle: 'Quiz Aleatorio', randomText: '10 preguntas • Todos los módulos',
        basesTitle: 'Módulo Bases', basesSub: '15 preguntas completadas',
        vocabTitle: 'Módulo Vocabulario', vocabSub: '9 preguntas completadas',
        bestTitle: 'Mejor Puntuación', statsTitle: 'Estadísticas',
        perfTitle: 'Rendimiento esta semana', modulesTitle: 'Módulos disponibles',
        quickTitle: 'Iniciar un quiz rápido', historyTitle: 'Historial de quiz',
        historyLink: 'Ver todo',
        btn1: 'Quiz Aleatorio', btn1sub: '10 preguntas • Todos los módulos',
        btn2: 'Quiz por Módulo', btn2sub: 'Elegir un módulo específico',
        btn3: 'Desafío del día', btn3sub: '5 preguntas cronometradas',
        progressTitle: 'Progreso actual', motivTitle: 'Motivación',
        motivText: 'Pon a prueba tus conocimientos,', objTitle: 'Objetivos del día',
        statsRapTitle: 'Estadísticas rápidas', nextTitle: 'Próxima lección',
        nextBtn: 'Empezar →', share: 'Comparte tu progreso'
    }
};

let currentInterfaceLang = localStorage.getItem('interfaceLang') || 'fr';

function applyQuizLang(lang) {
    const t = quizTranslations[lang];
    if (!t) return;

    const titleEl = document.querySelector('.qz-header-title');
    const subEl = document.querySelector('.qz-header-sub');
    if (titleEl) titleEl.textContent = t.title;
    if (subEl) subEl.textContent = t.subtitle;

    const sectionTitles = document.querySelectorAll('.qz-section-title');
    if (sectionTitles[0]) sectionTitles[0].textContent = t.selectTitle;
    if (sectionTitles[1]) sectionTitles[1].textContent = t.moduleQuizTitle;

    const selTitles = document.querySelectorAll('.qz-sel-title');
    if (selTitles[0]) selTitles[0].textContent = t.randomTitle;
    if (selTitles[1]) selTitles[1].textContent = t.basesTitle;
    if (selTitles[2]) selTitles[2].textContent = t.vocabTitle;
    if (selTitles[3]) selTitles[3].textContent = t.bestTitle;

    const selSubs = document.querySelectorAll('.qz-sel-sub');
    if (selSubs[0]) selSubs[0].textContent = t.randomText;
    if (selSubs[1]) selSubs[1].textContent = t.basesSub;
    if (selSubs[2]) selSubs[2].textContent = t.vocabSub;

    const quickTitles = document.querySelectorAll('.qz-quick-title');
    const quickSubs = document.querySelectorAll('.qz-quick-sub');
    if (quickTitles[0]) quickTitles[0].textContent = t.btn1;
    if (quickTitles[1]) quickTitles[1].textContent = t.btn2;
    if (quickTitles[2]) quickTitles[2].textContent = t.btn3;
    if (quickSubs[0]) quickSubs[0].textContent = t.btn1sub;
    if (quickSubs[1]) quickSubs[1].textContent = t.btn2sub;
    if (quickSubs[2]) quickSubs[2].textContent = t.btn3sub;

    const motEl = document.querySelector('.qz-motivation-msg');
    if (motEl) motEl.innerHTML = t.motivText + '<br><strong id="qz-motivation-name">' + userName + '</strong> ! 🔥';

    const motivTitleEl = document.querySelector('.qz-motivation-title');
    if (motivTitleEl) motivTitleEl.textContent = t.motivTitle;

    const nextBtn = document.querySelector('.qz-btn-next-lesson');
    if (nextBtn) nextBtn.textContent = t.nextBtn;

    const shareEl = document.querySelector('.qz-footer-share');
    if (shareEl) shareEl.textContent = t.share;

    const histLink = document.querySelector('.qz-card-header-row .qz-card-link');
    if (histLink) histLink.textContent = t.historyLink;

    const flags = { fr: 'fr.png', en: 'en.png', es: 'es.png' };
    const names = { fr: 'Français', en: 'English', es: 'Español' };
    const flagEl = document.getElementById('qz-flag');
    const langTextEl = document.getElementById('qz-lang-text');
    if (flagEl) flagEl.src = `images/flags/${flags[lang]}`;
    if (langTextEl) langTextEl.textContent = names[lang];
}

document.querySelectorAll('.qz-lang-item').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        currentInterfaceLang = lang;
        localStorage.setItem('interfaceLang', lang);
        applyQuizLang(lang);
        if (langDrop) langDrop.classList.add('hidden');
    });
});

applyQuizLang(currentInterfaceLang);
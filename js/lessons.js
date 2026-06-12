// API
const API = 'https://djy-backend.onrender.com';

// SYNC PROGRESSION DEPUIS SUPABASE
async function syncProgression() {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    try {
        const res = await fetch(`${API}/user/progression`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) return;

        const data = await res.json();
        if (!data.data) return;

        data.data.forEach(prog => {
            const existing = JSON.parse(localStorage.getItem('completedLessons')) || {};
            const merged = { ...existing, ...prog.lessons_completed };
            localStorage.setItem('completedLessons', JSON.stringify(merged));
        });

        completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || {};
        updateStats();
        renderLangCards();
        renderModules();

    } catch (err) {
        console.log('Sync offline — données locales utilisées');
    }
}

async function saveProgressionToSupabase() {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    const lessonsCount = Object.keys(completedLessons).length;

    try {
        await fetch(`${API}/user/progression`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                language: selectedLanguage,
                lessons_completed: completedLessons,
                total_lessons_done: lessonsCount
            })
        });

        await fetch(`${API}/user/xp`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ xp: totalXP })
        });

    } catch (err) {
        console.log('Erreur sauvegarde progression');
    }
}

// VÉRIFIER SI CONNECTÉ
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// VARIABLES
let currentModule = null;
let currentLesson = null;
let currentQuestionIndex = 0;
let score = 0;
let totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || {};
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
const userName = localStorage.getItem('userName') || 'Djybanks';
const currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
const bestQuizScore = parseInt(localStorage.getItem('bestQuizScore')) || 0;

let currentCourse = null;
let courseTitle = '';

if (selectedLanguage === 'english') { currentCourse = englishCourse; courseTitle = 'English'; }
else if (selectedLanguage === 'french') { currentCourse = frenchCourse; courseTitle = 'Français'; }
else if (selectedLanguage === 'spanish') { currentCourse = spanishCourse; courseTitle = 'Español'; }

// NIVEAUX
const levelSystem = [
    { level: 1, xpRequired: 0, title: "Débutant" },
    { level: 2, xpRequired: 100, title: "Débutant" },
    { level: 3, xpRequired: 250, title: "Débutant" },
    { level: 4, xpRequired: 450, title: "Élémentaire" },
    { level: 5, xpRequired: 700, title: "Élémentaire" },
    { level: 6, xpRequired: 1000, title: "Intermédiaire" }
];

function getLevelInfo(xp) {
    let c = levelSystem[0];
    for (let i = 0; i < levelSystem.length; i++) { if (xp >= levelSystem[i].xpRequired) c = levelSystem[i]; }
    return c;
}

const levelInfo = getLevelInfo(totalXP);

// HEADER
document.getElementById('lessons-title').textContent = 'Cours — ' + courseTitle;
document.getElementById('les-avatar').textContent = userName.substring(0, 2).toUpperCase();
document.getElementById('les-username').textContent = userName;
document.getElementById('les-level').textContent = `Niveau ${levelInfo.level}`;
document.getElementById('les-motivation-name').textContent = userName;

// DRAPEAU
const flagMap = { english: { src: 'images/flags/en.png', text: 'English' }, french: { src: 'images/flags/fr.png', text: 'Français' }, spanish: { src: 'images/flags/es.png', text: 'Español' } };
document.getElementById('les-flag').src = flagMap[selectedLanguage].src;
document.getElementById('les-lang-text').textContent = flagMap[selectedLanguage].text;

const savedColor = localStorage.getItem('userAvatarColor');
if (savedColor) document.getElementById('les-avatar').style.background = savedColor;

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
    const c = document.getElementById('les-particles');
    if (!c) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'les-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.3 + 0.1;
        c.appendChild(p);
    }
})();

// LANG DROPDOWN HEADER
const langSel = document.getElementById('les-lang-selector');
const langDrop = document.getElementById('les-lang-dropdown');
if (langSel && langDrop) {
    langSel.addEventListener('click', (e) => { e.stopPropagation(); langDrop.classList.toggle('hidden'); });
    document.addEventListener('click', () => langDrop.classList.add('hidden'));
    langDrop.addEventListener('click', (e) => e.stopPropagation());
}

// STATS DROITE
function updateStats() {
    const lessonsCount = Object.keys(completedLessons).length;
    document.getElementById('les-stat-lessons').textContent = lessonsCount;
    document.getElementById('les-stat-xp').textContent = totalXP.toLocaleString();
    document.getElementById('les-stat-streak').textContent = currentStreak + ' jours';
    document.getElementById('les-stat-best').textContent = bestQuizScore > 0 ? bestQuizScore + '/10' : '—';
    document.getElementById('total-xp').textContent = totalXP;
}
updateStats();

// OBJECTIFS
function renderObjectives() {
    const c = document.getElementById('les-objectives');
    if (!c) return;
    const today = new Date().toDateString();
    const d = JSON.parse(localStorage.getItem('dailyObjectives')) || {};
    if (d.date !== today) { d.date = today; d.lessonDone = 0; d.xpGained = 0; d.quizDone = 0; localStorage.setItem('dailyObjectives', JSON.stringify(d)); }

    const t = interfaceTranslations[currentInterfaceLang] || interfaceTranslations.fr;
    const objs = [
        { name: t.obj1, cur: Math.min(d.lessonDone || 0, 1), target: 1, done: (d.lessonDone || 0) >= 1 },
        { name: t.obj2, cur: Math.min(d.xpGained || 0, 20), target: 20, done: (d.xpGained || 0) >= 20 },
        { name: t.obj3, cur: Math.min(d.quizDone || 0, 1), target: 1, done: (d.quizDone || 0) >= 1 }
    ];

    c.innerHTML = '';
    objs.forEach(o => {
        const item = document.createElement('div');
        item.className = 'les-objective-item';
        item.innerHTML = `<div class="les-objective-check ${o.done ? 'done' : ''}">${o.done ? '✓' : ''}</div><div class="les-objective-info"><span class="les-objective-name">${o.name}</span><span class="les-objective-progress">${o.cur}/${o.target}</span></div>`;
        c.appendChild(item);
    });
}

// LANGUE CARDS
function renderLangCards() {
    const c = document.getElementById('les-lang-cards');
    if (!c) return;
    c.innerHTML = '';

    const langs = [
        { id: 'english', name: 'English', flag: 'images/flags/en.png', course: englishCourse },
        { id: 'french', name: 'Français', flag: 'images/flags/fr.png', course: frenchCourse },
        { id: 'spanish', name: 'Español', flag: 'images/flags/es.png', course: spanishCourse }
    ];

    langs.forEach(lang => {
        const total = 25;
        let done = 0;
        for (let m = 1; m <= 5; m++) { for (let l = 1; l <= 5; l++) { if (completedLessons[`${lang.id}-${m}-${l}`]) done++; } }
        const pct = Math.round((done / total) * 100);

        const card = document.createElement('div');
        card.className = `les-lang-card ${lang.id === selectedLanguage ? 'selected' : ''}`;
        card.innerHTML = `<img src="${lang.flag}" alt="${lang.name}" class="les-lang-card-flag"><span class="les-lang-card-name">${lang.name}</span><span class="les-lang-card-count">${done} / ${total} leçons</span><div class="les-lang-card-bar"><div class="les-lang-card-fill" style="width:${pct}%"></div></div>`;

        card.addEventListener('click', () => {
            selectedLanguage = lang.id;

            if (lang.id === 'english') currentCourse = englishCourse;
            else if (lang.id === 'french') currentCourse = frenchCourse;
            else if (lang.id === 'spanish') currentCourse = spanishCourse;

            const titles = { english: 'English', french: 'Français', spanish: 'Español' };
            courseTitle = titles[lang.id];

            const t = interfaceTranslations[currentInterfaceLang] || interfaceTranslations.fr;
            document.getElementById('lessons-title').textContent = t.title + ' — ' + courseTitle;

            document.querySelectorAll('.les-lang-card').forEach(cc => cc.classList.remove('selected'));
            card.classList.add('selected');

            localStorage.setItem('selectedLanguage', lang.id);

            showView('modules-view');
            renderModules();
            updateStats();
        });

        c.appendChild(card);
    });
}
renderLangCards();

// MODULES
const moduleColors = ['blue', 'orange', 'green', 'purple', 'pink'];

function renderModules() {
    const c = document.getElementById('modules-list');
    if (!c) return;
    c.innerHTML = '';

    currentCourse.modules.forEach((module, index) => {
        const completedCount = getCompletedCount(module.id);
        const total = module.lessons.length;
        const pct = Math.round((completedCount / total) * 100);
        const isLocked = module.id > 1 && getCompletedCount(module.id - 1) < currentCourse.modules[module.id - 2].lessons.length;

        let statusClass = 'les-status-locked';
        let statusText = '🔒 Verrouillé';
        if (completedCount === total) { statusClass = 'les-status-complete'; statusText = '✅ Terminé'; }
        else if (completedCount > 0) { statusClass = 'les-status-progress'; statusText = '📖 En cours'; }
        else if (!isLocked) { statusClass = 'les-status-progress'; statusText = '▶️ Disponible'; }

        const section = document.createElement('div');
        section.className = 'les-module-section';

        section.innerHTML = `
            <div class="les-module-header" data-module="${module.id}">
                <span class="les-module-icon">${module.icon}</span>
                <div class="les-module-info">
                    <span class="les-module-title">Module ${module.id} : ${module.title}</span>
                    <span class="les-module-progress-text">${completedCount} / ${total} leçons — ${pct}%</span>
                    <div class="les-module-bar"><div class="les-module-fill ${moduleColors[index]}" style="width:${pct}%"></div></div>
                </div>
                <span class="les-module-status ${statusClass}">${statusText}</span>
            </div>
            <div class="les-lessons-grid hidden" id="lessons-grid-${module.id}"></div>
        `;

        const header = section.querySelector('.les-module-header');
        const grid = section.querySelector('.les-lessons-grid');

        header.addEventListener('click', () => {
            grid.classList.toggle('hidden');
            if (!grid.classList.contains('hidden') && grid.children.length === 0) {
                renderLessonsGrid(module, grid, isLocked);
            }
        });

        c.appendChild(section);
    });
}

function renderLessonsGrid(module, grid, isModuleLocked) {
    module.lessons.forEach((lesson, index) => {
        const lessonKey = `${selectedLanguage}-${module.id}-${lesson.id}`;
        const isCompleted = completedLessons[lessonKey];
        const prevKey = `${selectedLanguage}-${module.id}-${module.lessons[index - 1] ? module.lessons[index - 1].id : ''}`;
        const isLocked = (index > 0 && !completedLessons[prevKey]) || isModuleLocked;

        const btn = document.createElement('div');
        btn.className = `les-lesson-btn ${isCompleted ? 'les-lesson-completed' : ''} ${isLocked ? 'les-lesson-locked' : ''}`;
        btn.innerHTML = `
            <span class="les-lesson-number">Leçon ${lesson.id}</span>
            <span class="les-lesson-title">${lesson.title}</span>
            <span class="les-lesson-xp">⚡ ${lesson.xp} XP</span>
            <span class="les-lesson-status-icon">${isCompleted ? '✅' : isLocked ? '🔒' : '▶️'}</span>
        `;

        if (!isLocked) {
            btn.addEventListener('click', () => openLesson(module, lesson));
        }

        grid.appendChild(btn);
    });
}

function getCompletedCount(moduleId) {
    const module = currentCourse.modules.find(m => m.id === moduleId);
    if (!module) return 0;
    return module.lessons.filter(l => completedLessons[`${selectedLanguage}-${moduleId}-${l.id}`]).length;
}

// OUVRIR LEÇON
function openLesson(module, lesson) {
    currentModule = module;
    currentLesson = lesson;

    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-xp').textContent = `⚡ ${lesson.xp} XP`;
    document.getElementById('lesson-explanation').textContent = lesson.content.explanation;

    const exList = document.getElementById('examples-list');
    exList.innerHTML = '';
    lesson.content.examples.forEach(ex => {
        const item = document.createElement('div');
        item.className = 'les-example-item';
        item.innerHTML = `<span class="les-example-text">${ex.text}</span><span class="les-example-translation">${ex.translation}</span>`;
        exList.appendChild(item);
    });

    showView('lesson-view');
}

// QUIZ
document.getElementById('start-quiz-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    showView('quiz-view');
    renderQuestion();
});

function renderQuestion() {
    const q = currentLesson.quiz[currentQuestionIndex];
    const total = currentLesson.quiz.length;

    document.getElementById('quiz-progress-text').textContent = `Question ${currentQuestionIndex + 1}/${total}`;
    document.getElementById('quiz-progress-bar').style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;
    document.getElementById('quiz-question').textContent = q.question;

    const opts = document.getElementById('quiz-options');
    opts.innerHTML = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'les-quiz-option';
        btn.textContent = option;
        btn.addEventListener('click', () => handleAnswer(index, q.correct, opts));
        opts.appendChild(btn);
    });
}

function handleAnswer(sel, correct, container) {
    const options = container.querySelectorAll('.les-quiz-option');
    options.forEach(b => b.disabled = true);

    if (sel === correct) { options[sel].classList.add('correct'); score++; }
    else { options[sel].classList.add('wrong'); options[correct].classList.add('correct'); }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentLesson.quiz.length) renderQuestion();
        else showResult();
    }, 1200);
}

function showResult() {
    const total = currentLesson.quiz.length;
    const passed = score >= Math.ceil(total / 2);

    if (passed) {
        const key = `${selectedLanguage}-${currentModule.id}-${currentLesson.id}`;
        if (!completedLessons[key]) {
            completedLessons[key] = true;
            totalXP += currentLesson.xp;
            localStorage.setItem('totalXP', totalXP);
            localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
            localStorage.setItem('lessonsCompleted', Object.keys(completedLessons).length);

            const d = JSON.parse(localStorage.getItem('dailyObjectives')) || {};
            d.lessonDone = (d.lessonDone || 0) + 1;
            d.xpGained = (d.xpGained || 0) + currentLesson.xp;
            localStorage.setItem('dailyObjectives', JSON.stringify(d));

            // SAUVEGARDER DANS SUPABASE
            saveProgressionToSupabase();

            updateStats();
            renderLangCards();
            renderObjectives();
        }
    }

    document.getElementById('result-icon').textContent = passed ? '🎉' : '😅';
    document.getElementById('result-title').textContent = passed ? 'Leçon terminée !' : 'Essaie encore !';
    document.getElementById('result-text').textContent = `Score : ${score}/${total}`;
    document.getElementById('result-xp').textContent = passed ? `+${currentLesson.xp} XP gagnés !` : 'Continue à pratiquer';

    showView('result-view');
}

// LEÇON SUIVANTE
document.getElementById('next-lesson-btn').addEventListener('click', () => {
    const idx = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
    const next = currentModule.lessons[idx + 1];
    if (next) openLesson(currentModule, next);
    else { showView('modules-view'); renderModules(); }
});

// RETOUR
document.getElementById('back-to-modules-btn').addEventListener('click', () => { showView('modules-view'); renderModules(); });
document.getElementById('back-btn').addEventListener('click', () => { showView('modules-view'); renderModules(); });
document.getElementById('back-to-lesson-btn').addEventListener('click', () => showView('lesson-view'));

// CHANGER DE VUE
function showView(viewId) {
    ['modules-view', 'lesson-view', 'quiz-view', 'result-view'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(viewId);
    if (target) target.classList.remove('hidden');
}

// FOOTER QUOTE
const quotes = ["La langue est la carte du monde.", "Une langue différente est une vision différente de la vie.", "Les limites de ma langue sont les limites de mon monde.", "Chaque nouvelle langue ouvre la porte d'un nouveau monde.", "Parler une autre langue, c'est posséder une deuxième âme."];
const quoteEl = document.getElementById('les-footer-quote');
if (quoteEl) quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// DÉCONNEXION
document.getElementById('side-logout').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
});

// TRADUCTION INTERFACE
const interfaceTranslations = {
    fr: {
        title: 'Cours',
        subtitle: 'Sélectionne un module pour commencer',
        motivation: 'Continue tes leçons,',
        stats: 'Statistiques',
        objectives: 'Objectifs du jour',
        obj1: 'Compléter 1 leçon',
        obj2: 'Gagner 20 XP',
        obj3: 'Faire 1 quiz',
        lessons: 'Leçons terminées',
        xp: 'XP gagnés',
        streak: 'Streak',
        best: 'Meilleur score',
        back: 'Retour',
        backLesson: 'Retour à la leçon',
        continue: 'Continuer →',
        nextLesson: 'Leçon suivante →',
        backModules: 'Retour aux modules',
        share: 'Partage tes progrès'
    },
    en: {
        title: 'Courses',
        subtitle: 'Select a module to begin',
        motivation: 'Keep learning,',
        stats: 'Statistics',
        objectives: 'Daily Goals',
        obj1: 'Complete 1 lesson',
        obj2: 'Earn 20 XP',
        obj3: 'Take 1 quiz',
        lessons: 'Lessons completed',
        xp: 'XP earned',
        streak: 'Streak',
        best: 'Best score',
        back: 'Back',
        backLesson: 'Back to lesson',
        continue: 'Continue →',
        nextLesson: 'Next lesson →',
        backModules: 'Back to modules',
        share: 'Share your progress'
    },
    es: {
        title: 'Cursos',
        subtitle: 'Selecciona un módulo para empezar',
        motivation: 'Sigue aprendiendo,',
        stats: 'Estadísticas',
        objectives: 'Objetivos del día',
        obj1: 'Completar 1 lección',
        obj2: 'Ganar 20 XP',
        obj3: 'Hacer 1 quiz',
        lessons: 'Lecciones completadas',
        xp: 'XP ganados',
        streak: 'Racha',
        best: 'Mejor puntuación',
        back: 'Volver',
        backLesson: 'Volver a la lección',
        continue: 'Continuar →',
        nextLesson: 'Siguiente lección →',
        backModules: 'Volver a módulos',
        share: 'Comparte tu progreso'
    }
};

let currentInterfaceLang = localStorage.getItem('interfaceLang') || 'fr';

function applyInterfaceLang(lang) {
    const t = interfaceTranslations[lang];
    if (!t) return;

    document.getElementById('lessons-title').textContent = t.title + ' — ' + courseTitle;
    document.getElementById('lessons-subtitle').textContent = t.subtitle;

    const motEl = document.querySelector('.les-motivation-msg');
    if (motEl) motEl.innerHTML = t.motivation + '<br><strong id="les-motivation-name">' + userName + '</strong> ! 🔥';

    const statsTitle = document.querySelector('.les-stats-card .les-card-title');
    if (statsTitle) statsTitle.textContent = t.stats;

    const objTitle = document.querySelector('.les-objectives-card .les-card-title');
    if (objTitle) objTitle.textContent = t.objectives;

    const shareEl = document.querySelector('.les-footer-share');
    if (shareEl) shareEl.textContent = t.share;

    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.innerHTML = '<i data-lucide="arrow-left"></i> ' + t.back;

    const backLessonBtn = document.getElementById('back-to-lesson-btn');
    if (backLessonBtn) backLessonBtn.innerHTML = '<i data-lucide="arrow-left"></i> ' + t.backLesson;

    const contBtn = document.getElementById('start-quiz-btn');
    if (contBtn) contBtn.textContent = t.continue;

    const nextBtn = document.getElementById('next-lesson-btn');
    if (nextBtn) nextBtn.textContent = t.nextLesson;

    const backModBtn = document.getElementById('back-to-modules-btn');
    if (backModBtn) backModBtn.textContent = t.backModules;

    const flags = { fr: 'fr.png', en: 'en.png', es: 'es.png' };
    const names = { fr: 'Français', en: 'English', es: 'Español' };
    document.getElementById('les-flag').src = `images/flags/${flags[lang]}`;
    document.getElementById('les-lang-text').textContent = names[lang];

    renderObjectives();
    lucide.createIcons();
}

document.querySelectorAll('.les-lang-item').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        currentInterfaceLang = lang;
        localStorage.setItem('interfaceLang', lang);
        applyInterfaceLang(lang);
        if (langDrop) langDrop.classList.add('hidden');
    });
});

applyInterfaceLang(currentInterfaceLang);

// INITIALISATION
renderModules();
syncProgression();
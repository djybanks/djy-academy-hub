// VÉRIFIER SI CONNECTÉ
// --- FORCE LA CONNEXION AUTOMATIQUE POUR DJYBANKS ---
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('userName', 'Djybanks');
localStorage.setItem('totalXP', '2450'); // Ton XP Niveau 12
// -----------------------------------------------------

if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// INITIALISER LE STREAK
const currentStreak = initializeStreak();

// VARIABLES
const userName = localStorage.getItem('userName') || 'Djybanks';
const userFullName = localStorage.getItem('userFullName') || userName;
const userEmail = localStorage.getItem('userEmail') || 'djybanks@email.com';
const userCountry = localStorage.getItem('userCountry') || '—';
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
const userObjectives = JSON.parse(localStorage.getItem('userObjectives')) || [];
let userBio = localStorage.getItem('userBio') || 'Building my language future one lesson at a time.';
let totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
const completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || {};
const lessonsCount = Object.keys(completedLessons).length;
const bestQuizScore = parseInt(localStorage.getItem('bestQuizScore')) || 0;
const joinDate = localStorage.getItem('joinDate') || new Date().toISOString();

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
    { level: 10, xpRequired: 2700, title: "Avancé" },
    { level: 11, xpRequired: 3300, title: "Avancé" },
    { level: 12, xpRequired: 4000, title: "Expert" }
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

// THÈME
const themeBtn = document.getElementById('theme-btn');
const moonIcon = document.getElementById('theme-icon-moon');
const sunIcon = document.getElementById('theme-icon-sun');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-dashboard');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-dashboard');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
    localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
    setTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light');
});

setTheme(localStorage.getItem('theme') || 'dark');

// PARTICULES
function createParticles() {
    const container = document.getElementById('pro-particles');
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'pro-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.3 + 0.1;
        container.appendChild(p);
    }
}
createParticles();

// DRAPEAU
const flagMap = {
    english: { src: 'images/flags/en.png', text: 'English' },
    french: { src: 'images/flags/fr.png', text: 'Français' },
    spanish: { src: 'images/flags/es.png', text: 'Español' }
};
const flagInfo = flagMap[selectedLanguage];
document.getElementById('pro-flag').src = flagInfo.src;
document.getElementById('pro-lang-text').textContent = flagInfo.text;

// LANG DROPDOWN
const langSelector = document.getElementById('pro-lang-selector');
const langDropdown = document.getElementById('pro-lang-dropdown');
if (langSelector && langDropdown) {
    langSelector.addEventListener('click', (e) => { e.stopPropagation(); langDropdown.classList.toggle('hidden'); });
    document.addEventListener('click', () => langDropdown.classList.add('hidden'));
    langDropdown.addEventListener('click', (e) => e.stopPropagation());
}

// MAPS
const countryNames = { fr:'France',be:'Belgique',ch:'Suisse',ca:'Canada',ma:'Maroc',dz:'Algérie',tn:'Tunisie',sn:'Sénégal',ci:"Côte d'Ivoire",cm:'Cameroun',ht:'Haïti',us:'États-Unis',gb:'Royaume-Uni',es:'Espagne',mx:'Mexique',br:'Brésil',other:'Autre' };
const langNames = { fr:'Français',en:'Anglais',es:'Espagnol',ar:'Arabe',pt:'Portugais',de:'Allemand',it:'Italien',zh:'Chinois',other:'Autre' };
const targetLangNames = { english:'Anglais',french:'Français',spanish:'Espagnol' };
const objectiveNames = { travel:'Voyager',work:'Travail',conversation:'Conversation',studies:'Études',business:'Business' };

// AFFICHER LE PROFIL
function displayProfile() {
    const initials = userName.substring(0, 2).toUpperCase();
    document.getElementById('pro-header-avatar').textContent = initials;
    document.getElementById('pro-header-name').textContent = userName;
    document.getElementById('pro-header-level').textContent = `Niveau ${levelInfo.current.level}`;
    document.getElementById('total-xp').textContent = totalXP;
    document.getElementById('pro-avatar').textContent = initials;
    document.getElementById('pro-display-name').textContent = userName;
    document.getElementById('pro-handle').textContent = `@${userName.toLowerCase()}`;
    document.getElementById('pro-bio').textContent = userBio;
    document.getElementById('pro-lvl-badge').textContent = `LVL ${levelInfo.current.level}`;
    document.getElementById('pro-level-pill').textContent = `Niveau ${levelInfo.current.level} — ${levelInfo.current.title}`;

    const joinDateObj = new Date(joinDate);
    document.getElementById('pro-join-date').textContent = `Membre depuis le ${joinDateObj.toLocaleDateString('fr-FR', { year:'numeric', month:'long', day:'numeric' })}`;

    document.getElementById('pro-motivation-name').textContent = userName;
    document.getElementById('pro-stat-xp').textContent = totalXP.toLocaleString();
    document.getElementById('pro-stat-lessons').textContent = lessonsCount;
    document.getElementById('pro-stat-streak').textContent = currentStreak + ' jours';
    document.getElementById('pro-stat-best').textContent = bestQuizScore > 0 ? bestQuizScore + '/10' : '—';
    document.getElementById('pro-xp-bar').style.width = Math.min((totalXP / 5000) * 100, 100) + '%';
    document.getElementById('pro-lessons-bar').style.width = Math.min((lessonsCount / 75) * 100, 100) + '%';
    document.getElementById('pro-streak-bar').style.width = Math.min((currentStreak / 30) * 100, 100) + '%';
    document.getElementById('pro-best-bar').style.width = (bestQuizScore / 10) * 100 + '%';

    document.getElementById('pro-progress-current').textContent = `Niveau ${levelInfo.current.level} — ${levelInfo.current.title}`;
    if (levelInfo.next) {
        const xpIn = totalXP - levelInfo.current.xpRequired;
        const xpNeed = levelInfo.next.xpRequired - levelInfo.current.xpRequired;
        const pct = Math.round((xpIn / xpNeed) * 100);
        document.getElementById('pro-progress-next').textContent = `→ Niveau ${levelInfo.next.level}`;
        document.getElementById('pro-progress-percent').textContent = pct + '%';
        document.getElementById('pro-progress-fill').style.width = pct + '%';
        document.getElementById('pro-progress-xp').textContent = `${totalXP.toLocaleString()} / ${levelInfo.next.xpRequired.toLocaleString()} XP`;
    } else {
        document.getElementById('pro-progress-next').textContent = '— Max !';
        document.getElementById('pro-progress-percent').textContent = '100%';
        document.getElementById('pro-progress-fill').style.width = '100%';
        document.getElementById('pro-progress-xp').textContent = `${totalXP.toLocaleString()} XP — Max !`;
    }

    document.getElementById('pro-fullname').textContent = userFullName;
    document.getElementById('pro-email').textContent = userEmail;
    document.getElementById('pro-country').textContent = countryNames[userCountry] || userCountry || '—';
    const nativeLang = localStorage.getItem('userNativeLang') || '';
    document.getElementById('pro-lang').textContent = `${langNames[nativeLang] || '—'} → ${targetLangNames[selectedLanguage] || selectedLanguage}`;
    document.getElementById('pro-objectives').textContent = userObjectives.map(o => objectiveNames[o] || o).join(', ') || '—';
}
displayProfile();

// COULEUR AVATAR
const avatarColors = document.querySelectorAll('.pro-color');
const avatarEl = document.getElementById('pro-avatar');
const headerAvatarEl = document.getElementById('pro-header-avatar');

avatarColors.forEach(c => {
    c.addEventListener('click', () => {
        const color = c.style.background;
        avatarColors.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.pro-dd-color').forEach(b => b.classList.remove('active'));
        c.classList.add('active');
        avatarEl.style.background = color;
        headerAvatarEl.style.background = color;
        const ddAvatar = document.getElementById('pro-dropdown-avatar');
        if (ddAvatar) ddAvatar.style.background = color;
        localStorage.setItem('userAvatarColor', color);
    });
});

const savedColor = localStorage.getItem('userAvatarColor');
if (savedColor) {
    avatarEl.style.background = savedColor;
    headerAvatarEl.style.background = savedColor;
}

// CHART
function renderChart() {
    const weeklyXP = JSON.parse(localStorage.getItem('weeklyXP')) || [0,0,0,0,0,0,0];
    const maxXP = Math.max(...weeklyXP, 1);
    let total = 0;
    weeklyXP.forEach((xp, i) => {
        const bar = document.getElementById(`pro-bar-${i}`);
        if (bar) bar.style.height = ((xp / maxXP) * 100) + '%';
        total += xp;
    });
    document.getElementById('pro-perf-total').textContent = `+${total} XP`;
    document.getElementById('pro-perf-avg').textContent = Math.round(total / 7);
}
renderChart();

// BADGES
function checkModuleComplete() {
    const langs = ['english','french','spanish'];
    for (let lang of langs) {
        for (let m = 1; m <= 5; m++) {
            let ok = true;
            for (let l = 1; l <= 5; l++) { if (!completedLessons[`${lang}-${m}-${l}`]) { ok = false; break; } }
            if (ok) return true;
        }
    }
    return false;
}

function renderBadges() {
    const container = document.getElementById('pro-badges-grid');
    if (!container) return;
    const badges = [
        { icon:'⭐', label:'Premier pas', color:'orange', unlocked: lessonsCount >= 1 },
        { icon:'🔥', label:'7 jours', color:'purple', unlocked: currentStreak >= 7 },
        { icon:'📖', label:'10 leçons', color:'blue', unlocked: lessonsCount >= 10 },
        { icon:'🎯', label:'Quiz parfait', color:'gold', unlocked: bestQuizScore === 10 },
        { icon:'🏆', label:'Module terminé', color:'green', unlocked: checkModuleComplete() },
        { icon:'💎', label:'500 XP', color:'blue', unlocked: totalXP >= 500 },
        { icon:'🔒', label:'Expert', color:'locked', unlocked: false }
    ];
    container.innerHTML = '';
    badges.forEach(b => {
        const hex = document.createElement('div');
        hex.className = `pro-badge-hex ${b.unlocked ? b.color + ' unlocked' : 'locked'}`;
        hex.innerHTML = `<span class="pro-badge-icon">${b.unlocked ? b.icon : '🔒'}</span><span class="pro-badge-label">${b.label}</span>`;
        container.appendChild(hex);
    });
}
renderBadges();

// ACTIVITÉ
function renderActivity() {
    const container = document.getElementById('pro-timeline');
    if (!container) return;
    const activities = JSON.parse(localStorage.getItem('activityLog')) || [];
    if (activities.length === 0) { container.innerHTML = '<p class="pro-empty">Aucune activité récente</p>'; return; }
    container.innerHTML = '';
    activities.slice(-5).reverse().forEach(a => {
        const item = document.createElement('div');
        item.className = 'pro-timeline-item';
        item.innerHTML = `<span class="pro-timeline-icon">${a.icon}</span><div class="pro-timeline-info"><span class="pro-timeline-name">${a.name}</span><span class="pro-timeline-detail">${a.detail||''}</span></div><span class="pro-timeline-xp">+${a.xp} XP</span><span class="pro-timeline-time">${a.time}</span>`;
        container.appendChild(item);
    });
}
renderActivity();

// FOOTER QUOTE
const quotes = ["La langue est la carte du monde.","Une langue différente est une vision différente de la vie.","Les limites de ma langue sont les limites de mon monde.","Chaque nouvelle langue ouvre la porte d'un nouveau monde.","Parler une autre langue, c'est posséder une deuxième âme."];
const quoteEl = document.getElementById('pro-footer-quote');
if (quoteEl) quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// MODAL EDIT
document.getElementById('btn-edit-profile').addEventListener('click', () => {
    document.getElementById('pro-edit-name').value = userName;
    document.getElementById('pro-edit-email').value = userEmail;
    document.getElementById('pro-edit-bio').value = userBio;
    document.getElementById('pro-edit-modal').classList.remove('hidden');
});

document.getElementById('pro-edit-cancel').addEventListener('click', () => document.getElementById('pro-edit-modal').classList.add('hidden'));

document.getElementById('pro-edit-save').addEventListener('click', () => {
    const n = document.getElementById('pro-edit-name').value.trim();
    const e = document.getElementById('pro-edit-email').value.trim();
    const b = document.getElementById('pro-edit-bio').value.trim();
    if (n.length >= 2) localStorage.setItem('userName', n);
    if (e.length >= 5) localStorage.setItem('userEmail', e);
    if (b.length > 0) { localStorage.setItem('userBio', b); userBio = b; }
    document.getElementById('pro-edit-modal').classList.add('hidden');
    location.reload();
});

document.getElementById('pro-edit-modal').addEventListener('click', (e) => {
    if (e.target.id === 'pro-edit-modal') document.getElementById('pro-edit-modal').classList.add('hidden');
});

// SOCIAL FOOTER
document.querySelectorAll('.pro-social').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const p = btn.getAttribute('data-platform');
        const text = `Je suis Niveau ${levelInfo.current.level} sur DJY Academy Hub avec ${totalXP} XP !`;
        if (p === 'twitter') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
        else if (p === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
        else alert('Partage : ' + text);
    });
});

// RESET
document.getElementById('pro-reset-btn').addEventListener('click', () => {
    const confirmed = window.confirm('⚠️ Es-tu absolument sûr de vouloir réinitialiser TOUTE ta progression ?\n\nCette action est IRRÉVERSIBLE.\n\n• Tous tes XP seront perdus\n• Toutes tes leçons seront réinitialisées\n• Tous tes badges seront supprimés\n• Ton streak sera remis à zéro');
    if (confirmed) {
        const doubleConfirm = window.confirm('🔴 DERNIÈRE CONFIRMATION\n\nTape OK pour confirmer la suppression définitive de toutes tes données.');
        if (doubleConfirm) {
            localStorage.removeItem('totalXP');
            localStorage.removeItem('completedLessons');
            localStorage.removeItem('lessonsCompleted');
            localStorage.removeItem('bestQuizScore');
            localStorage.removeItem('currentStreak');
            localStorage.removeItem('lastVisit');
            localStorage.removeItem('weeklyXP');
            localStorage.removeItem('vocabFavorites');
            localStorage.removeItem('vocabMastered');
            localStorage.removeItem('vocabReview');
            localStorage.removeItem('activityLog');
            localStorage.removeItem('notifications');
            localStorage.removeItem('dailyObjectives');
            alert('✅ Progression réinitialisée avec succès.');
            window.location.href = 'login.html';
        }
    }
});

// DÉCONNEXION SIDEBAR
document.getElementById('side-logout').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
});

// USER DROPDOWN
const userTrigger = document.getElementById('pro-user-trigger');
const userDropdown = document.getElementById('pro-user-dropdown');

if (userTrigger && userDropdown) {
    userTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => userDropdown.classList.add('hidden'));
    userDropdown.addEventListener('click', (e) => e.stopPropagation());

    document.getElementById('pro-dropdown-avatar').textContent = userName.substring(0, 2).toUpperCase();
    document.getElementById('pro-dropdown-name').textContent = userName;
    document.getElementById('pro-dropdown-email').textContent = userEmail;
    document.getElementById('pro-dropdown-level').textContent = `Niveau ${levelInfo.current.level} — ${levelInfo.current.title}`;
    document.getElementById('pro-dropdown-xp').textContent = totalXP + ' XP';
    document.getElementById('pro-dropdown-streak').textContent = currentStreak + ' jours de série';

    const ddColor = localStorage.getItem('userAvatarColor');
    if (ddColor) document.getElementById('pro-dropdown-avatar').style.background = ddColor;
}

// DROPDOWN COLORS
document.querySelectorAll('.pro-dd-color').forEach(c => {
    c.addEventListener('click', () => {
        const color = c.style.background;
        document.querySelectorAll('.pro-dd-color').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.pro-color').forEach(b => b.classList.remove('active'));
        c.classList.add('active');
        avatarEl.style.background = color;
        headerAvatarEl.style.background = color;
        document.getElementById('pro-dropdown-avatar').style.background = color;
        localStorage.setItem('userAvatarColor', color);
    });
});

// DROPDOWN LOGOUT
const ddLogout = document.getElementById('pro-dropdown-logout');
if (ddLogout) {
    ddLogout.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        window.location.href = 'login.html';
    });
}

// SHARE DROPDOWN
const shareToggle = document.getElementById('pro-share-toggle');
const shareDropdown = document.getElementById('pro-share-dropdown');

if (shareToggle && shareDropdown) {
    shareToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        shareDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => shareDropdown.classList.add('hidden'));
    shareDropdown.addEventListener('click', (e) => e.stopPropagation());
}

document.querySelectorAll('.pro-share-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const p = link.getAttribute('data-platform');
        const text = `🎓 Je suis Niveau ${levelInfo.current.level} (${levelInfo.current.title}) sur DJY Academy Hub avec ${totalXP} XP et ${lessonsCount} leçons complétées ! Rejoins-moi ! 🚀`;
        const url = window.location.href;
        if (p === 'twitter') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
        else if (p === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        else if (p === 'copy') { navigator.clipboard.writeText(text + '\n' + url); alert('✅ Lien copié !'); }
        else alert('Partage : ' + text);
        shareDropdown.classList.add('hidden');
    });
});
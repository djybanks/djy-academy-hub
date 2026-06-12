// GARDE AUTH
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// ================================
// API
// ================================
const API = 'https://djy-backend.onrender.com';

// ================================
// DÉCONNEXION PROPRE
// ================================
async function logout() {
    const token = localStorage.getItem('authToken');
    try {
        await fetch(`${API}/auth/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.log('Erreur logout serveur');
    }
    localStorage.clear();
    window.location.href = 'login.html';
}

// ================================
// SYNC SUPABASE
// ================================
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

        userData.name = user.username;
        userData.email = user.email;
        userData.bio = user.bio || '';
        userData.avatarColor = user.avatar_color || 'blue';
        userData.xp = user.xp || 0;
        userData.streak = user.streak || 0;
        userData.learnLang = user.selected_language || 'english';
        userData.lang = user.interface_lang || 'fr';

        updateUI();

    } catch (err) {
        console.log('Sync offline — données locales utilisées');
    }
}

async function saveProfileToSupabase(username, bio, avatar_color, selected_language, interface_lang) {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    try {
        const res = await fetch(`${API}/user/profile`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, bio, avatar_color, selected_language, interface_lang })
        });

        const data = await res.json();
        return data;

    } catch (err) {
        console.log('Erreur sauvegarde Supabase');
    }
}

// ================================
// DONNÉES
// ================================
const LEVELS = [
    { level: 1, title: 'Débutant', xpRequired: 0, xpNext: 100 },
    { level: 2, title: 'Apprenti', xpRequired: 100, xpNext: 250 },
    { level: 3, title: 'Intermédiaire', xpRequired: 250, xpNext: 500 },
    { level: 4, title: 'Avancé', xpRequired: 500, xpNext: 900 },
    { level: 5, title: 'Expert', xpRequired: 900, xpNext: 1500 },
    { level: 6, title: 'Maître', xpRequired: 1500, xpNext: 2500 },
    { level: 7, title: 'Grand Maître', xpRequired: 2500, xpNext: 4000 },
    { level: 8, title: 'Légende', xpRequired: 4000, xpNext: 6000 },
    { level: 9, title: 'Immortel', xpRequired: 6000, xpNext: 9000 },
    { level: 10, title: 'Divin', xpRequired: 9000, xpNext: 99999 }
];

function getLevelData(xp) {
    let current = LEVELS[0];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].xpRequired) { current = LEVELS[i]; break; }
    }
    const xpInLevel = xp - current.xpRequired;
    const xpNeeded = current.xpNext - current.xpRequired;
    const percent = Math.min(Math.round((xpInLevel / xpNeeded) * 100), 100);
    return { ...current, xpInLevel, xpNeeded, percent };
}

const colorMap = {
    blue: 'linear-gradient(135deg,#2563EB,#60A5FA)',
    purple: 'linear-gradient(135deg,#A855F7,#C084FC)',
    green: 'linear-gradient(135deg,#22C55E,#4ADE80)',
    orange: 'linear-gradient(135deg,#F97316,#FB923C)',
    pink: 'linear-gradient(135deg,#EC4899,#F472B6)',
    red: 'linear-gradient(135deg,#EF4444,#F87171)'
};

let userData = {
    name: localStorage.getItem('userName') || 'Djybanks',
    email: localStorage.getItem('userEmail') || 'djybanks@email.com',
    bio: localStorage.getItem('userBio') || 'Building my language future...',
    xp: parseInt(localStorage.getItem('totalXP')) || 0,
    streak: parseInt(localStorage.getItem('currentStreak')) || 0,
    theme: localStorage.getItem('theme') || 'dark',
    lang: localStorage.getItem('interfaceLang') || 'fr',
    learnLang: localStorage.getItem('selectedLanguage') || 'english',
    avatarColor: localStorage.getItem('userAvatarColor') || 'blue',
    joinDate: localStorage.getItem('joinDate') || new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
    xpGoal: parseInt(localStorage.getItem('xpGoal')) || 50,
    lessonsGoal: parseInt(localStorage.getItem('lessonsGoal')) || 3,
    pace: localStorage.getItem('learningPace') || 'regular',
    reminderTime: localStorage.getItem('reminderTime') || '08:00'
};

const langConfig = {
    fr: { text: 'Français', flag: 'images/flags/fr.png' },
    en: { text: 'English', flag: 'images/flags/en.png' },
    es: { text: 'Español', flag: 'images/flags/es.png' }
};

const quotes = [
    "Chaque mot appris est une porte ouverte sur le monde.",
    "La régularité bat le talent qui ne travaille pas.",
    "Une langue, c'est une âme de plus.",
    "Apprendre, c'est grandir chaque jour."
];

// ================================
// THEME
// ================================
function applyTheme(mode) {
    if (mode === 'light') {
        document.body.classList.remove('dark-dashboard');
        document.body.classList.add('light-mode');
        const moon = document.getElementById('theme-icon-moon');
        const sun = document.getElementById('theme-icon-sun');
        if (moon) moon.style.display = 'none';
        if (sun) sun.style.display = 'block';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-dashboard');
        const moon = document.getElementById('theme-icon-moon');
        const sun = document.getElementById('theme-icon-sun');
        if (moon) moon.style.display = 'block';
        if (sun) sun.style.display = 'none';
    }

    document.querySelectorAll('.st-theme-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === mode);
    });

    userData.theme = mode;
    localStorage.setItem('theme', mode);
}

// ================================
// UPDATE UI
// ================================
function updateUI() {
    const initials = userData.name.substring(0, 2).toUpperCase();
    const avatarBg = colorMap[userData.avatarColor] || colorMap.blue;
    const lvlData = getLevelData(userData.xp);
    const cfg = langConfig[userData.lang] || langConfig.fr;

    const el = id => document.getElementById(id);

    if (el('header-name')) el('header-name').textContent = userData.name;
    if (el('header-lvl')) el('header-lvl').textContent = `Niveau ${lvlData.level}`;
    if (el('total-xp')) el('total-xp').textContent = userData.xp;

    if (el('header-avatar')) {
        el('header-avatar').textContent = initials;
        el('header-avatar').style.background = avatarBg;
    }

    if (el('st-dropdown-avatar')) {
        el('st-dropdown-avatar').textContent = initials;
        el('st-dropdown-avatar').style.background = avatarBg;
    }
    if (el('st-dropdown-name')) el('st-dropdown-name').textContent = userData.name;
    if (el('st-dropdown-email')) el('st-dropdown-email').textContent = userData.email;
    if (el('st-dropdown-level')) el('st-dropdown-level').textContent = `Niveau ${lvlData.level} — ${lvlData.title}`;
    if (el('st-dropdown-xp')) el('st-dropdown-xp').textContent = `${userData.xp} XP`;
    if (el('st-dropdown-streak')) el('st-dropdown-streak').textContent = `${userData.streak} jours de série`;

    if (el('st-input-name')) el('st-input-name').value = userData.name;
    if (el('st-input-email')) el('st-input-email').value = userData.email;
    if (el('st-input-bio')) el('st-input-bio').value = userData.bio;

    document.querySelectorAll('.st-profile-avatar, .st-preview-avatar').forEach(av => {
        av.textContent = initials;
        av.style.background = avatarBg;
    });

    if (el('st-preview-name')) el('st-preview-name').textContent = userData.name;
    if (el('st-preview-handle')) el('st-preview-handle').textContent = `@${userData.name.toLowerCase()}`;
    if (el('st-preview-pill')) el('st-preview-pill').textContent = `Niveau ${lvlData.level} — ${lvlData.title}`;
    if (el('st-preview-join')) el('st-preview-join').textContent = `Membre depuis le ${userData.joinDate}`;

    if (el('st-motivation-name')) el('st-motivation-name').textContent = userData.name;

    if (el('st-lvl-big')) el('st-lvl-big').textContent = `Niveau ${lvlData.level}`;
    if (el('st-lvl-sub')) el('st-lvl-sub').textContent = lvlData.title;
    if (el('st-lvl-fill')) el('st-lvl-fill').style.width = `${lvlData.percent}%`;
    if (el('st-lvl-xp')) el('st-lvl-xp').textContent = `${lvlData.xpInLevel} / ${lvlData.xpNeeded} XP`;

    if (el('header-flag')) {
        el('header-flag').src = cfg.flag;
        el('header-flag').alt = cfg.text;
    }
    if (el('st-lang-text')) el('st-lang-text').textContent = cfg.text;

    document.querySelectorAll('#st-interface-langs .st-lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.ilang === userData.lang);
    });

    document.querySelectorAll('#st-learning-langs .st-lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.llang === userData.learnLang);
    });

    document.querySelectorAll('.st-color').forEach(c => {
        c.classList.toggle('active', c.dataset.color === userData.avatarColor);
    });

    document.querySelectorAll('.st-avatar-color').forEach(c => {
        c.classList.toggle('active', c.dataset.color === userData.avatarColor);
    });

    if (el('st-xp-goal')) el('st-xp-goal').textContent = userData.xpGoal;
    if (el('st-lessons-goal')) el('st-lessons-goal').textContent = userData.lessonsGoal;
    if (el('st-reminder-time')) el('st-reminder-time').value = userData.reminderTime;

    document.querySelectorAll('.st-pace-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.pace === userData.pace);
    });

    if (el('st-footer-quote')) {
        el('st-footer-quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }

    if (el('st-sec-3d')) {
        el('st-sec-3d').textContent = `Aujourd'hui à ${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2,'0')}`;
    }

    document.querySelectorAll('.st-switch input[data-key]').forEach(toggle => {
        const saved = localStorage.getItem(toggle.dataset.key);
        if (saved !== null) toggle.checked = saved === 'true';
    });
}

// ================================
// EVENTS
// ================================

document.getElementById('theme-btn')?.addEventListener('click', () => {
    applyTheme(userData.theme === 'dark' ? 'light' : 'dark');
});

document.querySelectorAll('.st-theme-option').forEach(opt => {
    opt.addEventListener('click', () => {
        applyTheme(opt.dataset.theme);
    });
});

const langSelector = document.getElementById('st-lang-selector');
const langDropdown = document.getElementById('st-lang-dropdown');

langSelector?.addEventListener('click', e => {
    e.stopPropagation();
    langDropdown?.classList.toggle('hidden');
});

document.querySelectorAll('.st-lang-item').forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation();
        const l = item.dataset.lang;
        if (!l) return;
        userData.lang = l;
        localStorage.setItem('interfaceLang', l);
        langDropdown?.classList.add('hidden');
        updateUI();
    });
});

document.querySelectorAll('#st-interface-langs .st-lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
        userData.lang = opt.dataset.ilang;
        localStorage.setItem('interfaceLang', userData.lang);
        saveProfileToSupabase(userData.name, userData.bio, userData.avatarColor, userData.learnLang, userData.lang);
        updateUI();
    });
});

document.querySelectorAll('#st-learning-langs .st-lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
        userData.learnLang = opt.dataset.llang;
        localStorage.setItem('selectedLanguage', userData.learnLang);
        saveProfileToSupabase(userData.name, userData.bio, userData.avatarColor, userData.learnLang, userData.lang);
        updateUI();
    });
});

document.querySelectorAll('.st-color').forEach(c => {
    c.addEventListener('click', () => {
        userData.avatarColor = c.dataset.color;
        localStorage.setItem('userAvatarColor', userData.avatarColor);
        saveProfileToSupabase(userData.name, userData.bio, userData.avatarColor, userData.learnLang, userData.lang);
        updateUI();
    });
});

document.querySelectorAll('.st-avatar-color').forEach(c => {
    c.addEventListener('click', () => {
        userData.avatarColor = c.dataset.color;
        localStorage.setItem('userAvatarColor', userData.avatarColor);
        saveProfileToSupabase(userData.name, userData.bio, userData.avatarColor, userData.learnLang, userData.lang);
        updateUI();
    });
});

document.querySelectorAll('.st-accent').forEach(acc => {
    acc.addEventListener('click', () => {
        document.querySelectorAll('.st-accent').forEach(a => a.classList.remove('active'));
        acc.classList.add('active');
        localStorage.setItem('accentColor', acc.dataset.accent);
    });
});

document.getElementById('st-save-profile')?.addEventListener('click', async () => {
    const name = document.getElementById('st-input-name')?.value?.trim();
    const email = document.getElementById('st-input-email')?.value?.trim();
    const bio = document.getElementById('st-input-bio')?.value?.trim();

    if (name) { userData.name = name; localStorage.setItem('userName', name); }
    if (email) { userData.email = email; localStorage.setItem('userEmail', email); }
    if (bio !== undefined) { userData.bio = bio; localStorage.setItem('userBio', bio); }

    await saveProfileToSupabase(userData.name, userData.bio, userData.avatarColor, userData.learnLang, userData.lang);

    const span = document.getElementById('st-save-text');
    if (span) span.textContent = '✅ Enregistré !';
    setTimeout(() => { if (span) span.textContent = 'Enregistrer les modifications'; }, 2000);

    updateUI();
    lucide.createIcons();
});

document.querySelectorAll('.st-switch input[data-key]').forEach(toggle => {
    toggle.addEventListener('change', () => {
        localStorage.setItem(toggle.dataset.key, toggle.checked);
    });
});

const userTrigger = document.getElementById('st-user-trigger');
const userDropdown = document.getElementById('st-user-dropdown');

userTrigger?.addEventListener('click', e => {
    e.stopPropagation();
    userDropdown?.classList.toggle('hidden');
});

document.addEventListener('click', () => {
    langDropdown?.classList.add('hidden');
    userDropdown?.classList.add('hidden');
});

document.getElementById('side-logout')?.addEventListener('click', e => {
    e.preventDefault();
    logout();
});

document.getElementById('st-dropdown-logout')?.addEventListener('click', e => {
    e.preventDefault();
    logout();
});

document.getElementById('st-reset-btn')?.addEventListener('click', () => {
    if (!confirm('⚠️ Réinitialiser toute ta progression ?')) return;
    if (!confirm('🔴 Confirmation finale : action irréversible.')) return;
    localStorage.setItem('totalXP', '0');
    localStorage.setItem('completedLessons', JSON.stringify({}));
    localStorage.setItem('currentStreak', '0');
    window.location.href = 'dashboard.html';
});

document.getElementById('st-delete-btn')?.addEventListener('click', () => {
    if (!confirm('🗑️ Supprimer définitivement ton compte ?')) return;
    if (!confirm('🔴 Confirmation finale : toutes tes données seront perdues.')) return;
    logout();
});

document.getElementById('st-change-pwd')?.addEventListener('click', () => {
    alert('🔒 Fonctionnalité de changement de mot de passe à venir.');
});

// ================================
// PRÉFÉRENCES D'APPRENTISSAGE
// ================================
document.getElementById('st-xp-minus')?.addEventListener('click', () => {
    if (userData.xpGoal <= 10) return;
    userData.xpGoal -= 10;
    localStorage.setItem('xpGoal', userData.xpGoal);
    document.getElementById('st-xp-goal').textContent = userData.xpGoal;
});

document.getElementById('st-xp-plus')?.addEventListener('click', () => {
    if (userData.xpGoal >= 200) return;
    userData.xpGoal += 10;
    localStorage.setItem('xpGoal', userData.xpGoal);
    document.getElementById('st-xp-goal').textContent = userData.xpGoal;
});

document.getElementById('st-lessons-minus')?.addEventListener('click', () => {
    if (userData.lessonsGoal <= 1) return;
    userData.lessonsGoal -= 1;
    localStorage.setItem('lessonsGoal', userData.lessonsGoal);
    document.getElementById('st-lessons-goal').textContent = userData.lessonsGoal;
});

document.getElementById('st-lessons-plus')?.addEventListener('click', () => {
    if (userData.lessonsGoal >= 10) return;
    userData.lessonsGoal += 1;
    localStorage.setItem('lessonsGoal', userData.lessonsGoal);
    document.getElementById('st-lessons-goal').textContent = userData.lessonsGoal;
});

document.querySelectorAll('.st-pace-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        userData.pace = btn.dataset.pace;
        localStorage.setItem('learningPace', userData.pace);
        document.querySelectorAll('.st-pace-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

document.getElementById('st-reminder-time')?.addEventListener('change', e => {
    userData.reminderTime = e.target.value;
    localStorage.setItem('reminderTime', userData.reminderTime);
});

// ================================
// SAUVEGARDE & SYNC
// ================================
function updateLastSave() {
    const saved = localStorage.getItem('lastSaveTime');
    const el = document.getElementById('st-last-save');
    if (!el) return;
    if (saved) {
        const d = new Date(parseInt(saved));
        el.textContent = d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    } else {
        el.textContent = '—';
    }
}

document.getElementById('st-save-now')?.addEventListener('click', async () => {
    const now = Date.now();
    localStorage.setItem('lastSaveTime', now);
    updateLastSave();

    await saveProfileToSupabase(userData.name, userData.bio, userData.avatarColor, userData.learnLang, userData.lang);

    const btn = document.getElementById('st-save-now');
    btn.style.background = 'rgba(34,197,94,0.15)';
    btn.style.borderColor = 'rgba(34,197,94,0.3)';
    btn.style.color = '#22C55E';
    setTimeout(() => {
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
    }, 2000);
});

document.getElementById('st-export-btn')?.addEventListener('click', () => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data[key] = localStorage.getItem(key);
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `djy_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
});

document.getElementById('st-import-file')?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
        try {
            const data = JSON.parse(evt.target.result);
            Object.keys(data).forEach(key => localStorage.setItem(key, data[key]));
            alert('✅ Données importées avec succès. La page va se recharger.');
            window.location.reload();
        } catch {
            alert('❌ Fichier invalide.');
        }
    };
    reader.readAsText(file);
});

// ================================
// PARTICULES
// ================================
function initParticles() {
    const container = document.getElementById('st-particles');
    if (!container) return;
    for (let i = 0; i < 18; i++) {
        const p = document.createElement('div');
        p.className = 'st-particle';
        p.style.cssText = `left:${Math.random()*100}%;animation-duration:${8+Math.random()*12}s;animation-delay:${Math.random()*10}s`;
        container.appendChild(p);
    }
}

// ================================
// INIT
// ================================
applyTheme(userData.theme);
updateUI();
updateLastSave();
initParticles();
lucide.createIcons();
syncUserData();
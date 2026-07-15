// SYSTÈME DE NIVEAUX
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
    { level: 12, xpRequired: 4000, title: "Expert" },
    { level: 13, xpRequired: 4800, title: "Expert" },
    { level: 14, xpRequired: 5700, title: "Expert" },
    { level: 15, xpRequired: 6700, title: "Maître" },
    { level: 16, xpRequired: 7800, title: "Maître" },
    { level: 17, xpRequired: 9000, title: "Maître" },
    { level: 18, xpRequired: 10300, title: "Légende" },
    { level: 19, xpRequired: 11700, title: "Légende" },
    { level: 20, xpRequired: 13200, title: "Légende" }
];

function getLevelInfo(xp) {
    let currentLevel = levelSystem[0];
    let nextLevel = levelSystem[1];
    for (let i = 0; i < levelSystem.length; i++) {
        if (xp >= levelSystem[i].xpRequired) {
            currentLevel = levelSystem[i];
            nextLevel = levelSystem[i + 1] || null;
        }
    }
    return { currentLevel, nextLevel };
}

window.getLevelInfo = getLevelInfo;
window.levelSystem = levelSystem;

// URL BACKEND
const API = 'https://djy-backend.onrender.com';

// VÉRIFIER SI DÉJÀ CONNECTÉ
if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'dashboard.html';
}

// ÉLÉMENTS
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const loginTabs = document.getElementById('login-tabs');
const viewLogin = document.getElementById('view-login');
const viewSignup = document.getElementById('view-signup');
const viewObjectives = document.getElementById('view-objectives');

// FONCTION SWITCH VUE
function showLoginView(viewId) {
    viewLogin.classList.add('hidden');
    viewSignup.classList.add('hidden');
    viewObjectives.classList.add('hidden');

    if (viewId === 'login') {
        viewLogin.classList.remove('hidden');
        loginTabs.classList.remove('hidden');
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
    } else if (viewId === 'signup') {
        viewSignup.classList.remove('hidden');
        loginTabs.classList.remove('hidden');
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
    } else if (viewId === 'objectives') {
        viewObjectives.classList.remove('hidden');
        loginTabs.classList.add('hidden');
    }

    window.scrollTo(0, 0);
}

// TABS
tabLogin.addEventListener('click', function() { showLoginView('login'); });
tabSignup.addEventListener('click', function() { showLoginView('signup'); });

document.getElementById('switch-to-signup').addEventListener('click', function(e) {
    e.preventDefault();
    showLoginView('signup');
});

document.getElementById('switch-to-login').addEventListener('click', function(e) {
    e.preventDefault();
    showLoginView('login');
});

document.getElementById('objectives-to-login').addEventListener('click', function(e) {
    e.preventDefault();
    showLoginView('login');
});

// TOGGLE PASSWORD
document.getElementById('toggle-login-password').addEventListener('click', function() {
    const input = document.getElementById('login-password');
    input.type = input.type === 'password' ? 'text' : 'password';
    lucide.createIcons();
});

document.getElementById('toggle-signup-password').addEventListener('click', function() {
    const input = document.getElementById('signup-password');
    input.type = input.type === 'password' ? 'text' : 'password';
    lucide.createIcons();
});

// LEVEL SELECTOR
let selectedLevel = 'beginner';
const levelBtns = document.querySelectorAll('.level-btn');
levelBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLevel = btn.getAttribute('data-level');
    });
});

// VALIDATION
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(id, message) {
    const el = document.getElementById(id);
    el.textContent = message;
    el.classList.remove('hidden');
}

function hideError(id) {
    document.getElementById(id).classList.add('hidden');
}

function setLoading(btnId, loading) {
    const btn = document.getElementById(btnId);
    btn.disabled = loading;
    btn.style.opacity = loading ? '0.6' : '1';
}

// LOGIN
document.getElementById('login-btn').addEventListener('click', async function() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    let valid = true;

    if (!isValidEmail(email)) {
        showError('login-email-error', 'Email invalide');
        valid = false;
    } else { hideError('login-email-error'); }

    if (password.length < 6) {
        showError('login-password-error', 'Mot de passe trop court (min. 6 caractères)');
        valid = false;
    } else { hideError('login-password-error'); }

    if (!valid) return;

    setLoading('login-btn', true);

    try {
        const res = await fetch(`${API}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            showError('login-password-error', data.error || 'Erreur de connexion');
            setLoading('login-btn', false);
            return;
        }

        const user = data.user;

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userName', user.username);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userBio', user.bio || '');
        localStorage.setItem('userAvatarColor', user.avatar_color || 'blue');
        localStorage.setItem('totalXP', user.xp || 0);
        localStorage.setItem('currentStreak', user.streak || 0);
        localStorage.setItem('selectedLanguage', user.selected_language || 'english');
        localStorage.setItem('interfaceLang', user.interface_lang || 'fr');
        localStorage.setItem('joinDate', user.join_date || '');

        window.location.href = 'dashboard.html';

    } catch (err) {
        showError('login-password-error', 'Erreur réseau. Vérifie ta connexion.');
        setLoading('login-btn', false);
    }
});

// SIGNUP
document.getElementById('signup-btn').addEventListener('click', async function() {
    const fullname = document.getElementById('signup-fullname').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const country = document.getElementById('signup-country').value;
    const nativeLang = document.getElementById('signup-native-lang').value;
    const targetLang = document.getElementById('signup-target-lang').value;
    const birthdate = document.getElementById('signup-birthdate').value;
    const terms = document.getElementById('accept-terms').checked;
    let valid = true;

    if (fullname.length < 2) { showError('signup-fullname-error', 'Nom complet requis'); valid = false; }
    else { hideError('signup-fullname-error'); }

    if (username.length < 2) { showError('signup-username-error', 'Nom d\'utilisateur requis (min. 2)'); valid = false; }
    else { hideError('signup-username-error'); }

    if (!isValidEmail(email)) { showError('signup-email-error', 'Email invalide'); valid = false; }
    else { hideError('signup-email-error'); }

    if (password.length < 6) { showError('signup-password-error', 'Min. 6 caractères'); valid = false; }
    else { hideError('signup-password-error'); }

    if (password !== confirm) { showError('signup-confirm-error', 'Les mots de passe ne correspondent pas'); valid = false; }
    else { hideError('signup-confirm-error'); }

    if (!country) { showError('signup-country-error', 'Choisis ton pays'); valid = false; }
    else { hideError('signup-country-error'); }

    if (!nativeLang) { showError('signup-native-lang-error', 'Choisis ta langue maternelle'); valid = false; }
    else { hideError('signup-native-lang-error'); }

    if (!targetLang) { showError('signup-target-lang-error', 'Choisis la langue à apprendre'); valid = false; }
    else { hideError('signup-target-lang-error'); }

    if (!birthdate) { showError('signup-birthdate-error', 'Date de naissance requise'); valid = false; }
    else { hideError('signup-birthdate-error'); }

    if (!terms) { alert('Accepte les conditions d\'utilisation'); valid = false; }

    if (!valid) return;

    setLoading('signup-btn', true);

    try {
        const res = await fetch(`${API}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            showError('signup-email-error', data.error || 'Erreur lors de l\'inscription');
            setLoading('signup-btn', false);
            return;
        }

        localStorage.setItem('tempAccount', JSON.stringify({
            id: data.user.id,
            fullname,
            username,
            email,
            country,
            nativeLang,
            targetLang,
            level: selectedLevel,
            birthdate,
            joinDate: new Date().toISOString(),
            objectives: []
        }));

        showLoginView('objectives');
        lucide.createIcons();
        setLoading('signup-btn', false);

    } catch (err) {
        showError('signup-email-error', 'Erreur réseau. Vérifie ta connexion.');
        setLoading('signup-btn', false);
    }
});

// OBJECTIFS
let selectedObjectives = [];
const objectiveCards = document.querySelectorAll('.objective-card');
objectiveCards.forEach(function(card) {
    card.addEventListener('click', function() {
        const objective = card.getAttribute('data-objective');
        card.classList.toggle('selected');
        if (selectedObjectives.includes(objective)) {
            selectedObjectives = selectedObjectives.filter(o => o !== objective);
        } else {
            selectedObjectives.push(objective);
        }
    });
});

document.getElementById('save-objectives-btn').addEventListener('click', async function() {
    const tempAccount = JSON.parse(localStorage.getItem('tempAccount'));
    if (!tempAccount) return;

    tempAccount.objectives = selectedObjectives;

    setLoading('save-objectives-btn', true);

    try {
        const res = await fetch(`${API}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: tempAccount.email,
                password: document.getElementById('signup-password')?.value || ''
            })
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('userName', tempAccount.username);
            localStorage.setItem('userFullName', tempAccount.fullname);
            localStorage.setItem('userEmail', tempAccount.email);
            localStorage.setItem('userBio', '');
            localStorage.setItem('userAvatarColor', 'blue');
            localStorage.setItem('totalXP', '0');
            localStorage.setItem('currentStreak', '0');
            localStorage.setItem('selectedLanguage', tempAccount.targetLang);
            localStorage.setItem('interfaceLang', 'fr');
            localStorage.setItem('joinDate', tempAccount.joinDate);
            localStorage.setItem('userCountry', tempAccount.country);
            localStorage.setItem('userLevel', tempAccount.level);
            localStorage.setItem('userObjectives', JSON.stringify(selectedObjectives));
            localStorage.removeItem('tempAccount');

            window.location.href = 'dashboard.html';
        }

    } catch (err) {
        alert('Erreur réseau.');
        setLoading('save-objectives-btn', false);
    }
});

// CONNEXION GOOGLE
document.getElementById('google-login-btn')?.addEventListener('click', async () => {
    try {
        const res = await fetch(`${API}/auth/google`);
        const data = await res.json();

        if (data.url) {
            window.location.href = data.url;
        } else {
            alert('Erreur : impossible de se connecter avec Google.');
        }
    } catch (err) {
        alert('Erreur réseau. Vérifie ta connexion.');
    }
});
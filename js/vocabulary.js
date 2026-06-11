// VÉRIFIER SI CONNECTÉ
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// VARIABLES GLOBALES
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
let totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
let favorites = JSON.parse(localStorage.getItem('vocabFavorites')) || [];
let masteredWords = JSON.parse(localStorage.getItem('vocabMastered')) || [];
let reviewWords = JSON.parse(localStorage.getItem('vocabReview')) || [];
let sessionStudied = 0;
let sessionXP = 0;
let currentCategory = 'all';
let currentStatus = 'all';
let currentSearchQuery = '';
let currentCardIndex = 0;
let isFlipped = false;
let sessionMastered = 0;
let sessionReview = 0;
let currentWords = [];

// DONNÉES
const langData = vocabularyData[selectedLanguage];
const langCode = selectedLanguage === 'english' ? 'en-US' : selectedLanguage === 'french' ? 'fr-FR' : 'es-ES';
const userName = localStorage.getItem('userName') || 'Djybanks';
const currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;

// THÈME CORRIGÉ
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
    const isLight = document.body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
});

setTheme(localStorage.getItem('theme') || 'dark');

// XP
function updateXP() {
    document.getElementById('total-xp').textContent = totalXP;
}
updateXP();

// INFOS UTILISATEUR
document.getElementById('vocab-avatar').textContent = userName.substring(0, 2).toUpperCase();
document.getElementById('vocab-username').textContent = userName;
document.getElementById('motivation-name').textContent = userName;

// NIVEAU
const levelSystem = [
    { level: 1, xpRequired: 0 },
    { level: 2, xpRequired: 100 },
    { level: 3, xpRequired: 250 },
    { level: 4, xpRequired: 450 },
    { level: 5, xpRequired: 700 },
    { level: 6, xpRequired: 1000 }
];

function getLevelInfo(xp) {
    let current = levelSystem[0];
    for (let i = 0; i < levelSystem.length; i++) {
        if (xp >= levelSystem[i].xpRequired) current = levelSystem[i];
    }
    return current;
}

const levelInfo = getLevelInfo(totalXP);
document.getElementById('vocab-level').textContent = `Niveau ${levelInfo.level}`;

// DRAPEAU
const flagMap = {
    english: { src: 'images/flags/en.png', text: 'English' },
    french: { src: 'images/flags/fr.png', text: 'Français' },
    spanish: { src: 'images/flags/es.png', text: 'Español' }
};
const flagInfo = flagMap[selectedLanguage];
document.getElementById('dash-flag').src = flagInfo.src;
document.getElementById('dash-lang-text').textContent = flagInfo.text;

// LANG DROPDOWN
const langSelector = document.getElementById('dash-lang-selector');
const langDropdown = document.getElementById('lang-dropdown');

if (langSelector && langDropdown) {
    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => langDropdown.classList.add('hidden'));
    langDropdown.addEventListener('click', (e) => e.stopPropagation());
}

document.querySelectorAll('.vocab-lang-item').forEach(item => {
    item.addEventListener('click', () => langDropdown.classList.add('hidden'));
});

// PARTICULES
function createParticles() {
    const container = document.getElementById('vocab-particles');
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'vocab-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.3 + 0.1;
        container.appendChild(p);
    }
}
createParticles();

// PANEL STATS
function updateRightPanel() {
    const totalWordsCount = getAllWords().length;
    document.getElementById('stat-studied').textContent = sessionStudied;
    document.getElementById('stat-studied-bar').style.width = Math.min((sessionStudied / 50) * 100, 100) + '%';
    document.getElementById('stat-xp-gained').textContent = sessionXP;
    document.getElementById('stat-xp-bar').style.width = Math.min((sessionXP / 100) * 100, 100) + '%';
    document.getElementById('stat-streak-vocab').textContent = currentStreak;
    document.getElementById('stat-streak-bar').style.width = Math.min((currentStreak / 30) * 100, 100) + '%';
    document.getElementById('stat-mastered-count').textContent = masteredWords.length;
    document.getElementById('stat-mastered-bar').style.width = Math.min((masteredWords.length / totalWordsCount) * 100, 100) + '%';
}
updateRightPanel();

// TOUS LES MOTS
function getAllWords() {
    let words = [];
    langData.categories.forEach(cat => {
        cat.words.forEach(word => {
            words.push({ ...word, categoryId: cat.id, categoryName: cat.name, categoryIcon: cat.icon });
        });
    });
    return words;
}

// FILTRER
function getFilteredWords() {
    let words = getAllWords();
    if (currentCategory !== 'all') words = words.filter(w => w.categoryId === currentCategory);
    if (currentStatus === 'mastered') words = words.filter(w => masteredWords.includes(w.word));
    else if (currentStatus === 'review') words = words.filter(w => reviewWords.includes(w.word));
    else if (currentStatus === 'favorites') words = words.filter(w => favorites.includes(w.word));
    if (currentSearchQuery.length >= 2) {
        const q = currentSearchQuery.toLowerCase();
        words = words.filter(w => w.word.toLowerCase().includes(q) || w.translation.toLowerCase().includes(q));
    }
    return words;
}

// CATÉGORIES
function renderCategoryFilters() {
    const container = document.getElementById('category-filters');
    container.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn active';
    allBtn.textContent = '🌐 Tous';
    allBtn.addEventListener('click', () => {
        currentCategory = 'all';
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        allBtn.classList.add('active');
        refreshAll();
    });
    container.appendChild(allBtn);

    langData.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = `${cat.icon} ${cat.name}`;
        btn.addEventListener('click', () => {
            currentCategory = cat.id;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            refreshAll();
        });
        container.appendChild(btn);
    });
}
renderCategoryFilters();

// FILTRES STATUS
document.querySelectorAll('.vocab-status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentStatus = btn.getAttribute('data-status');
        document.querySelectorAll('.vocab-status-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        refreshAll();
    });
});

// RECHERCHE
document.getElementById('vocab-search-input').addEventListener('input', function() {
    currentSearchQuery = this.value.trim();
    refreshAll();
});

// TABS
document.getElementById('tab-flashcards').addEventListener('click', () => {
    document.getElementById('tab-flashcards').classList.add('active');
    document.getElementById('tab-list').classList.remove('active');
    document.getElementById('view-flashcards').classList.remove('hidden');
    document.getElementById('view-list').classList.add('hidden');
});

document.getElementById('tab-list').addEventListener('click', () => {
    document.getElementById('tab-list').classList.add('active');
    document.getElementById('tab-flashcards').classList.remove('active');
    document.getElementById('view-list').classList.remove('hidden');
    document.getElementById('view-flashcards').classList.add('hidden');
    renderWordList();
    lucide.createIcons();
});

// EMOJI DYNAMIQUE
const categoryEmojis = {
    basics: '👋', family: '👨‍👩‍👧', food: '🍎',
    animals: '🐾', body: '💪', clothes: '👕',
    travel: '✈️', business: '💼', conversation: '💬', technology: '💻'
};

function getWordEmoji(word) {
    if (!word) return '👋';
    const w = word.word.toLowerCase();
    if (w.includes('hello') || w.includes('bonjour') || w.includes('hola') || w.includes('goodbye')) return '👋';
    if (word.categoryId === 'food') return '🍎';
    if (word.categoryId === 'family') return '👨‍👩‍👧';
    if (word.categoryId === 'animals') return '🐾';
    if (word.categoryId === 'body') return '💪';
    if (word.categoryId === 'clothes') return '👕';
    if (word.categoryId === 'travel') return '✈️';
    if (word.categoryId === 'business') return '💼';
    if (word.categoryId === 'technology') return '💻';
    if (word.categoryId === 'conversation') return '💬';
    return categoryEmojis[word.categoryId] || '📚';
}

// REFRESH
function refreshAll() {
    currentWords = getFilteredWords();
    currentCardIndex = 0;
    sessionMastered = 0;
    sessionReview = 0;
    isFlipped = false;

    const flashcard = document.getElementById('flashcard');
    if (flashcard) flashcard.classList.remove('flipped');

    document.getElementById('flashcard-result').classList.add('hidden');
    document.getElementById('flashcard-wrapper').style.display = 'block';
    document.querySelector('.vocab-actions').style.display = 'flex';
    document.querySelector('.vocab-card-counter').style.display = 'block';
    document.querySelector('.vocab-card-progress-bar').style.display = 'block';

    if (currentWords.length === 0) {
        document.getElementById('card-word').textContent = 'Aucun mot';
        document.getElementById('card-translation').textContent = '—';
        document.getElementById('card-translation-small').textContent = '';
        document.getElementById('card-ipa').textContent = '';
        document.getElementById('card-context-front').textContent = '';
        document.getElementById('card-context-back').textContent = '';
        document.getElementById('card-category').textContent = '';
        document.getElementById('card-emoji').textContent = '📚';
        document.getElementById('card-current').textContent = '0';
        document.getElementById('card-total').textContent = '0';
        return;
    }

    renderCard();
    renderWordList();
}

// AFFICHER UNE CARTE
function renderCard() {
    if (currentCardIndex >= currentWords.length) {
        showResult();
        return;
    }

    const word = currentWords[currentCardIndex];
    const flashcard = document.getElementById('flashcard');

    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }

    setTimeout(() => {
        document.getElementById('card-word').textContent = word.word.toUpperCase();
        document.getElementById('card-ipa').textContent = `IPA: /'${word.pronunciation ? word.pronunciation.toLowerCase() : word.word.toLowerCase()}'/`;
        document.getElementById('card-context-front').textContent = `Context: ${word.example}`;
        document.getElementById('card-category').textContent = `${word.categoryIcon} ${word.categoryName}`;
        document.getElementById('card-translation').textContent = word.translation.toUpperCase();
        document.getElementById('card-translation-small').textContent = word.translation;
        document.getElementById('card-context-back').textContent = `Context: ${word.example}`;
        document.getElementById('card-emoji').textContent = getWordEmoji(word);
        document.getElementById('card-current').textContent = currentCardIndex + 1;
        document.getElementById('card-total').textContent = currentWords.length;
        document.getElementById('flashcard-progress-fill').style.width = ((currentCardIndex + 1) / currentWords.length * 100) + '%';

        const isFav = favorites.includes(word.word);
        document.getElementById('btn-favorite').classList.toggle('active', isFav);
        const fi = document.getElementById('btn-favorite-inline');
        if (fi) fi.classList.toggle('active', isFav);
        const fb = document.getElementById('card-fav-back');
        if (fb) fb.classList.toggle('active', isFav);
    }, isFlipped ? 300 : 0);
}

// FLIP
document.getElementById('flashcard-wrapper').addEventListener('click', () => {
    const fc = document.getElementById('flashcard');
    isFlipped = !isFlipped;
    fc.classList.toggle('flipped', isFlipped);
});

// JE CONNAIS
document.getElementById('btn-mastered').addEventListener('click', () => {
    const word = currentWords[currentCardIndex];
    if (!word) return;
    if (!masteredWords.includes(word.word)) {
        masteredWords.push(word.word);
        localStorage.setItem('vocabMastered', JSON.stringify(masteredWords));
    }
    reviewWords = reviewWords.filter(w => w !== word.word);
    localStorage.setItem('vocabReview', JSON.stringify(reviewWords));
    sessionMastered++;
    sessionStudied++;
    sessionXP += 2;
    totalXP += 2;
    localStorage.setItem('totalXP', totalXP);
    updateXP();
    updateRightPanel();
    nextCard();
});

// À REVOIR
document.getElementById('btn-review').addEventListener('click', () => {
    const word = currentWords[currentCardIndex];
    if (!word) return;
    if (!reviewWords.includes(word.word)) {
        reviewWords.push(word.word);
        localStorage.setItem('vocabReview', JSON.stringify(reviewWords));
    }
    sessionReview++;
    sessionStudied++;
    updateRightPanel();
    nextCard();
});

// PASSER
document.getElementById('btn-skip').addEventListener('click', () => {
    sessionStudied++;
    updateRightPanel();
    nextCard();
});

// CARTE SUIVANTE
function nextCard() {
    const fc = document.getElementById('flashcard');
    if (isFlipped) { fc.classList.remove('flipped'); isFlipped = false; }
    setTimeout(() => { currentCardIndex++; renderCard(); }, 200);
}

// TOGGLE FAVORI
function toggleFavorite(word) {
    if (!word) return;
    if (favorites.includes(word.word)) {
        favorites = favorites.filter(f => f !== word.word);
    } else {
        favorites.push(word.word);
    }
    localStorage.setItem('vocabFavorites', JSON.stringify(favorites));
    const isFav = favorites.includes(word.word);
    document.getElementById('btn-favorite').classList.toggle('active', isFav);
    const fi = document.getElementById('btn-favorite-inline');
    if (fi) fi.classList.toggle('active', isFav);
    const fb = document.getElementById('card-fav-back');
    if (fb) fb.classList.toggle('active', isFav);
}

document.getElementById('btn-favorite').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(currentWords[currentCardIndex]);
});

const favInline = document.getElementById('btn-favorite-inline');
if (favInline) favInline.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(currentWords[currentCardIndex]); });

const favBack = document.getElementById('card-fav-back');
if (favBack) favBack.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(currentWords[currentCardIndex]); });

// AUDIO
function speak(text, lang) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = lang;
        utt.rate = 0.85;
        window.speechSynthesis.speak(utt);
    }
}

document.getElementById('card-audio-front').addEventListener('click', (e) => { e.stopPropagation(); const w = currentWords[currentCardIndex]; if (w) speak(w.word, langCode); });
document.getElementById('card-audio-back').addEventListener('click', (e) => { e.stopPropagation(); const w = currentWords[currentCardIndex]; if (w) speak(w.translation, 'fr-FR'); });

// RÉSULTAT
function showResult() {
    document.getElementById('flashcard-wrapper').style.display = 'none';
    document.querySelector('.vocab-actions').style.display = 'none';
    document.querySelector('.vocab-card-counter').style.display = 'none';
    document.querySelector('.vocab-card-progress-bar').style.display = 'none';

    const xpEarned = sessionMastered * 2;
    const total = currentWords.length;
    let emoji = '😅';
    if (sessionMastered >= total * 0.8) emoji = '🎉';
    else if (sessionMastered >= total * 0.5) emoji = '👍';

    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-mastered').textContent = sessionMastered;
    document.getElementById('result-review').textContent = sessionReview;
    document.getElementById('result-xp').textContent = '+' + xpEarned;
    document.getElementById('flashcard-result').classList.remove('hidden');
}

document.getElementById('btn-restart').addEventListener('click', () => refreshAll());

document.getElementById('btn-review-only').addEventListener('click', () => {
    currentStatus = 'review';
    document.querySelectorAll('.vocab-status-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('filter-review').classList.add('active');
    refreshAll();
});

// LISTE
function renderWordList() {
    const container = document.getElementById('word-list');
    const words = getFilteredWords();
    container.innerHTML = '';

    if (words.length === 0) {
        container.innerHTML = '<p style="color:#94A3B8;text-align:center;padding:30px;grid-column:1/-1;">Aucun mot trouvé.</p>';
        return;
    }

    words.forEach(word => {
        const isFav = favorites.includes(word.word);
        const isMastered = masteredWords.includes(word.word);
        const isReview = reviewWords.includes(word.word);

        const item = document.createElement('div');
        item.className = 'word-item';
        item.innerHTML = `
            <div class="word-item-text">
                <span class="word-item-word">${word.word}</span>
                <span class="word-item-translation">${word.translation}</span>
                <span class="word-item-example">${word.example}</span>
                ${isMastered ? '<span class="word-status status-mastered">Maîtrisé</span>' : ''}
                ${isReview && !isMastered ? '<span class="word-status status-review">À revoir</span>' : ''}
            </div>
            <div class="word-item-actions">
                <button class="word-action-btn audio-btn" title="Prononcer" type="button"><i data-lucide="volume-2"></i></button>
                <button class="word-action-btn fav-btn ${isFav ? 'fav-active' : ''}" title="Favori" type="button"><i data-lucide="heart"></i></button>
                <button class="word-action-btn master-btn ${isMastered ? 'mastered-active' : ''}" title="Maîtrisé" type="button"><i data-lucide="check"></i></button>
            </div>
        `;

        item.querySelector('.audio-btn').addEventListener('click', (e) => { e.stopPropagation(); speak(word.word, langCode); });

        item.querySelector('.fav-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.currentTarget;
            if (favorites.includes(word.word)) { favorites = favorites.filter(f => f !== word.word); btn.classList.remove('fav-active'); }
            else { favorites.push(word.word); btn.classList.add('fav-active'); }
            localStorage.setItem('vocabFavorites', JSON.stringify(favorites));
        });

        item.querySelector('.master-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.currentTarget;
            if (masteredWords.includes(word.word)) { masteredWords = masteredWords.filter(w => w !== word.word); btn.classList.remove('mastered-active'); }
            else { masteredWords.push(word.word); btn.classList.add('mastered-active'); totalXP += 2; sessionXP += 2; localStorage.setItem('totalXP', totalXP); updateXP(); updateRightPanel(); }
            localStorage.setItem('vocabMastered', JSON.stringify(masteredWords));
        });

        container.appendChild(item);
    });

    lucide.createIcons();
}

// DÉCONNEXION
document.getElementById('side-logout').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
});

// INITIALISATION
refreshAll();
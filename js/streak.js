// API
const STREAK_API = 'https://djy-backend.onrender.com';

// SAUVEGARDER STREAK DANS SUPABASE
async function saveStreakToSupabase(streak) {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    try {
        await fetch(`${STREAK_API}/user/profile`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ streak })
        });
    } catch (err) {
        console.log('Erreur sauvegarde streak');
    }
}

// SYSTÈME DE STREAK CENTRALISÉ
function initializeStreak() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisit');
    let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;

    if (!lastVisit) {
        currentStreak = 1;
        localStorage.setItem('currentStreak', currentStreak);
        localStorage.setItem('lastVisit', new Date().toISOString());
        saveStreakToSupabase(currentStreak);
        return currentStreak;
    }

    const lastVisitDate = new Date(lastVisit).toDateString();

    if (lastVisitDate === today) {
        return currentStreak;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();

    if (lastVisitDate === yesterdayString) {
        currentStreak++;
        localStorage.setItem('currentStreak', currentStreak);
        localStorage.setItem('lastVisit', new Date().toISOString());
        saveStreakToSupabase(currentStreak);
        return currentStreak;
    }

    currentStreak = 1;
    localStorage.setItem('currentStreak', currentStreak);
    localStorage.setItem('lastVisit', new Date().toISOString());
    saveStreakToSupabase(currentStreak);
    return currentStreak;
}

function getStreak() {
    return parseInt(localStorage.getItem('currentStreak')) || 0;
}
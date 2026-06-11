// SYSTÈME DE STREAK CENTRALISÉ

function initializeStreak() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisit');
    let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;

    // Première visite
    if (!lastVisit) {
        currentStreak = 1;
        localStorage.setItem('currentStreak', currentStreak);
        localStorage.setItem('lastVisit', new Date().toISOString());
        return currentStreak;
    }

    const lastVisitDate = new Date(lastVisit).toDateString();

    // Déjà visité aujourd'hui
    if (lastVisitDate === today) {
        return currentStreak;
    }

    // Calculer hier
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();

    // Visité hier = continuer le streak
    if (lastVisitDate === yesterdayString) {
        currentStreak++;
        localStorage.setItem('currentStreak', currentStreak);
        localStorage.setItem('lastVisit', new Date().toISOString());
        return currentStreak;
    }

    // Raté un jour = reset
    currentStreak = 1;
    localStorage.setItem('currentStreak', currentStreak);
    localStorage.setItem('lastVisit', new Date().toISOString());
    return currentStreak;
}

function getStreak() {
    return parseInt(localStorage.getItem('currentStreak')) || 0;
}
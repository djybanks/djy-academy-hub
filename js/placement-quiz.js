// DONNÉES QUIZ PAR LANGUE
const quizData = {
    english: [
        // DÉBUTANT
        {
            level: 'beginner',
            question: 'What is the English word for "maison"?',
            options: ['House', 'Car', 'School', 'Book'],
            correct: 0
        },
        {
            level: 'beginner',
            question: 'Complete: "I ___ a student."',
            options: ['is', 'are', 'am', 'be'],
            correct: 2
        },
        {
            level: 'beginner',
            question: 'Complete: "Good morning! How are you?"',
            options: ['Blue', "I'm fine, thank you.", 'Monday', 'Twenty'],
            correct: 1
        },
        // INTERMÉDIAIRE
        {
            level: 'intermediate',
            question: 'She ___ to school every day.',
            options: ['go', 'goes', 'going', 'gone'],
            correct: 1
        },
        {
            level: 'intermediate',
            question: 'Yesterday, I ___ a new phone.',
            options: ['buy', 'buys', 'bought', 'buying'],
            correct: 2
        },
        {
            level: 'intermediate',
            question: "I'm interested ___ learning English.",
            options: ['on', 'at', 'in', 'for'],
            correct: 2
        },
        {
            level: 'intermediate',
            question: '"Tom missed the bus because he woke up late." Why did Tom miss the bus?',
            context: 'Tom missed the bus because he woke up late.',
            options: ['The bus was broken.', 'He woke up late.', 'He forgot his bag.', 'He was sick.'],
            correct: 1
        },
        // AVANCÉ
        {
            level: 'advanced',
            question: 'If I ___ more time, I would travel more.',
            options: ['have', 'had', 'has', 'having'],
            correct: 1
        },
        {
            level: 'advanced',
            question: 'The new bridge ___ last year.',
            options: ['built', 'was built', 'has build', 'building'],
            correct: 1
        },
        {
            level: 'advanced',
            question: 'What does this sentence mean?',
            context: '"Despite working long hours, Sarah managed to finish the project ahead of schedule."',
            options: [
                'Sarah failed to finish the project.',
                'Sarah finished the project earlier than expected.',
                'Sarah quit her job.',
                'Sarah worked fewer hours.'
            ],
            correct: 1
        }
    ],
    french: [
        // DÉBUTANT
        {
            level: 'beginner',
            question: 'What is the French word for "house"?',
            options: ['Maison', 'Voiture', 'École', 'Livre'],
            correct: 0
        },
        {
            level: 'beginner',
            question: 'Complète : "Je ___ étudiant."',
            options: ['suis', 'es', 'sont', 'être'],
            correct: 0
        },
        {
            level: 'beginner',
            question: 'Complète : "Bonjour ! Comment vas-tu ?"',
            options: ['Je vais bien, merci.', 'Je suis bleu.', 'À demain matin.', "J'ai vingt ans."],
            correct: 0
        },
        // INTERMÉDIAIRE
        {
            level: 'intermediate',
            question: 'Elle ___ au travail tous les jours.',
            options: ['aller', 'va', 'vont', 'allé'],
            correct: 1
        },
        {
            level: 'intermediate',
            question: "Hier, j'___ un film intéressant.",
            options: ['regarde', 'regarderai', 'ai regardé', 'regardais'],
            correct: 2
        },
        {
            level: 'intermediate',
            question: "Je m'intéresse ___ l'apprentissage des langues.",
            options: ['à', 'de', 'en', 'sur'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'Pourquoi Paul est-il arrivé en retard ?',
            context: 'Paul est arrivé en retard parce qu\'il a raté son bus.',
            options: [
                'Parce qu\'il a perdu son téléphone.',
                'Parce qu\'il a raté son bus.',
                'Parce qu\'il était malade.',
                'Parce qu\'il a oublié son sac.'
            ],
            correct: 1
        },
        // AVANCÉ
        {
            level: 'advanced',
            question: "Si j'___ plus de temps, je voyagerais davantage.",
            options: ['ai', 'avais', 'aurai', 'avoir'],
            correct: 1
        },
        {
            level: 'advanced',
            question: "Le projet ___ par l'équipe l'année dernière.",
            options: ['termine', 'a terminé', 'a été terminé', 'terminer'],
            correct: 2
        },
        {
            level: 'advanced',
            question: 'Que signifie cette phrase ?',
            context: 'Malgré les difficultés rencontrées, Marie a réussi à terminer son projet avant la date prévue.',
            options: [
                "Marie n'a pas terminé son projet.",
                'Marie a terminé son projet plus tôt que prévu.',
                'Marie a abandonné son projet.',
                'Marie a commencé un nouveau projet.'
            ],
            correct: 1
        }
    ],
    spanish: [
        // DÉBUTANT
        {
            level: 'beginner',
            question: 'What is the Spanish word for "house"?',
            options: ['Casa', 'Coche', 'Escuela', 'Libro'],
            correct: 0
        },
        {
            level: 'beginner',
            question: 'Complète : "Yo ___ estudiante."',
            options: ['eres', 'soy', 'son', 'ser'],
            correct: 1
        },
        {
            level: 'beginner',
            question: '"¡Buenos días! ¿Cómo estás?"',
            options: ['Estoy bien, gracias.', 'Soy azul.', 'Hasta ayer.', 'Tengo veinte.'],
            correct: 0
        },
        // INTERMÉDIAIRE
        {
            level: 'intermediate',
            question: 'Ella ___ al trabajo todos los días.',
            options: ['voy', 'va', 'ir', 'fueron'],
            correct: 1
        },
        {
            level: 'intermediate',
            question: 'Ayer, yo ___ una película interesante.',
            options: ['veo', 'vi', 'veré', 'viendo'],
            correct: 1
        },
        {
            level: 'intermediate',
            question: 'Estoy interesado ___ aprender español.',
            options: ['a', 'en', 'por', 'con'],
            correct: 1
        },
        {
            level: 'intermediate',
            question: '¿Por qué Pedro llegó tarde?',
            context: 'Pedro llegó tarde porque perdió el autobús.',
            options: [
                'Porque perdió el autobús.',
                'Porque estaba enfermo.',
                'Porque olvidó su teléfono.',
                'Porque no tenía trabajo.'
            ],
            correct: 0
        },
        // AVANCÉ
        {
            level: 'advanced',
            question: 'Si tuviera más tiempo, ___ más idiomas.',
            options: ['aprendería', 'aprendo', 'aprendí', 'aprenderé'],
            correct: 0
        },
        {
            level: 'advanced',
            question: 'La casa ___ construida el año pasado.',
            options: ['fue', 'fue construida', 'construye', 'construyó'],
            correct: 1
        },
        {
            level: 'advanced',
            question: '¿Qué significa la frase?',
            context: 'A pesar de los problemas encontrados, Carlos logró terminar el proyecto antes de la fecha límite.',
            options: [
                'Carlos no terminó el proyecto.',
                'Carlos terminó el proyecto antes del tiempo esperado.',
                'Carlos abandonó el proyecto.',
                'Carlos empezó otro proyecto.'
            ],
            correct: 1
        }
    ]
};

// VARIABLES
let currentQuestionIndex = 0;
let score = 0;
let beginnerScore = 0;
let intermediateScore = 0;
let advancedScore = 0;
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
let questions = [];
const letters = ['A', 'B', 'C', 'D'];

// ÉLÉMENTS
const viewIntro = document.getElementById('view-intro');
const viewQuiz = document.getElementById('view-quiz');
const viewResult = document.getElementById('view-result');

// INIT
function init() {
    questions = quizData[selectedLanguage] || quizData.english;
}

// AFFICHER VUE
function showView(viewId) {
    viewIntro.classList.add('hidden');
    viewQuiz.classList.add('hidden');
    viewResult.classList.add('hidden');
    document.getElementById(viewId).classList.remove('hidden');
}

// DÉMARRER QUIZ
document.getElementById('start-quiz-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    beginnerScore = 0;
    intermediateScore = 0;
    advancedScore = 0;
    showView('view-quiz');
    renderQuestion();
});

// PASSER LE QUIZ
document.getElementById('skip-quiz-btn').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('userLevel', 'beginner');
    window.location.href = 'dashboard.html';
});

// RENDU QUESTION
function renderQuestion() {
    const q = questions[currentQuestionIndex];
    const total = questions.length;
    const progress = ((currentQuestionIndex + 1) / total) * 100;

    document.getElementById('quiz-progress-text').textContent = `Question ${currentQuestionIndex + 1} / ${total}`;
    document.getElementById('quiz-progress-fill').style.width = `${progress}%`;

    const levelBadge = document.getElementById('quiz-level-badge');
    levelBadge.className = 'quiz-progress-level';
    if (q.level === 'beginner') {
        levelBadge.classList.add('beginner');
        levelBadge.textContent = 'Débutant';
    } else if (q.level === 'intermediate') {
        levelBadge.classList.add('intermediate');
        levelBadge.textContent = 'Intermédiaire';
    } else {
        levelBadge.classList.add('advanced');
        levelBadge.textContent = 'Avancé';
    }

    document.getElementById('quiz-question-number').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('quiz-question-text').textContent = q.question;

    const contextEl = document.getElementById('quiz-context');
    if (q.context) {
        contextEl.textContent = q.context;
        contextEl.classList.remove('hidden');
    } else {
        contextEl.classList.add('hidden');
    }

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = `<span class="option-letter">${letters[index]}</span>${option}`;
        btn.addEventListener('click', () => handleAnswer(index, q.correct, q.level));
        optionsContainer.appendChild(btn);
    });
}

// GÉRER RÉPONSE
function handleAnswer(selected, correct, level) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        options[selected].classList.add('correct');
        score++;
        if (level === 'beginner') beginnerScore++;
        else if (level === 'intermediate') intermediateScore++;
        else advancedScore++;
    } else {
        options[selected].classList.add('wrong');
        options[correct].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 1200);
}

// AFFICHER RÉSULTAT
function showResult() {
    let level = 'beginner';
    let levelLabel = 'Débutant';
    let icon = '🌱';

    if (score >= 7) {
        level = 'advanced';
        levelLabel = 'Avancé';
        icon = '🏆';
    } else if (score >= 4) {
        level = 'intermediate';
        levelLabel = 'Intermédiaire';
        icon = '⚡';
    }

    localStorage.setItem('userLevel', level);
    localStorage.setItem('placementScore', score);

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = 'Quiz terminé !';
    document.getElementById('result-subtitle').textContent = 'Voici ton niveau de départ détecté';
    document.getElementById('result-level-value').textContent = levelLabel;
    document.getElementById('result-score').textContent = `Score : ${score} / ${questions.length}`;
    document.getElementById('result-beginner-score').textContent = `${beginnerScore}/3`;
    document.getElementById('result-intermediate-score').textContent = `${intermediateScore}/4`;
    document.getElementById('result-advanced-score').textContent = `${advancedScore}/3`;

    showView('view-result');
}

// ALLER AU DASHBOARD
document.getElementById('go-dashboard-btn').addEventListener('click', () => {
    window.location.href = 'dashboard.html';
});

// INIT
init();
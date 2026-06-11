const frenchCourse = {
    modules: [
        {
            id: 1,
            title: "Les Bases",
            icon: "🔤",
            lessons: [
                {
                    id: 1,
                    title: "L'Alphabet & La Prononciation",
                    xp: 20,
                    content: {
                        explanation: "L'alphabet français contient 26 lettres, comme l'anglais. Mais la prononciation est très différente. En français, on utilise aussi des accents : é, è, ê, à, ù, î, ô, û, ç.",
                        examples: [
                            { text: "A comme Arbre 🌳", translation: "A as in Tree" },
                            { text: "É comme École 🏫", translation: "É as in School" },
                            { text: "È comme Père 👨", translation: "È as in Father" },
                            { text: "Ç comme Garçon 👦", translation: "Ç as in Boy" },
                            { text: "Les voyelles : A - E - I - O - U - Y", translation: "Vowels: A - E - I - O - U - Y" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Combien de lettres contient l'alphabet français ?",
                            options: ["24", "25", "26", "28"],
                            correct: 2
                        },
                        {
                            question: "Lequel de ces caractères est un accent français ?",
                            options: ["@", "é", "#", "&"],
                            correct: 1
                        },
                        {
                            question: "Combien de voyelles y a-t-il en français ?",
                            options: ["4", "5", "6", "7"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Les Salutations",
                    xp: 20,
                    content: {
                        explanation: "Les salutations sont essentielles dans la langue française. Elles varient selon le moment de la journée et le niveau de formalité.",
                        examples: [
                            { text: "Bonjour", translation: "Hello / Good morning" },
                            { text: "Bonsoir", translation: "Good evening" },
                            { text: "Salut", translation: "Hi (informal)" },
                            { text: "Au revoir", translation: "Goodbye" },
                            { text: "Comment allez-vous ?", translation: "How are you? (formal)" },
                            { text: "Comment vas-tu ?", translation: "How are you? (informal)" },
                            { text: "Je vais bien, merci", translation: "I am fine, thank you" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Good evening' en français ?",
                            options: ["Bonjour", "Salut", "Bonsoir", "Au revoir"],
                            correct: 2
                        },
                        {
                            question: "Quelle salutation est informelle ?",
                            options: ["Bonjour", "Comment allez-vous ?", "Salut", "Bonsoir"],
                            correct: 2
                        },
                        {
                            question: "Comment dit-on 'Goodbye' en français ?",
                            options: ["Bonjour", "Salut", "Bonsoir", "Au revoir"],
                            correct: 3
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Les Nombres",
                    xp: 20,
                    content: {
                        explanation: "Les nombres en français sont indispensables au quotidien. Apprenez les bases de 1 à 20 et quelques nombres clés.",
                        examples: [
                            { text: "1 - Un, 2 - Deux, 3 - Trois", translation: "1 - One, 2 - Two, 3 - Three" },
                            { text: "4 - Quatre, 5 - Cinq, 6 - Six", translation: "4 - Four, 5 - Five, 6 - Six" },
                            { text: "7 - Sept, 8 - Huit, 9 - Neuf", translation: "7 - Seven, 8 - Eight, 9 - Nine" },
                            { text: "10 - Dix, 11 - Onze, 12 - Douze", translation: "10 - Ten, 11 - Eleven, 12 - Twelve" },
                            { text: "20 - Vingt, 50 - Cinquante, 100 - Cent", translation: "20 - Twenty, 50 - Fifty, 100 - One hundred" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on '7' en français ?",
                            options: ["Six", "Huit", "Sept", "Cinq"],
                            correct: 2
                        },
                        {
                            question: "Quel nombre est 'Douze' ?",
                            options: ["10", "11", "12", "13"],
                            correct: 2
                        },
                        {
                            question: "Comment dit-on '100' en français ?",
                            options: ["Mille", "Cent", "Dix", "Vingt"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Les Couleurs",
                    xp: 20,
                    content: {
                        explanation: "Les couleurs sont utilisées chaque jour en français. Apprenez les couleurs de base et comment les utiliser dans des phrases.",
                        examples: [
                            { text: "Rouge 🔴", translation: "Red" },
                            { text: "Bleu 🔵", translation: "Blue" },
                            { text: "Vert 🟢", translation: "Green" },
                            { text: "Jaune 🟡", translation: "Yellow" },
                            { text: "Noir ⚫", translation: "Black" },
                            { text: "Blanc ⚪", translation: "White" },
                            { text: "Le ciel est bleu", translation: "The sky is blue" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Red' en français ?",
                            options: ["Bleu", "Vert", "Rouge", "Jaune"],
                            correct: 2
                        },
                        {
                            question: "Comment dit-on 'Black' en français ?",
                            options: ["Blanc", "Noir", "Gris", "Marron"],
                            correct: 1
                        },
                        {
                            question: "Que signifie 'Le ciel est bleu' ?",
                            options: ["The sea is blue", "The sky is green", "The sky is blue", "The earth is blue"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Les Jours & Les Mois",
                    xp: 20,
                    content: {
                        explanation: "Il y a 7 jours dans une semaine et 12 mois dans une année. En français, les jours et les mois s'écrivent en minuscules (contrairement à l'anglais).",
                        examples: [
                            { text: "Lundi, Mardi, Mercredi", translation: "Monday, Tuesday, Wednesday" },
                            { text: "Jeudi, Vendredi", translation: "Thursday, Friday" },
                            { text: "Samedi, Dimanche", translation: "Saturday, Sunday" },
                            { text: "Janvier, Février, Mars", translation: "January, February, March" },
                            { text: "Avril, Mai, Juin", translation: "April, May, June" },
                            { text: "Juillet, Août, Septembre", translation: "July, August, September" },
                            { text: "Octobre, Novembre, Décembre", translation: "October, November, December" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Monday' en français ?",
                            options: ["Dimanche", "Mardi", "Lundi", "Vendredi"],
                            correct: 2
                        },
                        {
                            question: "Quel mois vient après 'Janvier' ?",
                            options: ["Mars", "Décembre", "Février", "Avril"],
                            correct: 2
                        },
                        {
                            question: "Combien y a-t-il de jours dans une semaine ?",
                            options: ["5", "6", "7", "8"],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Le Vocabulaire",
            icon: "📝",
            lessons: [
                {
                    id: 1,
                    title: "La Famille",
                    xp: 25,
                    content: {
                        explanation: "Le vocabulaire de la famille est essentiel dans les conversations françaises quotidiennes.",
                        examples: [
                            { text: "La mère / Maman", translation: "Mother / Mom" },
                            { text: "Le père / Papa", translation: "Father / Dad" },
                            { text: "Le frère", translation: "Brother" },
                            { text: "La sœur", translation: "Sister" },
                            { text: "La grand-mère / Mamie", translation: "Grandmother / Grandma" },
                            { text: "Le grand-père / Papy", translation: "Grandfather / Grandpa" },
                            { text: "C'est mon frère", translation: "This is my brother" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Mother' en français ?",
                            options: ["La sœur", "La mère", "La grand-mère", "La tante"],
                            correct: 1
                        },
                        {
                            question: "Que signifie 'Le frère' ?",
                            options: ["Sister", "Father", "Brother", "Cousin"],
                            correct: 2
                        },
                        {
                            question: "Comment dit-on 'Grandfather' en français ?",
                            options: ["La grand-mère", "L'oncle", "Le grand-père", "Le père"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "La Nourriture & Les Boissons",
                    xp: 25,
                    content: {
                        explanation: "Le vocabulaire de la nourriture est essentiel pour la vie quotidienne et les voyages.",
                        examples: [
                            { text: "La pomme 🍎", translation: "Apple" },
                            { text: "Le pain 🍞", translation: "Bread" },
                            { text: "L'eau 💧", translation: "Water" },
                            { text: "Le café ☕", translation: "Coffee" },
                            { text: "Le riz 🍚", translation: "Rice" },
                            { text: "Le poulet 🍗", translation: "Chicken" },
                            { text: "Je voudrais un café, s'il vous plaît", translation: "I would like a coffee, please" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Que signifie 'Le pain' ?",
                            options: ["Water", "Bread", "Rice", "Milk"],
                            correct: 1
                        },
                        {
                            question: "Comment dit-on 'Water' en français ?",
                            options: ["Le jus", "Le lait", "L'eau", "Le café"],
                            correct: 2
                        },
                        {
                            question: "Que signifie 'La pomme' ?",
                            options: ["Orange", "Banana", "Apple", "Grape"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Les Animaux",
                    xp: 25,
                    content: {
                        explanation: "Les animaux sont une partie amusante et importante du vocabulaire français.",
                        examples: [
                            { text: "Le chien 🐶", translation: "Dog" },
                            { text: "Le chat 🐱", translation: "Cat" },
                            { text: "L'oiseau 🐦", translation: "Bird" },
                            { text: "Le poisson 🐟", translation: "Fish" },
                            { text: "Le lion 🦁", translation: "Lion" },
                            { text: "L'éléphant 🐘", translation: "Elephant" },
                            { text: "Le chien est grand", translation: "The dog is big" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Cat' en français ?",
                            options: ["Le chien", "L'oiseau", "Le chat", "Le poisson"],
                            correct: 2
                        },
                        {
                            question: "Que signifie 'L'éléphant' ?",
                            options: ["Lion", "Elephant", "Giraffe", "Tiger"],
                            correct: 1
                        },
                        {
                            question: "Comment dit-on 'Bird' en français ?",
                            options: ["Le poisson", "Le chien", "Le chat", "L'oiseau"],
                            correct: 3
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Le Corps Humain",
                    xp: 25,
                    content: {
                        explanation: "Connaître les parties du corps en français est essentiel pour les conversations médicales et quotidiennes.",
                        examples: [
                            { text: "La tête 🤯", translation: "Head" },
                            { text: "Les yeux 👀", translation: "Eyes" },
                            { text: "Le nez 👃", translation: "Nose" },
                            { text: "La bouche 👄", translation: "Mouth" },
                            { text: "La main ✋", translation: "Hand" },
                            { text: "Le pied 🦶", translation: "Foot" },
                            { text: "J'ai mal à la tête", translation: "My head hurts" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Head' en français ?",
                            options: ["La main", "Le pied", "La tête", "L'œil"],
                            correct: 2
                        },
                        {
                            question: "Que signifie 'Le nez' ?",
                            options: ["Mouth", "Ear", "Nose", "Eye"],
                            correct: 2
                        },
                        {
                            question: "Comment dit-on 'Hand' en français ?",
                            options: ["Le pied", "La main", "Le bras", "La jambe"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Les Vêtements",
                    xp: 25,
                    content: {
                        explanation: "Le vocabulaire des vêtements est essentiel pour faire du shopping et décrire ce que vous portez.",
                        examples: [
                            { text: "Le t-shirt 👕", translation: "T-shirt" },
                            { text: "Le pantalon 👖", translation: "Pants / Trousers" },
                            { text: "Les chaussures 👟", translation: "Shoes" },
                            { text: "La veste 🧥", translation: "Jacket" },
                            { text: "Le chapeau 🎩", translation: "Hat" },
                            { text: "La robe 👗", translation: "Dress" },
                            { text: "Je porte une chemise bleue", translation: "I am wearing a blue shirt" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Shoes' en français ?",
                            options: ["Le chapeau", "La veste", "Les chaussures", "La robe"],
                            correct: 2
                        },
                        {
                            question: "Que signifie 'Le chapeau' ?",
                            options: ["Dress", "Hat", "Belt", "Sock"],
                            correct: 1
                        },
                        {
                            question: "Comment dit-on 'Pants' en français ?",
                            options: ["La chemise", "La veste", "La robe", "Le pantalon"],
                            correct: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "La Grammaire",
            icon: "📐",
            lessons: [
                {
                    id: 1,
                    title: "Les Pronoms Personnels",
                    xp: 30,
                    content: {
                        explanation: "Les pronoms personnels remplacent les noms de personnes ou de choses. En français : Je, Tu, Il, Elle, Nous, Vous, Ils, Elles.",
                        examples: [
                            { text: "Je suis étudiant(e)", translation: "I am a student" },
                            { text: "Tu es mon ami(e)", translation: "You are my friend" },
                            { text: "Il est grand", translation: "He is tall" },
                            { text: "Elle est belle", translation: "She is beautiful" },
                            { text: "Nous sommes heureux", translation: "We are happy" },
                            { text: "Ils sont professeurs", translation: "They are teachers" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Quel pronom remplace 'Marie' ?",
                            options: ["Il", "On", "Elle", "Ils"],
                            correct: 2
                        },
                        {
                            question: "Que signifie 'Nous' ?",
                            options: ["I", "You", "They", "We"],
                            correct: 3
                        },
                        {
                            question: "Complétez : '___ sommes amis'",
                            options: ["Il", "Elle", "Nous", "Tu"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Le Verbe Être",
                    xp: 30,
                    content: {
                        explanation: "Le verbe 'Être' est le verbe le plus important en français. Il se conjugue différemment selon le sujet.",
                        examples: [
                            { text: "Je suis heureux", translation: "I am happy" },
                            { text: "Tu es intelligent(e)", translation: "You are smart" },
                            { text: "Il est grand", translation: "He is tall" },
                            { text: "Elle est gentille", translation: "She is kind" },
                            { text: "Nous sommes étudiants", translation: "We are students" },
                            { text: "Ils sont fatigués", translation: "They are tired" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Complétez : 'Je ___ médecin'",
                            options: ["es", "sommes", "suis", "sont"],
                            correct: 2
                        },
                        {
                            question: "Complétez : 'Ils ___ mes amis'",
                            options: ["suis", "est", "sont", "êtes"],
                            correct: 2
                        },
                        {
                            question: "Complétez : 'Elle ___ belle'",
                            options: ["suis", "est", "sont", "êtes"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Le Présent Simple",
                    xp: 30,
                    content: {
                        explanation: "Le présent simple est utilisé pour les habitudes, les routines et les vérités générales. Les verbes en -ER sont les plus courants.",
                        examples: [
                            { text: "Je mange chaque jour", translation: "I eat every day" },
                            { text: "Elle travaille à l'hôpital", translation: "She works at a hospital" },
                            { text: "Ils jouent au football le dimanche", translation: "They play football on Sundays" },
                            { text: "Il regarde la télé chaque soir", translation: "He watches TV every night" },
                            { text: "Nous étudions le français", translation: "We study French" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Complétez : 'Elle ___ à l'école chaque jour' (aller)",
                            options: ["va", "vais", "allons", "allez"],
                            correct: 0
                        },
                        {
                            question: "Quelle phrase est correcte ?",
                            options: ["Il joue football", "Il joues football", "Il joue au football", "Il jouent football"],
                            correct: 2
                        },
                        {
                            question: "Complétez : 'Nous ___ le français' (étudier)",
                            options: ["étudies", "étudie", "étudions", "étudient"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Les Articles",
                    xp: 30,
                    content: {
                        explanation: "En français, les articles s'accordent en genre (masculin/féminin) et en nombre (singulier/pluriel). Les articles définis : le, la, les. Les articles indéfinis : un, une, des.",
                        examples: [
                            { text: "Le chat (masculin)", translation: "The cat (masculine)" },
                            { text: "La maison (féminin)", translation: "The house (feminine)" },
                            { text: "Les enfants (pluriel)", translation: "The children (plural)" },
                            { text: "Un chien (indéfini masculin)", translation: "A dog (indefinite masculine)" },
                            { text: "Une pomme (indéfini féminin)", translation: "An apple (indefinite feminine)" },
                            { text: "Des livres (indéfini pluriel)", translation: "Some books (indefinite plural)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Quel article va avec 'maison' (féminin) ?",
                            options: ["Le", "Un", "La", "Les"],
                            correct: 2
                        },
                        {
                            question: "Complétez : 'J'ai ___ chien' (indéfini masculin)",
                            options: ["une", "le", "un", "la"],
                            correct: 2
                        },
                        {
                            question: "Quel article est utilisé pour le pluriel indéfini ?",
                            options: ["Le", "La", "Un", "Des"],
                            correct: 3
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Le Pluriel",
                    xp: 30,
                    content: {
                        explanation: "Pour former le pluriel en français, on ajoute généralement 's'. Les mots terminant en -eau prennent -x. Les mots terminant en -al changent en -aux.",
                        examples: [
                            { text: "Chat → Chats", translation: "Cat → Cats" },
                            { text: "Gâteau → Gâteaux", translation: "Cake → Cakes" },
                            { text: "Cheval → Chevaux", translation: "Horse → Horses" },
                            { text: "Voix → Voix (invariable)", translation: "Voice → Voices (no change)" },
                            { text: "Œil → Yeux (irrégulier)", translation: "Eye → Eyes (irregular)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Quel est le pluriel de 'Gâteau' ?",
                            options: ["Gâteaus", "Gâteaux", "Gâteaies", "Gâteau"],
                            correct: 1
                        },
                        {
                            question: "Quel est le pluriel de 'Cheval' ?",
                            options: ["Chevals", "Chevales", "Chevaux", "Cheval"],
                            correct: 2
                        },
                        {
                            question: "Quel est le pluriel irrégulier de 'Œil' ?",
                            options: ["Œils", "Œiles", "Œilies", "Yeux"],
                            correct: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "La Conversation",
            icon: "💬",
            lessons: [
                {
                    id: 1,
                    title: "Se Présenter",
                    xp: 35,
                    content: {
                        explanation: "Se présenter est l'une des premières choses que vous faites quand vous rencontrez quelqu'un. Apprenez les phrases clés.",
                        examples: [
                            { text: "Je m'appelle Marie", translation: "My name is Marie" },
                            { text: "J'ai 25 ans", translation: "I am 25 years old" },
                            { text: "Je suis de France", translation: "I am from France" },
                            { text: "Je suis étudiant(e)", translation: "I am a student" },
                            { text: "Enchanté(e)", translation: "Nice to meet you" },
                            { text: "Comment tu t'appelles ?", translation: "What is your name?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'My name is' en français ?",
                            options: ["Je suis", "J'ai", "Je m'appelle", "Je viens"],
                            correct: 2
                        },
                        {
                            question: "Que signifie 'Enchanté(e)' ?",
                            options: ["Goodbye", "Good night", "Nice to meet you", "Thank you"],
                            correct: 2
                        },
                        {
                            question: "Comment demande-t-on le prénom de quelqu'un ?",
                            options: ["D'où viens-tu ?", "Quel âge as-tu ?", "Comment tu t'appelles ?", "Que fais-tu ?"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Demander son Chemin",
                    xp: 35,
                    content: {
                        explanation: "Savoir demander et donner des directions est essentiel lors de voyages ou dans un pays francophone.",
                        examples: [
                            { text: "Où est la banque ?", translation: "Where is the bank?" },
                            { text: "Tournez à gauche / à droite", translation: "Turn left / Turn right" },
                            { text: "Allez tout droit", translation: "Go straight ahead" },
                            { text: "C'est à côté du parc", translation: "It is next to the park" },
                            { text: "C'est à quelle distance ?", translation: "How far is it?" },
                            { text: "Excusez-moi, pouvez-vous m'aider ?", translation: "Excuse me, can you help me?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment dit-on 'Turn left' en français ?",
                            options: ["Allez tout droit", "Tournez à droite", "Tournez à gauche", "Arrêtez-vous"],
                            correct: 2
                        },
                        {
                            question: "Que signifie 'Allez tout droit' ?",
                            options: ["Turn right", "Go back", "Go straight ahead", "Stop here"],
                            correct: 2
                        },
                        {
                            question: "Comment demande-t-on où se trouve quelque chose ?",
                            options: ["Qu'est-ce que... ?", "Où est... ?", "Qui est... ?", "Comment est... ?"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Au Restaurant",
                    xp: 35,
                    content: {
                        explanation: "Apprenez à commander, demander le menu et payer l'addition dans un restaurant français.",
                        examples: [
                            { text: "Puis-je avoir le menu, s'il vous plaît ?", translation: "Can I have the menu, please?" },
                            { text: "Je voudrais un steak", translation: "I would like a steak" },
                            { text: "L'addition, s'il vous plaît", translation: "The bill, please" },
                            { text: "Cette table est-elle libre ?", translation: "Is this table free?" },
                            { text: "Je suis végétarien(ne)", translation: "I am vegetarian" },
                            { text: "C'était délicieux !", translation: "It was delicious!" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment demande-t-on l'addition ?",
                            options: ["Le menu, s'il vous plaît", "L'addition, s'il vous plaît", "Cette table est libre ?", "Je suis végétarien"],
                            correct: 1
                        },
                        {
                            question: "Que signifie 'Je voudrais un steak' ?",
                            options: ["I like steak", "I would like a steak", "I eat steak", "I cook steak"],
                            correct: 1
                        },
                        {
                            question: "Comment dit-on 'It was delicious' en français ?",
                            options: ["C'était terrible", "C'était correct", "C'était délicieux", "C'était cher"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Faire du Shopping",
                    xp: 35,
                    content: {
                        explanation: "Le vocabulaire du shopping vous aide à acheter des choses, demander les prix et communiquer dans les magasins.",
                        examples: [
                            { text: "Combien ça coûte ?", translation: "How much does this cost?" },
                            { text: "Ça coûte 20 euros", translation: "It costs 20 euros" },
                            { text: "Avez-vous ceci en taille M ?", translation: "Do you have this in size M?" },
                            { text: "Je prends celui-ci", translation: "I will take this one" },
                            { text: "Puis-je payer par carte ?", translation: "Can I pay by card?" },
                            { text: "Avez-vous une réduction ?", translation: "Do you have a discount?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment demande-t-on le prix de quelque chose ?",
                            options: ["Où est-ce ?", "Combien ça coûte ?", "Avez-vous ceci ?", "Puis-je payer ?"],
                            correct: 1
                        },
                        {
                            question: "Que signifie 'Je prends celui-ci' ?",
                            options: ["I am just looking", "I don't want this", "I will take this one", "It's too expensive"],
                            correct: 2
                        },
                        {
                            question: "Comment demande-t-on à payer par carte ?",
                            options: ["Puis-je payer en espèces ?", "Puis-je payer par carte ?", "C'est gratuit ?", "Avez-vous la monnaie ?"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Faire des Plans",
                    xp: 35,
                    content: {
                        explanation: "Apprenez à faire des plans, suggérer des activités et organiser des rendez-vous avec des amis en français.",
                        examples: [
                            { text: "Tu veux aller au cinéma ?", translation: "Would you like to go to the cinema?" },
                            { text: "Bien sûr, c'est une super idée !", translation: "Sure, that sounds great!" },
                            { text: "Je suis libre samedi", translation: "I am free on Saturday" },
                            { text: "On se retrouve à quelle heure ?", translation: "What time shall we meet?" },
                            { text: "Retrouvons-nous à 19h", translation: "Let's meet at 7 PM" },
                            { text: "Désolé(e), je suis occupé(e)", translation: "Sorry, I am busy" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment suggère-t-on d'aller au cinéma ?",
                            options: ["J'aime le cinéma", "Tu veux aller au cinéma ?", "Le cinéma est loin", "Je suis allé au cinéma"],
                            correct: 1
                        },
                        {
                            question: "Que signifie 'Je suis libre samedi' ?",
                            options: ["I work on Saturday", "I am free on Saturday", "I am busy on Saturday", "I like Saturday"],
                            correct: 1
                        },
                        {
                            question: "Comment dit-on 'Sorry, I am busy' en français ?",
                            options: ["Bien sûr", "Je suis libre", "Désolé(e), je suis occupé(e)", "Retrouvons-nous"],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "La Prononciation",
            icon: "🎙️",
            lessons: [
                {
                    id: 1,
                    title: "Les Sons des Voyelles",
                    xp: 40,
                    content: {
                        explanation: "Le français a des sons de voyelles très différents de l'anglais. Les voyelles nasales (an, en, in, on, un) sont particulièrement uniques.",
                        examples: [
                            { text: "A → Patte 🐾 / Pâte 🍝", translation: "A short (paw) / A long (dough)" },
                            { text: "E → Le 🫵 / Fée 🧚", translation: "E mute (the) / E accent (fairy)" },
                            { text: "AN → Enfant 👶", translation: "AN nasal sound (child)" },
                            { text: "IN → Lapin 🐰", translation: "IN nasal sound (rabbit)" },
                            { text: "ON → Maison 🏠", translation: "ON nasal sound (house)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Quel mot contient un son nasal ?",
                            options: ["Chat", "Chien", "Lapin", "Cheval"],
                            correct: 2
                        },
                        {
                            question: "Combien y a-t-il de lettres voyelles en français ?",
                            options: ["4", "5", "6", "7"],
                            correct: 2
                        },
                        {
                            question: "Quel son est unique au français ?",
                            options: ["A", "E", "Son nasal (AN, IN, ON)", "I"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Les Sons des Consonnes",
                    xp: 40,
                    content: {
                        explanation: "Certaines consonnes françaises ont des sons uniques. Le R français est particulièrement difficile pour les anglophones.",
                        examples: [
                            { text: "R → Rouge 🔴 (R guttural)", translation: "R → Red (guttural R, from the throat)" },
                            { text: "GN → Agneau 🐑 (comme 'ni' en anglais)", translation: "GN → Lamb (like 'ny' in English)" },
                            { text: "CH → Chat 🐱 (comme 'sh')", translation: "CH → Cat (like 'sh' in English)" },
                            { text: "J → Jour 📅 (comme 'zh')", translation: "J → Day (like 'zh' sound)" },
                            { text: "LL → Fille 👧 (comme 'y')", translation: "LL → Girl (like 'y' in yes)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment se prononce 'CH' en français ?",
                            options: ["K", "Ch (comme chair)", "Sh (comme she)", "Z"],
                            correct: 2
                        },
                        {
                            question: "Quel son est difficile pour les anglophones ?",
                            options: ["P", "B", "R guttural", "T"],
                            correct: 2
                        },
                        {
                            question: "Comment se prononce 'GN' dans 'Agneau' ?",
                            options: ["G + N séparés", "Comme 'ny'", "Comme 'gn' en anglais", "Silencieux"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Les Lettres Muettes",
                    xp: 40,
                    content: {
                        explanation: "En français, de nombreuses lettres s'écrivent mais ne se prononcent pas. C'est l'une des difficultés majeures du français.",
                        examples: [
                            { text: "Beaucoup → /boku/ (P muet)", translation: "Beaucoup → /boku/ (silent P)" },
                            { text: "Temps → /tɑ̃/ (PS muets)", translation: "Time → /tɑ̃/ (silent PS)" },
                            { text: "Grand → /ɡʁɑ̃/ (D muet)", translation: "Big → /ɡʁɑ̃/ (silent D)" },
                            { text: "Parler → /paʁle/ (R final muet)", translation: "To speak → (silent final R)" },
                            { text: "Vingt → /vɛ̃/ (GT muets)", translation: "Twenty → /vɛ̃/ (silent GT)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Quelle lettre est muette dans 'Beaucoup' ?",
                            options: ["B", "E", "C", "P"],
                            correct: 3
                        },
                        {
                            question: "Quelle lettre est muette dans 'Grand' ?",
                            options: ["G", "R", "A", "D"],
                            correct: 3
                        },
                        {
                            question: "Quelle lettre est muette dans 'Temps' ?",
                            options: ["T", "E", "M", "PS"],
                            correct: 3
                        }
                    ]
                },
                {
                    id: 4,
                    title: "L'Accent Tonique",
                    xp: 40,
                    content: {
                        explanation: "Contrairement à l'anglais, le français n'a pas vraiment d'accent tonique fort. La dernière syllabe prononcée est légèrement accentuée.",
                        examples: [
                            { text: "Ma-da-ME (accent sur ME)", translation: "Madam (accent on last syllable)" },
                            { text: "Pa-ris (accent sur RIS)", translation: "Paris (accent on last syllable)" },
                            { text: "Beau-coup (accent sur COU)", translation: "A lot (accent on last syllable)" },
                            { text: "Ap-par-te-MENT", translation: "Apartment (accent on last syllable)" },
                            { text: "Uni-ver-si-TÉ", translation: "University (accent on last syllable)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Quelle syllabe est accentuée en français ?",
                            options: ["La première", "La deuxième", "La dernière", "Aucune"],
                            correct: 2
                        },
                        {
                            question: "Quelle syllabe est accentuée dans 'Paris' ?",
                            options: ["PA", "RIS", "Les deux", "Aucune"],
                            correct: 1
                        },
                        {
                            question: "Comment est l'accent tonique français comparé à l'anglais ?",
                            options: ["Plus fort", "Identique", "Plus faible / moins marqué", "Inexistant"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Erreurs Courantes",
                    xp: 40,
                    content: {
                        explanation: "Les anglophones font souvent des erreurs spécifiques en français. Voici les plus courantes à éviter.",
                        examples: [
                            { text: "Le H : 'Hôtel' pas 'Otel'", translation: "H is silent in French unlike English" },
                            { text: "Le R : Guttural, pas comme en anglais", translation: "French R comes from the throat" },
                            { text: "Les finales : 'Chat' pas 'Chate'", translation: "Don't add extra sounds at the end" },
                            { text: "Le U : 'Tu' pas 'Tou'", translation: "French U has no equivalent in English" },
                            { text: "La liaison : 'Les amis' → 'Lezamis'", translation: "Liaison: linking words when next word starts with vowel" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Comment les anglophones prononcent-ils souvent mal le 'U' français ?",
                            options: ["Ils disent 'Ou'", "Ils disent 'A'", "Ils disent 'E'", "Ils le prononcent correctement"],
                            correct: 0
                        },
                        {
                            question: "Qu'est-ce que la liaison en français ?",
                            options: ["Parler vite", "Lier deux mots quand le suivant commence par une voyelle", "Ne pas prononcer les consonnes", "Accentuer la dernière syllabe"],
                            correct: 1
                        },
                        {
                            question: "Comment est le R français ?",
                            options: ["Comme le R anglais", "Silencieux", "Guttural (de la gorge)", "Comme le R espagnol"],
                            correct: 2
                        }
                    ]
                }
            ]
        }
    ]
};
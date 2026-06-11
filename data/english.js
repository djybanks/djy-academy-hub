const englishCourse = {
    modules: [
        {
            id: 1,
            title: "Basics",
            icon: "🔤",
            lessons: [
                {
                    id: 1,
                    title: "Alphabet & Pronunciation",
                    xp: 20,
                    content: {
                        explanation: "The English alphabet has 26 letters. Each letter has a name and a sound. Vowels are: A, E, I, O, U. All other letters are consonants.",
                        examples: [
                            { text: "A is for Apple 🍎", translation: "A comme Apple" },
                            { text: "B is for Book 📚", translation: "B comme Book" },
                            { text: "C is for Cat 🐱", translation: "C comme Cat" },
                            { text: "Vowels: A - E - I - O - U", translation: "Voyelles : A - E - I - O - U" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How many letters are in the English alphabet?",
                            options: ["24", "25", "26", "27"],
                            correct: 2
                        },
                        {
                            question: "Which of these is a vowel?",
                            options: ["B", "C", "E", "T"],
                            correct: 2
                        },
                        {
                            question: "How many vowels are in the English alphabet?",
                            options: ["3", "4", "5", "6"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Greetings",
                    xp: 20,
                    content: {
                        explanation: "Greetings are words or phrases used to say hello or goodbye. In English, greetings change depending on the time of day and the situation.",
                        examples: [
                            { text: "Hello / Hi", translation: "Bonjour / Salut" },
                            { text: "Good morning", translation: "Bonjour (le matin)" },
                            { text: "Good afternoon", translation: "Bon après-midi" },
                            { text: "Good evening", translation: "Bonsoir" },
                            { text: "Goodbye / Bye", translation: "Au revoir" },
                            { text: "How are you?", translation: "Comment vas-tu ?" },
                            { text: "I'm fine, thank you", translation: "Je vais bien, merci" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Bonjour (le matin)' in English?",
                            options: ["Good night", "Good morning", "Good evening", "Hello"],
                            correct: 1
                        },
                        {
                            question: "What does 'How are you?' mean?",
                            options: ["Où es-tu ?", "Qui es-tu ?", "Comment vas-tu ?", "Que fais-tu ?"],
                            correct: 2
                        },
                        {
                            question: "How do you say 'Au revoir' in English?",
                            options: ["Hello", "Hi", "Goodbye", "Good morning"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Numbers",
                    xp: 20,
                    content: {
                        explanation: "Numbers in English are essential for everyday life. Learn the basics from 1 to 20 and some key numbers.",
                        examples: [
                            { text: "1 - One, 2 - Two, 3 - Three", translation: "1 - Un, 2 - Deux, 3 - Trois" },
                            { text: "4 - Four, 5 - Five, 6 - Six", translation: "4 - Quatre, 5 - Cinq, 6 - Six" },
                            { text: "7 - Seven, 8 - Eight, 9 - Nine", translation: "7 - Sept, 8 - Huit, 9 - Neuf" },
                            { text: "10 - Ten, 11 - Eleven, 12 - Twelve", translation: "10 - Dix, 11 - Onze, 12 - Douze" },
                            { text: "20 - Twenty, 50 - Fifty, 100 - One hundred", translation: "20 - Vingt, 50 - Cinquante, 100 - Cent" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say '7' in English?",
                            options: ["Six", "Eight", "Seven", "Five"],
                            correct: 2
                        },
                        {
                            question: "What number is 'Twelve'?",
                            options: ["10", "11", "12", "13"],
                            correct: 2
                        },
                        {
                            question: "How do you say '100' in English?",
                            options: ["One thousand", "One hundred", "One million", "Ten"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Colors",
                    xp: 20,
                    content: {
                        explanation: "Colors are used every day in English. Learn the basic colors and how to use them in sentences.",
                        examples: [
                            { text: "Red 🔴", translation: "Rouge" },
                            { text: "Blue 🔵", translation: "Bleu" },
                            { text: "Green 🟢", translation: "Vert" },
                            { text: "Yellow 🟡", translation: "Jaune" },
                            { text: "Black ⚫", translation: "Noir" },
                            { text: "White ⚪", translation: "Blanc" },
                            { text: "The sky is blue", translation: "Le ciel est bleu" }
                        ]
                    },
                    quiz: [
                        {
                            question: "What color is 'Rouge' in English?",
                            options: ["Blue", "Green", "Red", "Yellow"],
                            correct: 2
                        },
                        {
                            question: "How do you say 'Noir' in English?",
                            options: ["White", "Black", "Brown", "Grey"],
                            correct: 1
                        },
                        {
                            question: "What does 'The sky is blue' mean?",
                            options: ["La mer est bleue", "Le ciel est vert", "Le ciel est bleu", "La terre est bleue"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Days & Months",
                    xp: 20,
                    content: {
                        explanation: "There are 7 days in a week and 12 months in a year. In English, days and months always start with a capital letter.",
                        examples: [
                            { text: "Monday, Tuesday, Wednesday", translation: "Lundi, Mardi, Mercredi" },
                            { text: "Thursday, Friday", translation: "Jeudi, Vendredi" },
                            { text: "Saturday, Sunday", translation: "Samedi, Dimanche" },
                            { text: "January, February, March", translation: "Janvier, Février, Mars" },
                            { text: "April, May, June", translation: "Avril, Mai, Juin" },
                            { text: "July, August, September", translation: "Juillet, Août, Septembre" },
                            { text: "October, November, December", translation: "Octobre, Novembre, Décembre" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Lundi' in English?",
                            options: ["Sunday", "Tuesday", "Monday", "Friday"],
                            correct: 2
                        },
                        {
                            question: "What month comes after 'January'?",
                            options: ["March", "December", "February", "April"],
                            correct: 2
                        },
                        {
                            question: "How many days are in a week?",
                            options: ["5", "6", "7", "8"],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Vocabulary",
            icon: "📝",
            lessons: [
                {
                    id: 1,
                    title: "Family Members",
                    xp: 25,
                    content: {
                        explanation: "Family vocabulary is essential in everyday English conversations. Learn the most common family members.",
                        examples: [
                            { text: "Mother / Mom", translation: "Mère / Maman" },
                            { text: "Father / Dad", translation: "Père / Papa" },
                            { text: "Brother", translation: "Frère" },
                            { text: "Sister", translation: "Sœur" },
                            { text: "Grandmother / Grandma", translation: "Grand-mère / Mamie" },
                            { text: "Grandfather / Grandpa", translation: "Grand-père / Papy" },
                            { text: "This is my brother", translation: "C'est mon frère" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Mère' in English?",
                            options: ["Sister", "Mother", "Grandmother", "Aunt"],
                            correct: 1
                        },
                        {
                            question: "What does 'Brother' mean?",
                            options: ["Sœur", "Père", "Frère", "Cousin"],
                            correct: 2
                        },
                        {
                            question: "How do you say 'Grand-père' in English?",
                            options: ["Grandma", "Uncle", "Grandfather", "Father"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Food & Drinks",
                    xp: 25,
                    content: {
                        explanation: "Food and drink vocabulary is essential for daily life and travel. Learn the most common words.",
                        examples: [
                            { text: "Apple 🍎", translation: "Pomme" },
                            { text: "Bread 🍞", translation: "Pain" },
                            { text: "Water 💧", translation: "Eau" },
                            { text: "Coffee ☕", translation: "Café" },
                            { text: "Rice 🍚", translation: "Riz" },
                            { text: "Chicken 🍗", translation: "Poulet" },
                            { text: "I would like a coffee, please", translation: "Je voudrais un café, s'il vous plaît" }
                        ]
                    },
                    quiz: [
                        {
                            question: "What does 'Bread' mean?",
                            options: ["Eau", "Pain", "Riz", "Lait"],
                            correct: 1
                        },
                        {
                            question: "How do you say 'Eau' in English?",
                            options: ["Juice", "Milk", "Water", "Coffee"],
                            correct: 2
                        },
                        {
                            question: "What does 'Apple' mean?",
                            options: ["Orange", "Banane", "Pomme", "Raisin"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Animals",
                    xp: 25,
                    content: {
                        explanation: "Animals are a fun and important part of English vocabulary. Learn the most common animals.",
                        examples: [
                            { text: "Dog 🐶", translation: "Chien" },
                            { text: "Cat 🐱", translation: "Chat" },
                            { text: "Bird 🐦", translation: "Oiseau" },
                            { text: "Fish 🐟", translation: "Poisson" },
                            { text: "Lion 🦁", translation: "Lion" },
                            { text: "Elephant 🐘", translation: "Éléphant" },
                            { text: "The dog is big", translation: "Le chien est grand" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Chat' in English?",
                            options: ["Dog", "Bird", "Cat", "Fish"],
                            correct: 2
                        },
                        {
                            question: "What does 'Elephant' mean?",
                            options: ["Lion", "Éléphant", "Girafe", "Tigre"],
                            correct: 1
                        },
                        {
                            question: "How do you say 'Oiseau' in English?",
                            options: ["Fish", "Dog", "Cat", "Bird"],
                            correct: 3
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Body Parts",
                    xp: 25,
                    content: {
                        explanation: "Knowing body parts in English is essential for health conversations and daily life.",
                        examples: [
                            { text: "Head 🤯", translation: "Tête" },
                            { text: "Eyes 👀", translation: "Yeux" },
                            { text: "Nose 👃", translation: "Nez" },
                            { text: "Mouth 👄", translation: "Bouche" },
                            { text: "Hand ✋", translation: "Main" },
                            { text: "Foot 🦶", translation: "Pied" },
                            { text: "My head hurts", translation: "J'ai mal à la tête" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Tête' in English?",
                            options: ["Hand", "Foot", "Head", "Eye"],
                            correct: 2
                        },
                        {
                            question: "What does 'Nose' mean?",
                            options: ["Bouche", "Oreille", "Nez", "Œil"],
                            correct: 2
                        },
                        {
                            question: "How do you say 'Main' in English?",
                            options: ["Foot", "Hand", "Arm", "Leg"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Clothes",
                    xp: 25,
                    content: {
                        explanation: "Clothes vocabulary is essential for shopping and describing what you wear.",
                        examples: [
                            { text: "T-shirt 👕", translation: "T-shirt" },
                            { text: "Pants / Trousers 👖", translation: "Pantalon" },
                            { text: "Shoes 👟", translation: "Chaussures" },
                            { text: "Jacket 🧥", translation: "Veste / Blouson" },
                            { text: "Hat 🎩", translation: "Chapeau" },
                            { text: "Dress 👗", translation: "Robe" },
                            { text: "I am wearing a blue shirt", translation: "Je porte une chemise bleue" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Chaussures' in English?",
                            options: ["Hat", "Jacket", "Shoes", "Dress"],
                            correct: 2
                        },
                        {
                            question: "What does 'Hat' mean?",
                            options: ["Robe", "Chapeau", "Ceinture", "Chaussette"],
                            correct: 1
                        },
                        {
                            question: "How do you say 'Pantalon' in English?",
                            options: ["Shirt", "Jacket", "Dress", "Pants"],
                            correct: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Grammar",
            icon: "📐",
            lessons: [
                {
                    id: 1,
                    title: "Subject Pronouns",
                    xp: 30,
                    content: {
                        explanation: "Subject pronouns replace the name of a person or thing as the subject of a sentence. They are: I, You, He, She, It, We, They.",
                        examples: [
                            { text: "I am a student", translation: "Je suis étudiant(e)" },
                            { text: "You are my friend", translation: "Tu es mon ami(e)" },
                            { text: "He is tall", translation: "Il est grand" },
                            { text: "She is beautiful", translation: "Elle est belle" },
                            { text: "We are happy", translation: "Nous sommes heureux" },
                            { text: "They are teachers", translation: "Ils sont professeurs" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Which pronoun replaces 'Marie'?",
                            options: ["He", "It", "She", "They"],
                            correct: 2
                        },
                        {
                            question: "What does 'We' mean?",
                            options: ["Je", "Tu", "Ils", "Nous"],
                            correct: 3
                        },
                        {
                            question: "Complete: '___ are my friends'",
                            options: ["He", "She", "They", "It"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Verb To Be",
                    xp: 30,
                    content: {
                        explanation: "The verb 'To Be' is the most important verb in English. It means 'être' in French. It changes depending on the subject: am, is, are.",
                        examples: [
                            { text: "I am happy", translation: "Je suis heureux" },
                            { text: "You are smart", translation: "Tu es intelligent(e)" },
                            { text: "He is tall", translation: "Il est grand" },
                            { text: "She is kind", translation: "Elle est gentille" },
                            { text: "We are students", translation: "Nous sommes étudiants" },
                            { text: "They are tired", translation: "Ils sont fatigués" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Complete: 'I ___ a doctor'",
                            options: ["is", "are", "am", "be"],
                            correct: 2
                        },
                        {
                            question: "Complete: 'They ___ my friends'",
                            options: ["am", "is", "are", "be"],
                            correct: 2
                        },
                        {
                            question: "Complete: 'She ___ beautiful'",
                            options: ["am", "is", "are", "be"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Present Simple",
                    xp: 30,
                    content: {
                        explanation: "The Present Simple is used for habits, routines and general truths. Add 's' or 'es' for He/She/It.",
                        examples: [
                            { text: "I eat breakfast every day", translation: "Je prends le petit-déjeuner chaque jour" },
                            { text: "She works at a hospital", translation: "Elle travaille dans un hôpital" },
                            { text: "They play football on Sundays", translation: "Ils jouent au football le dimanche" },
                            { text: "He watches TV every night", translation: "Il regarde la télé chaque soir" },
                            { text: "We study English", translation: "Nous étudions l'anglais" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Complete: 'She ___ to school every day'",
                            options: ["go", "goes", "going", "gone"],
                            correct: 1
                        },
                        {
                            question: "Which sentence is correct?",
                            options: ["He play football", "He plays football", "He playing football", "He played football"],
                            correct: 1
                        },
                        {
                            question: "Complete: 'They ___ English'",
                            options: ["studies", "study", "studying", "studied"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Articles",
                    xp: 30,
                    content: {
                        explanation: "Articles are small words used before nouns. 'A' and 'An' are indefinite articles. 'The' is the definite article.",
                        examples: [
                            { text: "A cat (any cat)", translation: "Un chat (n'importe quel chat)" },
                            { text: "An apple (starts with vowel)", translation: "Une pomme (commence par une voyelle)" },
                            { text: "The cat (a specific cat)", translation: "Le chat (un chat précis)" },
                            { text: "I have a dog", translation: "J'ai un chien" },
                            { text: "She is an engineer", translation: "Elle est ingénieure" },
                            { text: "The sun is bright", translation: "Le soleil est brillant" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Which article goes before 'apple'?",
                            options: ["A", "An", "The", "No article"],
                            correct: 1
                        },
                        {
                            question: "Complete: 'I have ___ dog'",
                            options: ["an", "the", "a", "—"],
                            correct: 2
                        },
                        {
                            question: "When do we use 'An'?",
                            options: ["Before consonants", "Before vowels", "Before plural nouns", "Never"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Plurals",
                    xp: 30,
                    content: {
                        explanation: "To make a noun plural in English, usually add 's'. For words ending in s, x, ch, sh, add 'es'. For words ending in 'y', change 'y' to 'ies'.",
                        examples: [
                            { text: "Cat → Cats", translation: "Chat → Chats" },
                            { text: "Box → Boxes", translation: "Boîte → Boîtes" },
                            { text: "Church → Churches", translation: "Église → Églises" },
                            { text: "Baby → Babies", translation: "Bébé → Bébés" },
                            { text: "Man → Men (irregular)", translation: "Homme → Hommes (irrégulier)" },
                            { text: "Child → Children (irregular)", translation: "Enfant → Enfants (irrégulier)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "What is the plural of 'Box'?",
                            options: ["Boxs", "Boxes", "Boxies", "Box"],
                            correct: 1
                        },
                        {
                            question: "What is the plural of 'Baby'?",
                            options: ["Babys", "Babyies", "Babies", "Baby"],
                            correct: 2
                        },
                        {
                            question: "What is the plural of 'Man'?",
                            options: ["Mans", "Manes", "Manies", "Men"],
                            correct: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Conversation",
            icon: "💬",
            lessons: [
                {
                    id: 1,
                    title: "Introducing Yourself",
                    xp: 35,
                    content: {
                        explanation: "Introducing yourself is one of the first things you do when meeting someone new. Learn key phrases for introductions.",
                        examples: [
                            { text: "My name is John", translation: "Je m'appelle John" },
                            { text: "I am 25 years old", translation: "J'ai 25 ans" },
                            { text: "I am from France", translation: "Je suis de France" },
                            { text: "I am a student", translation: "Je suis étudiant(e)" },
                            { text: "Nice to meet you", translation: "Enchanté(e)" },
                            { text: "What is your name?", translation: "Comment tu t'appelles ?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Je m'appelle' in English?",
                            options: ["I am from", "My name is", "I have", "I like"],
                            correct: 1
                        },
                        {
                            question: "What does 'Nice to meet you' mean?",
                            options: ["À bientôt", "Bonne nuit", "Enchanté(e)", "Merci"],
                            correct: 2
                        },
                        {
                            question: "How do you ask someone's name in English?",
                            options: ["Where are you from?", "How old are you?", "What is your name?", "What do you do?"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Asking for Directions",
                    xp: 35,
                    content: {
                        explanation: "Knowing how to ask for and give directions is essential when traveling or living in an English-speaking country.",
                        examples: [
                            { text: "Where is the bank?", translation: "Où est la banque ?" },
                            { text: "Turn left / Turn right", translation: "Tournez à gauche / Tournez à droite" },
                            { text: "Go straight ahead", translation: "Allez tout droit" },
                            { text: "It is next to the park", translation: "C'est à côté du parc" },
                            { text: "How far is it?", translation: "C'est à quelle distance ?" },
                            { text: "Excuse me, can you help me?", translation: "Excusez-moi, pouvez-vous m'aider ?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you say 'Tournez à gauche'?",
                            options: ["Turn right", "Go straight", "Turn left", "Stop here"],
                            correct: 2
                        },
                        {
                            question: "What does 'Go straight ahead' mean?",
                            options: ["Tournez à droite", "Revenez en arrière", "Allez tout droit", "Arrêtez-vous"],
                            correct: 2
                        },
                        {
                            question: "How do you ask where something is?",
                            options: ["What is...?", "Where is...?", "Who is...?", "How is...?"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "At the Restaurant",
                    xp: 35,
                    content: {
                        explanation: "Learn how to order food, ask for the menu, and pay the bill at a restaurant in English.",
                        examples: [
                            { text: "Can I have the menu, please?", translation: "Puis-je avoir le menu, s'il vous plaît ?" },
                            { text: "I would like a steak", translation: "Je voudrais un steak" },
                            { text: "Can I have the bill, please?", translation: "Puis-je avoir l'addition, s'il vous plaît ?" },
                            { text: "Is this table free?", translation: "Cette table est-elle libre ?" },
                            { text: "I am vegetarian", translation: "Je suis végétarien(ne)" },
                            { text: "It was delicious!", translation: "C'était délicieux !" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you ask for the bill?",
                            options: ["Can I have the menu?", "Can I have the bill?", "Is this table free?", "I am vegetarian"],
                            correct: 1
                        },
                        {
                            question: "What does 'I would like a steak' mean?",
                            options: ["J'aime le steak", "Je voudrais un steak", "Je mange un steak", "Je cuisine un steak"],
                            correct: 1
                        },
                        {
                            question: "How do you say 'C'était délicieux'?",
                            options: ["It was terrible", "It was okay", "It was delicious", "It was expensive"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Shopping",
                    xp: 35,
                    content: {
                        explanation: "Shopping vocabulary helps you buy things, ask about prices, and communicate in stores.",
                        examples: [
                            { text: "How much does this cost?", translation: "Combien ça coûte ?" },
                            { text: "It costs 20 dollars", translation: "Ça coûte 20 dollars" },
                            { text: "Do you have this in size M?", translation: "Avez-vous ceci en taille M ?" },
                            { text: "I will take this one", translation: "Je prends celui-ci" },
                            { text: "Can I pay by card?", translation: "Puis-je payer par carte ?" },
                            { text: "Do you have a discount?", translation: "Avez-vous une réduction ?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you ask the price of something?",
                            options: ["Where is this?", "How much does this cost?", "Do you have this?", "Can I pay?"],
                            correct: 1
                        },
                        {
                            question: "What does 'I will take this one' mean?",
                            options: ["Je regarde seulement", "Je ne veux pas ça", "Je prends celui-ci", "C'est trop cher"],
                            correct: 2
                        },
                        {
                            question: "How do you ask to pay by card?",
                            options: ["Can I pay cash?", "Can I pay by card?", "Is it free?", "Do you have change?"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Making Plans",
                    xp: 35,
                    content: {
                        explanation: "Learn how to make plans, suggest activities, and arrange meetings with friends in English.",
                        examples: [
                            { text: "Would you like to go to the cinema?", translation: "Voudrais-tu aller au cinéma ?" },
                            { text: "Sure, that sounds great!", translation: "Bien sûr, c'est une super idée !" },
                            { text: "I am free on Saturday", translation: "Je suis libre samedi" },
                            { text: "What time shall we meet?", translation: "À quelle heure se retrouve-t-on ?" },
                            { text: "Let's meet at 7 PM", translation: "Retrouvons-nous à 19h" },
                            { text: "Sorry, I am busy", translation: "Désolé(e), je suis occupé(e)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do you suggest going to the cinema?",
                            options: ["I like cinema", "Would you like to go to the cinema?", "The cinema is far", "I went to the cinema"],
                            correct: 1
                        },
                        {
                            question: "What does 'I am free on Saturday' mean?",
                            options: ["Je travaille samedi", "Je suis libre samedi", "Je suis occupé samedi", "J'aime le samedi"],
                            correct: 1
                        },
                        {
                            question: "How do you say 'Désolé, je suis occupé'?",
                            options: ["Sure, sounds great", "I am free", "Sorry, I am busy", "Let's meet"],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Pronunciation",
            icon: "🎙️",
            lessons: [
                {
                    id: 1,
                    title: "Vowel Sounds",
                    xp: 40,
                    content: {
                        explanation: "English has 5 vowel letters (A, E, I, O, U) but many more vowel sounds. Each vowel can have different sounds depending on the word.",
                        examples: [
                            { text: "A → Cat 🐱 / Cake 🎂", translation: "A court (chat) / A long (gâteau)" },
                            { text: "E → Bed 🛏️ / See 👀", translation: "E court (lit) / E long (voir)" },
                            { text: "I → Sit 🪑 / Bike 🚲", translation: "I court (s'asseoir) / I long (vélo)" },
                            { text: "O → Hot 🔥 / Home 🏠", translation: "O court (chaud) / O long (maison)" },
                            { text: "U → Cup ☕ / Tune 🎵", translation: "U court (tasse) / U long (mélodie)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Which word has a long 'A' sound?",
                            options: ["Cat", "Can", "Cake", "Cap"],
                            correct: 2
                        },
                        {
                            question: "Which word has a short 'I' sound?",
                            options: ["Bike", "Sit", "Mine", "Rise"],
                            correct: 1
                        },
                        {
                            question: "How many vowel letters are in English?",
                            options: ["3", "4", "5", "6"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Consonant Sounds",
                    xp: 40,
                    content: {
                        explanation: "Some English consonant combinations create unique sounds that don't exist in French. The most important are: TH, SH, CH.",
                        examples: [
                            { text: "TH → Think 🤔 / This", translation: "TH comme dans 'think' (penser)" },
                            { text: "SH → She 👩 / Shop 🛍️", translation: "SH comme dans 'she' (elle)" },
                            { text: "CH → Chair 🪑 / Church ⛪", translation: "CH comme dans 'chair' (chaise)" },
                            { text: "WH → Where / What / Why", translation: "WH : où / quoi / pourquoi" },
                            { text: "PH → Phone 📱 / Photo 📸", translation: "PH se prononce F" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How is 'PH' pronounced in English?",
                            options: ["P", "B", "F", "V"],
                            correct: 2
                        },
                        {
                            question: "Which sound does 'SH' make?",
                            options: ["S", "Sh (like 'she')", "Ch", "Z"],
                            correct: 1
                        },
                        {
                            question: "Which word uses the 'TH' sound?",
                            options: ["Shop", "Chair", "Think", "Phone"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Silent Letters",
                    xp: 40,
                    content: {
                        explanation: "In English, some letters are written but not pronounced. These are called silent letters. They can be tricky!",
                        examples: [
                            { text: "Know → /noʊ/ (K is silent)", translation: "Savoir → le K ne se prononce pas" },
                            { text: "Write → /raɪt/ (W is silent)", translation: "Écrire → le W ne se prononce pas" },
                            { text: "Lamb → /læm/ (B is silent)", translation: "Agneau → le B ne se prononce pas" },
                            { text: "Hour → /aʊər/ (H is silent)", translation: "Heure → le H ne se prononce pas" },
                            { text: "Castle → /kæsl/ (T is silent)", translation: "Château → le T ne se prononce pas" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Which letter is silent in 'Know'?",
                            options: ["N", "O", "W", "K"],
                            correct: 3
                        },
                        {
                            question: "Which letter is silent in 'Lamb'?",
                            options: ["L", "A", "M", "B"],
                            correct: 3
                        },
                        {
                            question: "Which letter is silent in 'Hour'?",
                            options: ["H", "O", "U", "R"],
                            correct: 0
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Word Stress",
                    xp: 40,
                    content: {
                        explanation: "Word stress means emphasizing one syllable more than others. In English, stress can change the meaning or part of speech of a word.",
                        examples: [
                            { text: "PHOto (noun) 📸", translation: "PHOto = la photo (nom)" },
                            { text: "phoTOgraphy (noun) 📷", translation: "phoTOgraphy = la photographie" },
                            { text: "REcord (noun) 💿", translation: "REcord = le disque (nom)" },
                            { text: "reCORD (verb) 🎙️", translation: "reCORD = enregistrer (verbe)" },
                            { text: "PREsent (noun/adj)", translation: "PREsent = cadeau / présent (nom/adj)" },
                            { text: "preSENT (verb)", translation: "preSENT = présenter (verbe)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Which syllable is stressed in 'PHOto'?",
                            options: ["PHO", "TO", "Both", "Neither"],
                            correct: 0
                        },
                        {
                            question: "'REcord' is a...",
                            options: ["Verb", "Adjective", "Noun", "Adverb"],
                            correct: 2
                        },
                        {
                            question: "Which syllable is stressed in 'phoTOgraphy'?",
                            options: ["PHO", "TO", "GRA", "PHY"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Common Mistakes",
                    xp: 40,
                    content: {
                        explanation: "French speakers often make specific pronunciation mistakes in English. Here are the most common ones to avoid.",
                        examples: [
                            { text: "H sound: 'Hotel' not 'Otel'", translation: "Le H se prononce en anglais contrairement au français" },
                            { text: "TH sound: 'The' not 'Ze' or 'De'", translation: "Le TH n'existe pas en français" },
                            { text: "Final consonants: 'Big' not 'Beeg'", translation: "Ne pas allonger les voyelles finales" },
                            { text: "W sound: 'Wine' not 'Vine'", translation: "Le W anglais n'est pas un V français" },
                            { text: "R sound: English R is softer than French R", translation: "Le R anglais est différent du R français" }
                        ]
                    },
                    quiz: [
                        {
                            question: "How do French speakers often mispronounce 'The'?",
                            options: ["They say 'De' or 'Ze'", "They say 'The' correctly", "They skip it", "They say 'A'"],
                            correct: 0
                        },
                        {
                            question: "The English 'W' in 'Wine' sounds like which French letter?",
                            options: ["V", "B", "W (same)", "F"],
                            correct: 2
                        },
                        {
                            question: "Which letter is pronounced in English but often silent in French?",
                            options: ["E", "H", "S", "T"],
                            correct: 1
                        }
                    ]
                }
            ]
        }
    ]
};
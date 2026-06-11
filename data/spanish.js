const spanishCourse = {
    modules: [
        {
            id: 1,
            title: "Las Bases",
            icon: "🔤",
            lessons: [
                {
                    id: 1,
                    title: "El Alfabeto & La Pronunciación",
                    xp: 20,
                    content: {
                        explanation: "El alfabeto español tiene 27 letras. Incluye la Ñ, que no existe en otros idiomas. Las vocales son: A, E, I, O, U.",
                        examples: [
                            { text: "A como Árbol 🌳", translation: "A as in Tree" },
                            { text: "Ñ como Niño 👦", translation: "Ñ as in Child" },
                            { text: "LL como Llave 🔑", translation: "LL as in Key" },
                            { text: "RR como Perro 🐶", translation: "RR as in Dog (rolled R)" },
                            { text: "Las vocales: A - E - I - O - U", translation: "Vowels: A - E - I - O - U" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cuántas letras tiene el alfabeto español?",
                            options: ["24", "26", "27", "28"],
                            correct: 2
                        },
                        {
                            question: "¿Qué letra es única del español?",
                            options: ["Ch", "Ñ", "Ll", "Rr"],
                            correct: 1
                        },
                        {
                            question: "¿Cuántas vocales hay en español?",
                            options: ["3", "4", "5", "6"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Los Saludos",
                    xp: 20,
                    content: {
                        explanation: "Los saludos son esenciales en español. Cambian según el momento del día y el nivel de formalidad.",
                        examples: [
                            { text: "Hola", translation: "Hello / Hi" },
                            { text: "Buenos días", translation: "Good morning" },
                            { text: "Buenas tardes", translation: "Good afternoon" },
                            { text: "Buenas noches", translation: "Good evening / Good night" },
                            { text: "Adiós", translation: "Goodbye" },
                            { text: "¿Cómo estás?", translation: "How are you? (informal)" },
                            { text: "Estoy bien, gracias", translation: "I am fine, thank you" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Good morning' en español?",
                            options: ["Buenas noches", "Buenos días", "Buenas tardes", "Hola"],
                            correct: 1
                        },
                        {
                            question: "¿Qué significa '¿Cómo estás?'?",
                            options: ["Where are you?", "Who are you?", "How are you?", "What do you do?"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo se dice 'Goodbye' en español?",
                            options: ["Hola", "Buenos días", "Adiós", "Gracias"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Los Números",
                    xp: 20,
                    content: {
                        explanation: "Los números en español son esenciales para la vida diaria. Aprende los básicos del 1 al 20 y algunos números clave.",
                        examples: [
                            { text: "1 - Uno, 2 - Dos, 3 - Tres", translation: "1 - One, 2 - Two, 3 - Three" },
                            { text: "4 - Cuatro, 5 - Cinco, 6 - Seis", translation: "4 - Four, 5 - Five, 6 - Six" },
                            { text: "7 - Siete, 8 - Ocho, 9 - Nueve", translation: "7 - Seven, 8 - Eight, 9 - Nine" },
                            { text: "10 - Diez, 11 - Once, 12 - Doce", translation: "10 - Ten, 11 - Eleven, 12 - Twelve" },
                            { text: "20 - Veinte, 50 - Cincuenta, 100 - Cien", translation: "20 - Twenty, 50 - Fifty, 100 - One hundred" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice '7' en español?",
                            options: ["Seis", "Ocho", "Siete", "Cinco"],
                            correct: 2
                        },
                        {
                            question: "¿Qué número es 'Doce'?",
                            options: ["10", "11", "12", "13"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo se dice '100' en español?",
                            options: ["Mil", "Cien", "Diez", "Veinte"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Los Colores",
                    xp: 20,
                    content: {
                        explanation: "Los colores se usan cada día en español. Aprende los colores básicos y cómo usarlos en oraciones.",
                        examples: [
                            { text: "Rojo 🔴", translation: "Red" },
                            { text: "Azul 🔵", translation: "Blue" },
                            { text: "Verde 🟢", translation: "Green" },
                            { text: "Amarillo 🟡", translation: "Yellow" },
                            { text: "Negro ⚫", translation: "Black" },
                            { text: "Blanco ⚪", translation: "White" },
                            { text: "El cielo es azul", translation: "The sky is blue" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Red' en español?",
                            options: ["Azul", "Verde", "Rojo", "Amarillo"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo se dice 'Black' en español?",
                            options: ["Blanco", "Negro", "Gris", "Marrón"],
                            correct: 1
                        },
                        {
                            question: "¿Qué significa 'El cielo es azul'?",
                            options: ["The sea is blue", "The sky is green", "The sky is blue", "The earth is blue"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Los Días & Los Meses",
                    xp: 20,
                    content: {
                        explanation: "Hay 7 días en una semana y 12 meses en un año. En español, los días y meses se escriben en minúsculas.",
                        examples: [
                            { text: "Lunes, Martes, Miércoles", translation: "Monday, Tuesday, Wednesday" },
                            { text: "Jueves, Viernes", translation: "Thursday, Friday" },
                            { text: "Sábado, Domingo", translation: "Saturday, Sunday" },
                            { text: "Enero, Febrero, Marzo", translation: "January, February, March" },
                            { text: "Abril, Mayo, Junio", translation: "April, May, June" },
                            { text: "Julio, Agosto, Septiembre", translation: "July, August, September" },
                            { text: "Octubre, Noviembre, Diciembre", translation: "October, November, December" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Monday' en español?",
                            options: ["Domingo", "Martes", "Lunes", "Viernes"],
                            correct: 2
                        },
                        {
                            question: "¿Qué mes viene después de 'Enero'?",
                            options: ["Marzo", "Diciembre", "Febrero", "Abril"],
                            correct: 2
                        },
                        {
                            question: "¿Cuántos días hay en una semana?",
                            options: ["5", "6", "7", "8"],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "El Vocabulario",
            icon: "📝",
            lessons: [
                {
                    id: 1,
                    title: "La Familia",
                    xp: 25,
                    content: {
                        explanation: "El vocabulario de la familia es esencial en las conversaciones cotidianas en español.",
                        examples: [
                            { text: "La madre / Mamá", translation: "Mother / Mom" },
                            { text: "El padre / Papá", translation: "Father / Dad" },
                            { text: "El hermano", translation: "Brother" },
                            { text: "La hermana", translation: "Sister" },
                            { text: "La abuela", translation: "Grandmother" },
                            { text: "El abuelo", translation: "Grandfather" },
                            { text: "Este es mi hermano", translation: "This is my brother" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Mother' en español?",
                            options: ["La hermana", "La madre", "La abuela", "La tía"],
                            correct: 1
                        },
                        {
                            question: "¿Qué significa 'El hermano'?",
                            options: ["Sister", "Father", "Brother", "Cousin"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo se dice 'Grandfather' en español?",
                            options: ["La abuela", "El tío", "El abuelo", "El padre"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "La Comida & Las Bebidas",
                    xp: 25,
                    content: {
                        explanation: "El vocabulario de comida y bebida es esencial para la vida diaria y los viajes.",
                        examples: [
                            { text: "La manzana 🍎", translation: "Apple" },
                            { text: "El pan 🍞", translation: "Bread" },
                            { text: "El agua 💧", translation: "Water" },
                            { text: "El café ☕", translation: "Coffee" },
                            { text: "El arroz 🍚", translation: "Rice" },
                            { text: "El pollo 🍗", translation: "Chicken" },
                            { text: "Quisiera un café, por favor", translation: "I would like a coffee, please" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Qué significa 'El pan'?",
                            options: ["Water", "Bread", "Rice", "Milk"],
                            correct: 1
                        },
                        {
                            question: "¿Cómo se dice 'Water' en español?",
                            options: ["El jugo", "La leche", "El agua", "El café"],
                            correct: 2
                        },
                        {
                            question: "¿Qué significa 'La manzana'?",
                            options: ["Orange", "Banana", "Apple", "Grape"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Los Animales",
                    xp: 25,
                    content: {
                        explanation: "Los animales son una parte divertida e importante del vocabulario español.",
                        examples: [
                            { text: "El perro 🐶", translation: "Dog" },
                            { text: "El gato 🐱", translation: "Cat" },
                            { text: "El pájaro 🐦", translation: "Bird" },
                            { text: "El pez 🐟", translation: "Fish" },
                            { text: "El león 🦁", translation: "Lion" },
                            { text: "El elefante 🐘", translation: "Elephant" },
                            { text: "El perro es grande", translation: "The dog is big" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Cat' en español?",
                            options: ["El perro", "El pájaro", "El gato", "El pez"],
                            correct: 2
                        },
                        {
                            question: "¿Qué significa 'El elefante'?",
                            options: ["Lion", "Elephant", "Giraffe", "Tiger"],
                            correct: 1
                        },
                        {
                            question: "¿Cómo se dice 'Bird' en español?",
                            options: ["El pez", "El perro", "El gato", "El pájaro"],
                            correct: 3
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Las Partes del Cuerpo",
                    xp: 25,
                    content: {
                        explanation: "Conocer las partes del cuerpo en español es esencial para conversaciones médicas y cotidianas.",
                        examples: [
                            { text: "La cabeza 🤯", translation: "Head" },
                            { text: "Los ojos 👀", translation: "Eyes" },
                            { text: "La nariz 👃", translation: "Nose" },
                            { text: "La boca 👄", translation: "Mouth" },
                            { text: "La mano ✋", translation: "Hand" },
                            { text: "El pie 🦶", translation: "Foot" },
                            { text: "Me duele la cabeza", translation: "My head hurts" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Head' en español?",
                            options: ["La mano", "El pie", "La cabeza", "El ojo"],
                            correct: 2
                        },
                        {
                            question: "¿Qué significa 'La nariz'?",
                            options: ["Mouth", "Ear", "Nose", "Eye"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo se dice 'Hand' en español?",
                            options: ["El pie", "La mano", "El brazo", "La pierna"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "La Ropa",
                    xp: 25,
                    content: {
                        explanation: "El vocabulario de la ropa es esencial para ir de compras y describir lo que llevas puesto.",
                        examples: [
                            { text: "La camiseta 👕", translation: "T-shirt" },
                            { text: "Los pantalones 👖", translation: "Pants / Trousers" },
                            { text: "Los zapatos 👟", translation: "Shoes" },
                            { text: "La chaqueta 🧥", translation: "Jacket" },
                            { text: "El sombrero 🎩", translation: "Hat" },
                            { text: "El vestido 👗", translation: "Dress" },
                            { text: "Llevo una camisa azul", translation: "I am wearing a blue shirt" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Shoes' en español?",
                            options: ["El sombrero", "La chaqueta", "Los zapatos", "El vestido"],
                            correct: 2
                        },
                        {
                            question: "¿Qué significa 'El sombrero'?",
                            options: ["Dress", "Hat", "Belt", "Sock"],
                            correct: 1
                        },
                        {
                            question: "¿Cómo se dice 'Pants' en español?",
                            options: ["La camisa", "La chaqueta", "El vestido", "Los pantalones"],
                            correct: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "La Gramática",
            icon: "📐",
            lessons: [
                {
                    id: 1,
                    title: "Los Pronombres Personales",
                    xp: 30,
                    content: {
                        explanation: "Los pronombres personales reemplazan los nombres. En español: Yo, Tú, Él, Ella, Nosotros, Vosotros, Ellos, Ellas, Usted, Ustedes.",
                        examples: [
                            { text: "Yo soy estudiante", translation: "I am a student" },
                            { text: "Tú eres mi amigo/a", translation: "You are my friend" },
                            { text: "Él es alto", translation: "He is tall" },
                            { text: "Ella es hermosa", translation: "She is beautiful" },
                            { text: "Nosotros somos felices", translation: "We are happy" },
                            { text: "Ellos son profesores", translation: "They are teachers" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Qué pronombre reemplaza a 'María'?",
                            options: ["Él", "Eso", "Ella", "Ellos"],
                            correct: 2
                        },
                        {
                            question: "¿Qué significa 'Nosotros'?",
                            options: ["I", "You", "They", "We"],
                            correct: 3
                        },
                        {
                            question: "Complete: '___ son mis amigos'",
                            options: ["Él", "Ella", "Ellos", "Yo"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "El Verbo Ser / Estar",
                    xp: 30,
                    content: {
                        explanation: "En español hay dos verbos 'to be': SER (permanente) y ESTAR (temporal). Esta diferencia no existe en inglés ni en francés.",
                        examples: [
                            { text: "Yo soy médico (permanente)", translation: "I am a doctor (permanent)" },
                            { text: "Yo estoy contento (temporal)", translation: "I am happy (temporary)" },
                            { text: "Ella es inteligente (cualidad)", translation: "She is intelligent (quality)" },
                            { text: "Ella está cansada (estado)", translation: "She is tired (state)" },
                            { text: "Nosotros somos de España", translation: "We are from Spain" },
                            { text: "Nosotros estamos en casa", translation: "We are at home" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Complete: 'Yo ___ médico' (permanente)",
                            options: ["estoy", "eres", "soy", "está"],
                            correct: 2
                        },
                        {
                            question: "Complete: 'Ella ___ cansada' (temporal)",
                            options: ["es", "soy", "está", "son"],
                            correct: 2
                        },
                        {
                            question: "¿Cuándo se usa 'ESTAR'?",
                            options: ["Para cualidades permanentes", "Para estados temporales", "Para nacionalidad", "Para profesión"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "El Presente Simple",
                    xp: 30,
                    content: {
                        explanation: "El presente simple se usa para hábitos, rutinas y verdades generales. Los verbos en español se conjugan según el sujeto.",
                        examples: [
                            { text: "Yo como cada día", translation: "I eat every day" },
                            { text: "Ella trabaja en un hospital", translation: "She works at a hospital" },
                            { text: "Ellos juegan fútbol los domingos", translation: "They play football on Sundays" },
                            { text: "Él ve la televisión cada noche", translation: "He watches TV every night" },
                            { text: "Nosotros estudiamos español", translation: "We study Spanish" }
                        ]
                    },
                    quiz: [
                        {
                            question: "Complete: 'Ella ___ al colegio cada día' (ir)",
                            options: ["voy", "va", "vamos", "van"],
                            correct: 1
                        },
                        {
                            question: "¿Qué oración es correcta?",
                            options: ["Él juega fútbol", "Él juego fútbol", "Él jugamos fútbol", "Él juegan fútbol"],
                            correct: 0
                        },
                        {
                            question: "Complete: 'Nosotros ___ español' (estudiar)",
                            options: ["estudia", "estudias", "estudiamos", "estudian"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Los Artículos",
                    xp: 30,
                    content: {
                        explanation: "En español, los artículos concuerdan en género y número. Artículos definidos: el, la, los, las. Artículos indefinidos: un, una, unos, unas.",
                        examples: [
                            { text: "El gato (masculino singular)", translation: "The cat (masculine singular)" },
                            { text: "La casa (femenino singular)", translation: "The house (feminine singular)" },
                            { text: "Los niños (masculino plural)", translation: "The children (masculine plural)" },
                            { text: "Un perro (indefinido masculino)", translation: "A dog (indefinite masculine)" },
                            { text: "Una manzana (indefinido femenino)", translation: "An apple (indefinite feminine)" },
                            { text: "Unos libros (indefinido plural)", translation: "Some books (indefinite plural)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Qué artículo va con 'casa' (femenino)?",
                            options: ["El", "Un", "La", "Los"],
                            correct: 2
                        },
                        {
                            question: "Complete: 'Tengo ___ perro' (indefinido masculino)",
                            options: ["una", "el", "un", "la"],
                            correct: 2
                        },
                        {
                            question: "¿Qué artículo se usa para el plural indefinido masculino?",
                            options: ["El", "La", "Un", "Unos"],
                            correct: 3
                        }
                    ]
                },
                {
                    id: 5,
                    title: "El Plural",
                    xp: 30,
                    content: {
                        explanation: "Para formar el plural en español: palabras que terminan en vocal añaden -s, palabras que terminan en consonante añaden -es.",
                        examples: [
                            { text: "Gato → Gatos", translation: "Cat → Cats" },
                            { text: "Ciudad → Ciudades", translation: "City → Cities" },
                            { text: "Pez → Peces", translation: "Fish → Fish (plural)" },
                            { text: "Lápiz → Lápices", translation: "Pencil → Pencils" },
                            { text: "Luz → Luces", translation: "Light → Lights" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cuál es el plural de 'Ciudad'?",
                            options: ["Ciudads", "Ciudades", "Ciudadies", "Ciudad"],
                            correct: 1
                        },
                        {
                            question: "¿Cuál es el plural de 'Pez'?",
                            options: ["Pezs", "Pezes", "Peces", "Pez"],
                            correct: 2
                        },
                        {
                            question: "¿Cuál es el plural de 'Lápiz'?",
                            options: ["Lápizs", "Lápizes", "Lápices", "Lápiz"],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "La Conversación",
            icon: "💬",
            lessons: [
                {
                    id: 1,
                    title: "Presentarse",
                    xp: 35,
                    content: {
                        explanation: "Presentarse es una de las primeras cosas que haces al conocer a alguien nuevo.",
                        examples: [
                            { text: "Me llamo Juan", translation: "My name is Juan" },
                            { text: "Tengo 25 años", translation: "I am 25 years old" },
                            { text: "Soy de España", translation: "I am from Spain" },
                            { text: "Soy estudiante", translation: "I am a student" },
                            { text: "Mucho gusto", translation: "Nice to meet you" },
                            { text: "¿Cómo te llamas?", translation: "What is your name?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'My name is' en español?",
                            options: ["Soy de", "Me llamo", "Tengo", "Me gusta"],
                            correct: 1
                        },
                        {
                            question: "¿Qué significa 'Mucho gusto'?",
                            options: ["Goodbye", "Good night", "Nice to meet you", "Thank you"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo preguntas el nombre de alguien?",
                            options: ["¿De dónde eres?", "¿Cuántos años tienes?", "¿Cómo te llamas?", "¿Qué haces?"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Pedir Direcciones",
                    xp: 35,
                    content: {
                        explanation: "Saber pedir y dar direcciones es esencial cuando viajas o vives en un país hispanohablante.",
                        examples: [
                            { text: "¿Dónde está el banco?", translation: "Where is the bank?" },
                            { text: "Gire a la izquierda / derecha", translation: "Turn left / right" },
                            { text: "Siga todo recto", translation: "Go straight ahead" },
                            { text: "Está al lado del parque", translation: "It is next to the park" },
                            { text: "¿A qué distancia está?", translation: "How far is it?" },
                            { text: "Disculpe, ¿puede ayudarme?", translation: "Excuse me, can you help me?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo se dice 'Turn left' en español?",
                            options: ["Siga todo recto", "Gire a la derecha", "Gire a la izquierda", "Pare aquí"],
                            correct: 2
                        },
                        {
                            question: "¿Qué significa 'Siga todo recto'?",
                            options: ["Turn right", "Go back", "Go straight ahead", "Stop here"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo preguntas dónde está algo?",
                            options: ["¿Qué es...?", "¿Dónde está...?", "¿Quién es...?", "¿Cómo es...?"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "En el Restaurante",
                    xp: 35,
                    content: {
                        explanation: "Aprende a pedir comida, solicitar el menú y pagar la cuenta en un restaurante en español.",
                        examples: [
                            { text: "¿Puedo ver el menú, por favor?", translation: "Can I see the menu, please?" },
                            { text: "Quisiera un bistec", translation: "I would like a steak" },
                            { text: "La cuenta, por favor", translation: "The bill, please" },
                            { text: "¿Está libre esta mesa?", translation: "Is this table free?" },
                            { text: "Soy vegetariano/a", translation: "I am vegetarian" },
                            { text: "¡Estuvo delicioso!", translation: "It was delicious!" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo pides la cuenta?",
                            options: ["¿El menú, por favor?", "La cuenta, por favor", "¿Está libre?", "Soy vegetariano"],
                            correct: 1
                        },
                        {
                            question: "¿Qué significa 'Quisiera un bistec'?",
                            options: ["I like steak", "I would like a steak", "I eat steak", "I cook steak"],
                            correct: 1
                        },
                        {
                            question: "¿Cómo se dice 'It was delicious' en español?",
                            options: ["Estuvo terrible", "Estuvo bien", "¡Estuvo delicioso!", "Estuvo caro"],
                            correct: 2
                        }
                    ]
                },
                {
                    id: 4,
                    title: "De Compras",
                    xp: 35,
                    content: {
                        explanation: "El vocabulario de compras te ayuda a comprar cosas, preguntar precios y comunicarte en tiendas.",
                        examples: [
                            { text: "¿Cuánto cuesta esto?", translation: "How much does this cost?" },
                            { text: "Cuesta 20 euros", translation: "It costs 20 euros" },
                            { text: "¿Tiene esto en talla M?", translation: "Do you have this in size M?" },
                            { text: "Me llevo este", translation: "I will take this one" },
                            { text: "¿Puedo pagar con tarjeta?", translation: "Can I pay by card?" },
                            { text: "¿Tiene algún descuento?", translation: "Do you have a discount?" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo preguntas el precio de algo?",
                            options: ["¿Dónde está?", "¿Cuánto cuesta esto?", "¿Tiene esto?", "¿Puedo pagar?"],
                            correct: 1
                        },
                        {
                            question: "¿Qué significa 'Me llevo este'?",
                            options: ["Solo estoy mirando", "No quiero esto", "Me llevo este", "Es muy caro"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo pides pagar con tarjeta?",
                            options: ["¿Puedo pagar en efectivo?", "¿Puedo pagar con tarjeta?", "¿Es gratis?", "¿Tiene cambio?"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Hacer Planes",
                    xp: 35,
                    content: {
                        explanation: "Aprende a hacer planes, sugerir actividades y organizar encuentros con amigos en español.",
                        examples: [
                            { text: "¿Quieres ir al cine?", translation: "Would you like to go to the cinema?" },
                            { text: "¡Claro, genial!", translation: "Sure, that sounds great!" },
                            { text: "Estoy libre el sábado", translation: "I am free on Saturday" },
                            { text: "¿A qué hora quedamos?", translation: "What time shall we meet?" },
                            { text: "Quedamos a las 7", translation: "Let's meet at 7" },
                            { text: "Lo siento, estoy ocupado/a", translation: "Sorry, I am busy" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo sugieres ir al cine?",
                            options: ["Me gusta el cine", "¿Quieres ir al cine?", "El cine está lejos", "Fui al cine"],
                            correct: 1
                        },
                        {
                            question: "¿Qué significa 'Estoy libre el sábado'?",
                            options: ["I work on Saturday", "I am free on Saturday", "I am busy on Saturday", "I like Saturday"],
                            correct: 1
                        },
                        {
                            question: "¿Cómo dices 'Sorry, I am busy' en español?",
                            options: ["¡Claro, genial!", "Estoy libre", "Lo siento, estoy ocupado/a", "Quedamos"],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "La Pronunciación",
            icon: "🎙️",
            lessons: [
                {
                    id: 1,
                    title: "Los Sonidos de las Vocales",
                    xp: 40,
                    content: {
                        explanation: "El español tiene 5 sonidos vocálicos puros y claros. Cada vocal siempre se pronuncia de la misma manera, a diferencia del inglés.",
                        examples: [
                            { text: "A → Casa 🏠", translation: "A always sounds the same" },
                            { text: "E → Mesa 🪑", translation: "E as in 'bed'" },
                            { text: "I → Isla 🏝️", translation: "I as in 'see'" },
                            { text: "O → Oso 🐻", translation: "O as in 'go'" },
                            { text: "U → Uva 🍇", translation: "U as in 'moon'" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cuántos sonidos vocálicos tiene el español?",
                            options: ["3", "4", "5", "7"],
                            correct: 2
                        },
                        {
                            question: "¿Las vocales españolas cambian de sonido como en inglés?",
                            options: ["Sí, siempre", "A veces", "No, siempre suenan igual", "Solo las consonantes"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo suena la 'U' en español?",
                            options: ["Como 'you'", "Como 'moon'", "Como 'up'", "Es silenciosa"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Los Sonidos de las Consonantes",
                    xp: 40,
                    content: {
                        explanation: "Algunas consonantes españolas tienen sonidos únicos. La RR (doble R) y la Ñ son las más características.",
                        examples: [
                            { text: "RR → Perro 🐶 (R vibrante)", translation: "RR → Dog (rolled R)" },
                            { text: "Ñ → Niño 👦", translation: "Ñ → Child (like 'ny')" },
                            { text: "LL → Calle 🛣️ (como 'y')", translation: "LL → Street (like 'y')" },
                            { text: "J → Jugar ⚽ (como 'h' fuerte)", translation: "J → Play (like strong 'h')" },
                            { text: "H → Hola (siempre muda)", translation: "H → Hello (always silent)" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿La H en español es...?",
                            options: ["Fuerte", "Normal", "Siempre muda", "Como en inglés"],
                            correct: 2
                        },
                        {
                            question: "¿Cómo se pronuncia la 'Ñ'?",
                            options: ["Como N", "Como NY", "Como NG", "Es silenciosa"],
                            correct: 1
                        },
                        {
                            question: "¿Qué sonido hace la 'RR'?",
                            options: ["R suave", "R vibrante", "Como en inglés", "Es silenciosa"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Las Letras Silenciosas",
                    xp: 40,
                    content: {
                        explanation: "En español hay pocas letras silenciosas comparado con otros idiomas. La principal es la H, que nunca se pronuncia.",
                        examples: [
                            { text: "Hola → /ola/ (H muda)", translation: "Hello → H is silent" },
                            { text: "Hacer → /acer/ (H muda)", translation: "To do → H is silent" },
                            { text: "Huevo → /uevo/ (H muda)", translation: "Egg → H is silent" },
                            { text: "GUE → Guerra /gera/ (U muda)", translation: "War → U is silent after G" },
                            { text: "QUE → Queso /keso/ (U muda)", translation: "Cheese → U is silent after Q" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Qué letra siempre es muda en español?",
                            options: ["B", "C", "H", "S"],
                            correct: 2
                        },
                        {
                            question: "¿La U es muda en qué combinación?",
                            options: ["UA", "UE después de G o Q", "UI", "UO"],
                            correct: 1
                        },
                        {
                            question: "¿Cómo se pronuncia 'Hola'?",
                            options: ["Jola", "Ola", "Hola con H aspirada", "Gola"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 4,
                    title: "El Acento Tónico",
                    xp: 40,
                    content: {
                        explanation: "En español, el acento tónico sigue reglas claras. Las palabras que terminan en vocal, N o S llevan el acento en la penúltima sílaba.",
                        examples: [
                            { text: "CA-sa (acento en CA)", translation: "House → stress on CA" },
                            { text: "co-MER (acento en MER)", translation: "To eat → stress on MER" },
                            { text: "te-LÉ-fo-no (acento escrito)", translation: "Telephone → written accent" },
                            { text: "mú-SI-ca (acento escrito)", translation: "Music → written accent" },
                            { text: "co-ra-ZÓN (acento escrito)", translation: "Heart → written accent" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Dónde está el acento en 'Casa'?",
                            options: ["CA", "SA", "Ambas", "Ninguna"],
                            correct: 0
                        },
                        {
                            question: "¿Qué indica un acento escrito (´)?",
                            options: ["La sílaba es silenciosa", "La sílaba está acentuada", "La letra es muda", "Nada"],
                            correct: 1
                        },
                        {
                            question: "¿Dónde está el acento en 'Comer'?",
                            options: ["CO", "MER", "Ambas", "Ninguna"],
                            correct: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Errores Comunes",
                    xp: 40,
                    content: {
                        explanation: "Los anglophones y francophones cometen errores específicos al pronunciar español. Aquí están los más comunes.",
                        examples: [
                            { text: "La H: 'Hotel' se dice /otel/", translation: "H is always silent in Spanish" },
                            { text: "La V: Suena como B en español", translation: "V sounds like B in Spanish" },
                            { text: "La Z: Suena como 'th' en España", translation: "Z sounds like 'th' in Spain" },
                            { text: "La J: Suena como 'h' fuerte", translation: "J sounds like a strong 'h'" },
                            { text: "Las vocales: Siempre puras, nunca diptongos", translation: "Vowels are always pure, never diphthongs" }
                        ]
                    },
                    quiz: [
                        {
                            question: "¿Cómo suena la 'V' en español?",
                            options: ["Como V en inglés", "Como B", "Como F", "Es silenciosa"],
                            correct: 1
                        },
                        {
                            question: "¿La H en español es...?",
                            options: ["Aspirada como en inglés", "Siempre muda", "Como J", "Como G"],
                            correct: 1
                        },
                        {
                            question: "¿Cómo son las vocales españolas comparadas con las inglesas?",
                            options: ["Más largas", "Iguales", "Puras y simples", "Más complicadas"],
                            correct: 2
                        }
                    ]
                }
            ]
        }
    ]
};
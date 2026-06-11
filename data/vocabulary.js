const vocabularyData = {
    english: {
        categories: [
            {
                id: 'basics',
                name: 'Basics',
                icon: '🔤',
                words: [
                    { word: 'Hello', translation: 'Bonjour', example: 'Hello, how are you?', pronunciation: 'Hello' },
                    { word: 'Goodbye', translation: 'Au revoir', example: 'Goodbye, see you tomorrow!', pronunciation: 'Goodbye' },
                    { word: 'Please', translation: 'S\'il vous plaît', example: 'Can I have water, please?', pronunciation: 'Please' },
                    { word: 'Thank you', translation: 'Merci', example: 'Thank you very much!', pronunciation: 'Thank you' },
                    { word: 'Yes', translation: 'Oui', example: 'Yes, I understand.', pronunciation: 'Yes' },
                    { word: 'No', translation: 'Non', example: 'No, thank you.', pronunciation: 'No' },
                    { word: 'Sorry', translation: 'Désolé', example: 'Sorry, I am late.', pronunciation: 'Sorry' },
                    { word: 'Excuse me', translation: 'Excusez-moi', example: 'Excuse me, where is the station?', pronunciation: 'Excuse me' },
                    { word: 'Good morning', translation: 'Bonjour', example: 'Good morning! Did you sleep well?', pronunciation: 'Good morning' },
                    { word: 'Good night', translation: 'Bonne nuit', example: 'Good night, sweet dreams!', pronunciation: 'Good night' }
                ]
            },
            {
                id: 'family',
                name: 'Family',
                icon: '👨‍👩‍👧',
                words: [
                    { word: 'Mother', translation: 'Mère', example: 'My mother is a doctor.', pronunciation: 'Mother' },
                    { word: 'Father', translation: 'Père', example: 'My father works in Paris.', pronunciation: 'Father' },
                    { word: 'Brother', translation: 'Frère', example: 'I have two brothers.', pronunciation: 'Brother' },
                    { word: 'Sister', translation: 'Sœur', example: 'My sister is very kind.', pronunciation: 'Sister' },
                    { word: 'Grandmother', translation: 'Grand-mère', example: 'My grandmother makes great food.', pronunciation: 'Grandmother' },
                    { word: 'Grandfather', translation: 'Grand-père', example: 'My grandfather is 80 years old.', pronunciation: 'Grandfather' },
                    { word: 'Uncle', translation: 'Oncle', example: 'My uncle lives in London.', pronunciation: 'Uncle' },
                    { word: 'Aunt', translation: 'Tante', example: 'My aunt is a teacher.', pronunciation: 'Aunt' },
                    { word: 'Cousin', translation: 'Cousin', example: 'I visited my cousin yesterday.', pronunciation: 'Cousin' },
                    { word: 'Son', translation: 'Fils', example: 'Their son is very smart.', pronunciation: 'Son' }
                ]
            },
            {
                id: 'food',
                name: 'Food',
                icon: '🍎',
                words: [
                    { word: 'Apple', translation: 'Pomme', example: 'I eat an apple every day.', pronunciation: 'Apple' },
                    { word: 'Bread', translation: 'Pain', example: 'The bread is fresh.', pronunciation: 'Bread' },
                    { word: 'Water', translation: 'Eau', example: 'I drink water every morning.', pronunciation: 'Water' },
                    { word: 'Chicken', translation: 'Poulet', example: 'I love grilled chicken.', pronunciation: 'Chicken' },
                    { word: 'Rice', translation: 'Riz', example: 'Rice is a staple food.', pronunciation: 'Rice' },
                    { word: 'Coffee', translation: 'Café', example: 'I drink coffee every morning.', pronunciation: 'Coffee' },
                    { word: 'Milk', translation: 'Lait', example: 'Milk is good for bones.', pronunciation: 'Milk' },
                    { word: 'Egg', translation: 'Œuf', example: 'I eat two eggs for breakfast.', pronunciation: 'Egg' },
                    { word: 'Fish', translation: 'Poisson', example: 'I eat fish on Fridays.', pronunciation: 'Fish' },
                    { word: 'Salad', translation: 'Salade', example: 'I eat a salad for lunch.', pronunciation: 'Salad' }
                ]
            },
            {
                id: 'animals',
                name: 'Animals',
                icon: '🐶',
                words: [
                    { word: 'Dog', translation: 'Chien', example: 'My dog loves to run.', pronunciation: 'Dog' },
                    { word: 'Cat', translation: 'Chat', example: 'The cat is sleeping.', pronunciation: 'Cat' },
                    { word: 'Bird', translation: 'Oiseau', example: 'The bird sings every morning.', pronunciation: 'Bird' },
                    { word: 'Lion', translation: 'Lion', example: 'The lion is the king of animals.', pronunciation: 'Lion' },
                    { word: 'Elephant', translation: 'Éléphant', example: 'Elephants have great memory.', pronunciation: 'Elephant' },
                    { word: 'Fish', translation: 'Poisson', example: 'The fish swims fast.', pronunciation: 'Fish' },
                    { word: 'Horse', translation: 'Cheval', example: 'The horse runs very fast.', pronunciation: 'Horse' },
                    { word: 'Rabbit', translation: 'Lapin', example: 'The rabbit is very cute.', pronunciation: 'Rabbit' },
                    { word: 'Bear', translation: 'Ours', example: 'The bear sleeps in winter.', pronunciation: 'Bear' },
                    { word: 'Snake', translation: 'Serpent', example: 'The snake is dangerous.', pronunciation: 'Snake' }
                ]
            },
            {
                id: 'body',
                name: 'Body',
                icon: '💪',
                words: [
                    { word: 'Head', translation: 'Tête', example: 'My head hurts.', pronunciation: 'Head' },
                    { word: 'Eyes', translation: 'Yeux', example: 'Her eyes are blue.', pronunciation: 'Eyes' },
                    { word: 'Nose', translation: 'Nez', example: 'My nose is cold.', pronunciation: 'Nose' },
                    { word: 'Mouth', translation: 'Bouche', example: 'Open your mouth please.', pronunciation: 'Mouth' },
                    { word: 'Hand', translation: 'Main', example: 'Wash your hands.', pronunciation: 'Hand' },
                    { word: 'Foot', translation: 'Pied', example: 'My foot hurts.', pronunciation: 'Foot' },
                    { word: 'Arm', translation: 'Bras', example: 'He broke his arm.', pronunciation: 'Arm' },
                    { word: 'Leg', translation: 'Jambe', example: 'She has long legs.', pronunciation: 'Leg' },
                    { word: 'Back', translation: 'Dos', example: 'My back is sore.', pronunciation: 'Back' },
                    { word: 'Heart', translation: 'Cœur', example: 'Your heart beats fast.', pronunciation: 'Heart' }
                ]
            },
            {
                id: 'clothes',
                name: 'Clothes',
                icon: '👕',
                words: [
                    { word: 'Shirt', translation: 'Chemise', example: 'He wears a blue shirt.', pronunciation: 'Shirt' },
                    { word: 'Pants', translation: 'Pantalon', example: 'These pants are too big.', pronunciation: 'Pants' },
                    { word: 'Shoes', translation: 'Chaussures', example: 'I bought new shoes.', pronunciation: 'Shoes' },
                    { word: 'Jacket', translation: 'Veste', example: 'Wear a jacket, it is cold.', pronunciation: 'Jacket' },
                    { word: 'Hat', translation: 'Chapeau', example: 'She wears a red hat.', pronunciation: 'Hat' },
                    { word: 'Dress', translation: 'Robe', example: 'She wore a beautiful dress.', pronunciation: 'Dress' },
                    { word: 'Socks', translation: 'Chaussettes', example: 'I need clean socks.', pronunciation: 'Socks' },
                    { word: 'Coat', translation: 'Manteau', example: 'Put on your coat.', pronunciation: 'Coat' },
                    { word: 'Scarf', translation: 'Écharpe', example: 'She has a wool scarf.', pronunciation: 'Scarf' },
                    { word: 'Gloves', translation: 'Gants', example: 'My gloves are warm.', pronunciation: 'Gloves' }
                ]
            },
            {
                id: 'travel',
                name: 'Travel',
                icon: '✈️',
                words: [
                    { word: 'Airport', translation: 'Aéroport', example: 'We arrived at the airport early.', pronunciation: 'Airport' },
                    { word: 'Hotel', translation: 'Hôtel', example: 'The hotel is very comfortable.', pronunciation: 'Hotel' },
                    { word: 'Passport', translation: 'Passeport', example: 'Don\'t forget your passport.', pronunciation: 'Passport' },
                    { word: 'Ticket', translation: 'Billet', example: 'I bought a plane ticket.', pronunciation: 'Ticket' },
                    { word: 'Luggage', translation: 'Bagages', example: 'My luggage is heavy.', pronunciation: 'Luggage' },
                    { word: 'Train', translation: 'Train', example: 'The train is on time.', pronunciation: 'Train' },
                    { word: 'Map', translation: 'Carte', example: 'I need a map of the city.', pronunciation: 'Map' },
                    { word: 'Tourist', translation: 'Touriste', example: 'Many tourists visit Paris.', pronunciation: 'Tourist' },
                    { word: 'Beach', translation: 'Plage', example: 'The beach is beautiful.', pronunciation: 'Beach' },
                    { word: 'Museum', translation: 'Musée', example: 'We visited the museum.', pronunciation: 'Museum' }
                ]
            },
            {
                id: 'business',
                name: 'Business',
                icon: '💼',
                words: [
                    { word: 'Meeting', translation: 'Réunion', example: 'We have a meeting at 10am.', pronunciation: 'Meeting' },
                    { word: 'Contract', translation: 'Contrat', example: 'Sign the contract please.', pronunciation: 'Contract' },
                    { word: 'Salary', translation: 'Salaire', example: 'The salary is negotiable.', pronunciation: 'Salary' },
                    { word: 'Client', translation: 'Client', example: 'The client is satisfied.', pronunciation: 'Client' },
                    { word: 'Invoice', translation: 'Facture', example: 'Send the invoice by email.', pronunciation: 'Invoice' },
                    { word: 'Budget', translation: 'Budget', example: 'We exceeded the budget.', pronunciation: 'Budget' },
                    { word: 'Deadline', translation: 'Délai', example: 'The deadline is Friday.', pronunciation: 'Deadline' },
                    { word: 'Manager', translation: 'Directeur', example: 'My manager is very strict.', pronunciation: 'Manager' },
                    { word: 'Report', translation: 'Rapport', example: 'Submit the report tomorrow.', pronunciation: 'Report' },
                    { word: 'Profit', translation: 'Bénéfice', example: 'The company made a profit.', pronunciation: 'Profit' }
                ]
            },
            {
                id: 'conversation',
                name: 'Conversation',
                icon: '💬',
                words: [
                    { word: 'How are you?', translation: 'Comment vas-tu?', example: 'How are you today?', pronunciation: 'How are you' },
                    { word: 'What is your name?', translation: 'Comment t\'appelles-tu?', example: 'What is your name, please?', pronunciation: 'What is your name' },
                    { word: 'Where are you from?', translation: 'D\'où viens-tu?', example: 'Where are you from originally?', pronunciation: 'Where are you from' },
                    { word: 'Nice to meet you', translation: 'Enchanté', example: 'Nice to meet you, John!', pronunciation: 'Nice to meet you' },
                    { word: 'I don\'t understand', translation: 'Je ne comprends pas', example: 'Sorry, I don\'t understand.', pronunciation: 'I don\'t understand' },
                    { word: 'Can you repeat?', translation: 'Pouvez-vous répéter?', example: 'Can you repeat that slowly?', pronunciation: 'Can you repeat' },
                    { word: 'How much?', translation: 'Combien?', example: 'How much does it cost?', pronunciation: 'How much' },
                    { word: 'Where is...?', translation: 'Où est...?', example: 'Where is the station?', pronunciation: 'Where is' },
                    { word: 'I need help', translation: 'J\'ai besoin d\'aide', example: 'Excuse me, I need help.', pronunciation: 'I need help' },
                    { word: 'See you later', translation: 'À plus tard', example: 'See you later, have a good day!', pronunciation: 'See you later' }
                ]
            },
            {
                id: 'technology',
                name: 'Technology',
                icon: '💻',
                words: [
                    { word: 'Computer', translation: 'Ordinateur', example: 'My computer is fast.', pronunciation: 'Computer' },
                    { word: 'Internet', translation: 'Internet', example: 'The internet is slow today.', pronunciation: 'Internet' },
                    { word: 'Password', translation: 'Mot de passe', example: 'Change your password regularly.', pronunciation: 'Password' },
                    { word: 'Download', translation: 'Télécharger', example: 'Download the app now.', pronunciation: 'Download' },
                    { word: 'Software', translation: 'Logiciel', example: 'This software is free.', pronunciation: 'Software' },
                    { word: 'Database', translation: 'Base de données', example: 'The database is secure.', pronunciation: 'Database' },
                    { word: 'Smartphone', translation: 'Téléphone intelligent', example: 'I bought a new smartphone.', pronunciation: 'Smartphone' },
                    { word: 'Email', translation: 'Courriel', example: 'Send me an email.', pronunciation: 'Email' },
                    { word: 'Artificial Intelligence', translation: 'Intelligence artificielle', example: 'AI is changing the world.', pronunciation: 'Artificial Intelligence' },
                    { word: 'Application', translation: 'Application', example: 'This application is useful.', pronunciation: 'Application' }
                ]
            }
        ]
    },
    french: {
        categories: [
            {
                id: 'basics',
                name: 'Les Bases',
                icon: '🔤',
                words: [
                    { word: 'Bonjour', translation: 'Hello', example: 'Bonjour, comment allez-vous?', pronunciation: 'Bonjour' },
                    { word: 'Au revoir', translation: 'Goodbye', example: 'Au revoir, à demain!', pronunciation: 'Au revoir' },
                    { word: 'S\'il vous plaît', translation: 'Please', example: 'Un café, s\'il vous plaît.', pronunciation: 'S\'il vous plaît' },
                    { word: 'Merci', translation: 'Thank you', example: 'Merci beaucoup!', pronunciation: 'Merci' },
                    { word: 'Oui', translation: 'Yes', example: 'Oui, je comprends.', pronunciation: 'Oui' },
                    { word: 'Non', translation: 'No', example: 'Non, merci.', pronunciation: 'Non' },
                    { word: 'Désolé', translation: 'Sorry', example: 'Désolé, je suis en retard.', pronunciation: 'Désolé' },
                    { word: 'Excusez-moi', translation: 'Excuse me', example: 'Excusez-moi, où est la gare?', pronunciation: 'Excusez-moi' },
                    { word: 'Bonne nuit', translation: 'Good night', example: 'Bonne nuit, dors bien!', pronunciation: 'Bonne nuit' },
                    { word: 'Bonsoir', translation: 'Good evening', example: 'Bonsoir madame!', pronunciation: 'Bonsoir' }
                ]
            },
            {
                id: 'family',
                name: 'La Famille',
                icon: '👨‍👩‍👧',
                words: [
                    { word: 'La mère', translation: 'Mother', example: 'Ma mère est médecin.', pronunciation: 'La mère' },
                    { word: 'Le père', translation: 'Father', example: 'Mon père travaille à Paris.', pronunciation: 'Le père' },
                    { word: 'Le frère', translation: 'Brother', example: 'J\'ai deux frères.', pronunciation: 'Le frère' },
                    { word: 'La sœur', translation: 'Sister', example: 'Ma sœur est très gentille.', pronunciation: 'La sœur' },
                    { word: 'La grand-mère', translation: 'Grandmother', example: 'Ma grand-mère cuisine très bien.', pronunciation: 'La grand-mère' },
                    { word: 'Le grand-père', translation: 'Grandfather', example: 'Mon grand-père a 80 ans.', pronunciation: 'Le grand-père' },
                    { word: 'L\'oncle', translation: 'Uncle', example: 'Mon oncle habite à Londres.', pronunciation: 'L\'oncle' },
                    { word: 'La tante', translation: 'Aunt', example: 'Ma tante est professeure.', pronunciation: 'La tante' },
                    { word: 'Le cousin', translation: 'Cousin', example: 'J\'ai visité mon cousin hier.', pronunciation: 'Le cousin' },
                    { word: 'Le fils', translation: 'Son', example: 'Leur fils est très intelligent.', pronunciation: 'Le fils' }
                ]
            },
            {
                id: 'food',
                name: 'La Nourriture',
                icon: '🍎',
                words: [
                    { word: 'La pomme', translation: 'Apple', example: 'Je mange une pomme chaque jour.', pronunciation: 'La pomme' },
                    { word: 'Le pain', translation: 'Bread', example: 'Le pain est frais.', pronunciation: 'Le pain' },
                    { word: 'L\'eau', translation: 'Water', example: 'Je bois de l\'eau chaque matin.', pronunciation: 'L\'eau' },
                    { word: 'Le poulet', translation: 'Chicken', example: 'J\'adore le poulet grillé.', pronunciation: 'Le poulet' },
                    { word: 'Le riz', translation: 'Rice', example: 'Le riz est un aliment de base.', pronunciation: 'Le riz' },
                    { word: 'Le café', translation: 'Coffee', example: 'Je bois du café chaque matin.', pronunciation: 'Le café' },
                    { word: 'Le lait', translation: 'Milk', example: 'Le lait est bon pour les os.', pronunciation: 'Le lait' },
                    { word: 'L\'œuf', translation: 'Egg', example: 'Je mange deux œufs au petit-déjeuner.', pronunciation: 'L\'œuf' },
                    { word: 'Le poisson', translation: 'Fish', example: 'Je mange du poisson le vendredi.', pronunciation: 'Le poisson' },
                    { word: 'La salade', translation: 'Salad', example: 'Je mange une salade au déjeuner.', pronunciation: 'La salade' }
                ]
            },
            {
                id: 'animals',
                name: 'Les Animaux',
                icon: '🐶',
                words: [
                    { word: 'Le chien', translation: 'Dog', example: 'Mon chien adore courir.', pronunciation: 'Le chien' },
                    { word: 'Le chat', translation: 'Cat', example: 'Le chat dort.', pronunciation: 'Le chat' },
                    { word: 'L\'oiseau', translation: 'Bird', example: 'L\'oiseau chante chaque matin.', pronunciation: 'L\'oiseau' },
                    { word: 'Le lion', translation: 'Lion', example: 'Le lion est le roi des animaux.', pronunciation: 'Le lion' },
                    { word: 'L\'éléphant', translation: 'Elephant', example: 'Les éléphants ont une bonne mémoire.', pronunciation: 'L\'éléphant' },
                    { word: 'Le cheval', translation: 'Horse', example: 'Le cheval court très vite.', pronunciation: 'Le cheval' },
                    { word: 'Le lapin', translation: 'Rabbit', example: 'Le lapin est très mignon.', pronunciation: 'Le lapin' },
                    { word: 'L\'ours', translation: 'Bear', example: 'L\'ours dort en hiver.', pronunciation: 'L\'ours' },
                    { word: 'Le serpent', translation: 'Snake', example: 'Le serpent est dangereux.', pronunciation: 'Le serpent' },
                    { word: 'Le tigre', translation: 'Tiger', example: 'Le tigre est très rapide.', pronunciation: 'Le tigre' }
                ]
            },
            {
                id: 'body',
                name: 'Le Corps',
                icon: '💪',
                words: [
                    { word: 'La tête', translation: 'Head', example: 'J\'ai mal à la tête.', pronunciation: 'La tête' },
                    { word: 'Les yeux', translation: 'Eyes', example: 'Ses yeux sont bleus.', pronunciation: 'Les yeux' },
                    { word: 'Le nez', translation: 'Nose', example: 'Mon nez est froid.', pronunciation: 'Le nez' },
                    { word: 'La bouche', translation: 'Mouth', example: 'Ouvre la bouche s\'il te plaît.', pronunciation: 'La bouche' },
                    { word: 'La main', translation: 'Hand', example: 'Lave-toi les mains.', pronunciation: 'La main' },
                    { word: 'Le pied', translation: 'Foot', example: 'J\'ai mal au pied.', pronunciation: 'Le pied' },
                    { word: 'Le bras', translation: 'Arm', example: 'Il s\'est cassé le bras.', pronunciation: 'Le bras' },
                    { word: 'La jambe', translation: 'Leg', example: 'Elle a de longues jambes.', pronunciation: 'La jambe' },
                    { word: 'Le dos', translation: 'Back', example: 'J\'ai mal au dos.', pronunciation: 'Le dos' },
                    { word: 'Le cœur', translation: 'Heart', example: 'Ton cœur bat vite.', pronunciation: 'Le cœur' }
                ]
            },
            {
                id: 'clothes',
                name: 'Les Vêtements',
                icon: '👕',
                words: [
                    { word: 'La chemise', translation: 'Shirt', example: 'Il porte une chemise bleue.', pronunciation: 'La chemise' },
                    { word: 'Le pantalon', translation: 'Pants', example: 'Ce pantalon est trop grand.', pronunciation: 'Le pantalon' },
                    { word: 'Les chaussures', translation: 'Shoes', example: 'J\'ai acheté de nouvelles chaussures.', pronunciation: 'Les chaussures' },
                    { word: 'La veste', translation: 'Jacket', example: 'Mets ta veste, il fait froid.', pronunciation: 'La veste' },
                    { word: 'Le chapeau', translation: 'Hat', example: 'Elle porte un chapeau rouge.', pronunciation: 'Le chapeau' },
                    { word: 'La robe', translation: 'Dress', example: 'Elle portait une belle robe.', pronunciation: 'La robe' },
                    { word: 'Les chaussettes', translation: 'Socks', example: 'J\'ai besoin de chaussettes propres.', pronunciation: 'Les chaussettes' },
                    { word: 'Le manteau', translation: 'Coat', example: 'Mets ton manteau.', pronunciation: 'Le manteau' },
                    { word: 'L\'écharpe', translation: 'Scarf', example: 'Elle a une écharpe en laine.', pronunciation: 'L\'écharpe' },
                    { word: 'Les gants', translation: 'Gloves', example: 'Mes gants sont chauds.', pronunciation: 'Les gants' }
                ]
            },
            {
                id: 'travel',
                name: 'Le Voyage',
                icon: '✈️',
                words: [
                    { word: 'L\'aéroport', translation: 'Airport', example: 'Nous sommes arrivés tôt à l\'aéroport.', pronunciation: 'L\'aéroport' },
                    { word: 'L\'hôtel', translation: 'Hotel', example: 'L\'hôtel est très confortable.', pronunciation: 'L\'hôtel' },
                    { word: 'Le passeport', translation: 'Passport', example: 'N\'oublie pas ton passeport.', pronunciation: 'Le passeport' },
                    { word: 'Le billet', translation: 'Ticket', example: 'J\'ai acheté un billet d\'avion.', pronunciation: 'Le billet' },
                    { word: 'Les bagages', translation: 'Luggage', example: 'Mes bagages sont lourds.', pronunciation: 'Les bagages' },
                    { word: 'Le train', translation: 'Train', example: 'Le train est à l\'heure.', pronunciation: 'Le train' },
                    { word: 'La carte', translation: 'Map', example: 'J\'ai besoin d\'une carte de la ville.', pronunciation: 'La carte' },
                    { word: 'Le touriste', translation: 'Tourist', example: 'Beaucoup de touristes visitent Paris.', pronunciation: 'Le touriste' },
                    { word: 'La plage', translation: 'Beach', example: 'La plage est magnifique.', pronunciation: 'La plage' },
                    { word: 'Le musée', translation: 'Museum', example: 'Nous avons visité le musée.', pronunciation: 'Le musée' }
                ]
            },
            {
                id: 'business',
                name: 'Le Business',
                icon: '💼',
                words: [
                    { word: 'La réunion', translation: 'Meeting', example: 'Nous avons une réunion à 10h.', pronunciation: 'La réunion' },
                    { word: 'Le contrat', translation: 'Contract', example: 'Signez le contrat s\'il vous plaît.', pronunciation: 'Le contrat' },
                    { word: 'Le salaire', translation: 'Salary', example: 'Le salaire est négociable.', pronunciation: 'Le salaire' },
                    { word: 'Le client', translation: 'Client', example: 'Le client est satisfait.', pronunciation: 'Le client' },
                    { word: 'La facture', translation: 'Invoice', example: 'Envoyez la facture par email.', pronunciation: 'La facture' },
                    { word: 'Le budget', translation: 'Budget', example: 'Nous avons dépassé le budget.', pronunciation: 'Le budget' },
                    { word: 'Le délai', translation: 'Deadline', example: 'Le délai est vendredi.', pronunciation: 'Le délai' },
                    { word: 'Le directeur', translation: 'Manager', example: 'Mon directeur est très strict.', pronunciation: 'Le directeur' },
                    { word: 'Le rapport', translation: 'Report', example: 'Soumettez le rapport demain.', pronunciation: 'Le rapport' },
                    { word: 'Le bénéfice', translation: 'Profit', example: 'L\'entreprise a fait des bénéfices.', pronunciation: 'Le bénéfice' }
                ]
            },
            {
                id: 'conversation',
                name: 'La Conversation',
                icon: '💬',
                words: [
                    { word: 'Comment vas-tu?', translation: 'How are you?', example: 'Comment vas-tu aujourd\'hui?', pronunciation: 'Comment vas-tu' },
                    { word: 'Comment t\'appelles-tu?', translation: 'What is your name?', example: 'Comment t\'appelles-tu s\'il te plaît?', pronunciation: 'Comment t\'appelles-tu' },
                    { word: 'D\'où viens-tu?', translation: 'Where are you from?', example: 'D\'où viens-tu originellement?', pronunciation: 'D\'où viens-tu' },
                    { word: 'Enchanté', translation: 'Nice to meet you', example: 'Enchanté de vous rencontrer!', pronunciation: 'Enchanté' },
                    { word: 'Je ne comprends pas', translation: 'I don\'t understand', example: 'Désolé, je ne comprends pas.', pronunciation: 'Je ne comprends pas' },
                    { word: 'Pouvez-vous répéter?', translation: 'Can you repeat?', example: 'Pouvez-vous répéter lentement?', pronunciation: 'Pouvez-vous répéter' },
                    { word: 'Combien?', translation: 'How much?', example: 'Combien ça coûte?', pronunciation: 'Combien' },
                    { word: 'Où est...?', translation: 'Where is...?', example: 'Où est la gare?', pronunciation: 'Où est' },
                    { word: 'J\'ai besoin d\'aide', translation: 'I need help', example: 'Excusez-moi, j\'ai besoin d\'aide.', pronunciation: 'J\'ai besoin d\'aide' },
                    { word: 'À plus tard', translation: 'See you later', example: 'À plus tard, bonne journée!', pronunciation: 'À plus tard' }
                ]
            },
            {
                id: 'technology',
                name: 'La Technologie',
                icon: '💻',
                words: [
                    { word: 'L\'ordinateur', translation: 'Computer', example: 'Mon ordinateur est rapide.', pronunciation: 'L\'ordinateur' },
                    { word: 'Internet', translation: 'Internet', example: 'Internet est lent aujourd\'hui.', pronunciation: 'Internet' },
                    { word: 'Le mot de passe', translation: 'Password', example: 'Changez votre mot de passe régulièrement.', pronunciation: 'Le mot de passe' },
                    { word: 'Télécharger', translation: 'Download', example: 'Téléchargez l\'application maintenant.', pronunciation: 'Télécharger' },
                    { word: 'Le logiciel', translation: 'Software', example: 'Ce logiciel est gratuit.', pronunciation: 'Le logiciel' },
                    { word: 'La base de données', translation: 'Database', example: 'La base de données est sécurisée.', pronunciation: 'La base de données' },
                    { word: 'Le smartphone', translation: 'Smartphone', example: 'J\'ai acheté un nouveau smartphone.', pronunciation: 'Le smartphone' },
                    { word: 'Le courriel', translation: 'Email', example: 'Envoyez-moi un courriel.', pronunciation: 'Le courriel' },
                    { word: 'L\'intelligence artificielle', translation: 'Artificial Intelligence', example: 'L\'IA change le monde.', pronunciation: 'L\'intelligence artificielle' },
                    { word: 'L\'application', translation: 'Application', example: 'Cette application est utile.', pronunciation: 'L\'application' }
                ]
            }
        ]
    },
    spanish: {
        categories: [
            {
                id: 'basics',
                name: 'Las Bases',
                icon: '🔤',
                words: [
                    { word: 'Hola', translation: 'Hello', example: 'Hola, ¿cómo estás?', pronunciation: 'Hola' },
                    { word: 'Adiós', translation: 'Goodbye', example: 'Adiós, ¡hasta mañana!', pronunciation: 'Adiós' },
                    { word: 'Por favor', translation: 'Please', example: 'Un café, por favor.', pronunciation: 'Por favor' },
                    { word: 'Gracias', translation: 'Thank you', example: '¡Muchas gracias!', pronunciation: 'Gracias' },
                    { word: 'Sí', translation: 'Yes', example: 'Sí, entiendo.', pronunciation: 'Sí' },
                    { word: 'No', translation: 'No', example: 'No, gracias.', pronunciation: 'No' },
                    { word: 'Lo siento', translation: 'Sorry', example: 'Lo siento, llego tarde.', pronunciation: 'Lo siento' },
                    { word: 'Disculpe', translation: 'Excuse me', example: 'Disculpe, ¿dónde está la estación?', pronunciation: 'Disculpe' },
                    { word: 'Buenas noches', translation: 'Good night', example: '¡Buenas noches, duerme bien!', pronunciation: 'Buenas noches' },
                    { word: 'Buenas tardes', translation: 'Good afternoon', example: '¡Buenas tardes señora!', pronunciation: 'Buenas tardes' }
                ]
            },
            {
                id: 'family',
                name: 'La Familia',
                icon: '👨‍👩‍👧',
                words: [
                    { word: 'La madre', translation: 'Mother', example: 'Mi madre es médica.', pronunciation: 'La madre' },
                    { word: 'El padre', translation: 'Father', example: 'Mi padre trabaja en París.', pronunciation: 'El padre' },
                    { word: 'El hermano', translation: 'Brother', example: 'Tengo dos hermanos.', pronunciation: 'El hermano' },
                    { word: 'La hermana', translation: 'Sister', example: 'Mi hermana es muy amable.', pronunciation: 'La hermana' },
                    { word: 'La abuela', translation: 'Grandmother', example: 'Mi abuela cocina muy bien.', pronunciation: 'La abuela' },
                    { word: 'El abuelo', translation: 'Grandfather', example: 'Mi abuelo tiene 80 años.', pronunciation: 'El abuelo' },
                    { word: 'El tío', translation: 'Uncle', example: 'Mi tío vive en Londres.', pronunciation: 'El tío' },
                    { word: 'La tía', translation: 'Aunt', example: 'Mi tía es profesora.', pronunciation: 'La tía' },
                    { word: 'El primo', translation: 'Cousin', example: 'Visité a mi primo ayer.', pronunciation: 'El primo' },
                    { word: 'El hijo', translation: 'Son', example: 'Su hijo es muy inteligente.', pronunciation: 'El hijo' }
                ]
            },
            {
                id: 'food',
                name: 'La Comida',
                icon: '🍎',
                words: [
                    { word: 'La manzana', translation: 'Apple', example: 'Como una manzana cada día.', pronunciation: 'La manzana' },
                    { word: 'El pan', translation: 'Bread', example: 'El pan está fresco.', pronunciation: 'El pan' },
                    { word: 'El agua', translation: 'Water', example: 'Bebo agua cada mañana.', pronunciation: 'El agua' },
                    { word: 'El pollo', translation: 'Chicken', example: 'Me encanta el pollo a la parrilla.', pronunciation: 'El pollo' },
                    { word: 'El arroz', translation: 'Rice', example: 'El arroz es un alimento básico.', pronunciation: 'El arroz' },
                    { word: 'El café', translation: 'Coffee', example: 'Bebo café cada mañana.', pronunciation: 'El café' },
                    { word: 'La leche', translation: 'Milk', example: 'La leche es buena para los huesos.', pronunciation: 'La leche' },
                    { word: 'El huevo', translation: 'Egg', example: 'Como dos huevos en el desayuno.', pronunciation: 'El huevo' },
                    { word: 'El pescado', translation: 'Fish', example: 'Como pescado los viernes.', pronunciation: 'El pescado' },
                    { word: 'La ensalada', translation: 'Salad', example: 'Como una ensalada al mediodía.', pronunciation: 'La ensalada' }
                ]
            },
            {
                id: 'animals',
                name: 'Los Animales',
                icon: '🐶',
                words: [
                    { word: 'El perro', translation: 'Dog', example: 'Mi perro ama correr.', pronunciation: 'El perro' },
                    { word: 'El gato', translation: 'Cat', example: 'El gato está durmiendo.', pronunciation: 'El gato' },
                    { word: 'El pájaro', translation: 'Bird', example: 'El pájaro canta cada mañana.', pronunciation: 'El pájaro' },
                    { word: 'El león', translation: 'Lion', example: 'El león es el rey de los animales.', pronunciation: 'El león' },
                    { word: 'El elefante', translation: 'Elephant', example: 'Los elefantes tienen buena memoria.', pronunciation: 'El elefante' },
                    { word: 'El caballo', translation: 'Horse', example: 'El caballo corre muy rápido.', pronunciation: 'El caballo' },
                    { word: 'El conejo', translation: 'Rabbit', example: 'El conejo es muy lindo.', pronunciation: 'El conejo' },
                    { word: 'El oso', translation: 'Bear', example: 'El oso duerme en invierno.', pronunciation: 'El oso' },
                    { word: 'La serpiente', translation: 'Snake', example: 'La serpiente es peligrosa.', pronunciation: 'La serpiente' },
                    { word: 'El tigre', translation: 'Tiger', example: 'El tigre es muy rápido.', pronunciation: 'El tigre' }
                ]
            },
            {
                id: 'body',
                name: 'El Cuerpo',
                icon: '💪',
                words: [
                    { word: 'La cabeza', translation: 'Head', example: 'Me duele la cabeza.', pronunciation: 'La cabeza' },
                    { word: 'Los ojos', translation: 'Eyes', example: 'Sus ojos son azules.', pronunciation: 'Los ojos' },
                    { word: 'La nariz', translation: 'Nose', example: 'Mi nariz está fría.', pronunciation: 'La nariz' },
                    { word: 'La boca', translation: 'Mouth', example: 'Abre la boca por favor.', pronunciation: 'La boca' },
                    { word: 'La mano', translation: 'Hand', example: 'Lávate las manos.', pronunciation: 'La mano' },
                    { word: 'El pie', translation: 'Foot', example: 'Me duele el pie.', pronunciation: 'El pie' },
                    { word: 'El brazo', translation: 'Arm', example: 'Se rompió el brazo.', pronunciation: 'El brazo' },
                    { word: 'La pierna', translation: 'Leg', example: 'Ella tiene piernas largas.', pronunciation: 'La pierna' },
                    { word: 'La espalda', translation: 'Back', example: 'Me duele la espalda.', pronunciation: 'La espalda' },
                    { word: 'El corazón', translation: 'Heart', example: 'Tu corazón late rápido.', pronunciation: 'El corazón' }
                ]
            },
            {
                id: 'clothes',
                name: 'La Ropa',
                icon: '👕',
                words: [
                    { word: 'La camisa', translation: 'Shirt', example: 'Él lleva una camisa azul.', pronunciation: 'La camisa' },
                    { word: 'Los pantalones', translation: 'Pants', example: 'Estos pantalones son muy grandes.', pronunciation: 'Los pantalones' },
                    { word: 'Los zapatos', translation: 'Shoes', example: 'Compré zapatos nuevos.', pronunciation: 'Los zapatos' },
                    { word: 'La chaqueta', translation: 'Jacket', example: 'Ponte la chaqueta, hace frío.', pronunciation: 'La chaqueta' },
                    { word: 'El sombrero', translation: 'Hat', example: 'Ella lleva un sombrero rojo.', pronunciation: 'El sombrero' },
                    { word: 'El vestido', translation: 'Dress', example: 'Llevaba un vestido hermoso.', pronunciation: 'El vestido' },
                    { word: 'Los calcetines', translation: 'Socks', example: 'Necesito calcetines limpios.', pronunciation: 'Los calcetines' },
                    { word: 'El abrigo', translation: 'Coat', example: 'Ponte el abrigo.', pronunciation: 'El abrigo' },
                    { word: 'La bufanda', translation: 'Scarf', example: 'Ella tiene una bufanda de lana.', pronunciation: 'La bufanda' },
                    { word: 'Los guantes', translation: 'Gloves', example: 'Mis guantes son cálidos.', pronunciation: 'Los guantes' }
                ]
            },
            {
                id: 'travel',
                name: 'El Viaje',
                icon: '✈️',
                words: [
                    { word: 'El aeropuerto', translation: 'Airport', example: 'Llegamos al aeropuerto temprano.', pronunciation: 'El aeropuerto' },
                    { word: 'El hotel', translation: 'Hotel', example: 'El hotel es muy cómodo.', pronunciation: 'El hotel' },
                    { word: 'El pasaporte', translation: 'Passport', example: 'No olvides tu pasaporte.', pronunciation: 'El pasaporte' },
                    { word: 'El billete', translation: 'Ticket', example: 'Compré un billete de avión.', pronunciation: 'El billete' },
                    { word: 'El equipaje', translation: 'Luggage', example: 'Mi equipaje es pesado.', pronunciation: 'El equipaje' },
                    { word: 'El tren', translation: 'Train', example: 'El tren está a tiempo.', pronunciation: 'El tren' },
                    { word: 'El mapa', translation: 'Map', example: 'Necesito un mapa de la ciudad.', pronunciation: 'El mapa' },
                    { word: 'El turista', translation: 'Tourist', example: 'Muchos turistas visitan París.', pronunciation: 'El turista' },
                    { word: 'La playa', translation: 'Beach', example: 'La playa es hermosa.', pronunciation: 'La playa' },
                    { word: 'El museo', translation: 'Museum', example: 'Visitamos el museo.', pronunciation: 'El museo' }
                ]
            },
            {
                id: 'business',
                name: 'El Negocio',
                icon: '💼',
                words: [
                    { word: 'La reunión', translation: 'Meeting', example: 'Tenemos una reunión a las 10.', pronunciation: 'La reunión' },
                    { word: 'El contrato', translation: 'Contract', example: 'Firme el contrato por favor.', pronunciation: 'El contrato' },
                    { word: 'El salario', translation: 'Salary', example: 'El salario es negociable.', pronunciation: 'El salario' },
                    { word: 'El cliente', translation: 'Client', example: 'El cliente está satisfecho.', pronunciation: 'El cliente' },
                    { word: 'La factura', translation: 'Invoice', example: 'Envíe la factura por email.', pronunciation: 'La factura' },
                    { word: 'El presupuesto', translation: 'Budget', example: 'Superamos el presupuesto.', pronunciation: 'El presupuesto' },
                    { word: 'El plazo', translation: 'Deadline', example: 'El plazo es el viernes.', pronunciation: 'El plazo' },
                    { word: 'El gerente', translation: 'Manager', example: 'Mi gerente es muy estricto.', pronunciation: 'El gerente' },
                    { word: 'El informe', translation: 'Report', example: 'Entregue el informe mañana.', pronunciation: 'El informe' },
                    { word: 'El beneficio', translation: 'Profit', example: 'La empresa obtuvo beneficios.', pronunciation: 'El beneficio' }
                ]
            },
            {
                id: 'conversation',
                name: 'La Conversación',
                icon: '💬',
                words: [
                    { word: '¿Cómo estás?', translation: 'How are you?', example: '¿Cómo estás hoy?', pronunciation: '¿Cómo estás?' },
                    { word: '¿Cómo te llamas?', translation: 'What is your name?', example: '¿Cómo te llamas por favor?', pronunciation: '¿Cómo te llamas?' },
                    { word: '¿De dónde eres?', translation: 'Where are you from?', example: '¿De dónde eres originalmente?', pronunciation: '¿De dónde eres?' },
                    { word: 'Mucho gusto', translation: 'Nice to meet you', example: '¡Mucho gusto en conocerte!', pronunciation: 'Mucho gusto' },
                    { word: 'No entiendo', translation: 'I don\'t understand', example: 'Lo siento, no entiendo.', pronunciation: 'No entiendo' },
                    { word: '¿Puede repetir?', translation: 'Can you repeat?', example: '¿Puede repetir despacio?', pronunciation: '¿Puede repetir?' },
                    { word: '¿Cuánto cuesta?', translation: 'How much?', example: '¿Cuánto cuesta esto?', pronunciation: '¿Cuánto cuesta?' },
                    { word: '¿Dónde está...?', translation: 'Where is...?', example: '¿Dónde está la estación?', pronunciation: '¿Dónde está?' },
                    { word: 'Necesito ayuda', translation: 'I need help', example: 'Disculpe, necesito ayuda.', pronunciation: 'Necesito ayuda' },
                    { word: 'Hasta luego', translation: 'See you later', example: '¡Hasta luego, que tengas un buen día!', pronunciation: 'Hasta luego' }
                ]
            },
            {
                id: 'technology',
                name: 'La Tecnología',
                icon: '💻',
                words: [
                    { word: 'El ordenador', translation: 'Computer', example: 'Mi ordenador es rápido.', pronunciation: 'El ordenador' },
                    { word: 'Internet', translation: 'Internet', example: 'Internet está lento hoy.', pronunciation: 'Internet' },
                    { word: 'La contraseña', translation: 'Password', example: 'Cambia tu contraseña regularmente.', pronunciation: 'La contraseña' },
                    { word: 'Descargar', translation: 'Download', example: 'Descarga la aplicación ahora.', pronunciation: 'Descargar' },
                    { word: 'El software', translation: 'Software', example: 'Este software es gratuito.', pronunciation: 'El software' },
                    { word: 'La base de datos', translation: 'Database', example: 'La base de datos es segura.', pronunciation: 'La base de datos' },
                    { word: 'El smartphone', translation: 'Smartphone', example: 'Compré un nuevo smartphone.', pronunciation: 'El smartphone' },
                    { word: 'El correo electrónico', translation: 'Email', example: 'Envíame un correo electrónico.', pronunciation: 'El correo electrónico' },
                    { word: 'La inteligencia artificial', translation: 'Artificial Intelligence', example: 'La IA está cambiando el mundo.', pronunciation: 'La inteligencia artificial' },
                    { word: 'La aplicación', translation: 'Application', example: 'Esta aplicación es útil.', pronunciation: 'La aplicación' }
                ]
            }
        ]
    }
};
// ======== DATA ========
const data = {
  bangladesh: {
    firstNames: ["Ahmed", "Tanjim", "Shuvo", "Nusrat", "Mim", "Sabbir", "Jannat", "Tarek", "Sumaiya", "Nayeem", "Meherun", "Sadia", "Rakib", "Mohiuddin", "Faria", "Jahid", "Tanjila", "Asif", "Khadija", "Imran", "Rahim", "Karim", "Sakib", "Ayesha", "Fatima", "Rafiq", "Nasrin"],
    lastNames: ["Uddin", "Hossain", "Islam", "Ahmed", "Khan", "Chowdhury", "Hasan", "Rahman", "Mollah", "Sikder", "Talukder", "Sarkar", "Biswas", "Bhuiyan", "Mia", "Kabir", "Majumder", "Patwari", "Sharif", "Barman", "Mondal", "Mia", "Hossain", "Begum", "Khan", "Rahman", "Chowdhury"],
    domains: ["gmail.com", "yahoo.com", "bdmail.com", "live.com"],
    addresses: ["45/A Dhanmondi, Dhaka",
      "45/A Dhanmondi, Dhaka",
      "12/3 Bashundhara R/A, Dhaka",
      "221 Gulshan Avenue, Dhaka",
      "5/2 Mirpur-1, Dhaka",
      "88/C Khulshi, Chattogram",
      "74/B Shibgonj, Bogura",
      "33/A Zindabazar, Sylhet",
      "17/A Barabazar, Jessore",
      "60/1 New Market, Khulna",
      "10/5 Kallyanpur, Dhaka",
      "95/3 CDA Avenue, Chattogram",
      "4/7 Kazir Dewri, Chattogram",
      "27/9 Uttara Sector 7, Dhaka",
      "66/B Sonadanga, Khulna",
      "11/4 Banani, Dhaka",
      "38/A Sholoshohor, Chattogram",
      "29/2 Maijdee, Noakhali",
      "9/1 Rajshahi Court, Rajshahi",
      "13/6 Satmatha, Bogura",
      "31/3 Ambagan, Rangpur", "12 Kazipara, Mirpur", "7/A Uttara, Dhaka", "34 Elephant Road, Dhaka"],
    phoneFormat: () => "+880" + Math.floor(1300000000 + Math.random() * 100000000),
  },
  india: {
    firstNames: ["Aarav", "Priya", "Rahul", "Sneha", "Vikram", "Ananya", "Rohit", "Pooja", "Karan", "Isha", "Siddharth", "Neha", "Amit", "Divya", "Manish", "Riya", "Arjun", "Kavya", "Suresh", "Meera", "Vihaan", "Diya", "Ishaan", "Arjun", "Priya", "Rohan", "Ananya"],
    lastNames: ["Patel", "Tondwalkar", "Velusamy", "Bhagwat", "Manral", "Chettiar", "Debbarma", "Kandukuri", "Lalhmangaiha", "Zimik", "Mullapudi", "Phukan", "Barla", "Medhekar", "Gowda", "Kharbanda", "Tharakan", "Baidwan", "Toppo", "Ghosal", "Sankhla", "Kumar", "Singh", "Sharma", "Verma", "Gupta", "Reddy"],
    domains: ["gmail.com", "yahoo.in", "hotmail.com", "outlook.com"],
    addresses: ["25 Marine Drive, Mumbai", "12/A MG Road, Bengaluru", "45/3 Salt Lake, Kolkata", "7/1 Connaught Place, New Delhi", "89 Sector 17, Chandigarh", "33 RK Puram, New Delhi", "18/4 Anna Nagar, Chennai", "22 Shivaji Nagar, Pune", "9/6 Banjara Hills, Hyderabad", "67 Civil Lines, Jaipur", "101 Malviya Nagar, Bhopal", "56/2 HSR Layout, Bengaluru", "23/8 Navi Mumbai, Mumbai", "88/1 Lal Bazar, Kolkata", "15/9 T Nagar, Chennai", "42/7 Alkapuri, Vadodara", "36 Patliputra Colony, Patna", "77/5 Indira Nagar, Lucknow", "63 Tilak Road, Nagpur", "11/2 Panjagutta, Hyderabad", "5/4 Vasant Kunj, New Delhi", "12 Connaught Place, Delhi", "8 Park Street, Kolkata", "44 MG Road, Bangalore"],
    phoneFormat: () => `+91 ${Math.floor(7000000000 + Math.random() * 1000000000)}`,
  },
  america: {
    firstNames: ["John", "James", "Emily", "Michael", "Jessica", "David", "Ashley", "John", "Sarah", "Robert", "Amanda", "William", "Jennifer", "Joseph", "Elizabeth", "Charles", "Megan", "Daniel", "Lauren", "Matthew", "Taylor", "Sarah", "David", "Emily", "Michael", "Jennifer", "James", "Elizabeth"],
    lastNames: ["Smith", "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Johnson", "Brown", "Davis", "Wilson", "Taylor", "Anderson"],
    domains: ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"],
    addresses: ["123 Broadway, New York, NY", "123 Broadway, New York, NY", "456 Maple Street, Los Angeles, CA", "789 Oak Avenue, Chicago, IL", "321 Pine Road, Houston, TX", "654 Elm Street, Phoenix, AZ", "987 Cedar Lane, Philadelphia, PA", "234 Walnut Street, San Antonio, TX", "567 Birch Avenue, San Diego, CA", "890 Spruce Street, Dallas, TX", "135 Chestnut Road, San Jose, CA", "246 Willow Lane, Austin, TX", "579 Aspen Street, Jacksonville, FL", "802 Poplar Avenue, Fort Worth, TX", "314 Cypress Road, Columbus, OH", "426 Fir Street, Charlotte, NC", "638 Redwood Lane, Indianapolis, IN", "751 Hickory Street, Seattle, WA", "864 Dogwood Road, Denver, CO", "975 Magnolia Avenue, Washington, DC", "108 Sycamore Street, Boston, MA", "456 Sunset Blvd, Los Angeles, CA", "789 Michigan Ave, Chicago, IL", "101 Independence Ave, Washington, DC"],
    phoneFormat: () => `+1(${Math.floor(200 + Math.random() * 800)}) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
  },
  singapore: {
    firstNames: ["Wei", "Wei", "Li", "Xin", "Jie", "Siti", "Aiden", "Nurul", "Sean", "Ying", "Farah", "Zhi", "Kai", "Hui", "Aditya", "Maya", "Jun", "Sara", "Liam", "Rina", "Daniel", "Jun", "Ming", "Li", "Jing", "Wei Liang", "Xin", "Ying"],
    lastNames: ["Tan", "Seah", "Phua", "Neo", "Limson", "Chong", "Tang", "Quek", "Chew", "Tanaka", "Sng", "Foo", "Teng", "Liu", "Yap", "Liew", "Giam", "Kwek", "Sim", "Ooi", "Poh", "Lim", "Lee", "Ng", "Ong", "Wong", "Goh"],
    domains: ["gmail.com", "yahoo.com.sg", "hotmail.com", "outlook.sg"],
    addresses: ["101 Orchard Road, Singapore", "12 Orchard Road, Singapore", "45 Marina Bay Sands, Singapore", "7 Sentosa Gateway, Singapore", "89 Clarke Quay, Singapore", "33 Tanjong Pagar, Singapore", "18 Clementi Avenue, Singapore", "22 Holland Village, Singapore", "9 Bedok Reservoir, Singapore", "67 Bishan Street, Singapore", "101 Pasir Ris, Singapore", "56 Ang Mo Kio, Singapore", "23 Yishun Avenue, Singapore", "88 Thomson Road, Singapore", "15 Toa Payoh, Singapore", "42 Hougang Avenue, Singapore", "36 Bukit Batok, Singapore", "77 Serangoon Central, Singapore", "63 Jurong West, Singapore", "11 Kallang Bahru, Singapore", "5 Pasir Panjang, Singapore", "45 Marina Bay Sands, Singapore", "22 Raffles Place, Singapore", "8 Sentosa Gateway, Singapore"],
    phoneFormat: () => `+65 ${Math.floor(80000000 + Math.random() * 10000000)}`,
  },
  uk: {
    firstNames: [
      "Oliver", "George", "Harry", "Jack", "Jacob", "Noah", "Charlie", "Thomas",
      "Oscar", "William", "Amelia", "Olivia", "Isla", "Emily", "Ava", "Ella",
      "Jessica", "Sophie", "Grace", "Lily"
    ],
    lastNames: [
      "Smith", "Jones", "Taylor", "Brown", "Williams", "Wilson", "Johnson",
      "Davies", "Patel", "Robinson", "Wright", "Walker", "Thompson", "White",
      "Edwards", "Green", "Hall", "Wood", "Harris", "Clarke"
    ],
    domains: [
      "gmail.com", "hotmail.co.uk", "yahoo.co.uk", "outlook.com", "btinternet.com"
    ],
    addresses: [
      "10 Downing Street, London",
      "221B Baker Street, London",
      "5 Albert Square, Manchester",
      "42 Castle Street, Edinburgh",
      "32 High Street, Birmingham",
      "17 Queens Road, Glasgow",
      "88 King Street, Liverpool",
      "55 Prince Avenue, Leeds",
      "123 Oxford Road, Manchester",
      "72 Victoria Street, Bristol",
      "98 George Square, Edinburgh",
      "64 Piccadilly, London",
      "15 Windmill Street, Cardiff",
      "33 Cathedral Road, Belfast",
      "47 Kingsway, Swansea",
      "76 Queen's Road, Sheffield",
      "29 Union Street, Aberdeen",
      "81 College Green, Dublin",
      "19 Albert Street, Nottingham",
      "60 Hill Street, Leicester"
    ],
    phoneFormat: () => {
      return `+44 7${Math.floor(3 + Math.random() * 5)}${Math.floor(100000000 + Math.random() * 900000000)}`;
    }
  },
  russia: {
    firstNames: ["Ivan", "Rodion", "Zlata", "Vsevolod", "Lada", "German", "Rimma", "Stanislav", "Alina", "Stepan", "Vasilisa", "Gleb", "Evgeniya", "Lev", "Ninel", "Timofey", "Ulyana", "Bogdan", "Raisa", "Yegor", "Aksinya", "Dmitri", "Anna", "Olga", "Sergei", "Ekaterina", "Alexei", "Natalia"],
    lastNames: ["Ivanov", "Zherebtsov", "Luzhkov", "Mochalov", "Grebnev", "Kolpakov", "Nikonov", "Ryzhov", "Tsvetkov", "Kiselyov", "Solovyov", "Chernov", "Baburin", "Voronov", "Yermakov", "Frolov", "Golubev", "Nefedov", "Kovalev", "Zimin", "Oreshkin", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Petrov", "Sokolov"],
    domains: ["mail.ru", "yandex.ru", "gmail.com", "rambler.ru"],
    addresses: ["101 Red Square, Moscow", "12 Tverskaya Street, Moscow", "45 Nevsky Prospekt, Saint Petersburg", "7 Arbat Street, Moscow", "89 Bolshaya Sadovaya, Rostov-on-Don", "33 Leninsky Avenue, Novosibirsk", "18 Moskovsky Prospekt, Saint Petersburg", "22 Rubinstein Street, Saint Petersburg", "9 Komsomolsky Avenue, Samara", "67 Pushkin Street, Kazan", "101 Prospekt Mira, Moscow", "56 Sovetskaya Street, Yekaterinburg", "23 Leningradsky Avenue, Moscow", "88 Sadovaya Street, Krasnodar", "15 Gogol Street, Vladivostok", "42 Krasnaya Street, Sochi", "36 Gorky Street, Nizhny Novgorod", "77 Chekhov Street, Omsk", "63 Lenina Street, Ufa", "11 Karl Marx Street, Perm", "5 Oktyabrskaya Street, Volgograd", "45 Nevsky Prospekt, Saint Petersburg", "22 Lenin Square, Novosibirsk", "8 Kazan Kremlin, Kazan"],
    phoneFormat: () => `+7 ${Math.floor(9000000000 + Math.random() * 100000000)}`,
  },
  korea: {
    firstNames: ["Min-jun", "Da-woon", "Yul", "Ha-rin", "Jae-won", "Min-seo", "Do-yoon", "Yeon-woo", "Ra-on", "Seung-ah", "Ji-an", "Byung-ho", "Chae-won", "Eun-chae", "Woo-jin", "Soo-ah", "Jin-woo", "Hee-jun", "Ga-ram", "Na-ra", "Joon-seo", "Ji-ho", "Yoona", "Hae-in", "Seo-joon", "Ji-woo", "Hyun", "Soo"],
    lastNames: ["Kim", "Maeng", "Baek", "Noh", "Joo", "Ryu", "Yoo", "Uhm", "Hyeon", "Ha", "Bae", "Chu", "Seong", "Shim", "Jeon", "Do", "Mo", "Tang", "Wi", "Eom", "Goo", "Park", "Lee", "Choi", "Jung", "Kang", "Han"],
    domains: ["naver.com", "gmail.com", "daum.net", "hanmail.net"],
    addresses: ["101 Gangnam-gu, Seoul", "45 Gangnam-daero, Gangnam-gu, Seoul", "12 Teheran-ro, Seocho-gu, Seoul", "89 Dongseong-ro, Jung-gu, Daegu", "33 Gwanggyo-ro, Suwon-si, Gyeonggi-do", "7 Haeundaehaebyeon-ro, Haeundae-gu, Busan", "23 Dunsan-daero, Seo-gu, Daejeon", "56 Jungang-daero, Nam-gu, Busan", "101 Sammu-ro, Jeju-si, Jeju-do", "42 Sangmu-daero, Seo-gu, Gwangju", "77 Olympic-ro, Songpa-gu, Seoul", "15 Sejong-daero, Jung-gu, Seoul", "63 Janghan-ro, Dongdaemun-gu, Seoul", "18 Jeongjo-ro, Paldal-gu, Suwon", "88 Sinbanpo-ro, Seocho-gu, Seoul", "9 Geumgang-ro, Dong-gu, Daejeon", "36 Baekjegobun-ro, Songpa-gu, Seoul", "67 Yulgok-ro, Jongno-gu, Seoul", "5 Hwarang-ro, Dongdaemun-gu, Seoul", "11 Bupyeong-daero, Bupyeong-gu, Incheon", "25 Namdaemun-ro, Jung-gu, Seoul", "45 Haeundae Beach, Busan", "22 Myeongdong, Seoul", "8 Namsan Tower, Seoul"],
    phoneFormat: () => `+82 ${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  },
  germany: {
    firstNames: ["Max", "Max", "Anna", "Lukas", "Sophie", "Leon", "Marie", "Felix", "Emma", "Paul", "Laura", "Jonas", "Mia", "Tim", "Lena", "Moritz", "Hannah", "Jan", "Lea", "Niklas", "Julia", "Emma", "Leon", "Mia", "Paul", "Sophie", "Finn", "Hannah"],
    lastNames: ["Müller", "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner"],
    domains: ["web.de", "gmx.de", "gmail.com", "yahoo.de"],
    addresses: ["101 Friedrichstraße, Berlin", "12 Berliner Strasse, Berlin", "45 Hauptstrasse, Munich", "7 Königstrasse, Frankfurt", "89 Bahnhofstrasse, Hamburg", "33 Gartenweg, Stuttgart", "18 Lindenallee, Düsseldorf", "22 Marktplatz, Cologne", "9 Mozartweg, Leipzig", "67 Schillerstrasse, Dresden", "101 Rathausplatz, Nuremberg", "56 Goetheweg, Bonn", "23 Kaiserstrasse, Essen", "88 Beethovenstrasse, Bremen", "15 Friedrichstrasse, Hanover", "42 Schloßstrasse, Mannheim", "36 Wilhelmstrasse, Augsburg", "77 Kaiserplatz, Wiesbaden", "63 Bismarckstrasse, Karlsruhe", "11 Lessingstrasse, Münster", "5 Albertstrasse, Freiburg", "45 Marienplatz, Munich", "22 Mönckebergstraße, Hamburg", "8 Zeil, Frankfurt"],
    phoneFormat: () => `+49 ${Math.floor(100000000 + Math.random() * 900000000)}`,
  },
kazakhstan: {
  firstNames: [
    "Aruzhan", "Alikhan", "Dias", "Dana", "Yerlan", "Madina", "Nursultan", "Aigerim",
    "Timur", "Zhanel", "Askar", "Saule", "Bauyrzhan", "Amina", "Rakhat", "Gulnara",
    "Samal", "Daulet", "Miras", "Aizhan", "Adil", "Karina", "Arman", "Zhanna", "Yerassyl"
  ],
  
  lastNames: [
    "Akhmetov", "Nazarbayeva", "Tulegenov", "Sarsembayev", "Mukhamedzhanov", "Bekturova",
    "Kassenov", "Nurmagambetov", "Issabekov", "Zhaksylykova", "Abdullayev", "Kenzhebek",
    "Tynybekov", "Sadykova", "Bauyrzhanov", "Makhambetov", "Yesenova", "Kairatuly",
    "Alpysbaeva", "Dosmukhamedov", "Ormanov", "Suleimenova", "Kunanbayeva", "Zhumabayev"
  ],
  
  domains: [
    "mail.ru", "yandex.kz", "gmail.com", "inbox.ru", "yahoo.com"
  ],
  
  addresses: [
    "12 Dostyk Avenue, Almaty",
    "45/3 Abay Street, Astana",
    "78 Nazarbayev Avenue, Shymkent",
    "23 Kabanbai Batyr Street, Karaganda",
    "56/9 Satpayev Street, Aktobe",
    "101 Abay Avenue, Pavlodar",
    "34 Auezov Street, Oskemen",
    "67 Kunaev Street, Kostanay",
    "9 Tole Bi Street, Kyzylorda",
    "22 Zhambyl Avenue, Taraz",
    "88 Mangilik El Avenue, Astana",
    "15 Pushkin Street, Aktau",
    "5 Bayzakov Street, Almaty"
  ],
  
  phoneFormat: () => `+7 ${Math.floor(7000000000 + Math.random() * 1000000000)}`
 },
france: {
    firstNames: ["Lucas", "Jean", "Marie", "Pierre", "Sophie", "Michel", "Camille", "Louis", "Chloe", "Henri", "Julie", "Jacques", "Claire", "Luc", "Emilie", "Philippe", "Isabelle", "Alain", "Nathalie", "Thierry", "Manon", "Emma", "Jules", "Louise", "Hugo", "Chloé", "Louis", "Camille"],
    lastNames: ["Martin", "Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau", "Simon", "Laurent", "Michel", "Lefebvre", "Garcia", "Garnier", "Chevalier", "Roux", "David", "Bertrand", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit"],
    domains: ["orange.fr", "gmail.com", "hotmail.fr", "yahoo.fr"],
    addresses: ["15 Rue de Rivoli, Paris", "12 Rue de Rivoli, Paris", "45 Avenue des Champs-Élysées, Paris", "7 Boulevard Haussmann, Paris", "89 Rue Saint-Denis, Lyon", "33 Place Bellecour, Lyon", "18 Rue de la République, Marseille", "22 Quai du Port, Marseille", "9 Rue de l'Université, Bordeaux", "67 Cours Victor Hugo, Bordeaux", "101 Rue Faidherbe, Lille", "56 Rue de la Paix, Nantes", "23 Place Graslin, Nantes", "88 Rue Sainte-Catherine, Strasbourg", "15 Rue du Vieux-Marché, Rouen", "42 Rue de la Loi, Toulouse", "36 Rue Saint-Pierre, Grenoble", "77 Rue des Arts, Dijon", "63 Rue Lafayette, Montpellier", "11 Rue de la Poste, Nice", "5 Boulevard Carnot, Le Havre", "22 Rue de la République, Lyon", "8 Cours Belsunce, Marseille", "5 Place de la Comédie, Montpellier"],
    phoneFormat: () => `+33${Math.floor(600000000 + Math.random() * 100000000)}`,
  },
  algeria: {
  firstNames: [
    "Ahmed", "Fatima", "Mohamed", "Amina", "Karim", "Nadia", "Youssef", "Samira",
    "Rachid", "Khadija", "Sofiane", "Laila", "Omar", "Salima", "Hicham", "Houda",
    "Mustapha", "Yasmina", "Abdelkader", "Hanane", "Ali", "Imane", "Nourredine",
    "Souad", "Tarek"
  ],

  lastNames: [
    "Bensalem", "Cherif", "Haddad", "Mansouri", "Meziane", "Bouzar", "Khelifi",
    "Amrani", "Djebbar", "Chibane", "Zerrouki", "Belkacem", "Saidi", "Touati",
    "Boukhalfa", "Benali", "Ziani", "Ferhat", "Ouali", "Rahmani", "Ammar",
    "Boumediene", "Guedjiba", "Brahimi", "Fekir"
  ],

  domains: [
    "gmail.com", "yahoo.fr", "hotmail.com", "outlook.com", "mail.dz"
  ],

  addresses: [
    "12 Didouche Mourad Street, Algiers",
    "45/3 Emir Abdelkader Avenue, Oran",
    "78 Rue de la Liberté, Constantine",
    "23 Martyrs Square, Annaba",
    "56 Ahmed Zabana Street, Blida",
    "101 Houari Boumediene Avenue, Tlemcen",
    "34 Rue Abane Ramdane, Batna",
    "67 Rue Ben M’hidi, Sétif",
    "9 Cheikh Larbi Tebessi Street, Biskra",
    "22 Rue de l’Indépendance, Bejaia",
    "88 Rue de la République, Tizi Ouzou",
    "15 Place du 1er Novembre, Skikda",
    "5 Rue Mohamed Belouizdad, Algiers"
  ],

  phoneFormat: () => `+213 ${Math.floor(550000000 + Math.random() * 100000000)}`
 },
  belarus: {
  firstNames: [
    "Aliaksandr", "Anastasiya", "Maksim", "Katsiaryna", "Dzmitry", "Volha",
    "Siarhei", "Hanna", "Andrei", "Natallia", "Vladimir", "Yuliya",
    "Ivan", "Maryia", "Pavel", "Darya", "Artem", "Sviatlana",
    "Mikhail", "Alena", "Ihar", "Tatsiana", "Ruslan", "Kseniya", "Viktor"
  ],

  lastNames: [
    "Ivanov", "Kuznetsov", "Smirnov", "Novik", "Baranov", "Hryshchenko",
    "Mikhailov", "Petrov", "Sokolov", "Volkov", "Morozov", "Lebedev",
    "Zhuk", "Romanov", "Karpov", "Gavrilov", "Fedorov", "Orlov",
    "Sidorov", "Kravchenko", "Melnik", "Vasiliev", "Antonov", "Sorokin", "Nikolaev"
  ],

  domains: [
    "gmail.com", "yandex.by", "mail.ru", "tut.by", "yahoo.com", "outlook.com"
  ],

  addresses: [
    "12 Nezavisimosti Avenue, Minsk",
    "45/3 Lenina Street, Brest",
    "78 Sovetskaya Street, Grodno",
    "23 Kirova Street, Gomel",
    "56 Pobediteley Avenue, Minsk",
    "101 Oktyabrskaya Street, Mogilev",
    "34 Pushkina Street, Vitebsk",
    "67 Gagarina Street, Baranovichi",
    "9 Skaryny Avenue, Minsk",
    "22 Kosmonavtov Street, Gomel",
    "88 Centralnaya Street, Bobruisk",
    "15 Leningradskaya Street, Brest",
    "5 Masherova Avenue, Minsk"
  ],

  phoneFormat: () => `+375 ${Math.floor(290000000 + Math.random() * 100000000)}`
 },
  pakistan: {
  firstNames: [
    "Ayesha", "Ali", "Hassan", "Fatima", "Usman", "Sana", "Bilal", "Zainab",
    "Imran", "Khadija", "Hamza", "Maria", "Asad", "Hina", "Shahbaz", "Mariam",
    "Faisal", "Nida", "Saad", "Iqra", "Adnan", "Mahnoor", "Tariq", "Laiba", "Salman"
  ],

  lastNames: [
    "Khan", "Malik", "Sheikh", "Chaudhry", "Bhatti", "Qureshi", "Raja", "Abbasi",
    "Butt", "Dar", "Janjua", "Syed", "Gill", "Shah", "Raza", "Farooq",
    "Hussain", "Nawaz", "Yousaf", "Mughal", "Akhtar", "Javed", "Rehman", "Siddiqui", "Ghafoor"
  ],

  domains: [
    "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "mail.com"
  ],

  addresses: [
    "12 Mall Road, Lahore",
    "45/2 Clifton Block, Karachi",
    "78 Blue Area, Islamabad",
    "23 Saddar Bazaar, Rawalpindi",
    "56 Gulberg III, Lahore",
    "101 University Road, Peshawar",
    "34 Satellite Town, Quetta",
    "67 GT Road, Gujranwala",
    "9 Faisal Town, Lahore",
    "22 Civil Lines, Multan",
    "88 Jinnah Road, Karachi",
    "15 Cantt Area, Sialkot",
    "5 Shahrah-e-Faisal, Karachi"
  ],

  phoneFormat: () => `+92 ${Math.floor(3000000000 + Math.random() * 1000000000)}`
 },
  afghanistan: {
  firstNames: [
    "Ahmad", "Fatima", "Mohammad", "Zahra", "Omar", "Maryam", "Ali", "Laila",
    "Hassan", "Farzana", "Abdullah", "Shabnam", "Yusuf", "Parwana", "Hamid", "Niloofar",
    "Sami", "Soraya", "Khalid", "Gulalai", "Wahid", "Razia", "Karim", "Mahnoor", "Aziz"
  ],

  lastNames: [
    "Ahmadi", "Rahimi", "Habibi", "Karimi", "Safi", "Noori", "Qasemi", "Niazi",
    "Ebrahimi", "Zadran", "Hosseini", "Paktin", "Oryakhil", "Shamsi", "Waziri",
    "Bayat", "Kandahari", "Fazli", "Yousufi", "Sultani", "Popal", "Jan", "Nazari"
  ],

  domains: [
    "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "mail.ru"
  ],

  addresses: [
    "12 Darulaman Road, Kabul",
    "45/2 Karte Seh, Kabul",
    "78 Jada-e-Maiwand, Kabul",
    "23 Now Abad Street, Mazar-i-Sharif",
    "56/9 Kandahar City Center, Kandahar",
    "101 Herat Bazaar, Herat",
    "34 Jalalabad Road, Jalalabad",
    "67 Pul-e-Khumri Street, Baghlan",
    "9/2 Faizabad Market, Badakhshan",
    "22 City Square, Kunduz",
    "88 Central Bazaar, Ghazni",
    "15/7 Lashkar Gah Road, Helmand",
    "5 Chaman-e-Hozori, Kabul"
  ],

  phoneFormat: () => `+93 ${Math.floor(700000000 + Math.random() * 100000000)}`
  },
  japan: {
    firstNames: ["Hiroshi", "Itsuki", "Kanon", "Minato", "Rin", "Haruki", "Suzu", "Tsubasa", "Yuzuki", "Kaito", "Emi", "Kazuki", "Nana", "Taiga", "Miyuki", "Renji", "Sayaka", "Yuto", "Naruto", "Kento", "Nozomi", "Yuki", "Sakura", "Ren", "Haruto", "Hina", "Sota", "Yui"],
    lastNames: ["Sato", "Uzumaki", "Uchiha", "Hyuga", "Nara", "Akimichi", "Yamanaka", "Hatake", "Sarutobi", "Inuzuka", "Aburame", "Senju", "Hoshigaki", "Shimura", "Hyuuga", "Kurama", "Kamizuki", "Kaguya", "Momochi", "Kazekage", "Namikaze", "Tanaka", "Watanabe", "Yamamoto", "Nakamura", "Kobayashi", "Yoshida"],
    domains: ["gmail.com", "yahoo.co.jp", "hotmail.com", "outlook.jp"],
    addresses: ["101 Shibuya Crossing, Tokyo", "12 Hokage Residence, Hidden Leaf Village", "45 Uchiha Compound, Konoha", "7 Ichiraku Ramen Street, Konoha", "89 Hyuga Estate, Hidden Leaf Village", "33 Nara Clan Forest, Konoha", "18 Yamanaka Flower Shop, Leaf Village", "22 Training Ground 7, Konoha", "9 Sarutobi Manor, Konoha", "67 Inuzuka Kennels, Leaf Village", "101 Akimichi Estate, Hidden Leaf", "56 Anbu HQ, Hidden Leaf Village", "23 Ninja Academy, Konoha", "88 Hokage Mountain Road, Leaf Village", "15 Senju Compound, Hidden Leaf", "42 Uzumaki Residence, Konoha", "36 Hospital Street, Leaf Village", "77 Aburame Hive Chambers, Konoha", "63 Kazekage Tower, Hidden Sand Village", "11 Kaguya Shrine, Land of Waves", "5 Namikaze Estate, Konoha", "45 Dotonbori, Osaka", "22 Fushimi Inari, Kyoto", "8 Hakone, Kanagawa"],
    phoneFormat: () => `+81 ${Math.floor(7000000000 + Math.random() * 1000000000)}`,
  },
  china: {
    firstNames: [
      "Wei", "Li", "Jie", "Hua", "Fang", "Lei", "Xiao", "Yuan", "Mei", "Tao",
      "Jun", "Yan", "Bo", "Qiang", "Lan", "Qin", "Chun", "Jing", "Ning", "Rui"
    ],
    lastNames: [
      "Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou",
      "Xu", "Sun", "Ma", "Hu", "Zhu", "Gao", "Lin", "He", "Guo", "Luo"
    ],
    domains: [
      "qq.com", "163.com", "126.com", "sina.com", "aliyun.com"
    ],
    addresses: [
      "88 Nanjing Road, Shanghai",
      "66 Chaoyang Avenue, Beijing",
      "123 Tianhe Road, Guangzhou",
      "456 Wuhou District, Chengdu",
      "789 Luohu District, Shenzhen",
      "101 Xuanwu Road, Nanjing",
      "202 Hexi District, Tianjin",
      "303 Xiaoshan, Hangzhou",
      "404 Yanta District, Xi'an",
      "505 Lixia District, Jinan",
      "606 Heping Road, Shenyang",
      "707 Donghu Road, Wuhan",
      "808 Laoshan District, Qingdao",
      "909 Gusu District, Suzhou",
      "111 Jinniu District, Chengdu",
      "222 Yuelu District, Changsha",
      "333 Haidian District, Beijing",
      "444 Songjiang District, Shanghai",
      "555 Jianghan Road, Wuhan",
      "666 Gulou District, Fuzhou"
    ],
    phoneFormat: () => {
      return `+86 1${Math.floor(3 + Math.random() * 6)}${Math.floor(100000000 + Math.random() * 900000000)}`;
    }
  },
  israel: {
    firstNames: [
      "David", "Daniel", "Moshe", "Yosef", "Avi", "Noam", "Eitan", "Yitzhak", "Nadav", "Yonatan",
      "Yael", "Rivka", "Tamar", "Leah", "Sarah", "Noa", "Shira", "Michal", "Hila", "Avigail"
    ],
    lastNames: [
      "Cohen", "Levi", "Mizrahi", "Peretz", "Biton", "Azoulay", "Katz", "Barak", "Shapira", "Ben-David",
      "Golan", "Avraham", "Eliyahu", "Halevi", "Rosen", "Mizrachi", "Alon", "Segal", "Yehuda", "Tzur"
    ],
    domains: [
      "gmail.com", "walla.co.il", "yahoo.com", "hotmail.com", "netvision.net.il"
    ],
    addresses: [
      "10 Herzl Street, Tel Aviv",
      "5 Rothschild Blvd, Tel Aviv",
      "21 King George Street, Jerusalem",
      "3 Jabotinsky Street, Ramat Gan",
      "17 Bialik Street, Haifa",
      "88 Ben Yehuda Street, Tel Aviv",
      "22 Hillel Street, Jerusalem",
      "9 Begin Road, Holon",
      "31 Sderot Nordau, Netanya",
      "12 Kaplan Street, Be'er Sheva",
      "45 Rabin Blvd, Petah Tikva",
      "7 Palmach Street, Rehovot",
      "39 Weizmann Street, Kfar Saba",
      "26 Derech Eilat, Eilat",
      "14 Arlozorov Street, Ashdod",
      "53 Yehuda Street, Nazareth",
      "20 HaRav Kook Street, Tiberias",
      "33 Emek Refaim Street, Jerusalem",
      "60 Menachem Begin Blvd, Bat Yam",
      "18 Allenby Street, Tel Aviv"
    ],
    phoneFormat: () => {
      return `+972 5${Math.floor(0 + Math.random() * 9)}-${Math.floor(1000000 + Math.random() * 9000000)}`;
    }
  },
  vietnam: {
    firstNames: [
      "Anh", "Bao", "Chi", "Duc", "Giang", "Hang", "Hien", "Khanh", "Lan", "Linh",
      "Minh", "Nga", "Ngoc", "Phuong", "Quang", "Son", "Tam", "Thanh", "Thao", "Trang"
    ],
    lastNames: [
      "Nguyen", "Tran", "Le", "Pham", "Hoang", "Huynh", "Phan", "Vu", "Dang", "Bui",
      "Do", "Ngo", "Duong", "Ly", "Trinh", "Mai", "Dang", "Kieu", "Quach", "Chau"
    ],
    domains: [
      "gmail.com", "yahoo.com.vn", "hotmail.com", "outlook.com", "vnmail.vn"
    ],
    addresses: [
      "12 Lê Lợi, District 1, Ho Chi Minh City",
      "88 Trần Hưng Đạo, Hanoi",
      "45 Nguyễn Huệ, Da Nang",
      "5 Hai Bà Trưng, Hue",
      "67 Điện Biên Phủ, Ho Chi Minh City",
      "23 Phạm Văn Đồng, Nha Trang",
      "34 Lý Thường Kiệt, Hanoi",
      "90 Nguyễn Thị Minh Khai, Can Tho",
      "76 Bạch Đằng, Da Nang",
      "17 Trường Chinh, Haiphong",
      "81 Võ Văn Tần, Ho Chi Minh City",
      "59 Nguyễn Văn Cừ, Bien Hoa",
      "26 Quang Trung, Quy Nhon",
      "33 Hùng Vương, Vung Tau",
      "11 Cách Mạng Tháng Tám, Hue",
      "48 Lê Thánh Tôn, Hanoi",
      "14 Hoàng Diệu, Da Lat",
      "69 Nguyễn Tri Phương, Ho Chi Minh City",
      "29 Nguyễn Trãi, Hanoi",
      "93 Lê Duẩn, Buon Ma Thuot"
    ],
    phoneFormat: () => {
      return `+84 ${Math.floor(90 + Math.random() * 10)} ${Math.floor(1000000 + Math.random() * 9000000)}`;
    }
  },
  mexico: {
    firstNames: [
      "José", "Juan", "Luis", "Carlos", "Miguel", "Jorge", "Francisco", "Pedro", "Andrés", "Antonio",
      "María", "Guadalupe", "Carmen", "Ana", "Verónica", "Patricia", "Laura", "Fernanda", "Sofía", "Daniela"
    ],
    lastNames: [
      "García", "Martínez", "López", "Hernández", "González", "Pérez", "Sánchez", "Ramírez", "Torres", "Flores",
      "Rivera", "Gómez", "Díaz", "Reyes", "Cruz", "Morales", "Ortiz", "Gutíerrez", "Ramos", "Vargas"
    ],
    domains: [
      "gmail.com", "hotmail.com", "yahoo.com.mx", "outlook.com", "live.com.mx"
    ],
    addresses: [
      "123 Avenida Reforma, Mexico City",
      "45 Calle Juárez, Guadalajara",
      "78 Calle Hidalgo, Monterrey",
      "10 Avenida Insurgentes, Mexico City",
      "56 Calle Morelos, Puebla",
      "89 Avenida Universidad, Tijuana",
      "67 Calle Independencia, León",
      "34 Calle Zaragoza, Mérida",
      "23 Calle Allende, Querétaro",
      "90 Avenida 5 de Mayo, Toluca",
      "12 Calle Victoria, Aguascalientes",
      "76 Calle Benito Juárez, Cancún",
      "48 Calle López Mateos, Chihuahua",
      "64 Avenida Madero, San Luis Potosí",
      "29 Calle Matamoros, Hermosillo",
      "81 Calle Venustiano Carranza, Culiacán",
      "38 Calle Ignacio Zaragoza, Veracruz",
      "93 Calle Emiliano Zapata, Mexicali",
      "17 Avenida Constitución, Saltillo",
      "70 Calle Miguel Hidalgo, Oaxaca"
    ],
    phoneFormat: () => {
      return `+52 1 ${Math.floor(100 + Math.random() * 900)} ${Math.floor(1000000 + Math.random() * 9000000)}`;
    }
  },
  indonesia: {
    firstNames: [
      "Ahmad", "Budi", "Dewi", "Eka", "Fitri", "Gilang", "Hendra", "Indah", "Joko", "Kartika",
      "Lestari", "Made", "Nina", "Putri", "Rama", "Sari", "Teguh", "Utami", "Wawan", "Yusuf"
    ],
    lastNames: [
      "Sutanto", "Pratama", "Wijaya", "Santoso", "Saputra", "Hidayat", "Nugroho", "Purnama",
      "Susanto", "Firmansyah", "Gunawan", "Wibowo", "Hermawan", "Putra", "Iskandar", "Hakim",
      "Yulianto", "Maulana", "Rahman", "Syahputra"
    ],
    domains: [
      "gmail.com", "yahoo.co.id", "hotmail.com", "outlook.com", "telkom.net"
    ],
    addresses: [
      "10 Jalan Sudirman, Jakarta",
      "25 Jalan Diponegoro, Surabaya",
      "33 Jalan Malioboro, Yogyakarta",
      "56 Jalan Asia Afrika, Bandung",
      "42 Jalan Ahmad Yani, Medan",
      "73 Jalan Gatot Subroto, Denpasar",
      "88 Jalan Pemuda, Semarang",
      "19 Jalan MT Haryono, Makassar",
      "64 Jalan Hasanuddin, Palembang",
      "37 Jalan Pahlawan, Malang",
      "29 Jalan Sisingamangaraja, Pekanbaru",
      "47 Jalan Imam Bonjol, Balikpapan",
      "81 Jalan Teuku Umar, Banda Aceh",
      "15 Jalan WR Supratman, Banjarmasin",
      "90 Jalan Pattimura, Manado",
      "23 Jalan Cokroaminoto, Solo",
      "38 Jalan Letjen S. Parman, Pontianak",
      "62 Jalan RA Kartini, Bogor",
      "77 Jalan Kalibata, Jakarta Selatan",
      "11 Jalan Cendrawasih, Jayapura"
    ],
    phoneFormat: () => {
      return `+62 8${Math.floor(1 + Math.random() * 9)}${Math.floor(10000000 + Math.random() * 90000000)}`;
    }
  },
  turkiye: {
    firstNames: [
      "Ahmet", "Mehmet", "Mustafa", "Ali", "Hüseyin", "Hasan", "Osman", "Yusuf", "Murat", "Emre",
      "Fatma", "Ayşe", "Emine", "Zeynep", "Hatice", "Merve", "Elif", "Seda", "Aylin", "Gül"
    ],
    lastNames: [
      "Yılmaz", "Kaya", "Demir", "Şahin", "Çelik", "Yıldız", "Yalçın", "Aydın", "Arslan", "Doğan",
      "Koç", "Kurt", "Öztürk", "Polat", "Kılıç", "Avcı", "Eren", "Bozkurt", "Türkmen", "Güneş"
    ],
    domains: [
      "gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "mynet.com"
    ],
    addresses: [
      "15 Atatürk Caddesi, İstanbul",
      "42 Cumhuriyet Mahallesi, Ankara",
      "67 İnönü Bulvarı, İzmir",
      "88 Gazi Mustafa Kemal Bulvarı, Bursa",
      "23 Barbaros Bulvarı, Antalya",
      "39 Fevzi Çakmak Caddesi, Adana",
      "56 İsmet Paşa Mahallesi, Konya",
      "72 Talatpaşa Caddesi, Gaziantep",
      "11 Ziya Gökalp Caddesi, Mersin",
      "30 Necatibey Caddesi, Kayseri",
      "63 Dumlupınar Caddesi, Eskişehir",
      "78 Şehitler Caddesi, Samsun",
      "21 Alparslan Türkeş Bulvarı, Trabzon",
      "84 Mevlana Caddesi, Malatya",
      "92 Atatürk Mahallesi, Diyarbakır",
      "34 Cumhuriyet Bulvarı, Manisa",
      "49 Turgut Özal Bulvarı, Erzurum",
      "18 Yavuz Sultan Selim Caddesi, Edirne",
      "66 Selçuklu Mahallesi, Kocaeli",
      "57 İstiklal Caddesi, İstanbul"
    ],
    phoneFormat: () => {
      return `+90 5${Math.floor(0 + Math.random() * 5)}${Math.floor(10000000 + Math.random() * 90000000)}`;
    }
  },
  philippines: {
    firstNames: [
      "Juan", "Jose", "Mark", "James", "John", "Carlos", "Miguel", "Paolo", "Andre", "Nathan",
      "Maria", "Angel", "Grace", "Kristine", "Nicole", "Anne", "Jasmine", "Camille", "Rose", "Patricia"
    ],
    lastNames: [
      "Dela Cruz", "Garcia", "Reyes", "Ramos", "Mendoza", "Santos", "Lopez", "Gonzales", "Torres", "Castro",
      "Flores", "Rivera", "Gomez", "Cruz", "Fernandez", "Domingo", "Vega", "Navarro", "Aquino", "Bautista"
    ],
    domains: [
      "gmail.com", "yahoo.com.ph", "outlook.com", "rocketmail.com", "ymail.com"
    ],
    addresses: [
      "123 Rizal Avenue, Manila",
      "56 Quezon Boulevard, Quezon City",
      "78 Aguinaldo Highway, Cavite",
      "34 Roxas Boulevard, Pasay",
      "89 Marcos Highway, Antipolo",
      "12 Bonifacio Street, Davao City",
      "90 Katipunan Avenue, Quezon City",
      "67 Magsaysay Avenue, Baguio City",
      "44 General Luna Street, Cebu City",
      "25 Ortigas Avenue, Pasig",
      "39 Lacson Street, Bacolod",
      "18 Mabini Street, Iloilo City",
      "73 Osmeña Boulevard, Cebu City",
      "59 Aurora Boulevard, Manila",
      "81 Araneta Avenue, Caloocan",
      "95 Quirino Highway, Bulacan",
      "28 Evangelista Street, Makati",
      "66 España Boulevard, Manila",
      "19 Lapu-Lapu Street, Zamboanga City",
      "50 Taft Avenue, Manila"
    ],
    phoneFormat: () => {
      return `+63 9${Math.floor(0 + Math.random() * 9)}${Math.floor(100000000 + Math.random() * 900000000)}`;
    }
  },
  australia: {
    firstNames: [
      "Jack", "Oliver", "William", "Noah", "Liam", "Lucas", "Henry", "Leo", "James", "Thomas",
      "Charlotte", "Olivia", "Amelia", "Isla", "Ava", "Mia", "Grace", "Sophie", "Emily", "Zoe"
    ],
    lastNames: [
      "Smith", "Jones", "Williams", "Brown", "Wilson", "Taylor", "Johnson", "White", "Martin", "Anderson",
      "Thompson", "Walker", "Robinson", "Clarke", "Lee", "Harris", "Murray", "Edwards", "Kelly", "Hall"
    ],
    domains: [
      "gmail.com", "hotmail.com", "outlook.com", "yahoo.com.au", "bigpond.com"
    ],
    addresses: [
      "120 George Street, Sydney, NSW",
      "88 Collins Street, Melbourne, VIC",
      "45 Adelaide Street, Brisbane, QLD",
      "67 St Georges Terrace, Perth, WA",
      "32 North Terrace, Adelaide, SA",
      "77 London Circuit, Canberra, ACT",
      "53 Macquarie Street, Hobart, TAS",
      "25 Darwin Waterfront, Darwin, NT",
      "101 King Street, Sydney, NSW",
      "59 Swanston Street, Melbourne, VIC",
      "84 Queen Street, Brisbane, QLD",
      "11 Beaufort Street, Perth, WA",
      "36 King William Street, Adelaide, SA",
      "66 City Walk, Canberra, ACT",
      "91 Elizabeth Street, Hobart, TAS",
      "28 Smith Street, Darwin, NT",
      "44 Bondi Road, Bondi, NSW",
      "63 Fitzroy Street, St Kilda, VIC",
      "87 Boundary Street, Spring Hill, QLD",
      "39 Stirling Highway, Nedlands, WA"
    ],
    phoneFormat: () => {
      return `+61 4${Math.floor(0 + Math.random() * 9)} ${Math.floor(10000000 + Math.random() * 90000000)}`;
    }
  },
  uae: {
    firstNames: [
      "Mohammed", "Ahmed", "Ali", "Omar", "Hassan", "Khalid", "Abdullah", "Yousef", "Saif", "Faisal",
      "Fatima", "Aisha", "Maryam", "Noor", "Sara", "Amal", "Reem", "Latifa", "Salma", "Huda"
    ],
    lastNames: [
      "Al Mansoori", "Al Mazrouei", "Al Suwaidi", "Al Shamsi", "Al Falasi", "Al Marri", "Al Dhaheri", "Al Nuaimi",
      "Al Muhairi", "Al Rumaithi", "Al Hammadi", "Al Qasimi", "Al Hosani", "Al Zarouni", "Al Baloushi",
      "Al Kaabi", "Al Ameri", "Al Farsi", "Al Jaberi", "Al Ali"
    ],
    domains: [
      "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "emirates.net.ae"
    ],
    addresses: [
      "123 Sheikh Zayed Road, Dubai",
      "45 Corniche Street, Abu Dhabi",
      "89 King Faisal Street, Sharjah",
      "67 Al Maktoum Road, Dubai",
      "38 Electra Street, Abu Dhabi",
      "25 Al Wahda Street, Sharjah",
      "74 Al Rigga Road, Dubai",
      "56 Hamdan Street, Abu Dhabi",
      "92 Al Qasba Street, Sharjah",
      "33 Jumeirah Beach Road, Dubai",
      "19 Marina Walk, Dubai Marina",
      "61 Al Majaz Street, Sharjah",
      "84 Khalid Bin Al Waleed Road, Dubai",
      "29 Reem Island Road, Abu Dhabi",
      "77 Al Taawun Street, Sharjah",
      "43 Oud Metha Road, Dubai",
      "11 Al Falah Street, Abu Dhabi",
      "68 Al Khan Street, Sharjah",
      "95 Business Bay Road, Dubai",
      "36 Mussafah Street, Abu Dhabi"
    ],
    phoneFormat: () => {
      return `+971 5${Math.floor(0 + Math.random() * 9)} ${Math.floor(1000000 + Math.random() * 9000000)}`;
    }
  },
  brazil: {
    firstNames: ["João", "Caio", "Lara", "Davi", "Yasmin", "Enzo", "Cecília", "Mateus", "Isadora", "Heitor", "Valentina", "Vitor", "Giovanna", "Arthur", "Manuela", "Eduardo", "Bianca", "Henrique", "Letícia", "Murilo", "Lorena", "Maria", "Pedro", "Ana", "Lucas", "Julia", "Gabriel", "Laura"],
    lastNames: ["Silva", "Figueiredo", "Queiroz", "Tavares", "Cavalcanti", "Andrade", "Bittencourt", "Castro", "Medeiros", "Barros", "Brandão", "Carneiro", "Lopes", "Moura", "Ramos", "Silveira", "Vasconcelos", "Cruz", "Pinto", "Freitas", "Siqueira", "Souza", "Oliveira", "Santos", "Rodrigues", "Ferreira", "Alves"],
    domains: ["gmail.com", "bol.com.br", "hotmail.com", "outlook.com.br"],
    addresses: ["101 Copacabana, Rio de Janeiro", "123 Rua das Flores, São Paulo", "45 Avenida Brasil, Rio de Janeiro", "7 Rua XV de Novembro, Curitiba", "89 Avenida Paulista, São Paulo", "33 Rua da Praia, Porto Alegre", "18 Avenida Atlântica, Rio de Janeiro", "22 Rua Boa Vista, Salvador", "9 Avenida Sete, Vitória", "67 Rua dos Andradas, Porto Alegre", "101 Rua Marechal Deodoro, Curitiba", "56 Avenida Rio Branco, Rio de Janeiro", "23 Rua do Comércio, Fortaleza", "88 Avenida Santos Dumont, Belo Horizonte", "15 Rua Conselheiro Lafaiete, São Paulo", "42 Avenida Getúlio Vargas, Belo Horizonte", "36 Rua Barão do Rio Branco, Recife", "77 Rua General Osório, Florianópolis", "63 Avenida Independência, Porto Alegre", "11 Rua Sete de Setembro, Curitiba", "5 Avenida Amazonas, Belo Horizonte", "45 Paulista Avenue, São Paulo", "22 Brasília National Park, Brasília", "8 Pelourinho, Salvador"],
    phoneFormat: () => `+55 ${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  }
};

// ======== HELPERS ========
function generatePassword(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

// Robust copy with fallback for non-HTTPS / file://
async function copyTextSafely(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    throw new Error("Clipboard API not available");
  } catch (_) {
    // Fallback for insecure contexts
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      document.body.removeChild(ta);
      return false;
    }
  }
}

function showCopied(tempEl) {
  const original = tempEl.textContent;
  tempEl.textContent = "Copied!";
  setTimeout(() => {
    tempEl.textContent = original;
  }, 1200);
}

// ======== CORE ========
function generateInfo() {
  const country = document.getElementById("countrySelect").value;
  const selected = data[country];

  const first = selected.firstNames[Math.floor(Math.random() * selected.firstNames.length)];
  const last = selected.lastNames[Math.floor(Math.random() * selected.lastNames.length)];
  const domain = selected.domains[Math.floor(Math.random() * selected.domains.length)];
  const address = selected.addresses[Math.floor(Math.random() * selected.addresses.length)];
  const email = `${first.toLowerCase()}.${last.toLowerCase()}@${domain}`;
  const phone = selected.phoneFormat();
  const password = generatePassword();

  document.getElementById("name").textContent = `${first} ${last}`;
  document.getElementById("phone").textContent = phone;
  document.getElementById("email").textContent = email;
  document.getElementById("address").textContent = address;
  document.getElementById("password").textContent = password;
}

// Click-to-copy using event delegation
function setupCopyHandlers() {
  document.querySelectorAll(".info-box").forEach(box => {
    box.addEventListener("click", async () => {
      const valueEl = box.querySelector(".info-value");
      const text = valueEl.textContent.trim();
      if (text && text !== "--") {
        const ok = await copyTextSafely(text);
        if (ok) showCopied(valueEl);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateInfo();
  setupCopyHandlers();
  document.getElementById("generateBtn").addEventListener("click", generateInfo);
});

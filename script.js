

let currentLang = 'fr';
let currentStoryIndex = 0;

// 2. ВЫБОР ЯЗЫКА
function setLanguage(lang) {
    currentLang = lang;
    
    // Переключаем экраны
    document.getElementById('language-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    loadStory(); // Загружаем контент
}

// 3. ЗАГРУЗКА ИСТОРИИ
function loadStory() {
    // Выбираем случайную историю
   let newIndex;
do { newIndex = Math.floor(Math.random() * stories.length); } 
while (newIndex === currentStoryIndex && stories.length > 1);
currentStoryIndex = newIndex;
    const story = stories[currentStoryIndex];
    
    // Вставляем тексты истории
    document.getElementById('story-title').innerText = story.title[currentLang];
    document.getElementById('story-content').innerText = story.content[currentLang];
    document.getElementById('author-name').innerText = story.author;
    
    // Переводим кнопки и подписи
    const btnNext = document.getElementById('btn-next');
    const labelAuthor = document.getElementById('label-author');
    
    btnNext.innerText = (currentLang === 'en') ? "Another story 🎲" : "Autre histoire 🎲";
    labelAuthor.innerText = (currentLang === 'en') ? "By" : "Par";

    // Обновляем всю рекламу внизу
    applyAds();
setTimeout(() => {
        // Убираем мешающий экран выбора языка (на всякий случай)
        const langScreen = document.getElementById('language-screen');
        if (langScreen) langScreen.style.display = 'none';

        // Теперь прыгаем вверх
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 150);
}

// 4. УМНАЯ РЕКЛАМА И ПОЧТА
function applyAds() {
    // Читаем "хвостик" из ссылки
    const urlParams = new URLSearchParams(window.location.search);
    const cafeName = urlParams.get('place');
    
    // Элементы рекламы кафе
    const cafeBox = document.getElementById('cafe-ad-box');
    const adText = document.getElementById('ad-text');
    const adLink = document.getElementById('ad-link');
    
    // Элементы твоей почты
    const contactLabel = document.getElementById('contact-label');
    const emailLink = document.getElementById('email-link');

    // --- Настройка твоей почты (Всегда видна) ---
    const myEmail = "vichylitteraire@gmail.com";
    contactLabel.innerText = (currentLang === 'en') ? "Contact us:" : "Pour nous contacter :";
    emailLink.innerText = myEmail;
    // mailto: открывает почтовое приложение
    emailLink.href = "mailto:" + myEmail + "?subject=Publicité Vichy Littéraire"; 

    // --- Настройка рекламы кафе (Только если есть ?place=) ---
    const ads = {
        'paul': {
            text: { fr: " Soutenez notre projet culturel\n\n Devenez partenaire", en: "Support our cultural project\n\n Become a partner" },
            
        },
        'colada': {
            text: { fr: "❀ VOTRE LOGO ICI ❀\n\n Soutenez ce projet local", en: "❀ YOUR LOGO HERE ❀\n\n Support this local project" },
        }
    };

    if (cafeName && ads[cafeName]) {
        cafeBox.style.display = 'block'; // Показываем блок кафе
        adText.innerText = ads[cafeName].text[currentLang];
        adLink.href = ads[cafeName].url;
        adLink.innerText = (currentLang === 'en') ? "Learn more →" : "En savoir plus →";
    } else {
        cafeBox.style.display = 'none'; // Скрываем блок кафе, если хвостика нет
    }
}

// Этот код сработает ОДИН РАЗ при полной загрузке страницы,
// даже если зашли по ссылке с "хвостиком"
window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 500); // Даем полсекунды, чтобы всё прогрузилось (реклама, шрифты)
});

let currentLang = 'fr';
let currentStoryIndex = 0;

// 1. ВЫБОР ЯЗЫКА
function setLanguage(lang) {
    currentLang = lang;
    
    // Переключаем экраны
    document.getElementById('language-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    loadStory(); // Загружаем контент
}

// 2. ЗАГРУЗКА ИСТОРИИ
function loadStory() {
    // Выбираем случайную историю
    let newIndex;
    do { 
        newIndex = Math.floor(Math.random() * stories.length); 
    } while (newIndex === currentStoryIndex && stories.length > 1);
    
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

} // <--- ВОТ ЭТА СКОБКА БЫЛА ПРОПУЩЕНА

// 3. УМНАЯ РЕКЛАМА И ПОЧТА
function applyAds() {
    const urlParams = new URLSearchParams(window.location.search);
    const cafeName = urlParams.get('place');
    
    const cafeBox = document.getElementById('cafe-ad-box');
    const adText = document.getElementById('ad-text');
    const adLink = document.getElementById('ad-link');
    
    const contactLabel = document.getElementById('contact-label');
    const emailLink = document.getElementById('email-link');

    const myEmail = "vichylitteraire@gmail.com";
    contactLabel.innerText = (currentLang === 'en') ? "Contact us:" : "Pour nous contacter :";
    emailLink.innerText = myEmail;
    emailLink.href = "mailto:" + myEmail + "?subject=Publicité Vichy Littéraire"; 

    const ads = {
        'paul': {
            text: { fr: " Soutenez notre проект культурный\n\n Devenez partenaire", en: "Support our cultural project\n\n Become a partner" },
            url: "#"
        },
        'colada': {
            text: { fr: "❀ VOTRE LOGO ICI ❀\n\n Soutenez ce projet local", en: "❀ YOUR LOGO HERE ❀\n\n Support this local project" },
            url: "#"
        }
    };

    if (cafeName && ads[cafeName]) {
        cafeBox.style.display = 'block';
        adText.innerText = ads[cafeName].text[currentLang];
        adLink.href = ads[cafeName].url || "#";
        adLink.innerText = (currentLang === 'en') ? "Learn more →" : "En savoir plus →";
    } else {
        cafeBox.style.display = 'none';
    }
} // <--- ЭТА СКОБКА ТОЖЕ БЫЛА НУЖНА

// 4. СКРОЛЛ ПРИ ПЕРВОЙ ЗАГРУЗКЕ (ДЛЯ ХВОСТИКА)
// 4. ЕДИНЫЙ СКРОЛЛ ПРИ ЗАГРУЗКЕ И СМЕНЕ ИСТОРИИ
function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// При первой загрузке (ждем 500мс, чтобы реклама не "дергала" страницу)
window.addEventListener('load', () => {
    setTimeout(scrollUp, 500);
});

// Добавь вызов scrollUp() в конец функции loadStory вместо старых строк
});

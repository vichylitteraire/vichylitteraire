let currentLang = 'fr';
let currentStoryIndex = 0;

// 1. ВЫБОР ЯЗЫКА
function setLanguage(lang) {
    currentLang = lang;
    
    // Скрываем экран выбора, показываем контент
    const langScreen = document.getElementById('language-screen');
    const mainContent = document.getElementById('main-content');
    
    if (langScreen) langScreen.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    
    loadStory(); 
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
    
    // Вставляем тексты истории (проверяем наличие элементов, чтобы не было ошибок)
    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');
    const authorEl = document.getElementById('author-name');
    
    if (titleEl) titleEl.innerText = story.title[currentLang];
    if (contentEl) contentEl.innerText = story.content[currentLang];
    if (authorEl) authorEl.innerText = story.author;
    
    // Переводим кнопки и подписи
    const btnNext = document.getElementById('btn-next');
    const labelAuthor = document.getElementById('label-author');
    
    if (btnNext) {
        btnNext.innerText = (currentLang === 'en') ? "Another story 🎲" : "Autre histoire 🎲";
    }
    if (labelAuthor) {
        labelAuthor.innerText = (currentLang === 'en') ? "By" : "Par";
    }

    // Обновляем рекламу
    applyAds();

    // Скролл вверх при нажатии кнопки "Другая история"
    window.scrollTo(0, 0);
}

// 3. УМНАЯ РЕКЛАМА И КОНТАКТЫ
function applyAds() {
    const urlParams = new URLSearchParams(window.location.search);
    const cafeName = urlParams.get('place');
    
    const cafeBox = document.getElementById('cafe-ad-box');
    const adText = document.getElementById('ad-text');
    const adLink = document.getElementById('ad-link');
    
    const contactLabel = document.getElementById('contact-label');
    const emailLink = document.getElementById('email-link');

    const myEmail = "vichylitteraire@gmail.com";
    
    // Безопасное обновление почты
    if (contactLabel) {
        contactLabel.innerText = (currentLang === 'en') ? "Contact us:" : "Pour nous contacter :";
    }
    if (emailLink) {
        emailLink.innerText = myEmail;
        emailLink.href = "mailto:" + myEmail + "?subject=Publicité Vichy Littéraire"; 
    }

    const ads = {
        'paul': {
            text: { 
                fr: "Soutenez наш проект культурный\n\n Devenez partenaire", 
                en: "Support our cultural project\n\n Become a partner" 
            },
            url: "#"
        },
        'colada': {
            text: { 
                fr: "❀ VOTRE LOGO ICI ❀\n\n Soutenez ce projet local", 
                en: "❀ YOUR LOGO HERE ❀\n\n Support this local project" 
            },
            url: "#"
        }
    };

    if (cafeName && ads[cafeName] && cafeBox) {
        cafeBox.style.display = 'block';
        if (adText) adText.innerText = ads[cafeName].text[currentLang];
        if (adLink) {
            adLink.href = ads[cafeName].url || "#";
            adLink.innerText = (currentLang === 'en') ? "Learn more →" : "En savoir plus →";
        }
    } else if (cafeBox) {
        cafeBox.style.display = 'none';
    }
}

// 4. ФИНАЛЬНЫЙ СКРОЛЛ ДЛЯ ХВОСТИКОВ (QR-КОДОВ)
window.addEventListener('load', () => {
    // Ждем 600мс, чтобы реклама точно прогрузилась и не сбила скролл
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 600);
});

// Добавь вызов scrollUp() в конец функции loadStory вместо старых строк
});

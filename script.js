let currentLang = 'fr';
let currentStoryIndex = 0;

// 1. ВЫБОР ЯЗЫКА
function setLanguage(lang) {
    currentLang = lang;
    
    // Скрываем экран выбора, показываем основной контент
    const langScreen = document.getElementById('language-screen');
    const mainContent = document.getElementById('main-content');
    
    if (langScreen) langScreen.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    
    loadStory(); 
}

function loadStory() {
    // 1. Получаем список прочитанных
    let readStories = JSON.parse(localStorage.getItem('readStories')) || [];

    // 2. Создаем список индексов, которые мы еще НЕ читали
    let availableIndices = [];
    for (let i = 0; i < stories.length; i++) {
        if (!readStories.includes(i)) {
            availableIndices.push(i);
        }
    }

    // 3. Если все истории прочитаны — сбрасываем список и берем все доступные
    if (availableIndices.length === 0) {
        readStories = [];
        availableIndices = stories.map((_, index) => index);
    }

    // 4. Выбираем случайный индекс из ТЕХ, ЧТО ОСТАЛИСЬ
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    const newIndex = availableIndices[randomIndex];

    // 5. Сохраняем выбор
    currentStoryIndex = newIndex;
    readStories.push(newIndex);
    localStorage.setItem('readStories', JSON.stringify(readStories));

    // 6. Выводим контент
    const story = stories[currentStoryIndex];
    document.getElementById('story-title').innerText = story.title[currentLang];
    document.getElementById('story-content').innerText = story.content[currentLang];
    document.getElementById('author-name').innerText = story.author;
    
    const btnNext = document.getElementById('btn-next');
    const labelAuthor = document.getElementById('label-author');
    
    if (btnNext) btnNext.innerText = (currentLang === 'en') ? "Another story 🎲" : "Autre histoire 🎲";
    if (labelAuthor) labelAuthor.innerText = (currentLang === 'en') ? "By" : "Par";

    applyAds();
    window.scrollTo(0, 0);
}
// 3. УМНАЯ РЕКЛАМА И КОНТАКТЫ (ДЛЯ QR-НАКЛЕЕК)
function applyAds() {
    const urlParams = new URLSearchParams(window.location.search);
    const cafeName = urlParams.get('place');
    
    const cafeBox = document.getElementById('cafe-ad-box');
    const adText = document.getElementById('ad-text');
    const adLink = document.getElementById('ad-link');
    
    const contactLabel = document.getElementById('contact-label');
    const emailLink = document.getElementById('email-link');

    const myEmail = "vichylitteraire@gmail.com";
    
    // Безопасно обновляем блок контактов
    if (contactLabel) {
        contactLabel.innerText = (currentLang === 'en') ? "Contact us:" : "Pour nous contacter :";
    }
    if (emailLink) {
        emailLink.innerText = myEmail;
        emailLink.href = "mailto:" + myEmail + "?subject=Publicité Vichy Littéraire"; 
    }

    // Данные для партнеров
    const ads = {
        'paul': {
            text: { 
                fr: "Soutenez notre projet culturel\n\n Devenez partenaire", 
                en: "Support our cultural project\n\n Become a partner" 
            },
            url: "#"
        },
        'colada': {
            text: { 
                fr: "❀❀❀ \n\n Vous écrivez ? Votre texte pourrait être lu ici-même, par les clients de nos cafés partenaires.\n\nPartagez votre talent avec nous ! Envoyez vos textes par email", 
                en: "❀❀❀ \n\n Do you write? Your text could be read right here by the guests of our partner cafes.\n\nShare your talent with us! Send your stories via email" 
            },
            url: "#"
        }
    };

    // Проверяем, есть ли хвостик в ссылке и существуют ли элементы на странице
    if (ads[cafeName] && cafeBox) {
        cafeBox.style.display = 'block';
        if (adText) adText.innerText = ads[cafeName].text[currentLang];
        if (adLink) {
            adLink.href = ads[cafeName].url || "#";
            adLink.innerText = (currentLang === 'en') ? "Learn more →" : "En savoir plus →";
        }
    } else if (cafeBox) {
        // Если хвостика нет, скрываем блок рекламы
        cafeBox.style.display = 'none';
    }
}

// 4. ФИНАЛЬНЫЙ СКРОЛЛ ПРИ ЗАГРУЗКЕ ПО QR-КОДУ
window.addEventListener('load', () => {
    // Даем браузеру 600мс, чтобы всё (включая рекламу) успело встать на свои места
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 600);
});

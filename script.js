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
    // 1. Получаем список прочитанных индексов из памяти
    let readStories = JSON.parse(localStorage.getItem('readStories')) || [];

    // 2. Если прочитали всё — обнуляем список, чтобы начать заново
    if (readStories.length >= stories.length) {
        readStories = [];
    }

    // 3. Выбираем случайный индекс, которого НЕТ в списке прочитанных
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * stories.length);
    } while (readStories.includes(newIndex));

    // 4. Запоминаем этот выбор
    currentStoryIndex = newIndex;
    readStories.push(newIndex);
    localStorage.setItem('readStories', JSON.stringify(readStories));

    const story = stories[currentStoryIndex];
    
    // Вставляем тексты истории
    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');
    const authorEl = document.getElementById('author-name');
    
    if (titleEl) titleEl.innerText = story.title[currentLang];
    if (contentEl) contentEl.innerText = story.content[currentLang];
    if (authorEl) authorEl.innerText = story.author;
    
    // Переводим кнопки
    const btnNext = document.getElementById('btn-next');
    const labelAuthor = document.getElementById('label-author');
    
    if (btnNext) btnNext.innerText = (currentLang === 'en') ? "Another story 🎲" : "Autre histoire 🎲";
    if (labelAuthor) labelAuthor.innerText = (currentLang === 'en') ? "By" : "Par";

    applyAds();

    // Скролл вверх
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
                fr: "❀ VOTRE LOGO ICI ❀\n\n Soutenez ce projet local", 
                en: "❀ YOUR LOGO HERE ❀\n\n Support this local project" 
            },
            url: "#"
        }
    };

    // Проверяем, есть ли хвостик в ссылке и существуют ли элементы на странице
    if (cafeName && ads[cafeName] && cafeBox) {
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



// Вставь это в самый конец твоего файла
window.addEventListener('load', () => {
    // Ждем чуть-чуть, чтобы основной скрипт успел сработать
    setTimeout(() => {
        let readStories = JSON.parse(localStorage.getItem('readStories')) || [];
        
        // Проверяем: если количество прочитанных равно или больше количества всех историй
        if (readStories.length >= stories.length) {
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.innerHTML = `
                    <div style="text-align:center; padding: 50px 20px; font-family: 'Playfair Display', serif; background: #fcfaf7; border-radius: 10px;">
                        <h2 style="color: #d4a373;">
                            ${currentLang === 'en' ? 'Wow! You’ve read everything!' : 'Bravo ! Vous avez tout lu !'}
                        </h2>
                        <p style="font-size: 1.1rem; color: #444;">
                            ${currentLang === 'en' 
                                ? 'You are a true literature lover. New stories are coming soon.' 
                                : 'Vous êtes un véritable passionné. De nouvelles histoires arrivent bientôt.'}
                        </p>
                        <button onclick="localStorage.removeItem('readStories'); location.reload();" 
                                style="background:#d4a373; color:white; border:none; padding:12px 25px; border-radius:5px; cursor:pointer; margin-top:20px; font-size: 1rem;">
                            ${currentLang === 'en' ? 'Read again ↻' : 'Relire depuis le début ↻'}
                        </button>
                    </div>
                `;
            }
        }
    }, 700); // Задержка 700мс, чтобы не конфликтовать с твоим loadStory
});

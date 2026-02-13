let currentLang = 'fr';
let availableStories = []; // Для того, чтобы истории не повторялись

// 1. РЕКЛАМНЫЙ ОБЪЕКТ (без изменений)
const ads = {
    'main': { image: "logopublicite.jpg", text: { fr: "Bienvenue !", en: "Welcome!" }, url: "#" },
    'parchouli': { image: "logopublicite.jpg", text: { fr: "Bienvenue !", en: "Welcome!" }, url: "#" },
    'colada': { image: "LOGO_S_BARA.jpg", text: { fr: "❀❀❀", en: "❀❀❀" }, url: "https://liberersesecrits.podia.com/" }
};

function setLanguage(lang) {
    currentLang = lang;
    const langScreen = document.getElementById('language-screen');
    const mainContent = document.getElementById('main-content');
    if (langScreen) langScreen.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    loadStory(); 
}

// 2. Основная функция загрузки истории
function loadStory() {
    if (typeof stories === 'undefined' || stories.length === 0) return;

    // ЛОГИКА НЕПОВТОРЕНИЯ
    if (availableStories.length === 0) {
        availableStories = [...stories]; // Копируем массив, если он пуст
    }
    
    // Выбираем случайный индекс из доступных
    const randomIndex = Math.floor(Math.random() * availableStories.length);
    const story = availableStories.splice(randomIndex, 1)[0]; // Забираем историю, чтобы она не повторилась

    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');
    const authorNameEl = document.getElementById('author-name');
    const readMoreBtn = document.getElementById('read-more-btn');

    // Наполнение контентом
    if (titleEl) titleEl.textContent = story.title[currentLang] || story.title['fr'];
    if (contentEl) contentEl.textContent = story.content[currentLang] || story.content['fr'];
    if (authorNameEl) authorNameEl.textContent = story.author;

    // РАБОТА С КНОПКОЙ "ЧИТАТЬ ДАЛЕЕ"
    if (readMoreBtn) {
        if (story.link && story.link !== "#") {
            readMoreBtn.href = story.link;
            readMoreBtn.textContent = currentLang === 'fr' ? 'Lire la suite →' : 'Read more →';
            readMoreBtn.style.display = 'inline-block';
        } else {
            readMoreBtn.style.display = 'none';
        }
    }

    // СКРОЛЛ НАВЕРХ ПРИ СМЕНЕ ИСТОРИИ
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Запуск
document.addEventListener('DOMContentLoaded', () => {
    loadStory();
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', loadStory);
    }
});

// Юридические функции и Sparkle оставляем без изменений...
function openLegal() { document.getElementById('legal-modal').style.display = 'block'; }
function closeLegal() { document.getElementById('legal-modal').style.display = 'none'; }
function sparkle(e) { e.currentTarget.classList.toggle('liked'); }

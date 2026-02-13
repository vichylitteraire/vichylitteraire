let currentLang = 'fr';
let usedIndices = []; // Список уже показанных историй

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

function loadStory() {
    if (typeof stories === 'undefined' || stories.length === 0) return;

    // --- ЛОГИКА БЕЗ ПОВТОРОВ ---
    if (usedIndices.length === stories.length) {
        usedIndices = []; // Сбрасываем, когда все истории просмотрены
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * stories.length);
    } while (usedIndices.includes(randomIndex));
    
    usedIndices.push(randomIndex);
    const story = stories[randomIndex];
    // ---------------------------

    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');
    const authorNameEl = document.getElementById('author-name');
    const readMoreBtn = document.getElementById('read-more-btn');

    if (titleEl) titleEl.textContent = story.title[currentLang] || story.title['fr'];
    
    if (contentEl) {
        contentEl.style.whiteSpace = 'pre-wrap'; // Чтобы были абзацы
        contentEl.textContent = story.content[currentLang] || story.content['fr'];
    }

    if (authorNameEl) authorNameEl.textContent = story.author;

    // --- ЛОГИКА КНОПКИ ---
    if (readMoreBtn) {
        if (story.link && story.link !== "#") {
            readMoreBtn.href = story.link;
            readMoreBtn.target = "_blank";
            readMoreBtn.textContent = currentLang === 'fr' ? 'Lire la suite →' : 'Read more →';
            readMoreBtn.style.setProperty('display', 'inline-block', 'important'); // Проявляем кнопку
        } else {
            readMoreBtn.style.display = 'none';
        }
    }

    window.scrollTo(0, 0); // Твой скролл вверх
}

document.addEventListener('DOMContentLoaded', () => {
    loadStory();
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loadStory();
        });
    }
});

// Функции модалки и Sparkle остаются внизу без изменений
function openLegal() { document.getElementById('legal-modal').style.display = 'block'; }
function closeLegal() { document.getElementById('legal-modal').style.display = 'none'; }
function sparkle(e) { e.currentTarget.classList.toggle('liked'); }

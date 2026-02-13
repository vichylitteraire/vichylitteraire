let currentLang = 'fr';
let currentStoryIndex = 0;

// 1. РЕКЛАМНЫЙ ОБЪЕКТ
const ads = {
    'main': {
        image: "logopublicite.jpg",
        text: { 
           fr: "Bienvenue ! \n\nDécouvrez les talents de Vichy. \n\nVous écrivez ? Contactez-nous !", 
           en: "Welcome! \n\nDiscover Vichy's talents. \n\nDo you write? Contact us!" 
        },
        url: "#"
    },
    'parchouli': {
        image: "logopublicite.jpg",
        text: { 
           fr: "Bienvenue ! \n\nDécouvrez les talents de Vichy. \n\nVous écrivez ? Contactez-nous !", 
           en: "Welcome! \n\nDiscover Vichy's talents. \n\nDo you write? Contact us!" 
        },
        url: "#"
    },
    'colada': {
        image: "LOGO_S_BARA.jpg",
        text: { 
           fr: "❀❀❀ \n\nLIBÉRER SES ÉCRITS proposes des ateliers d'écriture et un accompagnement à la biographie à Vichy et en ligne", 
           en: "❀❀❀ \n\nLIBÉRER SES ÉCRITS offers writing workshops and biography coaching in Vichy and online." 
        },
        url: "https://liberersesecrits.podia.com/"
    }
};

// Функция переключения языка
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
    // Проверяем наличие массива stories из файла stories.js
    if (typeof stories === 'undefined' || stories.length === 0) {
        console.error("Массив 'stories' не найден. Проверь файл stories.js");
        return;
    }

    // Выбираем случайную историю
    const story = stories[Math.floor(Math.random() * stories.length)];

    // Находим элементы в HTML
    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');
    const authorNameEl = document.getElementById('author-name');
    const readMoreBtn = document.getElementById('read-more-btn');

    // Заполняем заголовок и контент, используя currentLang
    if (titleEl) {
        titleEl.textContent = story.title[currentLang] || story.title['fr'];
    }
    
    if (contentEl) {
        contentEl.textContent = story.content[currentLang] || story.content['fr'];
    }

    // Заполняем имя автора
    if (authorNameEl) {
        authorNameEl.textContent = story.author;
    }

    // Настраиваем кнопку ссылки (Lire la suite / Read more)
    if (readMoreBtn) {
        if (story.link && story.link !== "#") {
            readMoreBtn.href = story.link;
            readMoreBtn.target = "_blank"; // Открывать в новой вкладке
            readMoreBtn.textContent = currentLang === 'fr' ? 'Lire la suite →' : 'Read more →';
            readMoreBtn.style.display = 'inline-block'; 
        } else {
            readMoreBtn.style.display = 'none'; // Скрываем, если ссылки нет
        }
    }
}

// 3. Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Если экран выбора языка уже пройден или не нужен, загружаем историю
    loadStory(); 
    
    // Кнопка "Autre histoire"
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', loadStory);
    }
});

// Юридическая модалка
function openLegal() {
    const modal = document.getElementById('legal-modal');
    if (modal) { modal.style.display = 'block'; document.body.style.overflow = 'hidden'; }
}

function closeLegal() {
    const modal = document.getElementById('legal-modal');
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}

// Эффект Sparkle (лайк)
function sparkle(e) {
    e.currentTarget.classList.toggle('liked');

    const emojis = ['❤️', '💖', '✨', '🌸'];
    for (let i = 0; i < 6; i++) {
        const p = document.createElement('span');
        p.classList.add('heart-particle');
        p.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.left = e.clientX + 'px';
        p.style.top = e.clientY + 'px';
        
        const dx = (Math.random() - 0.5) * 160;
        const dy = (Math.random() - 0.5) * 160 - 40;
        p.style.setProperty('--dx', `${dx}px`);
        p.style.setProperty('--dy', `${dy}px`);
        
        document.body.appendChild(p);
        p.addEventListener('animationend', () => p.remove());
    }
}

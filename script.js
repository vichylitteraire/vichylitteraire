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

function setLanguage(lang) {
    currentLang = lang;
    const langScreen = document.getElementById('language-screen');
    const mainContent = document.getElementById('main-content');
    if (langScreen) langScreen.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    loadStory(); 
}

function loadStory() {
    let readStories = JSON.parse(localStorage.getItem('readStories')) || [];
    let availableIndices = [];
    for (let i = 0; i < stories.length; i++) {
        if (!readStories.includes(i)) availableIndices.push(i);
    }
    if (availableIndices.length === 0) {
        readStories = [];
        availableIndices = stories.map((_, index) => index);
    }
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    const newIndex = availableIndices[randomIndex];
    currentStoryIndex = newIndex;
    readStories.push(newIndex);
    localStorage.setItem('readStories', JSON.stringify(readStories));

    const story = stories[currentStoryIndex];
    document.getElementById('story-title').innerText = story.title[currentLang];
    document.getElementById('story-content').innerText = story.content[currentLang];
    document.getElementById('author-name').innerText = story.author;

    // --- НОВОЕ: ЛОГИКА КНОПКИ "ЧИТАТЬ БОЛЬШЕ" ---
    const readMoreBtn = document.getElementById('read-more-btn'); // НОВОЕ
    if (readMoreBtn) {                                           // НОВОЕ
        if (story.link) {                                       // НОВОЕ
            readMoreBtn.href = story.link;                      // НОВОЕ
            readMoreBtn.innerText = (currentLang === 'en') ? "Read more →" : "Lire la suite →"; // НОВОЕ
            readMoreBtn.style.display = 'inline-block';         // НОВОЕ
        } else {                                                // НОВОЕ
            readMoreBtn.style.display = 'none';                 // НОВОЕ
        }                                                       // НОВОЕ
    }                                                           // НОВОЕ
    // ------------------------------------------
    
    const btnNext = document.getElementById('btn-next');
    const labelAuthor = document.getElementById('label-author');
    const likeText = document.getElementById('like-text');
    if (btnNext) btnNext.innerText = (currentLang === 'en') ? "Another story 🎲" : "Autre histoire 🎲";
    if (labelAuthor) labelAuthor.innerText = (currentLang === 'en') ? "By" : "Par";
    if (likeText) likeText.innerText = (currentLang === 'en') ? "Like" : "J'aime";

    document.querySelector('.like-button').classList.remove('liked');
    
    applyAds();
    window.scrollTo(0, 0);
}
}

function applyAds() {
    const urlParams = new URLSearchParams(window.location.search);
    let cafeName = urlParams.get('place');
    
    // Если в ссылке нет кафе, принудительно ставим 'main'
    if (!cafeName || !ads[cafeName]) {
        cafeName = 'main';
    }
    
    const cafeBox = document.getElementById('cafe-ad-box');
    const adText = document.getElementById('ad-text');
    const adLink = document.getElementById('ad-link');
    const adImage = document.getElementById('ad-image');
    const contactLabel = document.getElementById('contact-label');
    const emailLink = document.getElementById('email-link');
    const myEmail = "vichylitteraire@gmail.com";
    
    if (contactLabel) contactLabel.innerText = (currentLang === 'en') ? "Contact us:" : "Pour nous contacter :";
    if (emailLink) {
        emailLink.innerText = myEmail;
        emailLink.href = "mailto:" + myEmail + "?subject=Publicité Vichy Littéraire"; 
    }

    // Теперь блок всегда будет показываться, используя либо кафе, либо 'main'
    if (cafeBox) {
        cafeBox.style.display = 'block';
        const currentAd = ads[cafeName];
        if (adText) adText.innerText = currentAd.text[currentLang];
        if (adImage && currentAd.image) adImage.src = currentAd.image;
        if (adLink) {
            adLink.href = currentAd.url || "#";
            adLink.innerText = (currentLang === 'en') ? "Learn more →" : "En savoir plus →";
        }
    }
}

window.addEventListener('load', () => {
    setTimeout(() => { window.scrollTo(0, 0); }, 600);
});

function openLegal() {
    const modal = document.getElementById('legal-modal');
    if (modal) { modal.style.display = 'block'; document.body.style.overflow = 'hidden'; }
}

function closeLegal() {
    const modal = document.getElementById('legal-modal');
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}


function sparkle(e) {
    // 1. Переключаем красный цвет кнопки
    // toggle значит: если класса нет — добавит, если есть — уберет
    e.currentTarget.classList.toggle('liked');

    // 2. Логика вылетающих сердечек
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

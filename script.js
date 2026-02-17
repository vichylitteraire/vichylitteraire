let currentLang = 'fr';
let shuffledIndices = [];
let currentIndex = 0;
let hasLikedCurrentStory = false;

// --- ДАННЫЕ РЕКЛАМЫ ДЛЯ КАФЕ ---
const ads = {
    'paul': {
        image: "logopub.jpg",
        url: "#",
        text: {
            fr: "Soutenez notre projet culturel\n\n Devenez partenaire",
            en: "Support our cultural project\n\n Become a partner"
        }
    },
    'colada': {
        image: "LOGO_S_BARA.jpg",
        url: "https://liberersesecrits.podia.com/",
        text: {
            fr: "*** \n\n Libérer ses écrits proposes des ateliers d'écriture et un accompagnement à la biographie à Vichy et en ligne",
            en: "*** \n\n Libérer ses écrits offers writing workshops and biography coaching in Vichy and online."
        },
         'patchouli': {
        image: "logopub.jpg",
        url: "#",
        text: {
            fr: "Soutenez notre projet culturel\n\n Devenez partenaire",
            en: "Soutenez notre projet culturel\n\n Devenez partenaire"
        },
        'buveur': {
        image: "logopub.jpg",
        url: "#",
        text: {
            fr: "Soutenez notre projet culturel\n\n Devenez partenaire",
            en: "Soutenez notre projet culturel\n\n Devenez partenaire"
        },
        'venus': {
        image: "logopub.jpg",
        url: "#",
        text: {
            fr: "Soutenez notre projet culturel\n\n Devenez partenaire",
            en: "Soutenez notre projet culturel\n\n Devenez partenaire"
        },
        'keks': {
        image: "logopub.jpg",
        url: "#",
        text: {
            fr: "Soutenez notre projet culturel\n\n Devenez partenaire",
            en: "Soutenez notre projet culturel\n\n Devenez partenaire"
        },
        'edouard': {
        image: "logopub.jpg",
        url: "#",
        text: {
            fr: "Soutenez notre projet culturel\n\n Devenez partenaire",
            en: "Soutenez notre projet culturel\n\n Devenez partenaire"
        }
    };

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('language-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    if (typeof STORIES_DATA === 'undefined') {
        alert("Ошибка: Файл stories.js не найден!");
        return;
    }

    const langData = STORIES_DATA[currentLang];
    shuffledIndices = [...Array(langData.stories.length).keys()].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    loadStory();
}

/* ЛОГИКА ХВОСТИКОВ ДЛЯ АНАЛИТИКИ (PLACE) И ЗАМЕНЫ РЕКЛАМЫ */
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const placeId = params.get('place'); // Теперь ищем "place"

    if (placeId) {
        // Замена контента рекламы под конкретное кафе
        if (ads[placeId]) {
            const currentAd = ads[placeId];
            const adImg = document.getElementById('ad-image');
            const adTxt = document.getElementById('ad-text');

            if (adImg) adImg.src = currentAd.image;
            if (adTxt) adTxt.innerText = currentAd.text[currentLang];
        }

        // Чтобы хвостик не пропадал при кликах на кнопки
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => {
                const url = new URL(window.location.href);
                url.searchParams.set('place', placeId);
                window.history.replaceState({}, '', url);
            });
        });
        console.log("Локация зафиксирована: " + placeId);
    }
    
    // Проверяем, когда человек доскроллил до конца
    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            ym(106821503, 'reachGoal', 'read_to_end'); 
            console.log("Дочитал до конца!");
        }
    };
});

function loadStory() {
    const langData = STORIES_DATA[currentLang];
    const storyData = langData.stories[shuffledIndices[currentIndex]];

    // Заполнение основных текстов
    document.getElementById('story-title').innerText = storyData.title || "";
    document.getElementById('story-content').innerText = storyData.text || "";
    document.getElementById('author-name').innerText = storyData.author || "";
    
    // Заполнение интерфейса (с защитой от undefined)
    document.getElementById('label-author').innerText = langData.labelAuthor || (currentLang === 'fr' ? "Par" : "By");
    document.getElementById('btn-next').innerText = langData.nextBtn || "Next";
    document.getElementById('contact-label').innerText = langData.contactLabel || "Contact:";
    
    // ПРИОРИТЕТ: Если есть спец. реклама для кафе - ставим её, если нет - берем общую из stories.js
    const params = new URLSearchParams(window.location.search);
    const placeId = params.get('place');
    if (placeId && ads[placeId]) {
        document.getElementById('ad-text').innerText = ads[placeId].text[currentLang];
    } else {
        document.getElementById('ad-text').innerText = langData.adText || "";
    }

    document.getElementById('ad-link').innerText = langData.adLink || "Info";

    // --- КНОПКА LIKE ---
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
        likeBtn.classList.remove('liked'); 
        likeBtn.innerText = langData.likeText || (currentLang === 'fr' ? "J'aime" : "Like");
        hasLikedCurrentStory = false;
    }

   const readMoreBtn = document.getElementById('read-more-btn');

    if (storyData.hasMore && storyData.buyLink) {
        readMoreBtn.style.display = 'flex';
        readMoreBtn.href = storyData.buyLink;
        readMoreBtn.target = "_blank";

        if (currentLang === 'fr') {
            readMoreBtn.textContent = "Lire la suite";
        } else {
            readMoreBtn.textContent = "Read more";
        }
    } else {
        readMoreBtn.style.display = 'none';
    }

    document.getElementById('cafe-ad-box').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    currentIndex++;
    if (currentIndex >= shuffledIndices.length) {
        shuffledIndices.sort(() => Math.random() - 0.5);
        currentIndex = 0;
    }
}

// Эффект сердечек
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'like-btn') {
        if (!hasLikedCurrentStory) {
            e.target.innerText = currentLang === 'fr' ? "Merci ! ♡" : "Thank you ! ♡";
            e.target.classList.add('liked');
            createHearts(e.target);
            hasLikedCurrentStory = true;
        }
    }
});

function createHearts(btn) {
    const rect = btn.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('span');
        heart.innerText = '♡';
        heart.className = 'heart';
        const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 40;
        const y = rect.top + window.scrollY;
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

function openLegal() { document.getElementById('legal-modal').style.display = 'flex'; }
function closeLegal() { document.getElementById('legal-modal').style.display = 'none'; }

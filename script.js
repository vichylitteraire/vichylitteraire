let currentLang = 'fr';
let shuffledIndices = [];
let currentIndex = 0;
let hasLikedCurrentStory = false;

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
    document.getElementById('ad-text').innerText = langData.adText || "";
    document.getElementById('ad-link').innerText = langData.adLink || "Info";

    // --- КНОПКА LIKE ---
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
        likeBtn.classList.remove('liked'); 
        // Если в stories.js нет likeText, пишем вручную
        likeBtn.innerText = langData.likeText || (currentLang === 'fr' ? "J'aime" : "Like");
        hasLikedCurrentStory = false;
    }

    // --- КНОПКА ЧИТАТЬ ДАЛЬШЕ ---
    const readMoreBtn = document.getElementById('read-more-btn');
    if (readMoreBtn) {
        if (storyData.hasMore) {
            readMoreBtn.innerText = langData.readMore || (currentLang === 'fr' ? "Lire la suite" : "Read more");
            readMoreBtn.style.display = 'inline-flex';
        } else {
            readMoreBtn.style.display = 'none';
        }
    }

    document.getElementById('cafe-ad-box').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    currentIndex++;
    if (currentIndex >= shuffledIndices.length) {
        shuffledIndices.sort(() => Math.random() - 0.5);
        currentIndex = 0;
    }
}

// Эффект сердечек (остается прежним)
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
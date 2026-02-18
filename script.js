// Копируй аккуратно вместе с https://
const supabaseUrl = 'https://gbpntxkkxabndhtpdaai.supabase.co'; 
const supabaseKey = 'sb_publishable_AcsuGHJH7zZd1EEcCPmN4w_m65x6omh'; 

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

let currentLang = 'fr';
let shuffledIndices = [];
let currentIndex = 0;
let hasLikedCurrentStory = false;

// --- ДАННЫЕ РЕКЛАМЫ ДЛЯ КАФЕ ---
const ads = {
    'paul': { image: "logopub.jpg", url: "#", text: { fr: "\n\n*** \n\nSoutenez notre projet culturel\n\n Devenez partenaire", en: "\n\n*** \n\nSupport our cultural project\n\n Become a partner" }, showLink: false },
    'colada': { image: "LOGO_S_BARA.jpg", url: "https://liberersesecrits.podia.com/", text: { fr: "*** \n\n Libérer ses écrits proposes des ateliers d'écriture et un accompagnement à la biographie à Vichy et en ligne", en: "*** \n\n Libérer ses écrits offers writing workshops and biography coaching in Vichy and online." }, showLink: true },
    'patchouli': { image: "logopub.jpg", url: "#", text: { fr: "\n\n*** \n\nSoutenez notre projet culturel\n\n Devenez partenaire", en: "\n\n*** \n\nSupport our cultural project\n\n Become a partner" }, showLink: false },
    'buveur': { image: "logopub.jpg", url: "#", text: { fr: "\n\n*** \n\nSoutenez notre projet culturel\n\n Devenez partenaire", en: "\n\n*** \n\nSupport our cultural project\n\n Become a partner" }, showLink: false },
    'venus': { image: "logopub.jpg", url: "#", text: { fr: "\n\n*** \n\nSoutenez notre projet culturel\n\n Devenez partenaire", en: "\n\n*** \n\nSupport our cultural project\n\n Become a partner" }, showLink: false },
    'keks': { image: "logopub.jpg", url: "#", text: { fr: "\n\n*** \n\nSoutenez notre проект culturel\n\n Devenez partenaire", en: "\n\n*** \n\nSupport our cultural project\n\n Become a partner" }, showLink: false },
    'edouard': { image: "logopub.jpg", url: "#", text: { fr: "\n\n*** \n\nSoutenez notre projet culturel\n\n Devenez partenaire", en: "\n\n*** \n\nSupport our cultural project\n\n Become a partner" }, showLink: false }
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

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const placeId = params.get('place'); 
    if (placeId && ads[placeId]) {
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => {
                const url = new URL(window.location.href);
                url.searchParams.set('place', placeId);
                window.history.replaceState({}, '', url);
            });
        });
    }
});

function checkIfAlreadyLiked(storyId) {
    const likedStories = JSON.parse(localStorage.getItem('my_likes') || '[]');
    return likedStories.includes(storyId);
}

async function fetchLikes(storyId) {
    const likeBtn = document.getElementById('like-btn');
    if (!likeBtn || !storyId) return;

    const { data } = await _supabase.from('likes').select('count').eq('story_id', storyId).single();
    const count = (data && data.count) ? data.count : 0;
    
    const countDisplay = count > 0 ? ` ${count}` : "";
    const langData = STORIES_DATA[currentLang];
    const baseText = langData.likeText || (currentLang === 'fr' ? "J'aime" : "Like");
    
    if (checkIfAlreadyLiked(storyId)) {
        likeBtn.classList.add('liked');
        hasLikedCurrentStory = true;
        const thanksText = (currentLang === 'fr' ? "Merci ! ♡" : "Thank you ! ♡");
        likeBtn.innerText = thanksText + countDisplay;
    } else {
        likeBtn.classList.remove('liked');
        hasLikedCurrentStory = false;
        likeBtn.innerText = baseText + countDisplay;
    }
}

function loadStory() {
    const langData = STORIES_DATA[currentLang];
    const storyData = langData.stories[shuffledIndices[currentIndex]];

    document.getElementById('story-title').innerText = storyData.title || "";
    document.getElementById('story-content').innerText = storyData.text || "";
    document.getElementById('author-name').innerText = storyData.author || "";
    document.getElementById('label-author').innerText = langData.labelAuthor || (currentLang === 'fr' ? "Par" : "By");
    document.getElementById('btn-next').innerText = langData.nextBtn || "Next";
    document.getElementById('contact-label').innerText = langData.contactLabel || "Contact:";
    
    const params = new URLSearchParams(window.location.search);
    const placeId = params.get('place');
    const adImg = document.getElementById('ad-image');
    const adTxt = document.getElementById('ad-text');
    const adLink = document.getElementById('ad-link');

    if (placeId && ads[placeId]) {
        const currentAd = ads[placeId];
        if (adImg) adImg.src = currentAd.image;
        if (adTxt) adTxt.innerText = currentAd.text[currentLang];
        if (adLink) {
            adLink.href = currentAd.url || "#";
            adLink.style.display = (currentAd.showLink === false) ? 'none' : 'inline-block';
        }
    } else {
        if (adTxt) adTxt.innerText = langData.adText || "";
        if (adImg) adImg.src = "logopub.jpg";
        if (adLink) adLink.style.display = 'inline-block'; 
    }
    if (adLink) adLink.innerText = langData.adLink || "Info";

    fetchLikes(storyData.id);

    const readMoreBtn = document.getElementById('read-more-btn');
    if (storyData.hasMore && storyData.buyLink) {
        readMoreBtn.style.display = 'flex';
        readMoreBtn.href = storyData.buyLink;
        readMoreBtn.target = "_blank";
        readMoreBtn.textContent = currentLang === 'fr' ? "Lire la suite" : "Read more";
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

document.addEventListener('click', async function(e) {
    if (e.target && e.target.id === 'like-btn') {
        const prevIndex = (currentIndex === 0) ? shuffledIndices.length - 1 : currentIndex - 1;
        const storyData = STORIES_DATA[currentLang].stories[shuffledIndices[prevIndex]];
        const storyId = storyData.id;

        if (!storyId) return;

        let likedStories = JSON.parse(localStorage.getItem('my_likes') || '[]');

        if (!hasLikedCurrentStory) {
            // --- СТАВИМ ЛАЙК ---
            hasLikedCurrentStory = true;
            likedStories.push(storyId);
            localStorage.setItem('my_likes', JSON.stringify(likedStories));

            const { data } = await _supabase.from('likes').select('count').eq('story_id', storyId).single();
            if (data) {
                await _supabase.from('likes').update({ count: data.count + 1 }).eq('story_id', storyId);
            } else {
                await _supabase.from('likes').insert([{ story_id: storyId, count: 1 }]);
            }
            createHearts(e.target);
        } else {
            // --- УБИРАЕМ ЛАЙК ---
            hasLikedCurrentStory = false;
            likedStories = likedStories.filter(id => id !== storyId);
            localStorage.setItem('my_likes', JSON.stringify(likedStories));

            const { data } = await _supabase.from('likes').select('count').eq('story_id', storyId).single();
            if (data && data.count > 0) {
                await _supabase.from('likes').update({ count: data.count - 1 }).eq('story_id', storyId);
            }
        }
        
        // В обоих случаях обновляем вид кнопки
        fetchLikes(storyId);
    }
});

function createHearts(btn) {
    const rect = btn.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('span');
        heart.innerText = '♡';
        heart.className = 'heart';
        heart.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 40) + 'px';
        heart.style.top = (rect.top + window.scrollY) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}
function openLegal() { document.getElementById('legal-modal').style.display = 'flex'; }
function closeLegal() { document.getElementById('legal-modal').style.display = 'none'; }

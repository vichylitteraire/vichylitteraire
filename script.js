let currentLang = 'fr';
let currentStoryIndex = 0;

// 1. РЕКЛАМНЫЙ ОБЪЕКТ
const ads = {
    'main': {
        image: "logo_publicite.jpg",
        text: { 
           fr: "❀❀❀ \n\n Vous écrivez ? Votre texte pourrait être lu ici-même, par les clients de nos cafés partenaires.\n\nPartagez votre talent avec nous ! Envoyez vos textes par email", 
           en: "❀❀❀ \n\n Do you write? Your text could be read right here by the guests of our partner cafes.\n\nShare your talent with us! Send your stories via email" 
        },
        url: "#"
    },
    'buveur': {
        image: "logo_publicite.jpg",
        text: { 
           fr: "❀❀❀ \n\n Vous écrivez ? Votre texte pourrait être lu ici-même, par les clients de nos cafés partenaires.\n\nPartagez votre talent avec nous ! Envoyez vos textes par email", 
           en: "❀❀❀ \n\n Do you write? Your text could be read right here by the guests of our partner cafes.\n\nShare your talent with us! Send your stories via email" 
        },
        url: "#"
    },
    'colada': {
        image: "logo_publicite.jpg",
        text: { 
           fr: "❀❀❀ \n\n Vous écrivez ? Votre texte pourrait être lu ici-même, par les clients de nos cafés partenaires.\n\nPartagez votre talent avec nous ! Envoyez vos textes par email", 
           en: "❀❀❀ \n\n Do you write? Your text could be read right here by the guests of our partner cafes.\n\nShare your talent with us! Send your stories via email" 
        },
        url: "#"
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
    
    const btnNext = document.getElementById('btn-next');
    const labelAuthor = document.getElementById('label-author');
    if (btnNext) btnNext.innerText = (currentLang === 'en') ? "Another story 🎲" : "Autre histoire 🎲";
    if (labelAuthor) labelAuthor.innerText = (currentLang === 'en') ? "By" : "Par";

    applyAds();
    window.scrollTo(0, 0);
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

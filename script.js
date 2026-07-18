let currentLang = 'fr';
let shuffledIndices = [];
let currentIndex = 0;

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('language-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Проверяем наличие соответствующих данных в зависимости от языка
    const langData = (currentLang === 'fr') ? typeof STORIES_DATA_FR !== 'undefined' ? STORIES_DATA_FR : null : typeof STORIES_DATA_EN !== 'undefined' ? STORIES_DATA_EN : null;

    if (!langData) {
        alert("Ошибка: Данные для выбранного языка не найдены!");
        return;
    }

    // Инициализируем индексы на основе структуры данных
    // Обратите внимание: если у вас в файле структура { fr: { stories: [...] } }, 
    // то langData.stories может быть langData.fr.stories. 
    // Я оставил langData.stories, как в вашем коде.
    shuffledIndices = [...Array(langData[currentLang].stories.length).keys()].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    loadStory();
}

function loadStory() {
    // 1. Выбираем нужный объект данных (на основе выбора языка)
    const langData = (currentLang === 'fr') ? STORIES_DATA_FR : STORIES_DATA_EN;
    
    // 2. Получаем конкретный блок текстов для выбранного языка (fr или en)
    const texts = langData[currentLang];
    
    // 3. Получаем данные текущей истории
    const storyData = texts.stories[shuffledIndices[currentIndex]];

    // 4. Заполнение основных текстов истории
    document.getElementById('story-title').innerText = storyData.title || "";
    document.getElementById('story-content').innerText = storyData.text || "";
    document.getElementById('author-name').innerText = storyData.author || "";
    
    // 5. Заполнение интерфейса (теперь всё берется из переменной texts)
    document.getElementById('label-author').innerText = texts.labelAuthor || (currentLang === 'fr' ? "Par" : "By");
    document.getElementById('btn-next').innerText = texts.nextBtn || "Next";
    document.getElementById('contact-label').innerText = texts.contactLabel || "Contact:";
    document.getElementById('ad-text').innerText = texts.adText || "";
    document.getElementById('ad-link').innerText = texts.adLink || "Info";

    // --- КНОПКА ЧИТАТЬ ДАЛЬШЕ ---
    const readMoreBtn = document.getElementById('read-more-btn');
    if (readMoreBtn) {
        if (storyData.hasMore) {
            readMoreBtn.innerText = texts.readMore || (currentLang === 'fr' ? "Lire la suite" : "Read more");
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

function openLegal() { document.getElementById('legal-modal').style.display = 'flex'; }
function closeLegal() { document.getElementById('legal-modal').style.display = 'none'; }

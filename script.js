// 1. Делаем функции глобальными, чтобы HTML-атрибуты их видели
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.querySelector('.container').classList.add('blur-background');
    }
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.querySelector('.container').classList.remove('blur-background');
    }
};

// 2. Все остальное остается внутри DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {

    // Функция управления меню
    window.toggleMenu = function() {
        const nav = document.getElementById('nav');
        if (nav) {
            nav.classList.toggle('active');
            console.log("Меню переключено");
        }
    };

    // Закрытие при клике по фону
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            document.querySelector('.container').classList.remove('blur-background');
        }
    };
});

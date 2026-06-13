document.addEventListener("DOMContentLoaded", function() {

    // 1. Функция управления меню
    window.toggleMenu = function() {
        const nav = document.getElementById('nav');
        if (nav) {
            nav.classList.toggle('active');
            console.log("Меню переключено");
        }
    };

    // 2. Функция открытия окон
    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        } else {
            console.error("Окно с ID " + id + " не найдено");
        }
    };

    // 3. Функция закрытия окон
    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    // 4. Закрытие окон при клике на фон
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});
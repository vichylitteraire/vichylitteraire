document.addEventListener("DOMContentLoaded", function() {

    // 1. Функция управления меню
    window.toggleMenu = function() {
        const nav = document.getElementById('nav');
        if (nav) {
            nav.classList.toggle('active');
            console.log("Меню переключено");
        }
    };

  function openModal(modalId) {
    // Показываем нужное окно
    document.getElementById(modalId).style.display = "block";
    
    // Добавляем размытие на основной контент сайта
    document.querySelector('.container').classList.add('blur-background');
}

function closeModal(modalId) {
    // Скрываем окно
    document.getElementById(modalId).style.display = "none";
    
    // Убираем размытие
    document.querySelector('.container').classList.remove('blur-background');
}

    // 4. Закрытие окон при клике на фон
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});

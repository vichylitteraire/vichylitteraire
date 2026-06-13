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
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.querySelector('.container').classList.add('blur-background');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.querySelector('.container').classList.remove('blur-background');
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.querySelector('.container').classList.remove('blur-background');
    }
}

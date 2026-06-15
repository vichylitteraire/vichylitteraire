

document.addEventListener("DOMContentLoaded", function(){


    const openBtn = document.getElementById("openModal");

    const closeBtn = document.getElementById("closeModal");

    const modal = document.getElementById("eventModal");



    openBtn.addEventListener("click", function(){

        modal.classList.add("active");

    });



    closeBtn.addEventListener("click", function(){

        modal.classList.remove("active");

    });



    modal.addEventListener("click", function(e){

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });



});

const atelierButtons = document.querySelectorAll(".atelier-btn");

const atelierModals = document.querySelectorAll(".atelier-modal");

const atelierClose = document.querySelectorAll(".atelier-close");



atelierButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;

        document.getElementById(modalId)
        .classList.add("active");

    });

});



atelierClose.forEach(close => {

    close.addEventListener("click", () => {

        close.closest(".atelier-modal")
        .classList.remove("active");

    });

});



atelierModals.forEach(modal => {

    modal.addEventListener("click", (e)=>{

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

});
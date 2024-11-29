export function setBurger() {

    let burger = document.querySelector('#burger');
    let [burgerLine1, burgerLine2, burgerLine3] = burger.querySelectorAll('.burger-line');
    let navMenu = document.querySelector('#nav-menu');


    function showNavMenu() {
        navMenu.classList.toggle('add-opacity');
        burgerLine1.classList.toggle('burger-open-line-first');
        burgerLine2.classList.toggle('burger-open-line-second');
        burgerLine3.classList.toggle('burger-open-line-third');
    }

    burger.addEventListener('click', showNavMenu);
}
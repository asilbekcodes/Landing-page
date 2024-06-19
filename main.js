let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});
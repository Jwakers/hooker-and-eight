export default class MobileMenu {
    constructor() {
        this.header = document.querySelector('.header');
        this.menu = document.querySelector('.nav__menu');
        this.icon = document.querySelector('.nav__menu-icon');
        this.events();
    }
    events() {
        this.icon.addEventListener('click', this.toggle.bind(this));
    }
    toggle() {
        this.header.classList.toggle('header--open');
        this.menu.classList.toggle('nav__menu--open');
        this.icon.classList.toggle('nav__menu-icon--open');
    }
}
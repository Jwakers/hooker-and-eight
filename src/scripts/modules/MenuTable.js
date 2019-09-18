export default class MenuTable {
    constructor() {
        this.buttons = document.querySelectorAll('.tab-table__menu__item');
        this.sections = document.querySelectorAll('.tab-table__section');
        this.menuItems = document.querySelectorAll('.menu-item');
        this.init();
    }
    events() {
        this.buttons.forEach(el => el.addEventListener('click', this.showMenu.bind(this)));
    }
    removeActiveClasses(els, className) {
        els.forEach(el => {
            el.classList.remove(className)
        });
    }
    removeAllActiveClasses() {
        this.removeActiveClasses(this.buttons, 'tab-table__menu__item--active');
        this.removeActiveClasses(this.sections, 'tab-table__section--active');
        this.removeActiveClasses(this.menuItems, 'menu-item--active');
    }
    gradualClassAdd(section) {
        let counter = 0;
        if (!section) {
            var items = document.querySelectorAll('.menu-item');
        } else {
            var items = section.querySelectorAll('.menu-item');
        }
        const limit = items.length;
        const interval = setInterval(() => {
            if (counter < limit) {
                items[counter].classList.add('menu-item--active');
                counter++;    
            } else {
                clearInterval(interval);
            }
        }, 100);
    }
    showMenu() {
        const sectionName = event.target.getAttribute('data-item');
        if (sectionName == 'all') return this.showAll();
        const section = document.querySelector(`.tab-table__section[data-section=${sectionName}]`);
        this.removeAllActiveClasses();
        event.target.classList.add('tab-table__menu__item--active');
        section.classList.add('tab-table__section--active');
        this.gradualClassAdd(section);
    }
    showAll() {
        console.log('Show all');
        this.removeActiveClasses(this.buttons, 'tab-table__menu__item--active');
        event.target.classList.add('tab-table__menu__item--active');
        this.sections.forEach(el => el.classList.add('tab-table__section--active'));
        this.gradualClassAdd();
    }
    init() {
        this.events();
    }
}
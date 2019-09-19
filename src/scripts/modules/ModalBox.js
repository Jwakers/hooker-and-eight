export default class ModalBox {
    constructor(elements, modalSource) {
        this.elements = document.querySelectorAll(elements);
        this.modalSource = modalSource;
        this.init();
    }
    addEvents() {
        this.elements.forEach(el => {
            el.addEventListener('click', this.openModal.bind(this))
        })
    }
    getMarkup(el) {
        console.log(this.modalSource);
        console.log(el);
        const src = el.getAttribute(this.modalSource);
        const markup = `
        <div class="modal">
        <div class="modal__close">&times;</div>
        <div class="modal__control modal__control--left"></div>
        <div class="modal__control modal__control--right"></div>
            <div class="modal__con">
                <img class="gallery__img" src="${src}" />
            </div>
        </div>
        `;
        return markup;
    }
    openModal() {
        const markup = this.getMarkup(event.currentTarget);
        console.log(markup);
        document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

        this.controlEvents();
    }
    controlEvents() {
        const modal = document.querySelector('.modal');

        modal.addEventListener('click', () => {
            if (event.target.classList.contains('modal__control--right')) {
                console.log('Right');
            } else if (event.target.classList.contains('modal__control--left')) {
                console.log('Left');
            } else if (event.target.classList.contains('modal__close')) {
                console.log('Close');
            }
        })
    }
    init () {
        this.addEvents();
    }
}
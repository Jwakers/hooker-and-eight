export default class ModalBox {
    constructor(elements, modalSource) {
        this.elements = document.querySelectorAll(elements);
        this.modalSource = modalSource;
        this.allSources = Array.from(this.elements).map(el => el.getAttribute(modalSource));
        this.allCaptions = Array.from(this.elements).map(el => el.querySelector('.gallery__caption'));
        this.currentIndex = 0;
        this.indexMax = this.allSources.length;
        this.init();
    }
    addEvents() {
        console.log(this.allSources, this.currentIndex, this.indexMax);
        this.elements.forEach(el => {
            el.addEventListener('click', this.openModal.bind(this))
        })
    }
    getMarkup(el) {
        const src = el.getAttribute(this.modalSource);
        const figCaption = el.querySelector('.gallery__caption');
        const caption = figCaption ? figCaption.innerHTML : false ;
        const markup = `
        <div class="modal">
        <div class="modal__close">&times;</div>
        <div class="modal__control modal__control--left"></div>
        <div class="modal__control modal__control--right"></div>
            <div class="modal__con">
                <img class="modal__con__img" src="${src}" />
                ${caption ? `<div class="modal__con__caption">${caption}</div>` : `` }
            </div>
        </div>
        `;
        return markup;
    }
    openModal() {
        const markup = this.getMarkup(event.currentTarget);
        document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.querySelector('.modal').classList.add('modal--active');
            });
        })
        const source = event.currentTarget.getAttribute(this.modalSource);
        this.setIndex(source)
        this.controlEvents();
    }
    setIndex(source) {
        this.currentIndex = this.allSources.findIndex(el => el === source);
    }
    controlEvents() {
        const modal = document.querySelector('.modal');
        modal.addEventListener('click', () => {
            if (event.target.classList.contains('modal__control--right')) {
                this.control('right')
            } else if (event.target.classList.contains('modal__control--left')) {
                this.control('left');
            } else {
                this.closeModal();
            }
        })
    }
    closeModal() {
      const modal = document.querySelector('.modal');
      modal.parentNode.removeChild(modal);
    }
    control(direction) {
        const modalContent = document.querySelector('.modal__con__img');
        const modalCaption = document.querySelector('.modal__con__caption');
        if (direction === 'right') {
            if (this.currentIndex < this.indexMax - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        } else if (direction === 'left') {
            if (this.currentIndex === 0) {
                this.currentIndex = this.indexMax - 1;
            } else {
                this.currentIndex--;
            }
        }
        modalContent.setAttribute('src', this.allSources[this.currentIndex]);
        modalCaption.innerHTML = this.allCaptions[this.currentIndex].innerHTML;
        console.log(this.allCaptions);
    }
    init () {
        this.addEvents();
    }
}
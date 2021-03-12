export default class ModalBox {
    constructor(elements, modalSource, renderGallery = false, imageArray = false) {
        this.elements = document.querySelectorAll(elements);
        this.modalSource = modalSource;
        this.allSources = Array.from(this.elements).map(el => el.getAttribute(modalSource));
        this.allCaptions = Array.from(this.elements).map(el => el.querySelector('.gallery__caption'));
        this.currentIndex = 0;
        this.indexMax = this.allSources.length;
        this.renderGallery = renderGallery;
        this.imageArray = imageArray;
        this.init(elements);
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

    renderGalleryMarkup() {
        const gallery = document.querySelector('.gallery');
        const paths = {
            root: 'https://res.cloudinary.com/drgquplia/image/upload/',
            mods: {
                small: 'c_fill,g_center,h_220,w_220/',
                large: 'w_900'
            },
            path: '/v1615569548/hooker-and-eight/gallery/'
        }
        let totalMarkup = '';
        this.imageArray.forEach(img => {
            const markup = `
            <div class="gallery__box" data-modal="${paths.root}${paths.mods.large}${paths.path}${img}">
                <figure>
                    <img class="gallery__img" alt="${img}" src="${paths.root}${paths.mods.small}${paths.path}${img}" />
                    <figcaption class="gallery__caption">${img}</figcaption>
                </figure>
            </div>`;
            totalMarkup+= markup;
        })
        gallery.innerHTML = totalMarkup;
    }

    init(elements) {
        console.log(this)
        if (this.renderGallery) {
            this.renderGalleryMarkup();
            this.elements = document.querySelectorAll(elements);
        }
        this.elements.forEach(el => {
            el.addEventListener('click', this.openModal.bind(this))
        })
    }
}
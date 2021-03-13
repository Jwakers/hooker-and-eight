export default class Gallery {
    constructor(imageArray = false) {
        this.gallery = document.querySelector(".gallery");
        this.modal = {
            root: document.querySelector(".modal"),
            content: document.querySelector(".modal__con"),
            img: document.querySelector(".modal__con__img"),
        };
        this.modalUI = {
            left: this.modal.root.querySelector(".modal__control--left"),
            right: this.modal.root.querySelector(".modal__control--right"),
            close: this.modal.root.querySelector(".modal__close"),
        };
        this.elements = undefined;
        this.imageArray = imageArray;
        this.currentIndex = 0;
        this.init();
    }

    setImage(el) {
        const dataSrc = el.getAttribute("data-modal");
        const alt = el.getAttribute("data-alt");
        this.modal.img.setAttribute("src", dataSrc);
        this.modal.img.setAttribute("alt", alt);

        this.showLoading();
        this.modal.img.onload = () => {
            this.hideLoading();
            this.setMaxImageHeight(this.modal.img);
        };
        this.modal.img.onerror = () => this.hideLoading();
    }

    unsetImage() {
        this.modal.img.setAttribute("src", "");
    }

    openModal(event) {
        const el = event.currentTarget;

        this.setImage(el);

        const index = el.getAttribute("data-index");
        this.currentIndex = index;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.modal.root.classList.add("modal--active");
            });
        });
    }

    closeModal() {
        this.modal.root.classList.remove("modal--active");
        const callback = () => {
            this.unsetImage();
            this.modal.root.removeEventListener("transitionend", callback);
        };
        this.modal.root.addEventListener("transitionend", callback);
    }

    renderGalleryMarkup() {
        const paths = {
            root: "https://res.cloudinary.com/drgquplia/image/upload/",
            mods: {
                small: "c_fill,g_center,h_220,w_220/",
                large: "w_900",
            },
            path: "/v1615569548/hooker-and-eight/gallery/",
        };
        let totalMarkup = "";
        this.imageArray.forEach((img, i) => {
            const alt = this.getImageAlt(img);
            console.log(alt);
            const markup = `
            <div class="gallery__box" data-modal="${paths.root}${paths.mods.large}${paths.path}${img}" data-index="${i}" data-alt="${alt}">
                <figure>
                    <img class="gallery__img" alt="${alt}" src="${paths.root}${paths.mods.small}${paths.path}${img}" />
                </figure>
            </div>`;
            totalMarkup += markup;
        });
        console.log(totalMarkup);
        this.gallery.innerHTML = totalMarkup;
    }

    getImageAlt(imageName) {
        return imageName.split("-").join(" ");
    }

    handleLeft() {
        if (this.currentIndex > 0) this.currentIndex--;
        else this.currentIndex = this.maxIndex;
        const image = this.getImageByIndex(this.currentIndex);

        this.setImage(image);
    }

    handleRight() {
        if (this.currentIndex < this.maxIndex) this.currentIndex++;
        else this.currentIndex = 0;
        const image = this.getImageByIndex(this.currentIndex);

        this.setImage(image);
    }

    getImageByIndex(index) {
        return this.gallery.querySelector(`[data-index="${index}"`);
    }

    showLoading() {
        this.modal.root.classList.add("modal--loading");
    }

    hideLoading() {
        this.modal.root.classList.remove("modal--loading");
    }

    setMaxImageHeight(image) {
        image.style.maxHeight = null;
        const height = this.modal.content.offsetHeight;
        image.style.maxHeight = `${height}px`;
    }

    init() {
        this.renderGalleryMarkup();
        this.elements = document.querySelectorAll(".gallery__box");
        this.elements.forEach((el) => {
            el.addEventListener("click", this.openModal.bind(this));
        });
        // Set max index
        this.maxIndex = this.elements.length - 1;
        this.modalUI.left.addEventListener("click", this.handleLeft.bind(this));
        this.modalUI.right.addEventListener(
            "click",
            this.handleRight.bind(this)
        );
        this.modalUI.close.addEventListener(
            "click",
            this.closeModal.bind(this)
        );
    }
}

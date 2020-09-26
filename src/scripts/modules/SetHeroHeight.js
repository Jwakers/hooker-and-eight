export default class SetHeroHeight {
    constructor() {
        this.hero = document.querySelector(".hero");
        this.innerHeight = window.innerHeight;
        this.init();
    }
    handleResize() {
        console.log(this)
        this.setHeight();
        this.innerHeight = window.innerHeight;
    }
    setHeight() {
        if (window.innerWidth >= 768) {
            this.hero.style.height = null;
        } else {
            this.hero.style.height = `${this.innerHeight}px`;
        }
    }
    init() {
        this.setHeight();
        window.addEventListener("resize", this.handleResize.bind(this));
    }
}

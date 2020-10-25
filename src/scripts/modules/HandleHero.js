export default class HandleHero {
    constructor() {
        this.hero = document.querySelector(".hero");
        this.video = this.hero.querySelector(".hero__video");
        this.innerHeight = window.innerHeight;
        this.mobileWidth = 768;
        this.videoShowing = false;
        this.init();
    }
    handleResize() {
        this.setHeight();
        this.innerHeight = window.innerHeight;
        if (window.innerWidth < this.mobileWidth && !this.videoShowing) {
            this.showHeroVideo();
        }
    }
    setHeight() {
        if (window.innerWidth >= 768) {
            this.hero.style.height = null;
        } else {
            this.hero.style.height = `${this.innerHeight}px`;
        }
    }
    showHeroVideo() {
        const source = this.video.querySelector("source");
        console.log(this.video, source.dataset.src);
        source.setAttribute("src", source.dataset.src);
        source.removeAttribute("data-src");
        try {
            this.video.load()
            this.videoShowing = true;
        } catch(err) {
            console.log(err)
        }
    }

    init() {
        this.setHeight();
        this.handleResize();
        window.addEventListener("resize", () => {
            this.handleResize();
        });
    }
}

export default class HandleHero {
    constructor() {
        this.hero = document.querySelector(".hero");
        this.video = this.hero.querySelector(".hero__video");
        this.innerHeight = window.innerHeight;
        this.mobileWidth = 576;
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
        if (window.innerWidth >= this.mobileWidth) {
            this.hero.style.height = null;
        } else {
            this.hero.style.height = `${this.innerHeight}px`;
        }
    }
    showHeroVideo() {
        const source = this.video.querySelector("source");
        source.setAttribute("src", source.dataset.src);
        source.removeAttribute("data-src");
        try {
            this.video.load()
            this.video.classList.add('hero__video--loaded');
            this.videoShowing = true;
            this.video.addEventListener("timeupdate", function() {
                if (this.currentTime > 43) this.pause()
            })
        } catch(err) {
            console.log(err)
        }
    }

    init() {
        if(!this.hero) return;
        
        this.setHeight();
        this.handleResize();
        window.addEventListener("resize", () => {
            this.handleResize();
        });
    }
}

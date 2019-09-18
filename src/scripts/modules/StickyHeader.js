export default class StickyHeader {
    constructor() {
        this.header =document.querySelector('.header');
        this.init();
    }
    throttle(callback, wait, immediate = false) {
        let timeout = null 
        let initialCall = true
        
        return function() {
          const callNow = immediate && initialCall
          const next = () => {
            callback.apply(this, arguments)
            timeout = null
          }
          
          if (callNow) { 
            initialCall = false
            next()
          }
      
          if (!timeout) {
            timeout = setTimeout(next, wait)
          }
        }
      }
    stickyHandler() {
        const callback = console.log(event);
        const header = this.header;
        window.addEventListener('scroll', this.throttle((event) => {
            if (window.pageYOffset > header.offsetHeight) {
                header.classList.add('header--reduce');
            } else {
                header.classList.remove('header--reduce');
            }
        }, 200));
    }
    init() {
        this.stickyHandler();
    }
}
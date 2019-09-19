export default class ShowOnScroll {
  constructor(elements, callback) {
    this.init()
  }

  observer() {
    const options = {
      threshold: 0.2
    }
    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show-on-scroll--showing');
            } 
        })
    }, options);
    return observer;
  }

  init() {
    const elements = document.querySelectorAll('.show-on-scroll');
    let observer = this.observer()

    elements.forEach(el => {
      observer.observe(el);
    })
  }
}
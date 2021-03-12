export default class Obfuscate {
    constructor(strArr, where, order = false) {
        this.strArr = strArr;
        this.where = document.querySelectorAll(where)
        this.order = order;

        this.init()
    }

    getOrderedString() {
        if (!this.order) {
            return this.strArr.join('')
        } else {
            const newArr = [];
            this.order.forEach(index => {
                newArr.push(this.strArr[index])
            })
            return newArr.join('');
        }
    }

    init() {
        
        Array.from(this.where).forEach(el => {
            const email = this.getOrderedString();
            el.innerHTML = `<a href="mailto:${email}">${email}</a>`;
        })
    }
}
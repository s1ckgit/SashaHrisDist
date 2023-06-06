export default class Animated {
    constructor(element) {
        this._element = element
        this._elementCoords = this._element.getBoundingClientRect().top
        this._elementAnimationClass = this._element.dataset.animation
    }

    init() {
        this._element.style.visibility = 'hidden'
        this._addEventListeners()
    }
    
    _addEventListeners() {
        window.addEventListener('scroll', () => {
            if (window.scrollY + document.documentElement.clientHeight >= this._elementCoords) {
                this._element.style.visibility = 'visible'
                this._element.classList.add(this._elementAnimationClass)
            }
        })
    }
}
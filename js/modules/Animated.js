// export default class Animated {
//     constructor(element) {
//         this._element = element
//         this._elementCoords = this._element.getBoundingClientRect().top
//         this._elementAnimationClass = this._element.dataset.animation
//     }

//     init() {
//         this._element.style.visibility = 'hidden'
//         this._addEventListeners()
//     }
    
//     _addEventListeners() {
//         window.addEventListener('scroll', () => {
//             if (window.scrollY + document.documentElement.clientHeight >= this._elementCoords) {
//                 this._element.style.visibility = 'visible'
//                 this._element.classList.add(this._elementAnimationClass)
//             }
//         })
//     }
// }

export default class AnimatedElements {
    constructor(elementsClass) {
        this._elements = document.querySelectorAll(elementsClass)
        this._elementsObj = {}
        for (let i = 0; i < this._elements.length; i++) {
            this._elementsObj[i] = [this._elements[i], this._elements[i].getBoundingClientRect().top + window.scrollY, this._elements[i].dataset.animation]
        }
    }

    init() {
        this._elements.forEach(element => {
            element.style.visibility = 'hidden'
        })
        this._addEventListener()
    }
    
    _addEventListener() {
        window.addEventListener('scroll', () => {
            for (let key in this._elementsObj) {
                if (window.scrollY + document.documentElement.clientHeight >= this._elementsObj[key][1]) {
                    this._elementsObj[key][0].style.visibility = 'visible'
                    this._elementsObj[key][0].classList.add(this._elementsObj[key][2])
                }
            }
            
        })
    }
}
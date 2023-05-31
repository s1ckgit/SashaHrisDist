function makeAnimationWork(element) {
    const elementStyles = getComputedStyle(element),
        elementDisplay = getComputedStyle(element).display,
        elementCoords = element.getBoundingClientRect().top,
        elementAnimationClass = element.dataset.animation
        blankDiv = document.createElement('div')

    blankDiv.style.height = elementStyles.height
    blankDiv.style.width = elementStyles.width;
    element.parentElement.replaceChild(blankDiv, element)

    setTimeout(() => {
        element.style.display = 'none'
    })

    addEventListenerForAnimations(element, blankDiv, elementDisplay, elementCoords, elementAnimationClass)
}

function addEventListenerForAnimations(element, blankDiv, elementDisplay, elementCoords, animationClass) {
    window.addEventListener('scroll', () => {
        if (window.scrollY + document.documentElement.clientHeight >= elementCoords) {
            element.style.display = elementDisplay
            element.classList.add(animationClass)
            try {
                blankDiv.parentElement.replaceChild(element, blankDiv)
            } catch(e){}
        }
    })
}


document.querySelectorAll('.animate__animated').forEach(item => {
    makeAnimationWork(item)
})
window.addEventListener('DOMContentLoaded', () => {
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

    window.scrollBy(0, 1)
    
    // Timer 

    let timerStarted = false
    
    const timer = (id, deadline) => {
        timerStarted = true
        const addZero = (num) => {
            if(num <= 9) return `0${num}`
            else return num
        }
    
        const getTimeRemaining = (endtime) => {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000 * 60 * 60)) % 24),
                days = Math.floor((t/(1000 * 60 * 60 * 24)))
            
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
                
        }
    
        const setClock = (selector, endtime) => {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000)
    
            updateClock()
    
            function updateClock() {
                const t = getTimeRemaining(endtime)
    
                days.textContent = addZero(t.days)
                hours.textContent = addZero(t.hours)
                minutes.textContent = addZero(t.minutes)
                seconds.textContent = addZero(t.seconds)
    
                if(t.total <= 0) {
                    days.textContent = '00'
                    hours.textContent = '00'
                    minutes.textContent = '00'
                    seconds.textContent = '00'
    
                    clearInterval(timeInterval)
                }
            }
        }
    
        setClock(id, deadline)
    }
    
    window.addEventListener('scroll', () => {
        if(document.getElementById('timer') && !timerStarted) {
            timer('#timer', '2023-08-05')
        }
    })
    
})
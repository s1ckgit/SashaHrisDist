import Animated from "./modules/Animated.js"
import Timer from "./modules/Timer.js"

window.addEventListener('DOMContentLoaded', () => {
    new Timer({
        timerSelector: '#timer',
        endtime: '2023-08-06',
        daysSelector: '#days',
        hoursSelector: '#hours',
        minutesSelector: '#minutes',
        secondsSelector: '#seconds'
    }).setClock()

    document.querySelectorAll('.animate__animated').forEach(item => {
        new Animated(item).init()
    })

    window.scrollBy(0, 1)
})
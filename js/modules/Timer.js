export default class Timer {
    constructor({timerSelector, endtime, daysSelector, minutesSelector, hoursSelector, secondsSelector}) {
        this._timer = document.querySelector(timerSelector)
        this._endtime = endtime
        this._days = this._timer.querySelector(daysSelector)
        this._hours = this._timer.querySelector(hoursSelector)
        this._minutes = this._timer.querySelector(minutesSelector)
        this._seconds = this._timer.querySelector(secondsSelector)
    }

    setClock() {
        this._timeInterval = setInterval(() => {
            this._updateClock()
        }, 1000)

        this._updateClock()
    }

    _addZero(num) {
        if(num <= 9) return `0${num}`
        else return num
    }

    _getTimeRemaining() {
        const t = Date.parse(this._endtime) - Date.parse(new Date()),
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

    _updateClock() {
        const t = this._getTimeRemaining()

        this._days.textContent = this._addZero(t.days)
        this._hours.textContent = this._addZero(t.hours)
        this._minutes.textContent = this._addZero(t.minutes)
        this._seconds.textContent = this._addZero(t.seconds)

        if(t.total <= 0) {
            this._days.textContent = '00'
            this._hours.textContent = '00'
            this._minutes.textContent = '00'
            this._seconds.textContent = '00'

            clearInterval(this._timeInterval)
        }
    }
}

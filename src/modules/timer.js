const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000

    let days = Math.floor(timeRemaining / 60 / 60 / 24)
    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return {timeRemaining, days, hours, minutes, seconds}
  }

    const updateClock = () => {
      let getTime = getTimeRemaining()

      const getZero = (num) => {
        if (num <= 9) {
          return '0' + num
        } else {
          return num
        }
      }

 timerDays.textContent = getZero(getTime.days)
 timerHours.textContent = getZero(getTime.hours)
 timerMinutes.textContent = getZero(getTime.minutes)
 timerSeconds.textContent = getZero(getTime.seconds)

 

}

const runTimer = () => {
  let getTime = getTimeRemaining()

  if (getTime.timeRemaining > 0) {
    setInterval(updateClock, 1000)
  }
}

 runTimer()

}




export default timer
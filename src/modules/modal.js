const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')


  
const addOpacity = () => {

  let elementStyle = 0
  let timeInterval

  const blurElement = () => {
    if (elementStyle < 1) {
      elementStyle += 0.05
      modal.style.opacity = elementStyle
    } else clearInterval(timeInterval)
  }

  timeInterval = setInterval(blurElement, 50)
}



  buttons.forEach(btn => {
   btn.addEventListener('click', () => {
     modal.style.opacity = "0"
     modal.style.display = 'block'

     if (document.documentElement.offsetWidth >= 738) {
       addOpacity()
     } else {
       modal.style.opacity = "1"
     }
  })
})

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none'
    }
      
  })

}

export default modal




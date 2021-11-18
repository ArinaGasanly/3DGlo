const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')

const addOpacity = () => {
  for (let styleOpacity = 0; ; i++) {
    modal.style.opacity = styleOpacity
    if (styleOpacity == 10) 
    clearInterval(timeInterval)
  } 
}



  buttons.forEach(btn => {
   btn.addEventListener('click', () => {
     modal.style.opacity = "0"
     modal.style.display = 'block'
     if (document.documentElement.offsetWidth >= 738) {
       addOpacity()
     } else {
       modal.style.opacity = "10"
     }
  })
})

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })

}

export default modal




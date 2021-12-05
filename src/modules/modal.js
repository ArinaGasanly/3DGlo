import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')


  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.opacity = "0"
      modal.style.display = 'block'

      if (document.documentElement.offsetWidth >= 738) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress * 1
          }
  })
      } else {
        modal.style.opacity = "1"
      }
    })
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.closest('.popup-close')) {
      modal.style.display = 'none'
    }
  })
}

export default modal



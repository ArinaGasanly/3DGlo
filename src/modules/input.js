
const inputCheck = () => {
  const calculator = document.querySelectorAll('.calc-block')
  const inputName = document.querySelectorAll('.form-name')
  const inputEmail = document.querySelectorAll('.form-email')
  const inputPhone = document.querySelectorAll('.form-phone')

calculator.forEach(value => {
  value.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/\D+/g, '')
  })
})

  inputName.forEach(value => {
    value.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^[а-яё\s-]/gi, '')
    })
  })

  inputEmail.forEach(value => {
    value.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^[a-zA-Z_@.!~*' \-]*/g, '')
    })
  })

  inputPhone.forEach(value => {
    value.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^[0-9()-]*/g, '')
    })
  })


}

export default inputCheck
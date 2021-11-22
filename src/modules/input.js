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
      e.target.value = e.target.value.replace(/[a-яА-Я]\s/gi, '')
    })
  })

  inputEmail.forEach(value => {
    value.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[a-zA-z]\S/gi, '')
    })
  })

  inputPhone.forEach(value => {
    value.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/^\d$/g, '')
    })
  })


}

export default inputCheck
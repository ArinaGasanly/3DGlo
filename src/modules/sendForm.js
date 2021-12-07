const sendForm = ({formId, someElem = []}) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо! Наш менеджер с вами свяжется!'

  const validate = (list) => {
    let userPhone = true
    let userName = true
    let userMessage = true
    

    list.forEach(value => {
      if (value.name === 'user_phone') {
        let check = /[\d\+]/gi
        userPhone = check.test(value.value)
      
    } else if (value.name === 'user_name') {
        let check = /[а-яё\s]/gi
        userName = check.test(value.value)

    } else if (value.name === 'user_message') {
        let check = /[а-я\d\s!?,.;:]/gi
        userMessage = check.test(value.value)
    }
  })
  
    return userPhone && userName && userMessage
}



  const sendData = (data) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers : {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
}



  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    form.append(statusBlock)

    formData.forEach((value, key) => {
      formBody[key] = value
    })

    someElem.forEach(value => {
      const element = document.getElementById(value.id)

      if (value.type === 'block') {
        formBody[value.id] = element.textContent
      } else if (value.type === 'input') {
        formBody[value.id] = element.value
      }
    })

   

    if (validate(formElements)) {
      sendData(formBody).
        then(data => {
          statusBlock.textContent = successText

          formElements.forEach(input => {
            input.value = ''
          })
    }).catch(error => {
      statusBlock.textContent = errorText
      console.log(error)
    })
    } else alert('Данные не валидны!')
  }
  try {

     if(!form) {
    throw new Error('Верните фориу на место, пожалуйста')
  }
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      submitForm()
})

} catch(error) {
  console.log(error.message)
}

}

export default sendForm

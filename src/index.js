import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import inputCheck from './modules/input'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('22 november 2021')
menu()
modal()
inputCheck()
tabs()
slider()
calc()
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'

    }
  ] 
})

import { Modal } from "./modal.js"
import {AlertError} from './alert-error.js'
import {IMC, notNumber} from './utils.js'
// variaveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Fechar a janela de error ao digitar no campo

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


/* 3 maneiras de criar e atrtibuir função a um evento
form.onsubmit = () => {}
form.onsubmit = handleSubmit  -  essa função não existe, então eu crio ela embaixo.
function handleSubmit() {}*/

form.onsubmit = event => {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
AlertError.open()
    return;
  }

  AlertError.close()

  
  
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()
}






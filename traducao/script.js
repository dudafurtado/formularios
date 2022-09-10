const formulario = document.querySelector('form')
const traducao = document.querySelector('#traducao')

formulario.addEventListener('submit', (event) => {
    if (!traducao.value) {
        event.preventDefault()
    }
})
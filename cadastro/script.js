const senhasDiferentes = document.querySelectorAll('span')
const senha1 = document.querySelector('#senha')
const senha2 = document.querySelector('#senha-dnv')
const formulario = document.querySelector('form')

formulario.addEventListener('submit', (event) => {
    if (senha1.value !== senha2.value) {
        event.preventDefault()
        senhasDiferentes.forEach(input => {
            input = input.style.display = 'flex'
        })
    }
})
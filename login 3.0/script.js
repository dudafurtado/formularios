const letras = 'abcdefghijklmnopqrstuvwxyz'.split('')
const numeros = '0123456789'.split('')

const inputSenha = document.querySelector('#senha')

inputSenha.addEventListener('change', function () {
    const senha = inputSenha.value
    let temLetra = false
    let temNumero = false

    for (let d = 0; d < senha.length; d++) {
        if (letras.includes(senha[d])) {
            temLetra = true
            continue
        }

        if (numeros.includes(senha[d])) {
            temNumero = true
            continue
        }
    }

    if (temLetra && temNumero) {
        console.log('Senha Válida')
    }
})
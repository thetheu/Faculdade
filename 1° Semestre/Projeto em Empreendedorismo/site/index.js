let nome = document.getElementById("nome")
let erroNome = document.getElementById("erroNome")
let sobrenome = document.getElementById('sobrenome')
let erroSobrenome = document.getElementById("erroSobrenome")
let email = document.getElementById('email')
let erroEmail = document.getElementById("erroEmail")
let numeroCelular = document.getElementById('numeroCelular')
let erroNumeroCelular = document.getElementById("erroNumeroCelular")

function enviar(event) {

    if(nome.value) {
        console.log(nome.value)
        erroNome.classList.remove("show")
        erroNome.classList.add("not-show")

    }
    else {
        console.log(erroNome)
        erroNome.classList.remove("not-show")
        erroNome.classList.add("show")
    }

    if(sobrenome.value) {
        console.log(sobrenome.value)
        erroSobrenome.classList.remove("show")
        erroSobrenome.classList.add("not-show")
    }
    else {
        console.log(erroSobrenome)
        erroSobrenome.classList.remove("not-show")
        erroSobrenome.classList.add("show")
    }

    if(email.value) {
        console.log(email.value)
        erroEmail.classList.remove("show")
        erroEmail.classList.add("not-show")
    }
    else {
        console.log(erroEmail)
        erroEmail.classList.remove("not-show")
        erroEmail.classList.add("show")
    }

    if(numeroCelular.value) {
        console.log(numeroCelular.value)
        erroNumeroCelular.classList.remove("show")
        erroNumeroCelular.classList.add("not-show")
    }
    else {
        console.log(erroNumeroCelular)
        erroNumeroCelular.classList.remove("not-show")
        erroNumeroCelular.classList.add("show")
    }



}

let email = document.getElementById("email")
let erroEmail = document.getElementById("erroEmail")
let senha = document.getElementById('senha')
let erroSenha = document.getElementById("erroSenha")

function enviar(event) {

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

    if(senha.value) {
        console.log(senha.value)
        erroSenha.classList.remove("show")
        erroSenha.classList.add("not-show")
    }
    else {
        console.log(erroSenha)
        erroSenha.classList.remove("not-show")
        erroSenha.classList.add("show")
    }

}

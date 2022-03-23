let nome = document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false
let emailOk = false
let AssuntoOk = false

nome.style.width = '80%';
email.style.width = '80%';

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3){
        txtNome.innerHTML = 'Nome inválido!';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green';
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'E-mail invalido!'
    txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Correto!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'insira apenas 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display ='none'
        AssuntoOk = true
    }
}

function enviarForm(){
    if(nomeOk == true && emailOk == true && AssuntoOk == true){
    alert('Formulario enviado com sucesso!')
    } else {
        alert('Preencha o formulario corretamente antes de enviar...')
    }
}
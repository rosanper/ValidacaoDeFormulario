let form = document.getElementById('form')
let mensagem = document.getElementById('mensagem')

function identificarCampoEmBranco(texto){
    if (texto.length === 0 || texto === "") return true
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let usuario = form.usuario.value.trim()
    let senha = form.senha.value.trim()

    console.log(usuario)

    if (identificarCampoEmBranco(usuario) && identificarCampoEmBranco(senha)){
        mensagem.textContent = 'Os campos de usuário e senha estão vazios'
        mensagem.style.color = 'red'
    } else if (identificarCampoEmBranco(usuario)){
        mensagem.textContent = 'O campo usuário está vazio'
        mensagem.style.color = 'red'
    } else if (identificarCampoEmBranco(senha)){
        mensagem.textContent = 'O campo senha está vazio'
        mensagem.style.color = 'red'
    } else if (usuario === 'admin' && senha === '123456'){
        mensagem.textContent = 'Login realizado com sucesso'
        mensagem.style.color = 'green'
        window.location.href = 'home.html'
    } else {
        mensagem.textContent = 'Usuário ou senha estão incorretos'
        mensagem.style.color = 'red'
    }

})
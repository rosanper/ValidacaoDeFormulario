let form = document.getElementById('form')
let mensagem = document.getElementById('mensagem')

function exibirPopUp(mensagem){
    alert(mensagem)
}

function identificarCampoEmBranco(texto){
    if (texto.length === 0 || texto === "") return true
}

function validarValorPositivo(valor) {
    if (valor<0) return false
    return true
}


form.addEventListener('submit', function(e) {
    e.preventDefault()

    let statusOk = true
    let preco = form.preco.value
    let nome = form.nome.value.trim()
    let descricao = form.descricao.value.trim()

    if (identificarCampoEmBranco(nome)){
        mensagem.textContent = 'O produto precisa de um nome'
        mensagem.style.color = 'red'
        statusOk = false
    } 

    if (!validarValorPositivo(preco)){
        mensagem.textContent = 'O preço do produto deve ser maior que 0'
        mensagem.style.color = 'red'
        statusOk = false
    }

    if (identificarCampoEmBranco(descricao)){
        mensagem.textContent = 'O produto precisa de um nome'
        mensagem.style.color = 'red'
        statusOk = false
    } 

    if (statusOk){
        exibirPopUp("Cadastro realizado com sucesso!")
        form.reset()
        mensagem.textContent = ""
    } 

})
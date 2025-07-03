let form = document.getElementById('form')
let mensagem = document.getElementById('mensagem')

function exibirPopUp(mensagem){
    alert(mensagem)
}

function identificarCampoEmBranco(texto){
    if (texto.length === 0 || texto === "") return true
}

function validarCpf(strCPF) {
    let Soma;
    let Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function validarCaractereEspecial(senha){
    if (senha.includes('!') || senha.includes('@') || senha.includes('#') || senha.includes('$') || senha.includes('&') || senha.includes('*')) {
        return true
    } else {
        return false
    }
}

function validarCaractereNumerico(senha){
    return /\d/.test(senha)
}

function validarTamanhoSenha(senha){
    return senha.length >= 6;
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let statusOk = true
    let nome = form['primeiro-nome'].value.trim()
    let sobrenome = form.sobrenome.value.trim()
    let usuario = form.usuario.value.trim()
    let senha = form.senha.value.trim()
    let senhaConfirmacao = form['senha-confirmacao'].value.trim()
    let cpf = form.cpf.value.trim()

    let dataNascimento = new Date(form['data-nascimento'].value)
    let hoje = new Date()

    console.log(senha)

    let limiteDataNascimento = new Date(
        hoje.getFullYear() - 16,
        hoje.getMonth(),
        hoje.getDate()
    )


    if (identificarCampoEmBranco(nome)){
        mensagem.textContent = 'O campo de Primeiro Nome está em branco'
        mensagem.style.color = 'red'
        statusOk = false
    }
    
    if (identificarCampoEmBranco(sobrenome)){
        mensagem.textContent = 'O campo de Sobrenome está em branco'
        mensagem.style.color = 'red'
        statusOk = false
    } 

    if (identificarCampoEmBranco(usuario) && identificarCampoEmBranco(senha)){
        mensagem.textContent = 'Os campos de usuário e senha estão vazios'
        mensagem.style.color = 'red'
        statusOk = false
    } else if (identificarCampoEmBranco(usuario)){
        mensagem.textContent = 'O campo usuário está vazio'
        mensagem.style.color = 'red'
        statusOk = false
    } else if (identificarCampoEmBranco(senha)){
        mensagem.textContent = 'O campo senha está vazio'
        mensagem.style.color = 'red'
        statusOk = false
    } 

    if (!validarCpf(cpf)){
        mensagem.textContent = 'CPF inválido!'
        mensagem.style.color = 'red'
        statusOk = false
    }

    if (dataNascimento > limiteDataNascimento) {
        mensagem.textContent = 'Idade inválida: é necessário ter pelo menos 16 anos.';
        mensagem.style.color = 'red';
        statusOk = false
    } 

    if (!validarCaractereEspecial(senha)){
        mensagem.textContent = 'Senha inválido! Ela precisa ter um desses caracteres especiais: !,@,#,$,&,*'
        mensagem.style.color = 'red'
        statusOk = false
    }

    if (!validarCaractereNumerico(senha)){
        mensagem.textContent = 'Senha inválido! Ela precisa ter um caractere numérico'
        mensagem.style.color = 'red'
        statusOk = false
    }

    if (!validarTamanhoSenha(senha)){
        mensagem.textContent = 'Senha inválido! Ela precisa ter pelo menos 6 caracteres'
        mensagem.style.color = 'red'
        statusOk = false
    }

    if (senha !== senhaConfirmacao){
        mensagem.textContent = 'A senha e a confirmação da senha estão diferente'
        mensagem.style.color = 'red'
        statusOk = false
    }

    if (statusOk){
        exibirPopUp("Cadastro realizado com sucesso!")
        form.reset()
        mensagem.textContent = ""
    } 

})

# Validação de Formulários em Tempo Real - AVA 3 (Unijorge)

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este repositório contém o projeto da **AVA 3** do curso de **Análise e Desenvolvimento de Sistemas** da **Unijorge - Salvador/BA**. O objetivo principal é desenvolver um site com **validações em tempo real** para formulários de login, cadastro de usuário e cadastro de produto, simulando o comportamento de grandes sites de e-commerce e redes sociais.

## 🚀 Funcionalidades Implementadas

### 🔐 Página de Login
- Validação de preenchimento dos campos de **usuário** e **senha**.
- Acesso permitido apenas com as credenciais:
  - Usuário: `admin`
  - Senha: `123456`
- Exibe mensagens de erro caso os dados estejam incorretos ou em branco.
- Redireciona para a página **Home** após login bem-sucedido.

### 🏠 Página Home
- Serve como hub de navegação entre as páginas:
  - Cadastrar Usuário
  - Cadastrar Produto
  - Sair (volta para a tela de login)

### 👤 Página de Cadastro de Usuário
- Validações em tempo real nos campos:
  - **Primeiro nome** e **sobrenome**: obrigatórios
  - **CPF**: somente números
  - **Data de nascimento**: o usuário deve ter pelo menos 16 anos
  - **E-mail**: formato válido
  - **Usuário**: não pode estar em branco
  - **Senha**:
    - Pelo menos 6 caracteres
    - Pelo menos um número
    - Pelo menos um caractere especial: `! @ # $ & *`
  - **Confirmação de senha**: deve ser igual à senha
- Em caso de sucesso, o formulário é resetado com mensagem de confirmação.
- Em caso de erro, o feedback informando o problema é exibido ao usuário.

### 📦 Página de Cadastro de Produto
- Validações nos seguintes campos:
  - **Nome**: obrigatório
  - **Descrição**: obrigatória
  - **Preço**: deve ser maior que zero
- Exibe mensagens de sucesso ou erro conforme o caso.

## 📁 Estrutura do Projeto

```
AVA3/
├── css/
│   ├── cadastrarProduto.css
│   ├── cadastrarUsuario.css
│   ├── home.css
│   └── login.css
├── img/
│   ├── LogoLoja.png
│   ├── LogoTecnologia.png
│   ├── LogoTecnologia2.png
│   └── Usuario.png
├── js/
│   ├── cadastrarProduto.js
│   ├── cadastrarUsuario.js
│   └── login.js
├── cadastrarProduto.html
├── cadastrarUsuario.html
├── home.html
└── login.html
```

## 🧠 Objetivo Acadêmico

Este projeto tem como propósito:
- Aprimorar habilidades com **HTML, CSS e JavaScript**.
- Compreender a importância de validações no lado do cliente.
- Desenvolver aplicações web com feedback em tempo real.
- Publicar projetos em ambiente online acessível para testes e demonstrações.

## 📚 Curso

**Curso:** Análise e Desenvolvimento de Sistemas  
**Instituição:** Unijorge - Salvador/BA  
**Disciplina:** Desenvolvimento Front-End I  
**Atividade:** AVA 3  

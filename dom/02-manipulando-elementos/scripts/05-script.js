const elemento = document.querySelector('h1');

//concatenar uma mensagem ao elemento existente
elemento.textContent += "Bem vindo ao site";

//troca mensagem do elemento
elemento.textContent = "Bem vindo ao site, cadastre-se";

console.log(elemento);
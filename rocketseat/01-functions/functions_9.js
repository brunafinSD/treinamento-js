/*
function constructor
expressão new
cria um novo objeto
this keyword
*/

console.log("functions_9.js: ")

function Person() {} //declara função construtora com letra maiuscula
const mike = new Person(); // mike é um objeto de Person - instanciando um novo objeto
console.log(mike); //vai exibir Person{}


//exemplo:

function Carro(modelo, portas){//aqui nos parâmetros indica o que ela vai receber
    this.modelo = modelo; //o this referencia o objeto // ex.: this.modelo se refere ao modelo do objeto celta passado no parametro
    this.portas = portas;
    this.acelerar = function(){
        return this.modelo + ' está acelerando...';
    }
}

const celta = new Carro("Basico", 2);
console.log(celta);
celta.modelo = "Completo"
console.log(celta);
console.log(celta.acelerar());

const corsa = new Carro("classic", 4);
console.log(corsa);

//outras funções construtoras:
let nome = new String('Bruna');
console.log(nome);

let date = new Date('2021-04-30');
console.log(date);



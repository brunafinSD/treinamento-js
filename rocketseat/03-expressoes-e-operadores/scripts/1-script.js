//criar um novo objeto


let nome = new String('Bruna');

let idade = new Number(24);

let date = new Date('2021-04-30');

console.log(nome);
console.log(idade);

//atribuindo sobrenome ao objeto
nome.sobrenome = 'Nunes';

console.log(nome);
console.log(nome.sobrenome);

console.log(date);
console.log(date.__proto__);//acessando as propriedades disponíveis para data
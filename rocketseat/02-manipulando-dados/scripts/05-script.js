let number = 1000000.243545353; //define um número quebrado
console.log(number); //imprime o npumero no console
console.log(typeof number) //imprime tipo do número (aqui está retornando number)

let numberToFixed = number.toFixed(2) // uma nova variável recebe o toFixed para fixar 2 casas depois da virgula
console.log(numberToFixed); //imprime o valor no console
console.log(typeof numberToFixed); //percebo que o toFixed transforma o number para string

console.log(numberToFixed.replace('.', ',')); //replace faz a troca de uma coisa por outra 

let numberRevert = Number(numberToFixed); //converte de volta para número
console.log(numberRevert); //imprime valor no console
console.log(typeof numberRevert); //checa o typeof do elemento (agora number novamente)

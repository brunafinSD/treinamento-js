//Quantos caracteres tem uma palavra e quantos digitos tem um número

//usa-se o .length
let palavra = "paralelepipedo"
console.log(palavra.length);


//o .length não funciona para números diretamente
let numero = 12345
console.log(numero.length);
console.log(String(numero).length); //numeros não recebem o método length, então é preciso converter para string antes
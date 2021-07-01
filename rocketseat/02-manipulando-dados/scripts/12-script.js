
let frutas = ['banana', 'morango', 'kiwi', 'laranja', 'melancia', 'manga'];
console.log(frutas);

//adicionar um item no fim
frutas.push('jabuticaba');
console.log(frutas);

//adicionar um item no começo
frutas.unshift('amora');
console.log(frutas);

//remover do fim
frutas.pop();
console.log(frutas);

//remover do começo
frutas.shift();
console.log(frutas);

//pegar somente partes do array
console.log(frutas.slice(1,2)); //a partir da posição um até a posição 2 (vai retornar só a posição 1)

//remover um ou mais items em qualquer posição do array (quero remover kiwi)
frutas.splice(2,1); //a partir da posição 2 remover 1 elemento
console.log(frutas);

//encontrar posição de determinado elemento
let indexFruta = frutas.indexOf('laranja');
console.log(indexFruta);

//removendo elementro especifico através do index acima
frutas.splice(indexFruta, 1);
console.log(frutas);

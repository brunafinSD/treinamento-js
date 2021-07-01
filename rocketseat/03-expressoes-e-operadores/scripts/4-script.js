//if else de um jeito diferente

let idade = 18
const verificaPermissao = idade >= 18 ? 'entrada permitida' : 'entrada proibida';
console.log(verificaPermissao);


const pao = true;
const queijo = true;
const cafeTop = pao && queijo ? 'que delicia' : 'acho que ta faltando algo';
console.log(cafeTop);
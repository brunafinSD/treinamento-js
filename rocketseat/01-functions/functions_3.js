//toda função sempre retorna alguma coisa!!
//quando a função não tem a palavra return ela retorna undefined

console.log("functions_3.js: (importante ver o código)")
const sum = function(x,y){
    total =  x + y; //declaração sem nenhum operador (var, let, const) - GERA PROBLEMAS
    return total;
}

let x=7;
let y=8;

console.log(`o número 1 é ${x}`);
console.log(`o número 2 é ${y}`);
console.log(`A soma é ${sum(x,y)}`);
console.log(total); // é possível pegar a variável total que está dentro da função nesse caso, vira escopo global

//SEMPRE USAR CONST OU LET - SEM NADA NUNCAAA!!!!
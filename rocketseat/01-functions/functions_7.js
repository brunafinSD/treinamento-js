// arrow funcion (mesmo tipo da funtion expression só que mais compacta)

console.log("functions_7.js: ")
const functionExpression = function(){
    console.log('aqui uma função normal (function expression)');
}
functionExpression();

const arrowFunction = () => {
    console.log(' aqui uma arrow function');
}

arrowFunction();

const arrowFunctionComParametros = (nome) => {
    console.log(`uma função que recebe o nome: ${nome}`);
}

arrowFunctionComParametros('Bruna');
// let expressao = '';

// switch (expressao) {
//     case 'a':
//         console.log('entrei no a');
//         break;
//     case 'b':
//         console.log('entrei no b');
//         break;
//     default:
//         console.log('não encontrei');
//         break;
// }

function calcular(num1, operador, num2) {
    let resultado = 0;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;

        default:
            console.log('a calculadora não tem essa função');
            break;
    }
    return resultado;
}

console.log(calcular(10, '+', 2)); 
console.log(calcular(20, '-', 2)); 
console.log(calcular(30, '*', 2)); 
console.log(calcular(40, '/', 2));
console.log(calcular(40, '%', 2)); 

console.log('desafio 1');

function verificaNota(nota) {
    let A = nota >= 90 && nota <= 100;
    let B = nota >= 80 && nota <= 89;
    let C = nota >= 70 && nota <= 79;
    let D = nota >= 60 && nota <= 69;
    let F = nota < 60 && nota >= 0;
    let notaFinal;
    if (A) {
        notaFinal = 'A';
    } else if (B) {
        notaFinal = 'B'
    } else if (C) {
        notaFinal = 'C'
    } else if (D) {
        notaFinal = 'D'
    } else if (F) {
        notaFinal = 'F'
    } else {
        notaFinal = 'nota inválida';
    }
    return notaFinal;
}

//Chamar a função passando nota em número como parâmetro

console.log('nota: 100, precisa ser A! resultado: ' + verificaNota(100));
console.log('nota: 90, precisa ser A! resultado: ' + verificaNota(90));
console.log('nota: 89, precisa ser B! resultado: ' + verificaNota(89));
console.log('nota: 80, precisa ser B! resultado: ' + verificaNota(80));
console.log('nota: 79, precisa ser C! resultado: ' + verificaNota(79));
console.log('nota: 70, precisa ser C! resultado: ' + verificaNota(70));
console.log('nota: 69, precisa ser D! resultado: ' + verificaNota(69));
console.log('nota: 60, precisa ser D! resultado: ' + verificaNota(60));
console.log('nota: 59, precisa ser F! resultado: ' + verificaNota(59));



// function scope

// toda função que não tem retorno é undefined

// a variável criada fora da função e passada como argumento, se for atualizada dentro da função passa a ter outro valor somente dentro da função
console.log("functions_5.js: ");

let subject = 'create video';

function createThink(subject){
    subject = 'study'
    return subject;
}

console.log(subject);
console.log(createThink(subject));
console.log(subject);
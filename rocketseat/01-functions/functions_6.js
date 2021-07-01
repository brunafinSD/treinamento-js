// function hoisting

console.log("functions_6.js: ");
//desta forma sofre o hoisting (elevação)
sayMyName();

function sayMyName(){
    console.log('Bruna');
}

//
//desta forma não sofre o hoisting (elevação)
sayMyLastName();

const sayMyLastName = function(){ //função anônima
    console.log('Fraga')
}

//desta forma não sofre o hoisting também, porém foi nomeada a função anônima
sayMyFirstName();

const sayMyFirstName = function sayMyFirstName(){ //função anônima
    console.log('Bruna')
}
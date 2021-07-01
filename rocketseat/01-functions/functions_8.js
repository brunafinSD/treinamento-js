// callback function

//callback significa chamar de volta

//é uma função que está passando como parâmetro para outra função

console.log("functions_8.js: ")

function escrevaAlgo(valor){
    console.log(valor);
}

//pode-se passar qualquer tipo de dado
escrevaAlgo('alguma coisa');//string
escrevaAlgo(1); //number
escrevaAlgo({name: 'Bruna'}); //object
escrevaAlgo([1,2,3,'teste']); //array
escrevaAlgo(
    () => {
        console.log('estou em uma callback')// função
    }
)

//exemplo:
function escrevaOutraCoisa(funcao){
    funcao(); //aqui executa a função de callback (que foi passada por parâmetro)
}

escrevaOutraCoisa(
    () => console.log('sou uma função de callback e entrei aqui no log')
);
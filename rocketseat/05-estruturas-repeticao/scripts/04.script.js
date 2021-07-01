let pessoa = {
    nome: 'Bruna',
    idade: 24,
    peso: 49.8
}

//criar loop para pegar cada propriedade

for(let propriedade in pessoa){
    console.log(propriedade);
    //console.log(pessoa["nome"]);
    console.log(pessoa[propriedade]);
    //console.log(pessoa.nome);
}
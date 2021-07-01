//throw: significa disparar/lançar

//try: tentar
//catch: pegar

//função que não pode receber um nome vazio
function cadastro(nome = '') {
    if (nome === '') {
        throw new Error ("o nome é obrigatório");
        //throw 'Nome não pode ser vazio';
    }
    console.log('Bom dia ' + nome);
}

try {
    //cadastro('Bruna');
    cadastro();
} catch (e) {
    console.log(e);
}

console.log('depois do erro, Fora')

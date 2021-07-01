// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
// despesas: []
// receitas: []

// Crie uma função que irá calcular o total de receitas e despesas
// e irá mostrar uma mensagem se a família está com saldo positivo ou negativo
// seguido do valor do saldo

let familia = {
    receitas: [1200.90, 50],
    despesas: [350, 129, 54.90],
}
function soma(array) {
    let total = 0;
    for (let valor of array) {
        total += valor;
    }
    return total;
}
function calcularFinancas() {
    const calculoDespesas = soma(familia.despesas);
    const calculoReceitas = soma(familia.receitas);

    const total = calculoReceitas - calculoDespesas;
    
    const positivo = total >= 0;

    let mensagem = "negativo";

    if (positivo) {
        mensagem = "positivo";
    }
    console.log(`Seu saldo é ${mensagem}: total: R$${total.toFixed(2)}`);
}

calcularFinancas();
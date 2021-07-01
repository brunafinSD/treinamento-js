//função que transforma graus Celsius em Fahrenheit
function transformaTemperatura(grau) {
    const celsiusExiste = grau.toUpperCase().includes('C');
    const fahrenhheitExiste = grau.toUpperCase().includes('F');
    //fluxo de erro
    if (!celsiusExiste && !fahrenhheitExiste) {
        throw new Error('Grau não identificado');
    }
    //fluxo feliz: transformar F em C
    let grauConvertido = Number(grau.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let grauSinal = 'C';
    //fluxo alternativo
    if (celsiusExiste) {
        grauConvertido = Number(grau.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32; 
        grauSinal = 'F';
    }
    return formula(grauConvertido) + grauSinal;
}
try {
    console.log(transformaTemperatura('50F'));
    console.log(transformaTemperatura('10C'));
    transformaTemperatura('50Z');
} catch (error) {
    // console.log(error);
    console.log(error.message);
}

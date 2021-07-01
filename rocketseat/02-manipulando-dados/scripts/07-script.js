//Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array.
//Despois disso transforme o array em um texto e onde eram os espaços coloque _

let frase = 'Dias de luta dias de glória!';
console.log(frase);
let array = frase.split(" "); //split separa o texto em espaços ou em qualquer outra ocorrência que queremos

console.log(array);

let fraseOriginal = array.join(" ");//join junta o array com o separador que queremos
console.log(fraseOriginal);

let fraseEmUnderline = array.join("_");
console.log(fraseEmUnderline);
console.log(fraseEmUnderline.toLowerCase());



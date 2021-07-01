for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let frutas = ['banana', 'laranja', 'morango', 'uva'];
for (let i = 0; i <= frutas.length - 1; i++) {
    console.log(frutas[i]);
}

for (let i = 100; i > 0; i--) {
    if(i === 50){
        break;
    }
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    if(i === 5){
        continue;
    }
    console.log(i);
}


/*
if(condicao){
    bloco de codigo...
}else{
    bloco de codigo...
}
*/

// let temperatura = 37.2;
// if(temperatura >= 37.5){
//     console.log('está com febre, CUIDADO! pode ser covid-19');
// }else if(temperatura < 37.5 && temperatura >= 37){
//     console.log('febre moderada, melhor ficar por casa hoje');
// }else{
//     console.log('pode ir trabalhar tranquilo');
// }

let temperatura = 39;
let febreAlta = temperatura >= 37.5
let febreModerada = temperatura < 37.5 && temperatura >= 37

if(febreAlta){
    console.log('está com febre, CUIDADO! pode ser covid-19');
}else if(febreModerada){
    console.log('febre moderada, melhor ficar por casa hoje');
}else{
    console.log('pode ir trabalhar tranquilo');
}


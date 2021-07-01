//são considerados falsy
console.log(false ? 'verdadeiro' : 'falso'); 
console.log(0 ? 'verdadeiro' : 'falso'); //type coersion transforma 0 em false
console.log(-0 ? 'verdadeiro' : 'falso'); 
console.log("" ? 'verdadeiro' : 'falso'); 
console.log(null ? 'verdadeiro' : 'falso'); 
console.log(undefined ? 'verdadeiro' : 'falso'); 
console.log(NaN ? 'verdadeiro' : 'falso'); 

//são considerados truthy
console.log(true ? 'verdadeiro' : 'falso'); 
console.log({} ? 'verdadeiro' : 'falso');
console.log([] ? 'verdadeiro' : 'falso'); 
console.log(1 ? 'verdadeiro' : 'falso'); 
console.log(3.23 ? 'verdadeiro' : 'falso'); 
console.log("0" ? 'verdadeiro' : 'falso'); 
console.log("false" ? 'verdadeiro' : 'falso'); 
console.log(-1 ? 'verdadeiro' : 'falso'); 
console.log(Infinity ? 'verdadeiro' : 'falso'); 
console.log(-Infinity ? 'verdadeiro' : 'falso'); 
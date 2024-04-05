import {ArrayNums,PI, sumar, restar, multiplicar, dividir} from './modules/matematica.js';

console.log(ArrayNums)
console.log(`El array de numeros esta compuesto por '${ArrayNums}'`);

let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); 
total = sumar(numero1, numero2); 
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);

total = restar(numero1, numero2); 
console.log(`restar(${numero1}, ${numero2}) = ${total}`);

total = multiplicar(numero1, numero2); 
console.log(`multiplicar(${numero1}, ${numero2}) = ${total}`);

total = dividir(numero1, numero2); 
console.log(`dividir(${numero1}, ${numero2}) = ${total}`);

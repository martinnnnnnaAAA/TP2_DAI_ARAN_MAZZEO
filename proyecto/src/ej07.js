import { getCurrencyAbbreviation } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'UK';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda (codPais) {
    let monedaPais = getCurrencyAbbreviation(codPais);
if (monedaPais  == undefined) {
    return null
    
}
return monedaPais

}
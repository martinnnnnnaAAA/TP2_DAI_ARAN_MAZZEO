let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
// console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);


function concatInvert(texto1, texto2) {
    let returnValue = "";
    let textoConcated = texto1 + texto2;
    let textoArray = textoConcated.split('');
    let aux;
    for (var i = 0; i < textoArray.length / 2; i++) { 
        aux = textoArray[i];
        textoArray[i] = textoArray[textoArray.length - 1 - i];
        textoArray[textoArray.length - 1 - i] = aux;
    }
    returnValue = textoArray.join(''); 
    return returnValue;
}

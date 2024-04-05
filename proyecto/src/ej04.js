import fs from 'fs';
const ARCHIVO_ENTRADA = "../archivo-entrada.txt";
const ARCHIVO_SALIDA = "../archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
const contenidoArchivoOrigen = fs.readFileSync(origen, 'utf-8')
fs.writeFileSync(destino, contenidoArchivoOrigen)
}

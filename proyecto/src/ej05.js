let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
let urlObjeto = new URL(laURL)
let parametros = {};
parametros.host = urlObjeto.origin;
parametros.ruta = urlObjeto.pathname;
parametros.parametros = Object.fromEntries(urlObjeto.searchParams.entries());
return parametros;
}

let miUrl = null;
let miObjeto = null;
miUrl = 'a';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL){
    let parametros = {};
    try{
let urlObjeto = new URL(laURL)
parametros.host = urlObjeto.origin;
parametros.ruta = urlObjeto.pathname;
parametros.parametros = Object.fromEntries(urlObjeto.searchParams.entries());
return parametros;
} catch (error){
    console.error(error);
return "Objeto: " + parametros;
}

}




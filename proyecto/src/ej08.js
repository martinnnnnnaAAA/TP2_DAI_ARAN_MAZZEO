console.clear();
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/wrapper.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
let buscarPorPagina = await OMDBSearchByPage("cars",1);
let buscarTodo = await OMDBSearchComplete("cars");
let buscarPorID = await OMDBGetByImdbID("tt0455326");
console.log (buscarPorPagina)
console.log (buscarTodo);
console.log (buscarPorID);

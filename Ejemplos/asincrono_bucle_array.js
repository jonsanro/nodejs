'use strict';

const async = require('async');

console.log('Empiezo');

//Función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callBack) {
    setTimeout(() => {
        console.log(texto);
        callBack(null, 55);
    }, 2000);
}

//Bucle asíncrono en serie
//Llamara  a una función en serio con una colección (Asíncrona)
function serie(arr, funcionQueHayQueLlamar, callBackFinalizacion) {
    if (arr.length == 0) {
        callBackFinalizacion();
        return;
    }
    funcionQueHayQueLlamar('Texto' + arr.shift(), () => {
        //Cuando termine de esperar los 2 segundos
        serie(arr, funcionQueHayQueLlamar, callBackFinalizacion);
    })

}

//Ejecuta escribetras2segundos cinco veces y cuando termines llamas el callback
/*serie([1, 2, 'tres', 4, 5], escribeTras2Segundos, () => {
    console.log('Fin')
})*/

async.concatSeries([1, 2, 'tres', 4, 5], escribeTras2Segundos, (err, resultados) => {
    if (err) {
        console.log('Hubo un error ', err);
    }
    console.log('Fin');
})
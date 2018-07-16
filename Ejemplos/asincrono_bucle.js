'use strict';

console.log('Empiezo')

//Función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callBack) {
    setTimeout(() => {
        console.log(texto)
        callBack()
    }, 2000);
}

//Bucle asíncrono en serie
//Llamara  a una función n veces en series (Asíncrona)
function serie(n, funcionQueHayQueLlamar, callBackFinalizacion) {
    if (n == 0) {
        callBackFinalizacion()
        return
    }
    n = n - 1;
    funcionQueHayQueLlamar('Texto' + n, () => {
        //Cuando termine de esperar los 2 segundos
        serie(n, funcionQueHayQueLlamar, callBackFinalizacion)
    })

}

//Ejecuta escribetras2segundos cinco veces y cuando termines llamas el callback
serie(5, escribeTras2Segundos, () => {
    console.log('Fin')
})
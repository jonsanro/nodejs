'use strict';

console.log('Empiezo')

//Función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callBack) {
    setTimeout(() => {
        console.log(texto)
        callBack()
    }, 2000);

}

escribeTras2Segundos('texto1', () => {
    escribeTras2Segundos('texto2', () => {
        console.log('Fin')
    })
})
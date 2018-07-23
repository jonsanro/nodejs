'use strict';

//Funciones que devuelven promesas
function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
        //reject('zz');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ajo');
        //reject(new Error('fatal'));
    });
}

//Forma reducida de escribir una promesa como la de arriba
async function conMasAjo(plato) {
    //Si aquí lanzo una excepción, hará reject con la excepción
    return plato + ' ajo';
}

function con(plato, ingrediente) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingrediente);
    });
}


//Encadenar la ejecución de las funciones
const paella = 'Paella con ';

//Para usar await tiene que ser dentro de una función con async
//IIFE (Inmediatelly Invoked Funcion Expression)
(async() => {
    //Puedo usar await
    let plato = await conArroz(paella);
    plato = await conAjo(plato);
    for (let index = 0; index < 100; index++) {
        plato = await conMasAjo(plato);

    }

    plato = await con(plato, 'pollo');
    console.log(plato);
})().catch(err => console.error('Hubo un error', err));
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

conArroz(paella)
    .then(conAjo)
    .then(conMasAjo)
    .then(plato => con(plato, 'marisco'))
    .then(plato => console.log(plato))
    .catch(err => {
        console.log('Hubo un error ', err);
    });
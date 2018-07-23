'use strict';

//Función que retorna promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(56);
            //reject(new Error('fatal'));
        }, ms);
    });
}

const promesa = sleep(0);

console.log(promesa);

promesa.then(valor => { //Cuando se resuelva, ejecuta esta función
        console.log('La promesa se completó con ', valor);
        //Aunque pongamos el . then a una promesa completada también se ejecuta
        promesa.then(() => { console.log('Otro then') })
    }).catch((err) => { //En caso de que haga reject se ejecuta esta función
        console.log('Promesa rechazada', err)
    }).then(() => { console.log('Lo siguiente') })
    .catch((err) => {
        console.log('Falló otra vez');
    });
'use strict';

//Constructor de objetos
function Coche(ruedas) {
    this.ruedas = ruedas;

    this.cuantasRuedas = function() {
        //El uso de this en métodos depende de cómo se use el método
        console.log('tiene', this.ruedas, 'ruedas');
    }
}

const todoterreno = new Coche(4);

todoterreno.cuantasRuedas();

//Con .bind asigno un this permanente a la función
setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000)

const numRuedas = todoterreno.cuantasRuedas.bind(todoterreno);
// si no hay nada a la izquierda del punto de ejecución, this será undefined
numRuedas();
'use strict';

//Definimos una función constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;
    /*  this.saluda = function() {
         console.log('Hola, me llamo ', this.nombre)
     } */
}

//Construir un objeto
const luis = new Persona('Luis');

Persona.prototype.saluda = function() {
    console.log('Hola, me llamo ', this.nombre)
}
luis.saluda();


//Herencia de persona -------------------------------
function Agente(nombre) {
    //Ejecutar el constructor de Persona con mi propio this
    Persona.call(this, nombre);
}


//Heredar propiedades y métodos
Agente.prototype = new Persona('Soy un prototipo')

const smith = new Agente('Smith')

smith.saluda();


//Herencia múltiple

function SuperHeroe() {
    this.vuela = function() {
        console.log(this.nombre, ` vuela.`)
    }
    this.esquivaBalas = function() {
        console.log(this.nombre, ` esquiva balas.`)
    }
}

//Los agentes van a heredar tanto de las personas como de los superheroes
Agente.prototype = Object.assign(Agente.prototype, new SuperHeroe())

smith.esquivaBalas();
smith.vuela();
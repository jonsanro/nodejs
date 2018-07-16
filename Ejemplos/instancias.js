'use strict';

//Crear una función como constructor de objetos
function Fruta(nombre) {
    //Usamos this para poner cosas al objeto que estamos creando
    this.nombre = nombre;

    this.setNomnbre = function(valor) {
        this.nombre = valor;
    }
}

//Utilizamos el constructor para crear un objeto
const limon = new Fruta('Limón')
console.log(limon)
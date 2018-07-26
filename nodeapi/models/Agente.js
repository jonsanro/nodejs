'use strict';
const mongoose = require('mongoose');

//Definir un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

//Crear un modelo con ese esquema
const Agente = mongoose.model('Agente', agenteSchema);

//Y aunque no haga falta, lo exportamos

module.exports = Agente;
'use strict';

const mongoose = require('mongoose');

const conn = mongoose.connection;
//Se puede trabajar también directamente con mongoose.connection

conn.on('error', err => {
    console.error('error de conexion', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB en', conn.name);
});

mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING, { useNewUrlParser: true });

module.exports = conn;
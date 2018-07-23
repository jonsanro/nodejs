'use strict';

//Cargamos el driver
const mysql = require('mysql');

//Crear la conexión
const conexion = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

//Conectar
conexion.connect((err) => {
    if (err) {
        console.log('Error de conexión', err);
        process.exit(1);
    }
});

//Lanzar consulta
conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
    if (err) {
        console.log('Hubo un error', err);
        process.exit(1);
    }
    console.log(rows);
});
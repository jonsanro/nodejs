'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Función que averigua la versión de un modulo instalado localmente
 * @param {string} nombreModulo
 * @param {function} callback
 */

function versionModulo(nombreModulo, callback) {
    //Calcular ruta package.json
    const fichero = path.join(__dirname, './node_modules', nombreModulo, 'package.json')

    //Leer contenido de package.json
    fs.readFile(fichero, (err, datos) => {
        if (err) {
            callback(err); //Devolver el error
            //!Si ha llamado el callback no queremos que siga ejecutando el resto
            return; //Evitar que siga la ejecución
        }

        //Parsear contenido
        let packageJson;
        try {
            packageJson = JSON.parse(datos);
        } catch (err) {
            callback(err); //Devolver el error
            //!Si ha llamado el callback no queremos que siga ejecutando el resto
            return; //Evitar que siga la ejecución
        }


        //Obtener la versión y devolverla
        callback(null, packageJson.version)

    });


}

versionModulo('chance', (err, version) => {
    //error first
    if (err) {
        console.error('Hubo un error: ', err);
        process.exit(1);
    }
    console.log('La versión del módulo es: ', version)
});
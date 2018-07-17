'use strict';

const EventEmitter = require('events');

//!Creamos un emisor de evento
const emisor = new EventEmitter()

//!Suscribirnos a eventos
emisor.on('llamada telefono', (options) => {
        if (options.nombre === 'madre') {
            return
        }
        console.log('ring, ring')
    })
    //Solo se ejecuta en la prinera
emisor.once('llamada telefono', () => {
    console.log('brr, brr')
})

//!Emitir eventos
emisor.emit('llamada telefono', { nombre: 'madre' })
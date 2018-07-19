var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //La vista se renderiza (calcula) EN EL SERVIDOR
    res.render('index', { title: 'Express' });
});

router.get('/otrapagina', function(req, res, next) {
    //?En un middleware podemos responder  
    //res.send('ok');
    //?O llamar a next
    next(new Error('No permitido'));

})

router.get('/paramenruta/:dato', (req, res, next) => {
    const dato = req.params.dato;
    res.send('ok, recibido dato: ' + dato)
});

router.get('/params/:id([0-9]+/piso/:piso/puerta/:puerta)', (req, res, next) => {

    const id = req.params.dato;
    res.send('ok, recibido dato: ' + dato)
});

module.exports = router;
var express = require('express');
var router = express.Router();

const { query, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', function(req, res, next) {

    const segundo = (new Date()).getSeconds();

    res.locals.valor = '<script>alert("Bienvenid@ a la página de anuncios de Jon")</script>';

    //La vista se renderiza (calcula) EN EL SERVIDOR
    res.render('index', {
        condicion: {
            segundo,
            //!Es igual que segundo: segundo,
            par: segundo % 2 === 0
        },
        users: [
            { name: 'Smith', age: 20 },
            { name: 'Thomas', age: 37 },
            { name: 'Jones', age: 18 }
        ]
    });
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


router.get('/enquerystring', [ //Validations
    query('talla').isNumeric().withMessage('Debe ser numérico')
], (req, res, next) => {
    //http://localhost:3000/enquerystring/?color=rojo&talla=M
    console.log(req.query);
    validationResult(req).throw(); //Pasa los errores de validación a next(err)

    //Si la ejecución llega aquí, es que todos los parámetros son válidos
    res.send('ok');
});

router.post('/enelbody', (req, res, next) => {
    console.log('req.body', req.body);
    res.send('ok');
});

module.exports = router;
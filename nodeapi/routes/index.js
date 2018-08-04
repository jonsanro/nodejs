var express = require('express');
var router = express.Router();
const axios = require('axios');
const Anuncio = require('../models/Anuncio');

const { query, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', async(req, res, next) => {
    try {
        // recuperar datos de entrada
        const name = req.query.name;
        const sell = req.query.sell;
        const price = req.query.price;
        const photo = req.query.photo;
        const tag = req.query.tag;
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);
        const fields = req.query.fields;
        const sort = req.query.sort;

        // crear el filtro vacio
        const filtro = {};

        if (name) {
            filtro.name = name;
        }

        if (sell) {
            filtro.sell = sell;
        }

        if (price) {
            filtro.price = price;
        }

        if (photo) {
            filtro.photo = photo;
        }

        if (tag) {
            filtro.tag = tag;
        }

        const anuncios = await Anuncio.listar(filtro, limit, skip, fields, sort);


        res.render('index', {
            anuncios
        });
        // si await falla, lanza una excepción --> throw new Exception()
        res.json({ success: true, result: anuncios });
    } catch (err) {
        next(err);
    }
});
//La vista se renderiza (calcula) EN EL SERVIDOR
module.exports = router;
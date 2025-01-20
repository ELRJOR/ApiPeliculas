const express = require('express');
const router = express.Router();
const controller = require('../controllers/peliculasController');

router.get('/', controller.getPeliculas);
router.get('/:id', controller.getPelicula);
router.post('/', controller.createPelicula);
router.put('/:id', controller.updatePelicula);
router.delete('/:id', controller.deletePelicula);

module.exports = router;

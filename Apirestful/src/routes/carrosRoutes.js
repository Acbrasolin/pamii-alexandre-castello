const express = require('express');
const router = express.Router();
const carrosController = require('../controllers/carrosController');

router.get('/', carrosController.listarCarros);
router.post('/', carrosController.criarCarro);
router.get('/:id', carrosController.buscarCarro);
router.put('/:id', carrosController.atualizarCarro);
router.delete('/:id', carrosController.deletarCarro);

module.exports = router;
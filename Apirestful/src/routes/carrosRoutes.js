const express = require('express');
const router = express.Router();
const carrosController = require('../controllers/carrosController');

// Rota para listar todos os carros (GET /carros)
router.get('/', carrosController.listarCarros);

// Rota para cadastrar um novo carro (POST /carros)
router.post('/', carrosController.criarCarro);

// Rota para buscar um carro específico pelo ID (GET /carros/:id)
router.get('/:id', carrosController.buscarCarro);

// Rota para atualizar os dados de um carro (PUT /carros/:id)
router.put('/:id', carrosController.atualizarCarro);

// Rota para deletar um carro pelo ID (DELETE /carros/:id)
router.delete('/:id', carrosController.deletarCarro);

module.exports = router;
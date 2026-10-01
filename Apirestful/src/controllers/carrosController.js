const db = require('../config/db');
const { validarCarro } = require('../validators/carrosValidator');

/**
 * Lista todos os carros cadastrados no banco de dados.
 */
async function listarCarros(req, res) {
  const [carros] = await db.query('SELECT * FROM carros');
  res.json(carros);
}

/**
 * Busca um carro específico pelo ID informado nos parâmetros da rota.
 */
async function buscarCarro(req, res) {
  const id = req.params.id;
  const [linhas] = await db.query('SELECT * FROM carros WHERE id = ?', [id]);

  if (linhas.length === 0) {
    return res.status(404).json({ erro: 'Carro não encontrado' });
  }

  res.json(linhas[0]);
}

/**
 * Valida e cadastra um novo carro no banco de dados.
 */
async function criarCarro(req, res) {
  const erros = validarCarro(req.body);
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  const { modelo, marca, categoria, ano, preco } = req.body;

  const [resultado] = await db.query(
    'INSERT INTO carros (modelo, marca, categoria, ano, preco) VALUES (?, ?, ?, ?, ?)',
    [modelo, marca, categoria, ano, preco]
  );

  res.status(201).json({
    id: resultado.insertId,
    modelo,
    marca,
    categoria,
    ano,
    preco,
  });
}

/**
 * Atualiza os dados de um carro existente com base no ID.
 */
async function atualizarCarro(req, res) {
  const id = req.params.id;

  const erros = validarCarro(req.body);
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  const { modelo, marca, categoria, ano, preco } = req.body;

  const [resultado] = await db.query(
    'UPDATE carros SET modelo = ?, marca = ?, categoria = ?, ano = ?, preco = ? WHERE id = ?',
    [modelo, marca, categoria, ano, preco, id]
  );

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ erro: 'Carro não encontrado' });
  }

  res.json({ id, modelo, marca, categoria, ano, preco });
}

/**
 * Remove um carro do banco de dados pelo ID.
 */
async function deletarCarro(req, res) {
  const id = req.params.id;

  const [resultado] = await db.query('DELETE FROM carros WHERE id = ?', [id]);

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ erro: 'Carro não encontrado' });
  }

  res.status(204).send();
}

module.exports = { listarCarros, buscarCarro, criarCarro, atualizarCarro, deletarCarro };
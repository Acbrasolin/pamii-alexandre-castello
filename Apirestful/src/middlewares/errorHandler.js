function rotaNaoEncontrada(req, res) {
  res.status(404).json({ erro: 'Rota não encontrada' });
}

function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ erro: 'JSON inválido no corpo da requisição' });
  }

  res.status(500).json({ erro: 'Erro interno do servidor' });
}

module.exports = { rotaNaoEncontrada, errorHandler };

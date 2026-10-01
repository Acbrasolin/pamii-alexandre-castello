/**
 * Middleware para lidar com requisições feitas a rotas que não existem (404).
 */
function rotaNaoEncontrada(req, res) {
  res.status(404).json({ erro: 'Rota não encontrada' });
}

/**
 * Middleware global de tratamento de erros da aplicação.
 */
function errorHandler(err, req, res, next) {
  console.error(err);

  // Trata erro caso o corpo da requisição contenha um JSON malformado
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ erro: 'JSON inválido no corpo da requisição' });
  }

  // Erro genérico do servidor (500)
  res.status(500).json({ erro: 'Erro interno do servidor' });
}

module.exports = { rotaNaoEncontrada, errorHandler };
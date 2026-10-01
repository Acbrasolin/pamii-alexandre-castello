// Lista de categorias permitidas para os carros
const CATEGORIAS = ['Sedan', 'SUV', 'Hatch', 'Picapes', 'Esportivo'];

/**
 * Valida os dados de entrada de um carro (modelo, marca, categoria, ano e preço).
 * @param {Object} dados - Corpo da requisição enviado pelo cliente.
 * @returns {Array} - Retorna um array com as mensagens de erro encontradas.
 */
function validarCarro(dados = {}) {
  const { modelo, marca, categoria, ano, preco } = dados;
  const erros = [];

  // Validação do campo 'modelo'
  if (typeof modelo !== 'string' || modelo.trim() === '') {
    erros.push('O modelo é obrigatório');
  } else if (modelo.length > 150) {
    erros.push('O modelo deve ter no máximo 150 caracteres');
  }

  // Validação do campo 'marca'
  if (marca !== undefined && typeof marca !== 'string') {
    erros.push('A marca deve ser um texto');
  }

  // Validação do campo 'categoria' com base nas opções permitidas
  if (categoria !== undefined && (!CATEGORIAS.includes(categoria))) {
    erros.push('A categoria deve ser uma das opções válidas: ' + CATEGORIAS.join(', '));
  }

  // Validação do campo 'ano'
  if (ano !== undefined && (!Number.isInteger(ano) || ano < 1886)) {
    erros.push('O ano deve ser um número inteiro válido');
  }

  // Validação do campo 'preco'
  if (preco !== undefined && (typeof preco !== 'number' || preco < 0)) {
    erros.push('O preço deve ser um número não negativo');
  }

  return erros;
}

module.exports = { validarCarro };
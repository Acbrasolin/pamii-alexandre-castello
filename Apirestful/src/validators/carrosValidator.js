const CATEGORIAS = ['Sedan', 'SUV', 'Hatch', 'Picapes', 'Esportivo'];

function validarCarro(dados = {}) {
  const { modelo, marca, categoria, ano, preco } = dados;
  const erros = [];

  if (typeof modelo !== 'string' || modelo.trim() === '') {
    erros.push('O modelo é obrigatório');
  } else if (modelo.length > 150) {
    erros.push('O modelo deve ter no máximo 150 caracteres');
  }

  if (marca !== undefined && typeof marca !== 'string') {
    erros.push('A marca deve ser um texto');
  }

  if (categoria !== undefined && (!CATEGORIAS.includes(categoria))) {
    erros.push('A categoria deve ser uma das opções válidas: ' + CATEGORIAS.join(', '));
  }

  if (ano !== undefined && (!Number.isInteger(ano) || ano < 1886)) {
    erros.push('O ano deve ser um número inteiro válido');
  }

  if (preco !== undefined && (typeof preco !== 'number' || preco < 0)) {
    erros.push('O preço deve ser um número não negativo');
  }

  return erros;
}

module.exports = { validarCarro };
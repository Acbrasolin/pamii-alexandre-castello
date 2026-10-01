// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();
const express = require('express');
const carrosRoutes = require('./routes/carrosRoutes');
const { rotaNaoEncontrada, errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middleware para interpretar requisições com corpo em JSON
app.use(express.json());

// Rota raiz para verificação de status da API
app.get('/', (req, res) => {
  res.json({ message: 'API de Carros funcionando!' });
});

// Registro das rotas específicas de carros sob o prefixo /carros
app.use('/carros', carrosRoutes);

// Middlewares de tratamento de erros (Rota não encontrada e Erro Interno)
app.use(rotaNaoEncontrada);
app.use(errorHandler);

// Inicialização do servidor na porta definida no .env ou padrão 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
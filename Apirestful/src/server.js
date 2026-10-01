require('dotenv').config();
const express = require('express');
const carrosRoutes = require('./routes/carrosRoutes');
const { rotaNaoEncontrada, errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API de Carros funcionando!' });
});

app.use('/carros', carrosRoutes);

app.use(rotaNaoEncontrada);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
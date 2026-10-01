const mysql = require('mysql2/promise');

// Criação do pool de conexões utilizando as variáveis de ambiente
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Exporta o pool para ser utilizado nos controllers
module.exports = pool;
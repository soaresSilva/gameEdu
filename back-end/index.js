// Importa os módulos necessários
const express = require('express');
const cors = require('cors');
const perguntas = require('./perguntas.json');

// Cria uma instância do Express
const app = express();

// Configura CORS para permitir requisições de outros domínios (como seu front-end)
app.use(cors());

// Define a porta (Render usará a variável de ambiente PORT automaticamente)
const PORT = process.env.PORT || 3000;

// Rota de teste
app.get('/', (req, res) => {
  res.send('Quiz API está rodando! ✅');
});

// Rota para retornar as perguntas
app.get('/perguntas', (req, res) => {
  res.json(perguntas);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
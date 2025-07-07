const express = require('express');
const cors = require('cors');
const perguntas = require('./perguntas.json');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('API do Quiz está funcionando');
});

app.get('/perguntas', (req, res) => {
  res.json(perguntas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
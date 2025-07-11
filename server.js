const express = require('express');
const cors = require('cors');
const path = require('path');
const perguntas = require('./perguntas.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Permite requisições de outros domínios
app.use(cors());

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota de teste
app.get('/api', (req, res) => {
  res.send('Quiz API está rodando! ✅');
});

// Rota para enviar as perguntas
app.get('/perguntas', (req, res) => {
  res.json(perguntas);
});

// Rota para o HTML principal (caso vá direto na barra)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

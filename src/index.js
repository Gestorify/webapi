// src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API com Express funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
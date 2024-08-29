// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Inclua as rotas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Inicialize o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

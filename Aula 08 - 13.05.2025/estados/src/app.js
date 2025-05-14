const estadoController = require('./controllers/estadoController');
const express = require('express');
const app = express();

app.use(express.json());
require('dotenv').config();
const port = process.env.PORTA;

app.get('/', estadoController.teste);

app.get('/estados', estadoController.listarTodos);

app.get('/estados/:sigla', estadoController.listarPorSigla); 

app.listen( port, () => {
    console.log(`Srevidor rodando em http://localhost:${port}`);
})
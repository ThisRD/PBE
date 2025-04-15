// Imposrtação de dependências para o projeto
const express = require('express');
const bodyParser = require('body-parser');
const relatorioController = require('./controllers/relatorioController');

// configurações iniciais
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extend: false }));

// rotas da aplicação 
// app.[verbo http](rota, função callback)
app.get('/', relatorioController.getAllUsers);
app.post('/relatorio/pdf', relatorioController.generatePDF);
app.post('/relatorio/add', relatorioController.addUser);

// inicia o servidor na porta 2000
app.listen(2000, () => {
    console.log('servidor iniciado:');
    console.log('http://localhost:2000')
})


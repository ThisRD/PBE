// Imposrtação de dependências para o projeto
const express = require('express');
const bodyParser = require('body-parser');
const relatorioController = require('./controllers/relatorioController');
const userController = require('./controllers/userController');
const path = require('path');


// configurações iniciais
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extend: false }));
app.use(express.static(path.join(__dirname, 'public')));


// rotas da aplicação 
// app.[verbo http](rota, função callback)
app.get('/', userController.userLogin);
app.post('/', userController.userLogin);
app.get('/index', userController.getAllUsers);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', userController.addUser);
app.get('/edit/:id', userController.getUserById);
app.post('/edit/:id', userController.updateUser);
app.get('/dell/:id', userController.getdeleteByUser);
app.post('/dell/:id', userController.deleteUser);
app.get('/relatorio/pdf', relatorioController.getAllProducts);
app.post('/relatorio/pdf', relatorioController.generatePDF);
app.post('/relatorio/add', relatorioController.addProduct);

// inicia o servidor na porta 2000
app.listen(2000, () => {
    console.log('servidor iniciado:');
    console.log('http://localhost:2000')
})


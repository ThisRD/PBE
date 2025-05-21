const ProductsController = require('./controllers/ProductsController');
const UserController = require('./controllers/UserController');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// configuração do express, engine e body-parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();
const port = process.env.PORTA;

// rotas
app.get('/', UserController.userLogin);
app.post('/', UserController.userLogin);

app.get('/index', ProductsController.getAllProducts);

app.get('/add', (req,res) => res.render('add'));
app.post('/add', ProductsController.addProduct);

app.get('/cadastro', (req,res) => res.render('cadastro'));
app.post('/cadastro', UserController.userCadastro);

app.get('/edit/:id', ProductsController.getProductById);
app.post('/edit/:id', ProductsController.updateProduct);

app.get('/dell/:id', ProductsController.getdeleteByProduct);
app.post('/dell/:id', ProductsController.deleteProduct);

// link
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})
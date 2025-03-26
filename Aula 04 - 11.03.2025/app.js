const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const port = 2000;
const app = express();

// Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Midleware para parsing do body
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.get('/index', userController.getAllUsers);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', userController.addUser);
app.get('/edit/:id', userController.getUserById);
app.post('/edit/:id', userController.updateUser);
app.get('/dell/:id', userController.getdeleteByUser);
app.post('/dell/:id', userController.deleteUser);
app.get('/', userController.userLogin);
app.post('/', userController.userLogin);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
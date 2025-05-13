const tarefaController = require('./controllers/tarefaController');
const express = require('express');
const app = express();


app.use(express.json());
require('dotenv').config();
const port = process.env.PORTA;

app.get('/', tarefaController.teste);

app.get('/tarefas', tarefaController.listarTodas);

app.post('/tarefas', tarefaController.adicionarTarefa);

app.put('/tarefas/:id', tarefaController.atualizarTarefas);

app.delete('/tarefas/:id', tarefaController.deletarTarefa);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

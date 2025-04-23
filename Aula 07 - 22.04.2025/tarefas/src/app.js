const express = require('express');
const app = express();


app.use(express.json());
require('dotenv').config();
const port = process.env.PORTA;

app.get('/', (req,res) => {
    res.send('api de tarefas');
})

app.get('/tarefas', (req,res) => {
    res.json(tarefas);
})

app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    novaTarefa.id = tarefas.length + 1;
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
})

app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);


    if (index !== -1) {
        const tarefa = tarefas[index];
        const novosDados = req.body;

        if(novosDados.titulo !== undefined) {
            tarefa.titulo = novosDados.titulo;
        }
        if(novosDados.descricao !== undefined) {
            tarefa.descricao = novosDados.descricao;
        }
        if(novosDados.dataConclusao !== undefined) {
            tarefa.dataConclusao = novosDados.dataConclusao;
        }

        res.json(tarefa);
    } else {
        res.status(404).json({mensagem: "Tarefa nâo encontrada"});
    }
})

 app.delete('/tarefas/:id', (req,res) => {
    const id = parseInt(req.params.id);
    tarefas = tarefas.filter(t => t.id !== id);
    res.status(204).send();
 })


let tarefas = [
    { id: 1, titulo: "Node.js", descricao: "Estudar Node por amor", dataConclusao: false },
    { id: 2, titulo: "JavaScript", descricao: "Estudar JavaScript por amor", dataConclusao: true },
    { id: 3, titulo: "React", descricao: "Estudar React por amor", dataConclusao: false },
];

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

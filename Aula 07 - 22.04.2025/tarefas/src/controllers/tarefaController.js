// const Tarefa = require('../models/tarefaModel.js');

// exports.teste = (req, res) => {
//     res.send('api de tarefas');
//     console.log('api de tarefas');
// };

// exports.listarTodas = (req, res) => {
//     Tarefa.listarTodas((err, tarefas) => {
//         if (err) {
//             res.status(500).json({ mensagem: "Erro ao listar tarefas" });
//         } else {
//             res.json(tarefas);
//             console.log(tarefas);
//         }
//     })
// };

// exports.adicionarTarefa = (req, res) => {
//     const novaTarefa = req.body;
//     Tarefa.adicionarTarefa(novaTarefa, (err, tarefaCriada) => {
//         if (err) {
//             res.status(500).json({ mensagem: "Erro ao adicionar tarefa" });
//         } else {
//             res.status(201).json(tarefaCriada);
//         }
//     });
// };
// exports.atualizarTarefa = (req, res) => {
//     const id = parseInt(req.params.id);
//     const novosDados = req.body;

//     Tarefa.atualizarTarefa(id, novosDados, (err, tarefaAtualizada) => {
//         if (err) {
//             res.status(500).json({ mensagem: "Erro ao atualizar tarefa" });
//         } else if (!tarefaAtualizada) {
//             res.status(404).json({ mensagem: "Tarefa não encontrada" });
//         } else {
//             res.json(tarefaAtualizada);
//         }
//     });
// };

// exports.deletarTarefa = (req, res) => {
//     const id = parseInt(req.params.id);

//     Tarefa.deletarTarefa(id, (err, sucesso) => {
//         if (err) {
//             res.status(500).json({ mensagem: "Erro ao deletar tarefa" });
//         } else if (!sucesso) {
//             res.status(404).json({ mensagem: "Tarefa não encontrada" });
//         } else {
//             res.status(204).send();
//         }
//     });
// };

// let tarefas = [
//     { id: 1, titulo: "Node.js", descricao: "Estudar Node por amor", dataConclusao: false },
//     { id: 2, titulo: "JavaScript", descricao: "Estudar JavaScript por amor", dataConclusao: true },
//     { id: 3, titulo: "React", descricao: "Estudar React por amor", dataConclusao: false },
// ];

// exports.atualizarTarefa = (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = tarefas.findIndex(t => t.id === id);


//     if (index !== -1) {
//         const tarefa = tarefas[index];
//         const novosDados = req.body;

//         if (novosDados.titulo !== undefined) {
//             tarefa.titulo = novosDados.titulo;
//         }
//         if (novosDados.descricao !== undefined) {
//             tarefa.descricao = novosDados.descricao;
//         }
//         if (novosDados.dataConclusao !== undefined) {
//             tarefa.dataConclusao = novosDados.dataConclusao;
//         }

//         res.json(tarefa);
//     } else {
//         res.status(404).json({ mensagem: "Tarefa nâo encontrada" });
//     }
// };

// exports.deletarTarefa = (req, res) => {
//     const id = parseInt(req.params.id);
//     tarefas = tarefas.filter(t => t.id !== id);
//     res.status(204).send();
// }

const tarefaModel = require('../models/tarefaModel');

exports.teste = (req, res) => {
    res.send('api de tarefas')
};

exports.listarTodas = (req,res)=>{
    console.log('TarefaController','listarTodas()')
    tarefaModel.listar()
        .then(
            (tarefas)=>{
                console.log(tarefas)
                res.json(tarefas)    
            }
        )
        .catch((erro)=>{console.log('erro:',erro)})
};



exports.adicionarTarefa = (req, res) => {
    let novaTarefa = req.body;
    tarefaModel.adicionar(novaTarefa)
        .then((resultado) => {
           console.log('resultado:', resultado);
            res.status(201).json(resultado);
        })
        .catch((erro) => {
            console.log('erro:', erro);
            res.status(500).json({ mensagem: "Erro ao adicionar tarefa" });
        });
};

exports.atualizarTarefas = (req, res) => {
    const id = parseInt(req.params.id);
    const novosDados = req.body;


    resultado = tarefaModel.atualizar(id,novosDados)


    if(!resultado.erro){
        res.json(resultado.novatarefa);
    }else{
        res.status(404).json({ mensagem:resultado.erro})
    }
}

exports.deletarTarefa = (req, res) => {
    const id = parseInt(req.params.id);
    tarefas = tarefas.filter(t => t.id !== id);
    res.status(204).send();
}
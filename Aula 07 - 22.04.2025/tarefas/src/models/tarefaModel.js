const { conectarMongoDB } = require('../database/db');

// const Tarefa = {
//     listarTodas: (callback) => {
//         db.query('SELECT * FROM tarefa', (err, results) => {
//             if (err) {
//                 console.error('Erro ao listar tarefas:', err);
//                 callback(err, null);
//             } else {

//                 const tarefaConlsuidoBoolean = results.map(tarefa => {
//                     return {
//                         ...tarefa,
//                         concluido: tarefa.concluido ===1
//                     };
//                 });
//                 callback(null, tarefaConlsuidoBoolean);
//             }
//         });
//     },

//     adicionarTarefa: (tarefa, callback) => {
//         db.query('INSERT INTO tarefa SET ?', tarefa, (err, results) => {
//             if (err) {
//                 console.error('Erro ao adicionar tarefa:', err);
//                 callback(err, null);
//             } else {
//                 callback(null, { id: results.insertId, ...tarefa });
//             }
//         });
//     },

//     atualizarTarefa: (id, novosDados, callback) => {
//         db.query('UPDATE tarefa SET ? WHERE id = ?', [novosDados, id], (err, results) => {
//             if (err) {
//                 console.error('Erro ao atualizar tarefa:', err);
//                 callback(err, null);
//             } else {
//                 callback(null, { id, ...novosDados });
//             }
//         });
//     },

//     deletarTarefa: (id, callback) => {
//         db.query('DELETE FROM tarefa WHERE id = ?', [id], (err, results) => {
//             if (err) {
//                 console.error('Erro ao deletar tarefa:', err);
//                 callback(err, null);
//             } else {
//                 callback(null, results.affectedRows > 0);
//             }
//         });
//     }
// };

// module.exports = Tarefa
class tarefaModel {
    // static tarefas = [
    //     {
    //         id: 1,
    //         titulo: "Node.js",
    //         descricao: "Estuda Node pelo amor",
    //         dataConclusao: false
    //     },

    //     {
    //         id: 2,
    //         titulo: "lavar pratos",
    //         descricao: "mamãe mandou lavar pratos",
    //         dataConclusao: false
    //     },

    //     {
    //         id: 3,
    //         titulo: "Varrer a casa",
    //         descricao: "mamãe mandou varrer a casa",
    //         dataConclusao: false
    //     },
    // ];
    static tarefasCollection;

    // metodos

    // Conectar ao MongoDB e obter a coleção 'ctarefas'
    static async conectar() {
        if (!this.tarefasCollection) {
            const db = await conectarMongoDB();
            this.tarefasCollection = db.collection('ctarefa'); // Usando a coleção 'ctarefas'
        }
    }

    //metodos
    static async listar() {
        console.log('TarefaModel','listar()')
        await this.conectar();
        const tarefas = this.tarefasCollection.find().toArray();
        return tarefas
    }


    static async adicionar(novaTarefa) {
        console.log('TarefaModel', 'adicionar()', 'tarefa:', novaTarefa)

        await this.conectar();
        const resultado = await this.tarefasCollection.insertOne(novaTarefa);
        return resultado
    }


    static atualizar(id, tarefaAtualizada) {
        console.log('TarefaModel', 'adicionar()', 'tarefa:', tarefa)

        const index = this.tarefas.findIndex(t => t.id === id);

        if (index !== -1) {






            if (tarefaAtualizada.titulo !== undefined) {
                this.tarefas[index].titulo = tarefaAtualizada.titulo;
            }

            if (tarefaAtualizada.descricao !== undefined) {
                this.tarefas[index].descricao = tarefaAtualizada.descricao;
            }

            if (tarefaAtualizada.dataConclusao !== undefined) {
                this.tarefas[index].dataConclusao = tarefaAtualizada.dataConclusao;
            }


            return { erro: '', novatarefa: this.tarefas[index] }


        }
        else {
            return { erro: 'Tarefa não encontrada', novatarefa: this.tarefa }
        }


    }


    static deletar(id) {
        console.log('TarefaModel', 'deletar()', 'id:', id)


    }


}


module.exports = tarefaModel 
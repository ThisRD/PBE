// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_tarefas'
// });
// connection.connect((err) => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err);
//     } else {
//         console.log('Conectado ao banco dados MySQL!');
//     }
// });

// module.exports = connection;
require('dotenv').config(); // carrega as variaveis de ambiente
const { MongoClient } = require('mongodb');


const url = process.env.MONGO_URL; // URL de conexão com o MongoDB local


const dbName = process.env.MONGO_DB; // Nome do banco de dados


let db = null;


// Função para conectar ao MongoDB
const conectarMongoDB = async () => {
    if (!db) {
        try {
            const client = new MongoClient(url);
            await client.connect();
            console.log('Conectado ao MongoDB');
            db = client.db(dbName);
        } catch (error) {
            console.error('Erro ao conectar ao MongoDB:', error);
        }
    }
    return db;
};


module.exports = { conectarMongoDB };






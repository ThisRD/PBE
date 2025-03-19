const db = require('../config/db');
const User = {
    // Esta linha define uma função chama que recebe um unico argumento
    getAllUsers: (callback) => {
        // Esta linha declara uma cadeia de  caracteres SQL que seleciona todas as colunas ( da tabela)
        const sql = 'SELECT * FROM users';
        // Esta linha executa a consulta SQL usando uma função
        db.query(sql, (err, results) => {
            // Se ocorer um erro durante a execução da consulta, o objeto será gerado,
            // o que provavelmente interromperá o aplicativo ou diparará um manipulador de erros
            if (err) throw err;
            // Se a consulta for bem sucedida, o objeto será passado para a função
            callback(results);
        });
    },

    // Adicionar um novo usuário
    addUser: (data, callback) => {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, data, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    getUserById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            // console.log("model:getUserById","result = ",result)
            callback(result[0]);
        });
    },

    updateUser: (id,data, callback) => {
        const sql = 'UPDATE users SET ? WHERE ID = ?';
        db.query(sql, [data, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    deleteUser: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    getUserNyUsername: (username, callback) => {
        const sql = 'SELECT * FROM users WHERE name = ?';
        db.query(sql, [username], (err, result) => {
            if(err) throw err;
            callback(result[0])
        });
    },
    
};



module.exports = User;
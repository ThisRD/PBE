const db = require('../database/db');

const User = {
    getUserByName: (nome, callback) => {
        const sql = 'SELECT * FROM usuario WHERE nome = ?';
        db.query(sql, [nome], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },
    addUser: (data, callback) => {
        const sql = 'INSERT INTO usuario SET ?';
        db.query(sql, data, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    
    
}
module.exports = User;
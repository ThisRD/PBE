// / filepath: c:\Users\smani\Documents\1103\models\userModel.js
const db = require('../config/db2');
// const bcrypt = require('bcrypt');

const User = {
    getAllUsers: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },
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
            callback(result[0]);
        });
    },
    updateUser: (id, data, callback) => {
        const sql = 'UPDATE users SET ? WHERE id = ?';
        db.query(sql, [data, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    dellUser: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    getUserByName: (name, callback) => {
        const sql = 'SELECT * FROM users WHERE name = ?';
        db.query(sql, [name], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }

};

module.exports = User;
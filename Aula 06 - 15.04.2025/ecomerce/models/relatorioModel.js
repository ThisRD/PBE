const db = require('../config/db');

const Produto = {

    getAllProducts: (callback) => {
        let sql = 'SELECT * FROM produto';
        console.log('sql pesquisado', sql)
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },
    addProduct: (data, callback) => {
        const sql = 'INSERT INTO produto SET ?';
        console.log('sql pesquisado', sql)
        db.query(sql, data, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    
}

module.exports = Produto;
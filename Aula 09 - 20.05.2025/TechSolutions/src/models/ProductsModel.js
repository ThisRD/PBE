// const { getAllProducts } = require('../controllers/ProductsController');
const db = require('../database/db');

const Product = {
    getAllProducts: (callback) => {
        const sql = ' SELECT * FROM produto';
        db.query(sql, (err,results) => {
            if(err) throw err;
            callback(results);
        })
    },
    addProduct: (data, callback) => {
        const sql = 'INSERT INTO produto SET ?';
        db.query(sql, data, (err,results) => {
            if(err) throw err;
            callback(results);
        })
    },
    getProductById: (id, callback) => {
        const sql = 'SELECT * FROM produto WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },
    updateProduct: (id, data, callback) =>{
        const sql = 'UPDATE produto SET ? WHERE id =?';
        db.query(sql, [data,id], (err, results) => {
            if(err) throw err;
            callback(results);
        })
    },
    deleteProduct: (id,callback) => {
        const sql = ' DELETE FROM produto WHERE id = ?';
        db.query(sql, [id], (err, results) => {
            if(err) throw err;
            callback(results);
        })
    },
}


module.exports = Product;
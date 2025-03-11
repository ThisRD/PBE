const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'raydson_crud'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dador:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL!');
    }
});

module.exports = connection;
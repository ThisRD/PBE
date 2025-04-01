const db = require('../config/db');

const User = {

    getAllUsers: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });

    },
}

module.exports = User;
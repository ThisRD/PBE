const db = require('../config/db');

const User = {

    getAllUsers: (dataInicio, dataFim, callback) => {


        // consulta

        let sql = 'SELECT * FROM users';
        let sqlInicio = (dataInicio != "") ? `dtnasc >= '${dataInicio}'`:'';
        let sqlFim = (dataFim != "") ? `dtnasc <= '${dataFim}'`:'';

        if (sqlInicio && sqlFim) {
            sql += ` WHERE ${sqlInicio} AND + ${sqlFim}`;
            } else if(sqlInicio) {
            sql += ` WHERE ${sqlInicio}`
            } else if (sqlFim) {
            sql += ` WHERE ${sqlFim}`
        } 

        console.log('getAllUsers (model)', 'sql pesquisado', sql)


        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });

    },
}

module.exports = User;
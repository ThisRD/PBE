const estadoModel = require('../models/estadoModel');


exports.teste = (req,res) => {
    res.send('API de Estados')
};

exports.listarTodos = async (req, res) => {
    console.log('estadoController', "listarTodos()")
    estadoModel.listar()
        .then(
            (estados) => {
                console.log(estados)
                res.json(estados)
            }
        )
        .catch((erro) => {console.log('erro:', erro)})
};

exports.listarPorSigla = (req, res) => {
    const sigla = req.params.sigla;
    const campos = req.query.campos ? JSON.parse(req.query.campos) : null; 
    estadoModel.listarPorSigla(sigla,campos)
        .then((estadoPorSigla) => {
            console.log('estadoController', "listarPorSigla()", estadoPorSigla)
            res.json(estadoPorSigla)
        })
        .catch((erro) => {console.log('erro:', erro)})
}
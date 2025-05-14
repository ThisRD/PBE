const { conectarMongoDB } = require('..//database/db')
// const Sigla = require('mongodb');
const { ObjectId } = require('mongodb');

class EstadoModel {
    static estadoCollection;

    static async conectar() {
        if (!this.estadoCollection) {
            const db = await conectarMongoDB();
            this.estadoCollection = db.collection('cestado');
        }
    };

    static async listar() {
        console.log('EstadoModel', "listar()")
        await this.conectar();
        const estados = await this.estadoCollection.find().toArray();
        return estados;
    };

    static async listarPorSigla(sigla, campos = null) {
        console.log('EstadoModel', "listarPorSigla()")
        await this.conectar();


        
        const estadoPorSigla = await this.estadoCollection.findOne(
            { sigla: sigla },
            { projection : campos}
        )
        return estadoPorSigla;
    }

}

module.exports = EstadoModel;
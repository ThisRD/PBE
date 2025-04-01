const User = require('../models/relatorioModel');
const PdfPrinter = require('pdfmake');

exports.getAllUsers = (req, res) => {
    console.log('relatorioController', 'getAllUsers')

    // neste ponto se chama users9 será devolvido pelo banco no futuro)

    User.getAllUsers((users) => {
        res.render('relatorio', { users })
    })
};

async function relatorioPDF(users){
    console.log('relatorioController', 'criarPDF()', users);

    // configuração das fontes do PDF

    const fonts = {
        Roboto: {
            normal: 'public/fonts/Roboto-Regular.ttf',
            bold: 'public/fonts/Roboto-Bold.ttf',
            italics: 'public/fonts/Roboto-Italic.ttf',
            bolditalics: 'public/fonts/Roboto-BolfItalic.ttf',
        },
    };

    const printer = new PdfPrinter(fonts);

    const docDefinition = {
        content: [
            { text: 'Relatório de Clientes', style: 'header'},
            {
                table: {
                    headerRows: 1,
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    body: [
                        ['ID', 'Nome', 'Email', 'Telefone', 'Endereço', 'Username'],
                        ...users.map(user => [user.id, user.name, user.email, user.fone, user.endereco, user.username]),
                    ],
                },
            },
        ],
        styles: {
            header: {
                fontsize: 18,
                bold: true,
                margin: [ 0, 0, 0, 10],
            },
        },
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    const chunks = [];

    return new Promise((resolve, reject) => {
        pdfDoc.on('data', chunk => chunks.push(chunk));
        pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
        pdfDoc.on('error', reject);
        pdfDoc.end();
    });
}

exports.generatePDF = (req, res) => {
    console.log('relatorioController', 'generatePDF')

    User.getAllUsers((users) => {
        relatorioPDF(users).then(pdfBuffer => {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=relatorio.pdf');
            res.send(pdfBuffer);

        })
    })

}

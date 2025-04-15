const Produto = require('../models/relatorioModel');
const PdfPrinter = require('pdfmake');


exports.getAllProducts = (req, res) => {
    console.log('relatorioController', 'getAllUsers')

    // neste ponto se chama users9 será devolvido pelo banco no futuro)

    Produto.getAllProducts((produto) => {
        res.render('relatorio', { produto })
    })
};
exports.addProduct = (req, res) => {
    const newProduct = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        fornecedor: req.body.fornecedor,
        marca: req.body.marca,
        precocompra: req.body.precocompra,
        precovenda: req.body.precovenda,
        estoque: req.body.estoque,
    };
    Produto.addProduct(newProduct, () => {
        res.redirect('/');
    });
};


async function relatorioPDF(produto) {
    console.log('relatorioController', 'criarPDF()', produto);

    // configuração das fontes do PDF

    const fonts = {
        Roboto: {
            normal: 'public/fonts/Roboto-Regular.ttf',
            bold: 'public/fonts/Roboto-Bold.ttf',
            italics: 'public/fonts/Roboto-Italic.ttf',
            bolditalics: 'public/fonts/Roboto-BolItalic.ttf',
        },
    };

    const printer = new PdfPrinter(fonts);

    const tableBody = [
        ['ID', 'Nome', 'Descrição', 'Fornecedor', 'Marca', 'Preço Compra', 'Preço Venda', 'Estoque'],
        ...produto
            .map(produtos => {
                if (
                    produtos.id &&
                    produtos.nome &&
                    produtos.descricao &&
                    produtos.fornecedor &&
                    produtos.marca &&
                    produtos.precocompra &&
                    produtos.precovenda &&
                    produtos.estoque
                ) {
                    return [
                        produtos.id,
                        produtos.nome,
                        produtos.descricao,
                        produtos.fornecedor,
                        produtos.marca,
                        produtos.precocompra,
                        produtos.precovenda,
                        produtos.estoque,
                    ];
                } else {
                    console.warn('Produto inválido encontrado:', produtos);
                    return null; // Retorna null para itens inválidos
                }
            })
            .filter(row => row !== null), // Remove linhas inválidas
    ];

    const docDefinition = {
        content: [
            { text: 'Relatório de Produtos', style: 'header' },
            {
                table: {
                    headerRows: 1,
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    body: tableBody,
                },
            },
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10],
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
    console.log('dados', req.body)

    Produto.getAllProducts(

        (produto) => {


            relatorioPDF(produto).then(pdfBuffer => {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=relatorio.pdf');
                res.send(pdfBuffer);

            })
        })

}


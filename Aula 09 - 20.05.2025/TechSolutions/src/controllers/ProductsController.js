const Product = require('../models/ProductsModel');

exports.getAllProducts = (req,res) => {
    Product.getAllProducts((products)=> {
        res.render('index', {products});
    }); 
};

exports.addProduct = (req,res) => {
    const newProduct ={
        nome: req.body.nome,
        foto: req.body.foto,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        preco: req.body.preco,
        estoque: req.body.estoque
    }
    Product.addProduct(newProduct, () => {
        res.redirect('/');
    });
};

exports.getProductById = (req, res) => {
    const productId = req.params.id;
    // console.log("getUserById","userId=",userId);
    Product.getProductById(productId, (product) => {
        res.render('edit', { product });
    });
};

exports.updateProduct = (req, res) => {
    const productId = req.params.id;
    const updatedProduct = {
        nome: req.body.nome,
        foto: req.body.foto,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        preco: req.body.preco,
        estoque: req.body.estoque
    };
    Product.updateProduct(productId, updatedProduct, () => {
        res.redirect('/index');
    });
};

exports.getdeleteByProduct = (req, res) => {
    const productId = req.params.id;
    Product.getProductById(productId, (product) => {
        res.render('dell', { product });
    });
};

exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    Product.deleteProduct(productId, () => {
        res.redirect('/index');
    });
};
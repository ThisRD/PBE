const User = require('../models/UserModel');
const Product = require('../models/ProductsModel');

exports.userLogin = (req, res) => {
    console.log('metodo: ', req.method)
    console.log('corpo de requisição:', req.body);
    console.log('controller', "userLogin");
    if(req.method === 'GET'){
        res.render('login', { loginFalhou:false });
    };
    if(req.method === 'POST'){
        const {nome, senha} = req.body;

        if(!nome || !senha){
            res.redirect({loginFalhou:true});
        }

        User.getUserByName(nome, (user) => {
            console.log('username encontrado:', user);
            if(!user){
                res.redirect('/', {loginFalhou:true})
            }
            if(senha == user.senha){
                res.redirect('/index');
            }else{
                res.redirect('/', {loginFalhou:true});
            }
        })
    }

};

exports.userCadastro = (req, res) => {
    const newUser = {
        nome: req.body.nome,
        senha: req.body.senha
    }
    User.addUser(newUser, () => {
        res.redirect('/index')
    })
};


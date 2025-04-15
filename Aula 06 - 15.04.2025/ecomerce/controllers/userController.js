const User = require('../models/userModel');
const Produto = require('../models/relatorioModel');
// Esta linha exporta a função para que ela possa ser usada em outras partes do aplicativo
exports.getAllUsers = (req, res) => {
    // esta linha chama uma função
    User.getAllUsers((users) => {
        // Depois que os dados do usuáio dão recuperados o método é usado para rebderizar a exibição
        res.render('index', { users });
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    // console.log("getUserById","userId=",userId);
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};

exports.getdeleteByUser = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('dell', { user });
    });
};


exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        fone: req.body.fone,
        endereco: req.body.endereco,
        pass: req.body.pass
    };
    User.addUser(newUser, () => {
        res.redirect('/index');
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    // console.log("updateUser");
    const updateUser = {
        name: req.body.name,
        email: req.body.email,
        fone: req.body.fone,
        endereco: req.body.endereco,
        pass: req.body.pass
    };
    User.updateUser(userId, updateUser, () => {
        res.redirect('/index');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/index');
    });
};

exports.userLogin = (req, res) => {
    console.log('metodo: ', req.method)
    console.log('corpo de requisição:', req.body);
    console.log('controller', "userLogin");
    if(req.method === 'GET'){
        res.render('login', { loginFalhou:false });
    };
    if(req.method === 'POST'){
        const {name, pass} = req.body;

        if(!name || !pass){
            res.redirect({loginFalhou:true});
        }

        User.getUserByName(name, (user) => {
            console.log('username encontrado:', user);
            if(!user){
                res.redirect('/', {loginFalhou:true})
            }
            if(pass == user.pass){
                Produto.getAllProducts((produtos) => {
                    res.render('relatorio', { produtos });
                });
            }else{
                res.redirect('/', {loginFalhou:true});
            }
        })
    }

}
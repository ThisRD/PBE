const User = require('../models/userModel');
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
        res.redirect('/');
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
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};

exports.loginUser = async (req,res) => {
    const { username, password } = req.body;
    console.log("loginUser", username, password)
    User.getUserByUsername(username, (user) => {
        if (user && user.pass === password) {
            res.redirect('/')
        }else {
            res.render('login', {loginFalhou : true})
        }
    });
}
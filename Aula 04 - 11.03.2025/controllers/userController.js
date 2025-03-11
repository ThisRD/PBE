const User = require('../models/userModel');
// Esta linha exporta a função para que ela possa ser usada em outras partes do aplicativo
exports.getAllUsers = (req, res) => {
    // esta linha chama uma função
    User.getAllUsers((users) => {
        // Depois que os dados do usuáio dão recuperados o método é usado para rebderizar a exibição
        res.render('index', { users });
    });
};

exports.addUser = (req,res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.addUser(newUser, () => {
        res.redirect('/');
    });
};
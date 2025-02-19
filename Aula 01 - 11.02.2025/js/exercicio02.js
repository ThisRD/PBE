// var nome = document.getElementById("idNome");
// var idade = document.getElementById("idIdade");
// var cpf = document.getElementById("idCpf");
// var button = document.getElementById("btn");

// button.addEventListener(function () {
//     document.getElementById("divNome").innerHTML = `Olá ${nome}`
//     document.getElementById("divIdade").innerHTML = `Você tem ${idade} anos`
//     document.getElementById("divCpf").innerHTML = `portador do CPF ${cpf}`;
// });


var botao = document.getElementById("btn");

botao.addEventListener('click', function (){

    let nome = document.getElementById("idNome").value;
    let idade = document.getElementById("idIdade").value;
    let cpf = document.getElementById("idCpf").value;

    document.getElementById("divNome").innerHTML = `Olá ${nome}`;
    document.getElementById("divIdade").innerHTML = `você tem ${idade} anos`;
    document.getElementById("divCpf").innerHTML = `o seu cpf é ${cpf}`;

});
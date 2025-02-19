const data = []; //array para gravar os dados

function gravaJson() {

    let nome = document.getElementById("idNome").value;
    let idade = document.getElementById("idIdade").value;
    let cpf = document.getElementById("idCpf").value;

    const newUser = {
        nomeUser: nome,
        idadeUser: idade,
        cpfUser: cpf
    };
    
    data.push(newUser);
    const jsonData = JSON.stringify(data, null, 2);

    // agora vamos criar uma TAG invisivel que está clicada e um arquivo JSON será criaddo
    const link = document.createElement('a');
    link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonData);
    link.download = 'data.json';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.getElementById("dataForm").reset();
};
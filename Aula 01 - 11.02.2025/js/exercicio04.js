const data = []; //array para gravar os dados

function gravaJson() {

    alert("oi");
    let nome = document.getElementById("idNome").value;
    let idade = document.getElementById("idIdade").value;
    let peso = document.getElementById("idPeso").value;
    let altura = document.getElementById("idAltura").value;
    let raca = document.getElementById("idRaca").value;
    let especie = document.getElementById("idEspecie").value;
    let id = document.getElementById("idIdent").value;

    const newAnimal = {
        nomeAnimal: nome,
        idadeAnimal: idade,
        pesoAnimal: peso,
        alturaAnimal: altura,
        racaAnimal: raca,
        especieAnimal: especie,
        idAnimal: id
    };
    
    data.push(newAnimal);
    const jsonData = JSON.stringify(data, null, 2);

    // agora vamos criar uma TAG invisivel que está clicada e um arquivo JSON será criaddo
    const link = document.createElement('a');
    link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonData);
    link.download = `${nome}.json`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.getElementById("dataForm").reset();
};
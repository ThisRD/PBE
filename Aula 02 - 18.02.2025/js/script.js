async function lerProdutos() {
    const resposta = await fetch('/json/produtos.json');
    const produtos = resposta.json();
    return produtos
};


function exibiProdutos(codigoProduto, produtos) {
    //pesquisar o produto
    const produto = produtos.find(produto => produto.id == codigoProduto);

    //atualizar a div com os dados do produto
    let dadosProduto = document.getElementById('cart-item');
    if (produto) {
        dadosProduto.innerHTML +=  `<p> id: ${produto.id} <br> Produto: ${produto.Nome} <br> Valor: ${produto.Valor}</p>`;
    } else {
        console.log("produto não encontrado")
        // alert('produto não encontrado')
    }

}

const leprod = document.querySelector('#leprod');

leprod.addEventListener('input', async () => {
    codigoProduto = parseInt(leprod.value); //Código sendo digitado pelo usuário
    const produtos = await lerProdutos(); //retorna o json de produtos
    exibiProdutos(codigoProduto, produtos)
})


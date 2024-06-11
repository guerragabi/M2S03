const produtos = [
    { nome: "Quebra-Cabeça França", valor: 29.99, imagem: "images/puzzlefranca.jpg" },
    { nome: "Quebra-Cabeça Japão", valor: 49.99, imagem: "images/puzzlejapao.jpg" },
    { nome: "Quebra-Cabeça Espanha", valor: 24.99, imagem: "images/puzzleespanha.jpg" },
    { nome: "Quebra-Cabeça Inglaterra", valor: 29.99, imagem: "images/puzzleinglaterra.jpg" }
]

function renderizarProdutos () {
    const listaProdutos = document.getElementById('lista-produtos')

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div')
        produtoDiv.classList.add('produto')

        const produtoNome = document.createElement('h2')
        produtoNome.textContent = produto.nome
        produtoDiv.appendChild(produtoNome)

        const produtoPreco = document.createElement('p')
        produtoPreco.textContent = `R$ ${produto.valor.toFixed(2)}`
        produtoDiv.appendChild(produtoPreco)

        const imagemProduto = document.createElement('img')
        imagemProduto.src = produto.imagem 
        imagemProduto.alt = produto.nome
        imagemProduto.classList.add('imagem-produto')
        produtoDiv.appendChild(imagemProduto)

        listaProdutos.appendChild(produtoDiv)
    })
}

document.addEventListener('DOMContentLoaded', renderizarProdutos)

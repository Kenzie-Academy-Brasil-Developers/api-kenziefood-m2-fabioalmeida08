import { Carrinho } from "./Carrinho.js";
import { Produtos } from "./Produto.js";
const spacoCards = document.querySelector('.espacoCards')
const campoBusca = document.querySelector('input')

Produtos.criarPaginaInicial()
Carrinho.addProduto(3)

campoBusca.addEventListener('keyup' , () => {
    let value = campoBusca.value
    Produtos.Busca(value)
})

spacoCards.addEventListener('click' , (e) => {
    let tar = e.target
    if(tar.tagName === 'BUTTON') {
        let id = Number(tar.getAttribute('prodid'))
        Carrinho.addProduto(id)
    }
})
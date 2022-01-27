import { Carrinho } from "./Carrinho.js";
import { Produtos } from "./Produto.js";
const spacoCards = document.querySelector('.espacoCards')
const campoBusca = document.querySelector('input')
const todos = document.querySelector('#filtro-todos')
const panificadora = document.querySelector('#filtro-panificadora')
const frutas = document.querySelector('#filtro-frutas')
const bebidas = document.querySelector('#filtro-bebidas')
const logo = document.querySelector('#logo')
const cbody = document.querySelector('.carrinho-body')


Produtos.criarPaginaInicial()

todos.addEventListener('click' , () => {
    Produtos.criarPaginaInicial()
})

panificadora.addEventListener('click' , () => {
    Produtos.filtroCat('Panificadora')
})

frutas.addEventListener('click' , () => {
    Produtos.filtroCat('Frutas')
})

bebidas.addEventListener('click' , () => {
    Produtos.filtroCat('Bebidas')
})
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

cbody.addEventListener('click' , (e) =>{
    let tar = e.target
    if(tar.tagName === 'BUTTON') {
        let id = Number(tar.getAttribute('lixoid'))
        Carrinho.removerProduto(id)
    }
})

logo.addEventListener('click' , () =>{
    Produtos.reset() 
    Produtos.criarPaginaInicial()
})
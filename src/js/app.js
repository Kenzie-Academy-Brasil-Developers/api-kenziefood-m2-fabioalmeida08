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
const search = document.querySelector('#search')

Carrinho.getStorage()
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

search.addEventListener('click', () => {
    let value = campoBusca.value
    Produtos.Busca(value)
})

spacoCards.addEventListener('click' , (e) => {
    let tar = e.target
    if(tar.className === 'shop') {
        let id = Number(tar.getAttribute('prodid'))
        Carrinho.addProduto(id)
    }
    if(tar.className === 'card-button') {
        let cat = String(tar.innerText).split(' ')
        Produtos.filtroCat(cat[1])
    }
})

cbody.addEventListener('click' , (e) =>{
    let tar = e.target
    if(tar.tagName === 'BUTTON' ||tar.tagName === 'IMG') {
        let id = Number(tar.getAttribute('lixoid'))
        Carrinho.removerProduto(id)
    }
})

logo.addEventListener('click' , () =>{
    Produtos.reset() 
    Produtos.criarPaginaInicial()
})
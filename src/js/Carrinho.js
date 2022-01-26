import {Produtos , db} from './Produto.js'


class Carrinho {
    
    static async addProduto(id) {
            let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
        const produto = final.find(item => item.id === id)

        const carrinhoCard =  document.createElement('div')
        carrinhoCard.classList.add('carrinho-card')
        
        const prodImg = document.createElement('img')
        prodImg.src = produto.imagem
        carrinhoCard.appendChild(prodImg)
        
        const carrinhoCardText = document.createElement('div')
        const h2 = document.createElement('h2')
        h2.innerHTML = produto.nome
        carrinhoCardText.appendChild(h2)

        const p = document.createElement('p')
        p.innerHTML = produto.categoria
        carrinhoCardText.appendChild(p)
        
        const h3 = document.createElement('h3')
        h3.innerHTML = `R$ ${produto.preco.toFixed(2)}`
        carrinhoCardText.appendChild(h3)

        const lixo = document.createElement('button')
        lixo.setAttribute('lixoid', produto.id)
        lixo.innerHTML = '🗑️'
        carrinhoCardText.appendChild(lixo)

        carrinhoCard.appendChild(carrinhoCardText) 
        const cbody = document.querySelector('.carrinho-body')
        cbody.appendChild(carrinhoCard)
    }

    static calculoPreco() {

    }

    static removerProduto() {

    }


}


export {Carrinho}

import { Produtos, db } from './Produto.js'
const arrProduto = []

class Carrinho {
	static async addProduto(id) {
		let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
		const produto = final.find((item) => item.id === id)

		arrProduto.push(produto)
        this.createProd()
		this.calculoPreco(arrProduto)
	}

	static calculoPreco(produtos) {
		const carrinhoFooter = document.createElement('div')
		carrinhoFooter.classList.add('carrinho-footer')
		produtos.forEach((produto) => {
			carrinhoFooter.innerHTML = ''
			carrinhoFooter.classList.add('carrinho-footer')

			const carrinhoQuant = document.createElement('div')
			
			carrinhoQuant.classList.add('carrinho-quant')
			const p = document.createElement('p')
			const span = document.createElement('span')
			span.innerHTML = `${produtos.length}`
			p.innerHTML = `Quantidade de Produtos`
			carrinhoQuant.appendChild(p)
			carrinhoQuant.appendChild(span)
			
			
			const carrinhoTotal = document.createElement('div')
			carrinhoTotal.classList.add('carrinho-quant')
			const pTotal = document.createElement('p')
			pTotal.innerHTML = `Valor Total` 

			const preco = document.createElement('span')
			preco.innerHTML = `R$ ${arrProduto.reduce(
				(a, b) => a + b.preco,
				0
			)}`
			
			carrinhoTotal.appendChild(pTotal)
			carrinhoTotal.appendChild(preco)



			const cbody = document.querySelector('.carrinho-body')
			carrinhoFooter.appendChild(carrinhoQuant)
			carrinhoFooter.appendChild(carrinhoTotal)
			cbody.after(carrinhoFooter)
		})
	}

	static removerProduto(id) {
	
	}

	static reset() {
		const cbody = document.querySelector('.carrinho-body')
		if (cbody.nextElementSibling) {
			const preco = cbody.nextElementSibling
			while (cbody.lastElementChild) {
				cbody.lastElementChild.remove()
				preco.remove()
			}
		}else{
			while(cbody.lastElementChild) {
				cbody.lastElementChild.remove()
			}
		}
	}
	static createProd() {
		this.reset()
		arrProduto.forEach((produto) => {
			const cbody = document.querySelector('.carrinho-body')
			// cbody.innerHTML = '';

			const carrinhoCard = document.createElement('div')
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
			lixo.setAttribute(
				'lixoid',
				arrProduto.findIndex((el) => el === produto)
			)
			lixo.innerHTML = '🗑️'
			carrinhoCard.appendChild(lixo)

			carrinhoCard.appendChild(carrinhoCardText)

			cbody.appendChild(carrinhoCard)
		})
	}
}

export { Carrinho }

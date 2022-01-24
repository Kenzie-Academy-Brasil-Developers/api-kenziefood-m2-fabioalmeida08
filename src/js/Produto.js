const espacoCards = document.querySelector('.espacoCards')

class Produtos {
	constructor(produtos) {
		this._produtos = []
	}
	static async criarCard() {
		let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
		this.construirCard(final)
	}

	static construirCard(arr) {
		for (let i of arr) {
			let card = document.createElement('div')
			card.classList.add('card')
			let imgProd = document.createElement('img')
			imgProd.src = i.imagem
			card.appendChild(imgProd)

			let cardText = document.createElement('div')
			let h2 = document.createElement('h2')
			h2.innerHTML = i.nome
			let p = document.createElement('p')
			p.innerHTML = i.descricao

			let cardTextBuy = document.createElement('div')
			let h3 = document.createElement('h3')
			h3.innerHTML = i.preco

			let linkCarrinhoVerde = document.createElement('a')
			let imgCarrinhoVerde = document.createElement('img')
			imgCarrinhoVerde.src = '#'
			linkCarrinhoVerde.appendChild(imgCarrinhoVerde)

			cardTextBuy.appendChild(h3)
			cardTextBuy.appendChild(linkCarrinhoVerde)

			cardText.appendChild(h2)
			cardText.appendChild(p)
			cardText.appendChild(cardTextBuy)

			card.appendChild(cardText)

			console.log(card)

			espacoCards.appendChild(card)
		}
	}
}





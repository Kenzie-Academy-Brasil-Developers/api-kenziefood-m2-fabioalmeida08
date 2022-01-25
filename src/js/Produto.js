const espacoCards = document.querySelector('.espacoCards')

class Produtos {
	constructor() {
		this._produtos = []
	}

	get produtos() {
		return this._produtos
	}
	set produtos(nova) {
		this._produtos = nova
	}
	static async criarCard() {
		let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
		this._produtos = final
		Produtos.construirCard(this._produtos)
		console.log(this._produtos)
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

			// let linkCarrinhoVerde = document.createElement('a')
			let btnCarrinhoVerde = document.createElement('button')
			btnCarrinhoVerde.innerHTML = ''
			btnCarrinhoVerde.setAttribute('prodid' , i.id)
			// linkCarrinhoVerde.appendChild(btnCarrinhoVerde)

			cardTextBuy.appendChild(h3)
			cardTextBuy.appendChild(btnCarrinhoVerde)

			cardText.appendChild(h2)
			cardText.appendChild(p)
			cardText.appendChild(cardTextBuy)

			card.appendChild(cardText)

			console.log(card)

			espacoCards.appendChild(card)
		}
	}

	static async filtroCat(cat) {
		let nome = String(cat)
		let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
		console.log(final)
		let filter = final.filter((item) => item.categoria === nome)
		console.log(filter)
		Produtos.construirCard(filter)
	}

	static async Busca(busca) {
		let nome = new RegExp(busca , 'gi')
		let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
		console.log(final)
		let filter = final.filter((item) => nome.test(item.nome))
		console.log(filter)
		Produtos.construirCard(filter)
	}
}

Produtos.filtroCat('Panificadora')

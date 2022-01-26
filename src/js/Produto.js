const espacoCards = document.querySelector('.espacoCards')
let db = []
class Produtos {
<<<<<<< HEAD
	// constructor() {
	// 	this._produtos = []
	// }

	// get produtos() {
	// 	return this._produtos
	// }
	// set produtos(nova) {
	// 	this._produtos = nova
	// }
=======

>>>>>>> 35f54417c7c963b0b5dcccd474b0c550595386b1

	static produtos = []

	static async criarPaginaInicial() {
		let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
		db = final
		Produtos.construirCard(db)
<<<<<<< HEAD
		console.log(db)
=======
	
>>>>>>> 35f54417c7c963b0b5dcccd474b0c550595386b1
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
			h3.innerHTML = `R$ ${i.preco.toFixed(2)}`

<<<<<<< HEAD
			// let linkCarrinhoVerde = document.createElement('a')
			let btnCarrinhoVerde = document.createElement('button')
			btnCarrinhoVerde.innerHTML = ''
			btnCarrinhoVerde.setAttribute('prodid', i.id)
			// linkCarrinhoVerde.appendChild(btnCarrinhoVerde)

=======
			let btnCarrinhoVerde = document.createElement('button')
			btnCarrinhoVerde.innerHTML = ''
			btnCarrinhoVerde.setAttribute('prodid', i.id)
			
>>>>>>> 35f54417c7c963b0b5dcccd474b0c550595386b1
			cardTextBuy.appendChild(h3)
			cardTextBuy.appendChild(btnCarrinhoVerde)

			cardText.appendChild(h2)
			cardText.appendChild(p)
			cardText.appendChild(cardTextBuy)

			card.appendChild(cardText)

<<<<<<< HEAD
			console.log(card)
=======
			
>>>>>>> 35f54417c7c963b0b5dcccd474b0c550595386b1

			espacoCards.appendChild(card)
		}
	}

	static async filtroCat(cat) {
		this.reset()
		let nome = String(cat)
		if (db.length === 0) {
			let prod = await fetch(
				'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
			)
			let produtos = await prod.json()
			let final = await produtos
			let filter = final.filter((item) => item.categoria === nome)
			Produtos.construirCard(filter)
		} else {
			let filter = db.filter((item) => item.categoria === nome)
			Produtos.construirCard(filter)
		}
	}

	static async Busca(busca) {
		this.reset()
		let nome = new RegExp(busca, 'gi')
		if (db.length === 0) {
			let prod = await fetch(
				'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
			)
			let produtos = await prod.json()
			let final = await produtos
			let filter = final.filter((item) => nome.test(item.nome))
			Produtos.construirCard(filter)
		} else {
			let filter = db.filter((item) => nome.test(item.nome))
			Produtos.construirCard(filter)
		}
	}

	static reset() {
		while (espacoCards.lastElementChild) {
			espacoCards.lastElementChild.remove()
		}
	}
}

export {Produtos , db}

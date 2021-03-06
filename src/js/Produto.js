const espacoCards = document.querySelector('.espacoCards')
let db = []
class Produtos {

	static produtos = []

	static async criarPaginaInicial() {
		
		let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
		db = final
		Produtos.reset()
		Produtos.construirCard(db)
	
	}

	static construirCard(arr) {
		
		for (let produto of arr) {
			const {imagem , categoria , nome , descricao , preco , id} = produto
			
			let card = document.createElement('div')
			card.classList.add('card')
			
			let imgProd = document.createElement('img')
			imgProd.src = imagem
			card.appendChild(imgProd)

			const button = document.createElement('button')
			button.classList.add('card-button')

			if(categoria === 'Panificadora') button.innerText = '🍞 Panificadora'
			if(categoria === 'Frutas') button.innerText = '🍊 Frutas'
			if(categoria === 'Bebidas') button.innerText = '🍷 Bebidas'


			card.appendChild(button)

			let cardText = document.createElement('div')
			let h2 = document.createElement('h2')
			h2.innerHTML = nome
			let p = document.createElement('p')
			p.innerHTML = descricao

			let cardTextBuy = document.createElement('div')
			let h3 = document.createElement('h3')
			h3.innerHTML = `R$ ${preco.toFixed(2)}`

			let btnCarrinhoVerde = document.createElement('button')
			btnCarrinhoVerde.classList.add('shop')
			btnCarrinhoVerde.innerHTML = ''
			btnCarrinhoVerde.setAttribute('prodid', id)
			
			cardTextBuy.appendChild(h3)
			cardTextBuy.appendChild(btnCarrinhoVerde)

			cardText.appendChild(h2)
			cardText.appendChild(p)
			cardText.appendChild(cardTextBuy)

			card.appendChild(cardText)

			

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
import {Produtos , db} from './Produto.js'
const arrProduto = [];

class Carrinho {
    
    static async addProduto(id) {
            let prod = await fetch(
			'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
		)
		let produtos = await prod.json()
		let final = await produtos
        arrProduto.push( final.find(item => item.id === id) )
        const carrinhoCard =  document.createElement('div')
        arrProduto.forEach((produto) => {    
            carrinhoCard.innerHTML = '';
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
            carrinhoCard.appendChild(lixo)

            carrinhoCard.appendChild(carrinhoCardText) 
            const cbody = document.querySelector('.carrinho-body')
            cbody.appendChild(carrinhoCard)
        })
        this.calculoPreco(arrProduto,carrinhoCard)
    }

    static calculoPreco(produtos,carrinhoCard) {
        let total = 0;
        const carrinhoFooter = document.createElement('div');
        produtos.forEach((produto) => {
            total = total + produto.preco;
            carrinhoFooter.innerHTML = '';
            carrinhoFooter.classList.add('carrinho-footer');

            const carrinhoQuant = document.createElement('div');
            const p = document.createElement('p');
            p.innerHTML = `Quantidade de Produtos ${produtos.length}`;
            carrinhoQuant.appendChild(p);

            const pTotal = document.createElement('p');
            pTotal.innerHTML = `Valor Total R$ ${total}`
            carrinhoQuant.appendChild(pTotal);

            carrinhoFooter.appendChild(carrinhoQuant);
            carrinhoCard.appendChild(carrinhoFooter);
    })
    }

    static removerProduto() {

    }


}


export {Carrinho}
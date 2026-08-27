Crie fecharCompra(carrinho, clienteVip), onde carrinho é um array de produtos { nome, preco, quantidade }.

Regras, nesta ordem:
1. Calcule o subtotal: a soma de preco * quantidade de todos os itens do carrinho (é o valor total da compra, não por item).
2. Se o subtotal for maior que R$100, aplique 10% de desconto sobre ele.
3. Se clienteVip === true, aplique mais 5% de desconto sobre o valor já calculado no passo anterior (esse desconto vale mesmo que o subtotal não passe de R$100).
4. Arredonde o total final para 2 casas decimais.

Retorno esperado:
{
subtotal: 92.30,
descontoAplicado: "5% VIP",
total: 87.69
}

/**
* Soma o valor total de todos os itens do carrinho (preço x quantidade).
* @param {Array<{ nome: string, preco: number, quantidade: number }>} carrinho
* @returns {number} valor total antes de qualquer desconto
*/
function calcularSubtotal(carrinho) {
// seu código aqui
}

/**
* Calcula o fechamento da compra aplicando os descontos aplicáveis.
* @param {Array<{ nome: string, preco: number, quantidade: number }>} carrinho
* @param {boolean} clienteVip
* @returns {{ subtotal: number, descontoAplicado: string, total: number }}
*/
function fecharCompra(carrinho, clienteVip) {
// seu código aqui
}

const carrinho = [
{ nome: "Arroz", preco: 25.9, quantidade: 2 },
{ nome: "Feijão", preco: 8.5, quantidade: 3 },
{ nome: "Sabão em pó", preco: 15.0, quantidade: 1 },
];

console.log(fecharCompra(carrinho, true));
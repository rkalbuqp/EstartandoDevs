const fecharCompra = (carrinho, clienteVip) => {

    let calculoSubtotal = 0

    for (let i = 0; i < carrinho.length; i++) {
        calculoSubtotal = calculoSubtotal + (carrinho[i].preco * carrinho[i].quantidade)
    }

    let total = calculoSubtotal
    let descontoAplicado = "Nenhum"

    // aplica 10% de desconto
    if (calculoSubtotal > 100) {
        total = calculoSubtotal * 0.90
        descontoAplicado = "10%"
    }

    // aplica 15% de desconto em caso de passar de 100 o valor.
    // Mas, aplica apenas 5% se a compra não passar de 100, já que ele é vip.
    if (clienteVip === true) {
        total = calculoSubtotal > 100 ? calculoSubtotal * 0.85 : calculoSubtotal * 0.95
        descontoAplicado = calculoSubtotal > 100 ? "10% + 5% VIP" : "5% VIP"
    }

    // Retorna o resultado com a estratégia de arredondamento
    return {
        subtotal: Number(calculoSubtotal.toFixed(2)),
        descontoAplicado: descontoAplicado,
        total: Number(total.toFixed(2)),
    }
}

// Array sugerido pelo exercício
const carrinho = [
    { nome: "Arroz", preco: 25.9, quantidade: 2 },
    { nome: "Feijão", preco: 8.5, quantidade: 3 },
    { nome: "Sabão em pó", preco: 15.0, quantidade: 1 },
];

console.log(fecharCompra(carrinho, true))
const cliente = {
    nome: "Lucas",
    idade: 30,
    produtos: [
        {
            nome: "Batata Frita",
            precoUnit: 1500,
            quantidade: 2
        },
        {
            nome: "Suco de frutas naturais",
            precoUnit: 1000,
            quantidade: 4
        },
        {
            nome: "Cerveja",
            precoUnit: 1200,
            quantidade: 4
        }
    ]
}
let valorTotal = 0;

for (let item of cliente.produtos) {
    valorTotal = valorTotal + (item.quantidade * item.precoUnit)
}




console.log(`${cliente.nome}, o valor total da suas compras é de ${valorTotal}`)
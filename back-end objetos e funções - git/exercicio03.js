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

console.log(cliente.nome);

console.log(cliente.idade);

cliente.idade = 18;

console.log(cliente.idade);

console.log(cliente.produtos[0].nome)

console.log(cliente.produtos[cliente.produtos.length - 1].precoUnit)
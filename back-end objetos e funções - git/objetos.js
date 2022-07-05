const pessoa = {
    nome: "Lucas",
    idade: 30,
    altura: 1.81,
    cnh: false,
    apelido: ["Luquinhas", "Viana"]
};

console.log(`Bem-vindo, ${pessoa.nome}. você tem ${pessoa.idade} anos}`);

const propriedade = "nome";

console.log(`Bem-vindo, ${pessoa[propriedade]}. você tem ${pessoa["idade"]} anos`); // a notação de colchetes me permite acessar varíaveis, é mais flexível.
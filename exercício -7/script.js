const Pessoas = [{
        nome: "Gabrieli",
        idade: 32,
        Telefone: 555,
        Profissão: "Programador"
    },
    {
        nome: "João",
        idade: 14,
        Telefone: 333,
        Profissão: "Estudante"
    },

    {
        nome: "Joana",
        idade: 17,
        Telefone: 444,
        Profissão: "Estudante"
    },
    {
        nome: "Pedro",
        idade: 42,
        Telefone: 555,
        Profissão: "Programador"
    },
  ]

//usando function
/* const encontrarMaiorDeIdade = Pessoas.find(function(pessoa) {
    return pessoa.idade > 18
    
})
console.log(encontrarMaiorDeIdade) */

// usando arrow function
const encontrarPrimeiraMaiorDeIdade = Pessoas.find(pessoa => {
    return pessoa.idade > 18
})
console.log(encontrarPrimeiraMaiorDeIdade)

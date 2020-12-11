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
  ]

// alguma pessoa da lista não é programador?

const encontrarMaiorDeIdade = Pessoas.some(pessoa => {
    return pessoa.Profissão != "Programador"
})
console.log(encontrarMaiorDeIdade)

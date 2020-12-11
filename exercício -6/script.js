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
    }
  ]


const encontrarPessoasMaioresDeIdade = Pessoas.filter(pessoa => {
    return pessoa.idade > 18 || pessoa.Telefone == 444
})
console.log(encontrarPessoasMaioresDeIdade)

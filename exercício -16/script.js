const cidades = [{
        nome: "Florianópolis",
        estado: "Santa Catarina"
    },

    {
        nome: "Porto Alegre",
        estado: "Rio Grande do Sul"
    },

    {
        nome: "Blumenau",
        estado: "Santa Catarina"
    },
    {
        nome: "Curitiba",
        estado: "Paraná"
    }
]

const recebeCidade = cidades => {
    const [Fln] = cidades
    const nome = Fln.nome
    const estado = Fln.estado
    console.log(nome)
    console.log(estado)
}

recebeCidade(cidades)

//poderia ter feito assim

/* const nomes = cidades[0].nome
console.log(nomes) */


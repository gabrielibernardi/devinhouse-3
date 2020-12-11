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

/* const listarCidades = cidades.map(function(obj) {
    return `${obj.nome} / ${obj.estado}`
    
})
const novaLista = listarCidades
console.log(novaLista) */


const listarCidades = cidades.map(cidade => {
    return `${cidade.nome} / ${cidade.estado}`
    
})
const novaLista = listarCidades
console.log(novaLista)

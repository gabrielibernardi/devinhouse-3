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

const econtrarCidadesDeSantaCatarina = cidades => {
return cidades.filter(cidades => cidades.estado === "Santa Catarina")
}

console.log(econtrarCidadesDeSantaCatarina(cidades))

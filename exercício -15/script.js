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

//usando function
/* const encontrarCidades = cidades.some(function(obj) {
    return obj.estado == "Rio Grande do Sul"
    
})
console.log(encontrarCidades) */

// usando arrow function
const encontrarCidades = cidades.some(obj => {
    return obj.estado = "Rio Grande do Sul"
})
console.log(encontrarCidades)


//média utilizando o forEach()

const notas = [1, 5, 8, 3, 7, 10, 9, 4]

function calcularMediaDasNotas(notas) {
    let soma = 0
    let media
        notas.forEach(somaDosValores => {
        soma += somaDosValores 
    }); 
    media = soma / notas.length
    return media
   }
const result = calcularMediaDasNotas(notas)
console.log(`A media dos valores é: ${result}`)  

// ou assim

function calcularMedia(...numeros) {
    let total = 0
    numeros.forEach(numero => {
        total = total + numero
    })

    media = total / numeros.length
    console.log(media)
}

calcularMedia(5,8,5,10)





 
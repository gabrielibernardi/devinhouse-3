
//média utilizando o forEach()

const notas = [1, 5, 8, 3, 7, 10, 9, 4]

function calcularMediaDasNotas(notas) {
    let soma = 0
    let media
        notas.forEach(somaDosValores => {
        soma = soma + somaDosValores 
    }); 
    media = soma / notas.length
    return media
   }
const result = calcularMediaDasNotas(notas)
console.log(`A media dos valores é: ${result}`)



/*média utilizando o reduce()
 const average = notas => notas.reduce((a, b) => a + b, 0) / notas.length
const result = average(notas)

console.log(`A media dos valores é: ${result}`) */







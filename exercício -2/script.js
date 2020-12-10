//média utilizando o forEach()

/* const notas = [1, 5, 8, 3, 7, 10, 9, 4]

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
console.log(`A media dos valores é: ${result}`)  */

function calcularMedia(...numeros) {
    let total = 0
    numeros.forEach(numero => {
        total += numero
    })

    media = total / numeros.length
    console.log(media)
}

calcularMedia(5,8,5,10)



/*média utilizando o reduce()
 const average = notas => notas.reduce((a, b) => a + b, 0) / notas.length
const result = average(notas)

console.log(`A media dos valores é: ${result}`) */


 const Funcionario = {
    nome: "Gabrieli",
    idade: "32",
    cargo: "Desenvolvedora Web",
    salario: "10.000",
}

const imprimirFuncionario = Funcionario => {
const {nome, cargo, salario} = Funcionario
console.log(`Nome: ${nome}, Cargo: ${cargo}, Salário: ${salario}`)   
}
imprimirFuncionario(Funcionario) 

const Despesas = {
    descrição: "Aluguel",
    valor: "1300",
}

const valoresGastos = Despesas => {
    const {valor} = Despesas
    console.log(`O valor gasto com o aluguel é de ${valor}`)
}

valoresGastos(Despesas)
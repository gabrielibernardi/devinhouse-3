
//exercicios resolvido durante a aula

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

/*média utilizando o reduce()
 const average = notas => notas.reduce((a, b) => a + b, 0) / notas.length
const result = average(notas)

console.log(`A media dos valores é: ${result}`) */
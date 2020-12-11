//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, 
//resultando num único valor de retorno.

function multiplicar(...valores) {
  const resultado = valores.reduce((acumulador, corrente) => acumulador * corrente)
  console.log(`O resultado é ${resultado}`)
}

multiplicar(2, 3, 4)







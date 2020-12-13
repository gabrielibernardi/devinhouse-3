const somarPares = (primeiroValor, segundoValor) => {
    const soma = primeiroValor + segundoValor
    return new Promise((resolve, reject) => {
        if (soma % 2 === 0) {
            resolve(soma)
        } else {
            reject("A soma dos valores é ímpar")
        }
    })

} 

somarPares(100, 23).then(soma => console.log("O resultado da soma foi: ", soma))
    .catch(mensagem => console.log(mensagem))


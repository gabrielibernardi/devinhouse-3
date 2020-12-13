//spread operator
/* const livros = ["livro1", "livro2", "livro3", "livro4"]
const livrosClonado = [...livros] 

clonado.push("livro5")

console.log(livros)
console.log(livrosClonado) */

// const pessoa = {
//     nome: "Zé",
//     idade: 30,
//     profissão: "Programador"
// }

// const novaPessoa = {...pessoa, nome:"Leo", idade: 40} //alterando atributos
// console.log(pessoa)
// console.log(novaPessoa)



//rest operator (função)

rankingLivros = (primeiro, segundo, terceiro, ...demaislivros) => {
console.log(primeiro)
console.log(segundo)
console.log(terceiro)

console.log("Os demais livros foram: ", demaislivros)
}

rankingLivros("livro1", "livro2", "livro3", "livro4", "livro5", "livro6")
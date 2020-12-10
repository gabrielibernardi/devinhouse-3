// exercício 2 - usando map()
/*O método map() invoca a função callback passada por 
argumento para cada elemento do Array e devolve um novo 
Array como resultado.*/

// usando function

/* const arrayValores = [1, 4, 9];

const quadrados = arrayValores.map(function(numero) {
  return numero * 2;
});
 console.log(quadrados)
 console.log(arrayValores) */ 


//usando arrow function
 const arrayValores = [1, 4, 9];

const quadrados = arrayValores.map(numero => {
  return numero * 2;
});
 console.log(quadrados)
 console.log(arrayValores)
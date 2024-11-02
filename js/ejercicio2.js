//comparar 3 numeros
/*
que numero es mayor

si hay numeros repetidos  que imprima por consola, 
 cual es el numero repetido.

*/

let lista1 = [1, 3, 5, 7, 9];
let lista2 = [2, 4, 16, 8, 0];
numeroMayor = lista1[0];

for (let i = 0; i < lista1.length; i++) {
  if (lista1[i] > numeroMayor) {
    numeroMayor = lista1[i];
  }
  console.log("numero mayor lista1: ", numeroMayor);
}

for (let i = 0; i < lista2.length; i++) {
  if (lista2[i] > numeroMayor) {
    numeroMayor = lista2[i];
  }
  console.log("numero mayor lista2: ", numeroMayor);
}

console.log(numeroMayor);

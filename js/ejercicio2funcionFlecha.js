let lista1 = [1, 3, 5, 7, 9];
let lista2 = [2, 4, 16, 8, 0];
numeroMayor = lista1[0];

const comparacion = (l1, l2, Mayor) => {
  for (let i = 0; i < lista1.length; i++) {
    if (l1[i] > Mayor) {
      Mayor = l1[i];
    }
    console.log("numero mayor lista1: ", Mayor);
  }

  for (let i = 0; i < l2.length; i++) {
    if (l2[i] > Mayor) {
      Mayor = l2[i];
    }
  }
  console.log("numero mayor lista2: ", Mayor);
  return Mayor;
};
numeroMayor = comparacion(lista1, lista2, numeroMayor);

console.log("el resultado es---->", numeroMayor);

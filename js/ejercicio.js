//comparar 3 numeros
/*
que numero es mayor

si hay numeros repetidos  que imprima por consola, 
 cual es el numero repetido.

*/

num1 = 9;
num2 = 3;
num3 = 3;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
}
if (num2 > num1 && num2 > num3) {
  console.log(num2);
}
if (num3 > num1 && num3 > num2) {
  console.log(num3);
}
if (num1 == num2) {
  console.log(num1);
} else if (num2 == num3) {
  console.log(num2);
} else {
  console.log(num3);
}

/*if (num1 > num2) {
  console.log(num1);
}
if (num1 > num3) {
  console.log(num1);
}
if (num2 > num1) {
  console.log(num2);
}
if (num2 > num3) {
  console.log(num2);
}
if (num3 > num1) {
  console.log(num3);
}
if (num3 > num2) {
  console.log(num3);
}*/

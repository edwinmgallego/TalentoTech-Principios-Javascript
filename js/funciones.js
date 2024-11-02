const precioOriginal = 1000;
const porcentajeDeDescuento = 15;

function calcularporDescuento(precioProducto, descuento) {
  const resultadoDescuento = (precioProducto * descuento) / 100;
  const precioConDescuento = precioProducto - resultadoDescuento;

  return precioConDescuento;
}

const preciofinal = calcularporDescuento(precioOriginal, porcentajeDeDescuento);

console.log(preciofinal);

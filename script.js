console.log('hola')


function calcularArea(longitud, ancho) {
  if(typeof longitud !== 'number' || typeof ancho !== 'number' || longitud < 0 || ancho < 0) {
    console.error('Los parámetros deben ser números no negativos.')
  }
  const area = (longitud * ancho).toFixed(2)
  return parseFloat(area)
}

const areaRectangulo = calcularArea(5.67, 8.43)
console.log(areaRectangulo)

calcularArea(5.67, '8.43')
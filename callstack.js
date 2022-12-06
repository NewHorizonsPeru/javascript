function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function calcularSyR(a, b) {
  var suma = sumar(a, b);
  var resta = restar(a, b);

  return suma - resta;
}

function imprimirResultado() {
  var a = 10;
  var b = 5;
  var resultado = calcularSyR(a, b);
  console.log(resultado);
}

imprimirResultado();

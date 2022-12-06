/** LISTA DE VALORES => ARRAY DE VALORES **/
function printMessage(title, ...resto) {
  console.log(title);
  console.log(resto);
  console.log(arguments);
}

printMessage(
  "Confirmación",
  "Registro Usuario",
  "El usuario se registró correctamente,",
  "ACEPTAR"
);

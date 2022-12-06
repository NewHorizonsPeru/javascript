function printMessage(message) {
  message = typeof message !== "undefined" ? message : "Valor por Defecto";
  console.log(message);
}

/** DEFAULT PARAMS **/
function printMessage(message = "Default Value") {
  console.log(message);
}

printMessage(null);

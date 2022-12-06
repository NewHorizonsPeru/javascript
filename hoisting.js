// FUNCIONES
function printMessage() {
  console.log("Hoisting on Functions");
}
printMessage();
// CODIGO NORMAL
printMessage();

function printMessage() {
  console.log("Hoisting on Functions");
}

// VARIABLES
/** CODIGO TRANSFORMADO POR EL MOTOR DE JS USANDO HOISTING **/
var message = undefined;
console.log(message);
message = "Hoisting on Var";

/** CODIGO NORMAL **/
console.log(message);
var message = "Hoisting";

const y = () => {};
const x = function () {};
function print() {}

console.log(fullName);
printSayHi();
var fullName = "Pedro Lopez";
function printSayHi() {
  console.log("Hello World!");
}

var fullName = undefined;
function printSayHi() {
  console.log("Hello World!");
}
console.log(fullName);
printSayHi();
fullName = "Pedro Lopez";

/** FUNCION O VAR **/
console.log(message);
var message = "New Horizons";
function message() {
  return "Javascript";
}

console.log(message);
var message = "New Horizons";
function message() {
  return "Javascript";
}

/** ARRAY DE VALORES => LISTA DE VALORES **/
var values = [
  "Perú",
  "Lima",
  "Chimbote",
  "Huaraz",
  "Trujillo",
  "Chiclayo",
  "Juaja",
];

function printValues(a, b, c, d, e, f, g) {
  console.log(a, b, c, d, e, f, g);
}

printValues(...values);

var mergeArray = [...values, "Huancayo", "Huaral", "Huarmey", "Huacho"];
console.log(mergeArray);

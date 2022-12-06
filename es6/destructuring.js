var arrayCountries = ["Perú", "Chile", "Brasil", "Argentina", "Colombia"];
/**var peru = arrayCountries[0];
var chile = arrayCountries[1];
var brasil = arrayCountries[2];
var argentina = arrayCountries[3];
var colombia = arrayCountries[4];**/

var [peru, chile, ...rest] = arrayCountries;
console.log(peru, chile, rest);

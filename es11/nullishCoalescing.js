/**
 * || -> user.active VALIDA QUE NO SEA NULL, UNDEFINED, FALSE, ZERO
 * ?? -> user.active VALIDA QUE NO SEA NULL O UNDEFINED
 * **/

const publish = {
  title: "ECMA Script 11",
};

//const existsPropActive = publish.active || "No existe la propiedad TyC";
const existsTyC = publish.tyc ?? "No existen los terminos y condiciones.";

console.log(existsTyC);

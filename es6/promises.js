const request = require("request");

/*function getRequestApi(url, fnCallback) {
  request.get(url, function (error, response, body) {
    fnCallback(JSON.parse(body));
  });
}

getRequestApi(
  "https://rickandmortyapi.com/api/character",
  function (responseCharacters) {
    const characters = responseCharacters.results;
    const morty = characters[1];
    console.log(`El ID del personaje es:  ${morty.id}`);

    getRequestApi(
      `https://rickandmortyapi.com/api/character/${morty.id}`,
      function (character) {
        console.log(`El nombre del personaje es:  ${character.name}`);
      }
    );
  }
);**/

function getRequestApi(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) reject("500 - ☠️ Internal Server Error");
      resolve(JSON.parse(body));
    });
  });
}

getRequestApi("https://rickandmortyapi.com/api/character")
  .then((characters) => {
    const idCharacter = characters.results[1].id;
    console.log(`El ID del personaje es:  ${idCharacter}`);
    return getRequestApi(
      `https://rickandmortyapi.com/api/character/${idCharacter}`
    );
  })
  .then((character) => {
    console.log(`El nombre del personaje es:  ${character.name}`);
  })
  .catch((error) => {
    console.log(error);
  });

/** GLOBAL SCOPE VAR **/
const globalScopeConst = "Global Scope Const";

function functionScope() {
  const functionScopeConst = "Function Scope Const";
}

console.log(functionScopeConst);

if (1 > 0) {
  let blockScopeConst = "Block Scope Const";
}

console.log(blockScopeConst);

const API_KEY = "Adipisicing amet cillum ea sunt sint.";
API_KEY =
  "Id sit deserunt dolor eu tempor occaecat cillum exercitation cillum labore consectetur velit.";
console.log(API_KEY);

const userData = {
  name: "Carmen",
  age: 30,
};

userData.age = 65;
userData.lastname = "Bonilla";

console.log(userData);

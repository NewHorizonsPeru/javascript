/** GLOBAL SCOPE VAR **/
var globalScopeVar = "Global Scope Var";

/** FUNCTION SCOPE VAR **/
function functionScope() {
  var functionScopeVar = "Function Scope Var";
}
functionScope();
console.log(functionScopeVar);

console.log(blockScopeVar);
if (1 > 0) {
  var blockScopeVar = "Block Scope Var";
}

// @ts-check
/* eslint-disable */
// As variáveis do JS não precisam ser declaradas com seu tipo.
var num = 1; // {1}
num = 3; // {2}
// Não é uma boa prática: atribuir um novo valor para a variável diferente do tipo original

var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6} Nenhum valor
var und; // {7} Uma variável é aquela que foi declarada, mas não recebeu um valor.

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

// ******* Variable Scope

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable); //{1}
console.log(myFunction()); //{2}

console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5} Irá aparecer local,pois alteramos o valor da variável dentro da função MyOtherFunction

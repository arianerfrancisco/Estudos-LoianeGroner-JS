// @ts-check
/* eslint-disable */

function sayHello() {
  console.log('Hello!');
}
// aciona a funcao com a chamada abaixo
sayHello();

/* function with parameter */
function output(text) {
  console.log(text);
}

output('Hello!');

output('Hello!', 'Other text'); // como a funcao trata apenas o primeiro parametro, o segundo sera ignorado

output();

/* function using the return statement */
function sum(num1, num2) {
  return num1 + num2;
}

var result = sum(1, 2);
output(result);
// como a funcao utiliza o return em seu escopo, para vizualiza-la precisamos instancia-la com a variavel resultado
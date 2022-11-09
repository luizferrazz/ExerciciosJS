/*Crie uma função que receba dois numeros e retorne se o primeiro é
maior ou igual ao segundo. */
const input = require('readline-sync')
let num1 = parseFloat(input.question('Insira o primeiro numero: '))
let num2 = parseFloat(input.question('Insira o segundo numero: '))
maiorOuIgual = (num1, num2) => num1 >= num2
console.log(maiorOuIgual(num1, num2))

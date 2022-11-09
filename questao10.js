/*Elabore uma função que recebe um número como parâmetro e retorne uma string como o simbolo "+"
na quantidade especificada no parâmetro */
input = require('readline-sync')
const simbolo = "+"
let repeticoes = parseInt(input.question('Quantas vezes o simbolo "+" sera impresso? '))

simboloMais = (repeticoes) => simbolo.repeat(repeticoes)
console.log(simboloMais(repeticoes))

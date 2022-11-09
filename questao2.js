/*Escreva uma função que receba a idade de uma pessoa e retorne a mesma idade em dias
Obs.: Considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias)
e desconsidere também dias decorridos desde o último aniversário */

const input = require('readline-sync')
idade = parseInt(input.question('Insira sua idade para calcularmos em dias: '))
const idadeEmDias = idade => `Sua idade em dias Ã©: ${idade * 365}`
console.log(idadeEmDias(idade))

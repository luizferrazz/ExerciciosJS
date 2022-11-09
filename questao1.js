/*Crie uma função que retorna a string "Ola", conectada com um argumento text
(a ser passado para a função) e com ponto de exclamação "!" no final */

input = require('readline-sync')
let nome
nome = input.question('Insira um nome: ')
const cumprimentar = nome => console.log(`Ola, ${nome}!`)
cumprimentar(nome)

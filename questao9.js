/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado */

input = require('readline-sync')
let valor1 = input.question('Insira o primeiro valor: ')
let valor2 = parseInt(input.question('Insira a quantidade de vezes que o valor sera repetido: '))
let arrayValor1 = []

function agrupandoValores (valor1, valor2){
    for (let i = 0; i < valor2; i++){
        arrayValor1.push(valor1)
    }
    return arrayValor1
}
console.log(agrupandoValores(valor1, valor2))

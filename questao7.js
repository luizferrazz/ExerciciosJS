/*Crie uma função que receba quatro numeros como parâmetro (num, min, max, inclusivo) e
retorne se o parâmetro num (o primeiro) está entre o mínimo e o máximo. Quando o parâmetro inclusivo for true,
tenha "entre" como inclusivo, ou seja, considerando se o numero é igual a min ou max.
Caso o parâmetro inclusivo nao esteja informado, seu valor padrão deverá ser false, portanto, 
a lógica será exclusiva, não considerando se o número é igual a min ou a max */
const input = require('readline-sync')
let num, min, max, inclusivo
function  entreMinMax (num, min, max, inclusivo){
    num = parseInt(input.question('Insira um numero: '))
    min = parseInt(input.question('Insira o valor minimo: '))
    max = parseInt(input.question('Insira o valor maximo: '))
    return inclusivo ? num >= min && num <= max : num > min && num < max
}
console.log(entreMinMax(num, min, max, inclusivo))

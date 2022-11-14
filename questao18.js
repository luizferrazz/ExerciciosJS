/*Numa aplicação web de investimento financeiro da qual você faz parte da equipe
de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de
um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma
quantidade indeterminada de números e retorne a média simples desses numeros */
const nums = [10, 15, 63, 52, 18, 22]
sumNums = (totalSum, nextValue) => totalSum += nextValue
const amountNums = nums.length
const result = nums.reduce(sumNums)/amountNums
console.log(result)

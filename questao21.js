/*Desenvolva uma função que receba como parâmetro um numero de 1 a 10. Internamente,
na função, será gerado um numero aleatório de 1 a 10. A função deverá retornar se o parâmetro
de entrada foi igual ao numero sorteado internamente. Se o valor fornecido foi sorteado, retorne
'Parabéns! O número sorteado foi o X.' Se não for igual, retorne "Que pena! O numero sorteado
foi X" */
const input = require ('readline-sync')
const bet = parseInt(input.question('Insira um numero e boa sorte! '))
const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const luckyNumber = Math.ceil(Math.random() * options.length)
drawNumber = (bet, luckyNumber) => bet == luckyNumber ? `Parabéns! O numero sorteado foi o ${luckyNumber}` : `Que pena! O numero sorteado foi ${luckyNumber}`
console.log(drawNumber(bet, luckyNumber))

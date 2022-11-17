/* Desenvolva uma função que receba um caractere e uma string como parâmetros e retorne
a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive. */
const quote = 'Javascript pode ser utilizada tanto no back quanto no front-end'
const amount = quote.toLowerCase().split('a').length -1
console.log(amount)

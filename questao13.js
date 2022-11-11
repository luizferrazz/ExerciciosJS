/*Elabore uma função que receba um array de numeros e retorne um array que tenha
todos os numeros que sao pares e que também tenham índice par */
const numeros = [5, 8, 90, 41, 35, 12, 55, 7, 56, 89, 420, 690]
paresIndicePar = (elemento, index) => (elemento % 2 == 0) && (index % 2 == 0)
let resultado = numeros.filter(paresIndicePar)
console.log(resultado)

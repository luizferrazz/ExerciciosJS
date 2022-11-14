/*Escreva uma função que receba um array de numeros e retornará a soma de todos
os numeros deste array */

const nums = [5, 7, 9, 11, 13, 28, 32]
somandoNums = (acumulador, nums) => acumulador += nums
const result = nums.reduce(somandoNums)
console.log(result)

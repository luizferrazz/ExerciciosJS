/* Crie uma função que recebe um array de números e retorna o segundo maior numero
presente neste array */
const numbers = [3, 85, 42, 63, 39, 22]
result = numbers => {
    lagest = Math.max(...numbers)
    numbers = numbers.filter(number => number != lagest)
    secondLargest = Math.max(...numbers)
    return secondLargest

}
console.log(result(numbers))

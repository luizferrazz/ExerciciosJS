/*Desenvolva uma função que receba 2 numeros inteiros nao negativos
e realize a multiplicação deles. Porém, não utilize o operador de multiplicação */
const input = require('readline-sync')
let num1 = parseFloat(input.question('Insira o primeiro numero: '))
let num2 = parseFloat(input.question('Insira o segundo numero: '))
let pseudoMultiplicacao = 0
if(num1 > 0 && num2 > 0){
    function multiplicacao (num1, num2){
        let somando = []
        for (let i = 0; i < num2 ; i++){
            somando.push(num1)
            pseudoMultiplicacao += somando[i]
        }

        return pseudoMultiplicacao
    }
    console.log(`O resultado da pseudo multiplicacao eh: ${multiplicacao(num1, num2)}`)
    }
    else{
        console.log('Numero invalido! Ambos os numeros precisam ser positivos!')
    }

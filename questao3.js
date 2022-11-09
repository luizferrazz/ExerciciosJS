/*Desenvolva uma função que recebe dois parâmetros, um que é a quantidade de horas trabalhadas por
um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string
"Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês. Desse valor, deve ser subtraído
30% relativo a impostos*/
const input = require('readline-sync')
let horasTrabalhadas, valorHora, salarioBruto
horasTrabalhadas = parseFloat(input.question('Insira a quantidade de horas trabalhadas pelo funcionário: '))
valorHora = parseFloat(input.question('Qual é o valor/hora do funcionário? '))
salarioLiquido = (horasTrabalhadas, valorHora) => {
    salarioBruto = horasTrabalhadas * valorHora
    return salarioBruto - (salarioBruto * 0.3)
}
console.log(`Salário igual a R$${salarioLiquido(horasTrabalhadas, valorHora)}`)

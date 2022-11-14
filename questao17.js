/*Voce está trabalhando numa aplicação pessoal de controle de despesas. Na tela princial
dessa aplicação é possível adicionar produtos ou serviços, informando nome, categoria e preço.
Uma funcionalidade que você está desenvolvendo no momento é sa de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */

const totalExpenses = [
    {name: 'Jornal online', category: 'Informacao', value: 89.99},
    {name: 'Cinema', category: 'Entretenimento', value: 150}
]
getValue = (product) => product.value
sumValues = (totalValues, nextValue) => totalValues += nextValue
onlyValues = totalExpenses.map(getValue).reduce(sumValues)
console.log(onlyValues)

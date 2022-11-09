/*Escreva uma função que receba um valor booleano ou numerico. Se o parâmetro fornecido for booleano,
o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o
parâmetro for numérico, o retorno será o número inverso. */
function inverso(valor){
    const tipo = typeof valor
    if (tipo == 'boolean'){
        return !valor
    }
    else if (tipo == 'number'){
        return valor * -1
    }
    else{
        return `Booleano ou numero esperado, mas o parametro é do tipo ${tipo}`
    }
}
console.log(inverso(5))

console.log(inverso(true))

console.log(inverso('Luiz'))

console.log(inverso(inverso))

const objeto = {}
console.log(inverso(objeto))

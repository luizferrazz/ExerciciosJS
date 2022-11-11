/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays,
em que cada elemento é um array formado pelos pares chave/valor que corresponde a um 
atributo do objeto. */
const carro = {
    marca : 'Jeep',
    modelo : 'Renegade',
    ano : 2019
}

function transformandoParaArray (){
    return Object.entries(carro)
}

console.log(transformandoParaArray(carro))

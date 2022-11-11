/*Crie uma função que receba um array de elementos e retorne um array somente
com os numeros presentes no array recebido como parametro. */
const array = ["JavaScript", "Akatsuki", 12, true, 56.5, "Floresta", 421]
const filtrandoNumeros = e => {
    if (typeof e === 'number'){
        return e
    }
}
let apenasNumeros = array.filter(filtrandoNumeros)
console.log(apenasNumeros)

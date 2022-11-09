/*Criar uma função que recebe um numero (de 1 a 12) e retorne o mês correspondente
como uma string. Por exemplo, se o mÃªs for 2, a função deverá retornar "fevereiro" */
const input = require('readline-sync')
let num = parseInt(input.question('Insira um numero: '))
function nomeMes(num) {
        switch (num){
        case 1:
            'Janeiro'
            break;
        case 2:
            return 'Fevereiro';
            
        case 3:
            return 'Março';
            
        case 4:        
            return 'Abril';
            
        case 5:
            return 'Maio';
            
        case 6:
            return 'Junho';
            
        case 7:
            return 'Julho';
            
        case 8:
            return 'Agosto';
            
        case 9:
            return 'Setembro';
            
        case 10:
            return 'Outubro';
            
        case 11:
            return 'Novembro';
            
        case 12:
            return 'Dezembro';
            
        default:
            return 'Mes invalido';
    }
}

console.log(nomeMes(num))

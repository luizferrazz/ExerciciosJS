/*A fim de manter o calendário anual ajustado com o movimento de translação
da Terra, criou-se os anos bissextos, que têm 366 dias em vez de 365 presentes
nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. 
Não podendo ser múltiplo de 100, exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano
e retorna se ele é bissexto ou não. */

bissexto = ano => (ano % 4 == 0) && (((ano % 100 != 0) || (ano % 400 == 0)))
console.log(bissexto (2020))
console.log(bissexto(2100))

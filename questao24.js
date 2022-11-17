/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar
criando uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro,
um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string
do primeiro parâmetro */
const javascriptWords = ['array', 'object', 'functions', 'methods', 'string', 'number', 'float', 'boolean']
findWords = (begin, words) => words.filter(word => word.includes(begin))
console.log(findWords('t', javascriptWords))

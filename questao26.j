/* Elabore uma funcao que recebe um objeto com estudantes e suas notas. As notas de cada
estudante estarao num array. Voce deverá calcular a media da nota de cada aluno e retornar
um objeto com os atributos nome e media, indicando o aluno que teve melhor desempenho */

const sum = grades => grades.reduce((accumulator, actualValue) => accumulator + actualValue, 0)
const average = grades => sum(grades) / grades.length
function bestStudent (students) {
    const studentsGrades = Object.entries(students).map(student => {
        const key = 0,
        value = 1
        return {name : student[key], average : average(student[value]).toFixed(2)}
    })
    const ordainedStudents = studentsGrades.sort((studentA, studentB) => studentB.average - studentA.average)
    const bestStudent = ordainedStudents[0]
    return bestStudent

}

student = {
    Tulio : [8.9, 5.5, 7.8, 9.2],
    Luiz : [3.7, 6.1, 8.9, 9.4],
    Lenija : [9.8, 8.3, 9.5, 8.8],
    Zao : [5.5, 3.2, 1.8, 8.5]
}
console.log(bestStudent(student))

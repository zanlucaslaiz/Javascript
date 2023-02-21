/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 e 90 - B
* entre 70 e 79 - C
* entre 60 e 69 - D
* menor que 60 - F
*/

let score = 100

function getScore (score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 90
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota Inválida"
    }

    return scoreFinal
}


console.log(getScore(89))
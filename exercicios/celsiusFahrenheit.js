/* Celsius em fahrenheit
Crie uma função que recebe uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/

function convercaoTemperatura(temperatura){
    const estaEmCelsius = temperatura.toUpperCase().includes('C')
    const estaEmFahrenheit = temperatura.toUpperCase().includes('F')

    if(!estaEmCelsius && !estaEmFahrenheit){
        throw new Error('Grau não identificado')
    }

    let grauAtualizado = Number(temperatura.toUpperCase().replace("F",""));
    let formula = fahrenheit => (F - 32) * 5/9
    let sinalGrau = 'C'
    
    if (estaEmCelsius){
        grauAtualizado = Number(temperatura.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        sinalGrau = 'F'
    }

    return formula(grauAtualizado) + sinalGrau
}

try{
    convercaoTemperatura('50F')

} catch (error){
    console.log(error.message)
}


// expressão regular para evitar erro caso a pessoa digite mais de uma letra exemplo 12xC
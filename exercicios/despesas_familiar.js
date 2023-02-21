/* Sistema de gastos familiar

Crie um objeto que possuirá duas propriedades, ambas do tipo array:
* receitas[]
* despesas[]

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let gastoFamiliar = {
    receitas: [2100, 300, 152, 400.56, 90],
    despesas: [200, 150, 70, 1400, 30.15],
}

function soma(array){
    let total = 0;
    
    for(let valor of array){
        total += value
    }
    
    return total
    }

function calcularSaldo(){
    const calcularReceitas = soma(gastoFamiliar.receitas);
    const calcularDespesas = soma(gastoFamiliar.despesas);

    const total = calcularReceitas - calcularDespesas

    const saldoOk = total >= 0
    let mensagem = "negativo"
    
    if(saldoOk) {
        mensagem = "positivo"
    }

    console.log(`Seu saldo é ${mensagem}: R$${total.toFixed(2)}`)
}

calcularSaldo()
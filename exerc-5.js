/* Questão 5 - Desenvolva um algoritmo que simule uma calculadora. Você deve dar a opção de o 
usuário escolher entre: 1 - Somar; 2 - Subtrair; 3 - Multiplicar; 4 - Dividir. O usuário só 
conseguirá processar dois números inteiros por vez. */

/*let num1 = console.log("escolha um número: ")
let num2 = console.log("escolha outro número: ")
 const soma = console.log(`${num1} + ${num2}`)
const subtração = console.log(num1 - num2) 
let escolha =  talvez seja pq n tem texto no $
variaveis podem ter acento?
*/


/* let num1 = console.log("escolha um número: ")
let num2 = console.log("escolha outro número: ")
const soma = console.log(num1 + num2)
const subtrair = console.log(num1 - num2) 
const multiplicar = console.log(num1 * num2)
const divisão = console.log(num1 / num2) */


/* let soma = 1
let subtrair = 2
let multiplicar = 3
let dividir = 4
let operador = console.log("Escolha uma operação: " +  soma || subtrair || dividir || multiplicar)
let num1 = 5
let num2 = 4

if (operador >= 1 && operador <= 4){
    
} else{
    console.log("Erro , escolher uma opção válida")    
}

if (soma){
    console.log(num1 + num2)

} else if(subtrair){
    console.log(num1 - num2)

} else if(multiplicar){
    console.log(num1 * num2)

} else if(dividir){
    console.log(num1 / num2)
}
 */





let operador = 0
let num1 = 5
let num2 = 6

if (operador === 1){
    console.log(num1 + num2) 
} else if(operador === 2){
    console.log(num1 - num2) 
} else if (operador === 3){
    console.log(num1 * num2 ) 
} else if (operador === 4){
    console.log(num1 / num2) 
} else{
    console.log("Digite um número válido:")
}






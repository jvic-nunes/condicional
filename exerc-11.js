/* Questão 11 - Desenvolva um algoritmo que peça ao usuário que informe os coeficientes a, b e c de 
uma equação de segundo grau: ax² + bx + c. Com base na Fórmula de Bhaskara, calcule 
e mostre as raízes da respectiva equação de segundo grau. */

let raiz = Math.sqrt
let a = 2
let b = 1
let c = 2
console.log("calculando delta...")
let delta = b*b - 4*a*c
console.log(delta)
console.log("calculando raízes...")

let x1 = (-b + raiz(delta)) / (2*a)
let x2 = (-b - raiz(delta)) / (2*a)

if (delta > 0 ){
    console.log(`Nesse caso haverá duas raizes reais e distintas(delta > 0), que são: ${x1} e ${x2}`)
} else if(delta === 0){
    console.log(`Nesse caso haverá duas raízes reais e e iguais (delta = 0), que são:  ${x1} e ${x2}`)
} else {
    console.log(`Nesse caso não há raiz real, são as duas complexas, logo, a respota é ${delta}`)
}
 
// aqui poderia colocar a parte de math.abs para colocar em módulo delta?
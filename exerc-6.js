/* Questão 6 - Desenvolva um algoritmo que peça para que o usuário informe a base e a altura de um 
retângulo, e um terceiro número inteiro "op". Caso o usuário escolha "op" igual a 0, 
calcule e mostre o perímetro do retângulo. Caso o usuário insira um valor 1 para "op", 
calcule e mostre a área do retângulo. Se o usuário inserir um valor diferente de 0 e 1 
para "op", mostrar a mensagem "Opção inválida.". */

let operacao = 0
let num1 = 4
let num2 = 3
if(operacao === 0){
    console.log(2*(num1 + num2))
} else if(operacao === 1){
    console.log(num1 * num2)
}else {
    console.log("opção inválida...repita o processo filho da lebara")
}

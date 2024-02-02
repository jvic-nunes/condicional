/* Para fazer a rematrícula na escola o aluno precisa ser maior de idade ou estar acompanhado de um responsável.
 Sendo assim:

a) Faça um programa que verifique se o aluno é maior de idade e realize a rematrícula, caso não seja, só será possível
acompanhado de um responsável. */

const maiorDeIdade = false
const acompanhado = true 

if (maiorDeIdade || acompanhado){
    console.log("Pode fazer a rematrícula")
}else {
    console.log("Não pode realizá-la")
}
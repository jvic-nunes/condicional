/* Numa "peneira" (processo seletivo para novos jogadores) de vôlei, em alguns clubes, 
o primeiro filtro é ver se um determinado candidato tem a altura mínima necessária de 180cm. 
Faça um programa que, dada a altura de um determinado candidato, diga se ele está aprovado ou 
reprovado nessa primeira fase do processo.

Imprima na tela APROVADO caso o jogador tenha 180cm de altura ou mais
 Imprima na tela REPROVADO caso o jogador tenha menos de 180cm */

/* const altura = "180cm"

if (altura >= "180cm"){
    console.log("aprovado")
}else{
    console.log("Reprovado")
} */


const altura = 180
altura >= 180 ? console.log("Aprovado") : console.log("Reprovado");

/* Questão 10 - ) Faça um programa que receba três números 
obrigatoriamente em ordem crescente e um quarto número que não siga esta regra. 
Mostre, em seguida, os quatro números em ordem não-crescente. */
let a = 1
let b = 4
let c = 7
let d = 0

if ( d <= a){
    console.log(c, b, a, d)
}else if(d <= b){
    console.log(c, b, d ,a)
}else if (d <= c){
    console.log(c, d, b, a)
}else {
    console.log(d, c, b, a)
}
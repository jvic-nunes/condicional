/* Questão 9 -  Faça um programa que receba três números
distintos e mostre-os em ordem crescente. */

let a = 3
let b = 4
let c = 8

if(a < b && a < c && b < c ){
    console.log(a, b, c)
}else if (a < c && a< b && c < b ){
    console.log(a, c, b)
}else if (b < a && b < c && a < c){
    console.log(b, a, c)
}else if (b < c && b < a && c < a){
    console.log(b, c, a)
}else if (c < a && c < b && a < b){
    console.log(c, a, b)
}else {
    console.log(c, b, a)
}

/* a, b, c
a, c ,b
b, a, c
b, c, a
c, a, b
c, b, a */ 
//trabalho da porra
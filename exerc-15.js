/* Duas pessoas estão jogando par ou ímpar. 
Você deve imprimir "par" caso a vencedora seja a pessoa que escolheu par 
e "ímpar" caso a vencedora seja a pessoa que escolheu ímpar. */

/* let p1 = 2
let p2 = 3
let escolha1 = "par"
let escolha2 = "impar"



if(p1 === "par"){
    p1 % 2 === 0
}else if (p1 === "impar"){
    p1 % 2 !== 0
}else if (p2 === "par"){
    p2 % 2 === 0
}else {
    p2 % 2 !== 0
}

if(p1 === p2){
    console.log("etapme")    
}else if (p1 + p2 === escolha1){
    console.log("player 1 ganhou!")
}else if (p1 + p2 === escolha1){
    console.log("player 1 ganhou!")
}else if (p1 + p2 === escolha2){
    console.log("Player 2 ganhou!")
}else if (p1 + p2 === escolha2){
    console.log("Player 2 ganhou!")
}
    
 */
  

//if(p1 % 2 === 0 || p2 % 2 === 0)

//let escolha = 1
let p1 = 7
let p2 = 7
let soma = p1 + p2


/* if (escolha === 1){
    p2 = "par"
    p1 = "impar"
}else{
    p1 = "par"
    p2 = "impar"
} */

if(soma % 2 === 0){
    console.log("O player par ganhou!!")
}else {
    console.log("o player impar ganhou!!")
}

// o foda é que o n consigo dizer qual player ganhou
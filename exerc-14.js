/* Duas pessoas estão jogando pedra, papel ou tesoura. 
Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate. */

let p1 = "pedra" 
let p2 = "spock"

if(p1 === p2){
    console.log("Empate")
}else if(
    (p1 === "tesoura" && p2 === "papel") ||
    p1 === "tesoura" && p2 === "lagarto" ||
    p1 === "papel" && p2 === "pedra" ||
    p1 === "papel" && p2 === "spock" ||
    p1 === "pedra" && p2 === "lagarto" ||
    p1 === "pedra" && p2 === "tesoura" ||
    p1 === "lagarto" && p2 === "spock" ||
    p1 === "lagarto" && p2 === "papel" ||
    p1 === "spock" && p2 === "tesoura" ||
    p1 === "spock" && p2 === "pedra"
    ){
    console.log(p1 + " É o vencedor!")
}else{
    console.log(p2 + " É o vencedor!")
}




/* Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
(and as it always has) Rock crushes Scissors */







/* let v = "ganha"
let p = "perde"

if (p1 === p2){
    console.log("Empate")
    
    
    if(p1 === tesoura && p2 === papel){
        console.log(`tesoura ${v}`)
    }else if(p1 === papel && p2 === tesoura){
        console.log(`papel ${p}`)
    }if(p1 === papel && p2 === pedra){
        console.log(`papel ${v}`)
        }else{
        console.log(`pedra ${p}`)
        }    
}  */ 


/* Exercício condicional - Modifique o código anterior para que, quando a pedra for uma bucha, 
digamos qual o "nome" da bucha. */

const num1 = 6;
const num2 = 6;

if (num1 === num2){
    console.log("Essa pedra é uma bucha");    
     if(num1 === 0 && num2 === 0){
        console.log("branco");
    }else if(num1 === 1 && num2 === 1){
        console.log("pio");
    }else if(num1 === 2 && num2 === 2){
        console.log("duque");
    }else if(num1 === 3 && num2 === 3){
        console.log("terno");
    }else if (num1 === 4 && num2 === 4){
        console.log("quadra");
    }else if (num1 === 5 && num2 === 5){
        console.log("quina");
    }else{
        console.log("sena");
    }
}else{
    console.log("essa pedra não é uma bucha");
} 

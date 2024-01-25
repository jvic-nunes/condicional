/* Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, 
de acordo com suas alturas, para serem testados para posições específicas. Faça um programa que, dada a altura de 
um determinado candidato, diga para qual posição ele deverá fazer o teste.

Caso o jogador tenha menos de 180cm, o programa deve imprimir REPROVADO
Caso tenha entre 180cm e 185cm, o programa deve imprimir LÍBERO
Caso tenha entre 186cm e 195cm, o programa deve imprimir PONTEIRO
Caso tenha entre 196cm e 205cm, o programa deve imprimir OPOSTO
Caso tenha mais de 205cm, o programa deve imprimir CENTRAL */

const altura = 191;

if (altura >= 180){
    if(altura >= 180 && altura <= 185){
        console.log("Líbero");
    }else if (altura >= 186 && altura <= 195){
        console.log("ponteiro");
    }else if (altura >= 196 && altura <= 205){
        console.log("Oposto");
    }else{
        console.log("Central");
    }
}else{
    console.log("Reprovado");
}
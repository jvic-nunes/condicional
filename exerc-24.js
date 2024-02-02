/* a) Sabendo que a semana possui 7 dias, sendo 1 para segunda e 7 para domingo, faça um programa
que verifica o número armazenado em uma variável e imprima o dia (por extenso) da semana correspondente.
b) Crie uma verificação padrão para caso o número informado não esteja no intervalo de 1 a 7. */
const day = 0;

if (day === 1){
    console.log("segunda");
}else if (day === 2){
    console.log("terça");
}else if (day === 3){
    console.log("quarta");
}else if (day === 4){
    console.log("quinta");
}else if (day === 5){
    console.log("sexta");
}else if (day === 6){
    console.log("sábado");
}else if (day === 7){
    console.log("domingo");
} else {
    console.log(" ERROR...Insira um número válido")
}
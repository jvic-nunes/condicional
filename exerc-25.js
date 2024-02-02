/* A Cubos Academy, preocupada com a saúde de seus alunos, precisa de um programa que identifique se eles 
estão bebendo a quantidade suficiente de água diariamente.

A tabela abaixo informa o risco de complicações na saúde com base na injestão diária de água.

Quantidade (litros)	Risco	Mensagem
Menos de 1.5	ALTO	Risco Alto - Você está ingerindo pouquissima água, beba mais água!
De 1.5 a 3	MODERADO	Risco Moderado - Você está ingerindo pouca água, beba mais!
Mais de 3	BAIXO	Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!
a) Faça um programa que verifica a quantidade de água ingerida e imprima a mensagem com o diagnóstico conforme na tabela
acima. */

const agua = 0;

if (agua < 1.5){
    console.log("alto risco, você esta bebendo pouquissima água");
}else if (agua >= 1,5 && agua <= 3){
    console.log("Risco moderado, Você está ingerindo pouca água, beba mais!");
}else {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
}
/* Num parque de diversões existe uma Montanha Russa Muito Assustadora. Por isso,
nesta montanha russa não são permitidas pessoas:
-Menores de 12 anos
-Maiores de 65 anos
-Que possuam qualquer patologia cardíaca
-Menores de 150cm de altura
Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:
-10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
-20 reias 
caso contrário Seu papel é imprimir na tela:
ACESSO NEGADO caso a pessoa não possa brincar
10 reais caso esse seja o valor que a pessoa deve pagar para brincar
20 reais caso esse seja o valor que a pessoa deve pagar para brincar */

const idade = 13;
const patologia = false;
const altura = 170;
const estudante = true;

if (!patologia && idade > 12 && idade < 65 && altura > 150){
    if (estudante || idade < 18){
        console.log("Valor R$10 reais (Meia entrada)");
    } else {
        console.log("Valor R$20 reais (valor inteiro)");
    }
} else {
    console.log("ACESSO NEGADO");
}

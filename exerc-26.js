/* Uma pessoa pode ter nome, sobrenome e/ou apelido. Escreva um código que imprima no console apenas o
 apelido (se o apelido estiver preenchido), ou primeiro nome + sobrenome (se o sobrenome estiver preenchido), 
 ou apenas o primeiro nome (que no nosso programa é obrigatório e deverá sempre estar preenchido).

Importante: Neste exercício, não deveremos utilizar nenhum operador de comparação, nem de igualdade e
nem de identidade. Para este exercício deveremos utilizar apenas o conceito de truthiness. */

const nome = true;
const nome2 = "rutinha"
const sobrenome = true;
const sobrenome2 = "daLua"
const apelido = true;
const apelido2 = "doLuar";

if (nome && sobrenome && apelido){
    console.log(nome2, sobrenome2, apelido2);
}else if (nome && sobrenome){
    console.log(nome2, sobrenome2)
}else if (nome && apelido){
    console.log(nome2, apelido2);
}else {
    console.log("insira as informações necessárias!")
}
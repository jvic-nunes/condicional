/* Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, faça um
programa que ajude a Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar. */

const valorDoProduto = 10000;
const quantidadeParcelas = 10;
const valorPago = 2000;
let parcelas = 0;

if (valorDoProduto > valorPago){
    let valorParcela = (valorDoProduto / 10) 
    let parcelasPagas = valorPago / valorParcela
    console.log((valorDoProduto - valorPago)/ 100 )   
    console.log(quantidadeParcelas - parcelasPagas)
    
}




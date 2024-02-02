const metodo = 2
const valorDoProduto = 107.30

if (metodo === 1){
    console.log((valorDoProduto - (valorDoProduto * 5/100)).toFixed(2))
}else if(metodo === 2){
    console.log((valorDoProduto - (valorDoProduto * 3/100)).toFixed(2))
}else if(metodo === 3){
    console.log((valorDoProduto - (valorDoProduto * 10/100)).toFixed(2))
}
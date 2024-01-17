let salario = 100

/* if (salario <= 500.00){    
    console.log((salario * (5/100)) + salario)
} else if (salario >= 500.01 && salario < 1200.00){    
    console.log((salario * (12/100)) + salario)
} else {
    console.log(salario)
} */


if (salario <= 600.00){    
    if (salario <= 500.00){    
        console.log((salario * (5/100)) + salario + 150)
    } else if (salario >= 500.01 && salario < 1200.00){    
        console.log((salario * (12/100)) + salario + 150)
    } else {
        console.log(salario + 150)
    }

}else {    
    if (salario <= 500.00){    
        console.log((salario * (5/100)) + salario + 600)
    } else if (salario >= 500.01 && salario < 1200.00){    
        console.log((salario * (12/100)) + salario + 600)
    } else {
        console.log(salario + 600)
    }
}
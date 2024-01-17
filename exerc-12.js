let a = 2
let b = 1
let c = 3
let i = 1

aaaaaa
if (i === 1){
    if(c > a && c > b){
        if(a < b){
            console.log("a b c", a, b, c)
        }else{
            console.log("b a c", b, a, c)
        }
        
    
    }else if (b > c && b > a && a < c){
        console.log("a c b",a, c, b)        
    }else if (b > c && b > a && c < a){
        console.log("c a b",c, a, b)
    }else if (a > c && a > b && b < c){
        console.log("b c a",b, c, a)
    }else if (a > c && a > b && c < b){
        console.log("c b a",c, b, a)
    }
    
}else if(i === 2){
    if (a > b && a > c && c > b){
        console.log("a b c",a, c, b)
    }else if (a > b && a > c && b > c){
        console.log("a b c",a, b, c)
    }else if (b > a && b > c && a > c){
        console.log("a b c",b, a, c)
    }else if (b > a && b > c && c > a){
        console.log("a b c",b, c, a)
    }else if (c > a && c > b && a > b){
        console.log("a b c",c, a, b)
    }else if (c > a && c > b && b > a){
        console.log("a b c",c, b, a)
    }
        
}else if(i === 3){ 
    if (a > b && a > c && c > b){
        console.log("a b c",c, a, b)
    }else if (a > b && a > c && b > c){
        console.log("a b c",b, a, c)
    }else if (b > a && b > c && a > c){
        console.log("a b c",a, b, c)
    }else if (b > a && b > c && c > a){
        console.log("a b c",c, b, a)
    }else if (c > a && c > b && a > b){
        console.log("a b c",a, c, b)
    }else if (c > a && c > b && b > a){
        console.log("a b c",b, c, a)
    }
}

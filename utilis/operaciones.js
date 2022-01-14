function pares(x) {
    let resp = ""
    if (x<2){
     resp="Los numeros son : 0"
     return resp
    }

   resp = "Los numeros son :"
   let i = 0;
   do {
   if ( i % 2 == 0){
    resp = resp + ` ${i}`
   }   
   i = i + 1;
   } while (i <= x);

    return resp;
 }

 function factor(x) { //Saca el numero en factorial
	if (x == 0){ 
		return 1; 
	}
	return x * factor (x-1); 
}

function factorial(x){//Da el resultado factorial de un numero
    let resp = "El resultado factorial es : "
    let fact = ""
    fact = factor(x)
    return resp + fact;
}

function seriefactorial(x){ //Hace la serie factorial s = 1! - 2! + 3! -4! ... n!
    let resp = "El resultado de la serie factorial es : "
    let fact = ""
    let op = ""
   let i = 1;
   do {
    fact = factor(i)
   if ( i % 2 == 0){
    op = op - fact
   }
   else {
    op = op + fact
   }
   i = i + 1;
   } while (i <= x);
    return resp + op;
}

//Suma el cuadrado de los numeros enteros desde 1 hasta x
function sumatoriacuadrados(x){ 
    let resp = ""
    let suma= 0;
    for (let i=1; i<= x; i++ ){
        let cuadrado = (i*i)

        if( i == x)
        {
            resp += cuadrado +" ";
        }else
        {
            resp += cuadrado +" "+ "+ ";
        }
        
        suma += cuadrado;
    }
    // 1 + 4 + 9 +...+ (x^2) = resultado suma
    resp += "=" + suma;
    return resp;
}
 module.exports={
     pares,
     seriefactorial,
     factorial,
     sumatoriacuadrados
 }
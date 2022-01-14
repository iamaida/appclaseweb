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

function esPrimo (numero){
    // Unico par es dos
    if (numero<2||(numero%2==0&&numero!=2))
        return false;
    // Busca entre los impares
    for (let x=3; x*x<=numero; x+=2)
    if (numero%x==0)
        return false;
    return true;
}

function divisionPrimo (x){
    let resp = ""
    let numInc = 0;
    let operacion = 0;
    numInc = x; // Se guarda el número inicial 
    if (x > 2)
    while(esPrimo(x) == false){
        x--
    }
    // Itera hasta encontrar un primo menor o igual
    else return "Entrada invalida \nIngrese un número mayor que (2)";
    // Divide y simplifica a tres decimales
    resp = "La division de "+ numInc + " por el primo menor " + x + " es: "
    operacion = numInc/x
    return resp + operacion.toFixed(3)
}

 module.exports={
     pares,
     seriefactorial,
     factorial, 
     divisionPrimo
 }
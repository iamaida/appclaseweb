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

 function fibonacci(x){
    let resp = ""
    if (x<1){
     resp="Los numeros son : 0"
     return resp
    }

   resp = "Los numeros son : 0"
   let i = 0;
   let befor = 0;
   let actual = 1;
   let temp = 1;
   do {

   resp = resp + ` ${actual}`
   temp = actual;
   actual = befor + actual; 
   befor = temp;
   
   i = i + 1;

   } while (i < x);

    return resp;
 }

 module.exports={
     pares,
     fibonacci
 }
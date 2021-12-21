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

function palabraingles(n) { // Cambia el numero a palabra en Ingles

    var string = n.toString(),
        units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;


    /* El numero es 0? */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    /* Array de unidades como palabras*/
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    /* Array de decenas como palabras*/
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    /* Array de escalas como palabras */
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return 'numero demasiado grande';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            /* Split chunk into array of individual integers */
            ints = chunks[i].split('').reverse().map(parseFloat);

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                words.push(word);
            }

            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }


            /* Agregue cientos de palabras si existe un elemento de matriz */
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }

        }

    }

    /* En caso de ser negativo añade el negative */
    if(n < 0){
        words.push('negative ');
    }

    return words.reverse().join(' ');
}

 module.exports={
     pares,
     seriefactorial,
     factorial,
     palabraingles
 }
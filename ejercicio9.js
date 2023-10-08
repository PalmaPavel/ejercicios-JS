function palindromeChecker(str) {
    //realizaremos la verificacion pasando la palabra que tenemos al reves y si se logra leer lo mismo lo mandara como un true
    const strReversed = str.split("").reverse().join(""); 
  

    //realizara la cuestion de que si la frase que ingresamos en verdadera o true manadara el primer mensaje de lo contrario manadara el segundo.
    console.log(strReversed === str ? `la palabra ${str} es un palindromo` : "no es palindromo");
}

palindromeChecker("oso");

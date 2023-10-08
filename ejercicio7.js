function convertToBinary1 (number) {
    //almacenamos el numero que tenemos en la nueva variable llamada num.
    let num = number; 
    //en este podemos emepezar a almacenar el numero menos significativo por medio del tostring y en la variable binary
    let binary = (num % 2).toString(); 
    //el numero que tenemos en num lo metemos al for para poder empezar a realizar la division y que se puede sacar los binarios.
    for (; num > 1; ) { 
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    //nos muetra el resultado de bin.
    console.log(binary); 
}

convertToBinary1("300");
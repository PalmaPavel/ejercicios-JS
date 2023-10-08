function conversion(num){
    
    //declaramos los numeros y su conversion a numeros romanos para que sea mas facil los declaramos en una misma variable.
    const valores = [
        {valor: 1000, romano: 'M'},
        {valor: 900, romano: 'CM'},
        {valor: 500, romano: 'D'},
        {valor: 400, romano: 'CD'},
        {valor: 100, romano: 'C'},
        {valor: 90, romano: 'XC'},
        {valor: 50, romano: 'L'},
        {valor: 40, romano: 'XL'},
        {valor: 10, romano: 'X'},
        {valor: 9, romano: 'IX'},
        {valor: 5, romano: 'V'},
        {valor: 4, romano: 'IV'},
        {valor: 1, romano: 'I'}
    ];

    //declaramos nuestro let como una variable indefinida.
    let resultromano= ""; 

    //declaramos un for en donde haremos la conversion por medio de los valores ya ingresados.
    for(const vromano of valores){  
        while(num >= vromano.valor){ 
            resultromano += vromano.romano;
            num -= vromano.valor; 
        } 
    } 
    //nos retornara el valor del numero romano obtenido.
    return resultromano; 
}

let num = 95;
const numromano = conversion(num);
console.log(`el numero ${num} en romanos es: ${numromano}`);
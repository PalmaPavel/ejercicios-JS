function palabras(frase){
    //dividimos en palabras la frase que ingresamos por medio de el split() despues de que hace la separacion el length realizara el conteo.
    let cont = frase.split(' ').length; 
    console.log(cont);
}

palabras("Hola mi nombre es Pavel Palma");
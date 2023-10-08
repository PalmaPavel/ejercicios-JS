function contarvocales(texto){
    //declaramos las vocales que queremos que se lean
    const vocales = "aáeéiíoóuú"; 
    //declaramos la variable donde ce alamacenara el numero total de vocales
    let cantvocales = 0; 
    //creamos un ciclo for para poder contar las vocales del texto que ingresamos
    for(const letra of texto){ 
        if(vocales.includes(letra.toLowerCase())){ // ponemos de que el texto se ponga en minuscula
            cantvocales++; //realizamos el conteo de las vocales en el text0
        }
    }

    console.log("el numero de vocales es: " + cantvocales); //lo mandmaos a mostrar en la consola
}

contarvocales("Pavel Palma");
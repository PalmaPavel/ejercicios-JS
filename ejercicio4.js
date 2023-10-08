function producto(precio, descuento){
    // sacamos de primero el porcentaje dividiendo el nuestro descuento dentro de 100 y despues el resultado que nos de lo multiplicamos por el precio que tenemos
    let resultado = precio * (descuento/100); 
    //en esta parte con el let declaramos nuestra variable final y restamos el precio original con el descuento que se le tiene que hacer al producto.
    let resultfinal = precio - resultado; 
    //mandamos el resultado por medio de un console.log();
    console.log(resultfinal); 
}

producto("1000", "20")
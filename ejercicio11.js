function primeraLetraMayuscula(cadena) {
  // dividimos nuestra frase en fragmentos en este caso palabra por palabra
    const palabras = cadena.split(' '); 
    //declaramos la variable donde se almacenara nuestras palabras
    let resultado = ''; 
  
    //en el bucle realiza el conteo de palabras
    for (let i = 0; i < palabras.length; i++) { 
      const palabra = palabras[i];
      //verificamos si la variable no esta vacia
      if (palabra) { 
        resultado += palabra[0].toUpperCase(); //convierte la primera letra en mayuscula
      }
    }
  
    return resultado;
  }
  
  const texto = "Pavel Palma";
  const resultado = primeraLetraMayuscula(texto);
  console.log(resultado); 
  
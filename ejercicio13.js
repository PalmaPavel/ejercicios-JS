function primeraLetraMayusculaEnCadaPalabra(cadena) {
  // Dividir la cadena en palabras
    const palabras = cadena.split(' '); 
    const palabrasConPrimeraMayuscula = palabras.map(palabra => {
      // Capitalizar la primera letra de cada palabra y mantener el resto en minúsculas
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    // Unir las palabras en una cadena
    return palabrasConPrimeraMayuscula.join(' '); 
  }
  
  const text = "pavel palma";
  const result = primeraLetraMayusculaEnCadaPalabra(text);
  console.log(result);
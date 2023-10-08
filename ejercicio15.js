function sumaArreglo(num) {
    let suma = 0;
  
    // realizacion en for para el conteo y suma de los numero ingresado en el array
    for (let i = 0; i < num.length; i++) {
      suma += num[i];
    }
  
    return suma;
  }
  
  const numeros = [30, 89, 6, 8];
  const total = sumaArreglo(numeros);
  console.log(`el total de la suma es: ${total}`);
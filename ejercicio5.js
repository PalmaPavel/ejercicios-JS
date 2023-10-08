function cumpleanos(nacimiento){
    //declaramos la fecha que tenemos el dia de hoy y con el que vamos a realizar la resta.
    let diahoy = new Date() 
    // con este el new date en vez de llamar a la fecha de hoy almacenara la fecha de nacimiento que ingresamos
    let cumple = new Date(nacimiento); 
    // en este solo llamaremos a los años de las fechas y realiza la resta para poder obtener la edad consisa.
    let edad = diahoy.getFullYear() - cumple.getFullYear(); 
    //se imprime el resultado de la resta de los años.
    console.log(edad); 
}

cumpleanos("2004,05,31")
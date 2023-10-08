function reversa(palabra) {
    //dividimos las palabras en forma de un array y con el reverse invertiremos la palabra que estamos dando
    let rever = palabra.split('').reverse().join(''); 
    console.log(rever);
}

reversa("PavelPalma");
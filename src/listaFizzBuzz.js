function listaFizzBuzz(limite){
    const numeros = Array.from({length:limite}, (_, index) => index + 1);
    return numeros.map((numero) =>{
        return fizzBuzz(numero);
    });
}

export default listaFizzBuzz;
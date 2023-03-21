function fizzBuzz(numero=0){
    let resp;
    if (numero % 3 === 0 && numero % 5 === 0){
        resp = 'FizzBuzz';
    }
    else if (numero % 3 == 0){
        resp = 'Fizz';
    }else if (numero % 5 == 0){
        resp = 'Buzz';
    }else{
        resp = numero;
    }
    return resp;
}

export default fizzBuzz;
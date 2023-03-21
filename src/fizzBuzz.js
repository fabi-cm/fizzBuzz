function fizzBuzz(numero){
    let resp;
    if (numero % 3 == 0){
        resp = 'Fizz';
    }else if (numero % 5 == 0){
        resp = 'Buzz';
    }
    return resp;
}

export default fizzBuzz;
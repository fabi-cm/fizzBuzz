import fizzBuzz from './fizzBuzz.js'
import listaFizzBuzz from './listaFizzBuzz.js';

describe("Es FizzBuzz", () => {
    it("Si el número es 3 o múltiplo de 3 se imprime Fizz", () => {
      expect(fizzBuzz(3)).toEqual('Fizz');
    });
    it("Si el número es 5 o múltiplo de 5 se imprime Buzz", () => {
        expect(fizzBuzz(5)).toEqual('Buzz');
      });
    it("Si el número es múltiplo de 3 y 5 se imprime FizzBuzz", () =>{
        expect(fizzBuzz(30)).toEqual('FizzBuzz');
    });
    it("Si el número NO es múltiplo de 3 y 5 se imprime solo el numero", () =>{
      expect(fizzBuzz(4)).toEqual(4);
    });
    it("Retornar una lista al introducir un numero que sera el limite verificar si es Fizz, Buzz, FizzBuzz", () =>{
      expect(listaFizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });
  });
  
import fizzBuzz from './fizzBuzz.js'

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
  });
  
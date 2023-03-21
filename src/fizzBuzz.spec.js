import fizzBuzz from './fizzBuzz.js'

describe("Es FizzBuzz", () => {
    it("Si el número es 3 o múltiplo de 3 se imprime Fizz", () => {
      expect(fizzBuzz(3)).toEqual('Fizz');
    });
  });
  
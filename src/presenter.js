// import sumar from "./sumador";
import fizzBuzz from "./fizzBuzz";
import listaFizzBuzz from "/fizzBuzz";

const form_fizzBuzz = document.querySelector("#form-FizzBuzz");
const numero = document.querySelector("#valor");
const div = document.querySelector("#resultado-div");

form_fizzBuzz.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor = Number.parseInt(numero.value)

  div.innerHTML = "<p>" + listaFizzBuzz(valor) + "</p>";
});

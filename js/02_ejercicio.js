/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

let Nota = prompt("Por favor, Ingrese una nota del 0 al 10:");
if (isNaN(Nota) || Nota === "" || Nota === null) {
  alert("Por favor, Ingrese un numero valido");
} else {
  Nota = parseFloat(Nota);
}

if (Nota >= 0 && Nota <= 10 ) {
  let calificación;
  if (Nota >= 0 && Nota <= 2) {
    calificación = "Muy deficiente";
  } else if (Nota >= 3 && Nota <= 4) {
    calificación = "Insuficiente";
  } else if (Nota >= 5 && Nota <= 6) {
    calificación = "Suficiente";
  } else if (Nota === 7) {
    calificación = "Bien";
  } else if (Nota >= 8 && Nota <= 9) {
    calificación = "Notable";
  } else if (Nota === 10) {
    calificación = "Sobresaliente";
  }

  alert(calificación);
} else {
  alert("Ingreso un numero erroneo");
}

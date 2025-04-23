/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad = prompt("Por favor, ingrese su edad:");

if (isNaN(edad) || edad === "" || edad < 0) {
  alert("¡Error! Ingrese un número válido.");
} else if (parseInt(edad) >= 18) {
  alert("Felicidades, Ya puede conducir.");
} else {
  alert("Lo siento, No puede conducir aún.");
}


/*let edad = prompt("Por favor, ingrese su edad:");

while (isNaN(edad) || edad === "" || edad <= 0) {
    alert('Error... Debe ingresar un numero valido.');
    edad = prompt('Por favor, Ingrese su edad nuevamente:');
}

if (parseInt(edad) >= 18) {
    alert('Felicidades, Ya puedes conducir');
}else{
    alert('lo siento, No puede conducir aun.');
}*/
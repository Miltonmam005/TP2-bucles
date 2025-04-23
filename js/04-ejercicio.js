/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0
let continuar = true;

while (continuar) {
  const entrada = prompt("Ingrese un número (o pulse Cancelar para terminar):");
  if (entrada === null) { 
    continuar = false;
  } else {
    const numero = parseFloat(entrada);
    
    if (isNaN(numero)) { 
      alert("¡Error! Debe ingresar un número válido.");
    } else {
      suma += numero; 
    }
  }
}

alert(`La suma total de los números introducidos es: ${suma}`);
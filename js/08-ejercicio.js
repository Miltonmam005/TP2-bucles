/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

function generarPiramide() {
    
    let numero = parseInt(prompt("Ingrese un número entre 1 y 50:"));
    
    
    while (isNaN(numero) || numero < 1 || numero > 50) {
        if (isNaN(numero)) {
            numero = parseInt(prompt("¡Debe ingresar un número! Intente nuevamente (1-50):"));
        } else {
            numero = parseInt(prompt("¡Número fuera de rango! Ingrese entre 1 y 50:"));
        }
    }
    
    let piramide = "";
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            piramide += j;
        }
        piramide += "\n"; 
    }
    
    console.log(piramide);
    alert("Ver la consola para el resultado (F12)");
}

generarPiramide();
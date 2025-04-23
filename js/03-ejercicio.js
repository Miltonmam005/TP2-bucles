/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let cadenas = []
let continuar = true;

while (continuar) {
    const entrada = prompt('Ingrese una cadena de texto (o pulse canselar para terminar):');

    if (entrada === null) {
        continuar = false;
    } else if (entrada.trim() !== ""){
        cadenas.push(entrada);
    }

    if (continuar) {
        continuar = confirm('¿Desea ingresar otra cadena?');
    }
}

const resultado = cadenas.join("-");
alert("Cadenas concatenadas:\n" + resultado);
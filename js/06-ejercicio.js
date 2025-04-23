/*Dificultad:  🟢🟡
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

*/

function generarPiramide() {
    let piramide = "";
    for (let i = 1; i <= 30; i++) {
        piramide += i.toString().repeat(i) + "\n";
    }
    return piramide;
}


console.log(generarPiramide());

document.addEventListener('DOMContentLoaded', function() {
    const output = document.createElement('pre');
    output.textContent = generarPiramide();
    document.body.appendChild(output);
});
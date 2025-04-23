/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/


function piramideInversa(maximo) {
     if (maximo < 1 || maximo > 50 || isNaN(maximo)) {
        console.log("Por favor ingresa un número entre 1 y 50");
        return;
    }

    for (let i = maximo; i >= 1; i--) {
        let linea = "";
        for (let j = 0; j < i; j++) {
            linea += i;
        }
        console.log(linea);
    }
}

piramideInversa(30);  
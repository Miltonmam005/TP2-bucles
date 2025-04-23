/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math
*/

function generarTablaDescendente() {
    
    const filas = parseInt(prompt("Ingrese el número de filas:"));
    const columnas = parseInt(prompt("Ingrese el número de columnas:"));
    
    if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
      alert("Debe ingresar números válidos mayores a 0");
      return;
    }
    
    const totalCeldas = filas * columnas;
    let numeroActual = totalCeldas;
    let tablaHTML = "<table border='1'>";
    
    for (let i = 0; i < filas; i++) {
      tablaHTML += "<tr>";
      
      for (let j = 0; j < columnas; j++) {
        tablaHTML += `<td>${numeroActual--}</td>`;
      }
      
      tablaHTML += "</tr>";
    }
    
    tablaHTML += "</table>";
    
    document.body.innerHTML = tablaHTML;
  }
  
  generarTablaDescendente();
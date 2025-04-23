/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

*/

function imprimirNumeros() {
    let output = "";
    
    for (let i = 1; i <= 500; i++) {
      let line = i.toString();
      
  
      if (i % 4 === 0 && i % 9 === 0) {
        line += " (Múltiplo de 4 y 9)";
      } else if (i % 4 === 0) {
        line += " (Múltiplo de 4)";
      } else if (i % 9 === 0) {
        line += " (Múltiplo de 9)";
      }
      
      output += line + "\n";
      
      if (i % 5 === 0) {
        output += "";
      }
    }
    
    console.log(output);
    
    if (typeof document !== 'undefined') {
      document.body.innerHTML = `<pre>${output}</pre>`;
    }
  }
  
  imprimirNumeros();
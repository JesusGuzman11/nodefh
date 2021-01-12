/* 
Debido a la pila de procesos de node
se ejecuta primero el inicio y los timeouts depues
por que son un proceso async entonces tienen que pasar por
la pila de apis y de callbacks antes de pasar al main
por eso es resultado es:
-Inicio del programa.
-Fin del programa.
-Segundo Timeout.
-Tercer Timeout.
-Primer Timeout.
*/

console.log("Inicio del programa");

setTimeout(function () {
  console.log("Primer Timeout");
}, 3000);

setTimeout(function () {
  console.log("Segundo Timeout");
}, 0);

setTimeout(function () {
  console.log("Tercer Timeout");
}, 0);

console.log("Fin del programa");

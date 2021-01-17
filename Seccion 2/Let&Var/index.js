/*
Output: Tirsa ya que se puede inicializar los tipo var n veces
var nombre = "Jesus";
var nombre = "Annie";

if (true) {
  var nombre = "Tirsa";
}
console.log(nombre);
*/

// Inicializacion de la variable
let nombre = "Jesus";

if (true) {
  // Nueva variable que solo vive dentro de este scope
  let nombre = "Annie";
}

/*
Error si intentamos declarar de nuevo nombre
let nombre = "LOL";
*/

console.log(nombre);

/*
Output: 0-6 por que se usa var i es inicializada globalmente

for (var i = 0; i <= 5; i++) {
  console.log(i);
}

console.log(i)
*/

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
/*
Error por que i no esta definida globalmente se tendria que inicializar antes
let i = "Un valor"
console.log(i)
*/

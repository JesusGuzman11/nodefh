let nombre = "Jesus";
let apellido = "Guzman";

// Ambos console imprimen Jesus Guzman
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

let nombreCompleto = nombre + " " + apellido;
let nombreTemplate = `${nombre} ${apellido}`;

// True ya que son sintacticamente iguales
console.log(nombreCompleto === nombreTemplate);

function imprimrirNombre() {
  return `${nombre} ${apellido}`;
}

// Jesus Guzman
console.log(imprimrirNombre());

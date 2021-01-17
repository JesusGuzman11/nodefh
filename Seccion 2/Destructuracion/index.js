let superman = {
  nombre: "Clark",
  apellido: "Kent",
  poder: "Super Fuerza",
  getNombre: function () {
    return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
  },
  /*
  Otra manera de declararlo
  getNombre() {
    return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
  }
  */
};

/* Destructuracion de objeto forma antigua
let nombre = superman.nombre;
let apellido = superman.apellido;
let poder = superman.poder;
*/

// Nueva variable primerNombre tomando la clave nombre del objeto superman
let { nombre: primerNombre, apellido, poder } = superman;

/*
Error si usamos nombre
console.log(primerNombre);
*/

console.log(primerNombre);

console.log(apellido);

console.log(poder);

console.log(superman.getNombre());

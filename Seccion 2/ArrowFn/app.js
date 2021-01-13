function sumar(a, b) {
  return a + b;
}

let sumarArrow = (a, b) => a + b;

// 30
console.log(sumar(10, 20));
console.log(sumarArrow(10, 20));

function saludar() {
  return "Hola Mundo";
}

let saludarArrow = () => "Hola Mundo";

// Hola Mundo
console.log(saludar());
console.log(saludarArrow());

let superman = {
  nombre: "Clark",
  apellido: "Kent",
  poder: "Super Fuerza",
  /*
  Undefiner nombre, apellido y poder por que this apunta a global
  getNombre: () => {
    return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
  },
  */
  getNombre() {
    return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
  }
};

console.log(superman.getNombre());

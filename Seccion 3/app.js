/* Imports */
const { crearTabla } = require("./multiplicar/multiplicar");

// console.log(module);
// console.log(crearTabla)
// console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]

crearTabla(base)
  .then((archivo) => console.log(`Archivo creado ${archivo}`))
  .catch((error) => console.log(error));

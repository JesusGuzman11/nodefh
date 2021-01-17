/* Promesas */
// DB
let empleados = [
  {
    nombre: "Jesus",
    id: 1,
  },
  {
    nombre: "Annie",
    id: 2,
  },
  {
    nombre: "Tirsa",
    id: 3,
  },
];

let salarios = [
  {
    id: 1,
    salario: 3000,
  },
  {
    id: 2,
    salario: 5000,
  },
];

let getEmpleado = (id) => {
  // ES6 Estructura de promise
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id);
    if (!empleadoDB) {
      // Reject si no se encuentra
      reject(`No existe un empleado con el ID: ${id}`);
    } else {
      // Resolve solo manda un parametro si se quiere agregar mas cosas debe hacerse en un objeto
      // resolve({empleado: empleadoDB})
      resolve(empleadoDB);
    }
  });
};

let getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find((salario) => salario.id === empleado.id);
    if (!salarioDB) {
      reject(`El empleado ${empleado.nombre} no tiene salario`);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id,
      });
    }
  });
};

// Promesas en cadena
getEmpleado(1)
  .then((empleado) => {
    // Requisito hacer retorno de otra promesa para poder usar otro then
    return getSalario(empleado);
  })
  .then((resp) =>
    console.log(`El salario de ${resp.nombre} es de $${resp.salario}`)
  )
  // Manejo de errores cuando una de las promesas falle
  .catch((error) => console.log(error));

/* Se puede en el then mandar el error como segundo parametro de esta funcion
getEmpleado(3).then(
  (empleado) => {
    getSalario(empleado).then(
      (resp) => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);
*/

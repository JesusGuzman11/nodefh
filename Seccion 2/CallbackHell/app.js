/*Callback Hell*/

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

let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID: ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find((salario) => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`El empleado ${empleado.nombre} no tiene salario`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id,
    });
  }
};

getEmpleado(3, (error, empleado) => {
  if (error) {
    return console.log(error);
  }
  getSalario(empleado, (error, resp) => {
    if (error) {
      return console.log(error);
    }
    console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
  });
});

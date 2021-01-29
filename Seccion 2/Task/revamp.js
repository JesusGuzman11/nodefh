/* Task with async-await */
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

let getEmpleado = async (id) => {
  // ES7 Asnc function
  let empleadoDB = empleados.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    // Lanza error cuando no existe el empleado
    throw `No existe un empleado con el ID: ${id}`;
  } else {
    // resuelve el empleado
    return empleadoDB;
  }
};

let getSalario = async (empleado) => {
  let salarioDB = salarios.find((salario) => salario.id === empleado.id);
  if (!salarioDB) {
    throw `El empleado ${empleado.nombre} no tiene salario`;
  } else {
    return {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id,
    };
  }
};

let getInfo = async (id) => {
  try {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `El salario de ${resp.nombre} es de ${resp.salario} MXN`;
  } catch (error) {
    throw error;
  }
};

getInfo(3)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));

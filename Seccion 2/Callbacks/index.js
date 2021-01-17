/* Callback basico que se ejecuta despues de 3seg
setTimeout(() => {
  console.log("Hola Mundo");
}, 3000); */

let getUserById = (id, callback) => {
  let user = {
    nombre: "Jesus",
    id,
  };

  if (id === 20) {
    callback(`El usuario con ${id} no existe en la DB`);
  } else {
    callback(null, user);
  }
};

getUserById(10, (error, user) => {
  if (error) {
    return console.log(error);
  }
  console.log("Usuario de la DB", user);
});

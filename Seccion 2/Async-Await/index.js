/* Async-Await */

/* Al poner async el retorno se vuelve una promesa
let getNombre = async () => {
  // Si existe un error dispara el reject de una promesa y se maneja en el catch
  // throw new Error("Ocurrio un error");
  return "Jesus";
};
*/

// Lo que hace async es crear una promesa con un resolve cuando tiene return
let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jesus");
    }, 3000);
  });
};

let saludo = async () => {
  /*
  Funcion getNombre retorna una promesa por eso se puede usar await
  depues se guarda en una variable y por eso se puede usar despues;
  hay que tener cuidado por que si getNombre no resuelve nada se queda
  en un ciclo infinito
  */

  try {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
  } catch (error) {
    throw error;
  }
};

saludo()
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));

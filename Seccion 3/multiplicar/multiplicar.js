const fs = require("fs");
// const fs = require("express") Archivos externos a nuestro proyecto
// const fs = require(./archivo) Archivos que nosotros escribimos

let dataTabla = "";

const crearTabla = (base) => {
  return new Promise((resolve, reject) => {
    /* Venjata de usar Number es que aunque mandemos '7' es valido por que es un numero */
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }
    for (let i = 0; i <= 10; i++) {
      dataTabla += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, dataTabla, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearTabla,
};

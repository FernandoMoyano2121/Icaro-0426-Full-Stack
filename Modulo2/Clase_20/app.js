/* const parrafo = document.querySelector("p");
console.log(parrafo.nodeType); */ // 1- ELEMENT-NODE

import { Operaciones } from "./operaciones/operaciones";
/* import Operaciones from "./operaciones/operaciones"; */

/* console.log(parrafo.firstChild.nodeType); */ //TEXT-NODE

const cursos = [
  {
    nombre: "Javascript",
    descripcion: "lorem fijfsdif",
    imagen: "./imaen",
  },
  {
    nombre: "Javascript",
    descripcion: "lorem fijfsdif",
    imagen: "./imaen",
  },
  {
    nombre: "Javascript",
    descripcion: "lorem fijfsdif",
    imagen: "./imaen",
  },
];

cursos.forEach((curso) => {
  crearTajeta(curso);
});

function crearTajeta(curso) {
  const card = document.createElement("div");
  card.textContent = curso.descripcion;
  card.classList.add("parrafo");
  const contenedor = document.getElementById("contenedor");

  contenedor.appendChild(card);
}

/* ------------------------------------------- */

const operacion1 = new Operaciones();
const resultado = operacion1.suma(4, 9);
console.log(resultado);

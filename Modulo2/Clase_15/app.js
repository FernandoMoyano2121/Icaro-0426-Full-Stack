/* const nombre = "Fernando";*/

/* const edad = 30; */

//console.log(objeto.propiedad/metodo)

/* console.log(persona.nombre); */ //Fernando
/* console.log(persona["nombre"]); */ //Fernando
/* console.log(persona.saludar()); */

/*
for(let nombreDeVariable of objeto){}
for(let key of object){} 
*/

/* 
const clave = persona.nombre;
console.log(clave);
*/

/* const nombre = persona["nombre"]; */

//OBJETO LITERAL
const persona = {
  nombre: "Fernando",
  edad: 34,
  profesion: "Programador",

  saludar: function () {
    console.log("Hola! ");
  },

  /*   saludar: () => {
    console.log("Hola! ");
  }, */
};

for (let clave in persona) {
  console.log(`clave${clave}: ${persona[clave]}`);
}

console.log(Object.keys(persona));
console.log(Object.values(persona));

/* -------------------------------------------- */

let tareas = [
  {
    id: 1,
    titulo: "Estudiar",
    completada: false,
  },
  {
    id: 2,
    titulo: "Hacer las compras",
    completada: true,
  },
  {
    id: 3,
    titulo: "Pasear al perro",
    completada: true,
  },
];

/* const array = [];
const object = {};
*/

//CRUD
function agregarTarea() {
  let titulo = prompt("Ingresa la tarea");

  if (titulo === null || titulo === "") {
    console.log("El formato no es el correcto");
  } else {
    let nuevaTarea = {
      id: 4,
      titulo: titulo,
      completada: false,
    };
    tareas.push(nuevaTarea);
    alert("✅Tarea agregada con éxito");
  }
}

function mostrarTareas(listadoDeTareas) {
  if (listadoDeTareas.length === 0) {
    console.log("No tienes tareas");
  } else {
    listadoDeTareas.forEach(function (tarea) {
      let estado = "pendiente";

      if (tarea.completada === true) {
        estado = "completada";
      }

      console.log(
        `ID: ${tarea.id}-${tarea.titulo}-${tarea.completada}-${estado}`,
      );
    });
  }
}

function eliminarTarea() {
  let idIngresado = prompt("Ingresa el id de la tarea que quieres eliminar");

  if (idIngresado === null) {
    console.log("Operacion cancelada");
    return;
  }

  let idTarea = Number(idIngresado);
  let cantidadInicial = tareas.length;

  tareas = tareas.filter(function (tarea) {
    // Si el ID coincide con el ingresado, excluye esa tarea del arreglo.
    if (tarea.id === idTarea) {
      return false;
    }
    return true;
  });

  // Si el arreglo tiene menos tareas, significa que se eliminó una tarea.
  if (tareas.length < cantidadInicial) {
    console.log("Tarea eliminada");
  } else {
    console.log("No se encontró el id ");
  }
}

let continuar = true;

while (continuar === true) {
  let opcion = parseInt(
    prompt(
      "APLICACION TAREA-------------\n" +
        "1. Ver las tareas\n" +
        "2. Agegar Tarea\n" +
        "3. Eliminar Tarea\n" +
        "0. Salir",
    ),
  );
  if (opcion === null || opcion === 0) {
    continuar = false;
    alert("Aplicaccion finalizada");
  } else if (opcion === 1) {
    mostrarTareas(tareas);
  } else if (opcion === 2) {
    agregarTarea();
  } else if (opcion === 3) {
    eliminarTarea();
  } else {
    alert("La opcion ingresada no es valida");
  }
}

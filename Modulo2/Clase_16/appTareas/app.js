class Tarea {
  #id;
  #titulo;
  #completada;

  constructor(id, titulo, completada = false) {
    this.#id = id;
    this.#titulo = titulo;
    this.#completada = completada;
  }

  get id() {
    return this.#id;
  }

  get titulo() {
    return this.#titulo;
  }

  get completada() {
    return this.#completada;
  }

  set id(nuevoId) {
    this.#id = nuevoId;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }

  /*
    set completada(nuevoEstado) {
    this.#completada = nuevoEstado;
  }  
  */

  completada() {
    this.#completada = true;
  }

  mostrar() {
    let estado = "pendiente";

    if (this.#completada == true) {
      estado = "completada";
    }

    return `ID: ${this.#id}-${this.#titulo}-${estado}`;
  }
}

class ListaTarea {
  #listado;
  #nextId;

  constructor() {
    this.#listado = [];
    this.#nextId = 1;
  }

  agregarTarea(titulo) {
    if (titulo === "" || titulo === null) {
      console.log("No se agrego la tarea, completa los campos");
    } else {
      const nuevaTarea = new Tarea(this.#nextId, titulo);
      this.#listado = [...this.#listado, nuevaTarea];
      /*  this.#listado.push(tarea1); */
      this.#nextId = this.#nextId++;
      alert("✅Tarea agregada con éxito");
    }
  }

  mostrarListado(listadoDeTareas) {
    if (listadoDeTareas.length === 0) {
      alert("No tienes tareas");
    } else {
      let mensaje = `LISTADO DE TAREAS\n`;
      /*
        listadoDeTareas.forEach(function (tarea) {
        mensaje = mensaje + tarea.mostrar() + "\n";
      }); 
      */
      listadoDeTareas.forEach((tarea) => {
        mensaje += `${tarea.mostrar()} \n`;
      });
    }
    alert(mensaje);
  }

  mostrarTareasPendientes() {
    /*
      const tareasPendientes = this.#listado.filter(
      (tarea) => tarea.completa === false,
    );
    */
    const tareasPendientes = this.#listado.filter((tarea) => !tarea.completa);
    this.mostrarListado(tareasPendientes);
  }

  mostrarTareasCompletadas() {
    /*
      const tareasCompletadas = this.#listado.filter(
      (tarea) => tarea.completa === true,
    );
    */
    const tareasCompletadas = this.#listado.filter((tarea) => tarea.completa);
    this.mostrarListado(tareasCompletadas);
  }
}

const listadoDeTareas = new ListaTarea();

listadoDeTareas.agregarTarea("Lavar");
listadoDeTareas.agregarTarea("estudiar");

let continuar = true;
while (continuar === true) {
  let opcion = prompt(
    "APLICACIÓN DE TAREAS\n" +
      "1. Ver todas las tareas\n" +
      "2. Agregar una tarea\n" +
      "3. Completar una tarea\n" +
      "4. Eliminar una tarea\n" +
      "5. Ver tareas pendientes\n" +
      "6. Ver tareas completadas\n" +
      "0. Salir",
  );

  if (opcion === "0" || opcion === null) {
    continuar = false;
  } else {
    if (opcion === "1") {
      listadoDeTareas.mostrarListado();
    }
  }
}

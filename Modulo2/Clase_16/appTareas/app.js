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

  set completada(nuevoEstado) {
    this.#completada = nuevoEstado;
  }

  mostrar() {
    let estado = "pendiente";

    if (this.#completada == true) {
      estado = "completada";
    }

    console.log(`ID: ${this.#id}-${this.#titulo}-${estado}`);
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
    const tarea1 = new Tarea(this.#nextId, titulo);
    this.#listado.push(tarea1);
    this.#nextId = this.#nextId++;
    alert("✅Tarea agregada con éxito");
  }

  mostrarListado() {
    this.#listado.forEach(function (tarea) {
      tarea.mostrar();
    });
  }
}

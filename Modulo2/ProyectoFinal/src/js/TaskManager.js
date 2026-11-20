import Task from "./Task.js";

class TaskManager {
  constructor() {
    this.tareas = [];
    this.nextId = 1;
  }

  agregar(nombre, prioridad, vencimiento) {
    const tarea = new Task(this.nextId++, nombre, prioridad, vencimiento);
    this.tareas.push(tarea);
  }

  editar(id, nombre, prioridad, vencimiento) {
    const tarea = this.tareas.find((t) => t.id === id);

    tarea.nombre = nombre;
    tarea.prioridad = prioridad;
    tarea.vencimiento = vencimiento;
  }
}

import { Task } from "./Task.js";

export class TaskManager {
  constructor() {
    this.tareas = [];
    this.nextId = 1;
  }

  buscarPorId(id) {
    return this.tareas.find((t) => t.id === id);
  }

  agregar(nombre, prioridad, vencimiento) {
    const tarea = new Task(this.nextId, nombre, prioridad, vencimiento);
    this.tareas.push(tarea);
    this.nextId = this.nextId + 1;
  }

  editar(id, nombre, prioridad, vencimiento) {
    const tarea = this.buscarPorId(id);

    if (!tarea) {
      throw new Error(`No se encontró la tarea con id ${id}`);
    }

    tarea.nombre = nombre;
    tarea.prioridad = prioridad;
    tarea.vencimiento = vencimiento;
  }

  /* Eliminar una tarea */
  eliminar(id) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }

  marcarCompletada(id) {
    const tarea = this.buscarPorId(id);

    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }

  /* Obtener las tareas completadas */
  obtenerCompletadas() {
    return this.tareas.filter((t) => t.completada);
  }

  /* Obtener las tareas pendientes */
  obtenerPendientes() {
    return this.tareas.filter((t) => !t.completada);
  }
}

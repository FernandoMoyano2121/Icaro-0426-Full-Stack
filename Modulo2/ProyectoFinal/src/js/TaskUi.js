export class TaskUi {
  constructor(manager) {
    this.manager = manager;
    this.tareaEditando = null;

    this.inputNombre = document.getElementById("nombreTarea");
    this.selectPrioridad = document.getElementById("prioridadTarea");
    this.inputVencimiento = document.getElementById("fechaVencimiento");
    this.btnAgregar = document.getElementById("agregarTarea");
    this.listado = document.getElementById("listadoTareas");
    this.pendientes = document.getElementById("tareasPendientes");

    this.btnAgregar.addEventListener("click", () => this.handleAgregar());
  }

  handleAgregar() {
    const nombre = this.inputNombre.value.trim();
    const prioridad = this.selectPrioridad.value;
    const vencimiento = this.inputVencimiento.value;

    if (!nombre || !vencimiento) {
      alert("Debes rellenar todos los campos");
      return;
    }

    if (this.tareaEditando) {
      this.manager.editar(
        this.tareaEditando.id,
        nombre,
        prioridad,
        vencimiento,
      );
    } else {
      this.manager.agregar(nombre, prioridad, vencimiento);
    }

    this.limpiarFormulario();
    this.render();
  }

  handleEliminar(tarea) {
    this.manager.eliminar(tarea.id);
    this.render();
  }

  cargarParaEdicion(tarea) {
    this.inputNombre.value = tarea.nombre;
    this.selectPrioridad.value = tarea.prioridad;
    this.inputVencimiento.value = tarea.vencimiento;

    this.tareaEditando = tarea;
    this.btnAgregar.textContent = "Guardar cambios";
  }

  render() {
    this.listado.innerHTML = "";
    this.manager.tareas.forEach((tarea) => {
      //Insertar nodo de la tarea
      this.listado.append(this.crearItem(tarea));
    });
    this.pendientes.textContent = `Tareas pendientes ${this.manager.obtenerPendientes().length}`;
  }

  crearItem(tarea) {
    const item = document.createElement("li");
    item.classList =
      "list-group-item d-flex justify-content-around align-items-center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
      this.manager.marcarCompletada(tarea.id);
      this.render();
    });

    const info = this.crearInfo(tarea);

    const btnEditar = this.crearBoton("Editar", "btn btn-success");
    btnEditar.addEventListener("click", () => this.cargarParaEdicion(tarea));

    const btnEliminar = this.crearBoton("Eliminar", "btn btn-danger");
    btnEliminar.addEventListener("click", () => this.handleEliminar(tarea));

    item.append(checkbox, info, btnEditar, btnEliminar);
    return item;
  }

  crearInfo(tarea) {
    const info = document.createElement("span");

    const nombre = document.createElement("strong");
    nombre.textContent = `Titulo = ${tarea.nombre}`;

    const prioridad = document.createElement("span");
    prioridad.textContent = `Prioridad = ${tarea.prioridad}`;

    const vence = document.createElement("strong");
    vence.textContent = `Vence = ${tarea.vencimiento}`;

    info.append(nombre, prioridad, vence);
    return info;
  }

  crearBoton(texto, clase) {
    const btn = document.createElement("button");
    btn.textContent = texto;
    btn.className = clase;

    return btn;
  }

  limpiarFormulario() {
    this.inputNombre.value = "";
    this.selectPrioridad.value = "";
    this.inputVencimiento.value = "";

    this.tareaEditando = null;
    this.btnAgregar.textContent = "Agregar";
  }
}

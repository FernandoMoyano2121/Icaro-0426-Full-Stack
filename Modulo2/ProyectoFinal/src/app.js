import { TaskManager } from "./js/TaskManager.js";
import { TaskUi } from "./js/TaskUi.js";

const manager = new TaskManager();
const taskUi = new TaskUi(manager);

taskUi.render();

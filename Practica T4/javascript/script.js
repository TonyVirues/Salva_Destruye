/**
 * Define class task
 * add task in the table
 */

class Tarea {

    /**
     * Start construct
     * @param {*} id 
     * @param {*} descripcion 
     */

    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    //Getters
    /**
     * 
     * @returns 
     */
    getDescripcion() {
        return this.descripcion;
    }

    //Setters
    /**
     * 
     * @param {*} nuevaDescripcion 
     */
    setDescripcion(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }
}

/**
 * Define class CRUD
 * made a task
 * read a task
 * upload a task
 * delete a task
 */

class TareaManager {  //Business Logic

    /**
     * Start construct
     * @param {*} tareas
     * @param {*} nextId
     */
    constructor() {
        this.tareas = []; //Arraylist save a task
        this.nextId = 1;  //Arraylist save a id
    }

    /**
     * Function add task in column "descripcion de tarea"
     * @param {*} descripcion 
     */
    addTarea(descripcion) {
        
        //Made a new task and increment id in one
        let nuevaTarea = new Tarea(this.nextId, descripcion); //LET Estoy cambiando los const por las variables que siempre usamos
        this.tareas.push(nuevaTarea);
        this.nextId++;
    }
    
    /**
     * Get
     * @returns 
     */
    getTareas() {
        return this.tareas;
    }

    /**
     * Function uploading task
     * @param {*} id 
     * @param {*} nuevaDescripcion 
     */
    updateTarea(id, nuevaDescripcion) {

        //Search in arraylist with for and uploading
        let tarea = this.tareas.find(t => t.id === id); //LET
        if (tarea) {
            tarea.setDescripcion(nuevaDescripcion); //llamada de la funcion dentro de la clase task
        }
    }

    /**
     * Function delete task
     * @param {*} id 
     */
    deleteTarea(id) {

        //Search in arraylist one task and delete with for
        this.tareas = this.tareas.filter(t => t.id !== id);
    }
}
/**
 * END CLASS
 */
const tareaManager = new TareaManager();

/**
 * Control variables
 */
let tareaEnEdicionId = null;

/**
 * Function generate rows and columns
 */
function renderTareas() {
    
    /**
     * 
     */
    let tableBody = document.getElementById("tasktable");
    tableBody.innerHTML = "";

    let tareas = tareaManager.getTareas();

    tareas.forEach(tarea => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <th scope="row">${tarea.id}</th>
            <td>${tarea.getDescripcion()}</td>
            <td>
                <button class="btn btn-warning btn-sm me-2" onclick="editarTarea(${tarea.id})">
                    Edit
                </button>
                <button class="btn btn-danger btn-sm">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

//ejemplo para comprobar que funciona
tareaManager.addTarea("Estudiar JavaScript");
tareaManager.addTarea("Haciendo cosas de durillo");

renderTareas();


/**
 * Function for cast Button save
 */
let saveTaskBtn = document.getElementById("saveTaskBtn"); //let
let taskDescriptionInput = document.getElementById("taskDescription"); //let

saveTaskBtn.addEventListener("click", () => {
    let descripcion = taskDescriptionInput.value.trim(); //let

    /**
     * Condition to avoid empty input.
     */
    if (descripcion === "") {
        alert("La descripción no puede estar vacía");
        return;
    }

    /**
     * Cast function add
     */
    tareaManager.addTarea(descripcion);

    /**
     * Clean
     */
    taskDescriptionInput.value = "";

    /**
     * Cast function for upload
     */
    renderTareas();

    /**
     * Close modal
     */
    let modal = bootstrap.Modal.getInstance(         //let
        document.getElementById("taskModal")
    );
    modal.hide();
});

/**
 * Function edit task for id
 * @param {*} id 
 * @returns 
 */
function editarTarea(id) {
    let tarea = tareaManager.getTareas().find(t => t.id === id);
    if (!tarea) return;

    /**
     * Keep the id being edited
     */
    tareaEnEdicionId = id;

    /**
     * Loading date in input
     */
    taskDescriptionInput.value = tarea.getDescripcion();

    /**
     * Changue title edit
     */
    document.querySelector("#taskModal .modal-title").textContent = "Editar tarea";

    /**
     * Open de modal
     */
    const modal = new bootstrap.Modal(
        document.getElementById("taskModal")
    );
    modal.show();
}

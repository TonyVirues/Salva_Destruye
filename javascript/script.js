/**
 * Define class task
 * add task in the table
 */

class Task {

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

class CRUD {

    /**
     * Start construct
     * @param {*} tareas
     * @param {*} nextId
     */
    constructor() {
        this.tareas = [];
        this.nextId = 1;
    }

    /**
     * Function add task in column "descripcion de tarea"
     * @param {*} descripcion 
     */
    addTarea(descripcion) {
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
        //
        let tarea = this.tareas.find(t => t.id === id); //LET
        if (tarea) {
            tarea.setDescripcion(nuevaDescripcion);
        }
    }

    deleteTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
    }
}

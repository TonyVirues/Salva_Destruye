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
        this.tareas = []; //Arraylist save a task
        this.nextId = 1;  //Arraylist save a id
    }

    /**
     * Function add task in column "descripcion de tarea"
     * @param {*} descripcion 
     */
    addTarea(descripcion) {
        
        //made a new task and increment id in one
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
            tarea.setDescripcion(nuevaDescripcion);
        }
    }

    /**
     * Function delete task
     * @param {*} id 
     */
    deleteTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
    }
}


    let inputTarea = document.getElementById("inputAñadirTarea");
    let crearTabla = document.getElementById("tablaTarea");
    let tareasAñadidas =[];
    
    let textTarea = inputTarea.value.trim();
    function añadirTarea(){
        textTarea.puesh();
        madeTarea();


    }


    function madeTarea() {
        crearTabla.innerHTML = "";

            let tr = document.createElement("tr");
            textTarea.forEach(tarea =>{
                tr.innerHTML = `
                <td>${tarea}</td>
                <td>
                    <button onclick="eliminarCliente(${i})" class="btn btn-danger btn-sm">
                    Eliminar
                    </button>
                </td>
                `;
    
                tablaClientes.appendChild(tr);

            })
            
    };


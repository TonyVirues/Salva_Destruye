alert("esto es una cagada");
$( document ).ready(function() {
 
    let inputTarea = document.getElementById("inputAñadirTarea");
    let crearTabla = document.getElementById("tablaTarea");

    
    function añadirTarea(){
       let textTarea = inputTarea.value.trim();

    }


    function madeClientes() {
        crearTabla.innerHTML = "";
            let tr = document.createElement("tr");
            let textTarea = inputTarea.value.trim();

            tr.innerHTML = `
            <td>${textTarea}</td>
            <td>
                <button onclick="eliminarCliente(${i})" class="btn btn-danger btn-sm">
                Eliminar
                </button>
            </td>
            `;

            tablaClientes.appendChild(tr);
            
    };
});
$(document).ready(function() {

    let $inputTarea = $("#inputAñadir");
    let $tbody = $("#tablaTarea");
    let tareasAñadidas =[];//array.

    let filtroActual = "todas";

    //Función que dibuja la tarea en fila.
    function madeTarea() {
        $tbody.empty();
        let tareasfiltradas = tareasAñadidas.filter(tarea=>{
            if(filtroActual === "completadas") return tarea.completada;
            if(filtroActual === "pendientes") return !tarea.completada;
            return true; //Return para ver todas las tareas
        } )


        tareasfiltradas.forEach((tarea, i) => {
            let estilo = tarea.completada ? "text-decoration: line-through; color:#aaa" : "";

            let fila = `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td style="${estilo}">${tarea.texto}</td>
                    <td>
                        <button class="btn btn-info btn-sm btn-completar" data-index="${i}">
                            Completar
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm btn-editar" data-index="${i}">
                            Editar
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-eliminar" data-index="${i}">
                            Eliminar
                        </button>
                    </td>
                </tr>
            `;

            $tbody.append(fila);
        });    
    };
    /**
     * FUNCIONALIDAD BOTONES--->
     */

    //Botón que añade una nueva tarea.
    $("#botonAñadir").on("click", function () {
        let texto = $inputTarea.val().trim();
        if (texto === "") return;

        tareasAñadidas.push({
            texto: texto,
            completada: false
        });

        $inputTarea.val("");
        madeTarea();
    });


    //Permite agregar tarea presionando "enter".
    $("#inputAñadir").on("keypress", function(e) {
        if (e.which === 13) { //Número 13 es el código de la tecla enter.
            e.preventDefault();
            $("#botonAñadir").click();
        }
    });

    //Botón que completa una tarea.
    $tbody.on("click", ".btn-completar", function () {
        let i = $(this).data("index");
        tareasAñadidas[i].completada = !tareasAñadidas[i].completada;
        madeTarea();
    });

    //Botón que elimina tarea.
    $tbody.on("click", ".btn-eliminar", function () {
    let i = $(this).data("index");
    tareasAñadidas.splice(i, 1);
    madeTarea();
    });

    //Acción para filtrar la lista por botones.
    $("#filtroTodas").on("click", function () {
        filtroActual = "todas";
        madeTarea();
    });

    $("#filtroCompletadas").on("click", function () {
        filtroActual = "completadas";
        madeTarea();
    });

    $("#filtroPendientes").on("click", function () {
        filtroActual = "pendientes";
        madeTarea();
    });


//Fin del JQuery.
});


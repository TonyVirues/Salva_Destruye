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
    
    //Función para guardar el localStorage
    function guardarLocalStorage() {
    localStorage.setItem("tareasAñadidas", JSON.stringify(tareasAñadidas));
    }

    //Función que cambia el color de los botones al filtrar.
    function actualizarBotones(botonActivo){
        $("#filtroTodas, #filtroCompletadas, #filtroPendientes")
        .removeClass("btn-info").addClass("btn-dark");

        $(botonActivo).removeClass("btn-dark").addClass("btn-info");
    }
    
    //Comparación que permite cargar el localstorage
    if (localStorage.getItem("tareasAñadidas")) {
    tareasAñadidas = JSON.parse(localStorage.getItem("tareasAñadidas"));
    madeTarea();
    }
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
        guardarLocalStorage();
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
        guardarLocalStorage();
        madeTarea();
    });

    //Botón que elimina tarea.
    $tbody.on("click", ".btn-eliminar", function () {
    let i = $(this).data("index");
    tareasAñadidas.splice(i, 1);
    guardarLocalStorage();
    madeTarea();
    });

    //Botón editar tarea.
    $tbody.on("click",".btn-editar",function(){
        let i = $(this).data("index");

        let textoActual = tareasAñadidas[i].texto;

        let nuevoTexto = prompt("Edita la tarea: ", textoActual);

        if(nuevoTexto === null)return;
        if(nuevoTexto.trim()==="")return;

        tareasAñadidas[i].texto = nuevoTexto.trim();
        guardarLocalStorage();
        madeTarea();

    })

    //Acción para filtrar la lista por botones.
    $("#filtroTodas").on("click", function () {
        filtroActual = "todas";
        actualizarBotones(this);
        madeTarea();
    });

    $("#filtroCompletadas").on("click", function () {
        filtroActual = "completadas";
        actualizarBotones(this);
        madeTarea();
    });

    $("#filtroPendientes").on("click", function () {
        filtroActual = "pendientes";
        actualizarBotones(this);
        madeTarea();
    });


//Fin del JQuery.
});


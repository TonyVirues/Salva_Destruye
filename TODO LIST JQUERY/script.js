$(document).ready(function() {

    let $inputTarea = $("#inputAñadir");
    let $tbody = $("#tablaTarea");
    let tareasAñadidas =[];//array.
    

    //Función que añade una nueva tarea.
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

    //Función que dibuja la tarea en fila.
    function madeTarea() {
        $tbody.empty();
        tareasAñadidas.forEach((tarea, i) => {
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

    //Botón que completa una tarea.
    $tbody.on("click", ".btn-completar", function () {
        let i = $(this).data("index");
        tareasAñadidas[i].completada = !tareasAñadidas[i].completada;
        madeTarea();
    });



//fin del JQuery
});


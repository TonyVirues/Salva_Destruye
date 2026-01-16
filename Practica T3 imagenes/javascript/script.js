// Referencias a elementos del DOM No mires salva...no quiero que llores..


//JSON
const conjuntosDatos = {
    datos1: {
        categorias: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        valores: [40, 30, 20, 10],
        colores: ["#0d6efd", "#6610f2", "#198754", "#ffc107"]
    },
    datos2: {
        categorias: ["Bits", "Vectoriales", "SVG", "ApexCharts"],
        valores: [25, 25, 30, 20],
        
    }
};




let cantidadSelector = document.getElementById("cantidadSelector");
let tablaImagenes = document.getElementById("tablaImagen");
let datosSelector = document.getElementById("datosSelector");
/**
 * Función para generar imágenes
 * @param {*} cantidad 
 */
function generarImagenes(cantidad) {

    /**
     * limpiamos la tabla
     */
    tablaImagenes.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {

        //Crear las celdas
        const filas = document.createElement("tr");

        //Crear la celda con el id
        const celdaId = document.createElement("td");
        celdaId.textContent = i;

        //Crear las celdas con las imagenes
        const celdaImagenes = document.createElement("td");
        const imagenes = document.createElement("img");


        const timestamp = Date.now(); //const timestamp = new Date().getTime(); //averiguar que es esto
        imagenes.src = `https://picsum.photos/100/100?random=${i}&t=${timestamp}`;
        imagenes.className = "rounded-circle mx-auto mt-3";
        imagenes.loading = "lazy";
        imagenes.alt = `Imagen ${i}`;
        celdaImagenes.appendChild(imagenes);

        //Celda para la descripción
        const celdaDescripcion = document.createElement("td");
        celdaDescripcion.textContent = "Imágen aleatoria de Picsum.photos";

        //appendchilld
        filas.appendChild(celdaId);
        filas.appendChild(celdaImagenes);
        filas.appendChild(celdaDescripcion);

        tablaImagenes.appendChild(filas);
    }
}
//Cantidad del selector
cantidadSelector.addEventListener("change", () => {
    generarImagenes(cantidadSelector.value);
});

/**
 * LLamada de la función para crear
 * las celdas y las imagenes
 */
generarImagenes(cantidadSelector.value);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<----------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**
 * SEPARACION DEL PRIMER 
 * APARTADO
 * Y DEL
 * SEGUNDO APARTADO
 * QUE NO VEO NA
 */

/**
 * grafico de ejemplo
 * @param {*}  
 */
let graficoBarras;

function crearGraficoBarras(datos) {

    const opciones = {
        chart: {
            type: "bar",
            height: 300
        },
        plotOptions: {
            bar: {
                distributed: true
            }
        },
        colors: datos.colores,
        series: [{
            name: "Valores",
            data: datos.valores
        }],
        xaxis: {
            categories: datos.categorias
        }
    };

    if (graficoBarras) {
        graficoBarras.updateOptions(opciones);
    } else {
        graficoBarras = new ApexCharts(
            document.querySelector("#graficoBarras"),
            opciones
        );
        graficoBarras.render();
    }
}
/**
 * Gráfico donut
 */
let graficoDonut;



function crearGraficoDonut(datos) {
    const opciones = {
        chart: {
            type: "donut",
            height: 300
        },
        series: datos.valores,
        labels: datos.categorias
    };

    if (graficoDonut) {
        graficoDonut.updateOptions(opciones);
    } else {
        graficoDonut = new ApexCharts(
            document.querySelector("#graficoDonut"),
            opciones
        );
        graficoDonut.render();
    }
}



function actualizarGrafico() {
    const datosSeleccionados = conjuntosDatos[datosSelector.value];
    crearGraficoBarras(datosSeleccionados);
    crearGraficoDonut(datosSeleccionados);
}

datosSelector.addEventListener("change", actualizarGrafico);

// Gráfico inicial
actualizarGrafico();
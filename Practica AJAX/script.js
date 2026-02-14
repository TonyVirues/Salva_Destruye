console.log("que le ocurre");
// OFFSET = (PAG-1)*LIMIT SACAR PAGINAS PAGES=COUNT/LIMIT Y REDODNEAR HACIA ARRIBA
//Gate
let tableBody = document.getElementById("resultado");
let selectorOrden = document.getElementById("orden");
let inputBuscarNombre = document.getElementById("inputBusqueda");
let btnBuscar = document.getElementById("btnBuscar");
let btnInicio = document.getElementById("principio");
let btnAtras = document.getElementById("prev");
let btnSiguiente = document.getElementById("next");
let btnFin = document.getElementById("ultima");

//Array para almacenar los datos extraídos.
let dataArray = [];

//Variables de paginación.
let paginaActual = 1;
let cantidadPorPagina = 2;



/**
 * FUNCIONES
 */
//Funciones de tablas -------->

//Función que inicia la app, pintando la tabla y guardando los datos extraídos.
async function iniciarApp() {
  dataArray = await extraerDatos();
  // crearTabla(dataArray); //quitamos crear tabla y metemos la funcion de la paginacion
  paginasContenido();
}

//Función que pinta la tabla.
function crearTabla(dataArray) {

  tableBody.innerHTML = "";

    dataArray.forEach(valor => {

      //Creación de filas.
      let filas = document.createElement("tr");

      //Creación de las diferentes celdas.
      let celdaNombre = document.createElement("td");
      let celdaCorreo = document.createElement("td");
      let celdaCiudad = document.createElement("td");

      //Guardamos el valor en una celda.
      celdaNombre.textContent = valor.name;
      celdaCorreo.textContent = valor.email;
      celdaCiudad.textContent = valor.address.city;
      
      //Imprimimos las celdas creadas en el html.
      filas.appendChild(celdaNombre);
      filas.appendChild(celdaCorreo);
      filas.appendChild(celdaCiudad);
      tableBody.appendChild(filas);

    });
}

//Función que ordena los datos por alfabeticamente.
function  ordenAscendente(){
  tableBody.innerHTML ="";
  let copiadataArray = [];
  copiadataArray = dataArray;
  copiadataArray.sort((a,b) => a.name.localeCompare(b.name));
  crearTabla(copiadataArray);
  
}

//Función que ordena los dato alfabeticamente de forma descendente.
function ordenarDescendente(){
  tableBody.innerHTML ="";
  let copiadataArray = [];
  copiadataArray = dataArray;
  copiadataArray.sort((a,b) => b.name.localeCompare(a.name));
  crearTabla(copiadataArray);
}

//Función que busca el nombre.
function buscarNombre(){
  let textoBusqueda = inputBuscarNombre.value.trim().toLowerCase();
  if (textoBusqueda == ""){
    tablaVacia();
  }else{
    let resultadoBuscar = dataArray.filter(value => value.name.toLowerCase() === textoBusqueda || value.address.city.toLowerCase() === textoBusqueda );
    if (resultadoBuscar.length === 0){
      tablaVacia();
    }else{
      crearTabla(resultadoBuscar);
    }
  }
}

//Función que imprime tabla "no hay registros".
function tablaVacia(){
    tableBody.innerHTML = "";
      //Creación de filas.
      let filas = document.createElement("tr");

      //Creación de las diferentes celdas.
      let celdaNombre = document.createElement("td");
      let celdaCorreo = document.createElement("td");
      let celdaCiudad = document.createElement("td");

      //Guardamos el valor en una celda.
      celdaNombre.textContent = "No hay registros";
      celdaCorreo.textContent = "No hay registros";
      celdaCiudad.textContent = "No hay registros";
      
      //Imprimimos las celdas creadas en el html.
      filas.appendChild(celdaNombre);
      filas.appendChild(celdaCorreo);
      filas.appendChild(celdaCiudad);
      tableBody.appendChild(filas);

    
}

//Funciones de paginación -------->

//Función que devuelve el numero total de páginas disponibles.
function obtenerPaginasTotales(){
  return Math.ceil(dataArray.length/cantidadPorPagina);
}

//Función que devuelve datos de la página deseada.
function paginasContenido(){

  let pagInicio = (paginaActual-1)*cantidadPorPagina;
  let pagFin = pagInicio + cantidadPorPagina;

  let imprimirPaginas = dataArray.slice(pagInicio,pagFin);

  crearTabla(imprimirPaginas);
  gestionBotones();
}

//Función que valida botones segun la página.
function gestionBotones(){

  let paginasTotales = obtenerPaginasTotales(); //Cambiar

/**
 * Condicional para las primeras páginas
 */
  //Condicional para que botones de principio y atras, se desactiven en pagina 1.
  if (paginaActual=== 1){
    btnInicio.setAttribute("disabled",true);
    btnAtras.setAttribute("disabled",true);
  //Condicional para que boton de principio se desactive en pagina 2.
  }else if(paginaActual===2){
    btnInicio.setAttribute("disabled",true);
    btnAtras.removeAttribute("disabled");
  //Condicional para que ambos botones se activen en el resto de páginas.
  }else{
    btnInicio.removeAttribute("disabled");
    btnAtras.removeAttribute("disabled");   
  }
/**
 * Condicional para las últimas páginas.
 */
  //Condicional para que botones de ultimo y siguiente, se desactiven en pagina última.
  if (paginaActual===paginasTotales){
    btnFin.setAttribute("disabled",true);
    btnSiguiente.setAttribute("disabled",true);
  }else if(paginaActual=== paginasTotales-1){
    btnFin.setAttribute("disabled",true);
    btnSiguiente.removeAttribute("disabled");
  }else{
    btnFin.removeAttribute("disabled");
    btnSiguiente.removeAttribute("disabled");
  }
}
//Función que dirige la págiancion a la primera.
function irPrimera(){
  paginaActual=1;
  paginasContenido();
}

//Función que retrocede una página.
function pagAnterior(){
  if (paginaActual>1){
    paginaActual--;
    paginasContenido();
  }
}

//Función que avanza una página
function pagSiguiente(){
  if(paginaActual<obtenerPaginasTotales()){
    paginaActual++;
    paginasContenido();
  }
}
//Función que dirige a la última página.
function irUltima(){
  paginaActual=obtenerPaginasTotales();
  paginasContenido();
}

/**
 * EVENTOS.
 */

//Selector que ordena alfabeticament en orden ascendente.
selectorOrden.addEventListener("change", () => {
    if (selectorOrden.value=="asc"){
        ordenAscendente();
    }
    if (selectorOrden.value =="desc"){
      ordenarDescendente();
    }
});

//Botón que activa la función "buscarNombre".
btnBuscar.addEventListener("click", ()=>{
  buscarNombre();
})

//Boton que dirige a la primera página.
btnInicio.addEventListener("click",()=>{
  irPrimera();
})
//Boton que actica la funcion "pagAnterior()".
btnAtras.addEventListener("click",()=>{
  pagAnterior()
})
//Boton que actica la funcion "pagSiguiente()".
btnSiguiente.addEventListener("click",()=>{
  pagSiguiente()
})
//Boton que actica la funcion " irUltima()".
btnFin.addEventListener("click",()=>{
  irUltima()
})


//Función que extrae datos de la Apis.
async function extraerDatos(){

  try {
    let  response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

/**
 * Llamamos a la función iniciarapp
 * para la extracción de datos y imprimacion de la tabla.
 */
iniciarApp();

console.log("que le ocurre");
// OFFSET = (PAG-1)*LIMIT SACAR PAGINAS PAGES=COUNT/LIMIT Y REDODNEAR HACIA ARRIBA
//Gate
let tableBody = document.getElementById("resultado");
let inputBuscarNombre = document.getElementById("inputBusqueda");
let selectorOrden = document.getElementById("orden");
let selectorTamaño = document.getElementById("tamaño");
let btnBuscar = document.getElementById("btnBuscar");
let btnInicio = document.getElementById("principio");
let btnAtras = document.getElementById("prev");
let btnSiguiente = document.getElementById("next");
let btnFin = document.getElementById("ultima");
let spinner = document.getElementById("spinner");
let contadorPaginas = document.getElementById("numeroPaginas");
let recargar = document.getElementById("recargar");

//Array para almacenar los datos extraídos.
// let dataArray = []; //APIDEJODEFUNCIONAR
let dataArray = [
  { name: "Shoyo Hinata", email: "hinata@karasuno.jp", address: { city: "Miyagi" } },
  { name: "Tobio Kageyama", email: "kageyama@karasuno.jp", address: { city: "Kitagawa Daiichi" } },
  { name: "Daichi Sawamura", email: "daichi@karasuno.jp", address: { city: "Miyagi" } },
  { name: "Kosshi Sugawara", email: "sugawara@karasuno.jp", address: { city: "Miyagi" } },
  { name: "Asahi Azumane", email: "asahi@karasuno.jp", address: { city: "Akita" } },
  { name: "Yu Nishinoya", email: "nishinoya@karasuno.jp", address: { city: "Chiba" } },
  { name: "Kei Tsukishima", email: "tsukishima@karasuno.jp", address: { city: "Sendai" } },
  { name: "Tadashi Yamaguchi", email: "yamaguchi@karasuno.jp", address: { city: "Miyagi" } },
  { name: "Toru Oikawa", email: "oikawa@aoba-johsai.jp", address: { city: "Aoba Johsai" } },
  { name: "Hajime Iwaizumi", email: "iwaizumi@aoba-johsai.jp", address: { city: "Miyagi" } }
];



//Variables de paginación.
let paginaActual = 1;
let cantidadPorPagina = 1;

/**
 * LA API HA DEJADO DE FUNCIONAR
 * SE COMENTO "EXTRAERDATOS"
 * TAMBIEN LA RAID PRINCIPAL QUE USA LA API.
 * FUNCINA CORRECTAMENTE LOS SELECTORES 
 */

/**
 * FUNCIONES
 */
//<------------------FUNCIONES QUE MODIFICAN LA TABLA-------->

//Función que inicia la app, pintando la tabla y guardando los datos extraídos.
async function iniciarApp() {
  dataArray = await extraerDatos();
  // crearTabla(dataArray); //quitamos crear tabla y metemos la funcion de la paginacion
  cambiarTamaño();
  paginasContenido();
}
//Función para recargar la api donde la volvemos a llamar.
async function recargarApi(){
  paginaActual=1;
  dataArray =  await extraerDatos();
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

//Función que cambia el tamaño de la tabla.
function cambiarTamaño(){
  return cantidadPorPagina = parseInt(selectorTamaño.value);
}

//Función que ordena los datos por alfabeticamente.
function  ordenAscendente(){
  tableBody.innerHTML ="";
  let copiadataArray = [];
  copiadataArray = dataArray;
  copiadataArray.sort((a,b) => a.name.localeCompare(b.name));
  paginasContenido(copiadataArray);
  
}

//Función que ordena los dato alfabeticamente de forma descendente.
function ordenarDescendente(){
  tableBody.innerHTML ="";
  let copiadataArray = [];
  copiadataArray = dataArray;
  copiadataArray.sort((a,b) => b.name.localeCompare(a.name));
  paginasContenido(copiadataArray);
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

//Función que muestra el spinner
function mostrarSpinner() {
  spinner.style.display = "block";
}

//función que desabilita el spinner
function ocultarSpinner() {
  spinner.style.display = "none";
}


//<----------------FUNCIONES DE PAGINACIÓN.------->

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
  actualizarnumeroPaginas();
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

//Función que imprime los números de página.
function actualizarnumeroPaginas() {
  let totalPaginas = obtenerPaginasTotales();
  contadorPaginas.textContent = `Página ${paginaActual} de ${totalPaginas}`;
}

/**
 * EVENTOS.
 */

//Botón que activa la función "buscarNombre".
btnBuscar.addEventListener("click", ()=>{
  buscarNombre();
});

//Selector que cambia el valor del tamaño de la tabla.
selectorTamaño.addEventListener("change", ()=>{
  cambiarTamaño();
  paginaActual = 1;
  paginasContenido();


});

//Selector que ordena alfabeticament en orden ascendente.
selectorOrden.addEventListener("change", () => {
    if (selectorOrden.value=="asc"){
        ordenAscendente();
    }
    if (selectorOrden.value =="desc"){
      ordenarDescendente();
    }
});

//Boton que dirige a la primera página.
btnInicio.addEventListener("click",()=>{
  irPrimera();
});

//Boton que actica la funcion "pagAnterior()".
btnAtras.addEventListener("click",()=>{
  pagAnterior()
});

//Boton que actica la funcion "pagSiguiente()".
btnSiguiente.addEventListener("click",()=>{
  pagSiguiente()
});

//Boton que actica la funcion " irUltima()".
btnFin.addEventListener("click",()=>{
  irUltima()
});


//Función que extrae datos de la Apis. //LA API DEJO DE FUNCIONAR CREANDO ALTERNATIVA 
// async function extraerDatos(){

//   try {
//     mostrarSpinner();
//     let  response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     ocultarSpinner();
    
//     return data;
//   } catch (error) {
//     console.error("Error al obtener datos:", error);
//   }
// };

/**
 * Llamamos a la función iniciarapp
 * para la extracción de datos y imprimacion de la tabla.
 */
iniciarApp();

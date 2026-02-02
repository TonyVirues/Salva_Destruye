//Gate.
let btnClick = document.getElementById("btn-click");
let numClicks = document.getElementById("num-clicks");
let colorSeccion = document.getElementById("titulo");
// let changeBackground = document.getElementById("fondo");
let btnColor = document.getElementById("btn-colorSeccionRandom");
let btnBgColor = document.getElementById("btn-colorFondoRandom");
let btnUp = document.getElementById("btnArriba");
let barProgeso = document.getElementById("barProgreso");
let mensajeHora = document.getElementById("saludarHora");
let selecTipo =  document.getElementById("selectorTipografia");
let selecTama =  document.getElementById("selectorTamaño");
let btnStartLeer = document.getElementById("startVoz");
let btnStopLeer = document.getElementById("stopVoz");
//Variable.
let clicks = 0;
let cuerpoP = document.body;
let leer;

//Comprobación que la web permite lectura por voz.
if (!("speechSynthesis" in window)) {
    alert("Tu navegador no soporta la lectura en voz.");
}

/**
 * FUNCIONES------>
 */

//Función que genera un color aleatorio.
function generadorColorAleatorio(){
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let yellow = Math.floor(Math.random()*256);
    return `rgba(${red}, ${blue}, ${yellow})`;
};

//Función que muestra el porcentaje de la página en barra.
function cargaBarraProgreso(){
    let scrollTop = window.scrollY;
    let alturaDocumento = document.documentElement.scrollHeight;
    let alturaVentana = window.innerHeight;

    let scrollTotal = alturaDocumento - alturaVentana;
    let porcentaje = (scrollTop / scrollTotal) * 100;

    barProgeso.style.width = `${porcentaje}%`;
};

//Función para enviar un mensaje segun la hora.
function saludosHoras (){
    let horaActual= new Date().getHours();
    if(horaActual>= 6 && horaActual<11){
        mensajeHora.innerHTML = `Creo que necesitas un café, yo también.`
    }else if(horaActual>=11 && horaActual<15){
        mensajeHora.innerHTML = `Tengo hambre.`
    }else if (horaActual>=15 && horaActual<20){
        mensajeHora.innerHTML = `Llego la tarde, toca merendar y jugar voley.`
    }else if(horaActual>=20 && horaActual<22){
        mensajeHora.innerHTML = `Prepara la cena, cama y a dormir.`
    }
};

//Función obtener texto de la página.
function obtenerTextoPagina(){
    return document.body.innerHTML;
};

//Función pra cambiar tamaño de texto de la página.
function cambiarTamaTexto(){
    let valorElegido = selecTama.value;
    if (valorElegido === "pequeño"){
        cuerpoP.style.fontSize = "14px";
    }else if(valorElegido === "mediano"){
        cuerpoP.style.fontSize = "20px";
    }else if(valorElegido === "grande"){
        cuerpoP.style.fontSize = "40px";
    };

};
function cambiarTipografia(){
    let valorElegido = selecTipo.value;
    let fuente = "";
    if (valorElegido === "courier"){
        fuente= "'Courier New', Courier, monospace";
    }else if(valorElegido === "verdana"){
        fuente = "Verdana,Geneva, Tahoma, sans-serif";
    }else if(valorElegido === "impact"){
        fuente = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
    }
    document.documentElement.style.setProperty('--tipografia-versatil', fuente);
}
//Función para reproducir lectura de la página.
function leerPagina(){ 
    window.speechSynthesis.cancel();
    let obtenerTexto = obtenerTextoPagina();
    leer = new SpeechSynthesisUtterance(obtenerTexto);
    leer.lang = "es-ES";
    leer.rate = 1;
    leer.pitch = 1;
    window.speechSynthesis.speak(leer);
};

//Función para detener la lectura.
function pararLectura(){
    window.speechSynthesis.cancel();

};

/**
 * EVENTOS
 */

//Evento para hacer desaparecer btnUp.
window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        btnUp.style.display = "block";
    }else{
        btnUp.style.display = "none";
    }
});

//Evento que carga la funcion "cargaBarraProgreso".
window.addEventListener("scroll",()=>{
    cargaBarraProgreso();
});

//Evento que muestra el mensaje al cargar el DOM.
document.addEventListener("DOMContentLoaded",()=>{
    saludosHoras();
});

//Selector que cambia el tamaño de texto.
selecTama.addEventListener("change", cambiarTamaTexto);

//Selector que cambia la tipografia de texto.
selecTipo.addEventListener("change",cambiarTipografia);

//Botón que genera un color aleatorio de una sección.
btnColor.addEventListener("click",()=>{
    let colorAleatorio = generadorColorAleatorio();
    colorSeccion.style.backgroundColor = colorAleatorio;
});

//Botón que genera un color de fondo aleatorio.
btnBgColor.addEventListener("click",()=>{
    let colorAleatorio = generadorColorAleatorio();
    cuerpoP.style.backgroundColor = colorAleatorio;

});

//Botón que activa la función de contar clicks.
btnClick.onclick = () => {
    if(clicks >=50){
        numClicks.innerHTML = `wow, llevas muchos clicks. ${++clicks}`;
        console.log("aqui no entra");
    } else{

        numClicks.innerHTML = `Llevas estos clicks: ${++clicks}`;
    }


};

//Botón que activa la función leer página web.
btnStartLeer.addEventListener("click",leerPagina);

//Botón que parar la función leer página web.
btnStopLeer.addEventListener("click",pararLectura);

//Scroll suave.
btnUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//Código javascript de boostrap para cambiar el fondo.
document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.getElementById('darkModeToggle');
    let htmlElement = document.documentElement;

    // Función para aplicar el tema.
    let applyTheme = (theme) => {
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        if (toggle) toggle.checked = (theme === 'dark');
    };

    // 1. Detectar tema inicial.
    let savedTheme = localStorage.getItem('theme');
    let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Aplicamos el guardado o el del sistema.
    applyTheme(savedTheme || systemTheme);

    // 2. Escuchar el click del usuario.
    if (toggle) {
        toggle.addEventListener('change', () => {
            let newTheme = toggle.checked ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

});

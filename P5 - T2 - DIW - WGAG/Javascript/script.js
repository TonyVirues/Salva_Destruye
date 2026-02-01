//Gate.
let btnClick = document.getElementById("btn-click");
let numClicks = document.getElementById("num-clicks");
let colorSeccion = document.getElementById("titulo");
let btnColor = document.getElementById("btn-colorRandom");
let btnUp = document.getElementById("btnArriba");
let barProgeso = document.getElementById("barProgreso");
let mensajeHora = document.getElementById("saludarHora");
//Variable que guarda los clicks.
let clicks = 0;

/**
 * FUNCIONES------>
 */

//Función que cambia el color de fondo de una sección.
function generadorColorAleatorio(){
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let yellow = Math.floor(Math.random()*256);
    return `rgba(${red}, ${blue}, ${yellow}`;
};

//Función que muestra el porcentaje de la pagina en barra.
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

/**
 * Eventos
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

//Botón que genera un color aleatorio de una sección.
btnColor.addEventListener("click",()=>{
    let colorAleatorio = generadorColorAleatorio();
    colorSeccion.style.backgroundColor = colorAleatorio;
});

//Botón que activa la funcion de contar clicks.
btnClick.onclick = () => {
    numClicks.innerHTML = `Llevas estos clicks: ${++clicks}`;

};

//Scroll suave
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

    // Función para aplicar el tema
    let applyTheme = (theme) => {
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        if (toggle) toggle.checked = (theme === 'dark');
    };

    // 1. Detectar tema inicial
    let savedTheme = localStorage.getItem('theme');
    let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Aplicamos el guardado o el del sistema
    applyTheme(savedTheme || systemTheme);

    // 2. Escuchar el click del usuario
    if (toggle) {
        toggle.addEventListener('change', () => {
            let newTheme = toggle.checked ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

});

mostrarSaludo();
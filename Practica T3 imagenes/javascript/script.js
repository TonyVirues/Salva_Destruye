// Referencias a elementos del DOM No mires salva...no quiero que llores..
const rowsSelect = document.getElementById("rowsSelect");
const imageList = document.getElementById("imageList");

// Función para generar imágenes
function generarImagenes(cantidad) {
    imageList.innerHTML = ""; // Limpiar listado

    for (let i = 1; i <= cantidad; i++) {

        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

        const card = document.createElement("div");
        card.className = "card text-center h-100";

        // Cache-busting con timestamp
        const timestamp = new Date().getTime();

        const img = document.createElement("img");
        img.src = `https://picsum.photos/200/200?random=${i}&t=${timestamp}`;
        img.className = "card-img-top rounded-circle mx-auto mt-3";
        img.loading = "lazy";
        img.alt = `Imagen ${i}`;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h6");
        title.textContent = `Imagen ID: ${i}`;

        const desc = document.createElement("p");
        desc.className = "text-muted small";
        desc.textContent = "Imagen generada desde Picsum.photos";

        cardBody.appendChild(title);
        cardBody.appendChild(desc);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);

        imageList.appendChild(col);
    }
}

// Evento cambio selector
rowsSelect.addEventListener("change", () => {
    generarImagenes(rowsSelect.value);
});

// Generar imágenes iniciales
generarImagenes(rowsSelect.value);

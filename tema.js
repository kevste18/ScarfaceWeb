// Guardamos los elementos que vamos a usar mucho en variables
const marca = document.getElementById('marca');
const body = document.body;

// 1. Al cargar la página: Comprobamos qué tema estaba guardado
window.addEventListener("load", function() {
    const temaGuardado = localStorage.getItem("tema");
    
    if (temaGuardado === "tema-negro") {
        body.classList.add("tema-negro");
        marca.src = "images/MARCA_AGUA_AZUL.png";
    } else {
        marca.src = "images/MARCA_AGUA.png";
    }
});

// 2. Al hacer click en la marca: Cambiamos el tema
marca.addEventListener("click", function() {
    // toggle() quita la clase si la tiene, y la pone si no la tiene
    body.classList.toggle("tema-negro");

    // Después de cambiarla, comprobamos cómo ha quedado para guardar y cambiar la foto
    if (body.classList.contains("tema-negro")) {
        localStorage.setItem("tema", "tema-negro");
        marca.src = "images/MARCA_AGUA_AZUL.png";
    } else {
        localStorage.removeItem("tema"); // Volvemos al por defecto
        marca.src = "images/MARCA_AGUA.png";
    }
});

// 3. Efecto Hover (cuando el ratón entra en la imagen)
marca.addEventListener("mouseover", function() {
    if (body.classList.contains("tema-negro")) {
        marca.src = "images/MARCA_AGUA.png"; // Muestra la opuesta
    } else {
        marca.src = "images/MARCA_AGUA_AZUL.png"; // Muestra la opuesta
    }
});

// 4. Quitar Hover (cuando el ratón sale de la imagen)
marca.addEventListener("mouseout", function() {
    if (body.classList.contains("tema-negro")) {
        marca.src = "images/MARCA_AGUA_AZUL.png"; // Vuelve a su imagen normal de tema oscuro
    } else {
        marca.src = "images/MARCA_AGUA.png"; // Vuelve a su imagen normal de tema claro
    }
});
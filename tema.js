// Al cargar la página, aplica el tema guardado
const marca = document.getElementById('marca'); // Guarda la marca de agua en una variable.
window.addEventListener("load", function() { // Espera a que la página cargue completamente antes de ejecutar el código
    const temaGuardado = localStorage.getItem("tema"); // Busca en el local storage si hay un tema guardado.
    if (temaGuardado) {
        document.body.classList.add(temaGuardado); //Si encuentra el tema lo añade al body. 
        marca.src = "images/MARCA_AGUA_AZUL.png"; // Muestra la versión azul del logo (tema oscuro activo)
    } else {
        marca.src = "images/MARCA_AGUA.png"; // Como no encuentra ningun tema (null) muestra la versión normal del logo + el tema default que esta todo definido en el styles.css
    }
});

// Al hacer click en la imagen esquina, cambia el tema
document.getElementById("marca").addEventListener("click", function() { //Al hacer click en la marca de agua se ejecutara la siguiente funcion.
    const overlay = document.createElement('div'); //Se crea un div vacío que servirá como overlay de la transición.
    overlay.style.cssText = `
        position: fixed; 
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: black;
        opacity: 0;
        z-index: 99999;         
        transition: opacity 0.15s ease;
    `;
    document.body.appendChild(overlay); // Añade el overlay al DOM (ya existe en la página, pero invisible)

    requestAnimationFrame(() => { // Espera al próximo frame del navegador para iniciar la animación (evita que se salte)
        overlay.style.opacity = 1; //Hace que la pantalla se ponga negra
        setTimeout(() => {
            document.body.classList.toggle("tema-negro"); // Alterna la clase, si estaba el tema oscuro aplicado lo quita, si no lo añade.
            // Guarda el tema actual
            if (document.body.classList.contains("tema-negro")) { // Si el tema oscuro esta activo
                localStorage.setItem("tema", "tema-negro"); // Guarda el tema oscuro en el local storage.
            } else {
                localStorage.removeItem("tema"); //Elimina el tema oscuro para volver al default.
            }
            overlay.style.opacity = 0; // Inicia el fade-out: el overlay vuelve a ser invisible
            setTimeout(() => overlay.remove(), 150);  // Tras 150ms más (duración del fade-out), elimina el overlay del DOM
        }, 150);
    });
});

marca.addEventListener("mouseover", function() { //Cuando se pase el raton por encima de la marca de agua...
    if (document.body.classList.contains("tema-negro")) { // Si el tema actual es el oscuro
        marca.src = "images/MARCA_AGUA.png"; // Mostrara la marca de agua en rojo (la marca default)
    } else {
        marca.src = "images/MARCA_AGUA_AZUL.png";// Su el tema actual es el default mostrara la marca de agua azul.
    }
});

//Lo opuesto
marca.addEventListener("mouseout", function() { //Al quitar el raton de la marca de agua...
    if (document.body.classList.contains("tema-negro")) { //Si el tema es el oscuro
        marca.src = "images/MARCA_AGUA_AZUL.png"; //La marca de agua sera la oscura (azul)
    } else {
        marca.src = "images/MARCA_AGUA.png"; //Si el fondo es el default se quedara la marca default.
    }
});


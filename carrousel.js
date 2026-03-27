const fotos = [
    "images/gallery/img1.jpg",
    "images/gallery/img2.jpg",
    "images/gallery/img3.jpg",
    "images/gallery/img4.jpg",
    "images/gallery/img5.jpg",
    "images/gallery/img6.jpg",
    "images/gallery/img7.jpg",
    "images/gallery/img8.jpg",
    "images/gallery/img9.jpg",
    "images/gallery/img10.jpg",
    "images/gallery/img12.jpg",
    "images/gallery/img13.jpg",
    "images/gallery/img14.jpg",
    "images/gallery/img15.jpg",
    "images/gallery/img16.jpg"
];

let indice = 0; 

// 2. SELECCIÓN DE ELEMENTOS
const imagenMostrada = document.querySelector('.img');
const contenedorCarrusel = document.querySelector('.carrusel');

// 3. FUNCIONES
function cambiarFoto(direccion) {
    // A. Empezamos el desvanecimiento
    imagenMostrada.classList.add('transicion'); // Cambiado 'imagen' por 'imagenMostrada'

    // B. Esperamos a que sea invisible para cambiar la fuente
    setTimeout(function() {
        indice = indice + direccion;

        if (indice >= fotos.length) {
            indice = 0;
        } else if (indice < 0) {
            indice = fotos.length - 1;
        }

        imagenMostrada.src = fotos[indice]; // Cambiado 'imagen' por 'imagenMostrada'

        // C. Quitamos la clase para que vuelva a aparecer suavemente
        imagenMostrada.classList.remove('transicion'); // Cambiado 'imagen' por 'imagenMostrada'
    }, 300); 
}

// Eventos de los botones
document.getElementById('atras').onclick = function() { 
    cambiarFoto(-1); 
};

document.getElementById('adelante').onclick = function() { 
    cambiarFoto(1); 
};


// --- 3. ZOOM (IMAGEN GRANDE) ---
imagenMostrada.onclick = function() { // CAMBIO CLAVE: Antes ponía 'fotos.onclick'
    // Alternamos las clases en las variables correctas
    contenedorCarrusel.classList.toggle('grande'); // Cambiado 'carrusel' por 'contenedorCarrusel'
    document.documentElement.classList.toggle('no-scroll');
};
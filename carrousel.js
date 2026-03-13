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
let actual = 0; //Contador del array.
const esLandscape = () => window.innerHeight < 500 && window.innerWidth > window.innerHeight;

document.querySelector('.img').addEventListener('click', () => {
    if (esLandscape()) return;
    document.querySelector('.carrusel').classList.toggle('grande');
    document.documentElement.classList.toggle('no-scroll');
})

function mover(direccion) { // Función que avanza o retrocede
    if (esLandscape()) return;
    const img = document.querySelector('.img'); // Obtiene el elemento <img> con clase "img"
    img.style.opacity = 0; // Inicia el fade-out: hace la imagen invisible
    setTimeout(() => { // Espera 300ms (duración del fade-out) y luego...
        actual = (actual + direccion + fotos.length) % fotos.length; // Calcula el nuevo índice:
        // suma la dirección, añade fotos.length para evitar negativos, y usa % para que sea circular
        // Ej: si actual=0 y dirección=-1 → (0 + -1 + 15) % 15 = 14 → va a la última foto
        img.src = fotos[actual]; // Cambia la imagen al src correspondiente al nuevo índice
        img.style.opacity = 1; //Inicia el fade-in: hace la imagen visible de nuevo
    }, 300);
}

document.getElementById('atras').addEventListener('click', () => mover(-1));  // Click en "atrás" retrocede una foto
document.getElementById('adelante').addEventListener('click', () => mover(1)); // Click en "adelante" avanza una foto
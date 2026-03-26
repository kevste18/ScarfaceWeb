// 1. Contadores a 0
let puntos = { tony: 0, manny: 0, gina: 0, elvira: 0, frank: 0, sosa: 0, alberto: 0, omar: 0 };
let preguntaActual = 0;
let preguntas = document.querySelectorAll(".pregunta");

// 2. Función principal del test
function responder(personaje) {
    puntos[personaje]++; // Sumamos 1 punto al personaje elegido

    // Hacemos transparente la pregunta actual
    preguntas[preguntaActual].style.opacity = 0; 

    setTimeout(function() {
        preguntas[preguntaActual].classList.remove("activa"); // La ocultamos del todo
        preguntaActual++; // Pasamos al siguiente número

        if (preguntaActual < preguntas.length) {
            preguntas[preguntaActual].classList.add("activa"); // Mostramos la siguiente
        } else {
            mostrarResultado(); // Si no hay más, calculamos el final
        }
    }, 500);
}

// 3. Función para calcular y mostrar quién gana
function mostrarResultado() {
    let ganador = "tony"; // Empezamos asumiendo que es Tony

    // Comparamos los puntos de todos contra el ganador actual
    for (let personaje in puntos) { 
        if (puntos[personaje] > puntos[ganador]) { 
            ganador = personaje; // Si alguien tiene más puntos, se convierte en el nuevo ganador
        }
    }

    // Un "diccionario" simple con los nombres reales y los nombres de las fotos
    let datos = {
        tony: { nombre: "Tony Montana", foto: "Tony.jpg" },
        manny: { nombre: "Manny Ribera", foto: "Manny.jpg" },
        gina: { nombre: "Gina Montana", foto: "Gina.jpg" },
        elvira: { nombre: "Elvira Hancock", foto: "Elvira.jpg" },
        frank: { nombre: "Frank Lopez", foto: "Frank.jpg" },
        sosa: { nombre: "Alejandro Sosa", foto: "Sosa.jpg" },
        alberto: { nombre: "Alberto", foto: "Alberto.jpg" },
        omar: { nombre: "Omar Suarez", foto: "Omar.jpg" }
    };

    // Actualizamos el HTML concatenando texto y variables
    document.getElementById("resultado").innerText = "Eres " + datos[ganador].nombre;

    let imagenHTML = document.getElementById("imagenPersonaje"); 
    imagenHTML.src = "images/characters/" + datos[ganador].foto; // Unimos la ruta con el nombre de la foto
    imagenHTML.alt = datos[ganador].nombre; 
    imagenHTML.style.display = "block"; // Mostramos la imagen
}
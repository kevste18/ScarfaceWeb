//Lista de objetos que guarda los puntos acumulados de cada personaje, empiezan en 0.
let puntos = {
    tony: 0,
    manny: 0,
    gina: 0,
    elvira: 0,
    frank: 0,
    sosa: 0,
    alberto: 0,
    omar: 0
};

let preguntaActual = 0;  // Índice de la pregunta que se está mostrando.
let preguntas = document.querySelectorAll(".pregunta");  // Coge todos los elementos con clase "pregunta" del HTML.
let transicionando = false; // Bandera para evitar que el usuario haga click durante la animación

function responder(personaje, boton) {

    if (transicionando) return; // Si ya hay una animación en curso, ignora el click y no hace nada
    transicionando = true; // Bloquea futuros clicks mientras dura la transición

    puntos[personaje]++; // Suma 1 punto al personaje elegido (ej: puntos["tony"]++)

    let actual = preguntas[preguntaActual]; // Guarda la pregunta actual en una variable
    actual.style.opacity = 0; // Inicia el fade-out de la pregunta actual

    setTimeout(() => { // Espera 500ms (duración del fade-out) y luego...

        actual.classList.remove("activa");  // Oculta la pregunta actual quitándole la clase "activa"
        preguntaActual++; // Avanza al índice de la siguiente pregunta

        if (preguntaActual < preguntas.length) { // Si aún quedan preguntas...
            preguntas[preguntaActual].classList.add("activa"); //...muestra la siguiente añadiéndole "activa"
            preguntas[preguntaActual].offsetHeight; // Fuerza reflow para que la transición CSS se reinicie correctamente
            transicionando = false; // Desbloquea los clicks de nuevo
        } else { //Si ya no quedan preguntas...
            mostrarResultado(); // ...calcula y muestra el resultado final
        }
    }, 500);

}

function mostrarResultado() {

    let ganador = "tony"; // Empieza asumiendo que tony tiene más puntos (necesita un punto de partida)

    for (let personaje in puntos) { // Recorre cada personaje del objeto puntos
        if (puntos[personaje] > puntos[ganador]) { // Si este personaje tiene más puntos que el ganador actual...
            ganador = personaje; // ...lo reemplaza como ganador
        }
    }

    const resultados = { // Objeto que relaciona cada personaje con su texto e imagen de resultado
        tony: { texto: "Eres Tony Montana", imagen: "images/characters/Tony.jpg" },
        manny: { texto: "Eres Manny Ribera", imagen: "images/characters/Manny.jpg" },
        gina: { texto: "Eres Gina Montana", imagen: "images/characters/Gina.jpg" },
        elvira: { texto: "Eres Elvira Hancock", imagen: "images/characters/Elvira.jpg" },
        frank: { texto: "Eres Frank Lopez", imagen: "images/characters/Frank.jpg" },
        sosa: { texto: "Eres Alejandro Sosa", imagen: "images/characters/Sosa.jpg" },
        alberto: { texto: "Eres Alberto", imagen: "images/characters/Alberto.jpg" },
        omar: { texto: "Eres Omar Suarez", imagen: "images/characters/Omar.jpg" }
    };

    const { texto, imagen } = resultados[ganador]; // Destructuring: extrae texto e imagen del ganador en dos variables directamente

    document.getElementById("resultado").innerText = texto; // Escribe el texto del resultado en el HTML

    let img = document.getElementById("imagenPersonaje"); // Coge el elemento imagen del HTML
    img.src = imagen;// Le asigna la imagen del personaje ganador
    img.alt = texto; // Le asigna el texto como descripción alternativa (accesibilidad)
    img.style.display = "block";  // La hace visible (por defecto estaba oculta con display:none)

}
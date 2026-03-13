// Solo ejecuta el código si el dispositivo no soporta hover (móvil/tablet)
if (window.matchMedia("(hover: none)").matches) {

    // Selecciona todas las tarjetas del DOM
    const cards = document.querySelectorAll(".card");

    // Recorre cada tarjeta y le añade un listener de click
    cards.forEach(card => {
        card.addEventListener("click", (e) => {

            // Comprueba si la tarjeta clicada ya estaba girada antes de hacer nada
            const yaEstabaGirada = card.classList.contains("flipped");

            // Cierra todas las tarjetas quitándoles la clase "flipped"
            cards.forEach(c => c.classList.remove("flipped"));

            // Si la tarjeta no estaba girada, la gira añadiéndole la clase "flipped"
            if (!yaEstabaGirada) {
                card.classList.add("flipped");
            }
        });
    });
}
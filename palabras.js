//Declaramos una variable frases que contiene la lista de frases//
const frases = [
    "The World is Yours",
    "Say Hello to my little friend!",
    "Every day above ground is a good day",
    "I always tell the truth. Even when I lie",
    "Who do I trust? Me",
    "Make way for the bad guy",
    "Lesson number two: Don't get high on your own supply",
    "First you get the money, then you get the power, then you get the women",
    "This is paradise. I'm telling you",
    "Sky’s the limit"
];

//Declaramos la variable índice, indica que frase mostrar del array
let indice = 0;

const palabra = document.getElementById('palabra');

function mostrar(){
    palabra.style.animation = 'none';
    palabra.offsetHeight;
    palabra.style.animation = 'aparecer 0.4s ease';
    palabra.textContent = frases[indice];
    indice = (indice + 1) % frases.length;
}

palabra.onclick = mostrar;
mostrar(); //Llamamos a la función mostrar para que aparezca "The World is Yours" por defecto en el índice


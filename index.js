//Se mejora el color y se separan los elementos que componen cada una de las cartas.

//Variables
const fila1 = document.querySelector("#mySection");
const fila2 = document.querySelector("#mySection2");
const numerosCartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; //el As es el 14, no el primero (1)
const pintas = ["♠", "♥", "♦", "♣"];

const theInput = document.querySelector("input");
const genera = document.querySelector("#draw");
const BUBBLE = document.querySelector("#bubble");

//Funcion para generar cartas
function createCard(event) {
    event.preventDefault();

    //Reinicia la seccion donde se pintan las cartas (limpia-en blanco)
    fila1.innerHTML = "";

    //Array de objetos carta
    let cards = [];

    //Bucle para iterar sobre el valor del input
    for (let i = 0; i < theInput.value; i++) {
        cards.push(generaCarta());
    }
    return cards;
}

function generaCarta(family = null, number = null) {

    //Crea un objeto carta
    let card;

    if (family == null || number == null) {
        card = {
            suit: pintas[getRandom(pintas)],
            value: numerosCartas[getRandom(numerosCartas)],
            index: null
        };
    } else {
        card = {
            suit: family,
            value: number,
            index: null
        };
    }

    card.index = card.value;

    //Reemplaza los numeros 11,12,13,14 por J,Q,K,A
    if (card.value == 14) {
        card.value = "A";
    }
    if (card.value == 11) {
        card.value = "J";
    }
    if (card.value == 12) {
        card.value = "Q";
    }
    if (card.value == 13) {
        card.value = "K";
    }

    //Contiene la carta entera
    let generaCarta = document.createElement("div");
    generaCarta.classList.add("poker-card");

    //Crea el icono de arriba
    let firstSuitContainer = document.createElement("div");
    let firstSuit = document.createTextNode(card.suit);
    firstSuitContainer.appendChild(firstSuit);
    firstSuitContainer.classList.add("align-start");
    generaCarta.appendChild(firstSuitContainer);

    //Crea el numero
    let valueContainer = document.createElement("div");
    let value = document.createTextNode(card.value);
    valueContainer.classList.add("card-value");
    valueContainer.appendChild(value);
    generaCarta.appendChild(valueContainer);

    //Crea el icono de abajo
    let secondSuitContainer = document.createElement("div");
    let secondSuit = document.createTextNode(card.suit);
    secondSuitContainer.appendChild(secondSuit);
    secondSuitContainer.classList.add("align-end");
    secondSuitContainer.classList.add("invert");
    generaCarta.appendChild(secondSuitContainer);

    //Pinta rojo o negro dependiendo del suit
    if (card.suit == "♥" || card.suit == "♦") {
        firstSuitContainer.classList.add("red");
        valueContainer.classList.add("red");
        secondSuitContainer.classList.add("red");
    } else {
        firstSuitContainer.classList.add("black");
        valueContainer.classList.add("black");
        secondSuitContainer.classList.add("black");
    }

    if (family == null || number == null) {
        fila1.appendChild(generaCarta);
        return card;
    } else {
        fila2.appendChild(generaCarta);
    }
}

function bubbleSort(conjuntoDeCartas) {
    for (var i = 0; i < conjuntoDeCartas.length; i++) {
        for (var j = 0; j < conjuntoDeCartas.length - i - 1; j++) {
            if (conjuntoDeCartas[j].index > conjuntoDeCartas[j + 1].index) {
                var temp = conjuntoDeCartas[j];
                conjuntoDeCartas[j] = conjuntoDeCartas[j + 1];
                conjuntoDeCartas[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < conjuntoDeCartas.length; i++) {
        generaCarta(conjuntoDeCartas[i].suit, conjuntoDeCartas[i].value);
    }
}

function getRandom(list) {
    return Math.floor(Math.random() * list.length);
}

window.onload = function () {
    //Pintar el fondo de verde
    fila1.classList.add("background");
    fila2.classList.add("background");
    let conjuntoDeCartas = [];

    //Evento de Draw
    genera.addEventListener("click", event => {
        conjuntoDeCartas = createCard(event);
        fila2.innerHTML = "";
    });

    //Evento de bubble sort
    BUBBLE.addEventListener("click", event => {
        fila2.innerHTML = "";
        bubbleSort(conjuntoDeCartas);
    });

    //Evento de selection sort
    SELECTION.addEventListener("click", event => {
        fila2.innerHTML = "";
        selectionSort(conjuntoDeCartas);
    });
};
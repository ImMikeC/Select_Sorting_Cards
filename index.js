let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let pinta = [
    '<span >♠</span>',
    '<span>♣</span>',
    '<span class="text-danger">♦</span>',
    '<span class="text-danger">♥</span>']

const laCarta = (arr) => {

    let arraytemp = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= numeros.length - 1; j++) {
            let icon = pinta[Math.floor(Math.random() * pinta.length)];
            if (arr[i] == j) {
                let numeroCarta = []
                arraytemp[i] = numeros[j];
                numeroCarta.push(arraytemp[i], icon);
                arraytemp[i] = numeroCarta
            }
        }
    }
    return arraytemp;
}

let arrDraw = miConjunto = [];

const aleatorioDeCartas = (num) => {
    let randomCards = [];

    for (let i = 0; i < num; i++) {
        let alAzar = Math.floor(Math.random() * numeros.length);
        randomCards[i] = alAzar;
    }

    return randomCards;
}

document.getElementById('botonUno').addEventListener('click', () => {
    let conjuntoAlAzar = aleatorioDeCartas(document.getElementById('inputCantidadCartas').value);
    let drawArray = null;
    let aleatorioDeck = document.querySelector("#aleatorioDeck");
    document.querySelector("#cartasOrdenadas").innerHTML = "";
    aleatorioDeck.innerHTML = "";

    for (let i = 0; i < conjuntoAlAzar.length; i++) {
        drawArray = conjuntoAlAzar
    }
    arrDraw = drawArray;

    let name = laCarta(arrDraw);
    console.log(name);

    for (let k = 0; k < arrDraw.length; k++) {

        let cuerpoCarta = name[k][0]
        let cardIcon = name[k][1]

        let carta = document.createElement('div');

        carta.classList.add(
            "laCarta",
            "d-flex",
            "flex-column",
            "justify-content-center",
            "align-items-center",
            "justify-content-between",
            "m-2",);

        carta.innerHTML =
            `<div class="w-100">
        <div class="pintaSuperior icon">${cardIcon}</div>
        </div>            
            <span class="display-7" id="cuerpoCarta">${cuerpoCarta}</span>              
        <div class="w-100">
        <div class="pintaInferior girar180grados icon">${cardIcon}</div></div>`;

        aleatorioDeck.appendChild(carta)
    }
});

document.getElementById('botonDos').addEventListener('click', () => {
    let conjuntoAlAzar = arrDraw;
    let cartasOrdenadas = document.querySelector("#cartasOrdenadas");
    let contador = 0;
    for (let i = 0; i < conjuntoAlAzar.length; i++) {
        for (let j = 0; j < conjuntoAlAzar.length - 1; j++) {
            if (conjuntoAlAzar[j] > conjuntoAlAzar[j + 1]) {
                let temp = conjuntoAlAzar[j];
                conjuntoAlAzar[j] = conjuntoAlAzar[j + 1];
                conjuntoAlAzar[j + 1] = temp;

                miConjunto = conjuntoAlAzar;

                let name = laCarta(miConjunto);

                let cartasFila = document.createElement('div');
                cartasFila.classList.add("d-flex");
                let index = document.createElement('span');
                index.innerText = contador;
                cartasFila.appendChild(index);
                for (let k = 0; k < miConjunto.length; k++) {

                    let cuerpoCarta = name[k][0]
                    let cardIcon = name[k][1]

                    let carta = document.createElement('div');
                    carta.classList.add(
                        "laCarta",
                        "d-flex",
                        "flex-column",
                        "justify-content-center",
                        "align-items-center",
                        "justify-content-between",
                        "m-1");

                    carta.innerHTML = `<div class="w-100"><div class="pintaSuperior icon">${cardIcon}</div></div>            
                            <span class="display-7" id="cuerpoCarta">${cuerpoCarta}</span>              
                        <div class="w-100"><div class="pintaInferior girar180grados icon">${cardIcon}</div></div>`;
                    cartasFila.appendChild(carta)

                }
                contador += 1;
                cartasOrdenadas.appendChild(cartasFila)

            }
        }

    }

});
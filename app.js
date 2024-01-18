let numeroSecreto = 0;
let numeroMaximo = 10;
let intentos = 1;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
  numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto actualizado");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos > 1 ? "veces" : "vez"}`
    );
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

condicionesIniciales();

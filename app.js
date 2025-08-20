let nombres = [];

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista

  nombres.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function agregarAmigo() {
  let nombreInput = document.getElementById("amigo");
  let nombre = nombreInput.value.trim();
  if (nombre) {
    nombres.push(nombre);
    actualizarLista();
    nombreInput.value = ""; // Limpiar input
  } else {
    alert("Por favor, escribe un nombre.");
  }
}

function sortearAmigo() {
  if (nombres.length < 2) {
    alert("Debes ingresar al menos 2 amigos para sortear.");
    return;
  }

  let indice = Math.floor(Math.random() * nombres.length);
  let nombreSorteado = nombres[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultado anterior

  let li = document.createElement("li");
  li.textContent = `Amigo secreto: ${nombreSorteado}`;
  resultado.appendChild(li);
}

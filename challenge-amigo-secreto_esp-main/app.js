let nombres = [];

function agregarAmigo() {             
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor escribe un nombre.');
        return;
    }

    nombres.push(nombre);

    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = '';
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert('No hay nombres.');
        return;
    }

    let indice = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indice];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>el ganador es: <strong>${ganador}</strong></li>`;
}

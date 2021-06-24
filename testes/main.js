/*
// Função que mostra o valor do input num alert
function mostrarValor() {
    alert(document.getElementById("meu-input").value);
}

// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("meu-input").onkeypress = function(e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        mostrarValor();
        e.preventDefault();
    }
}

// Evento que é executado ao clicar no botão de enviar
document.getElementById("meu-submit").onclick = function(e) {
    mostrarValor();
    e.preventDefault();
}
*/

var capturando = "";
function capturar () {
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
}

document.getElementById('jsP').innerHTML = '<b> Texto em negrito </b>'
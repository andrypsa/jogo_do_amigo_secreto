let listaDeNomes = [];

let lista = document.getElementById('listaAmigos');
let nomesInseridos = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let amigos = nomesInseridos.value.trim();
    if (amigos == '') {
        alert('Digite dois ou mais nomes');
        return;
    }
    if (listaDeNomes.includes(amigos)) {
        alert('Este nome já foi adicionado');
        nomesInseridos.value = '';
        return;
    }

    listaDeNomes.push(amigos);
    atualizarLista();
    nomesInseridos.value = '';
}

function atualizarLista() {
    lista.innerHTML = '';

    listaDeNomes.forEach(amigo => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    });
}

nomesInseridos.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});


function sortearAmigo() {
    if (listaDeNomes.length == 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * listaDeNomes.length);
    resultado.innerHTML = `Seu amigo secreto é: ${listaDeNomes[nomeSorteado]}`;

}
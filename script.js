var wellington = {nome:"Wellington", vitorias: 3, empates: 2, derrotas: 0, pontos: 0};
var lucas = {nome:"Lucas", vitorias: 2, empates: 2, derrotas: 0, pontos: 0};
var elaine = {nome:"Elaine", vitorias: 5, empates: 1, derrotas: 0, pontos: 0};

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    jogador.pontos = pontos;
    return pontos;
};

var jogadores = [wellington, lucas, elaine];
wellington.pontos = calculaPontos(wellington);
lucas.pontos = calculaPontos(lucas);
elaine.pontos = calculaPontos(elaine);

function mostrarJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "";
        elemento += "<tr>"
        elemento += "<td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    };
    document.getElementById("tabelaJogadores").innerHTML = elemento;
};

mostrarJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    mostrarJogadoresNaTela(jogadores);
};

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    mostrarJogadoresNaTela(jogadores);
};

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    mostrarJogadoresNaTela(jogadores);
};

var diego = {
  nome: "Diego",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var naty = {
  nome: "Naty",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var bia = {
  nome: "Bia",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var maju = {
  nome: "Maju",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();
function exibirNaTela() {
  elementoTabela.innerHTML = `
    <tr>
            <td>${diego.nome}</td>
            <td>${diego.vitoria}</td>
            <td>${diego.empate}</td>
            <td>${diego.derrota}</td>
            <td>${diego.pontos}</td>
            <td><button onClick="adicionarVitoria(diego)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(diego)">Empate</button></td>
            <td><button onClick="adicionarDerrota(diego)">Derrota</button></td>
          </tr>
`;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}
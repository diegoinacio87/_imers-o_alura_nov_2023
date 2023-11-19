const prompt = require('prompt-sync')();

var numeroSecreto = Math.floor(Math.random() * 1001); // Math.floor arredonda para baixo o número aleatório

while (true) {
    var chute = prompt('Digite um número entre 0 e 1000');

    if (chute === null) {
        alert('Jogo cancelado.');
        break; // Se o usuário cancelar, o loop é interrompido
    }

    chute = parseInt(chute); // Converter a entrada para um número

    if (chute === numeroSecreto) {
        alert('Parabéns, você acertou!');
        break; // Encerra o loop quando o número é acertado
    } else if (chute > numeroSecreto) {
        console.log('Errou. O número secreto é menor que ' + chute); //para o navegador utilizar alert para o visual console.log
    } else if (chute < numeroSecreto) {
        console.log('Errou. O número secreto é maior que ' + chute);
    }
}

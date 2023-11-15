const totalAttempts = 10;
const secretNumber = parseInt((Math.random() * 1000) + 1); // A secret number between 1 and 1000

function startGame() {
    alert("Olá, seja bem-vindo(a) ao Mentalista! Você será capaz de adivinhar o número secreto em um máximo de " + totalAttempts + " tentativas?");

    var playerName = prompt("Qual o seu nome?");

    alert("Vamos começar. Boa sorte, " + playerName + "!");

    var currentNumber = 0;
    var playerAttempts = 0;
    var remainingAttempts = 0;

    while(currentNumber !== secretNumber && currentNumber !== null && playerAttempts < totalAttempts) {
        playerAttempts++;
        remainingAttempts = totalAttempts - playerAttempts;
        currentNumber = prompt("Digite um número entre 1 e 1000:");
        if(currentNumber == secretNumber) {
            alert("Parabéns, você acertou! O número secreto era " + secretNumber + ".\r\nVocê fez um total de " + playerAttempts + " tentativas. Tchau.");
        }
        else if(currentNumber == null) {
            alert("Desistiu. O número secreto era " + secretNumber + ". Até a próxima!");
        }
        else if(playerAttempts == totalAttempts) {
            alert("Você esgotou o número total de tentativas! Fim de jogo.");
        }
        else if(currentNumber < secretNumber) {
            alert("Oops, você errou. O número é maior do que " + currentNumber + ". Restam " + remainingAttempts + " tentativa(s).");
        }
        else if(currentNumber > secretNumber) {
            alert("Oops, você errou. O número é menor do que " + currentNumber + ". Restam " + remainingAttempts + " tentativa(s).");
        }
    }
}
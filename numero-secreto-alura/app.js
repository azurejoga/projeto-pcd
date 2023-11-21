    //mensagem de boas vindas
    alert ("Olá, seja bem-vimdo(A) ao jogo Número Secreto!");
    // declarando variáveis
    let numeroSecreto = 17;
    console.log(numeroSecreto)
    let numeroChute;
    let tentativas = 1;
    // Bloco de repetições.
    while (numeroChute!=numeroSecreto){
        numeroChute = prompt("Escolha um número de 1 a 30");
        // comparando um chute com o núnero secreto e imprimindo o resultado na tela.
        if (numeroChute ==numeroSecreto) {
            alert(`Parabéns! Você ganhou o jogo do Número Secreto! com ${tentativas} tentativas`);
        }
        else if (numeroChute >numeroSecreto) {
            alert(`O número secreto é menor que o ${numeroChute}`);
        }
        else {
            alert(`O número secreto é maior que o ${numeroChute}`);
        }
        tentativas++;
    }

alert ("Olá, seja bem-vimdo(A) ao jogo Número Secreto!");
let numeroSecreto = 17;
console.log(numeroSecreto)
let numeroChute = prompt ("Escolha um número entre 1 e 30");
// comparando um chute com o núnero secreto.
if (numeroChute ==numeroSecreto) {
    alert("Parabéns! Você ganhou o jogo do Número Secreto");
}
else if (numeroChute >numeroSecreto) {
    alert(`O número secreto é menor que o ${numeroChute}`);
}
else {
    alert(`O número secreto é maior que o ${numeroChute}`);
}
function play(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultText = '';

    if (playerChoice === computerChoice) {
        resultText = `Empate! Ambos escolheram ${playerChoice}.`;
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        resultText = `Você ganhou! ${playerChoice} vence ${computerChoice}.`;
    } else {
        resultText = `Você perdeu! ${computerChoice} vence ${playerChoice}.`;
    }

    document.getElementById('resultText').innerText = resultText;
}

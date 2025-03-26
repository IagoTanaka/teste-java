

// Definição dos ícones das opções
const choices = {
    pedra: "✊",
    papel: "✋",
    tesoura: "✌"
 };
 
 
 // Função para gerar escolha aleatória do computador
 function getComputerChoice() {
    const options = Object.keys(choices);
    return options[Math.floor(Math.random() * options.length)];
 }
 
 
 // Função para determinar o vencedor
 function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "🤝 Empate!";
    }
 
 
    const winConditions = {
        pedra: "tesoura",
        papel: "pedra",
        tesoura: "papel"
    };
 
 
    return winConditions[playerChoice] === computerChoice
        ? "🎉 Você venceu!"
        : "😢 Você perdeu!";
 }
 
 
 // Função para executar o jogo
 function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
 
 
    // Atualiza os resultados na tela
    document.getElementById('playerChoice').innerText = `👤 Você escolheu: ${choices[playerChoice]}`;
    document.getElementById('computerChoice').innerText = `🤖 Computador escolheu: ${choices[computerChoice]}`;
    document.getElementById('outcome').innerText = result;
 }
 
 
 // Adiciona eventos aos botões
 document.getElementById('pedra').addEventListener("click", () => playGame("pedra"));
 document.getElementById('papel').addEventListener("click", () => playGame("papel"));
 document.getElementById('tesoura').addEventListener("click", () => playGame("tesoura"));
 
 
 // Evento para resetar o jogo
 document.getElementById('reset').addEventListener("click", () => {
    document.getElementById('playerChoice').innerText = "Escolha uma opção! 🎮";
    document.getElementById('computerChoice').innerText = "";
    document.getElementById('outcome').innerText = "";
 });
 
 
 
 
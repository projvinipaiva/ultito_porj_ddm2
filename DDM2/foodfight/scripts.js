let options = [
  "Afiação",
  "Proteção",
  "Afiada",
  "Destruição",
  "Espinhos",
  "Unbreaking",
  "Fortuna",
  "Toque Suave",
  "Poder",
  "Flecha Flamejante",
  "Rapidez",
 "Multishot",
  "Precisão",
 "Leveza",
  "Respiração",
 "Atenção",
 "Manto de Fogo",
 "Aguça",
 "Sorte do Mar",
 "Força",
 "Mending",
 "Lealdade",
 "Impulsão",
 "Channeling",
 "Caminho do Fogo",
 "Vingança",
 "Silêncio",
 "Destruição",
 "Escudo",
 "Cura Rápida",
 "Visão Noturna",
 "Agressão", 
];

let currentRound = [];
let winners = [];
let currentIndex = 0;
let roundNumber = 1;

// Função para iniciar o jogo
function startGame() {
  roundNumber = 1; // Reinicia o número da rodada
  updateRoundDisplay(); // Atualiza a exibição da rodada
  document.querySelector(".home").classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
  startRound();
}

// Função para iniciar uma nova rodada
function startRound() {
  if (options.length === 1) {
    showWinner(options[0]);
    return;
  }

  currentRound = [...options];
  winners = [];
  currentIndex = 0;
  updateRoundDisplay(); // Atualiza a exibição da rodada
  showOptions();
}

// Função para exibir as opções atuais
function showOptions() {
  if (currentIndex >= currentRound.length) {
    options = [...winners];
    roundNumber++; // Incrementa o número da rodada
    startRound();
    return;
  }

  document.getElementById("option1").textContent = currentRound[currentIndex];
  document.getElementById("option2").textContent =
    currentRound[currentIndex + 1];

  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  option1.replaceWith(option1.cloneNode(true));
  option2.replaceWith(option2.cloneNode(true));

  document
    .getElementById("option1")
    .addEventListener("click", () => pickWinner(currentRound[currentIndex]));
  document
    .getElementById("option2")
    .addEventListener("click", () =>
      pickWinner(currentRound[currentIndex + 1])
    );
}

// Função para processar a escolha do vencedor
function pickWinner(winner) {
  winners.push(winner);
  currentIndex += 2;
  showOptions();
}

// Função para exibir o vencedor final
function showWinner(winner) {
  document.querySelector(".quiz").classList.add("hidden");
  document.querySelector(".winner").classList.remove("hidden");
  document.querySelector(".result").textContent = winner;
}

// Função para reiniciar o jogo
function restartGame() {
  roundNumber = 1;
  options = [
    "Afiação",
    "Proteção",
    "Afiada",
    "Destruição",
    "Espinhos",
    "Unbreaking",
    "Fortuna",
    "Toque Suave",
    "Poder",
    "Flecha Flamejante",
    "Rapidez",
   "Multishot",
    "Precisão",
   "Leveza",
    "Respiração",
   "Atenção",
   "Manto de Fogo",
   "Aguça",
   "Sorte do Mar",
   "Força",
   "Mending",
   "Lealdade",
   "Impulsão",
   "Channeling",
   "Caminho do Fogo",
   "Vingança",
   "Silêncio",
   "Destruição",
   "Escudo",
   "Cura Rápida",
   "Visão Noturna",
   "Agressão", 
  ];

  document.querySelector(".winner").classList.add("hidden");
  document.querySelector(".home").classList.remove("hidden");
}

// Função para atualizar o número da rodada no DOM
function updateRoundDisplay() {
  document.getElementById("round-number").textContent = roundNumber;
}
